import Image from "next/image";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrain,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconBuildingSkyscraper,
  IconCloudCode,
  IconCode,
  IconCpu,
  IconDatabase,
  IconDeviceDesktop,
  IconExternalLink,
  IconFileDescription,
  IconFlask2,
  IconLock,
  IconMail,
  IconMapPin,
  IconPlayerPlay,
  IconRoute,
  IconRouter,
  IconServer2,
  IconShieldCheck,
  IconSparkles,
  IconTerminal2,
  IconUsersGroup,
} from "@tabler/icons-react";
import { PiRouterDemo, QuickCalcDemo } from "@/components/project-demos";
import { TrackedLink } from "@/components/tracked-link";

const metrics = [
  { value: "$100K+", label: "annual licensing expense eliminated" },
  { value: "90%", label: "reduction in project asset loss" },
  { value: "$1M+", label: "projected vendor and infrastructure costs avoided" },
  { value: "1K+", label: "users served by customer-facing features" },
];

const impactStories = [
  {
    number: "01",
    icon: IconShieldCheck,
    eyebrow: "WORKFORCE SYSTEMS",
    title: "Replaced a six-figure licensing dependency.",
    description:
      "Built a proprietary employee badging platform with secure scan workflows and Apple Wallet and Google Wallet support—saving more than $100,000 annually.",
    stack: ["React Native", "Next.js", "Secure workflows"],
  },
  {
    number: "02",
    icon: IconRoute,
    eyebrow: "OPERATIONS AT SCALE",
    title: "Turned physical inventory into protected data.",
    description:
      "Designed digitization tools, led cross-team adoption, and established reusable standards that cataloged over $2 million in project inventory and cut asset loss by 90%.",
    stack: ["Product discovery", "Platform design", "Change leadership"],
  },
  {
    number: "03",
    icon: IconCloudCode,
    eyebrow: "CLOUD ENGINEERING",
    title: "Moved critical workloads to on-demand infrastructure.",
    description:
      "Developed and operated 15+ AWS Lambda functions and supporting services, replacing outsourced work and reducing always-on EC2 usage to avoid seven-figure projected costs.",
    stack: ["AWS Lambda", "Node.js", "FastAPI"],
  },
];

const skillGroups = [
  {
    icon: IconCode,
    title: "Application engineering",
    copy: "React, Next.js, React Native, Expo, Vue.js, Node.js, Express, FastAPI, Tailwind CSS, Radix UI",
  },
  {
    icon: IconDatabase,
    title: "Data & AI systems",
    copy: "PostgreSQL, MySQL, MongoDB, SQLite, data modeling, full-text search, ONNX embeddings, retrieval-augmented generation, evaluation",
  },
  {
    icon: IconServer2,
    title: "Cloud & platform",
    copy: "AWS Lambda, EC2, RDS, Docker, Ollama, CI/CD, telemetry, observability, distributed systems",
  },
  {
    icon: IconUsersGroup,
    title: "Technical leadership",
    copy: "Discovery, architecture, cross-team adoption, legacy integration, documentation, IT operations",
  },
];

const roles = [
  {
    date: "MAY 2024 — PRESENT",
    title: "Full-Stack Software Engineer & IT Manager",
    company: "Armstrong Construction Group",
    location: "Scottsdale, AZ",
    intro:
      "Leading the complete lifecycle of internal products—from operational discovery and architecture to deployment, adoption, and support.",
    bullets: [
      "Built production applications spanning employee identity, time tracking, intelligent document retrieval, and inventory operations.",
      "Migrated physical records into OneDrive and developed an AI-assisted Next.js search experience using Radix UI, Tailwind CSS, and Prisma.",
      "Created a secure multi-user QuickBooks Enterprise environment with local virtual machines and Tailscale for remote accounting collaboration.",
      "Standardized IT operations with automated Windows deployment, Microsoft 365 conference rooms, and hands-on endpoint and account support.",
    ],
  },
  {
    date: "FEB 2022 — JAN 2024",
    title: "Full-Stack Software Engineer",
    company: "FarmFlight",
    location: "Tempe, AZ",
    intro:
      "Built and operated data-intensive product capabilities, APIs, background workers, and cloud services for an agricultural technology platform.",
    bullets: [
      "Designed and maintained a 300+ table Amazon RDS PostgreSQL environment supporting evolving product data models.",
      "Built Node.js and FastAPI services that managed first- and third-party licensing workflows and handled thousands of requests per day.",
      "Added telemetry and detailed logging to connect API behavior with vector context for faster diagnosis and better system insight.",
      "Worked across CI/CD, code review, load testing, and unit, integration, and end-to-end automation while owning daily-use customer features.",
    ],
  },
];

const foundations = [
  {
    date: "2017",
    title: "Contract Software Engineer",
    company: "AlertGPS",
    detail:
      "Designed 20+ MongoDB and Google Cloud SQL data structures, created REST APIs, built 50+ React components, and developed Java automation scripts.",
  },
  {
    date: "INDEPENDENT PROJECT",
    title: "Media Search Platform",
    company: "Self-hosted",
    detail:
      "Built and maintained a Dockerized media indexing and request platform across Unraid and Ubuntu using Vue.js, Node.js, MySQL, Bash, and REST APIs.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Austin Durham",
  url: "https://austindurham.info",
  jobTitle: "Full-Stack Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Scottsdale",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/durhamaustin9",
    "https://www.linkedin.com/in/austin-durham-031473186/",
  ],
  knowsAbout: [
    "Full-stack software engineering",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Applied AI engineering",
    "Local language models",
    "Retrieval-augmented generation",
    "Cloud infrastructure",
    "Business systems",
  ],
};

export default function Home() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="topbar">
        <div className="site-container topbar-inner">
          <a href="#top" className="wordmark" aria-label="Austin Durham, back to top">
            <span aria-hidden="true">AD</span>
            Austin Durham
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#projects">Projects</a>
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
          </nav>
          <TrackedLink
            href="mailto:contact@austindurham.info"
            className="button nav-cta"
            eventName="contact_cta_clicked"
            eventProperties={{ placement: "navigation" }}
          >
            Let&apos;s talk
            <IconArrowUpRight size={16} stroke={2} aria-hidden="true" />
          </TrackedLink>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="site-container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-badge">
                  <span className="status-dot" aria-hidden="true" />
                  FULL-STACK SOFTWARE ENGINEER
                </p>
                <h1 id="hero-title" className="hero-title">
                  I build software that makes the business<span> run better.</span>
                </h1>
                <p className="hero-lede">
                  I&apos;m Austin—a full-stack engineer and technology operations
                  leader who turns complicated workflows into reliable products,
                  cloud services, and measurable business outcomes.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="button primary-cta">
                    <IconCode size={19} stroke={1.8} aria-hidden="true" />
                    See selected work
                  </a>
                  <TrackedLink
                    href="/Austin-Durham-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button resume-cta"
                    eventName="resume_opened"
                    eventProperties={{ format: "pdf", placement: "hero" }}
                    aria-label="Open Austin Durham's résumé in a new tab"
                  >
                    <IconFileDescription size={19} stroke={1.8} aria-hidden="true" />
                    View résumé
                  </TrackedLink>
                </div>
                <div className="location-line">
                  <IconMapPin size={17} stroke={1.8} aria-hidden="true" />
                  <span>Scottsdale, Arizona</span>
                  <i aria-hidden="true" />
                  <span>Cloud, platform & business systems</span>
                </div>
              </div>

              <aside className="outcomes-panel" aria-label="Selected engineering outcomes">
                <div className="panel-topline">
                  <div>
                    <span className="eyebrow">SELECTED OUTCOMES</span>
                    <p>Engineering measured in impact.</p>
                  </div>
                  <span className="spark-icon" aria-hidden="true">
                    <IconSparkles size={21} stroke={1.7} />
                  </span>
                </div>
                <div className="metrics-grid">
                  {metrics.map((metric) => (
                    <div className="metric-card" key={metric.value}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="panel-footnote">
                  <span className="live-line" aria-hidden="true" />
                  Production work across applications, APIs, data, and IT systems
                </div>
              </aside>
            </div>
            <a href="#projects" className="scroll-cue">
              Explore the builds <IconArrowDown size={17} stroke={1.7} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="projects" className="section-block projects-section" aria-labelledby="projects-title">
          <div className="site-container">
            <div className="section-heading-row">
              <div>
                <span className="section-index">01 / SELECTED WORK</span>
                <h2 id="projects-title">Built to be inspected.</h2>
              </div>
              <p>
                Five projects spanning applied AI, product engineering, native
                development, infrastructure, and clean-room research—with public
                source where safe and concrete evidence where systems must stay private.
              </p>
            </div>

            <div className="project-grid">
              <article id="galileo" className="project-card galileo-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span className="project-number">01</span>
                    <span className="demo-badge private">PRIVATE CASE STUDY</span>
                  </div>
                  <div className="project-title-row">
                    <IconBrain size={29} stroke={1.6} aria-hidden="true" />
                    <h3>Galileo-AI</h3>
                  </div>
                  <p className="galileo-role">
                    Sep 2026—present · Project owner · System designer · AI-assisted developer
                  </p>
                  <p className="project-summary">
                    I designed and built a private, self-hosted AI development
                    platform that connects local language models to coding tools,
                    persistent project context, hybrid documentation retrieval,
                    scheduled workflows, and evidence-based verification.
                  </p>
                  <dl className="project-facts">
                    <div>
                      <dt>Built with</dt>
                      <dd>Python · TypeScript · Ollama · SQLite · ONNX · Docker</dd>
                    </div>
                    <div>
                      <dt>Engineering focus</dt>
                      <dd>Reliable tool use, bounded recovery, approval gates, and shared-GPU operation</dd>
                    </div>
                  </dl>
                  <p className="galileo-private-note">
                    <IconLock size={17} stroke={1.8} aria-hidden="true" />
                    <span>
                      <strong>Private source by design.</strong> Architecture and
                      dated results are shown without exposing code, credentials,
                      personal data, or internal access.
                    </span>
                  </p>
                </div>

                <div className="galileo-system" aria-label="Galileo-AI system architecture and documented results">
                  <div className="galileo-system-top">
                    <div>
                      <IconBrain size={18} stroke={1.6} aria-hidden="true" />
                      <span>galileo / local-first stack</span>
                    </div>
                    <span><i aria-hidden="true" />v6 verified</span>
                  </div>

                  <div className="galileo-flow">
                    <div className="galileo-node">
                      <span><IconDeviceDesktop size={17} stroke={1.7} aria-hidden="true" />Interfaces</span>
                      <strong>Desktop coding + browser chat</strong>
                      <small>Purpose-built tools with deliberately different permissions</small>
                    </div>
                    <span className="galileo-connector" aria-hidden="true" />
                    <div className="galileo-node">
                      <span><IconDatabase size={17} stroke={1.7} aria-hidden="true" />Context & knowledge</span>
                      <strong>Project state + memory + local RAG</strong>
                      <small>Source-linked retrieval, scoped records, and owner-reviewed procedures</small>
                    </div>
                    <span className="galileo-connector" aria-hidden="true" />
                    <div className="galileo-node">
                      <span><IconCpu size={17} stroke={1.7} aria-hidden="true" />Execution & evidence</span>
                      <strong>Local inference + isolated checks</strong>
                      <small>Actual commands and outcomes outrank model confidence</small>
                    </div>
                  </div>

                  <div className="galileo-proof-grid">
                    <div>
                      <strong>448</strong>
                      <span>passing software checks in the documented v6 release</span>
                    </div>
                    <div>
                      <strong>14,508</strong>
                      <span>searchable chunks across 296 indexed technical documents</span>
                    </div>
                  </div>

                  <div className="galileo-system-foot">
                    <IconShieldCheck size={17} stroke={1.7} aria-hidden="true" />
                    Private inference · approval-gated learning · bounded recovery
                  </div>
                </div>
              </article>

              <article className="project-card beatflight-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span className="project-number">02</span>
                    <span className="demo-badge live">LIVE WEB APP</span>
                  </div>
                  <div className="project-title-row">
                    <IconPlayerPlay size={28} stroke={1.6} aria-hidden="true" />
                    <h3>BeatFlight</h3>
                  </div>
                  <p className="project-summary">
                    A music-reactive, one-button browser rhythm game where every
                    track shapes the timing, visuals, and challenge of the run.
                    Local audio analysis stays in the browser.
                  </p>
                  <dl className="project-facts">
                    <div>
                      <dt>Built with</dt>
                      <dd>Next.js · TypeScript · Canvas · Web Audio API</dd>
                    </div>
                    <div>
                      <dt>Engineering signal</dt>
                      <dd>Deterministic engine tests, live audio sync, privacy-first local analysis</dd>
                    </div>
                  </dl>
                  <div className="project-actions">
                    <TrackedLink
                      href="https://beatflight.austindurham.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button project-primary"
                      eventName="project_link_clicked"
                      eventProperties={{ project: "beatflight", destination: "live" }}
                    >
                      Play BeatFlight
                      <IconExternalLink size={17} stroke={1.8} aria-hidden="true" />
                    </TrackedLink>
                    <TrackedLink
                      href="https://github.com/durhamaustin9/BeatFlight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      eventName="project_link_clicked"
                      eventProperties={{ project: "beatflight", destination: "source" }}
                    >
                      <IconBrandGithub size={18} stroke={1.8} aria-hidden="true" />
                      View source
                    </TrackedLink>
                  </div>
                </div>
                <a
                  className="beatflight-visual"
                  href="https://beatflight.austindurham.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play BeatFlight in a new tab"
                >
                  <Image
                    src="/projects/beatflight.png"
                    alt="BeatFlight game artwork showing a neon spacecraft flying through music-reactive gates"
                    width={1200}
                    height={630}
                    sizes="(max-width: 900px) 100vw, 58vw"
                  />
                  <span>
                    Open live game
                    <IconArrowUpRight size={17} stroke={1.8} aria-hidden="true" />
                  </span>
                </a>
              </article>

              <article className="project-card quickcalc-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span className="project-number">03</span>
                    <span className="demo-badge">INTERACTIVE SAMPLER</span>
                  </div>
                  <div className="project-title-row">
                    <IconDeviceDesktop size={26} stroke={1.6} aria-hidden="true" />
                    <h3>QuickCalc</h3>
                  </div>
                  <p className="project-summary">
                    A compact native calculator for macOS, Windows, and Linux,
                    built with modern C#, .NET 10, and Avalonia 12. The sampler
                    reproduces the public desktop interaction model in-browser.
                  </p>
                  <ul className="proof-list">
                    <li>Chained operations and repeated equals</li>
                    <li>Mouse and full keyboard controls</li>
                    <li>Calculation engine separated from the UI</li>
                  </ul>
                  <TrackedLink
                    href="https://github.com/durhamaustin9/CalculatorApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    eventName="project_link_clicked"
                    eventProperties={{ project: "quickcalc", destination: "source" }}
                  >
                    <IconBrandGithub size={18} stroke={1.8} aria-hidden="true" />
                    Inspect the C# source
                  </TrackedLink>
                </div>
                <div className="project-demo-wrap">
                  <div className="demo-label">
                    <span>Try it</span>
                    <small>Click the keys or use your keyboard</small>
                  </div>
                  <QuickCalcDemo />
                </div>
              </article>

              <article className="project-card pirouter-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span className="project-number">04</span>
                    <span className="demo-badge safe">SAFE DATA DEMO</span>
                  </div>
                  <div className="project-title-row">
                    <IconRouter size={26} stroke={1.6} aria-hidden="true" />
                    <h3>PiRouter</h3>
                  </div>
                  <p className="project-summary">
                    A touch-first Raspberry Pi 5 console for network health,
                    Time Machine storage, encrypted Restic archives, Tailscale,
                    service endpoints, and system telemetry.
                  </p>
                  <p className="project-note">
                    The production console stays private by design. This guided
                    preview uses synthetic values and exposes no home-network data.
                  </p>
                  <TrackedLink
                    href="https://github.com/durhamaustin9/PiRouter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    eventName="project_link_clicked"
                    eventProperties={{ project: "pirouter", destination: "source" }}
                  >
                    <IconBrandGithub size={18} stroke={1.8} aria-hidden="true" />
                    Inspect the system
                  </TrackedLink>
                </div>
                <div className="project-demo-wrap">
                  <div className="demo-label">
                    <span>Guided console</span>
                    <small>Switch views to inspect the information architecture</small>
                  </div>
                  <PiRouterDemo />
                </div>
              </article>

              <article className="project-card displaylink-card">
                <div className="project-copy">
                  <div className="project-kicker">
                    <span className="project-number">05</span>
                    <span className="demo-badge research">RESEARCH DOSSIER</span>
                  </div>
                  <div className="project-title-row">
                    <IconFlask2 size={28} stroke={1.6} aria-hidden="true" />
                    <h3>DisplayLink clean-room research</h3>
                  </div>
                  <p className="project-summary">
                    Original macOS research for a Plugable USB display dock:
                    read-only hardware discovery, bounded structural parsers,
                    synthetic transport models, and a deliberately gated state machine.
                  </p>
                  <p className="project-note light">
                    This is not presented as a finished display driver. The public
                    record separates observed facts from hypotheses and stops before
                    undocumented hardware writes.
                  </p>
                  <div className="project-actions">
                    <TrackedLink
                      href="https://github.com/durhamaustin9/DisplayLink-Drivers-Reconstruct"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button project-primary acid"
                      eventName="project_link_clicked"
                      eventProperties={{ project: "displaylink", destination: "source" }}
                    >
                      Explore the repository
                      <IconBrandGithub size={17} stroke={1.8} aria-hidden="true" />
                    </TrackedLink>
                    <TrackedLink
                      href="https://github.com/durhamaustin9/DisplayLink-Drivers-Reconstruct/blob/main/docs/AUDIT-SUMMARY.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link light"
                      eventName="project_link_clicked"
                      eventProperties={{ project: "displaylink", destination: "audit" }}
                    >
                      <IconFileDescription size={18} stroke={1.8} aria-hidden="true" />
                      Read the audit
                    </TrackedLink>
                  </div>
                </div>
                <div className="research-proof" aria-label="DisplayLink research evidence">
                  <div className="terminal-topline">
                    <IconTerminal2 size={17} stroke={1.7} aria-hidden="true" />
                    <span>clean-room / current milestone</span>
                    <i />
                  </div>
                  <div className="research-stats">
                    <div><strong>100,000</strong><span>deterministic metadata mutations</span></div>
                    <div><strong>15</strong><span>controlled capture observations</span></div>
                    <div><strong>7</strong><span>USB interfaces mapped read-only</span></div>
                    <div><strong>0</strong><span>real-hardware writes attempted</span></div>
                  </div>
                  <div className="research-gate">
                    <span aria-hidden="true">✓</span>
                    Stops at the protocol-undocumented gate
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="impact" className="section-block impact-section" aria-labelledby="impact-title">
          <div className="site-container">
            <div className="section-heading-row">
              <div>
                <span className="section-index">02 / SELECTED IMPACT</span>
                <h2 id="impact-title">Proof in production.</h2>
              </div>
              <p>The strongest engineering work connects technical decisions to outcomes people can see, use, and measure.</p>
            </div>
            <div className="impact-grid">
              {impactStories.map((story) => {
                const StoryIcon = story.icon;
                return (
                  <article className="impact-card" key={story.number}>
                    <div className="impact-card-top">
                      <span className="impact-icon" aria-hidden="true"><StoryIcon size={24} stroke={1.6} /></span>
                      <span>{story.number}</span>
                    </div>
                    <span className="eyebrow">{story.eyebrow}</span>
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                    <div className="stack-tags">
                      {story.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section-block experience-section" aria-labelledby="experience-title">
          <div className="site-container">
            <div className="section-heading-row">
              <div>
                <span className="section-index">03 / EXPERIENCE</span>
                <h2 id="experience-title">Built across the stack.</h2>
              </div>
              <p>Four-plus years of professional engineering experience, grounded in an earlier career of customer service and operational ownership.</p>
            </div>
            <div className="timeline">
              {roles.map((role, roleIndex) => (
                <article className="timeline-row" key={role.company}>
                  <div className="timeline-date">
                    <span>{role.date}</span>
                    <span className="timeline-node" aria-hidden="true" />
                  </div>
                  <div className="timeline-content">
                    <div className="role-heading">
                      <div>
                        <h3>{role.title}</h3>
                        <div className="company-line">
                          <IconBuildingSkyscraper size={16} stroke={1.8} aria-hidden="true" />
                          <span>{role.company}</span><span aria-hidden="true">·</span><span>{role.location}</span>
                        </div>
                      </div>
                      <span className="role-count" aria-hidden="true">0{roleIndex + 1}</span>
                    </div>
                    <p className="role-intro">{role.intro}</p>
                    <ul className="role-bullets">
                      {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="foundation-block">
              <div className="foundation-label">
                <IconBriefcase2 size={20} stroke={1.7} aria-hidden="true" />
                Additional technical work
              </div>
              <div className="foundation-list">
                {foundations.map((item) => (
                  <article key={item.title}>
                    <span>{item.date}</span><h3>{item.title}</h3>
                    <p className="foundation-company">{item.company}</p><p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-block capabilities-section" aria-labelledby="capabilities-title">
          <div className="site-container">
            <div className="section-heading-row light-heading">
              <div>
                <span className="section-index">04 / CAPABILITIES</span>
                <h2 id="capabilities-title">One engineer. Multiple layers.</h2>
              </div>
              <p>Comfortable moving from user workflow and interface to API, database, deployment, and the operational system around it.</p>
            </div>
            <div className="capability-grid">
              {skillGroups.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <article className="capability-item" key={group.title}>
                    <span className="capability-icon" aria-hidden="true"><GroupIcon size={22} stroke={1.6} /></span>
                    <div><h3>{group.title}</h3><p>{group.copy}</p></div>
                  </article>
                );
              })}
            </div>
            <div className="language-strip">
              <span>CORE LANGUAGES</span>
              <div>{['Python', 'TypeScript', 'JavaScript', 'C#', 'PHP', 'Java', 'Bash', 'SQL'].map((language) => <span key={language}>{language}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section-block roots-section" aria-labelledby="foundation-title">
          <div className="site-container">
            <div className="roots-grid">
              <div>
                <span className="section-index">05 / FOUNDATION</span>
                <h2 id="foundation-title">Technical instincts. Operational empathy.</h2>
              </div>
              <div className="roots-copy">
                <p>
                  Before writing software professionally, I worked directly with customers, devices, inventory, and high-pressure operations at Best Buy, Staples, Walmart, and Subway. That experience still shapes how I build: understand the real workflow, explain the tradeoffs clearly, and make the system dependable for the people using it.
                </p>
                <div className="education-row">
                  <div><span>EDUCATION</span><strong>High School Diploma</strong><small>Additional college coursework</small></div>
                  <div><span>LEADERSHIP</span><strong>Eagle Scout</strong><small>Boy Scouts of America · 2017</small></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="site-container">
            <div className="contact-panel">
              <div>
                <span className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</span>
                <h2 id="contact-title">Need an engineer who follows the problem all the way through?</h2>
                <p>I bring product judgment, full-stack execution, cloud experience, and the operational ownership to make software dependable after launch.</p>
              </div>
              <TrackedLink
                href="mailto:contact@austindurham.info"
                className="button contact-button"
                eventName="contact_cta_clicked"
                eventProperties={{ placement: "footer" }}
              >
                <IconMail size={20} stroke={1.8} aria-hidden="true" />Email Austin
                <IconArrowUpRight size={20} stroke={1.8} aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="site-container footer-inner">
          <div className="footer-identity"><strong>Austin Durham</strong><span>Full-Stack Software Engineer · Scottsdale, AZ</span></div>
          <div className="social-links">
            <TrackedLink
              href="https://www.linkedin.com/in/austin-durham-031473186/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Austin Durham on LinkedIn, opens in a new tab"
              eventName="social_profile_clicked" eventProperties={{ platform: "linkedin" }}
            ><IconBrandLinkedin size={20} stroke={1.7} aria-hidden="true" /></TrackedLink>
            <TrackedLink
              href="https://github.com/durhamaustin9"
              target="_blank" rel="noopener noreferrer"
              aria-label="Austin Durham on GitHub, opens in a new tab"
              eventName="social_profile_clicked" eventProperties={{ platform: "github" }}
            ><IconBrandGithub size={20} stroke={1.7} aria-hidden="true" /></TrackedLink>
          </div>
          <span className="footer-note">Selected work. Production impact. End-to-end ownership.</span>
        </div>
      </footer>
    </div>
  );
}
