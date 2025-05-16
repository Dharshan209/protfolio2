import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneCall, ExternalLink, Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { Text3D, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useTheme } from '../../providers/ThemeProvider';

type HeroProps = {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    portfolioLink: string;
    socialLinks: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
  };
  scrollToSection: (sectionId: string) => void;
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.2,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

// Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      delay: custom * 0.2 + 0.6,
      duration: 0.5,
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// 3D Text component
const NameText3D = ({ name, position = [0, 0, 0] }: { name: string, position?: [number, number, number] }) => {
  const { theme } = useTheme();
  const textRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (textRef.current) {
      textRef.current.position.set(position[0], position[1], position[2]);
      textRef.current.geometry.center();
    }
  }, [position]);
  
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.4} 
      floatIntensity={0.4}
    >
      <mesh ref={textRef} position={position} scale={[0.5, 0.5, 0.1]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={0.05}
          size={1.5}
          font="/fonts/inter_bold.json"
        >
          {name}
          <meshStandardMaterial 
            color={theme === 'dark' ? '#8b5cf6' : '#6d28d9'} 
            metalness={0.5}
            roughness={0.3}
          />
        </Text3D>
      </mesh>
    </Float>
  );
};

const HeroScene = ({ name }: { name: string }) => {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <NameText3D name={name} position={[0, 0, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </Canvas>
  );
};

const HeroSection: React.FC<HeroProps> = ({ personalInfo, scrollToSection }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };
  
  // Animated gradient background with GSAP
  useEffect(() => {
    if (!ref.current) return;
    
    gsap.to(ref.current, {
      backgroundPosition: '100% 50%',
      duration: 15,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);
  
  return (
    <motion.section 
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, rgba(109,40,217,0.05) 0%, rgba(14,165,233,0.05) 50%, rgba(249,115,22,0.05) 100%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 50%'
      }}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div 
              className="inline-block px-4 py-1 mb-6 rounded-full border border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30"
              variants={textVariants}
              custom={0}
            >
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                {personalInfo.title}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight"
              variants={textVariants}
              custom={1}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <motion.span 
                className="inline-block ml-2"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
              >
                👋
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={textVariants}
              custom={2}
            >
              {personalInfo.description}
            </motion.p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href={personalInfo.socialLinks.phone}
                className="primary-button flex items-center gap-2"
                variants={buttonVariants}
                custom={0}
                whileHover="hover"
                whileTap="tap"
              >
                <PhoneCall size={18} />
                Contact Me
              </motion.a>
              
              <motion.a
                href={personalInfo.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button flex items-center gap-2"
                variants={buttonVariants}
                custom={1}
                whileHover="hover"
                whileTap="tap"
              >
                <ExternalLink size={18} />
                View Portfolio
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-4 mt-2 ml-1"
                variants={buttonVariants}
                custom={2}
              >
                <motion.a
                  href={personalInfo.socialLinks.email}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                  aria-label="Email"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </motion.a>
                
                <motion.a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                
                <motion.a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>
          
          {/* Right content - 3D animation */}
          <motion.div 
            className="hidden lg:block h-[500px] relative perspective-1000"
            variants={textVariants}
            custom={3}
            style={{
              rotateX,
              rotateY
            }}
          >
            <div className="w-full h-full">
              <div className="absolute inset-0">
                <HeroScene name={personalInfo.name} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <ChevronDown className="text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;