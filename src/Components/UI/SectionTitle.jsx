const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className}`}>
      <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-yellow-400 mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;