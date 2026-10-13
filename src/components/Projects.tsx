import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "../data/resume";
import hireloopShot from "../assets/proj-hireloop.jpg";
import braindeskShot from "../assets/proj-braindesk.jpg";
import gradingShot from "../assets/proj-grading.jpg";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const SHOTS: Record<string, string> = {
  hireloop: hireloopShot,
  braindesk: braindeskShot,
  grading: gradingShot,
};

function ProjectCard({
  p,
  i,
}: {
  p: (typeof projects)[number];
  i: number;
}) {
  const [open, setOpen] = useState(false);
  const shot = p.image ? SHOTS[p.image] : null;

  return (
    <Reveal delay={i * 0.08}>
      <article className="rounded-3xl border border-white/10 bg-[#0f1117]/85 backdrop-blur-md overflow-hidden hover:border-gold/30 hover:bg-[#12141d]/90 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group">
        {shot && (
          <div className="relative overflow-hidden aspect-[16/7.5] border-b border-white/10 bg-black/40">
            <img
              src={shot}
              alt={`${p.name} screenshot`}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white/80 font-medium">
                <Sparkles size={11} className="text-gold" />
                Featured Project
              </span>
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                  {p.when}
                </span>
              </div>

              <p className="text-white/70 text-base leading-relaxed max-w-[72ch] mb-5">
                {p.summary}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-white/80 group-hover:border-white/20 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row md:flex-col gap-2.5 min-w-full md:min-w-[160px] pt-2 md:pt-0">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl border border-gold/40 bg-gold/15 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-200 shadow-sm"
              >
                {p.linkLabel.toLowerCase().includes("github") ? (
                  <GithubIcon size={15} />
                ) : (
                  <ExternalLink size={15} />
                )}
                <span>{p.linkLabel}</span>
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
                aria-expanded={open}
              >
                <span>Architecture</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Deep-Dive Expandable Details */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-semibold tracking-widest text-gold uppercase mb-4 flex items-center gap-2">
                    <Layers size={13} />
                    Engineering &amp; Implementation Details
                  </h4>
                  <ul className="space-y-3">
                    {p.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-white/75 text-sm md:text-[15px] leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="text-gold/90 shrink-0 mt-1" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai") {
      return (
        p.tags.some((t) =>
          ["LangGraph", "LangChain", "FastAPI", "NLP", "OCR", "Pydantic", "ChromaDB"].includes(t)
        )
      );
    }
    if (filter === "fullstack") {
      return p.tags.some((t) =>
        ["React.js", "Node.js", "PostgreSQL", "FastAPI", "AWS EC2", "AWS S3"].includes(t)
      );
    }
    return true;
  });

  return (
    <section id="projects" className="max-w-[1120px] mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-3">
          <Layers size={14} className="text-gold" />
          Projects
          <span className="flex-1 h-px bg-white/10" />
        </p>
      </Reveal>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">
              Three production systems, live &amp; open source.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/60 text-sm md:text-base max-w-[55ch]">
              Architected from scratch with real database schemas, asynchronous workers, and agentic workflows.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 p-1 rounded-full border border-white/10 bg-white/[0.03] self-start md:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
              filter === "all" ? "bg-gold text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter("ai")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
              filter === "ai" ? "bg-gold text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            Agentic AI &amp; ML
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
              filter === "fullstack" ? "bg-gold text-black font-semibold" : "text-white/60 hover:text-white"
            }`}
          >
            Full Stack
          </button>
        </div>
      </div>

      <div className="grid gap-8">
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
