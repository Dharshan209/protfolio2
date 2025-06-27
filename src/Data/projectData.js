export const projects = [
  {
    id: 1,
    title: "TAP – Personalized E-Commerce Platform",
    description: "AI-powered gift shop platform for custom storybooks",
    detailedDescription: "A full-stack platform where users upload images to generate personalized storybooks using AI. Includes image handling with Firebase Storage, Firestore-based order management, Razorpay integration, and a full admin dashboard.",
    image: "/Tap-WebSite.png",
    technologies: ["React", "Node.js", "Firebase", "Express"],
    demoLink: "https://tap-main.vercel.app/",
    codeLink: "https://github.com/Dharshan209/tap-main",
    metrics: {
      users: "1K+",
      performance: "95%",
      uptime: "99.9%"
    },
    features: [
      "Image Upload and Processing",
      "Custom Storybook Generation",
      "Firebase & Razorpay Integration",
      "Admin Panel for Order Management",
      "Authentication & Secure Checkout",
      "Real-time Inventory Updates"
    ],
    challenges: "Managing large media files and optimizing image-to-book processing pipeline.",
    impact: "Increased gift store conversion rate by 25% and reduced manual creation time by 40%."
  },
  {
    id: 2,
    title: "StudyTracker – WhatsApp-Based Study Plan",
    description: "Task scheduler with Twilio WhatsApp integration",
    detailedDescription: "A 30-day challenge platform that helps users stick to study routines using WhatsApp reminders. Features include Firebase Firestore scheduling, daily check-ins, webhook queues, and task status analytics.",
    image: "/StudyTracker.png",
    technologies: ["React", "Firebase", "Twilio", "Cloud Functions"],
    demoLink: "https://study-tracker-tan-gamma.vercel.app/",
    codeLink: "https://github.com/Dharshan209/StudyTracker",
    metrics: {
      tasksCompleted: "10K+",
      latency: "<1s",
      engagement: "+60%"
    },
    features: [
      "Daily WhatsApp Reminders",
      "Progress Tracker",
      "Firestore Queue Handling",
      "Real-time Scheduling",
      "Check-in Analytics",
      "User-Specific Study Plans"
    ],
    challenges: "Building scalable queue systems and integrating with external APIs in cloud functions.",
    impact: "Boosted user consistency by 60% and reduced study dropout rate."
  },
  {
    id: 6,
    title: "IB – Static Website for Indian Bio-Tech Company",
    description: "Responsive corporate product showcase site",
    detailedDescription: "A modern static site for a biological company to list their products and services. Built using React and Tailwind for a clean, responsive design with product listing, contact form, and accessible layout.",
    image: "src/assets/IB.png",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demoLink: "https://indianbiologicals.com",
    codeLink: "https://github.com/Dharshan209/ib",
    metrics: {
      performance: "98%",
      bounceRate: "-30%",
      visitors: "1K+"
    },
    features: [
      "Product Showcase",
      "Responsive Layout",
      "Contact Form",
      "Fast Loading via Vite",
      "Accessible Design",
      "Modern Navigation"
    ],
    challenges: "Ensuring mobile responsiveness and low load times for rural users.",
    impact: "Increased company web presence and improved customer inquiry rate."
  },
  {
    id: 4,
    title: "GameVerse – Real-Time Social Deduction Game",
    description: "Multiplayer game with WebRTC-based video chat",
    detailedDescription: "A real-time video-based game where players join rooms, receive roles, and interact in deduction rounds. Built with WebRTC for peer-to-peer video and Socket.IO for fast game-state sync.",
    image: "/Game-verse.png",
    technologies: ["React", "WebRTC", "Socket.IO", "Node.js"],
    demoLink: "https://game-client-rouge.vercel.app/",
    codeLink: "https://github.com/Dharshan209/gameverse",
    metrics: {
      latency: "<150ms",
      users: "5+ concurrent",
      uptime: "100%"
    },
    features: [
      "Peer-to-Peer Video",
      "Role Assignment",
      "Room Creation & Sync",
      "Real-time Gameplay",
      "Optimized Performance",
      "Multiplayer State Handling"
    ],
    challenges: "Handling cross-browser WebRTC compatibility and latency tuning.",
    impact: "Enabled seamless gameplay across devices and reduced lag by 15%."
  },
  {
    id: 5,
    title: "FinTrack – Personal Finance Tracker with Telegram Integration",
    description: "Telegram-powered expense tracking platform",
    detailedDescription: "A finance dashboard with automatic Telegram-based bill parsing, built with Supabase and React. Visualizes expense data and syncs real-time across devices via message parsing logic.",
    image: "/Fintrack.png",
    technologies: ["React", "Supabase", "Telegram Bot API"],
    demoLink: "https://fintrack-murex-two.vercel.app/",
    codeLink: "https://github.com/Dharshan209/fintrack",
    metrics: {
      logsParsed: "2K+",
      usage: "80% via Telegram",
      feedback: "Highly positive"
    },
    features: [
      "Telegram Message Parsing",
      "Real-Time Sync",
      "Dashboard Analytics",
      "Auto Logging",
      "Budget Visualization",
      "Supabase Back-end"
    ],
    challenges: "Parsing unstructured messages and ensuring real-time update consistency.",
    impact: "Reduced manual logging by 80% and became the top-used feature in beta."
  },
  {
    id: 3,
    title: "Bubba – AR Mental Health App",
    description: "AR app with emotion-aware 3D avatars",
    detailedDescription: "An augmented reality app that supports mental wellness via 3D avatars and emotion recognition. Features include a TensorFlow-powered NLP engine for user support and Unity-based AR interface.",
    image: "/Bubba.png",
    technologies: ["Unity 3D", "TensorFlow", "NLP"],
    demoLink: "https://youtu.be/fU7-pMCkVDo?si=3hJ-CzvI4IbDj-S8",
    codeLink: "#",
    metrics: {
      satisfaction: "85%",
      event: "Cubethon 2023 – 2nd Runner-up",
      ARModels: "Real-time"
    },
    features: [
      "Emotion Detection",
      "3D Avatars",
      "NLP Chat Support",
      "Unity-based Interface",
      "Customizable UI",
      "Survey Feedback System"
    ],
    challenges: "Real-time emotion mapping and accurate NLP response tuning.",
    impact: "Achieved 85% satisfaction and award-winning implementation in Cubethon 2023."
  }
];
