export const profile = {
  name: "Nikunj",
  role: "Full-Stack Developer & Agentic AI Builder",
  location: "Gurugram, Haryana, India",
  degree: "B.Tech Computer Science (AI & ML)",
  email: "nikunjkaushik333@gmail.com",
  linkedin: "https://linkedin.com/in/nikunjkaushik",
  github: "https://github.com/nikukaushik001",
  leetcode: "https://leetcode.com/nikunjkaushik",
  intro:
    "I build production-ready systems with Node.js, Express.js, React.js, FastAPI, PostgreSQL and MongoDB — most recently a live AI hiring platform that processes 200+ resumes asynchronously with LangGraph agentic workflows, semantic candidate ranking and AWS deployment.",
};

export const experience = [
  {
    when: "Jun 2026 – Jul 2026",
    role: "Full Stack & Agentic AI Trainee",
    org: "Programming Pathshala",
    points: [
      "Completed an intensive full-stack bootcamp (MERN) covering API-driven application design, authentication, and deployment workflows.",
      "Delivered 3 full-stack web applications with RESTful API integrations and scalable server-side architecture, each independently designed and shipped within the program timeline.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Authentication"],
  },
  {
    when: "Jun 2025 – Jul 2025",
    role: "Intern",
    org: "GPCSSI, Gurugram Police",
    points: [
      "Gained hands-on exposure to cybercrime and financial fraud patterns.",
      "Built a Smart FIR (First Information Report) Management & Tracking System to digitize incident reporting and streamline case tracking for internal stakeholders.",
    ],
    tags: [],
  },
  {
    when: "Jul 2024 – Aug 2024",
    role: "AI & Machine Learning Intern",
    org: "COERA, K.R. Mangalam University",
    points: [
      "Developed and evaluated multiple machine learning models incorporating NLP and computer vision techniques for real-world automation use cases.",
      "That work was later applied directly in HireLoopAI and Grading AI.",
    ],
    tags: ["NLP", "Computer Vision", "Machine Learning"],
  },
];

export const projects = [
  {
    name: "HireLoopAI",
    image: "hireloop",
    when: "Jun 2026 – Jul 2026 · hireloopai.me",
    summary:
      "A production-ready AI hiring platform architected and deployed from scratch in a 10-day sprint, backed by PostgreSQL and REST APIs.",
    tags: ["React.js", "FastAPI", "PostgreSQL", "LangGraph", "Pydantic", "AWS EC2", "AWS S3", "BullMQ / Redis", "Node.js"],
    link: "https://hireloopai.me/",
    linkLabel: "Live demo",
    details: [
      "Engineered an asynchronous resume-processing pipeline (AWS S3 + BullMQ/Redis job queues) that ingests 200+ PDF resumes without blocking the UI, returning an instant response while background workers handle extraction.",
      "Designed agentic parsing workflows using LangGraph and Pydantic (Llama-3.3-70B via Groq) for structured resume extraction across a decoupled Node.js + Python FastAPI microservice architecture.",
      "Implemented semantic candidate ranking using HuggingFace sentence-transformer embeddings (all-MiniLM-L6-v2) and cosine similarity — matching candidates to job descriptions by meaning rather than exact keywords.",
    ],
  },
  {
    name: "BrainDesk AI",
    image: "braindesk",
    when: "Jul 2026 – Present",
    summary:
      "A multi-tenant B2B SaaS platform that lets multiple businesses run isolated AI customer-support agents, grounded in their own documents and websites.",
    tags: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "LangChain", "ChromaDB", "OpenAI API", "Vanilla JS"],
    link: "https://brain-desk-six.vercel.app/",
    linkLabel: "Live demo",
    details: [
      "Orchestrated a multi-tenant architecture with FastAPI RESTful APIs and SQLAlchemy, with strict per-tenant partitioning of chat histories, leads and vector embeddings.",
      "Grounded AI responses in a custom Retrieval-Augmented Generation pipeline using LangChain, the OpenAI API and the ChromaDB vector database, ingesting client knowledge from PDF/DOCX uploads and an automated BeautifulSoup web-scraping pipeline.",
      "Crafted a dependency-free, vanilla JavaScript micro-frontend chat widget for single-script-tag embedding across Next.js, WordPress and HTML sites, with voice interaction via native browser Speech Recognition APIs.",
    ],
  },
  {
    name: "Grading AI",
    image: "grading",
    when: "Aug 2025 – Oct 2025 · Handwritten Evaluation System",
    summary:
      "An end-to-end pipeline that digitizes handwritten student responses with OCR and evaluates them with NLP, replacing a fully manual, paper-based grading workflow.",
    tags: ["Python", "OCR", "NLP"],
    link: "https://github.com/nikukaushik001/Grading-AI",
    linkLabel: "GitHub",
    details: [
      "Achieved 92% text-extraction accuracy on handwritten input by refining the OCR preprocessing pipeline, ensuring reliable, low-error downstream evaluation even on inconsistent handwriting.",
      "Reduced manual grading time by approximately 80% by automating the complete digitization-to-evaluation pipeline, from raw handwritten scans to a structured, computed evaluation score.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  "Backend & Databases": ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "REST APIs", "Microservices", "JWT Authentication"],
  "AI & Machine Learning": ["Agentic AI", "LangGraph", "LangChain", "Pydantic", "RAG", "ChromaDB", "NLP", "Semantic Search & Embeddings", "Groq API", "Hugging Face", "OpenAI API"],
  "Web & Cloud": ["React.js", "Next.js", "AWS EC2", "AWS S3", "Docker", "Vercel", "BullMQ / Redis", "Git"],
  "Core Concepts": ["OOP", "DBMS", "Operating Systems", "Computer Networks"],
};

export const education = {
  degree: "B.Tech in Computer Science (AI & ML)",
  school: "K.R. Mangalam University, Gurugram",
  when: "2023 – 2027",
  cgpa: "8.80 / 10",
};

export const achievements = [
  { k: "Hackathons", text: "Top 10 Finalist, Smart India Hackathon (Internal Round). 7+ hackathons completed in agile teams of 3–5." },
  { k: "AI & ML certifications", text: "AI & ML — Samatrix, AI & ML — Pregrad" },
  { k: "Data & generative AI", text: "Data Analysis with Python — IBM, Introduction to Generative AI — Simplilearn" },
];
