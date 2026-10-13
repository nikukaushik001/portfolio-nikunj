import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Scene3D from "./components/Scene3D";

export default function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(900px_620px_at_72%_8%,rgba(217,164,65,0.10),transparent_62%),radial-gradient(760px_640px_at_12%_52%,rgba(90,130,175,0.11),transparent_64%),linear-gradient(180deg,#0a0b0f_0%,#08090c_42%,#0a0c10_100%)]" />
      {!reduceMotion && <Scene3D />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        Nikunj · Gurugram, Haryana, India
      </footer>
    </div>
  );
}
