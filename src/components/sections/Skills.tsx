import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType, CoreCompetency } from '../../data';

type SkillsProps = {
  programmingSkills: SkillType[];
  toolsAndTechnologies: SkillType[];
  coreCompetencies: CoreCompetency[];
};

const Skills: React.FC<SkillsProps> = ({ 
  programmingSkills, 
  toolsAndTechnologies, 
  coreCompetencies 
}) => {
  return (
    <motion.section 
      id="skills" 
      className="py-24 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Programming Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {programmingSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-medium text-lg">{skill.name}</p>
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {toolsAndTechnologies.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-medium text-lg">{skill.name}</p>
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {coreCompetencies.map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
                <p className="font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;