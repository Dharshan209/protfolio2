import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../providers/ThemeProvider';

type CursorVariant = 'default' | 'text' | 'link' | 'button' | 'hidden';

const CustomCursor = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', mouseMoveHandler);
    
    // Add event listeners for cursor interactions
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    const linkElements = document.querySelectorAll('a, button, .cursor-link');
    const buttonElements = document.querySelectorAll('.primary-button, .secondary-button');
    
    const mouseEnterTextHandler = () => setCursorVariant('text');
    const mouseEnterLinkHandler = () => setCursorVariant('link');
    const mouseEnterButtonHandler = () => setCursorVariant('button');
    const mouseLeaveHandler = () => setCursorVariant('default');
    
    textElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnterTextHandler);
      element.addEventListener('mouseleave', mouseLeaveHandler);
    });
    
    linkElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnterLinkHandler);
      element.addEventListener('mouseleave', mouseLeaveHandler);
    });
    
    buttonElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnterButtonHandler);
      element.addEventListener('mouseleave', mouseLeaveHandler);
    });
    
    // Hide cursor when mouse leaves the window
    const mouseLeaveWindowHandler = () => setCursorVariant('hidden');
    const mouseEnterWindowHandler = () => setCursorVariant('default');
    
    document.documentElement.addEventListener('mouseleave', mouseLeaveWindowHandler);
    document.documentElement.addEventListener('mouseenter', mouseEnterWindowHandler);
    
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnterTextHandler);
        element.removeEventListener('mouseleave', mouseLeaveHandler);
      });
      
      linkElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnterLinkHandler);
        element.removeEventListener('mouseleave', mouseLeaveHandler);
      });
      
      buttonElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnterButtonHandler);
        element.removeEventListener('mouseleave', mouseLeaveHandler);
      });
      
      document.documentElement.removeEventListener('mouseleave', mouseLeaveWindowHandler);
      document.documentElement.removeEventListener('mouseenter', mouseEnterWindowHandler);
    };
  }, []);
  
  // Only show custom cursor on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isMobile) return null;
  
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.2)',
      border: theme === 'dark' ? '1.5px solid rgba(167, 139, 250, 0.8)' : '1.5px solid rgba(124, 58, 237, 0.8)',
      mixBlendMode: 'difference',
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.4)' : 'rgba(124, 58, 237, 0.4)',
      mixBlendMode: 'difference',
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(124, 58, 237, 0.1)',
      border: '2px solid rgba(124, 58, 237, 0.8)',
      mixBlendMode: 'difference',
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: '2px solid rgba(124, 58, 237, 0.8)',
      mixBlendMode: 'difference',
    },
    hidden: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      opacity: 0,
    },
  };
  
  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 rounded-full pointer-events-none"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

export default CustomCursor;