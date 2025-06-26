export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Firebase",
    detailedDescription: "A feature-rich e-commerce platform built from the ground up. It includes user authentication, product catalog, shopping cart, and a secure checkout process. The back-end is powered by Node.js and Express, with a MongoDB database for storing product and user data. The front-end is a responsive single-page application built with React.",
    image: "src/assets/Tap-WebSite.png",
    technologies: ["React", "Node.js", "Firebase", "Express"],
    demoLink: "https://tap-main.vercel.app/",
    codeLink: "https://github.com/Dharshan209/tap-main",
    metrics: {
      users: "1K+",
      performance: "95%",
      uptime: "99.9%"
    },
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search",
      "Shopping Cart & Checkout",
      "Payment Integration",
      "Admin Dashboard",
      "Real-time Inventory Management"
    ],
    challenges: "Optimizing database queries for large product catalogs and implementing secure payment processing.",
    impact: "Reduced checkout time by 40% and increased conversion rate by 25%."
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration using Socket.io and OpenAI API.",
    detailedDescription: "This application enables real-time, bi-directional communication between users, powered by WebSockets. It also integrates the OpenAI API, allowing users to chat with an intelligent AI assistant. The interface is designed to be intuitive and user-friendly.",
    image: "src/assets/Game-verse.png",
    technologies: ["React", "Socket.io", "OpenAI", "Node.js"],
    demoLink: "#",
    codeLink: "#",
    metrics: {
      messages: "10K+",
      responseTime: "< 2s",
      accuracy: "92%"
    },
    features: [
      "Real-time Messaging",
      "AI-Powered Responses",
      "Message History",
      "User Presence Indicators",
      "File Sharing",
      "Custom Chat Rooms"
    ],
    challenges: "Managing WebSocket connections at scale and optimizing AI response times.",
    impact: "Achieved 2-second average response time and 98% user satisfaction rate."
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates.",
    detailedDescription: "A Kanban-style task management application designed for team collaboration. Users can create boards, lists, and cards, and drag-and-drop them to update status. Real-time updates are handled by Firebase's Firestore, ensuring all users see changes instantly. Styled with Tailwind CSS for a modern and clean UI.",
    image: "src/assets/Fintrack.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    metrics: {
      teams: "50+",
      tasks: "5K+",
      efficiency: "+45%"
    },
    features: [
      "Kanban Board Interface",
      "Drag & Drop Functionality",
      "Real-time Collaboration",
      "Task Priority Levels",
      "Team Member Assignment",
      "Progress Analytics"
    ],
    challenges: "Implementing smooth drag-and-drop with real-time synchronization across multiple users.",
    impact: "Improved team productivity by 45% and reduced project completion time by 30%."
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern design and animations.",
    detailedDescription: "A personal portfolio site to showcase projects and skills. It features a sleek, modern design with smooth page transitions and animations powered by Framer Motion. The site is fully responsive and optimized for all screen sizes, from mobile phones to desktop monitors.",
    image: "https://via.placeholder.com/400x300/1f2937/yellow?text=Portfolio",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    codeLink: "#",
    metrics: {
      visitors: "500+",
      loadTime: "< 1s",
      mobile: "100%"
    },
    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark/Light Mode",
      "Interactive Elements",
      "SEO Optimized",
      "Contact Form Integration"
    ],
    challenges: "Optimizing animations for performance while maintaining visual appeal across devices.",
    impact: "Achieved 95+ Lighthouse score and 3-second average session duration increase."
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Weather forecasting app with interactive maps and charts.",
    detailedDescription: "This dashboard fetches and displays current weather data and forecasts from a third-party Weather API. It presents the information using interactive charts created with Chart.js and includes a map view to visualize weather in different locations.",
    image: "https://via.placeholder.com/400x300/1f2937/yellow?text=Weather+App",
    technologies: ["React", "Chart.js", "Weather API"],
    demoLink: "#",
    codeLink: "#",
    metrics: {
      accuracy: "98%",
      cities: "1K+",
      requests: "100K+"
    },
    features: [
      "Real-time Weather Data",
      "5-Day Forecast",
      "Interactive Maps",
      "Weather Charts",
      "Location Search",
      "Weather Alerts"
    ],
    challenges: "Handling API rate limits and caching strategies for optimal performance.",
    impact: "Reduced API costs by 60% through intelligent caching and delivered 98% accurate forecasts."
  },
  {
    id: 6,
    title: "Social Media App",
    description: "Social networking platform with real-time messaging.",
    detailedDescription: "A social platform where users can create profiles, make posts, follow other users, and engage with content. A key feature is the real-time private messaging system, built using Node.js and Socket.io, with a PostgreSQL database for robust data management.",
    image: "https://via.placeholder.com/400x300/1f2937/yellow?text=Social+Media",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
    metrics: {
      users: "2K+",
      posts: "15K+",
      engagement: "85%"
    },
    features: [
      "User Profiles & Authentication",
      "Real-time Messaging",
      "Post Creation & Sharing",
      "Follow/Unfollow System",
      "Like & Comment System",
      "News Feed Algorithm"
    ],
    challenges: "Scaling real-time features and implementing efficient content delivery algorithms.",
    impact: "Achieved 85% user engagement rate and 2K+ active monthly users within 6 months."
  }
];