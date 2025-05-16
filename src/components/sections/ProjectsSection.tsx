import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, MotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ChevronRight, Maximize2, X, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../data';

type ProjectsSectionProps = {
  projects: Project[];
};

// Project card with hover effects and detailed view
const ProjectCard = ({ 
  project, 
  index, 
  openDetailedView 
}: { 
  project: Project; 
  index: number;
  openDetailedView: (id: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.2,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      layoutId={`project-card-${index}`}
    >
      {/* Project header with gradient background */}
      <div className={`h-48 relative overflow-hidden ${project.colorGradient}`}>
        <motion.div 
          className="absolute inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity group-hover:opacity-0 z-10"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.4 }}
        />
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-30"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white text-center text-shadow-lg px-4">{project.title}</h3>
        </motion.div>
        
        {/* Expand button */}
        <motion.button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white z-40 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            openDetailedView(index);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Maximize2 size={18} />
        </motion.button>
      </div>
      
      {/* Project content */}
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                project.colorGradient.includes('purple') 
                  ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200' 
                  : project.colorGradient.includes('green') 
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* View project link */}
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
              project.colorGradient.includes('purple') 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : project.colorGradient.includes('green')
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-blue-600 hover:bg-blue-700'
            } text-white transition-colors`}
          >
            {project.linkText} <ExternalLink size={16} />
          </a>
          
          <motion.button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            onClick={() => openDetailedView(index)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Detailed project view modal
const ProjectDetailView = ({ 
  project, 
  index, 
  onClose 
}: { 
  project: Project; 
  index: number;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-card-${index}`}
        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project header with gradient background */}
        <div className={`h-64 md:h-80 relative overflow-hidden ${project.colorGradient}`}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20" />
          
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <h3 className="text-4xl font-bold text-white text-center text-shadow-lg px-4">{project.title}</h3>
          </div>
          
          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white z-40"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
        </div>
        
        {/* Project content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <h4 className="text-2xl font-bold mb-4">Overview</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {project.description}
          </p>
          
          <h4 className="text-2xl font-bold mb-4">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm ${
                  project.colorGradient.includes('purple') 
                    ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200' 
                    : project.colorGradient.includes('green') 
                      ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                      : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h4 className="text-2xl font-bold mb-4">Key Features</h4>
          <ul className="mb-8 space-y-4">
            {project.features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                <ChevronRight className="flex-shrink-0 mt-1 text-primary-600 dark:text-primary-400" size={18} />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                project.colorGradient.includes('purple') 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : project.colorGradient.includes('green')
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              {project.linkText} <ExternalLink size={18} />
            </a>
            
            <a
              href={`https://github.com/dharshan209/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              View Code <Github size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const titleInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  const openDetailedView = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
  };
  
  const closeDetailedView = () => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Restore body scroll
  };
  
  return (
    <>
      <motion.section 
        ref={sectionRef}
        id="projects" 
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
                Projects
              </span>
            </motion.div>
            
            <motion.h2 
              className="section-heading gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              My Featured Work
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
              Explore my latest projects and technical accomplishments
            </motion.p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-20">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
                openDetailedView={openDetailedView}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-100/20 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10"></div>
      </motion.section>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectDetailView 
            project={projects[selectedProject]} 
            index={selectedProject}
            onClose={closeDetailedView}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;