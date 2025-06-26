import { experienceData, stats } from '../../Data/experienceData';
import SectionTitle from '../UI/SectionTitle';
import Card from '../UI/Card';

const Experience = () => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return '🎓';
      case 'experience': return '💼';
      case 'project': return '🚀';
      case 'certification': return '🏆';
      default: return '📋';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
      case 'experience': return 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400';
      case 'project': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';
      case 'certification': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400';
      default: return 'bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionTitle 
          title="Experience & Education"
          subtitle="My journey in software development, from education to professional experience"
        />

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} padding="md" className="text-center group">
              <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-yellow-400 to-transparent"></div>

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={item.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white dark:border-black z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card hover={true} padding="lg" className="group">
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        <span className="mr-2">{getTypeIcon(item.type)}</span>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {item.period}
                      </span>
                    </div>

                    {/* Title and Organization */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <span className="font-medium">{item.organization}</span>
                      <span className="mx-2">•</span>
                      <span>{item.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <span className="text-yellow-400 mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {item.technologies && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;