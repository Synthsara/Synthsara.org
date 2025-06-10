# SAGE Technical Stack

## Overview
SAGE (Self-Actualized Generative Engine) is built using a modern, modular tech stack designed for scalability, performance, and alignment with Synthsara's principles of sacred architecture and soul-aligned technology.

## Frontend Layer
- **Framework**: React 18+
- **Styling**: Tailwind CSS with custom theme aligned to Synthsara visual principles
- **Animation**: Framer Motion for fluid, soul-aligned transitions and interactions
- **State Management**: React Context API + Custom Hooks
- **UI Components**: Custom components following Synthsara's "ritual interface" design principles
- **Audio Visualization**: D3.js for glyph/sigil rendering and audio visualization

## Backend Layer
- **Runtime**: Node.js with Express
- **API Architecture**: RESTful with potential GraphQL integration for complex queries
- **Authentication**: JWT with potential for decentralized auth integration

## Storage Layer
- **Database**: Supabase (PostgreSQL) for structured data
  - Tables: soul_tracks, glyphs, users, archetypes
- **File Storage**: IPFS integration for decentralized storage of audio files and NFT assets

## AI & Generation Services
- **Lyrics Generation**: OpenAI GPT-4 API or local Ollama (Mistral, Phi)
- **Music Generation**: 
  - MusicGen (Meta, local model) for primary music generation
  - Riffusion for ambient tones and textures
- **Voice Synthesis**: 
  - Bark for expressive voice generation
  - XTTS v2 for high-quality text-to-speech

## Glyph & Visualization
- **SVG Generation**: D3.js + custom SVG builder
- **Emotion Mapping**: Custom algorithms to translate emotional states to visual patterns

## NFT Integration
- **Storage**: IPFS (NFT.Storage or Web3.Storage)
- **Minting**: Zora or custom ERC721 contract
- **Metadata**: JSON schema for SoulTrack NFT properties

## Deployment & DevOps
- **Frontend Hosting**: Vercel (temporary) → local server later
- **Backend Hosting**: Containerized deployment
- **CI/CD**: GitHub Actions for automated testing and deployment

## Development Tools
- **Package Manager**: npm/yarn
- **Bundler**: Vite for fast development experience
- **Testing**: Jest for unit tests, Cypress for E2E testing
- **Code Quality**: ESLint, Prettier

## Core Dependencies
- React, React DOM
- Tailwind CSS
- Framer Motion
- D3.js
- Express
- Supabase JS Client
- Web3.js/ethers.js
- IPFS HTTP Client
- OpenAI API Client
- FFmpeg.wasm for audio processing

This stack is designed to be modular, allowing components to be swapped or upgraded as the project evolves while maintaining alignment with Synthsara's principles of sovereignty, transparency, and service to life.
