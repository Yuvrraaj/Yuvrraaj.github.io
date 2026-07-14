import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Reveal } from "@/components/fx";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/data/content";

const Projects = () => {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  return (
    <Layout>
      <section className="bg-canvas py-16 md:py-20">
        <div className="container max-w-editorial">
          <Reveal>
            <p className="eyebrow">Work · {projects.length} projects</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-display text-ink sm:text-5xl">
              Things I've built
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Backend services, ML research, and systems work. Everything links to source — several
              ship live demos or reproducible proofs.
            </p>
          </Reveal>

          {/* Controls */}
          <Reveal delay={0.1} className="mt-10">
            <div className="flex flex-col gap-4 rounded-xl border border-hairline bg-canvas p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 shrink-0 text-ink-secondary" />
                <div className="flex flex-wrap gap-1.5">
                  {projectCategories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setFilter(c.id)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                        filter === c.id
                          ? "bg-primary text-white"
                          : "border border-hairline text-ink-secondary hover:bg-surface"
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-secondary" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  aria-label="Search projects"
                  className="h-11 w-full rounded-md border border-hairline bg-canvas pl-9 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-secondary focus:border-algolia-ring focus:ring-2 focus:ring-algolia-ring/30"
                />
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 rounded-xl border border-hairline bg-surface py-16 text-center">
              <p className="text-ink-secondary">No projects match that search.</p>
              <button
                onClick={() => {
                  setFilter("all");
                  setQuery("");
                }}
                className="mt-4 rounded-full border border-hairline bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/30"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
