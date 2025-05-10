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

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
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
  title: "Software Development Engineer (SDE)",
  description: "Detail-oriented and innovative software engineer with strong proficiency in Java, JavaScript, ReactJS, and full-stack web development. Experienced in building scalable systems, developing RESTful APIs, and integrating AI/AR technologies.",
  phone: "+919345450064",
  email: "dharshansenthil209@gmail.com",
  location: "Coimbatore, India",
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
  title: "Software Development Engineer",
  paragraphs: [
    "I'm a detail-oriented and innovative software engineer with strong proficiency in Java, JavaScript, ReactJS, and full-stack web development. My experience includes building scalable systems, developing RESTful APIs, and integrating AI/AR technologies.",
    "With a strong foundation in data structures, algorithms, and object-oriented programming (OOP), I excel in working with agile teams, solving complex problems, and delivering high-quality solutions."
  ],
  keywords: ["Full-Stack Development", "Object-Oriented Programming", "REST API Development", "AI Integration"],
  profileImage: "src/profile.png"
};

// Experience Data
export const experiences: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Automotive Robotics India Pvt Ltd., Chennai",
    period: "Sep 2023 - Nov 2023",
    achievements: [
      "Built AR-AI application prototype using Unity 3D for Smart Worker project",
      "Integrated AI modules and AR functionality, increasing interactivity",
      "Optimized load time by 25% through performance tuning",
      "Collaborated with cross-functional teams to meet project standards"
    ]
  }
];

// Education Data
export const educations: Education[] = [
  {
    degree: "B.Tech: Computer Science and Business Systems",
    institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
    period: "2021 - Present",
    score: {
      label: "CGPA",
      value: "7.82"
    }
  },
  {
    degree: "Higher Secondary Education",
    institution: "Vidhya Vikas Boys Higher Secondary School, Thanjavur",
    period: "2017 - 2019",
    score: {
      label: "Score",
      value: "79.5"
    }
  }
];

// Achievements Data
export const achievements: Achievement[] = [
  {
    title: "Cubethon 2023, Kochi",
    description: "Second Runner-up position in the competition",
    icon: "Trophy"
  },
  {
    title: "Riggathon 2022, Coimbatore",
    description: "Top 10 Finalist",
    icon: "Award"
  },
  {
    title: "Hack-AI-thon 2023, Coimbatore",
    description: "Finalist",
    icon: "Star"
  }
];

// Certification Data
export const certifications: Certification[] = [
  {
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Udemy",
    date: "2025",
    description: "Comprehensive course covering React fundamentals and advanced topics including React Hooks, Context API, Redux, Next.js, and performance optimization."
  }
];

// Skills Data
export const programmingSkills: Skill[] = [
  { name: 'Java', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'ReactJS', level: 80 },
];

export const toolsAndTechnologies: Skill[] = [
  { name: 'Git', level: 85 },
  { name: 'MySQL', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'Supabase', level: 70 },
  { name: 'Unity 3D', level: 70 },
];

export const coreCompetencies = [
  'Full-Stack Development',
  'Object-Oriented Programming (OOP)',
  'Data Structures & Algorithms (DSA)',
  'REST API Development',
  'Agile & Collaborative Development',
  'Problem Solving & Debugging',
  'Version Control (Git)'
];

// Projects Data
export const projects: Project[] = [
  {
    title: "AIenroute – AI Prompt & Chat Management Platform",
    description: "A full-stack application for customizable AI prompt management with real-time chat capabilities.",
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
    features: [
      "Built a full-stack app with customizable AI prompt management and real-time chat",
      "Implemented OAuth & email authentication, prompt filtering, search, and categorization",
      "Integrated with news APIs to deliver AI-related content",
      "Applied modular React architecture to ensure code scalability and reusability"
    ],
    link: "https://github.com/dharshan209/aienroute",
    linkText: "View GitHub",
    colorGradient: "from-green-400 to-teal-500 dark:from-green-600 dark:to-teal-700"
  },
  {
    title: "TAP – Turn Art into Pages",
    description: "A full-stack web platform for generating AI-personalized storybooks from user-uploaded images.",
    technologies: ['ReactJS', 'Node.js', 'Express', 'MySQL'],
    features: [
      "Developed a platform that converts user-uploaded images into AI-generated storybooks",
      "Implemented Razor pay payment gateway, product cart, and order management",
      "Built full admin panel for order tracking and content control"
    ],
    link: "http://www.tapyourstory.in",
    linkText: "View Project",
    colorGradient: "from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"
  },
  {
    title: "BUBBA – AR Mental Health App",
    description: "An AR mental health support app with personalized interactions.",
    technologies: ['Unity 3D', 'TensorFlow', 'Natural Language Processing (NLP)'],
    features: [
      "Created an AR mental health support app with emotion recognition and 3D avatars",
      "Integrated NLP for personalized interaction; received 85% positive feedback"
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
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];