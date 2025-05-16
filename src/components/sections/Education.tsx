import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Education as EducationType } from '../../data';

type EducationProps = {
  educations: EducationType[];
};

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <motion.section 
      id="education" 
      className="py-24 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
            Education
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Academic Background</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
            {educations.map((education, index) => (
              <React.Fragment key={index}>
                <div className={`absolute left-0 top-${index === 0 ? '0' : '[108px]'} w-8 h-8 -translate-x-1/2 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center`}>
                  <BookOpen className="text-white" size={16} />
                </div>
                
                <motion.div 
                  className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-lg p-6 ${index === 0 ? 'mb-12' : ''} ml-4`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{education.degree}</h3>
                      <p className="text-lg">{education.institution}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap">
                        {education.period}
                      </span>
                      <div className="mt-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {education.score.label}: {education.score.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;