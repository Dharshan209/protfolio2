// Define types for data structures
export interface Experience {
    role: string;
    company: string;
    period: string;
    achievements: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    score: {
      label: string;
      value: string;
    };
  }
  
  export interface Achievement {
    title: string;
    description: string;
    icon: 'Trophy' | 'Award' | 'Star' | 'Medal';
  }
  
  export interface Skill {
    name: string;
    level: number;
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    link: string;
    linkText: string;
    colorGradient: string; // CSS gradient for project card
  }
  
  export interface ContactInfo {
    phone: string;
    email: string;
    socialLinks: {
      linkedin: string;
      github: string;
      portfolio: string;
    };
  }
  
  // Personal Information
  export const personalInfo = {
    name: "Dharshan Senthil",
    title: "Software Development Engineer",
    description: "Innovative software engineering student with a strong foundation in problem-solving, algorithms, and data structures. Building efficient and scalable solutions to enhance customer experiences.",
    phone: "+919345450064",
    email: "dharshansenthil209@gmail.com",
    portfolioLink: "https://dharshan209.github.io/protfolio/",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dharshan-senthil-2a1622225/",
      github: "http://github.com/dharshan209/",
      email: "mailto:dharshansenthil209@gmail.com",
      phone: "tel:+919345450064",
      portfolio: "https://dharshan209.github.io/protfolio/"
    }
  };
  
  // About Information
  export const aboutInfo = {
    title: "Software Engineering",
    paragraphs: [
      "I'm an innovative software engineering student with a strong foundation in problem-solving, algorithms, and data structures. My journey in tech has equipped me with expertise in Java, JavaScript, ReactJS, and NodeJS, allowing me to develop full-stack web applications and integrate cutting-edge AI technologies.",
      "Passionate about creating efficient and scalable solutions, I strive to enhance customer experiences through intuitive design and robust functionality. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
    ],
    keywords: ["Problem Solving", "Full Stack Development", "AI Integration"]
  };
  
  // Experience Data
  export const experiences: Experience[] = [
    {
      role: "SDE Intern",
      company: "Automotive Robotics India Pvt Ltd., Chennai",
      period: "Sep 2023 - Nov 2023",
      achievements: [
        "Developed AR-AI application prototype for Smart Worker project using Unity 3D",
        "Collaborated with cross-functional team to integrate AR and AI technologies",
        "Optimized application performance, reducing load time by 25%",
        "Received commendation for quick learning and efficient adaptation to company standards"
      ]
    }
  ];
  
  // Education Data
  export const educations: Education[] = [
    {
      degree: "B.Tech: Computer Science and Business Systems",
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      period: "Nov 2021 - Present",
      score: {
        label: "CGPA",
        value: "7.82"
      }
    },
    {
      degree: "Higher Secondary",
      institution: "Vidhya Vikas Boys Matrix Higher Secondary School, Thanjavur",
      period: "June 2017 - Mar 2019",
      score: {
        label: "Score",
        value: "79.5"
      }
    }
  ];
  
  // Achievements Data
  export const achievements: Achievement[] = [
    {
      title: "Cubethon 23 Kochi",
      description: "Achieved Second Runner-up position, displaying exceptional skills and dedication",
      icon: "Trophy"
    },
    {
      title: "Riggathon 22 Coimbatore",
      description: "Ranked in the top 10 teams, demonstrating excellence in the competition",
      icon: "Award"
    },
    {
      title: "Hack-AI-thon 23 Coimbatore",
      description: "Advanced to the finals, showcasing strong performance",
      icon: "Star"
    }
  ];
  
  // Skills Data
  export const programmingSkills: Skill[] = [
    { name: 'Java', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'ReactJS', level: 80 },
    { name: 'NodeJS', level: 75 }
  ];
  
  export const toolsAndTechnologies: Skill[] = [
    { name: 'Git', level: 85 },
    { name: 'Redux', level: 80 },
    { name: 'Unity', level: 75 },
    { name: 'MySQL', level: 70 }
  ];
  
  export const coreCompetencies = [
    'Object Oriented Programming',
    'Data Structures & Algorithms',
    'Problem Solving',
    'Analytical Skills',
    'Communication Skills'
  ];
  
  // Projects Data
  export const projects: Project[] = [
    {
      title: "TAP — Turn Art into Pages",
      description: "A full-stack web platform for generating AI-personalized storybooks from user-uploaded images.",
      technologies: ['ReactJS', 'NodeJS', 'Express', 'MySQL'],
      features: [
        "Implemented features including image upload, product system with shopping cart",
        "Integrated Razorpay payment system",
        "Built an admin panel for efficient order management and tracking"
      ],
      link: "http://WWW.tapyourstory.in",
      linkText: "View Project",
      colorGradient: "from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"
    },
    {
      title: "BUBBA — An AI-Augmented Reality companion",
      description: "An AR mental health support app with personalized interactions.",
      technologies: ['Unity 3D', 'TensorFlow', 'NLP'],
      features: [
        "Designed 3D avatars with real-time emotion recognition",
        "Enhanced user engagement and app interactivity",
        "Achieved 85% positive user feedback on app effectiveness"
      ],
      link: "https://youtu.be/fU7-pMCkVDo?si=M53U2kWPF5Kjzkjr",
      linkText: "Project Details",
      colorGradient: "from-purple-400 to-blue-600 dark:from-purple-600 dark:to-blue-800"
    }
  ];
  
  // Contact Information
  export const contactInfo: ContactInfo = {
    phone: "+91 9345450064",
    email: "dharshansenthil209@gmail.com",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dharshan-senthil-2a1622225/",
      github: "http://github.com/dharshan209/",
      portfolio: "https://dharshan209.github.io/protfolio/"
    }
  };
  
  // Navigation links
  export const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];