import Reveal from "./Reveal";
import { education, achievements } from "../data/resume";
import { GraduationCap, Award, Trophy, Sparkles, BookOpen } from "lucide-react";

const ACHIEVEMENT_ICONS: Record<string, typeof Trophy> = {
  Hackathons: Trophy,
  "AI & ML certifications": Award,
  "Data & generative AI": Sparkles,
};

export default function Education() {
  return (
    <section id="education" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
          <GraduationCap size={14} className="text-gold" />
          Education
          <span className="flex-1 h-px bg-white/10" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-10">Academic Foundation.</h2>
      </Reveal>

      {/* Main Degree Card */}
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-6 items-center hover:border-gold/30 hover:bg-[#12141d]/90 transition-all duration-300 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-medium mb-3">
              <BookOpen size={12} />
              <span>Undergraduate Studies</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              {education.degree}
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              {education.school}
            </p>
            <p className="text-white/40 text-xs md:text-sm mt-1">
              {education.when} · Full-Time
            </p>
          </div>

          <div className="md:text-right bg-white/[0.03] border border-white/10 p-5 rounded-2xl md:min-w-[170px] text-center">
            <div className="font-serif text-4xl md:text-5xl text-gold font-normal">
              {education.cgpa.split(" / ")[0]}
            </div>
            <div className="text-xs text-white/50 tracking-wider uppercase mt-1">
              CGPA / 10
            </div>
          </div>
        </div>
      </Reveal>

      {/* Certifications & Achievements Section */}
      <div className="mt-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
            <Award size={14} className="text-gold" />
            Certifications &amp; Milestones
            <span className="flex-1 h-px bg-white/10" />
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
            Beyond the curriculum.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = ACHIEVEMENT_ICONS[a.k] || Award;
            return (
              <Reveal key={a.k} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur-md p-6 md:p-7 hover:border-gold/30 hover:bg-[#12141d]/90 transition-all duration-300 h-full flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
                      <Icon size={18} />
                    </div>
                    <div className="text-xs font-semibold tracking-widest text-gold uppercase mb-2">
                      {a.k}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
