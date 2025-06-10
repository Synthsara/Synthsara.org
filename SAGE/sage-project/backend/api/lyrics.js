const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * @route   POST /api/lyrics/generate
 * @desc    Generate lyrics based on emotional intent and archetype
 * @access  Public
 */
router.post('/generate', async (req, res) => {
  try {
    const { emotion, archetype, title, toneProgression } = req.body;
    
    if (!emotion || !archetype || !title) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Construct the prompt based on the ballad prototype from the spec
    const prompt = `
You are a soul-aligned songweaver and emotional transcriber. 

Write heartfelt, poetic lyrics for a song called:

🎶 "${title}"

Tone progression:
${toneProgression || '- Starts with ' + emotion + '\n- Moves through reflection and transformation\n- Ends with resolution and insight'}

Use imagery, archetypes, and mythic emotional language aligned with the ${archetype} archetype.

Structure:
- 2 verses
- 1 chorus
- 1 bridge
- Final chorus
- Optional outro

Themes: ${emotion.toLowerCase()}, ${archetype.toLowerCase()}, transformation, memory, resonance
`;

    // Call OpenAI API
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.7,
    });

    const lyrics = completion.data.choices[0].text.trim();
    
    // Store in database if needed
    // await storeGeneratedLyrics(title, emotion, archetype, lyrics);
    
    res.json({ 
      success: true, 
      lyrics,
      metadata: {
        title,
        emotion,
        archetype,
        timestamp: new Date(),
      }
    });
    
  } catch (error) {
    console.error('Lyrics generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate lyrics',
      message: error.message 
    });
  }
});

/**
 * @route   GET /api/lyrics/:id
 * @desc    Get lyrics by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Fetch lyrics from database
    // const lyrics = await fetchLyricsById(id);
    
    // Mock response for now
    res.json({
      id,
      title: "Sample Song",
      lyrics: "This is where the lyrics would be stored...",
      emotion: "Joy",
      archetype: "The Creator",
      created_at: new Date()
    });
    
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    res.status(500).json({ error: 'Failed to fetch lyrics' });
  }
});

module.exports = router;
