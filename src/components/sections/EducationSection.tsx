import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, School, Calendar, Award, ChevronRight } from 'lucide-react';
import { Education } from '../../data';

type EducationSectionProps = {
  educations: Education[];
};

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const titleInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  return (
    <motion.section 
      ref={sectionRef}
      id="education" 
      className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
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
              Education
            </span>
          </motion.div>
          
          <motion.h2 
            className="section-heading gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Academic Background
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
            My educational journey and academic achievements
          </motion.p>
        </div>
        
        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto mt-20 relative">
          {/* Vertical Timeline Line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          
          {educations.map((education, index) => (
            <div key={index} className={`relative mb-20 ${index % 2 === 0 ? 'md:ml-auto md:mr-auto' : 'md:ml-auto md:mr-auto'}`}>
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-1/2 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 border-4 border-primary-500 dark:border-primary-400 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <School className="text-primary-600 dark:text-primary-400" size={20} />
              </motion.div>
              
              {/* Content Card - alternating sides for desktop */}
              <motion.div 
                className={`relative w-full md:w-[calc(50%-3rem)] p-6 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Institution */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {education.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
                        <BookOpen size={18} className="text-primary-500 dark:text-primary-400" />
                        <span>{education.institution}</span>
                      </div>
                    </div>
                    <div>
                      {/* Time Period Badge */}
                      <motion.div 
                        className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center gap-2 text-primary-700 dark:text-primary-300 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar size={16} />
                        <span>{education.period}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Score/GPA */}
                  <motion.div 
                    className="flex items-center gap-2 mt-4 bg-secondary-50 dark:bg-secondary-900/30 p-3 rounded-lg"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Award size={18} className="text-secondary-600 dark:text-secondary-400" />
                    <span className="font-medium text-secondary-700 dark:text-secondary-300">
                      {education.score.label}: {education.score.value}
                    </span>
                  </motion.div>
                  
                  {/* Extra achievements/courses - adding some fictional data for example */}
                  {(index === 0 || index === 1) && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Notable Courses:
                      </h4>
                      <ul className="space-y-1">
                        {[
                          index === 0 ? "Data Structures & Algorithms" : "Science & Mathematics",
                          index === 0 ? "Web Application Development" : "Computer Science Fundamentals",
                          index === 0 ? "Advanced Database Systems" : "Physics & Chemistry Labs"
                        ].map((course, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight size={16} className="text-primary-500" />
                            {course}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Arrow connecting to timeline for desktop */}
                <div 
                  className={`hidden md:block absolute top-1/2 ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } w-4 h-4 transform -translate-y-1/2 rotate-45 bg-white dark:bg-gray-800`}
                />
              </motion.div>
              
              {/* Year for desktop views */}
              <motion.div 
                className={`hidden md:block absolute top-0 ${
                  index % 2 === 0 ? 'right-[calc(50%+1.5rem)]' : 'left-[calc(50%+1.5rem)]'
                } transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-full shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {education.period.split(' - ')[0]}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-300/10 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-300/10 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
    </motion.section>
  );
};

export default EducationSection;