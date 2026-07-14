# Yuvraj Jha — Portfolio

Personal portfolio of **Yuvraj Jha** — software engineer specializing in **backend systems and AI/ML**
(Early Engineer at RedHold AI; ex-NESAC, Dept. of Space).

🌐 **Live:** https://yuvrraaj.github.io

## Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Animation:** Framer Motion (scroll reveals, count-up metrics, page transitions)
- **Routing:** React Router (route-level code-splitting via `React.lazy`)
- **Contact form:** [FormSubmit](https://formsubmit.co) — submissions are emailed directly (no server, no database)
- **Hosting:** GitHub Pages (auto-deploy via GitHub Actions)

## Design system

An editorial system inspired by Algolia's marketing site:

- **Type:** Sora (display / headings / big numerals) · Inter (body, UI)
- **Color:** near-black violet→cobalt gradient hero over a white editorial body; electric blue
  (`#003dff`) held in reserve for CTAs and inline links; hairline (`#e5e7eb`) borders carry the
  chrome; a dark `#000033` band for the big metric numerals.
- **Dark mode:** full light/dark theming via CSS-variable tokens, with a persisted toggle.
- **Signature:** a functional command-palette search in the hero (⌘K) that filters projects and
  pages and navigates on select.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:8080)
npm run build    # production build (also writes dist/404.html for SPA routing)
npm run preview  # preview the build
npm run lint     # eslint
```

### Contact form

The form on `/contact` POSTs to FormSubmit, which emails submissions to the address in
`src/data/content.ts` (`profile.email`). Replies go straight to the sender. No backend or database is
involved, so it works on static hosting as-is.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. Because Pages has no server-side rewrites, the build copies `index.html` → `404.html`
so client-side routes (`/projects`, `/experience`, …) resolve on direct load, and a `.nojekyll` file
serves the Vite output untouched.

## Structure

```
src/
  components/        UI + layout (Navbar, Footer, HeroSection, HeroSearch, ProjectCard, Cta, ThemeToggle)
    fx/              motion primitives (Reveal, CountUp, Marquee, SectionHeading)
    ui/              shadcn/ui primitives
  data/content.ts    single source of truth for site content
  pages/             Home, About, Experience, Projects, Resume, Contact, 404
```

## License

MIT. Attribution appreciated.

— Built by Yuvraj Jha.
