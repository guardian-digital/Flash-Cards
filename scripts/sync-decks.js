const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Read lib/data.ts
const dataPath = path.join(__dirname, '../lib/data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract DECKS array - find the opening bracket and the closing ]; before export function
const decksDeclMatch = dataContent.match(/export const DECKS[^=]*=\s*\[/);
if (!decksDeclMatch) {
  console.error('❌ Error: Could not find DECKS array declaration in lib/data.ts');
  process.exit(1);
}

// Find the position of the opening bracket
const startPos = decksDeclMatch.index + decksDeclMatch[0].length - 1;

// Find the ]; that comes before "export function"
const functionMatch = dataContent.match(/\n\s*export function/);
if (!functionMatch) {
  console.error('❌ Error: Could not find "export function" after DECKS array');
  process.exit(1);
}

// Find the ]; before the function
const beforeFunction = dataContent.substring(startPos, functionMatch.index);
const endMatch = beforeFunction.match(/\]\s*;[\s\n]*$/);
if (!endMatch) {
  console.error('❌ Error: Could not find closing ]; before export function');
  process.exit(1);
}

const endPos = startPos + endMatch.index; // Position of the closing bracket (not including ;)

// Extract the array content (just the array, no semicolon)
const arrayContent = dataContent.substring(startPos, endPos + 1);

// Debug: write extracted content to file for inspection (commented out)
// fs.writeFileSync(path.join(__dirname, '../debug-array.js'), arrayContent, 'utf8');

// Parse the TypeScript array to JavaScript object
let DECKS;
try {
  // Use vm.runInNewContext for safer evaluation
  // JavaScript supports single quotes, so this should work
  DECKS = vm.runInNewContext(`(${arrayContent})`, {}, { timeout: 5000 });
} catch (e) {
  console.error('❌ Error: Could not parse DECKS array:', e.message);
  console.error('   The TypeScript file may have syntax that eval cannot handle');
  // Show a snippet around where the error might be
  const errorPos = e.message.match(/position (\d+)/);
  if (errorPos) {
    const pos = parseInt(errorPos[1]);
    const start = Math.max(0, pos - 50);
    const end = Math.min(arrayContent.length, pos + 50);
    console.error(`   Content around error (pos ${pos}): ...${arrayContent.substring(start, end)}...`);
  } else {
    // Show first and last 100 chars
    console.error(`   First 100 chars: ${arrayContent.substring(0, 100)}...`);
    console.error(`   Last 100 chars: ...${arrayContent.substring(arrayContent.length - 100)}`);
  }
  process.exit(1);
}

// Convert to properly formatted JavaScript string using JSON.stringify
// This will properly escape double quotes but leave apostrophes alone
const decksJs = JSON.stringify(DECKS, null, 2);

// Read app.js
const appJsPath = path.join(__dirname, '../app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Find and replace DECKS array (match the entire var DECKS declaration)
const decksArrayMatch = appJs.match(/var DECKS = \[[\s\S]*?\];/);
if (!decksArrayMatch) {
  console.error('❌ Error: Could not find DECKS array in app.js');
  process.exit(1);
}

// Replace with new content
appJs = appJs.replace(/var DECKS = \[[\s\S]*?\];/, 'var DECKS = ' + decksJs + ';');

// Write back
fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('✅ Updated app.js with expanded DECKS array');

