import Reveal from "./Reveal";
import { skills } from "../data/resume";
import { Terminal, Database, Brain, Cloud, BookOpen, Wrench } from "lucide-react";

const GROUP_ICONS: Record<string, typeof Terminal> = {
  Languages: Terminal,
  "Backend & Databases": Database,
  "AI & Machine Learning": Brain,
  "Web & Cloud": Cloud,
  "Core Concepts": BookOpen,
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
          <Wrench size={14} className="text-gold" />
          Technical Stack
          <span className="flex-1 h-px bg-white/10" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">The tools I build with.</h2>
      </Reveal>
      <Reveal>
        <p className="text-white/60 max-w-[62ch] text-sm md:text-base mb-12">
          Specialized in production-ready web backends, agentic architectures, and modern cloud deployment.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {Object.entries(skills).map(([group, list], i) => {
          const Icon = GROUP_ICONS[group] || Terminal;
          const isFullWidth = group === "Core Concepts";

          return (
            <Reveal
              key={group}
              delay={i * 0.05}
              className={isFullWidth ? "md:col-span-2" : ""}
            >
              <div className="rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur-md p-6 md:p-7 hover:border-gold/30 hover:bg-[#12141d]/90 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest text-gold uppercase">
                      {group}
                    </h3>
                    <span className="text-[11px] text-white/40">
                      {list.length} technologies
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span
                      key={s}
                      className="text-xs md:text-sm px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/80 hover:border-gold/50 hover:bg-gold/10 hover:text-white hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
