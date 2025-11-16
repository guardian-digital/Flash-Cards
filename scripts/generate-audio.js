#!/usr/bin/env node

/**
 * Generate audio files for all flashcards using ElevenLabs API
 * 
 * Usage:
 *   1. Create .env file with: ELEVENLABS_API_KEY=your_key_here
 *   2. Optionally set: ELEVENLABS_VOICE_ID=your_voice_id (or uses default)
 *   3. Run: node scripts/generate-audio.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load .env file
require('dotenv').config();

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM'; // Default: Rachel
const API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

if (!API_KEY) {
  console.error('❌ Error: ELEVENLABS_API_KEY not found in .env file');
  console.error('   Create .env file with: ELEVENLABS_API_KEY=your_key_here');
  process.exit(1);
}

// Import card data - use require with ts-node or parse manually
// For simplicity, we'll parse the TypeScript file directly
const dataPath = path.join(__dirname, '../lib/data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Extract DECKS array - find the array content between brackets
// Match: export const DECKS: Deck[] = [ ... ];
const decksMatch = dataContent.match(/export const DECKS[^=]*=\s*(\[[\s\S]*?\]);/);
if (!decksMatch) {
  console.error('❌ Error: Could not parse DECKS from lib/data.ts');
  process.exit(1);
}

// Eval in safe context (only for data extraction)
// JavaScript supports single quotes, so eval should work directly
let DECKS;
try {
  DECKS = eval(`(${decksMatch[1]})`);
} catch (e) {
  console.error('❌ Error: Could not parse DECKS array:', e.message);
  console.error('   The TypeScript file may have syntax that eval cannot handle');
  process.exit(1);
}

// Get all unique cards (deduplicated by front text)
const allCards = [];
const seenFronts = new Set();
for (const deck of DECKS) {
  for (const card of deck.cards) {
    if (!seenFronts.has(card.front)) {
      seenFronts.add(card.front);
      allCards.push(card);
    }
  }
}

console.log(`📚 Found ${allCards.length} unique cards across ${DECKS.length} decks\n`);

// Slugify function (matches app logic)
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Generate audio for a single card
function generateAudio(card, index, total) {
  return new Promise((resolve, reject) => {
    const slug = slugify(card.front);
    const text = `${card.front}. ${card.back}`;
    const outputPathDocs = path.join(__dirname, '../docs/audio', `${slug}.mp3`);
    const outputPathPublic = path.join(__dirname, '../public/audio', `${slug}.mp3`);

    // Skip if already exists
    if (fs.existsSync(outputPathDocs) && fs.existsSync(outputPathPublic)) {
      console.log(`⏭️  [${index + 1}/${total}] Skipping "${card.front}" (already exists)`);
      resolve();
      return;
    }

    const postData = JSON.stringify({
      text: text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    });

    const options = {
      method: 'POST',
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${VOICE_ID}`,
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errorBody = '';
        res.on('data', (chunk) => { errorBody += chunk; });
        res.on('end', () => {
          reject(new Error(`HTTP ${res.statusCode}: ${errorBody}`));
        });
        return;
      }

      const fileStreamDocs = fs.createWriteStream(outputPathDocs);
      const fileStreamPublic = fs.createWriteStream(outputPathPublic);

      res.pipe(fileStreamDocs);
      res.pipe(fileStreamPublic);

      res.on('end', () => {
        const stats = fs.statSync(outputPathDocs);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`✅ [${index + 1}/${total}] Generated "${card.front}" (${sizeKB} KB)`);
        resolve();
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Generate all audio files
async function generateAll() {
  console.log(`🎙️  Using voice ID: ${VOICE_ID}\n`);
  console.log('🚀 Starting audio generation...\n');

  // Ensure directories exist
  const docsAudioDir = path.join(__dirname, '../docs/audio');
  const publicAudioDir = path.join(__dirname, '../public/audio');
  if (!fs.existsSync(docsAudioDir)) fs.mkdirSync(docsAudioDir, { recursive: true });
  if (!fs.existsSync(publicAudioDir)) fs.mkdirSync(publicAudioDir, { recursive: true });

  // Generate with rate limiting (1 request per second to avoid hitting limits)
  for (let i = 0; i < allCards.length; i++) {
    try {
      await generateAudio(allCards[i], i, allCards.length);
      // Rate limit: wait 1 second between requests
      if (i < allCards.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`❌ [${i + 1}/${allCards.length}] Failed "${allCards[i].front}":`, error.message);
      // Continue with next card
    }
  }

  console.log(`\n✨ Done! Generated audio files in docs/audio/ and public/audio/`);
  console.log(`   Total cards: ${allCards.length}`);
}

generateAll().catch(console.error);

