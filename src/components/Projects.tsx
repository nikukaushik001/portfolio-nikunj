import { useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../data/resume";
import hireloopShot from "../assets/proj-hireloop.jpg";
import braindeskShot from "../assets/proj-braindesk.jpg";
import gradingShot from "../assets/proj-grading.jpg";

const SHOTS: Record<string, string> = { hireloop: hireloopShot, braindesk: braindeskShot, grading: gradingShot };

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const shot = p.image ? SHOTS[p.image] : null;
  return (
    <Reveal delay={i * 0.08}>
      <article className="rounded-2xl border border-white/10 bg-white/[0.035] overflow-hidden hover:border-white/20 transition-colors">
        {shot && (
          <img src={shot} alt={`${p.name} landing page`} loading="lazy" className="w-full aspect-[1000/440] object-cover object-top border-b border-white/10" />
        )}
        <div className="p-8 grid md:grid-cols-[1fr_auto] gap-5 items-start">
          <div>
            <h3 className="font-serif text-3xl mb-1">{p.name}</h3>
            <p className="text-xs text-white/40 tracking-wide mb-3.5">{p.when}</p>
            <p className="text-white/60 max-w-[70ch]">{p.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-white/70">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex md:flex-col gap-2 md:min-w-[150px]">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-center px-4 py-2.5 rounded-xl border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20 transition">
              {p.linkLabel}
            </a>
            <button onClick={() => setOpen(!open)} className="text-sm px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 transition flex items-center justify-center gap-2">
              Details <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
            </button>
          </div>
        </div>
        <div className={`grid transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="px-8 pb-8 pt-6 border-t border-white/10">
              <h4 className="text-xs tracking-widest text-white/40 mb-3">WHAT I BUILT</h4>
              <ul className="space-y-2.5">
                {p.details.map((d) => (
                  <li key={d} className="relative pl-5 text-white/60 text-sm before:content-[''] before:absolute before:left-0.5 before:top-2.5 before:w-1.5 before:h-px before:bg-gold/70">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1120px] mx-auto px-6 py-28">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 flex items-center gap-3">Projects<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal><h2 className="font-serif text-4xl md:text-5xl mb-3">Three systems, all live or on GitHub.</h2></Reveal>
      <Reveal><p className="text-white/60 mb-11">Open any card for the engineering detail.</p></Reveal>
      <div className="grid gap-5">
        {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </section>
  );
}
