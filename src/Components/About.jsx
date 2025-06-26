import SectionTitle from './UI/SectionTitle';
import Button from './UI/Button';
import Card from './UI/Card';

const About = () => {
  const personalValues = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Committed to writing clean, maintainable code that stands the test of time.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and effective communication in development.'
    },
    {
      icon: '📚',
      title: 'Growth',
      description: 'Continuously learning and adapting to the ever-evolving tech landscape.'
    }
  ];

  const journey = [
    {
      year: '2020',
      title: 'Started Computer Science',
      description: 'Began my journey into programming with Python and Java fundamentals.'
    },
    {
      year: '2022',
      title: 'Web Development',
      description: 'Discovered passion for web technologies, diving deep into React and Node.js.'
    },
    {
      year: '2023',
      title: 'First Internship',
      description: 'Gained real-world experience working on production applications.'
    },
    {
      year: '2024',
      title: 'Full-Stack Focus',
      description: 'Specialized in full-stack development with modern frameworks and cloud technologies.'
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionTitle 
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700 group-hover:border-yellow-400 transition-all duration-500">
                <img
                  src="src/assets/profile.jpeg"
                  alt="Dharshan Senthil"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hi there! I'm <span className="text-yellow-400 font-semibold">Dharshan</span>, 
                  a passionate software engineer with a love for creating digital experiences that matter. 
                  My journey began with curiosity about how websites work, and it has evolved into a 
                  deep fascination with building scalable, user-centered applications.
                </p>
                
                <p>
                  I specialize in <span className="text-yellow-400 font-semibold">full-stack development</span> 
                  with a strong foundation in React, Node.js, and modern web technologies. What drives me 
                  is the intersection of technical excellence and user experience – creating solutions 
                  that are not just functional, but delightful to use.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                  open source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and the power of collaboration to solve complex problems.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues.map((value, index) => (
              <Card key={index} padding="lg" className="text-center group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((milestone, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-3">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;