// src/data/skillsData.js
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc'; 

export const categorizedSkills = {
  'Languages': [
    {
      name: 'Java',
      icon: <FaJava />,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      level: 'Intermediate',
      description: 'Developing robust server-side applications and APIs.'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      level: 'Advanced',
      description: 'Core language for web interactivity.'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      level: 'Expert',
      description: 'Structuring web content semantically.'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      level: 'Advanced',
      description: 'Styling modern, responsive layouts.'
    },
  ],
  'Frameworks': [
    {
      name: 'React',
      icon: <FaReact />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      level: 'Advanced',
      description: 'Building scalable single-page applications.'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      level: 'Advanced',
      description: 'Runtime for server-side JavaScript.'
    },
    {
      name: 'Express',
      icon: <SiExpress />,
      color: 'text-gray-300',
      bgColor: 'bg-gray-300/10',
      level: 'Advanced',
      description: 'Minimalist web framework for Node.js.'
    },
  ],
  'Databases': [
    {
      name: 'MySQL',
      icon: <SiMysql />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      level: 'Intermediate',
      description: 'Managing relational databases.'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      level: 'Intermediate',
      description: 'Utilizing NoSQL databases.'
    },
  ],
  'Tools': [
    {
        name: 'Git',
        icon: <FaGitAlt />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-600/10',
        level: 'Advanced',
        description: 'Version control for tracking changes and collaborating effectively.'
      },
      {
        name: 'VS Code',
        icon: <VscCode />, // Corrected icon usage
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
        level: 'Expert',
        description: 'Primary code editor, customized for optimal productivity.'
      },
  ]
};
