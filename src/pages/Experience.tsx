import Layout from "@/components/Layout";
import { Reveal, SectionHeading } from "@/components/fx";
import { GraduationCap, Award, Trophy, MapPin } from "lucide-react";
import { experience, education, certifications, achievements } from "@/data/content";

const Experience = () => {
  return (
    <Layout>
      <section className="bg-canvas py-16 md:py-20">
        <div className="container max-w-4xl">
          <Reveal>
            <p className="eyebrow">Career</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-display text-ink sm:text-5xl">
              Experience &amp; education
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Three roles across space-tech research, AI platforms, and early-stage product — plus
              the academic and competitive record behind them.
            </p>
          </Reveal>

          {/* Timeline */}
          <div className="mt-14">
            <div className="relative border-l border-hairline pl-8 sm:pl-10">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.06} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[37px] top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-canvas bg-canvas ring-1 ring-hairline sm:-left-[45px]">
                    <span className={job.current ? "h-2 w-2 rounded-full bg-primary" : "h-2 w-2 rounded-full bg-hairline-cool"} />
                  </span>

                  <div className="hairline-card p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-primary">{job.period}</span>
                      {job.current && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                          Current
                        </span>
                      )}
                    </div>

                    <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                      {job.role}
                      {job.team && <span className="text-ink-secondary"> · {job.team}</span>}
                    </h2>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-medium text-ink">{job.company}</span>
                      <span className="inline-flex items-center gap-1 text-ink-secondary">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-ink">{job.summary}</p>

                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-[15px] leading-relaxed text-ink-secondary">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
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
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16">
            <SectionHeading eyebrow="Education" title="Academic background" />
            <Reveal delay={0.05} className="mt-8">
              <div className="hairline-card flex items-start gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{education.school}</h3>
                  <p className="mt-1 text-sm text-ink-secondary">{education.degree}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="text-ink-secondary">{education.period}</span>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                      {education.detail}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Certifications + Achievements */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="hairline-card h-full p-6">
                <div className="mb-5 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-ink">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-3 text-[15px] text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="hairline-card h-full p-6">
                <div className="mb-5 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-ink">Achievements</h3>
                </div>
                <ul className="space-y-3">
                  {achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-[15px] text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
