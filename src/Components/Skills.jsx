import { categorizedSkills } from '../Data/skillsData';
import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const SkillCard = ({ skill }) => {
  return (
    <div 
      className="group [perspective:1000px]"
      role="button"
      tabIndex={0}
      aria-label={`${skill.name} skill card`}
    >
      {/* Inner container for the 3D flip effect */}
      <div className="relative h-48 w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        
        {/* Front of the card */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center [backface-visibility:hidden] backdrop-blur-sm">
          <div className={`text-4xl mb-4 flex justify-center items-center h-16 w-16 rounded-xl ${skill.bgColor} transition-colors duration-300`}>
            <span className={`text-3xl ${skill.color}`} aria-hidden="true">
              {skill.icon}
            </span>
          </div>
          <h4 className="text-center text-gray-900 dark:text-white font-semibold text-lg">
            {skill.name}
          </h4>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border border-yellow-400/50 rounded-2xl p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className={`text-lg font-bold ${skill.color} mb-3`}>
            {skill.level}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, skills }) => {
  return (
    <Card padding="lg" className="flex flex-col">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center border-b-2 border-yellow-400 pb-2">
        {category}
      </h3>
      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Card>
  );
};

const Skills = () => {
  const skillCategories = Object.entries(categorizedSkills);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white" id="skills">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionTitle 
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Main grid container for skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              category={category} 
              skills={skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;