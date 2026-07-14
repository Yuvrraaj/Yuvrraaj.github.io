import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { Cta } from "@/components/Cta";
import { Reveal, SectionHeading, Marquee, CountUp } from "@/components/fx";
import { Link } from "react-router-dom";
import { ArrowUpRight, Server, BrainCircuit, ShieldCheck } from "lucide-react";
import { featuredProjects, experience, marqueeSkills, metrics } from "@/data/content";

const capabilities = [
  {
    icon: Server,
    title: "Backend & APIs",
    body: "Public REST + MCP channels, async job pipelines, idempotent credit metering, HMAC-scoped keys, and fail-closed Redis — on FastAPI + PostgreSQL.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    body: "PyTorch, LLMs & RAG, model compression, and computer vision — research-grade pipelines shipped as installable, tested libraries.",
  },
  {
    icon: ShieldCheck,
    title: "Correctness-first systems",
    body: "Double-entry ledgers, chaos harnesses, and model-vs-RTL verification — guarantees proven by build artifacts, not asserted.",
  },
];

const proof = metrics.slice(0, 4);

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Tech strip */}
      <section className="border-b border-hairline bg-canvas py-6">
        <div className="container">
          <Marquee duration={40}>
            {marqueeSkills.map((skill) => (
              <span key={skill} className="mx-5 text-sm font-medium text-ink-secondary">
                {skill}
                <span className="ml-10 text-hairline">/</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Metric proof band (dark) */}
      <section className="deep-gradient">
        <div className="container max-w-editorial py-20 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              The receipts
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-display text-white sm:text-4xl">
              Systems that prove themselves
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-4">
            {proof.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div>
                  <div className="font-display text-5xl font-black leading-none tracking-display text-white sm:text-[3.5rem]">
                    <CountUp
                      value={m.value}
                      decimals={m.decimals}
                      prefix={m.prefix}
                      suffix={m.suffix}
                    />
                  </div>
                  <div className="mt-4 text-sm font-medium text-white">{m.label}</div>
                  <div className="mt-1 text-[13px] text-white/50">{m.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="container max-w-editorial">
          <SectionHeading
            eyebrow="What I do"
            title="Engineering across the stack, anchored in backend & ML"
            description="Three areas where I go deep — from public API surfaces to research-grade ML to systems that prove their own correctness."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="hairline-card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-surface">
                    <c.icon className="h-6 w-6 text-primary" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-t border-hairline bg-canvas py-20 md:py-24">
        <div className="container max-w-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects with receipts"
              description="A slice of what I've built. Each links to source — several ship live demos or reproducible proofs."
            />
            <Reveal delay={0.1}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-link-active"
              >
                All projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="border-t border-hairline bg-canvas py-20 md:py-24">
        <div className="container max-w-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Experience"
              title="Where I've shipped"
              description="From a space-tech research lab to an early-stage AI platform."
            />
            <Reveal delay={0.1}>
              <Link
                to="/experience"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-link-active"
              >
                Full timeline
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 divide-y divide-hairline border-y border-hairline">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.06}>
                <div className="grid gap-3 py-7 sm:grid-cols-[1fr_2fr] sm:gap-10">
                  <div>
                    <div className="text-sm text-ink-secondary">{job.period}</div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{job.role}</h3>
                    <div className="mt-0.5 text-sm text-primary">{job.company}</div>
                  </div>
                  <div>
                    <p className="text-[15px] leading-relaxed text-ink-secondary">{job.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-hairline px-2 py-0.5 text-[12px] text-ink-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (dark) */}
      <section className="bg-canvas pb-24 pt-4">
        <div className="container max-w-editorial">
          <Reveal>
            <div className="deep-gradient overflow-hidden rounded-xl px-8 py-16 text-center md:px-16">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-display text-white sm:text-4xl">
                Have a backend or ML problem worth solving well?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                Open to software-engineering and ML roles, and interesting collaborations. The
                fastest way to reach me is a quick message.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Cta to="/contact">
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Cta>
                <Cta href="/resume.pdf" variant="ghost-dark">
                  Download résumé
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
