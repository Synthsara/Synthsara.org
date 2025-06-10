import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-sage-dark text-sage-light py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <div className="mr-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#E6A65D" strokeWidth="2"/>
              <path d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20" stroke="#E6A65D" strokeWidth="2"/>
              <path d="M20 15C17.25 15 15 17.25 15 20C15 22.75 17.25 25 20 25C22.75 25 25 22.75 25 20" stroke="#E6A65D" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="text-2xl font-display tracking-wider">SAGE</h1>
        </motion.div>
        
        <nav>
          <ul className="flex space-x-6 font-display text-sm tracking-wider">
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/" className="hover:text-sage-accent transition-colors">HOME</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/create" className="hover:text-sage-accent transition-colors">CREATE</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/library" className="hover:text-sage-accent transition-colors">LIBRARY</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/about" className="hover:text-sage-accent transition-colors">ABOUT</a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
