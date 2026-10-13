import Reveal from "./Reveal";
import { GraduationCap, ScanText, Timer, Trophy, Layers, Cpu, Rocket } from "lucide-react";

const stats = [
  { n: "8.80", l: "CGPA at K.R. Mangalam University", icon: GraduationCap },
  { n: "92%", l: "Text extraction accuracy on handwritten scans", icon: ScanText },
  { n: "~80%", l: "Manual grading time eliminated by automation", icon: Timer },
  { n: "7+", l: "Hackathons shipped in agile team sprints", icon: Trophy },
];

const cards = [
  {
    h: "Academic & Background",
    p: "B.Tech in Computer Science (Specialization in AI & ML) at K.R. Mangalam University, Gurugram (2023–2027), coupled with deep practical work at Gurugram Police's cybercrime unit and institutional research labs.",
    icon: Layers,
  },
  {
    h: "Full-Stack & Agentic Core",
    p: "Engineering distributed, decoupled backends and intelligent agents: REST API design, LangGraph workflows, BullMQ/Redis job queues, and robust database architecture across Node.js, Express, FastAPI, PostgreSQL, and MongoDB.",
    icon: Cpu,
  },
  {
    h: "Production Philosophy",
    p: "I focus on shipping production systems that solve tangible problems — from asynchronous resume pipelines handling 200+ candidates on AWS EC2 to multi-tenant RAG support platforms deployed live on Vercel.",
    icon: Rocket,
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
          About
          <span className="flex-1 h-px bg-white/10" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Systems that ship, not demos.</h2>
      </Reveal>
      <Reveal>
        <p className="text-white/60 max-w-[64ch] text-sm md:text-base mb-12">
          A third-year Computer Science (AI &amp; ML) engineer who bridges reliable backend infrastructure with cutting-edge agentic intelligence to build real, scalable software.
        </p>
      </Reveal>

      {/* Numerical Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="group rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur-md p-6 hover:border-gold/30 hover:bg-[#131520]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-3xl md:text-4xl text-gold group-hover:scale-105 transition-transform">
                    {s.n}
                  </div>
                  <Icon size={18} className="text-white/30 group-hover:text-gold transition-colors" />
                </div>
                <div className="text-xs md:text-sm text-white/60 leading-relaxed font-normal">{s.l}</div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Focus Pillars */}
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.h} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur-md p-7 hover:border-gold/30 hover:bg-[#131520]/90 transition-all duration-300 h-full flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                    {c.h}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{c.p}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
