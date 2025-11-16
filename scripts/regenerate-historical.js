#!/usr/bin/env node

/**
 * Regenerate audio for specific historical sites that were updated
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

require('dotenv').config();

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';

if (!API_KEY) {
  console.error('❌ Error: ELEVENLABS_API_KEY not found in .env file');
  process.exit(1);
}

// Cards to regenerate (with updated text)
const cardsToRegenerate = [
  {
    front: 'Old Adobe Mission',
    back: "Hand-built by Mexican settlers starting in 1917 and completed in 1933, this adobe church is one of Old Town's earliest landmarks. The builders used traditional methods—mixing mud, straw, and water, then forming bricks by hand. The original wood beams are saguaro ribs, a technique borrowed from Tohono O'odham builders. Local legend says the mission was built on sacred ground where Tohono O'odham people once held ceremonies, and some claim to hear faint drumming on quiet nights. Step inside later to see the quiet desert chapel where early Catholic services were held before Scottsdale had a formal church."
  },
  {
    front: 'Little Red Schoolhouse',
    back: "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month and taught everything from reading to algebra. The building was moved twice before landing here, and the original bell still hangs in the belfry. Fun fact: students had to bring their own firewood in winter, and the school day started with everyone reciting the Pledge of Allegiance in unison. Some say if you visit on a quiet morning, you can still hear the echo of children's voices. Inside, you'll find desks from the era, slates, and photographs of those early students. It's now a small museum that reveals how this desert town first took shape."
  },
  {
    front: 'Rusty Spur Saloon',
    back: "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. The bank closed during the Depression, and the building sat empty until 1955 when it became a saloon. The original bank vault door weighs 3,000 pounds and is still functional—bartenders use it to store liquor. The floorboards are original, and bullet holes in the ceiling are from New Year's celebrations in the 1960s. Local legend says the ghost of a bank teller who worked here in the 1920s still haunts the place—staff report cold spots near the vault and glasses moving on their own. Drop in later for live country music and real Old West atmosphere, and maybe you'll catch a glimpse of the past."
  },
  {
    front: 'Bronze Horse Fountain',
    back: "Five bronze Arabian horses, sculpted by artist Bob Parks and donated in 1989, honor Scottsdale's Arabian horse-breeding boom that began in the 1950s. The horses represent the five major bloodlines that established Scottsdale as the Arabian capital of America. Each horse weighs over 1,200 pounds and was cast using the lost-wax method. Fun fact: locals have a playful myth that the horses come to life at midnight and gallop through Old Town—though no one's ever caught them in the act! The fountain's design mimics a desert arroyo, with water flowing between the horses' hooves—a detail most visitors miss. It's one of downtown's most photographed landmarks."
  },
  {
    front: 'Historic Old Town Square',
    back: "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. The original buildings housed a general store, a blacksmith shop, and the town's first post office. Many of the storefronts still have their original wooden boardwalks and false-front facades—a design that made small buildings look more impressive to attract customers. The square was where farmers sold produce, where news was shared, and where the community gathered. Local folklore says that if you stand in the center of the square at sunset, you can still hear the echoes of horse-drawn wagons and the chatter of early settlers. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character."
  }
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function generateAudio(card, index, total) {
  return new Promise((resolve, reject) => {
    const slug = slugify(card.front);
    const text = `${card.front}. ${card.back}`;
    const outputPathRoot = path.join(__dirname, '../audio', `${slug}.mp3`);
    const outputPathPublic = path.join(__dirname, '../public/audio', `${slug}.mp3`);

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

      const fileStreamRoot = fs.createWriteStream(outputPathRoot);
      const fileStreamPublic = fs.createWriteStream(outputPathPublic);

      res.pipe(fileStreamRoot);
      res.pipe(fileStreamPublic);

      res.on('end', () => {
        const stats = fs.statSync(outputPathRoot);
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

async function regenerate() {
  console.log(`🎙️  Regenerating ${cardsToRegenerate.length} historical site audio files...\n`);

  // Ensure directories exist
  const rootAudioDir = path.join(__dirname, '../audio');
  const publicAudioDir = path.join(__dirname, '../public/audio');
  if (!fs.existsSync(rootAudioDir)) fs.mkdirSync(rootAudioDir, { recursive: true });
  if (!fs.existsSync(publicAudioDir)) fs.mkdirSync(publicAudioDir, { recursive: true });

  // Generate with rate limiting
  for (let i = 0; i < cardsToRegenerate.length; i++) {
    try {
      await generateAudio(cardsToRegenerate[i], i, cardsToRegenerate.length);
      if (i < cardsToRegenerate.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`❌ [${i + 1}/${cardsToRegenerate.length}] Failed "${cardsToRegenerate[i].front}":`, error.message);
    }
  }

  console.log(`\n✨ Done! Regenerated audio files.`);
}

regenerate().catch(console.error);

