import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <Footer />
      </div>
    </>
  );
}

export default App;
