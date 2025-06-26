const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm dark:shadow-gray-900/20';
  
  const hoverClasses = hover ? 'hover:shadow-lg dark:hover:shadow-gray-900/40 hover:border-yellow-400/50 dark:hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1' : '';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;