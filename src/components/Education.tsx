import Reveal from "./Reveal";
import { education, achievements } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="max-w-[1120px] mx-auto px-6 py-28">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 flex items-center gap-3">Education<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal><h2 className="font-serif text-4xl md:text-5xl mb-11">Education.</h2></Reveal>

      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <h3 className="font-serif text-2xl mb-1.5">{education.degree}</h3>
            <p className="text-white/60 text-sm">{education.school} · {education.when}</p>
          </div>
          <div className="text-right md:text-right">
            <div className="font-serif text-4xl text-gold">{education.cgpa.split(" / ")[0]}</div>
            <div className="text-xs text-white/40 tracking-widest mt-1.5">CGPA / 10</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}><p className="text-xs tracking-widest text-white/40 mt-16 mb-3 flex items-center gap-3">Certifications &amp; achievements<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal delay={0.12}><h2 className="font-serif text-4xl md:text-5xl mb-11">Beyond the coursework.</h2></Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <Reveal key={a.k} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs tracking-widest text-white/40 mb-2.5">{a.k.toUpperCase()}</div>
              <p className="text-white/60 text-sm">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
