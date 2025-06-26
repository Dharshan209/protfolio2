import Button from './UI/Button';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // Backdrop
    <div 
      onClick={onClose} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-yellow-400/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header Image */}
        <div className="relative h-64 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-t-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-200 text-lg">{project.description}</p>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-sm rounded-full border border-yellow-400/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open(project.demoLink, '_blank')}
                  disabled={project.demoLink === '#'}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open(project.codeLink, '_blank')}
                  disabled={project.codeLink === '#'}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-yellow-400 mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Challenges</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Impact & Results</h3>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;