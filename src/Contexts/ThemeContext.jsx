import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return false;
    
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    console.log('Theme useEffect triggered, isDark:', isDark);
    
    // Update localStorage when theme changes
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update document class for Tailwind's dark mode
    const root = document.documentElement;
    if (isDark) {
      console.log('Adding dark class to HTML');
      root.classList.add('dark');
    } else {
      console.log('Removing dark class from HTML');
      root.classList.remove('dark');
    }
    
    console.log('Current HTML classes:', root.className);
  }, [isDark]);


  const toggleTheme = () => {
    console.log('Theme toggle clicked, current isDark:', isDark);
    setIsDark(prev => {
      console.log('Setting isDark to:', !prev);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};