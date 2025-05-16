import React from 'react';
import { motion } from 'framer-motion';

type AboutProps = {
  aboutInfo: {
    title: string;
    paragraphs: string[];
    keywords: string[];
    profileImage: string;
  };
};

const About: React.FC<AboutProps> = ({ aboutInfo }) => {
  return (
    <motion.section 
      id="about" 
      className="py-24 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Get to Know Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative group"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <motion.img
              src={aboutInfo.profileImage || "/assets/profile-placeholder.jpg"}
              alt="Profile"
              className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{aboutInfo.title}</h3>
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="flex flex-wrap gap-3">
              {aboutInfo.keywords.map((keyword, index) => (
                <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;