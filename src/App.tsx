import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Trophy, Award, Star, Medal, Phone, Briefcase, BookOpen, Code } from 'lucide-react';

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
            <a href="#" className="text-xl font-bold">Dharshan Senthil</a>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
              <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400">Education</a>
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
              Hi, I'm Dharshan Senthil 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-delay">
              Frontend Development Engineer Intern with a strong foundation in problem-solving, algorithms, and data structures. Passionate about creating efficient and scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <a
                href="tel:+919345450064"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Phone size={20} />
                +91 9345450064
              </a>
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
              <a
                href="https://dharshan209.github.io/protfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={20} />
                Portfolio
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
                I'm an innovative software engineering student with a strong foundation in problem-solving, algorithms, and data structures. Proficient in Java, JavaScript, ReactJS, and NodeJS, with experience developing full-stack web applications and integrating AI technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Passionate about creating efficient and scalable solutions to enhance customer experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex-shrink-0">
                  <Briefcase className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">SDE Intern</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">Automotive Robotics India Pvt Ltd., Chennai</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">Sep 2023 - Nov 2023</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Developed AR-AI application prototype for Smart Worker project using Unity 3D</li>
                    <li>• Collaborated with cross-functional team to integrate AR and AI technologies</li>
                    <li>• Optimized application performance, reducing load time by 25%</li>
                    <li>• Received commendation for quick learning and efficient adaptation to company standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex-shrink-0">
                  <BookOpen className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">B.Tech: Computer Science and Business Systems</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">Sri Krishna College of Engineering and Technology, Coimbatore</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">Nov 2021 - Present</span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">CGPA: 7.82</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex-shrink-0">
                  <BookOpen className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">Higher Secondary</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">Vidhya Vikas Boys Matrix Higher Secondary School, Thanjavur</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">June 2017 - Mar 2019</span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Score: 79.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Trophy className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cubethon 23 Kochi</h3>
              <p className="text-gray-600 dark:text-gray-400">Achieved Second Runner-up position, displaying exceptional skills and dedication</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Award className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Riggathon 22 Coimbatore</h3>
              <p className="text-gray-600 dark:text-gray-400">Ranked in the top 10 teams, demonstrating excellence in the competition</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Star className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hack-AI-thon 23 Coimbatore</h3>
              <p className="text-gray-600 dark:text-gray-400">Advanced to the finals, showcasing strong performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Java',
                'JavaScript',
                'ReactJS',
                'NodeJS'
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Git',
                'Redux',
                'Unity'
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Database</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'MySQL'
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Object Oriented Programming',
                'Data Structures & Algorithms',
                'Problem Solving',
                'Analytical Skills',
                'Communication Skills'
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TAP — Turn Art into Pages</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A full-stack web platform for generating AI-personalized storybooks from user-uploaded images.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['ReactJS', 'NodeJS', 'Express', 'MySQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Implemented features including image upload, product system with shopping cart</li>
                  <li>• Integrated Razorpay payment system</li>
                  <li>• Built an admin panel for efficient order management and tracking</li>
                </ul>
                <a
                  href="http://WWW.tapyourstory.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">BUBBA — An AI-Augmented Reality companion</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An AR mental health support app with personalized interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Unity 3D', 'TensorFlow', 'NLP'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mb-4 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Designed 3D avatars with real-time emotion recognition</li>
                  <li>• Enhanced user engagement and app interactivity</li>
                  <li>• Achieved 85% positive user feedback on app effectiveness</li>
                </ul>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Project Details <ExternalLink size={16} />
                </a>
              </div>
            </div>
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
          <div className="flex flex-col space-y-4 mb-8">
            <a href="tel:+919345450064" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Phone size={20} />
              <span>+91 9345450064</span>
            </a>
            <a href="mailto:dharshansenthil209@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={20} />
              <span>dharshansenthil209@gmail.com</span>
            </a>
          </div>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Dharshan Senthil. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+919345450064"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone size={20} />
              </a>
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