# NOVA — AI Productivity Platform

> **Build Better. Work Smarter.**

NOVA is a modern AI-powered productivity platform designed to help teams manage projects, automate repetitive workflows, and collaborate more efficiently.

This project was developed as a Front-End Development Assignment to demonstrate modern UI/UX design, responsive web development, React component architecture, interactive functionality, accessibility practices, and responsive behavior across desktop, tablet, and mobile devices.

---

## 🚀 Live Demo

**Live Demo:** https://nova-jade-sigma.vercel.app/

## 📂 GitHub Repository

**Repository:** https://github.com/Rathii007/nova_landingPage

---

## ✨ Features

The landing page includes all required sections from the assignment:

* Responsive navigation bar
* Mobile hamburger navigation
* Hero section with primary CTA
* Trusted-by company logos
* Features section with 6+ features
* Product / About section
* How It Works section
* Statistics section
* Solutions / Use Cases
* Testimonials with 3+ testimonials
* Pricing with 3 pricing plans
* FAQ with 5+ questions
* Final CTA
* Footer
* Newsletter signup validation

### Interactive Features

* Smooth scrolling navigation
* Responsive mobile menu
* FAQ accordion
* Button hover effects
* Feature and pricing card hover effects
* Light / dark mode
* Monthly / annual pricing toggle
* Testimonial carousel
* Demo modal
* Scroll reveal animations
* Animated statistics
* Back-to-top button
* Newsletter form validation

---

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

### Development Tools

* Git
* GitHub
* VS Code
* npm

### AI-Assisted Development

* ChatGPT

AI was used as a development assistant for brainstorming, implementation support, debugging, content development, documentation, and reviewing possible improvements. The generated output was reviewed and adapted to the project requirements rather than being blindly copied.

---

## 📦 Installation

### Prerequisites

Make sure you have:

* Node.js 18+
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/Rathii007/nova_landingPage.git
cd nova_landingPage
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🖼️ Screenshots

### Desktop

![NOVA Desktop Screenshot](./screenshots/desktop.png)

### Tablet

![NOVA Tablet Screenshot](./screenshots/tablet.png)

### Mobile

![NOVA Mobile Screenshot](./screenshots/mobile.png)

---

## 🧩 Project Structure

The project follows a simple React + Vite structure:

```text
nova_landingPage/
├── screenshots/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
├── src/
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The main React entry point contains the page sections and interaction logic, while `styles.css` contains the responsive layout, visual styling, animations, and component states.

Repeated UI content such as features, testimonials, pricing plans, and FAQs is organized so that it can be maintained without unnecessary duplication.

---

## 🎨 Design Decisions

The design follows a modern SaaS/productivity-platform visual language.

### Visual Style

The interface uses:

* Large typography for clear visual hierarchy
* Rounded cards and containers
* Generous spacing
* Strong but focused CTA buttons
* Subtle borders and shadows
* Smooth transitions and hover states
* Responsive grid and flex layouts

The objective was to make NOVA feel like a professional commercial SaaS product rather than a basic tutorial landing page.

### Branding

NOVA uses a clean, technology-focused visual identity with accent colors used primarily for CTAs, highlights, and interactive elements.

The addition of light/dark mode gives the interface more flexibility while maintaining consistent hierarchy and contrast.

### User Experience

The page follows a deliberate conversion-oriented flow:

```text
Navigation
    ↓
Hero / Value Proposition
    ↓
Social Proof
    ↓
Features
    ↓
Product Overview
    ↓
How It Works
    ↓
Statistics
    ↓
Solutions
    ↓
Testimonials
    ↓
Pricing
    ↓
FAQ
    ↓
Final CTA
    ↓
Footer
```

This structure takes the user from awareness and product understanding through social proof and pricing toward conversion.

---

## ⚛️ Technology Choice

### Why React?

React was selected because it is specifically recommended by the assignment and is well suited to interactive, component-based user interfaces.

React provides a clean way to:

* Manage interactive UI state
* Reuse UI patterns
* Render repeated content from data
* Keep related logic close to the UI it controls
* Extend a static landing page into a larger application

The FAQ accordion, pricing toggle, navigation menu, testimonial carousel, theme toggle, and modal all benefit from React state and event handling.

### Why Vite?

Vite was chosen because it provides:

* Fast development startup
* Fast Hot Module Replacement
* Simple React configuration
* Efficient production builds
* Minimal project overhead

React + Vite is therefore a lightweight and modern choice for this single-page front-end project.

---

## 📱 Responsive Design

The application is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior is implemented using:

* CSS media queries
* Flexible containers
* Responsive typography
* Grid and flex layouts
* Mobile-specific navigation behavior
* Fluid spacing and sizing

Care was taken to prevent:

* Horizontal scrolling
* Overlapping elements
* Fixed-width content breaking smaller screens
* Text overflow
* Unusable touch targets

The mobile navigation switches from the desktop menu to a hamburger menu at smaller viewport widths.

---

## ♿ Accessibility

Basic accessibility practices were considered throughout the interface.

Examples include:

* Semantic HTML elements
* Descriptive button labels
* Keyboard-accessible interactive controls
* Appropriate heading hierarchy
* Visible interactive states
* Accessible navigation controls
* Form labels and validation feedback

Further production improvements could include a full WCAG audit, more extensive ARIA testing where appropriate, automated accessibility testing, and broader keyboard interaction testing.

---

## ⚙️ Interactive Functionality

### Mobile Navigation

On smaller screens, the desktop navigation is replaced with a hamburger menu.

The menu state is controlled in React, allowing the navigation to open and close without reloading the page.

### FAQ Accordion

FAQ items can be expanded and collapsed interactively.

The currently active FAQ is tracked through component state so users can quickly access the answer they need.

### Pricing Toggle

The pricing section supports monthly and annual billing.

Switching the billing period updates the displayed prices dynamically.

### Testimonial Carousel

Users can navigate through multiple customer testimonials within the same section.

### Demo Modal

The main demo CTA opens an interactive modal instead of linking to a non-existent product page.

### Dark / Light Mode

Users can switch between light and dark themes without reloading the application.

### Scroll Animations

Sections use reveal animations as they enter the viewport to make the page feel more dynamic while keeping the interface clean.

### Newsletter Validation

The newsletter form validates user input before showing a successful submission state.

### Back-to-Top Button

A back-to-top control appears after scrolling so users can quickly return to the beginning of the page.

---

## 🧠 Challenges Faced

One of the main challenges was balancing all required assignment sections while maintaining a coherent visual hierarchy.

Adding every required section without a clear structure could make the page feel repetitive. The sections were therefore organized into a logical product and conversion flow, with different layouts and visual treatments used to maintain variety.

Another challenge was integrating multiple interactive features without making the interface feel unnecessarily complicated. Navigation, FAQ state, pricing state, modal state, carousel behavior, theme switching, and scroll interactions were designed to remain independent and understandable.

Responsive behavior was considered from the beginning so that desktop designs did not have to be rebuilt from scratch for mobile.

---

## 🤖 How AI Tools Were Used

ChatGPT was used as a development assistant throughout the project.

It supported:

* UI/UX brainstorming
* Landing-page content ideas
* Component and interaction planning
* React implementation assistance
* CSS implementation assistance
* Debugging and troubleshooting
* Documentation and README preparation
* Reviewing accessibility and responsive-design considerations

AI-generated suggestions were reviewed and adapted to the assignment rather than being submitted without understanding the implementation.

The final implementation was checked against the required sections, interactions, responsive behavior, and code-organization requirements.

---

## 📈 Performance Considerations

The project is a lightweight front-end landing page with no large backend dependencies.

Performance considerations include:

* Minimal external dependencies
* Reusable UI patterns
* CSS-based animations
* Responsive layouts
* Avoiding unnecessary DOM complexity
* Vite production bundling

For a production release, the project could be further optimized through:

* Image compression and modern image formats
* Lazy loading for below-the-fold media
* Code splitting where appropriate
* Asset compression
* Lighthouse performance audits
* Further reduction of unused CSS and JavaScript

---

## 🔮 Future Improvements

A production version of NOVA could be extended with:

* User authentication
* User dashboards
* Project management functionality
* AI-powered task automation
* Real-time collaboration
* Backend APIs
* Database integration
* Payment processing
* Real newsletter backend
* Product analytics
* Comprehensive accessibility testing

The current project provides the front-end foundation for such a product.

---

## 👨‍💻 Author

**Mayank Rathi**

GitHub: https://github.com/Rathii007

---

## 📄 Assignment

This project was created as part of a Front-End Development Assignment focused on:

* UI / Visual Design
* Responsive Design
* HTML / CSS
* JavaScript / React
* Component Architecture
* Functionality
* Accessibility
* Performance
* Code Organization
* Documentation
