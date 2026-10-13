import Reveal from "./Reveal";
import { experience } from "../data/resume";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
          <Briefcase size={14} className="text-gold" />
          Experience
          <span className="flex-1 h-px bg-white/10" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Where I've worked.</h2>
      </Reveal>
      <Reveal>
        <p className="text-white/60 max-w-[62ch] text-sm md:text-base mb-14">
          Hands-on engineering across startups, public institutions, and intensive bootcamps — building production systems and agentic AI workflows.
        </p>
      </Reveal>

      <div className="relative pl-6 md:pl-10">
        {/* Continuous connected timeline line */}
        <div className="absolute left-[7px] md:left-[11px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-gold via-white/20 to-transparent" />

        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.role} delay={i * 0.08}>
              <div className="relative group">
                {/* Aligned glowing timeline node */}
                <div className="absolute -left-[27px] md:-left-[39px] top-6 w-5 h-5 rounded-full bg-[#0c0d12] border-2 border-gold flex items-center justify-center shadow-[0_0_12px_rgba(217,164,65,0.6)] group-hover:scale-110 group-hover:border-white transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-white transition-colors" />
                </div>

                {/* Experience Card */}
                <article className="rounded-2xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md p-6 md:p-8 hover:border-gold/30 hover:bg-[#12141c]/90 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-gold transition-colors">
                        {e.role}
                      </h3>
                      <p className="text-white/80 font-medium text-base mt-0.5">{e.org}</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-gold/30 bg-gold/10 text-gold self-start md:self-auto">
                      <Calendar size={12} />
                      <span>{e.when}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-white/70 text-sm md:text-[15px] leading-relaxed">
                        <CheckCircle2 size={16} className="text-gold shrink-0 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {e.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-white/80 hover:border-gold/30 hover:text-white transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
