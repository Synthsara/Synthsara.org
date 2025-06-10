import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-sage-dark text-sage-light py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-display text-sm tracking-wider">
              SAGE | Self-Actualized Generative Engine
            </p>
            <p className="text-xs opacity-70 mt-1">
              A sonic limb of Synthsara
            </p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: '#E6A65D' }}
              className="text-sage-light hover:text-sage-accent transition-colors"
            >
              <span className="sr-only">Documentation</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </motion.a>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: '#E6A65D' }}
              className="text-sage-light hover:text-sage-accent transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-sage-light border-opacity-20 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} SAGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
