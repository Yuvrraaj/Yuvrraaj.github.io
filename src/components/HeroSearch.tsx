import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CornerDownLeft,
  ArrowUpRight,
  FolderGit2,
  Briefcase,
  User,
  FileText,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { projects, featuredProjects } from "@/data/content";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<string, string> = {
  ai: "AI / ML",
  backend: "Backend",
  systems: "Systems",
  web: "Web",
  page: "Page",
};

type Item = {
  id: string;
  title: string;
  sub: string;
  badge: string;
  icon: LucideIcon;
  keywords: string;
  external?: string; // url to open in a new tab
  to?: string; // internal route
};

const pageItems: Item[] = [
  { id: "p-work", title: "All projects", sub: "Browse the full work grid", badge: "page", icon: FolderGit2, keywords: "work projects portfolio grid", to: "/projects" },
  { id: "p-exp", title: "Experience", sub: "RedHold AI · NESAC · DigitalFortress", badge: "page", icon: Briefcase, keywords: "experience career timeline education certifications", to: "/experience" },
  { id: "p-about", title: "About", sub: "Background, skills & approach", badge: "page", icon: User, keywords: "about bio skills toolbox", to: "/about" },
  { id: "p-resume", title: "Résumé", sub: "One-page PDF", badge: "page", icon: FileText, keywords: "resume cv pdf download", to: "/resume" },
  { id: "p-contact", title: "Contact", sub: "Get in touch", badge: "page", icon: Mail, keywords: "contact email message hire", to: "/contact" },
];

const projectItems: Item[] = projects.map((p) => ({
  id: `proj-${p.id}`,
  title: p.title,
  sub: p.tagline,
  badge: p.category,
  icon: p.icon,
  keywords: `${p.title} ${p.tagline} ${p.description} ${p.category} ${p.stack.join(" ")}`.toLowerCase(),
  external: p.demo ?? p.code,
}));

const allItems = [...projectItems, ...pageItems];
const defaultResults = featuredProjects.slice(0, 4).map((p) => projectItems.find((i) => i.id === `proj-${p.id}`)!);

const HeroSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return defaultResults;
    return allItems
      .filter((it) => it.keywords.toLowerCase().includes(q) || it.title.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  useEffect(() => setActive(0), [query]);

  // ⌘K / Ctrl+K focuses the search from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activate = (item?: Item) => {
    if (!item) return;
    if (item.to) navigate(item.to);
    else if (item.external) window.open(item.external, "_blank", "noopener,noreferrer");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      activate(results[active]);
    } else if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <div
      className="overflow-hidden rounded-xl border border-hairline bg-canvas"
      style={{ boxShadow: "0 24px 60px -20px rgba(35,38,59,0.45), 0 0 0 6px rgba(199,210,254,0.12)" }}
    >
      {/* search input */}
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-3.5">
        <Search className="h-4 w-4 shrink-0 text-ink-secondary" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search projects, skills, experience…"
          aria-label="Search the portfolio"
          role="combobox"
          aria-expanded="true"
          aria-controls="hero-search-listbox"
          aria-activedescendant={results[active] ? `hs-opt-${results[active].id}` : undefined}
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-secondary"
        />
        <span className="hidden shrink-0 rounded-md border border-hairline px-1.5 py-0.5 text-[11px] font-medium text-ink-muted sm:inline">
          ⌘K
        </span>
      </div>

      {/* results */}
      <ul id="hero-search-listbox" role="listbox" className="max-h-[320px] divide-y divide-hairline overflow-y-auto">
        {results.length === 0 && (
          <li className="px-4 py-6 text-center text-sm text-ink-secondary">
            No matches for “{query}”. Try “FastAPI”, “RAG”, or “C++”.
          </li>
        )}
        {results.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={item.id} role="option" id={`hs-opt-${item.id}`} aria-selected={i === active}>
              <button
                type="button"
                onClick={() => activate(item)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
                  i === active ? "bg-surface" : "hover:bg-surface"
                )}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface text-ink">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-ink">{item.title}</span>
                  <span className="block truncate text-xs text-ink-secondary">{item.sub}</span>
                </span>
                <span className="hidden shrink-0 rounded-full bg-surface px-2 py-0.5 text-[11px] text-ink-secondary sm:inline">
                  {CATEGORY_LABEL[item.badge] ?? item.badge}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-secondary opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </li>
          );
        })}
      </ul>

      {/* footer */}
      <div className="flex items-center justify-between border-t border-hairline px-4 py-2.5 text-[11px] text-ink-secondary">
        <span className="inline-flex items-center gap-1.5">
          <CornerDownLeft className="h-3 w-3" /> to open · ↑↓ to navigate
        </span>
        <span>{projects.length} projects indexed</span>
      </div>
    </div>
  );
};

export default HeroSearch;
