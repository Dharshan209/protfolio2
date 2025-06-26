const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400 shadow-md hover:shadow-lg',
    secondary: 'border-2 border-white text-white dark:border-gray-300 dark:text-gray-300 hover:bg-white hover:text-black dark:hover:bg-gray-300 dark:hover:text-black focus:ring-white',
    outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring-yellow-400',
    ghost: 'text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;