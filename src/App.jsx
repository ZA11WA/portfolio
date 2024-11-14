import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Funkcja do obliczania progresu przewijania
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Tło obejmujące całą stronę */}
      <div className="fixed top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3), rgba(255,255,255,0))] z-[-1]"></div>
      
      {/* Główna zawartość strony */}
      <div className="container mx-auto px-8">
        <ProgressBar progress={scrollProgress} />
        <Navbar />

        {/* Progress Bar */}

        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
