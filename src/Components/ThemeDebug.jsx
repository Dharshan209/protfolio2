import { useTheme } from '../Contexts/ThemeContext';
import { useEffect, useState } from 'react';

const ThemeDebug = () => {
  const { isDark, toggleTheme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    const updateHtmlClass = () => {
      setHtmlClass(document.documentElement.className);
    };
    
    updateHtmlClass();
    const observer = new MutationObserver(updateHtmlClass);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 bg-red-500 text-white rounded-lg shadow-lg text-sm font-mono">
      <div><strong>🐛 Theme Debug</strong></div>
      <div>Context isDark: <span className="text-yellow-300">{isDark ? 'TRUE' : 'FALSE'}</span></div>
      <div>HTML classes: <span className="text-yellow-300">"{htmlClass || 'none'}"</span></div>
      <div>Expected: <span className="text-yellow-300">{isDark ? 'dark' : '(no dark class)'}</span></div>
      <button 
        onClick={() => {
          console.log('Debug button clicked');
          toggleTheme();
        }}
        className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs border-2 border-white"
      >
        🔄 Toggle Theme
      </button>
    </div>
  );
};

export default ThemeDebug;