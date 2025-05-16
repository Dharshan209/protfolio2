import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../providers/ThemeProvider';
import { navLinks } from '../../data';

type NavigationProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  personalName: string;
};

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
  personalName
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll behavior for showing/hiding navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make navbar transparent at top and solid when scrolled
      setScrolled(currentScrollPos > 20);
      
      // Hide navbar when scrolling down and show when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 || mobileMenuOpen);
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

  // Close mobile menu on section change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);
  
  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#" 
            onClick={() => scrollToSection('home')} 
            className="font-heading text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">{personalName}</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <motion.a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                className={`relative px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 font-medium transition-colors ${
                  activeSection === link.id ? 'text-primary-600 dark:text-primary-400' : 'hover:text-primary-500 dark:hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 dark:bg-primary-400 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 z-50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.id}
                    href={`#${link.id}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                    className={`px-4 py-3 rounded-lg ${
                      activeSection === link.id
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Progress Bar */}
      <motion.div 
        className="h-1 bg-primary-500 dark:bg-primary-600"
        style={{ 
          scaleX: scrolled ? scrollY / (document.body.scrollHeight - window.innerHeight) : 0,
          transformOrigin: 'left'
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Navigation;