import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreatePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    emotion: 'Joy',
    archetype: 'The Creator',
    intention: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);
  
  const emotions = ['Joy', 'Grief', 'Love', 'Anger', 'Wonder', 'Peace', 'Nostalgia', 'Triumph'];
  const archetypes = [
    'The Rememberer', 
    'The Healer', 
    'The Warrior', 
    'The Sage', 
    'The Creator', 
    'The Explorer', 
    'The Lover', 
    'The Sovereign'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      // In a real implementation, this would call the backend API
      // For now, we'll simulate the process
      
      // Step 1: Generate lyrics
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockLyrics = `
In the realm of endless possibility,
Where dreams and reality intertwine,
I stand at the threshold of creation,
A vessel for the divine.

CHORUS:
Sacred patterns emerge from chaos,
Frequencies align with my soul's design,
In this moment of pure creation,
I remember what was always mine.

The universe speaks through my fingers,
As I shape the formless into form,
Each note a star in my constellation,
Each word a prayer to transform.

BRIDGE:
Between the worlds of what is and what could be,
Lies the power to set the spirit free,
Not bound by limits of time or space,
But guided by wisdom, love, and grace.

(CHORUS)

I am the creator, the weaver of dreams,
The architect of my reality,
In this sacred act of manifestation,
I find my true identity.
      `;
      
      // Step 2: Generate music
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockAudioUrl = '/api/tracks/audio/sample.mp3';
      
      // Step 3: Generate glyph
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockSigilUrl = '/api/tracks/glyphs/sample.svg';
      
      // Step 4: Save track
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setResult({
        title: formData.title,
        emotion: formData.emotion,
        archetype: formData.archetype,
        lyrics: mockLyrics,
        audio_url: mockAudioUrl,
        sigil_url: mockSigilUrl,
        frequency_range: '432Hz → 639Hz',
        created_at: new Date()
      });
      
      setCurrentStep(5); // Move to result view
    } catch (error) {
      console.error('Generation error:', error);
      // Handle error
    } finally {
      setIsGenerating(false);
    }
  };
  
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display text-center">Set Your Intention</h2>
            <p className="text-center text-sage-dark/80">
              Begin by setting your intention for this soul track. What emotions or experiences do you wish to express?
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">Track Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a title for your track"
                  className="input-field w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="intention" className="block text-sm font-medium mb-1">Your Intention</label>
                <textarea
                  id="intention"
                  name="intention"
                  value={formData.intention}
                  onChange={handleChange}
                  placeholder="Describe your intention, feelings, or the story you wish to express..."
                  className="input-field w-full h-32 resize-none"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => setCurrentStep(2)}
              >
                Next: Choose Emotion
              </motion.button>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display text-center">Select Emotion</h2>
            <p className="text-center text-sage-dark/80">
              Choose the primary emotion that resonates with your intention.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emotions.map(emotion => (
                <motion.div
                  key={emotion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`card cursor-pointer text-center py-4 ${formData.emotion === emotion ? 'ring-2 ring-sage-primary' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, emotion }))}
                >
                  <p className="font-display">{emotion}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => setCurrentStep(3)}
              >
                Next: Choose Archetype
              </motion.button>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display text-center">Select Archetype</h2>
            <p className="text-center text-sage-dark/80">
              Choose the archetype that best represents the essence of your track.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {archetypes.map(archetype => (
                <motion.div
                  key={archetype}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`card cursor-pointer text-center py-4 ${formData.archetype === archetype ? 'ring-2 ring-sage-primary' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, archetype }))}
                >
                  <p className="font-display">{archetype}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={() => setCurrentStep(2)}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => setCurrentStep(4)}
              >
                Next: Review & Generate
              </motion.button>
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display text-center">Review & Generate</h2>
            <p className="text-center text-sage-dark/80">
              Review your selections and generate your soul-aligned track.
            </p>
            
            <div className="card space-y-4">
              <div>
                <p className="text-sm font-medium">Title</p>
                <p className="font-display text-xl">{formData.title || 'Untitled Track'}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Emotion</p>
                <p>{formData.emotion}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Archetype</p>
                <p>{formData.archetype}</p>
              </div>
              
              {formData.intention && (
                <div>
                  <p className="text-sm font-medium">Intention</p>
                  <p className="text-sm italic">{formData.intention}</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
                onClick={() => setCurrentStep(3)}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-accent"
                onClick={handleSubmit}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate Soul Track'}
              </motion.button>
            </div>
            
            {isGenerating && (
              <div className="text-center space-y-4 mt-8">
                <div className="sacred-spin mx-auto w-16 h-16">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#3A7D7B" strokeWidth="8" strokeDasharray="283" strokeDashoffset="100" />
                  </svg>
                </div>
                <p className="text-sage-primary font-display">
                  Channeling your soul frequency...
                </p>
              </div>
            )}
          </motion.div>
        );
        
      case 5:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display text-center">Your Soul Track</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-6">
                <div className="card">
                  <h3 className="font-display text-xl mb-2">{result.title || 'Untitled Track'}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-sage-primary/20 text-sage-primary text-xs px-2 py-1 rounded-full">{result.emotion}</span>
                    <span className="bg-sage-secondary/20 text-sage-secondary text-xs px-2 py-1 rounded-full">{result.archetype}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Frequency Range</p>
                    <p className="text-sage-accent font-display">{result.frequency_range}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Audio</p>
                    <div className="bg-sage-dark/10 rounded-lg p-4 flex items-center justify-center">
                      <button className="btn btn-primary">
                        <span className="mr-2">▶</span> Play Track
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <p className="text-sm font-medium mb-2">Soul Sigil</p>
                  <div className="glyph-container h-64 bg-sage-dark/5 rounded-lg flex items-center justify-center">
                    <div className="sacred-spin">
                      <svg width="200" height="200" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="180" fill="none" stroke="#9C6B98" strokeWidth="2" opacity="0.7" />
                        <circle cx="200" cy="200" r="120" fill="none" stroke="#9C6B98" strokeWidth="2" opacity="0.5" />
                        <circle cx="200" cy="200" r="60" fill="none" stroke="#9C6B98" strokeWidth="2" opacity="0.7" />
                        <path d="M200,20 A180,180 0 0,1 380,200" fill="none" stroke="#9C6B98" strokeWidth="2" />
                        <path d="M200,80 A120,120 0 0,1 320,200" fill="none" stroke="#9C6B98" strokeWidth="2" />
                        <path d="M200,140 A60,60 0 0,1 260,200" fill="none" stroke="#9C6B98" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary flex-1"
                  >
                    Save to Library
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-accent flex-1"
                  >
                    Mint as NFT
                  </motion.button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="card h-full">
                  <p className="text-sm font-medium mb-2">Lyrics</p>
                  <div className="bg-sage-dark/5 rounded-lg p-6 whitespace-pre-line font-body">
                    {result.lyrics}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    title: '',
                    emotion: 'Joy',
                    archetype: 'The Creator',
                    intention: ''
                  });
                  setResult(null);
                }}
              >
                Create New Track
              </motion.button>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default CreatePage;
