import Reveal from "./Reveal";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1120px] mx-auto px-6 py-28">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 flex items-center gap-3">Skills<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal><h2 className="font-serif text-4xl md:text-5xl mb-11">The stack I reach for.</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([group, list], i) => (
          <Reveal key={group} delay={i * 0.05} className={group === "Core Concepts" ? "md:col-span-2" : ""}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-xs font-medium tracking-widest text-gold mb-4">{group.toUpperCase()}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="text-sm px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-white/70 hover:bg-gold/10 hover:text-[#f3dcb0] hover:-translate-y-0.5 transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
