import { Github, ArrowUpRight, Zap } from "lucide-react";
import type { Project } from "@/data/content";

const CATEGORY_LABEL: Record<Project["category"], string> = {
  ai: "AI / ML",
  backend: "Backend",
  systems: "Systems",
  web: "Web",
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-hairline bg-canvas p-6 transition-colors duration-200 hover:border-ink/25">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-surface">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <span className="eyebrow">{CATEGORY_LABEL[project.category]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="grid h-8 w-8 place-items-center rounded-md text-ink-secondary transition-colors hover:bg-surface hover:text-primary"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="grid h-8 w-8 place-items-center rounded-md text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-ink-secondary">{project.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">{project.description}</p>

      <div className="mt-4 flex items-start gap-2 rounded-lg bg-surface px-3 py-2.5">
        <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        <span className="text-[13px] font-medium text-ink">{project.highlight}</span>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-hairline px-2 py-0.5 text-[12px] text-ink-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
