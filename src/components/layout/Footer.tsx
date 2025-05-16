import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

type FooterProps = {
  personalInfo: {
    name: string;
    title: string;
    socialLinks: {
      phone: string;
      email: string;
      linkedin: string;
      github: string;
    }
  };
  scrollToSection: (sectionId: string) => void;
};

const Footer: React.FC<FooterProps> = ({ personalInfo, scrollToSection }) => {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              {personalInfo.name}
            </a>
            <p className="mt-2 text-gray-400">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.socialLinks.phone}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;