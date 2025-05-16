import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { Achievement as AchievementType } from '../../data';

type AchievementsProps = {
  achievements: AchievementType[];
};

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
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
    <motion.section 
      id="achievements" 
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
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
            <motion.div 
              key={index} 
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="h-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"></div>
              <div className="-mt-10 px-6 pb-6">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white dark:bg-gray-900 rounded-full shadow-lg border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent(achievement.icon)}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-center">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;