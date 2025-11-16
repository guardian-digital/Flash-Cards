#!/usr/bin/env node

/**
 * Clean up unused audio files by comparing existing files with cards in data
 */

const fs = require('fs');
const path = require('path');

// All unique card fronts from the data (manually extracted to avoid parsing issues)
const cardFronts = [
  'Old Adobe Mission',
  'Soleri Bridge',
  'Museum of the West',
  'Bronze Horse Fountain',
  'Civic Center Park',
  'Marshall Way Arts District',
  'Main Street Arts District',
  'Waterfront Arches',
  'Marshall Way Murals',
  'Soleri Plaza',
  'Scottsdale Waterfront',
  'Love Story Lane',
  "Berdena's",
  'Arcadia Farms Marketplace',
  'Fry Bread Lounge',
  'Sprinkles ATM',
  'Sugar Bowl',
  'Civic Center Tree Walk',
  'Old Town Holiday Arch',
  'Soleri Bridge Lights',
  'Museum Courtyard Decor',
  'Warm Beverage Stop',
  "America's Taco Shop",
  'Velvet Taco',
  'Mesquite Fresh Street Mex',
  'Fry Bread Stop',
  'Taco Alley',
  'Scottsdale Civic Center',
  'Entertainment District',
  'Waterfront Promenade',
  'Old Town Western Storefronts',
  'Historic Old Town Square',
  'Fourtillfour Alley',
  'Canal Undercrossings',
  'Hidden Artist Studios',
  'Copper Canopy Sculpture',
  'Waterfront Reflections',
  'Marshall Way Murals at Sunset',
  'Soleri Bridge Golden Hour',
  'Museum Courtyard',
  'Old Town Lantern Walk',
  'Little Red Schoolhouse',
  'Rusty Spur Saloon'
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Generate expected filenames
const expectedFiles = new Set(cardFronts.map(front => `${slugify(front)}.mp3`));

// Get existing files
const audioDir = path.join(__dirname, '../audio');
const publicAudioDir = path.join(__dirname, '../public/audio');

if (!fs.existsSync(audioDir)) {
  console.log('❌ Audio directory not found');
  process.exit(1);
}

const existingFiles = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));

// Find unused files
const unusedFiles = existingFiles.filter(file => !expectedFiles.has(file));

if (unusedFiles.length === 0) {
  console.log('✅ No unused audio files found. All files are in use.');
  process.exit(0);
}

console.log(`🗑️  Found ${unusedFiles.length} unused audio file(s):\n`);
unusedFiles.forEach(file => {
  console.log(`   - ${file}`);
});

// Delete unused files
let deletedCount = 0;
let totalSize = 0;

unusedFiles.forEach(file => {
  const rootPath = path.join(audioDir, file);
  const publicPath = path.join(publicAudioDir, file);
  
  try {
    if (fs.existsSync(rootPath)) {
      const stats = fs.statSync(rootPath);
      totalSize += stats.size;
      fs.unlinkSync(rootPath);
      deletedCount++;
    }
    if (fs.existsSync(publicPath)) {
      fs.unlinkSync(publicPath);
    }
    console.log(`✅ Deleted: ${file}`);
  } catch (error) {
    console.error(`❌ Error deleting ${file}:`, error.message);
  }
});

const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
console.log(`\n✨ Cleanup complete! Deleted ${deletedCount} file(s), freed ${sizeMB} MB.`);

