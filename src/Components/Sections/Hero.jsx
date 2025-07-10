import Button from '../UI/Button';

const Hero = ({ onNavigate }) => {
  const handleNavigation = (sectionId) => {
    if (onNavigate) {
      onNavigate(`/${sectionId}`);
    }
  };

  return (
    <section className="min-h-screen from-gray-50 to-white dark:from-black-900 dark:to-black text-gray-900 dark:text-white pt-20 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce-slow opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400/50 rounded-full animate-ping opacity-40"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-lg rotate-45 animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                <p className="text-yellow-400 text-sm font-medium tracking-wide">
                  Available for opportunities
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-widest uppercase font-medium">
                  Hello, I'm
                </p>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                    Dharshan
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Senthil</span>
                </h1>
                <div className="space-y-2">
                  <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-light">
                    Full-Stack Developer
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                    Crafting digital experiences with modern technologies. 
                    Passionate about clean code, user experience, and innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => handleNavigation('contact')}
              >
                <span>Let's Work Together</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handleNavigation('projects')}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>View Projects</span>
              </Button>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative group">
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700 group-hover:border-yellow-400 transition-all duration-500 group-hover:shadow-yellow-400/20">
                <img
                  src="/Profile.jpeg"
                  alt="Dharshan Senthil - Full Stack Developer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full animate-bounce-slow"></div>
              
              {/* Tech icons floating around */}
              <div className="absolute top-8 -left-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center group-hover:animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute bottom-8 -right-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center group-hover:animate-bounce delay-100">
                <span className="text-2xl">🟢</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;