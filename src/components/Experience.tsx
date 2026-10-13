import Reveal from "./Reveal";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-6 py-28">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 flex items-center gap-3">Experience<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal><h2 className="font-serif text-4xl md:text-5xl mb-11">Where I've worked.</h2></Reveal>

      <div className="relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-1.5 before:bottom-1.5 before:w-px before:bg-white/15">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.08}>
            <article className="relative pb-10 last:pb-0 before:content-[''] before:absolute before:-left-8 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#0d0f14] before:border before:border-gold">
              <p className="text-xs text-gold tracking-wide mb-1.5">{e.when}</p>
              <h3 className="font-serif text-2xl mb-0.5">{e.role}</h3>
              <p className="text-white/50 text-sm mb-4">{e.org}</p>
              <ul className="space-y-2.5">
                {e.points.map((pt) => (
                  <li key={pt} className="relative pl-5 text-white/60 text-sm before:content-[''] before:absolute before:left-0.5 before:top-2.5 before:w-1.5 before:h-px before:bg-white/25">
                    {pt}
                  </li>
                ))}
              </ul>
              {e.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {e.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-white/70">{t}</span>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
