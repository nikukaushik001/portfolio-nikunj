import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 transition-all duration-300 ${
          scrolled ? "drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" : ""
        }`}
      >
        <nav className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0c0d12]/80 backdrop-blur-xl p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center justify-between w-full px-3 py-1 gap-4">
            <span className="font-serif text-lg tracking-wide text-white">
              Nikunj<span className="text-gold">.</span>
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-colors whitespace-nowrap font-medium ${
                    isActive ? "text-black" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gold rounded-full -z-10 shadow-[0_0_20px_rgba(217,164,65,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-white/10 bg-[#0b0d12]/95 backdrop-blur-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between text-sm uppercase tracking-wider px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-gold text-black font-semibold"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
