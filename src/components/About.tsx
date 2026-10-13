import Reveal from "./Reveal";

const stats = [
  { n: "8.40", l: "CGPA at K.R. Mangalam University" },
  { n: "92%", l: "Text-extraction accuracy on handwritten input" },
  { n: "~80%", l: "Manual grading time removed by automation" },
  { n: "7+", l: "Hackathons in agile teams of 3–5" },
];

const cards = [
  { h: "Background", p: "B.Tech in Computer Science (AI & ML) at K.R. Mangalam University, Gurugram, 2023–2027, alongside internships in AI/ML research and with Gurugram Police's cyber programme." },
  { h: "Professional focus", p: "Full-stack engineering and agentic AI: REST API design, microservices and background job processing across Node.js, Express.js, React.js, FastAPI, PostgreSQL and MongoDB." },
  { h: "Career direction", p: "Shipping production-ready AI systems end to end — from asynchronous resume pipelines and RAG-grounded support agents to OCR-driven grading — and deploying them live on AWS and Vercel." },
];

export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-6 py-28">
      <Reveal><p className="text-xs tracking-widest text-white/40 mb-3 flex items-center gap-3">About<span className="flex-1 h-px bg-white/15" /></p></Reveal>
      <Reveal><h2 className="font-serif text-4xl md:text-5xl mb-4">Systems that ship, not demos.</h2></Reveal>
      <Reveal><p className="text-white/60 max-w-[62ch] mb-11">A third-year Computer Science (AI &amp; ML) student who spends most of his time putting real backends, agentic pipelines and interfaces in front of real users.</p></Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-9">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="font-serif text-4xl text-gold">{s.n}</div>
              <div className="text-xs text-white/50 mt-2 leading-relaxed">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <Reveal key={c.h} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(217,164,65,0.8)]" />{c.h}
              </h3>
              <p className="text-white/60 text-sm">{c.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
