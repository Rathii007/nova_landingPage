import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Command,
  Crosshair,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  Menu,
  Moon,
  Play,
  Plus,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const logos = ['Vertex', 'Northstar', 'Orbit', 'Arcade', 'Lumen', 'Kinetix'];

const features = [
  {
    icon: Bot,
    title: 'AI Project Copilot',
    text: 'Turn briefs into plans, assign the next step, and keep momentum without status-meeting overhead.',
  },
  {
    icon: Zap,
    title: 'Smart Automations',
    text: 'Automate repetitive handoffs with flexible workflows that react to what your team actually does.',
  },
  {
    icon: Layers3,
    title: 'One Workspace',
    text: 'Bring projects, docs, conversations, and decisions into a single source of truth.',
  },
  {
    icon: BarChart3,
    title: 'Live Performance',
    text: 'See progress, capacity, and delivery risk in dashboards built for fast-moving teams.',
  },
  {
    icon: Search,
    title: 'Instant Knowledge',
    text: 'Ask NOVA questions across your workspace and get grounded answers with useful context.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Ready',
    text: 'Granular permissions, audit trails, and secure collaboration give your operations room to scale.',
  },
];

const useCases = [
  { label: 'Product teams', title: 'Ship with less coordination tax.', text: 'Align roadmaps, decisions, specs, and launches in one operating layer.', icon: Target },
  { label: 'Operations', title: 'Make every workflow repeatable.', text: 'Standardize recurring processes and let automation take care of the handoffs.', icon: Gauge },
  { label: 'Agencies', title: 'Manage more clients, smoothly.', text: 'Give every account a clear pulse without adding more meetings to the calendar.', icon: Globe2 },
];

const testimonials = [
  {
    quote: 'NOVA replaced three disconnected tools for us. The biggest win is not the AI—it is how clearly the whole team can see what matters next.',
    name: 'Aarav Mehta',
    role: 'VP Product, Northstar Labs',
    initials: 'AM',
  },
  {
    quote: 'Our weekly planning went from 90 minutes to 20. NOVA catches the gaps before they become fire drills.',
    name: 'Mia Chen',
    role: 'COO, Kinetix Studio',
    initials: 'MC',
  },
  {
    quote: 'It feels like adding an operator to the team. NOVA keeps projects moving while we focus on the decisions that need humans.',
    name: 'Rohan Kapoor',
    role: 'Founder, Vertex AI',
    initials: 'RK',
  },
];

const plans = [
  {
    name: 'Starter', monthly: 12, description: 'For small teams getting organized.',
    features: ['Up to 10 seats', 'AI project copilot', '5 automations', 'Basic dashboards'],
  },
  {
    name: 'Scale', monthly: 24, description: 'For teams that ship every week.', popular: true,
    features: ['Unlimited projects', 'Unlimited automations', 'Advanced analytics', 'Priority support'],
  },
  {
    name: 'Enterprise', monthly: null, description: 'For complex operations at scale.',
    features: ['SSO & advanced permissions', 'Audit logs', 'Dedicated success manager', 'Custom security review'],
  },
];

const faqs = [
  ['What is NOVA?', 'NOVA is an AI-powered productivity workspace that combines project management, collaboration, knowledge, analytics, and workflow automation in one platform.'],
  ['Can we try NOVA before paying?', 'Yes. Every plan includes a 14-day trial with no credit card required. You can invite your team and use real projects during the trial.'],
  ['Does NOVA replace our existing tools?', 'NOVA can replace parts of several tools, but it is designed to work with the systems you already use. Integrations can sync context into your workspace.'],
  ['How does the AI stay grounded in our work?', 'NOVA uses the content and permissions available in your workspace to surface context-aware answers. Access controls remain in effect when information is retrieved.'],
  ['Can we change plans later?', 'Absolutely. Teams can upgrade, downgrade, or add seats as their needs change. Enterprise plans are configured with your account team.'],
  ['Is NOVA secure?', 'NOVA is designed with enterprise controls such as role-based access, audit visibility, and SSO support for organizations with stricter security requirements.'],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const id = setInterval(() => {
      setTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    reveal.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeTestimonial = testimonials[testimonial];
  const savings = annual ? 0.8 : 1;
  const yearLabel = annual ? '20% off' : 'billed monthly';

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNewsletter = (event) => {
    event.preventDefault();
    const valid = /\S+@\S+\.\S+/.test(email);
    setNewsletterStatus(valid ? 'Thanks — you’re on the list.' : 'Enter a valid email address.');
    if (valid) setEmail('');
  };

  const formattedPrice = useMemo(() => (price) => Math.round(price * savings), [savings]);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="NOVA home">
            <span className="brand-mark"><Sparkles size={17} /></span>
            <span>NOVA</span>
          </button>

          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {[
              ['Features', 'features'], ['Product', 'product'], ['Solutions', 'solutions'], ['Pricing', 'pricing'], ['FAQ', 'faq'],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <div className="mobile-actions">
              <button className="text-button" onClick={() => scrollTo('pricing')}>Sign in</button>
              <button className="button button-dark" onClick={() => setShowDemo(true)}>Get started <ArrowRight size={16} /></button>
            </div>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="text-button desktop-only" onClick={() => scrollTo('pricing')}>Sign in</button>
            <button className="button button-dark desktop-only" onClick={() => setShowDemo(true)}>Get started <ArrowRight size={16} /></button>
            <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-grid">
          <div className="container hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> AI productivity, without the busywork</div>
              <h1>Build better.<br /><span>Work smarter.</span></h1>
              <p>NOVA gives ambitious teams one intelligent workspace to plan projects, automate the repetitive, and move from idea to shipped faster.</p>
              <div className="hero-actions">
                <button className="button button-dark button-lg" onClick={() => setShowDemo(true)}>Start free <ArrowRight size={18} /></button>
                <button className="button button-ghost button-lg" onClick={() => setShowDemo(true)}><Play size={16} /> Watch demo</button>
              </div>
              <div className="hero-proof"><CircleCheck size={16} /> No credit card <span>•</span> 14-day trial <span>•</span> Setup in minutes</div>
            </div>

            <div className="hero-visual reveal">
              <div className="dashboard-card">
                <div className="dashboard-topbar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span className="dash-title">NOVA Workspace</span>
                  <Command size={15} />
                </div>
                <div className="dashboard-body">
                  <aside className="sidebar">
                    <div className="mini-logo"><Sparkles size={13} /></div>
                    {['Overview', 'Projects', 'Inbox', 'Automations'].map((item, index) => <div className={`side-row ${index === 1 ? 'selected' : ''}`} key={item}><span className="side-icon" /> {item}</div>)}
                    <div className="side-spacer" />
                    <div className="profile-mini">MR</div>
                  </aside>
                  <div className="dash-main">
                    <div className="dash-head">
                      <div>
                        <div className="muted-label">MONDAY, SEPTEMBER 14</div>
                        <h3>Good morning, team 👋</h3>
                      </div>
                      <div className="avatar-stack"><span>AM</span><span>MC</span><span>+4</span></div>
                    </div>
                    <div className="metric-grid">
                      <div className="metric"><span>Delivery health</span><strong>92%</strong><small><ArrowUpRight size={12} /> +8.4%</small></div>
                      <div className="metric"><span>Active projects</span><strong>18</strong><small>4 shipping this week</small></div>
                    </div>
                    <div className="project-panel">
                      <div className="panel-header"><strong>Launch pipeline</strong><span>View all <ArrowRight size={13} /></span></div>
                      {['Website refresh', 'Mobile onboarding', 'Enterprise launch'].map((name, i) => (
                        <div className="project-row" key={name}>
                          <div className="project-name"><span className={`project-dot dot-${i}`} /> {name}</div>
                          <div className="progress-track"><div className="progress-fill" style={{ width: `${78 - i * 17}%` }} /></div>
                          <span className="progress-text">{78 - i * 17}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="ai-insight"><span className="insight-icon"><Sparkles size={13} /></span><div><strong>AI insight</strong><p>2 projects are likely to slip this week. I found the blockers and drafted next actions.</p></div><ArrowRight size={15} /></div>
                  </div>
                </div>
              </div>
              <div className="floating-pill pill-one"><span><Zap size={13} /></span> 17 tasks automated</div>
              <div className="floating-pill pill-two"><span><Clock3 size={13} /></span> 6.4h saved today</div>
            </div>
          </div>
        </section>

        <section className="logo-strip section-pad-sm" aria-label="Trusted by teams">
          <div className="container">
            <p className="center-kicker">Trusted by modern teams at</p>
            <div className="logos">{logos.map((logo) => <span key={logo}><span className="logo-symbol" />{logo}</span>)}</div>
          </div>
        </section>

        <section id="features" className="section section-alt">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow eyebrow-dark">Everything your team needs</div>
              <h2>A smarter operating system<br />for getting work done.</h2>
              <p>Less context switching. Fewer status updates. More momentum.</p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <article className="feature-card reveal" key={title}>
                  <div className="icon-box"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button className="inline-link" onClick={() => scrollTo('product')}>Explore <ArrowUpRight size={15} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="section">
          <div className="container product-split">
            <div className="product-visual reveal">
              <div className="workflow-card">
                <div className="workflow-label"><Sparkles size={14} /> NOVA AI workflow</div>
                <div className="workflow-title">Turn a goal into momentum.</div>
                <div className="flow-step"><span>01</span><div><strong>Capture</strong><small>“Launch our new onboarding flow”</small></div><CircleCheck size={16} /></div>
                <div className="flow-connector" />
                <div className="flow-step"><span>02</span><div><strong>Plan</strong><small>AI generates 12 tasks + owners</small></div><CircleCheck size={16} /></div>
                <div className="flow-connector" />
                <div className="flow-step"><span>03</span><div><strong>Execute</strong><small>Automations keep every handoff moving</small></div><CircleCheck size={16} /></div>
                <div className="workflow-footer"><span className="avatar-mini">AM</span> <span>4 teammates aligned</span><span className="footer-spacer" /><span className="online-dot" /> Live</div>
              </div>
            </div>
            <div className="product-copy reveal">
              <div className="eyebrow">Product</div>
              <h2>Your team’s work,<br />with a second brain.</h2>
              <p>NOVA sits on top of your projects and conversations to turn scattered information into clear decisions, next steps, and repeatable systems.</p>
              <div className="check-list">
                {['Plan projects in seconds, not hours.', 'Ask questions across your workspace.', 'Automate repetitive approvals and handoffs.', 'Spot delivery risk before it becomes a blocker.'].map((item) => <div key={item}><Check size={15} /> <span>{item}</span></div>)}
              </div>
              <button className="button button-outline" onClick={() => setShowDemo(true)}>See NOVA in action <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading reveal"><div className="eyebrow">How it works</div><h2>From idea to impact<br />in three moves.</h2></div>
            <div className="process-grid">
              {[
                ['01', 'Connect', 'Bring your projects, people, and knowledge into one workspace.'],
                ['02', 'Configure', 'Tell NOVA how your team works and turn repeatable steps into automations.'],
                ['03', 'Compound', 'NOVA learns the operating context and helps your team move faster every week.'],
              ].map(([n, title, text]) => <article className="process-card reveal" key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{text}</p><div className="process-line" /></article>)}
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            {[['42%', 'less time in status meetings'], ['3.2x', 'faster project kickoff'], ['18k+', 'hours automated'], ['99.9%', 'workspace uptime']].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section id="solutions" className="section section-alt">
          <div className="container">
            <div className="section-heading row-heading reveal"><div><div className="eyebrow eyebrow-dark">Solutions</div><h2>Built around how<br />teams actually work.</h2></div><p>NOVA adapts to your operating model—from product and ops to services and scale-ups.</p></div>
            <div className="use-case-grid">
              {useCases.map(({ label, title, text, icon: Icon }) => <article className="use-card reveal" key={title}><div className="use-top"><span>{label}</span><div className="use-icon"><Icon size={20} /></div></div><h3>{title}</h3><p>{text}</p><button className="arrow-button" aria-label={`Explore ${label}`} onClick={() => setShowDemo(true)}><ArrowUpRight size={18} /></button></article>)}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container testimonial-wrap">
            <div className="quote-mark"><Quote size={30} /></div>
            <div className="testimonial-copy reveal"><p className="quote">“{activeTestimonial.quote}”</p><div className="person"><div className="person-avatar">{activeTestimonial.initials}</div><div><strong>{activeTestimonial.name}</strong><span>{activeTestimonial.role}</span></div></div></div>
            <div className="testimonial-controls"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button><div>{testimonials.map((_, i) => <button key={i} className={i === testimonial ? 'active' : ''} onClick={() => setTestimonial(i)} aria-label={`Show testimonial ${i + 1}`} />)}</div><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div>
          </div>
        </section>

        <section id="pricing" className="section section-alt">
          <div className="container">
            <div className="section-heading reveal"><div className="eyebrow eyebrow-dark">Pricing</div><h2>Simple pricing.<br />Serious leverage.</h2><p>Start small, scale when you’re ready.</p></div>
            <div className="billing-toggle"><button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button><button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Annual <span>{yearLabel}</span></button></div>
            <div className="pricing-grid">
              {plans.map((plan) => <article className={`price-card reveal ${plan.popular ? 'popular' : ''}`} key={plan.name}>{plan.popular && <div className="popular-badge">Most popular</div>}<div className="price-head"><div><h3>{plan.name}</h3><p>{plan.description}</p></div><span className="price-icon"><Sparkles size={16} /></span></div>{plan.monthly ? <div className="price"><strong>${formattedPrice(plan.monthly)}</strong><span>/user/mo</span></div> : <div className="price custom"><strong>Let’s talk</strong></div>}<button className={`button ${plan.popular ? 'button-dark' : 'button-outline'} full-width`} onClick={() => setShowDemo(true)}>{plan.monthly ? 'Start free trial' : 'Contact sales'} <ArrowRight size={16} /></button><div className="price-divider" />{plan.features.map((f) => <div className="price-feature" key={f}><Check size={14} /> {f}</div>)}</article>)}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container faq-layout">
            <div className="faq-intro reveal"><div className="eyebrow">FAQ</div><h2>Questions,<br />answered.</h2><p>Still curious? Our team is happy to help with anything else.</p><button className="inline-link" onClick={() => setShowDemo(true)}>Talk to us <ArrowRight size={15} /></button></div>
            <div className="faq-list reveal">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'open' : ''}`} key={question}><button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><span className="faq-icon">{activeFaq === index ? <X size={16} /> : <Plus size={16} />}</span></button>{activeFaq === index && <div className="faq-answer"><p>{answer}</p></div>}</div>)}</div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-orb orb-a" /><div className="cta-orb orb-b" />
          <div className="container cta-inner reveal"><div className="eyebrow eyebrow-light"><span className="status-dot" /> Ready when you are</div><h2>Make work feel<br /><em>lighter.</em></h2><p>Give your team an unfair advantage. Start your 14-day NOVA trial today.</p><div className="hero-actions"><button className="button button-light button-lg" onClick={() => setShowDemo(true)}>Start free <ArrowRight size={18} /></button><button className="button button-glass button-lg" onClick={() => setShowDemo(true)}>Book a demo</button></div></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><button className="brand brand-footer" onClick={() => scrollTo('home')}><span className="brand-mark"><Sparkles size={17} /></span><span>NOVA</span></button><p>The intelligent workspace<br />for ambitious teams.</p><div className="footer-meta">© 2026 NOVA Labs. Fictional company for demo purposes.</div></div>
          <div className="footer-links"><div><span>Product</span><button onClick={() => scrollTo('features')}>Features</button><button onClick={() => scrollTo('product')}>Product</button><button onClick={() => scrollTo('pricing')}>Pricing</button></div><div><span>Company</span><button onClick={() => setShowDemo(true)}>About</button><button onClick={() => setShowDemo(true)}>Careers</button><button onClick={() => setShowDemo(true)}>Contact</button></div><div><span>Resources</span><button onClick={() => scrollTo('faq')}>Help center</button><button onClick={() => setShowDemo(true)}>API docs</button><button onClick={() => setShowDemo(true)}>Security</button></div></div>
          <div className="footer-newsletter"><span>Stay in the loop</span><p>Product updates, insights, and team productivity tips.</p><form onSubmit={handleNewsletter}><label className="sr-only" htmlFor="newsletter">Email address</label><input id="newsletter" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} /><button aria-label="Subscribe"><ArrowRight size={16} /></button></form>{newsletterStatus && <small className="newsletter-status">{newsletterStatus}</small>}</div>
        </div>
        <div className="container footer-bottom"><span>Privacy</span><span>Terms</span><span>Cookies</span><span className="footer-spacer" /><span><ShieldCheck size={13} /> SOC 2-ready design</span></div>
      </footer>

      {showDemo && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setShowDemo(false)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title"><button className="modal-close" onClick={() => setShowDemo(false)} aria-label="Close"><X /></button><div className="modal-icon"><Sparkles size={20} /></div><h2 id="demo-title">See NOVA in action</h2><p>This demo UI is intentionally self-contained for the assignment. In production, this button would open a calendar, video demo, or product signup flow.</p><div className="modal-demo-grid"><div><Play size={17} /><span>3 min product tour</span></div><div><Users size={17} /><span>Talk to a specialist</span></div><div><Crosshair size={17} /><span>Start a 14-day trial</span></div></div><button className="button button-dark full-width" onClick={() => setShowDemo(false)}>Continue <ArrowRight size={16} /></button></div></div>}

      <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top">↑</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
