import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '../../data';

type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  personalName: string;
};

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  personalName
}) => {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            onClick={() => scrollToSection('home')} 
            className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all hover:scale-105"
          >
            {personalName}
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 z-50">
            <div className="flex flex-col py-4">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                  className={`px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;