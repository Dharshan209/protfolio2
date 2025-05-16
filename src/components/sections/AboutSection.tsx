import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code, BrainCircuit, Sparkles } from 'lucide-react';

type AboutProps = {
  aboutInfo: {
    title: string;
    paragraphs: string[];
    keywords: string[];
    profileImage: string;
  };
};

const AboutSection: React.FC<AboutProps> = ({ aboutInfo }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.5 });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };
  
  const keywordVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="var(--color-primary-300)" />
              <stop offset="100%" stopColor="var(--color-primary-50)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="25" fill="url(#gradient)" />
          <circle cx="80" cy="80" r="35" fill="url(#gradient)" />
        </svg>
      </div>
      
      <div className="section-container">
        <div className="section-title">
          <motion.div 
            className="inline-block px-4 py-1 mb-6 rounded-full border border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              About Me
            </span>
          </motion.div>
          
          <motion.h2 
            className="section-heading gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Get to Know Me
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mt-6 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-16">
          {/* Profile Image with 3D effect */}
          <motion.div 
            ref={imageRef}
            className="relative aspect-square mx-auto md:mx-0 max-w-md"
            style={{ y }}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-70 blur-xl"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div 
              className="relative z-10 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
            >
              <img
                src={aboutInfo.profileImage || "/assets/profile-placeholder.jpg"}
                alt="Dharshan Senthil"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            
            {/* Floating icons */}
            <motion.div 
              className="absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              variants={itemVariants}
              custom={1}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Code className="text-primary-500 dark:text-primary-400" size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-8 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              variants={itemVariants}
              custom={2}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <BrainCircuit className="text-secondary-500 dark:text-secondary-400" size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 right-10 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              variants={itemVariants}
              custom={3}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              <Sparkles className="text-accent-500 dark:text-accent-400" size={24} />
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            ref={contentRef}
            className="space-y-8"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 font-heading"
              variants={itemVariants}
            >
              {aboutInfo.title}
            </motion.h3>
            
            <div className="space-y-6">
              {aboutInfo.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              variants={containerVariants}
            >
              {aboutInfo.keywords.map((keyword, index) => (
                <motion.div 
                  key={index} 
                  className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-700 dark:text-primary-300 font-medium"
                  variants={keywordVariants}
                  custom={index}
                  whileHover="hover"
                >
                  {keyword}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;