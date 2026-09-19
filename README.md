# Portfolio

Nagarjuna Reddy's personal portfolio — a React single-page site with an animated aurora-themed hero, scroll-reveal sections, typewriter role text, magnetic buttons, 3D-tilt project cards, and a skills marquee.

**Live:** https://nagarjuna-portfolio-vue9.onrender.com/

## Stack

- React 19 (Create React App)
- Plain CSS (custom properties, no framework) for the aurora gradient theme, animations, and layout
- No backend — fully static site

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, Contact, Footer, CustomCursor
  data/         portfolioData.js — name, bio, skills, projects, social links
  hooks/        useScrollReveal, useMagnetic, useTypewriter
  pages/        Home.js — composes all sections
```

Edit [src/data/portfolioData.js](src/data/portfolioData.js) to update profile info, skills, or projects.

## Running it

```bash
npm install
npm start
```

Opens on http://localhost:3000.

## Deploying (Render, free)

This is a fully static site, so it deploys anywhere that hosts static files for free. [render.yaml](render.yaml) is already configured for Render:

1. Push to GitHub.
2. Sign up at https://render.com with GitHub — no card needed.
3. **New +** → **Blueprint** → pick this repo. Render auto-detects `render.yaml`.
4. Build command: `npm install && npm run build`. Publish directory: `build`.
