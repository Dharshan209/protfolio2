const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/dharshan-senthil',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12..." />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dharshansenthil',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569..." />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dharshan_senthil',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775..." />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:dharshansenthil209@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9..." />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
    {
      name: 'Download Resume',
      id: 'resume',
      url: '/Dharshan_Senthil_Resume.pdf', // Must be in /public
      external: true,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              DHARSHAN SENTHIL
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Software Developer passionate about creating efficient and scalable
              solutions. Specialized in React, Node.js, and modern web technologies.
              Experienced in building full-stack systems and AR-based applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors duration-300">
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>📧 dharshansenthil209@gmail.com</p>
              <p>📱 +91 93454 50064</p>
              <p>📍 Coimbatore, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} Dharshan Senthil. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
            Built with React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
