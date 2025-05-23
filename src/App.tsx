import React, { useRef } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';

// Components
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Background3D from './components/ui/Background3D';

// Data
import {
  personalInfo,
  aboutInfo,
  educations,
  achievements,
  programmingSkills,
  toolsAndTechnologies,
  coreCompetencies,
  projects,
  contactInfo,
  navLinks
} from './data';

function AppContent() {
  const { theme } = useTheme();
  
  // Create refs for each section
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
  
  // Use custom scroll spy hook
  const activeSection = useScrollSpy(sectionRefs.current);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]?.current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* 3D Background (only on desktop) */}
      <div className="hidden md:block">
        <Background3D />
      </div>
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        personalName={personalInfo.name}
      />

      {/* Hero Section */}
      <section ref={sectionRefs.current.home}>
        <HeroSection 
          personalInfo={personalInfo} 
          scrollToSection={scrollToSection} 
        />
      </section>

      {/* About Section */}
      <section ref={sectionRefs.current.about}>
        <AboutSection aboutInfo={aboutInfo} />
      </section>
      
      {/* Skills Section */}
      <section ref={sectionRefs.current.skills}>
        <SkillsSection 
          programmingSkills={programmingSkills}
          toolsAndTechnologies={toolsAndTechnologies}
          coreCompetencies={coreCompetencies}
        />
      </section>
      
      {/* Projects Section */}
      <section ref={sectionRefs.current.projects}>
        <ProjectsSection projects={projects} />
      </section>
      
      {/* Contact Section */}
      <section ref={sectionRefs.current.contact}>
        <ContactSection contactInfo={contactInfo} />
      </section>
      
      {/* Footer */}
      <Footer
        personalInfo={personalInfo}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;