import { useState } from "react";
import { projects } from "../Data/projectData";
import ProjectModal from "./ProjectModal";
import SectionTitle from "./UI/SectionTitle";
import Button from "./UI/Button";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const maxIndex = Math.max(0, projects.length - 3);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white ">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <SectionTitle 
            title="Featured Projects"
            subtitle="A showcase of my recent work and development projects that demonstrate my skills and passion for creating innovative solutions"
          />

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 -ml-6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 -mr-6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-1/3 px-4"
                  >
                    <div className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 flex flex-col h-full backdrop-blur-sm">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-4">
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => window.open(project.demoLink, '_blank')}
                              disabled={project.demoLink === '#'}
                            >
                              Demo
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(project.codeLink, '_blank')}
                              disabled={project.codeLink === '#'}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Metrics Badge */}
                        {project.metrics && (
                          <div className="flex items-center space-x-4 mb-3 text-xs">
                            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                              <span key={key} className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20">
                                {value} {key}
                              </span>
                            ))}
                          </div>
                        )}

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Details Button */}
                        <Button
                          variant="outline"
                          size="md"
                          onClick={() => openModal(project)}
                          className="mt-auto w-full"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Render the modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;