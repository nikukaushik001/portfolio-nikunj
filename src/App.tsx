import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Scene3D from "./components/Scene3D";
import { ArrowUp, Heart } from "lucide-react";

export default function App() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08090c] text-[#eceef2] selection:bg-gold/30 selection:text-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-[#e8be66] to-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Ambient background glows */}
      <div className="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(900px_620px_at_75%_10%,rgba(217,164,65,0.08),transparent_65%),radial-gradient(800px_650px_at_15%_50%,rgba(90,130,175,0.07),transparent_65%),linear-gradient(180deg,#0a0b0f_0%,#08090c_45%,#0a0c10_100%)]" />

      {/* Ambient 3D canvas */}
      {!reduceMotion && <Scene3D />}

      {/* Navigation */}
      <Nav />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 relative z-10 bg-[#07080b]">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-white">Nikunj</span>
            <span>·</span>
            <span>Full-Stack &amp; Agentic AI Builder</span>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <span>Crafted with React, Three.js &amp; Tailwind CSS</span>
          </div>

          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Nikunj · Gurugram, Haryana, India
          </div>
        </div>
      </footer>

      {/* Scroll to top floating pill */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gold/90 hover:bg-gold text-black shadow-[0_4px_20px_rgba(217,164,65,0.4)] transition-all hover:scale-110 duration-200"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
