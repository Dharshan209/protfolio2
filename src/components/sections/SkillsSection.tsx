import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { Skill, CoreCompetency } from '../../data';

type SkillsSectionProps = {
  programmingSkills: Skill[];
  toolsAndTechnologies: Skill[];
  coreCompetencies: CoreCompetency[];
};

// Reusable skill card component
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div 
      className="card card-hover bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold">{skill.name}</h4>
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
        </motion.div>
      </div>
      
      <div className="group relative mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "90%" }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

// Animated background for the competency grid
const FloatingParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent',
    velocity: {
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2,
    },
  }));

  const [positions, setPositions] = useState(particles);
  
  useAnimationFrame(() => {
    setPositions(prevPositions => 
      prevPositions.map(particle => {
        let { x, y } = particle;
        x += particle.velocity.x;
        y += particle.velocity.y;
        
        // Bounce off the edges
        if (x <= 0 || x >= 100) particle.velocity.x *= -1;
        if (y <= 0 || y >= 100) particle.velocity.y *= -1;
        
        // Keep within bounds
        x = Math.max(0, Math.min(100, x));
        y = Math.max(0, Math.min(100, y));
        
        return { ...particle, x, y };
      })
    );
  });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
      {positions.map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full
            ${particle.color === 'primary' ? 'bg-primary-400 dark:bg-primary-600' : 
              particle.color === 'secondary' ? 'bg-secondary-400 dark:bg-secondary-600' : 
              'bg-accent-400 dark:bg-accent-600'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

// Core competency card with animated connections
const CompetencyCard = ({ competency, index }: { competency: CoreCompetency; index: number }) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center relative z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="mb-4 rounded-full w-20 h-20 mx-auto bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
        <motion.img 
          src={competency.logo} 
          alt={competency.name} 
          className="w-12 h-12"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
      </div>
      <h4 className="font-medium text-gray-900 dark:text-white">{competency.name}</h4>
    </motion.div>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  programmingSkills, 
  toolsAndTechnologies, 
  coreCompetencies 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const titleInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  return (
    <motion.section 
      ref={sectionRef}
      id="skills" 
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container relative z-10">
        <div className="section-title">
          <motion.div 
            className="inline-block px-4 py-1 mb-6 rounded-full border border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30"
            initial={{ opacity: 0, y: -10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Skills
            </span>
          </motion.div>
          
          <motion.h2 
            className="section-heading gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            My Technical Expertise
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mt-6 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="section-subheading mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A showcase of my technical skills, tools, and core competencies
          </motion.p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-16 mt-24">
          {/* Programming Languages */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-6 bg-primary-500 rounded-full mr-3"></div>
              <h3 className="text-xl md:text-2xl font-bold font-heading">Programming Languages</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-6">
              {programmingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-6 bg-secondary-500 rounded-full mr-3"></div>
              <h3 className="text-xl md:text-2xl font-bold font-heading">Tools & Technologies</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-6">
              {toolsAndTechnologies.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Core Competencies */}
        <div className="mt-32 relative">
          <motion.div
            className="flex items-center mb-10 justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-6 bg-accent-500 rounded-full mr-3"></div>
            <h3 className="text-xl md:text-2xl font-bold font-heading">Core Competencies</h3>
          </motion.div>
          
          <div className="relative">
            {/* Animated background particles */}
            <FloatingParticles />
            
            {/* Grid of competencies */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {coreCompetencies.map((competency, index) => (
                <CompetencyCard key={index} competency={competency} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-bl from-primary-100/20 dark:from-primary-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-secondary-100/20 dark:from-secondary-900/10 to-transparent rounded-full blur-3xl"></div>
    </motion.section>
  );
};

export default SkillsSection;