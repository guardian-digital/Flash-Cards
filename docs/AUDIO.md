# Audio Generation Guide

## Overview

FlashScotts uses a hybrid audio system:
1. **Pre-generated MP3s** (ElevenLabs) - Best quality, instant playback
2. **SpeechSynthesis fallback** - Improved browser TTS when MP3s aren't available

## File Structure

- **Single-file (GitHub Pages)**: `docs/audio/<slug>.mp3`
- **Next.js app**: `public/audio/<slug>.mp3`

## Filename Convention

Cards are identified by slugified front text:
- "Old Adobe Mission" → `old-adobe-mission.mp3`
- "Soleri Bridge" → `soleri-bridge.mp3`
- "Museum of the West" → `museum-of-the-west.mp3`

## Automated Generation (Recommended)

### Quick Start

1. **Install dependencies**:
```bash
pnpm install
```

2. **Create `.env` file** (in project root):
```env
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
```

   **Note**: The `.env` file is gitignored and will NOT be committed. TruffleHog won't scan it.

3. **Run the generator**:
```bash
pnpm generate-audio
```

The script will:
- Read all cards from `lib/data.ts`
- Generate MP3s for each unique card
- Save to both `docs/audio/` and `public/audio/`
- Skip files that already exist
- Rate limit to 1 request/second (to avoid API limits)

### Voice Selection

Get your voice ID from: https://elevenlabs.io/app/voices

Popular voices:
- **Rachel**: `21m00Tcm4TlvDq8ikWAM` (default - warm, clear)
- **Domi**: `AZnzlk1XvdvUeBnXmlld` (energetic)
- **Bella**: `EXAVITQu4vr4xnSDxMaL` (soft, friendly)

### Manual Generation

If you prefer to generate manually:

1. Use ElevenLabs web interface
2. For each card, generate: `"[front]. [back]"`
3. Save as `audio/<slug>.mp3` in both `docs/` and `public/`

## File Size Optimization

- Target: 50-100 KB per file
- Use mono (not stereo)
- Compress with `ffmpeg` if needed:
```bash
ffmpeg -i input.mp3 -acodec libmp3lame -ab 64k -ac 1 -ar 22050 output.mp3
```

## Testing

1. Place a test file: `docs/audio/old-adobe-mission.mp3`
2. Visit the live site
3. Enable Voice narration
4. Navigate to "Old Adobe Mission" card
5. Should play MP3; if 404, falls back to SpeechSynthesis

## Fallback Behavior

If an MP3 file doesn't exist:
- App tries to load `/audio/<slug>.mp3`
- On 404, automatically falls back to improved SpeechSynthesis
- SpeechSynthesis uses best available voice (Google/Microsoft/Amazon preferred)

