import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Trophy, Award, Star, Medal } from 'lucide-react';

// Define theme types
type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Dharshan</a>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#achievements" className="hover:text-blue-600 dark:hover:text-blue-400">Achievements</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Hi, I'm Dharshan 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-delay">
              A passionate Full Stack Developer from India, specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4 animate-fade-in-delay-2">
              <a
                href="mailto:dharshansenthil209@gmail.com"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Mail size={20} />
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/dharshan-senthil-2a1622225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="http://github.com/dharshan209/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a Full Stack Developer with a passion for creating beautiful, functional, and user-friendly websites and applications. With expertise in both front-end and back-end development, I strive to build seamless digital experiences that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Trophy className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">1st Place</h3>
              <p className="text-gray-600 dark:text-gray-400">National Level Hackathon - Smart India Hackathon 2023</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Award className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Project</h3>
              <p className="text-gray-600 dark:text-gray-400">IEEE International Conference on Emerging Technologies</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Star className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Top Contributor</h3>
              <p className="text-gray-600 dark:text-gray-400">Open Source Development - 500+ Contributions</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Medal className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence Award</h3>
              <p className="text-gray-600 dark:text-gray-400">Academic Achievement - CGPA 9.2/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              'JavaScript/TypeScript',
              'React.js',
              'Node.js',
              'Python',
              'MongoDB',
              'SQL',
              'AWS',
              'Docker',
              'Git',
              'HTML/CSS',
              'Express.js',
              'REST APIs'
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TapYourStory',
                description: 'A platform for sharing and discovering personal stories.',
                link: 'http://WWW.tapyourstory.in',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Portfolio Website',
                description: 'My personal portfolio website built with modern technologies.',
                link: 'https://dharshan209.github.io/protfolio/',
                tech: ['React', 'TypeScript', 'Tailwind CSS']
              },
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform with payment integration.',
                link: '#',
                tech: ['Next.js', 'Stripe', 'PostgreSQL']
              }
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Dharshan. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:dharshansenthil209@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dharshan-senthil-2a1622225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="http://github.com/dharshan209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;