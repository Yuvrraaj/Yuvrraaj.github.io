import Layout from "@/components/Layout";
import { Reveal, SectionHeading } from "@/components/fx";
import { Cta } from "@/components/Cta";
import { Compass, Sparkles, ArrowUpRight, MapPin } from "lucide-react";
import { profile, skillGroups } from "@/data/content";

const paragraphs = [
  <>
    I'm <span className="font-medium text-ink">Yuvraj Jha</span>, a software engineer and Integrated
    M.Tech CSE candidate at <span className="text-primary">VIT-AP</span> (2027, CGPA 9.30). I work
    where backend systems meet AI/ML — and I care most about the part everyone else skips: proving
    the thing actually works.
  </>,
  <>
    Today I'm an <span className="font-medium text-ink">Early Engineer at RedHold AI</span>, where I
    own the public REST API and Model Context Protocol channel of an LLM diagramming platform serving
    2,000+ users — async job pipelines, HMAC-scoped keys, idempotent metering, and 126 passing tests
    behind a clean security review.
  </>,
  <>
    Before that I engineered geospatial ETL for a census-independent population-estimation initiative
    at <span className="text-primary">NESAC (Dept. of Space)</span>, now deployed across four
    space-application centres, and built OCR pipelines at DigitalFortress. On the side I do research —
    a self-pruning neural network that removes 92.95% of its parameters at under 0.5% accuracy loss.
  </>,
  <>
    My through-line is correctness as a deliverable: double-entry ledgers that survive 1,000+ injected
    faults, performance models validated gap-by-gap against real RTL. When I'm not building, I'm
    reading ML papers, grinding DSA, or following cricket a little too closely.
  </>,
];

const beyond = [
  {
    icon: Compass,
    title: "How I work",
    items: [
      "Correctness first — the proof is a build artifact, not a claim",
      "Ship reproducible, tested, well-documented systems",
      "Optimize for the reader of the code, not just the writer",
      "Stay close to the domain and the real user",
    ],
  },
  {
    icon: Sparkles,
    title: "What I'm exploring",
    items: [
      "LLM systems: RAG, tool use, MCP, prompt-cache economics",
      "Model efficiency & compression for edge inference",
      "Distributed-systems correctness and chaos testing",
      "AI for social good — geospatial & population analytics",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-canvas py-16 md:py-20">
        <div className="container max-w-editorial">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-display text-ink sm:text-5xl">
              Engineer who ships proofs, not promises
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-hairline">
                <img
                  src="/uploads/me.jpg"
                  alt="Yuvraj Jha"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-ink-secondary">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {profile.location}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta to="/resume">
                  View résumé
                  <ArrowUpRight className="h-4 w-4" />
                </Cta>
                <Cta href={profile.github} variant="secondary">
                  GitHub
                </Cta>
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <SectionHeading
              eyebrow="Toolbox"
              title="Technologies I build with"
              description="The stack behind the work — grouped by where it lives in a system."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, i) => (
                <Reveal key={group.label} delay={(i % 3) * 0.07}>
                  <div className="hairline-card h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface">
                        <group.icon className="h-5 w-5 text-primary" />
                      </span>
                      <h3 className="font-display font-semibold text-ink">{group.label}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-hairline px-2 py-1 text-[12px] text-ink-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Beyond the code */}
          <div className="mt-24 grid gap-6 md:grid-cols-2">
            {beyond.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="hairline-card h-full p-7">
                  <div className="mb-5 flex items-center gap-2">
                    <b.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-ink">{b.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {b.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-ink-secondary">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
