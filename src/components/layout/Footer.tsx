import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, ExternalLink, Copyright, Heart } from 'lucide-react';

type FooterProps = {
  personalInfo: {
    name: string;
    title: string;
    socialLinks: {
      phone: string;
      email: string;
      linkedin: string;
      github: string;
      portfolio: string;
    };
  };
  scrollToSection: (sectionId: string) => void;
};

const FooterLink = ({ 
  href, 
  children, 
  external = false 
}: { 
  href: string; 
  children: React.ReactNode; 
  external?: boolean 
}) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Footer: React.FC<FooterProps> = ({ personalInfo, scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  
  // Quick links for navigation
  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1">
            <motion.a
              href="#"
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                {personalInfo.name}
              </span>
            </motion.a>
            <p className="text-gray-400 mb-6">
              {personalInfo.title}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.a 
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href={`tel:${personalInfo.socialLinks.phone.replace(/\s/g, '')}`}>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{personalInfo.socialLinks.phone}</span>
                  </div>
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${personalInfo.socialLinks.email}`}>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{personalInfo.socialLinks.email}</span>
                  </div>
                </FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Me</h3>
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              
              <motion.a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
              
              <motion.a
                href={personalInfo.socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 transition-colors"
                aria-label="Portfolio"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-gray-500">
            <Copyright size={16} className="mr-1" />
            <span>{currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
          
          <motion.div 
            className="text-gray-500 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React, TypeScript & Tailwind
          </motion.div>
        </div>
      </div>
      
      {/* Decorative particles */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-secondary-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-accent-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-5 left-2/3 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-15 left-3/4 w-2 h-2 bg-secondary-500 rounded-full animate-ping"></div>
      </div>
    </footer>
  );
};

export default Footer;