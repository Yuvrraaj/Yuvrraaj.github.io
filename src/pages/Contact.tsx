import Layout from "@/components/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Reveal } from "@/components/fx";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/content";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-canvas py-16 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-display text-ink sm:text-5xl">
                Let's talk
              </h1>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                Open to software-engineering and ML roles, and genuinely interesting collaborations.
                Send a message or reach me directly — I read everything.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-4 transition-colors hover:border-ink/25"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-surface">
                    <Mail className="h-5 w-5 text-primary" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-ink-secondary">Email</span>
                    <span className="text-sm text-ink">{profile.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-surface">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-ink-secondary">Based in</span>
                    <span className="text-sm text-ink">{profile.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-lg border border-hairline text-ink-secondary transition-colors hover:border-ink/25 hover:text-primary"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
