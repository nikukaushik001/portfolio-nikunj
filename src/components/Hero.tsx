import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resume";
import portrait from "../assets/portrait.jpg";
import resumePdf from "../assets/Nikunj_CV.pdf";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import {
  ArrowRight,
  Download,
  Mail,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="home"
      className="min-h-[92vh] grid md:grid-cols-[1.2fr_.8fr] items-center gap-12 max-w-[1120px] mx-auto px-6 pt-36 pb-20 scroll-mt-28 relative"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 text-xs text-white/70 border border-white/10 rounded-full px-4 py-1.5 bg-[#0e1017]/90 backdrop-blur-md shadow-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to internships &amp; full-time AI/Full-Stack roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.7, 0.28, 1] }}
          className="font-serif font-normal text-[clamp(4.2rem,11vw,8.5rem)] leading-[0.88] tracking-tight my-4 bg-gradient-to-b from-white via-[#dce1e8] to-[#9199a6] bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white font-medium mb-1"
        >
          {profile.role.split("&").map((part, i) =>
            i === 1 ? (
              <span key={i} className="font-serif italic text-gold font-normal">
                &amp;{part}
              </span>
            ) : (
              part
            )
          )}
        </motion.p>

        <p className="text-sm text-white/40 mb-6 flex items-center gap-2">
          <span>{profile.location}</span>
          <span>·</span>
          <span>{profile.degree}</span>
        </p>

        <p className="text-white/70 text-base md:text-[17px] leading-relaxed max-w-[58ch] mb-8">
          {profile.intro}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-9">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold bg-gold text-black shadow-[0_8px_30px_rgba(217,164,65,0.4)] hover:brightness-110 hover:-translate-y-0.5 transition duration-200"
          >
            <span>View my work</span>
            <ArrowRight size={16} />
          </a>

          <a
            href={resumePdf}
            download="Nikunj_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition duration-200"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium bg-white/[0.03] border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
            title="Copy email address"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs text-white/40 uppercase tracking-widest mr-1">Connect:</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition"
            aria-label="LeetCode Profile"
          >
            <LeetcodeIcon size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition"
            aria-label="Email Contact"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      {/* Hero Image / Portrait Showcase */}
      <div className="relative w-full max-w-[380px] justify-self-center md:justify-self-end mt-4 md:mt-0">
        <div className="absolute -inset-4 rounded-3xl -z-10 blur-2xl bg-gradient-to-tr from-gold/20 via-steel/15 to-transparent opacity-80" />
        
        <div className="relative rounded-3xl overflow-hidden aspect-[4/4.5] border border-white/15 bg-[#0e1017] shadow-[0_30px_70px_rgba(0,0,0,0.85)] group">
          <img
            src={portrait}
            alt="Nikunj portrait"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
          
          <div className="absolute left-6 right-6 bottom-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 text-gold text-xs font-medium mb-1.5">
              <Sparkles size={12} />
              <span>Full-Stack &amp; AI Builder</span>
            </div>
            <div className="font-serif text-2xl text-white drop-shadow">Nikunj</div>
            <div className="text-xs text-white/60">Based in Gurugram, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
