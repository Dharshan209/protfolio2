import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Trophy, Award, Star, Medal, Phone, Briefcase, BookOpen, Code, ChevronRight, Menu, X } from 'lucide-react';
import {
  personalInfo,
  aboutInfo,
  experiences,
  educations,
  achievements,
  programmingSkills,
  toolsAndTechnologies,
  coreCompetencies,
  projects,
  contactInfo,
  navLinks
} from './data';

// Define theme types
type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>({
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    achievements: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  });

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Handle section scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section in sectionRefs.current) {
        const element = sectionRefs.current[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = sectionRefs.current[sectionId].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Helper function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="text-blue-600 dark:text-blue-400" size={32} />;
      case 'Award': return <Award className="text-blue-600 dark:text-blue-400" size={32} />;
      case 'Star': return <Star className="text-blue-600 dark:text-blue-400" size={32} />;
      case 'Medal': return <Medal className="text-blue-600 dark:text-blue-400" size={32} />;
      default: return <Trophy className="text-blue-600 dark:text-blue-400" size={32} />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all hover:scale-105">{personalInfo.name}</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 z-50">
              <div className="flex flex-col py-4">
                {navLinks.map(link => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`} 
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                    className={`px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${activeSection === link.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={sectionRefs.current.home} className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm animate-fade-in">
              {personalInfo.title}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span> 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-delay leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <a
                href={personalInfo.socialLinks.phone}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <Phone size={18} />
                Contact Me
              </a>
              <a
                href={personalInfo.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <ExternalLink size={18} />
                View Portfolio
              </a>
              <div className="flex items-center gap-4 ml-2">
                <a
                  href={personalInfo.socialLinks.email}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.current.about} id="about" className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Get to Know Me</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Coding workspace"
                className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300 z-10"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{aboutInfo.title}</h3>
              {aboutInfo.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3">
                {aboutInfo.keywords.map((keyword, index) => (
                  <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">{keyword}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={sectionRefs.current.experience} id="experience" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
              Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Work Experience</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                  <Briefcase className="text-white" size={16} />
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8 ml-4 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{experience.role}</h3>
                      <p className="text-lg">{experience.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <ChevronRight className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={sectionRefs.current.education} id="education" className="py-24 px-6 bg-white dark:bg-gray-900">
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
                  
                  <div className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-lg p-6 ${index === 0 ? 'mb-12' : ''} ml-4 transform transition-all hover:-translate-y-1 hover:shadow-xl`}>
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
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={sectionRefs.current.achievements} id="achievements" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
              Achievements
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Awards & Recognition</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"></div>
                <div className="-mt-10 px-6 pb-6">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white dark:bg-gray-900 rounded-full shadow-lg border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {getIconComponent(achievement.icon)}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2 text-center">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.current.skills} id="skills" className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
              Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">{skill.name}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {toolsAndTechnologies.map((skill) => (
                  <div key={skill.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">{skill.name}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 pl-4 border-l-4 border-blue-600 dark:border-blue-400">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coreCompetencies.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Code className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.current.projects} id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
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
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.current.contact} id="contact" className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium text-sm">
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 bg-blue-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Information</h3>
              <div className="space-y-6">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium">{contactInfo.phone}</p>
                  </div>
                </a>
                
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium">{contactInfo.email}</p>
                  </div>
                </a>
                
                <div className="pt-6">
                  <p className="text-lg mb-4">Connect with me on social media:</p>
                  <div className="flex gap-4">
                    <a
                      href={contactInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={contactInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={contactInfo.socialLinks.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      aria-label="Portfolio"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <a href="#" onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                {personalInfo.name}
              </a>
              <p className="mt-2 text-gray-400">
                {personalInfo.title}
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 mb-4">
                © 2025 {personalInfo.name}. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.socialLinks.phone}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={18} />
                </a>
                <a
                  href={personalInfo.socialLinks.email}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default App;