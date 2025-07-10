import Hero from "./Components/Sections/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Sections/Experience";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Layout/Footer";
import { ThemeProvider } from "./Contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden transition-colors duration-300 scroll-smooth">
        <Header />
        
        {/* Full Scrollable Sections with IDs */}
        <section id="home" className="min-h-screen scroll-mt-20"><Hero /></section>
        <section id="about" className="min-h-screen scroll-mt-20"><About /></section>
        <section id="skills" className="min-h-screen scroll-mt-20"><Skills /></section>
        <section id="experience" className="min-h-screen scroll-mt-20"><Experience /></section>
        <section id="projects" className="min-h-screen scroll-mt-20"><Projects /></section>
        {/* <section id="services" className="min-h-screen scroll-mt-20"><Services /></section> */}
        <section id="contact" className="min-h-screen scroll-mt-20"><Contact /></section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
