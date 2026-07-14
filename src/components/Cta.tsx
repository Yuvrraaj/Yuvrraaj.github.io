import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost-dark";

interface CtaProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  download?: boolean;
  onClick?: () => void;
}

const base =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 font-display text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-algolia-ring focus-visible:ring-offset-2";

const styles: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-algolia-cobalt",
  secondary: "border border-hairline bg-canvas text-ink hover:border-ink/30",
  // pill for use on the dark hero / dark panels
  "ghost-dark": "border border-white/25 bg-white/5 text-white hover:bg-white/10",
};

export function Cta({ children, to, href, variant = "primary", className, download, onClick }: CtaProps) {
  const classes = cn(base, styles[variant], className);

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      download={download}
    >
      {children}
    </a>
  );
}

export default Cta;
