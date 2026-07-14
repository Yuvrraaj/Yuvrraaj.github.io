# Yuvraj Jha — Portfolio

Personal portfolio of **Yuvraj Jha** — software engineer specializing in **backend systems and AI/ML**.

🌐 **Live:** https://yuvraj-jha-portfolio.vercel.app/

## Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Animation:** Framer Motion (hand-rolled magnetic buttons, spotlight/tilt cards, scroll reveals, count-up metrics, aurora background)
- **Routing:** React Router (route-level code-splitting via `React.lazy`)
- **Contact form:** Firebase Firestore
- **Deploy:** Vercel

## Design system

- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (data/labels)
- **Color:** deep blue-ink base with a semantic tri-accent — indigo (interactive), mint (verified/passing), amber (recognition)
- Full rationale in [`DESIGN_PLAN.md`](./DESIGN_PLAN.md); content source of truth in [`CONTENT_DOSSIER.md`](./CONTENT_DOSSIER.md).

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
npm run lint     # eslint
```

### Firebase config

The contact form writes to Firestore. Copy `src/firebase/env.example.ts` to `src/firebase/env.ts` and fill in your
Firebase web config. Web config is safe to expose to the client — access is governed by **Firestore Security Rules**,
so lock the `contact_messages` collection to `create`-only from clients and read submissions in the Firebase console.

## Structure

```
src/
  components/        UI + layout (Navbar, Footer, Hero, cards)
    fx/              motion/effect primitives (Reveal, Magnetic, SpotlightCard, …)
    ui/              shadcn/ui primitives
  data/content.ts    single source of truth for site content
  pages/             Home, About, Experience, Projects, Resume, Contact, 404
  firebase/          Firestore config
  services/          contact submission
```

## License

MIT. Attribution appreciated.

— Built by Yuvraj Jha.
