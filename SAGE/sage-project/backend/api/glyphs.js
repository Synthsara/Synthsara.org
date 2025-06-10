const express = require('express');
const router = express.Router();
const d3 = require('d3-node')();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Glyph storage directory
const GLYPH_DIR = path.join(__dirname, '../storage/glyphs');

// Ensure glyph directory exists
if (!fs.existsSync(GLYPH_DIR)) {
  fs.mkdirSync(GLYPH_DIR, { recursive: true });
}

/**
 * @route   POST /api/glyphs/generate
 * @desc    Generate SVG glyph based on emotion and archetype
 * @access  Public
 */
router.post('/generate', async (req, res) => {
  try {
    const { emotion, archetype, frequency } = req.body;
    
    if (!emotion || !archetype) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Map emotions to visual properties
    const emotionMapping = {
      'Joy': { color: '#FFD700', complexity: 0.8, symmetry: 'radial' },
      'Grief': { color: '#4682B4', complexity: 0.5, symmetry: 'vertical' },
      'Love': { color: '#FF69B4', complexity: 0.7, symmetry: 'radial' },
      'Anger': { color: '#B22222', complexity: 0.9, symmetry: 'asymmetric' },
      'Wonder': { color: '#9370DB', complexity: 0.8, symmetry: 'spiral' },
      'Peace': { color: '#90EE90', complexity: 0.4, symmetry: 'radial' },
      'Nostalgia': { color: '#DEB887', complexity: 0.6, symmetry: 'vertical' },
      'Triumph': { color: '#DAA520', complexity: 0.9, symmetry: 'radial' }
    };
    
    // Map archetypes to shape patterns
    const archetypeMapping = {
      'The Rememberer': 'spiral',
      'The Healer': 'flower',
      'The Warrior': 'shield',
      'The Sage': 'star',
      'The Creator': 'mandala',
      'The Explorer': 'compass',
      'The Lover': 'heart',
      'The Sovereign': 'crown'
    };
    
    const visualProps = emotionMapping[emotion] || { color: '#3A7D7B', complexity: 0.6, symmetry: 'radial' };
    const shapePattern = archetypeMapping[archetype] || 'circle';
    
    // Generate SVG based on mappings
    // This is a simplified version - in a real implementation, 
    // we would use D3.js to create complex SVG patterns
    
    const svgWidth = 400;
    const svgHeight = 400;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    
    // Create SVG container
    const svg = d3.createSVG(svgWidth, svgHeight);
    
    // Add background circle
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', 180)
      .attr('fill', 'none')
      .attr('stroke', visualProps.color)
      .attr('stroke-width', 2)
      .attr('opacity', 0.7);
    
    // Add inner pattern based on shape pattern
    if (shapePattern === 'spiral') {
      // Create spiral pattern
      const spiral = d3.lineRadial()
        .angle(d => d * 0.3)
        .radius(d => d * 0.8);
      
      const points = Array.from({ length: 100 }, (_, i) => i);
      
      svg.append('path')
        .datum(points)
        .attr('d', spiral)
        .attr('transform', `translate(${centerX}, ${centerY})`)
        .attr('fill', 'none')
        .attr('stroke', visualProps.color)
        .attr('stroke-width', 2)
        .attr('opacity', 0.8);
    } else if (shapePattern === 'flower') {
      // Create flower pattern
      const petalCount = 6;
      const petalSize = 80;
      
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * petalSize;
        const y = centerY + Math.sin(angle) * petalSize;
        
        svg.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 40)
          .attr('fill', 'none')
          .attr('stroke', visualProps.color)
          .attr('stroke-width', 2)
          .attr('opacity', 0.7);
      }
    } else {
      // Default to mandala-like pattern
      const layers = 3;
      const pointsPerLayer = 6;
      
      for (let layer = 1; layer <= layers; layer++) {
        const radius = layer * 50;
        
        for (let i = 0; i < pointsPerLayer; i++) {
          const angle = (i / pointsPerLayer) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          svg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 10)
            .attr('fill', visualProps.color)
            .attr('opacity', 0.6);
          
          // Connect to center
          svg.append('line')
            .attr('x1', centerX)
            .attr('y1', centerY)
            .attr('x2', x)
            .attr('y2', y)
            .attr('stroke', visualProps.color)
            .attr('stroke-width', 1)
            .attr('opacity', 0.4);
        }
      }
    }
    
    // Add frequency text if provided
    if (frequency) {
      svg.append('text')
        .attr('x', centerX)
        .attr('y', svgHeight - 20)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'sans-serif')
        .attr('font-size', '14px')
        .attr('fill', visualProps.color)
        .text(`${frequency}Hz`);
    }
    
    // Get SVG string
    const svgString = d3.svgString();
    
    // Generate a unique filename
    const filename = `${uuidv4()}.svg`;
    const filePath = path.join(GLYPH_DIR, filename);
    
    // In a real implementation, we would save the SVG file
    // For now, we'll just pretend we did
    
    // Return the response
    res.json({
      success: true,
      svg_string: svgString,
      svg_url: `/api/glyphs/files/${filename}`,
      metadata: {
        emotion,
        archetype,
        frequency,
        visual_properties: visualProps,
        shape_pattern: shapePattern,
        timestamp: new Date()
      }
    });
    
  } catch (error) {
    console.error('Glyph generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate glyph',
      message: error.message 
    });
  }
});

/**
 * @route   GET /api/glyphs/files/:filename
 * @desc    Get generated SVG file
 * @access  Public
 */
router.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(GLYPH_DIR, filename);
  
  // In a real implementation, we would check if the file exists
  // and send it to the client
  // For now, we'll just return a 404
  res.status(404).json({ error: 'File not found (mock endpoint)' });
});

module.exports = router;
