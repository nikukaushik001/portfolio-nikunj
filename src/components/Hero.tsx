import { motion } from "framer-motion";
import { profile } from "../data/resume";
import portrait from "../assets/portrait.jpg";
import resumePdf from "../assets/Nikunj_CV.pdf";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid md:grid-cols-[1.15fr_.85fr] items-center gap-12 max-w-[1120px] mx-auto px-6 pt-32 pb-16">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs text-white/60 border border-white/10 rounded-full px-3.5 py-1.5 bg-white/[0.03]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(217,164,65,0.8)]" />
          Open to internships and full-time roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.7, 0.28, 1] }}
          className="font-serif font-normal text-[clamp(4.2rem,13vw,9.5rem)] leading-[0.86] tracking-tight my-5 bg-gradient-to-b from-white via-[#cdd3dc] to-[#8b93a0] bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        <p className="text-lg text-white">
          {profile.role.split("&").map((part, i) => (i === 1 ? <em key={i} className="font-serif italic text-gold not-italic-none">&amp;{part}</em> : part))}
        </p>
        <p className="text-sm text-white/40 mb-6">{profile.location} · {profile.degree}</p>
        <p className="text-white/60 max-w-[56ch] mb-8">{profile.intro}</p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium bg-gold text-black shadow-[0_16px_44px_-20px_rgba(217,164,65,0.95)] hover:brightness-110 transition">
            View my work →
          </a>
          <a href={resumePdf} download="Nikunj_CV.pdf" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium bg-white/5 border border-white/15 hover:bg-white/10 transition">
            Download resume
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-[400px] justify-self-end">
        <div className="absolute -inset-[14%] rounded-full -z-10 blur-3xl bg-[radial-gradient(circle,rgba(217,164,65,0.2),rgba(90,130,175,0.12)_42%,transparent_68%)]" />
        <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/15 shadow-[0_60px_110px_-50px_rgba(0,0,0,1)]">
          <img src={portrait} alt="Nikunj portrait" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute left-5 right-5 bottom-4">
            <div className="font-serif text-2xl text-white drop-shadow-lg">Nikunj</div>
          </div>
        </div>
      </div>
    </section>
  );
}
