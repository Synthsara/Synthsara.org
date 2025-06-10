const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Audio storage directory
const AUDIO_DIR = path.join(__dirname, '../storage/audio');

// Ensure audio directory exists
if (!fs.existsSync(AUDIO_DIR)) {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

/**
 * @route   POST /api/music/generate
 * @desc    Generate music based on emotion and archetype
 * @access  Public
 */
router.post('/generate', async (req, res) => {
  try {
    const { emotion, archetype, lyrics, title } = req.body;
    
    if (!emotion || !archetype) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Map emotion to genre, key, and tempo
    const genreMapping = {
      'Joy': { genre: 'upbeat', key: 'C major', tempo: 120 },
      'Grief': { genre: 'ambient', key: 'A minor', tempo: 70 },
      'Love': { genre: 'ballad', key: 'F major', tempo: 85 },
      'Anger': { genre: 'rock', key: 'E minor', tempo: 140 },
      'Wonder': { genre: 'ethereal', key: 'D major', tempo: 95 },
      'Peace': { genre: 'ambient', key: 'G major', tempo: 75 },
      'Nostalgia': { genre: 'folk', key: 'D minor', tempo: 90 },
      'Triumph': { genre: 'orchestral', key: 'Bb major', tempo: 110 }
    };
    
    // Map archetype to instrument profile
    const instrumentMapping = {
      'The Rememberer': ['piano', 'strings', 'ambient pads'],
      'The Healer': ['flute', 'harp', 'chimes'],
      'The Warrior': ['drums', 'electric guitar', 'brass'],
      'The Sage': ['acoustic guitar', 'woodwinds', 'bells'],
      'The Creator': ['synthesizer', 'piano', 'electronic elements'],
      'The Explorer': ['world percussion', 'exotic strings', 'wind instruments'],
      'The Lover': ['piano', 'strings', 'acoustic guitar'],
      'The Sovereign': ['orchestral', 'brass', 'timpani']
    };
    
    const musicSettings = genreMapping[emotion] || { genre: 'ambient', key: 'C major', tempo: 90 };
    const instruments = instrumentMapping[archetype] || ['piano', 'strings'];
    
    // Construct prompt for MusicGen
    const prompt = `
      Create a ${musicSettings.genre} style track in ${musicSettings.key} at ${musicSettings.tempo} BPM.
      Feature these instruments prominently: ${instruments.join(', ')}.
      The emotional tone should convey ${emotion.toLowerCase()}.
      The track should feel aligned with the ${archetype} archetype.
      ${lyrics ? `The music should complement these lyrics: ${lyrics.substring(0, 200)}...` : ''}
    `;
    
    // In a real implementation, this would call MusicGen API
    // For now, we'll simulate a response
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a unique filename
    const filename = `${uuidv4()}.mp3`;
    const filePath = path.join(AUDIO_DIR, filename);
    
    // In a real implementation, we would save the generated audio file
    // For now, we'll just pretend we did
    
    // Return the response
    res.json({
      success: true,
      audio_url: `/api/music/files/${filename}`,
      metadata: {
        title: title || 'Untitled Composition',
        emotion,
        archetype,
        genre: musicSettings.genre,
        key: musicSettings.key,
        tempo: musicSettings.tempo,
        instruments,
        timestamp: new Date()
      }
    });
    
  } catch (error) {
    console.error('Music generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate music',
      message: error.message 
    });
  }
});

/**
 * @route   GET /api/music/files/:filename
 * @desc    Get generated music file
 * @access  Public
 */
router.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(AUDIO_DIR, filename);
  
  // In a real implementation, we would check if the file exists
  // and send it to the client
  // For now, we'll just return a 404
  res.status(404).json({ error: 'File not found (mock endpoint)' });
});

module.exports = router;
