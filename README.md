# NOVA — AI Productivity Platform

A modern, responsive company landing page built for a front-end development assignment.

## Live demo

Deploy the project to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. The app is a static Vite build and requires no backend.

## Technologies

- React
- Vite
- CSS (responsive, custom properties, CSS grid/flexbox)
- Lucide React icons

## Implemented sections

- Responsive navigation + mobile hamburger menu
- Hero section
- Trusted-by logos
- 6 feature cards
- Product / About section
- How it works
- Statistics
- Solutions / use cases
- 3-testimonial carousel
- 3 pricing plans + monthly/annual toggle
- 6-question FAQ accordion
- Final CTA
- Footer + newsletter validation

## Interactions / bonus features

- Smooth scrolling navigation
- Responsive mobile navigation
- FAQ accordion
- Button hover effects
- Card hover effects
- Light/dark mode toggle
- Scroll reveal animations
- Auto-rotating testimonial carousel
- Monthly/annual pricing toggle
- Demo modal
- Newsletter email validation
- Back-to-top button

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## AI tools used

ChatGPT was used to accelerate ideation, component planning, copywriting, and implementation support. The final code should be reviewed and understood before submission, especially the React state, event handlers, responsive CSS, and accessibility behavior.

## Design decisions

NOVA uses a minimal editorial/SaaS visual language: warm off-white surfaces, deep navy product visuals, high-contrast typography, lime action accents, and restrained violet highlights. The page uses large type and generous whitespace to create a premium feel while keeping conversion actions visually obvious.

## Component / architecture notes

The current assignment implementation keeps the UI in one React entry file while rendering repeated content from arrays (`features`, `useCases`, `testimonials`, `plans`, and `faqs`). This makes the page data-driven and easy to split into separate reusable components later.

For a production application, I would extract sections into dedicated components, move content into JSON/TypeScript modules, add routing where needed, replace the demo modal with real product and calendar flows, and connect newsletter/signup actions to an API endpoint.

## Accessibility notes

- Semantic sections and buttons are used throughout.
- Interactive controls include visible focus styles.
- The mobile menu exposes `aria-expanded`.
- FAQ buttons expose `aria-expanded` state.
- Modal uses `role="dialog"` and `aria-modal`.
- Form input has a screen-reader label.

## Screenshots

The repository can include desktop and mobile screenshots generated from the running Vite app. See the submission package for `screenshots/`.
