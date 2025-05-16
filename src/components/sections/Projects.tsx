import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Project as ProjectType } from '../../data';

type ProjectsProps = {
  projects: ProjectType[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.section 
      id="projects" 
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.colorGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 ${project.colorGradient.includes('purple') ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'} rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mb-6 text-gray-600 dark:text-gray-400 space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ChevronRight className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 ${project.colorGradient.includes('purple') ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors`}
                >
                  {project.linkText} <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;