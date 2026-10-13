import Reveal from "./Reveal";
import { profile } from "../data/resume";
import resumePdf from "../assets/Nikunj_CV.pdf";

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-6 py-28 text-center">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 justify-center flex items-center gap-3">Contact</p></Reveal>
      <Reveal><h2 className="font-serif text-5xl md:text-6xl mb-5">Let's build something meaningful.</h2></Reveal>
      <Reveal><p className="text-white/60 mb-10">The fastest way to reach me is email — I read everything.</p></Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={`mailto:${profile.email}`} className="px-6 py-3.5 rounded-full text-sm font-medium bg-gold text-black hover:brightness-110 transition">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full text-sm font-medium bg-white/5 border border-white/15 hover:bg-white/10 transition">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full text-sm font-medium bg-white/5 border border-white/15 hover:bg-white/10 transition">GitHub</a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full text-sm font-medium bg-white/5 border border-white/15 hover:bg-white/10 transition">LeetCode</a>
          <a href={resumePdf} download="Nikunj_CV.pdf" className="px-6 py-3.5 rounded-full text-sm font-medium bg-white/5 border border-white/15 hover:bg-white/10 transition">Download resume</a>
        </div>
      </Reveal>
    </section>
  );
}
