import React from 'react';
import { motion } from 'framer-motion';

type ScrollToTopProps = {
  scrollToSection: (sectionId: string) => void;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollToSection }) => {
  return (
    <motion.button
      onClick={() => scrollToSection('home')}
      className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Scroll to top"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

export default ScrollToTop;