# Venkatesh Kumar M — Portfolio

A personal portfolio website built with **React 19 + Vite**, plain **CSS** (no frameworks) and
vanilla **JavaScript** hooks. Content lives in one data module, every component owns its own
stylesheet, and the whole thing builds to a static `dist/` folder you can host anywhere.

---

## Quick start

```bash
pnpm install      # or: npm install
pnpm dev          # http://localhost:5173
pnpm build        # static production build in dist/
pnpm preview      # preview the production build
```

---

## Project structure

```
.
├── index.html                     # Vite entry HTML (meta tags, fonts, #root)
├── package.json
├── vite.config.js
├── pnpm-workspace.yaml             # pnpm settings (hoisted linker, build scripts)
├── .gitignore
│
├── public/                         # copied verbatim into dist/
│   ├── favicon.svg
│   └── Venkatesh_Kumar_Resume.pdf  # served by the "Download resume" buttons
│
└── src/
    ├── main.jsx                    # React root + global style imports
    ├── App.jsx                     # page composition (section order)
    │
    ├── data/
    │   └── siteData.js             # ALL content: profile, skills, projects, etc.
    │
    ├── hooks/
    │   ├── useActiveSection.js     # highlights the nav link for the visible section
    │   ├── useScrolled.js          # solid header after scrolling
    │   └── useTypewriter.js        # rotating role text in the hero
    │
    ├── styles/
    │   ├── variables.css           # design tokens (colour, type, spacing, motion)
    │   ├── global.css              # reset + base elements
    │   └── components.css          # shared primitives: container, card, btn, tags…
    │
    └── components/
        ├── common/
        │   ├── Icon.jsx            # single inline-SVG icon set
        │   ├── Reveal.jsx          # scroll-reveal wrapper (IntersectionObserver)
        │   ├── Section.jsx         # section shell: id, eyebrow, title, lead
        │   └── Section.css
        │
        ├── Navbar/     Navbar.jsx + Navbar.css
        ├── Hero/       Hero.jsx + Hero.css, CodeCard.jsx + CodeCard.css
        ├── About/      About.jsx + About.css
        ├── Skills/     Skills.jsx + Skills.css
        ├── Projects/   Projects.jsx + Projects.css
        ├── Certifications/ Certifications.jsx + Certifications.css
        ├── Education/  Education.jsx + Education.css
        ├── Contact/    Contact.jsx + Contact.css
        └── Footer/     Footer.jsx + Footer.css
```

### Conventions used

- **One component per folder**, with its stylesheet sitting next to it.
- **No hard-coded values in component CSS** — colours, radii, spacing and easing come from the
  CSS custom properties in `src/styles/variables.css`.
- **BEM-style class names** (`hero__title`, `projects__card`) keep styles scoped and readable
  without a CSS-in-JS dependency.
- **Content is data, not markup** — editing `src/data/siteData.js` updates the whole site.

---

## Editing the content

Everything you would normally want to change is in `src/data/siteData.js`:

| Export           | Controls                                             |
| ---------------- | ---------------------------------------------------- |
| `profile`        | Name, title, email, phone, location, resume file      |
| `navLinks`       | Top navigation items and section anchors             |
| `stats`          | The four hero metrics                                |
| `highlights`     | The four "About" cards                               |
| `skillGroups`    | Skill cards and their tag lists                      |
| `coreStrengths`  | The strengths band under the skills grid             |
| `projects`       | Project cards, features, tech tags and links         |
| `certifications` | Credentials grid                                     |
| `education`      | Degree, institution, coursework                      |
| `languages`      | Spoken languages                                     |
| `socials`        | GitHub / LinkedIn / email icons                      |
| `codeSnippet`    | The syntax-highlighted card in the hero              |

To update the resume download, replace `public/Venkatesh_Kumar_Resume.pdf` (keep the same
filename, or change `profile.resume` to match).

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) plus a skip link.
- Every section is labelled via `aria-labelledby`; the nav sets `aria-current`.
- The mobile menu is a real disclosure button with `aria-expanded` / `aria-controls`.
- All animation respects `prefers-reduced-motion`; colour contrast is tuned for dark backgrounds.
- No UI framework, no icon font, no runtime CSS-in-JS — a single small CSS bundle and one JS bundle.

---

## Deploying

`pnpm build` produces a self-contained `dist/` folder with relative asset paths
(`base: './'`), so it can be dropped on:

- **Netlify / Vercel / Cloudflare Pages** — build command `pnpm build`, output directory `dist`
- **GitHub Pages** — publish the `dist/` folder (relative paths mean project pages work too)
- **Any static host** — upload the contents of `dist/`
