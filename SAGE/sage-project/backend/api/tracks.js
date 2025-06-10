const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Storage directories
const TRACKS_DIR = path.join(__dirname, '../storage/tracks');
const AUDIO_DIR = path.join(__dirname, '../storage/audio');
const GLYPHS_DIR = path.join(__dirname, '../storage/glyphs');

// Ensure directories exist
[TRACKS_DIR, AUDIO_DIR, GLYPHS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, AUDIO_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});
const upload = multer({ storage });

/**
 * @route   POST /api/tracks
 * @desc    Create a new soul track with metadata
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { 
      title, 
      emotion, 
      archetype, 
      lyrics, 
      audio_url, 
      sigil_url, 
      frequency_range,
      metadata 
    } = req.body;
    
    if (!title || !emotion || !archetype) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // In a real implementation, we would insert into Supabase
    // const { data, error } = await supabase
    //   .from('soul_tracks')
    //   .insert({
    //     title,
    //     emotion,
    //     archetype,
    //     lyrics,
    //     audio_url,
    //     sigil_url,
    //     frequency_range,
    //     metadata
    //   })
    //   .select();
    
    // if (error) throw error;
    
    // Mock response for now
    const trackId = uuidv4();
    
    res.status(201).json({
      success: true,
      track_id: trackId,
      message: 'Soul track created successfully',
      track: {
        id: trackId,
        title,
        emotion,
        archetype,
        created_at: new Date(),
        audio_url,
        sigil_url,
        frequency_range
      }
    });
    
  } catch (error) {
    console.error('Track creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create track',
      message: error.message 
    });
  }
});

/**
 * @route   GET /api/tracks
 * @desc    Get all soul tracks
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    // In a real implementation, we would fetch from Supabase
    // const { data, error } = await supabase
    //   .from('soul_tracks')
    //   .select('*')
    //   .order('created_at', { ascending: false });
    
    // if (error) throw error;
    
    // Mock response for now
    const mockTracks = [
      {
        id: uuidv4(),
        title: 'Return to Paradise City',
        emotion: 'Nostalgia',
        archetype: 'The Rememberer',
        created_at: new Date(),
        audio_url: '/api/tracks/audio/sample1.mp3',
        sigil_url: '/api/tracks/glyphs/sample1.svg',
        frequency_range: '396Hz → 528Hz'
      },
      {
        id: uuidv4(),
        title: 'Sacred Flame',
        emotion: 'Wonder',
        archetype: 'The Creator',
        created_at: new Date(Date.now() - 86400000), // 1 day ago
        audio_url: '/api/tracks/audio/sample2.mp3',
        sigil_url: '/api/tracks/glyphs/sample2.svg',
        frequency_range: '432Hz → 639Hz'
      }
    ];
    
    res.json({
      success: true,
      tracks: mockTracks
    });
    
  } catch (error) {
    console.error('Error fetching tracks:', error);
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
});

/**
 * @route   GET /api/tracks/:id
 * @desc    Get soul track by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real implementation, we would fetch from Supabase
    // const { data, error } = await supabase
    //   .from('soul_tracks')
    //   .select('*')
    //   .eq('id', id)
    //   .single();
    
    // if (error) throw error;
    // if (!data) return res.status(404).json({ error: 'Track not found' });
    
    // Mock response for now
    if (id === 'sample') {
      return res.json({
        id: 'sample',
        title: 'Return to Paradise City',
        emotion: 'Nostalgia',
        archetype: 'The Rememberer',
        lyrics: `
In the shadow of towers that once stood tall,
Memories echo through the broken wall.
Streets I used to know, now strange and cold,
The story of my youth, no longer told.

CHORUS:
But I'm going back to Paradise City,
Where the grass was green and the lights were pretty.
Take me home to where I once belonged,
In the heart of memories, forever strong.

Years have passed like ghosts through empty rooms,
Carrying whispers of forgotten tunes.
What was lost in time can still be found,
In the sacred spaces of hallowed ground.

BRIDGE:
Between what was and what will be,
Lies the truth that sets us free.
Not in stone or steel or clay,
But in the heart that finds its way.

(CHORUS)

We return not to what was,
But to who we've always been.
Paradise was never lost,
It was waiting deep within.
        `,
        created_at: new Date(),
        audio_url: '/api/tracks/audio/sample.mp3',
        sigil_url: '/api/tracks/glyphs/sample.svg',
        frequency_range: '396Hz → 528Hz',
        metadata: {
          genre: 'ballad',
          key: 'D minor',
          tempo: 85,
          instruments: ['piano', 'strings', 'ambient pads']
        }
      });
    }
    
    res.status(404).json({ error: 'Track not found' });
    
  } catch (error) {
    console.error('Error fetching track:', error);
    res.status(500).json({ error: 'Failed to fetch track' });
  }
});

/**
 * @route   POST /api/tracks/upload
 * @desc    Upload audio file for a track
 * @access  Public
 */
router.post('/upload', upload.single('audio'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file uploaded' });
    }
    
    const audioUrl = `/api/tracks/audio/${req.file.filename}`;
    
    res.json({
      success: true,
      audio_url: audioUrl,
      filename: req.file.filename,
      message: 'Audio file uploaded successfully'
    });
    
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

/**
 * @route   GET /api/tracks/audio/:filename
 * @desc    Get audio file
 * @access  Public
 */
router.get('/audio/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(AUDIO_DIR, filename);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Audio file not found' });
  }
});

/**
 * @route   GET /api/tracks/glyphs/:filename
 * @desc    Get glyph file
 * @access  Public
 */
router.get('/glyphs/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(GLYPHS_DIR, filename);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Glyph file not found' });
  }
});

module.exports = router;
