import { useState, useEffect } from "react";

const LINKS = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.toLowerCase()));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`fixed top-4 z-50 left-1/2 -translate-x-1/2 max-w-[calc(100vw-24px)] ${open ? "" : ""}`}>
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-2 py-1.5 shadow-2xl md:flex">
        <button
          className="md:hidden flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          Menu
        </button>
        <div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-0.5 md:items-center`}>
          {LINKS.map((l) => {
            const id = l.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-xs uppercase tracking-wider px-3.5 py-2 rounded-full transition-colors whitespace-nowrap ${
                  active === id ? "bg-gold text-black font-medium" : "text-white/60 hover:text-white"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
