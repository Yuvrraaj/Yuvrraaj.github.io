import { Link } from "react-router-dom";
import { profile, socials } from "@/data/content";

const nav = [
  { name: "Work", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "About", to: "/about" },
  { name: "Résumé", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="container max-w-editorial py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">
              Yuvraj Jha<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              Backend &amp; AI/ML engineer building systems where correctness is the product.
              Currently an Early Engineer at RedHold AI.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.name}>
                  <Link to={n.to} className="text-sm text-ink-secondary transition-colors hover:text-ink">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-hairline pt-6 text-sm text-ink-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} Yuvraj Jha</p>
          <p>{profile.location} · Built with React &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
