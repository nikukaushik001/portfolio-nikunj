import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/resume";
import resumePdf from "../assets/Nikunj_CV.pdf";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import {
  Mail,
  Copy,
  Check,
  Download,
  Send,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Inquiry from Portfolio"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center justify-center gap-3">
          <Mail size={14} className="text-gold" />
          Get In Touch
          <span className="w-12 h-px bg-white/10" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-serif text-4xl md:text-6xl text-center text-white mb-4">
          Let's build something extraordinary.
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-white/60 text-center text-base md:text-lg max-w-[55ch] mx-auto mb-14">
          Whether you have an engineering role, a high-impact project, or an AI research idea — my inbox is always open.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        {/* Quick Message Form */}
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md p-7 md:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <h3 className="font-serif text-2xl text-white mb-2 flex items-center gap-2">
              <Send size={18} className="text-gold" />
              Send a Direct Message
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Write your subject and message below. Clicking send will open your email client pre-composed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Full-Stack / AI Role Opportunity"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 focus:bg-white/[0.05] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Nikunj, I'd like to discuss an opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 focus:bg-white/[0.05] transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gold text-black shadow-[0_8px_25px_rgba(217,164,65,0.35)] hover:brightness-110 transition duration-200"
              >
                <Send size={16} />
                <span>Launch Email Draft</span>
              </button>
            </form>
          </div>
        </Reveal>

        {/* Contact Info & Social Connections */}
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Email Address</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white hover:text-gold transition font-medium text-sm md:text-base"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/80 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition"
                  title="Copy Email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} className="text-gold" />
                <span className="text-sm text-white font-medium">Availability &amp; Time Zone</span>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Based in Gurugram, India (IST / UTC+5:30). Open to remote globally and on-site roles. Fast turnaround on emails within 24 hours.
              </p>
            </div>

            {/* Social Channels Strip */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-gold/10 text-white transition group"
              >
                <LinkedinIcon size={18} className="text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-white/40">Network</div>
                  <div className="text-sm font-medium">LinkedIn</div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-gold/10 text-white transition group"
              >
                <GithubIcon size={18} className="text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-white/40">Code</div>
                  <div className="text-sm font-medium">GitHub</div>
                </div>
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-gold/10 text-white transition group"
              >
                <LeetcodeIcon size={18} className="text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-white/40">Algorithms</div>
                  <div className="text-sm font-medium">LeetCode</div>
                </div>
              </a>

              <a
                href={resumePdf}
                download="Nikunj_CV.pdf"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-gold/10 text-white transition group"
              >
                <Download size={18} className="text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-white/40">Curriculum Vitae</div>
                  <div className="text-sm font-medium">Download CV</div>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
