import Layout from "@/components/Layout";
import { Cta } from "@/components/Cta";
import { Reveal } from "@/components/fx";
import { Download, ExternalLink, Briefcase, GraduationCap, MapPin, Target } from "lucide-react";
import { profile, education } from "@/data/content";

const facts = [
  { icon: Briefcase, label: "Now", value: "Early Engineer — RedHold AI" },
  { icon: GraduationCap, label: "Education", value: `${education.detail} · M.Tech CSE, VIT-AP` },
  { icon: Target, label: "Focus", value: "Backend · AI/ML · Distributed systems" },
  { icon: MapPin, label: "Based in", value: profile.location },
];

const Resume = () => {
  return (
    <Layout>
      <section className="bg-canvas py-16 md:py-20">
        <div className="container max-w-editorial">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">Résumé</p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-display text-ink sm:text-5xl">
                The one-page version
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
                Experience, projects, and credentials in a single PDF — read it inline or take it
                with you.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap gap-3">
              <Cta href={profile.resumeUrl}>
                <Download className="h-4 w-4" />
                Download PDF
              </Cta>
              <Cta href={profile.resumeUrl} variant="secondary">
                <ExternalLink className="h-4 w-4" />
                Open in new tab
              </Cta>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-10">
            <div className="grid overflow-hidden rounded-xl border border-hairline sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`bg-canvas p-5 ${i > 0 ? "border-t border-hairline sm:border-t-0 sm:border-l" : ""}`}
                >
                  <f.icon className="h-5 w-5 text-primary" />
                  <div className="eyebrow mt-3">{f.label}</div>
                  <div className="mt-1 text-sm font-medium text-ink">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-8">
            <div className="overflow-hidden rounded-xl border border-hairline bg-surface p-2">
              <object
                data={`${profile.resumeUrl}#view=FitH`}
                type="application/pdf"
                className="h-[80vh] min-h-[560px] w-full rounded-lg"
                aria-label="Yuvraj Jha résumé"
              >
                <div className="flex h-[560px] flex-col items-center justify-center gap-4 text-center">
                  <p className="text-ink-secondary">Your browser can't preview the PDF inline.</p>
                  <Cta href={profile.resumeUrl}>
                    <Download className="h-4 w-4" />
                    Download the résumé
                  </Cta>
                </div>
              </object>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
