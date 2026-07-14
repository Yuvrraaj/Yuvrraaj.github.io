import {
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Yuvraj Jha",
  firstName: "Yuvraj",
  title: "Backend & AI/ML Engineer",
  location: "Bengaluru, India",
  status: "Open to SWE / ML roles · 2027",
  /** hero rotating roles */
  roles: ["Backend Engineer", "AI / ML Engineer", "Distributed Systems", "API Architect"],
  /** hero one-liner */
  intro:
    "Early Engineer at RedHold AI, owning the public REST API and Model Context Protocol channel of a platform serving 2,000+ users. I build backend systems and AI/ML pipelines where correctness is the product — the proof is a build artifact, not a claim.",
  /** shorter summary used on About */
  summary:
    "Software engineer and Integrated M.Tech CSE candidate (2027, CGPA 9.30) specializing in backend systems and AI/ML. I own the public REST API + MCP channel at RedHold AI (FastAPI, PostgreSQL, LLMs). Previously: geospatial data engineering at NESAC (Dept. of Space) and computer-vision/OCR pipelines at DigitalFortress. Strengths: Python, C++, REST API design, RAG, and distributed systems.",
  email: "yuvrajjha1718@gmail.com",
  phone: "+91 8016020299",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/Yuvrraaj",
  linkedin: "https://linkedin.com/in/yuvrajjha17",
};

export const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

/* ------------------------------------------------------------------ */
/* Proof metrics — the hero telemetry board                           */
/* ------------------------------------------------------------------ */

export interface Metric {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  verified?: boolean;
}

export const metrics: Metric[] = [
  { value: 2000, suffix: "+", label: "users served", sub: "RedHold AI platform" },
  { value: 126, label: "API tests passing", sub: "public REST API", verified: true },
  { value: 0, label: "double-charges", sub: "under 1,000+ injected faults", verified: true },
  { value: 92.95, decimals: 2, suffix: "%", label: "params pruned", sub: "<0.5% accuracy loss" },
  { value: 75, suffix: "%", label: "faster ETL", sub: "45 GB+ satellite raster" },
  { value: 9.3, decimals: 2, label: "CGPA", sub: "M.Tech CSE · VIT-AP" },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Experience {
  company: string;
  role: string;
  team?: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: "RedHold AI — Diagrams.so",
    role: "Early Engineer",
    location: "Remote, IN",
    period: "Jun 2026 — Present",
    current: true,
    summary:
      "Own the public REST API + Model Context Protocol channel of an LLM diagramming platform serving 2,000+ users.",
    bullets: [
      "Developed and dark-launched a paid public REST API (26 operations), an MCP server (13 tools), and Python/TypeScript SDKs — validated by 126 passing API tests and a clean security review.",
      "Engineered reliability & security: an async job pipeline (HTTP 202 + polling, de-dup, self-healing) that ended production 504/CORS failures, HMAC-hashed scoped keys (invalid keys = 0 DB hits), idempotent credit metering (zero double-charges), rate limiting, and fail-closed Redis.",
      "Designed the Well-Architected Score (0–100, 19 warning types, 4 severity tiers) with one-click Fix-all and deterministic structural-integrity repair for LLM-driven diagram edits.",
      "Cut LLM cost/latency via system-prompt caching (edits drove ~83% of AI spend) and unblocked ~512 pages for indexing (~1,400 → ~2,200 Google-indexed), wiring the GA4 conversion funnel.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "MCP", "LLMs", "TypeScript"],
  },
  {
    company: "NESAC, Dept. of Space (Govt. of India)",
    role: "Software Engineering Intern",
    team: "Geospatial Systems",
    location: "Meghalaya, IN",
    period: "May 2025 — Dec 2025",
    summary:
      "Geospatial engineering for a census-independent population-estimation initiative, now deployed across 4 space-application centres.",
    bullets: [
      "Spearheaded geospatial engineering powering research workflows used by 12+ scientists across 8 projects, deployed across 4 space-application centres in India.",
      "Architected scalable ETL pipelines for GeoTIFF tiling, preprocessing, and DSM/DTM elevation integration — 75% faster end-to-end on 45 GB+ of satellite raster.",
      "Translated remote-sensing domain requirements into production geospatial software: spatial data modeling, coordinate reprojection, standards-compliant workflows.",
      "Improved reliability via thread-safe parallel processing and automated data-validation pipelines.",
    ],
    stack: ["Python", "Rasterio", "GDAL", "YOLOv8", "ETL"],
  },
  {
    company: "DigitalFortress Pvt. Ltd.",
    role: "Software Engineer",
    team: "AI Platforms",
    location: "Amaravati, IN",
    period: "Sep 2023 — Apr 2024",
    summary: "Built a production OCR pipeline for document automation.",
    bullets: [
      "Implemented an OCR pipeline (Python, OpenCV, Tesseract): 25–30% accuracy gain, ~40% less manual review, ~90% precision.",
    ],
    stack: ["Python", "OpenCV", "Tesseract"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "ai" | "backend" | "systems" | "web";
export type Spot = "indigo" | "mint" | "amber";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  stack: string[];
  category: ProjectCategory;
  icon: LucideIcon;
  spot: Spot;
  code: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "self-pruning-nn",
    title: "Self-Pruning Neural Network",
    tagline: "Model-compression research · PyTorch",
    description:
      "A network that prunes itself during training via learnable per-weight sigmoid gates and an L1 sparsity penalty — learning which connections to remove instead of pruning post-hoc. Shipped as an installable library with tests, CI, and a research report.",
    highlight: "92.95% of 7.6M params pruned · <0.5% accuracy loss on CIFAR-10",
    stack: ["PyTorch", "Model Compression", "Deep Learning", "CIFAR-10"],
    category: "ai",
    icon: BrainCircuit,
    spot: "indigo",
    code: "https://github.com/Yuvrraaj/Self-Pruning-Neural-Network",
    featured: true,
  },
  {
    id: "ironledger",
    title: "IronLedger",
    tagline: "Payment rails that provably don't lose money",
    description:
      "A payments core that treats correctness as the product: double-entry journal, idempotent API, transactional-outbox webhooks, T+1 reconciliation, and a chaos harness that actively tries to make it lose money — and can't.",
    highlight: "0 double-charges · 0 unbalanced ledgers under 1,000+ injected faults",
    stack: ["Python", "FastAPI", "PostgreSQL", "Distributed Systems"],
    category: "backend",
    icon: ShieldCheck,
    spot: "mint",
    code: "https://github.com/Yuvrraaj/ironledger",
    featured: true,
  },
  {
    id: "perfgap",
    title: "PerfGap",
    tagline: "Model-vs-RTL performance verification of a chiplet SoC",
    description:
      "A C++ MOESI/chiplet performance model predicts bandwidth and latency; a Python rig measures a Verilated AXI4 crossbar on the same traffic; a gap engine compares them metric-by-metric until every disagreement is within tolerance or root-caused in a case study.",
    highlight: "57 PASS / 7 WAIVED / 0 GAP across 20 scenarios",
    stack: ["C++", "Verilator", "Computer Architecture", "Python"],
    category: "systems",
    icon: Cpu,
    spot: "amber",
    code: "https://github.com/Yuvrraaj/perfgap",
    demo: "https://yuvrraaj.github.io/perfgap/",
    featured: true,
  },
  {
    id: "population-estimation",
    title: "Census-Independent Population Estimation",
    tagline: "Geospatial AI · YOLOv8 + Rasterio",
    description:
      "An end-to-end pipeline turning satellite imagery into coordinate-aware datasets: Rasterio tiling, YOLOv8 building detection, OSM integration, residential/non-residential classification, and DSM–DTM floor inference — with an interactive GUI and CSV export.",
    highlight: "Deployed across 4 space-application centres · −35% manual analysis time",
    stack: ["Python", "YOLOv8", "Rasterio", "Computer Vision"],
    category: "ai",
    icon: Sparkles,
    spot: "indigo",
    code: "https://github.com/Yuvrraaj/Population-Estimation",
    featured: true,
  },
  {
    id: "campusquery",
    title: "CampusQuery",
    tagline: "RAG Q&A assistant · FastAPI + ChromaDB",
    description:
      "A Retrieval-Augmented Generation assistant answering campus queries over 100+ documents using local MiniLM embeddings and ChromaDB top-k search, with a web-search fallback, real-time document parsing, highlight-to-query, and a reranking step.",
    highlight: "Local embeddings · top-k retrieval + rerank · web-search fallback",
    stack: ["Python", "FastAPI", "RAG", "ChromaDB", "LLM"],
    category: "ai",
    icon: Database,
    spot: "mint",
    code: "https://github.com/Yuvrraaj/CampusQuery",
    featured: true,
  },
  {
    id: "voting-platform",
    title: "Secure Distributed Voting Platform",
    tagline: "C++ · OpenSSL · AWS",
    description:
      "A multithreaded C++ client-server voting platform over TCP/IP sockets with SQLite persistence and thread-safe concurrency, secured with AES-256-CBC, SHA-256, and RBAC via OpenSSL — deployed live on AWS EC2 with hardened security groups and admin monitoring.",
    highlight: "AES-256 + SHA-256 + RBAC · live on AWS EC2",
    stack: ["C++", "OpenSSL", "AWS", "SQLite", "Security"],
    category: "systems",
    icon: Server,
    spot: "amber",
    code: "https://github.com/Yuvrraaj/Voting-System",
    featured: true,
  },
  {
    id: "pathfinder",
    title: "PathFinder",
    tagline: "AI-assisted external security assessment",
    description:
      "An intelligence layer that turns raw scanner output into attack paths with confidence scoring and business-impact assessment — running a full Subfinder → httpx → Nuclei → AI pipeline, or ingesting existing scanners.",
    highlight: "Scanner output → attack-path synthesis",
    stack: ["Python", "Security", "LLMs"],
    category: "ai",
    icon: ShieldCheck,
    spot: "indigo",
    code: "https://github.com/Yuvrraaj/pathfinder-ai-security-platform",
  },
  {
    id: "contractiq",
    title: "ContractIQ",
    tagline: "Contract management + AI analysis API",
    description:
      "A production-style FastAPI service for contract CRUD with JWT auth, ownership enforcement, and AI analysis (Groq Llama 3.3 70B) returning structured risk assessments — with concurrent bulk analysis and background jobs.",
    highlight: "FastAPI · JWT · async bulk analysis",
    stack: ["Python", "FastAPI", "SQLModel", "LLMs"],
    category: "backend",
    icon: Boxes,
    spot: "mint",
    code: "https://github.com/Yuvrraaj/contractiq",
  },
  {
    id: "dsa-visualizer",
    title: "Java DSA Visualizer & Lab",
    tagline: "Spring Boot · live in-browser Java compiler",
    description:
      "A full-stack Spring Boot platform that pairs interactive data-structure visualizations with an integrated Monaco editor that safely compiles and runs user Java in real time, backed by an H2 problem database.",
    highlight: "Interactive DSA viz + live javac execution",
    stack: ["Java", "Spring Boot", "Monaco", "H2"],
    category: "web",
    icon: Code2,
    spot: "indigo",
    code: "https://github.com/Yuvrraaj/java-dsa-visualizer-",
    demo: "https://java-dsa-visualizer.onrender.com/",
  },
  {
    id: "isl-translation",
    title: "Real-Time ISL Translation",
    tagline: "MediaPipe + LSTM sign-language recognition",
    description:
      "A real-time Indian Sign Language recognizer that extracts arm and body-posture keypoints with MediaPipe and feeds the sequence through an LSTM network to predict gestures — bridging a communication gap with deep learning.",
    highlight: "MediaPipe pose keypoints → LSTM sequence model",
    stack: ["Python", "MediaPipe", "LSTM", "Deep Learning"],
    category: "ai",
    icon: BrainCircuit,
    spot: "indigo",
    code: "https://github.com/Yuvrraaj/Real-Time-ISL-Translation",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "backend", label: "Backend" },
  { id: "systems", label: "Systems" },
  { id: "web", label: "Web" },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  label: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "C++", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML",
    icon: BrainCircuit,
    items: [
      "PyTorch",
      "TensorFlow",
      "LLMs",
      "RAG",
      "Transformers",
      "Model Compression",
      "NLP",
      "Computer Vision",
      "YOLOv8",
      "LangChain",
      "scikit-learn",
    ],
  },
  {
    label: "Backend & APIs",
    icon: Server,
    items: [
      "FastAPI",
      "REST APIs",
      "MCP",
      "Server-Sent Events",
      "Spring Boot",
      "Flask",
      "Microservices",
      "SQLAlchemy",
      "Redis",
      "API Security",
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Azure", "Docker", "CI/CD", "Git", "Linux", "PostgreSQL", "SQLite"],
  },
  {
    label: "Data & Geospatial",
    icon: Database,
    items: ["NumPy", "Pandas", "Rasterio", "GDAL", "ChromaDB", "ETL Pipelines"],
  },
  {
    label: "Core CS",
    icon: Cpu,
    items: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS", "Distributed Systems"],
  },
];

/** flat list for the marquee */
export const marqueeSkills = [
  "Python",
  "C++",
  "FastAPI",
  "PyTorch",
  "PostgreSQL",
  "Redis",
  "LLMs",
  "RAG",
  "MCP",
  "Docker",
  "AWS",
  "TypeScript",
  "YOLOv8",
  "Rasterio",
  "OpenSSL",
  "Spring Boot",
  "LangChain",
  "Verilator",
];

/* ------------------------------------------------------------------ */
/* Education · Certifications · Achievements                          */
/* ------------------------------------------------------------------ */

export const education = {
  school: "Vellore Institute of Technology, AP",
  degree: "Integrated M.Tech (Dual Degree) — Computer Science & Engineering",
  period: "2022 — 2027",
  detail: "CGPA 9.30",
};

export const certifications = [
  "Oracle Cloud Infrastructure (OCI) 2025 — Generative AI Professional",
  "Oracle Cloud Infrastructure (OCI) 2025 — Data Science Professional",
];

export const achievements = [
  "Unstop Top Rank Holder — #580 globally, #1 at VIT-AP",
  "Walmart Sparkplug 2026 — Finalist",
  "Flipkart GRiD Robotics — Semi-Finalist (2024)",
  "Tata Imagination Challenge — National Semi-Finalist (2024, 2025; 300,000+ participants)",
  "IndiGo Aspiring Leaders (IAL) 2025 — Finalist",
];
