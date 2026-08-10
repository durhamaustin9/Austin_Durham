"use client";

import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconBuildingSkyscraper,
  IconCloudCode,
  IconCode,
  IconDatabase,
  IconDownload,
  IconMail,
  IconMapPin,
  IconRoute,
  IconServer2,
  IconShieldCheck,
  IconSparkles,
  IconUsersGroup,
} from "@tabler/icons-react";

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
    title: "Data systems",
    copy: "PostgreSQL, MySQL, MongoDB, Prisma, Sequelize, SQL, data modeling, query optimization",
  },
  {
    icon: IconServer2,
    title: "Cloud & platform",
    copy: "AWS Lambda, EC2, RDS, Docker, CI/CD, telemetry, observability, distributed systems",
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

export default function Home() {
  return (
    <Box component="main" className="site-shell">
      <header className="topbar">
        <Container size="xl" className="topbar-inner">
          <Anchor href="#top" className="wordmark" underline="never">
            <span>AD</span>
            Austin Durham
          </Anchor>

          <nav className="nav-links" aria-label="Primary navigation">
            <Anchor href="#work" underline="never">Work</Anchor>
            <Anchor href="#experience" underline="never">Experience</Anchor>
            <Anchor href="#capabilities" underline="never">Capabilities</Anchor>
          </nav>

          <Button
            component="a"
            href="mailto:contact@austindurham.info"
            radius="xl"
            size="sm"
            rightSection={<IconArrowUpRight size={16} stroke={2} />}
            className="nav-cta"
          >
            Let&apos;s talk
          </Button>
        </Container>
      </header>

      <section id="top" className="hero-section">
        <Container size="xl">
          <div className="hero-grid">
            <Stack gap={0} className="hero-copy">
              <Badge
                variant="outline"
                radius="xl"
                size="lg"
                leftSection={<span className="status-dot" />}
                className="hero-badge"
              >
                FULL-STACK SOFTWARE ENGINEER
              </Badge>

              <Title order={1} className="hero-title">
                I build software that makes the business
                <span> run better.</span>
              </Title>

              <Text className="hero-lede">
                I&apos;m Austin—a full-stack engineer and technology operations
                leader who turns complicated workflows into reliable products,
                cloud services, and measurable business outcomes.
              </Text>

              <Group gap="md" className="hero-actions">
                <Button
                  component="a"
                  href="mailto:contact@austindurham.info"
                  size="lg"
                  radius="xl"
                  leftSection={<IconMail size={19} stroke={1.8} />}
                  className="primary-cta"
                >
                  Start a conversation
                </Button>
                <Button
                  component="a"
                  href="/Austin-Durham-Resume.pdf"
                  download
                  size="lg"
                  radius="xl"
                  variant="subtle"
                  color="dark"
                  leftSection={<IconDownload size={19} stroke={1.8} />}
                  className="resume-cta"
                >
                  Download résumé
                </Button>
              </Group>

              <Group gap="xs" className="location-line">
                <IconMapPin size={17} stroke={1.8} />
                <Text component="span">Scottsdale, Arizona</Text>
                <span className="location-divider" />
                <Text component="span">Cloud, platform & business systems</Text>
              </Group>
            </Stack>

            <Paper className="outcomes-panel" radius="xl">
              <div className="panel-topline">
                <div>
                  <span className="eyebrow">SELECTED OUTCOMES</span>
                  <Text>Engineering measured in impact.</Text>
                </div>
                <ThemeIcon radius="xl" size={42} className="spark-icon">
                  <IconSparkles size={21} stroke={1.7} />
                </ThemeIcon>
              </div>

              <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md" className="metrics-grid">
                {metrics.map((metric) => (
                  <div className="metric-card" key={metric.value}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </SimpleGrid>

              <div className="panel-footnote">
                <span className="live-line" />
                Production work across applications, APIs, data, and IT systems
              </div>
            </Paper>
          </div>

          <Anchor href="#work" className="scroll-cue" underline="never">
            Explore the work <IconArrowDown size={17} stroke={1.7} />
          </Anchor>
        </Container>
      </section>

      <section id="work" className="section-block work-section">
        <Container size="xl">
          <div className="section-heading-row">
            <div>
              <span className="section-index">01 / SELECTED IMPACT</span>
              <Title order={2}>Proof in production.</Title>
            </div>
            <Text>
              The strongest engineering work connects technical decisions to
              outcomes people can see, use, and measure.
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" className="impact-grid">
            {impactStories.map((story) => {
              const StoryIcon = story.icon;
              return (
                <Paper className="impact-card" radius="lg" key={story.number}>
                  <div className="impact-card-top">
                    <ThemeIcon size={48} radius="md" variant="light" className="impact-icon">
                      <StoryIcon size={24} stroke={1.6} />
                    </ThemeIcon>
                    <span>{story.number}</span>
                  </div>
                  <span className="eyebrow">{story.eyebrow}</span>
                  <Title order={3}>{story.title}</Title>
                  <Text>{story.description}</Text>
                  <Group gap={7} className="stack-tags">
                    {story.stack.map((item) => (
                      <Badge key={item} variant="outline" radius="xl" size="sm">
                        {item}
                      </Badge>
                    ))}
                  </Group>
                </Paper>
              );
            })}
          </SimpleGrid>
        </Container>
      </section>

      <section id="experience" className="section-block experience-section">
        <Container size="xl">
          <div className="section-heading-row">
            <div>
              <span className="section-index">02 / EXPERIENCE</span>
              <Title order={2}>Built across the stack.</Title>
            </div>
            <Text>
              Four-plus years of professional engineering experience, grounded
              in an earlier career of customer service and operational ownership.
            </Text>
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
                      <Title order={3}>{role.title}</Title>
                      <Group gap={7} className="company-line">
                        <IconBuildingSkyscraper size={16} stroke={1.8} />
                        <Text component="span">{role.company}</Text>
                        <span>·</span>
                        <Text component="span">{role.location}</Text>
                      </Group>
                    </div>
                    <span className="role-count">0{roleIndex + 1}</span>
                  </div>
                  <Text className="role-intro">{role.intro}</Text>
                  <ul className="role-bullets">
                    {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="foundation-block">
            <div className="foundation-label">
              <IconBriefcase2 size={20} stroke={1.7} />
              Additional technical work
            </div>
            <div className="foundation-list">
              {foundations.map((item) => (
                <article key={item.title}>
                  <span>{item.date}</span>
                  <Title order={4}>{item.title}</Title>
                  <Text className="foundation-company">{item.company}</Text>
                  <Text>{item.detail}</Text>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="section-block capabilities-section">
        <Container size="xl">
          <div className="section-heading-row light-heading">
            <div>
              <span className="section-index">03 / CAPABILITIES</span>
              <Title order={2}>One engineer. Multiple layers.</Title>
            </div>
            <Text>
              Comfortable moving from user workflow and interface to API,
              database, deployment, and the operational system around it.
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={0} className="capability-grid">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <article className="capability-item" key={group.title}>
                  <ThemeIcon variant="outline" radius="xl" size={46}>
                    <GroupIcon size={22} stroke={1.6} />
                  </ThemeIcon>
                  <div>
                    <Title order={3}>{group.title}</Title>
                    <Text>{group.copy}</Text>
                  </div>
                </article>
              );
            })}
          </SimpleGrid>

          <div className="language-strip">
            <span>CORE LANGUAGES</span>
            <div>
              {['Python', 'JavaScript', 'PHP', 'Java', 'Bash', 'SQL'].map((language) => (
                <Badge key={language} radius="xl" variant="outline">{language}</Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-block roots-section">
        <Container size="xl">
          <div className="roots-grid">
            <div>
              <span className="section-index">04 / FOUNDATION</span>
              <Title order={2}>Technical instincts. Operational empathy.</Title>
            </div>
            <div className="roots-copy">
              <Text>
                Before writing software professionally, I worked directly with
                customers, devices, inventory, and high-pressure operations at
                Best Buy, Staples, Walmart, and Subway. That experience still
                shapes how I build: understand the real workflow, explain the
                tradeoffs clearly, and make the system dependable for the people
                using it.
              </Text>
              <div className="education-row">
                <div>
                  <span>EDUCATION</span>
                  <strong>High School Diploma</strong>
                  <small>Additional college coursework</small>
                </div>
                <div>
                  <span>LEADERSHIP</span>
                  <strong>Eagle Scout</strong>
                  <small>Boy Scouts of America · 2017</small>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-section">
        <Container size="xl">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</span>
              <Title order={2}>Have a hard operational problem?</Title>
              <Text>
                I&apos;d love to hear what isn&apos;t working—and explore what the right
                software could change.
              </Text>
            </div>
            <Button
              component="a"
              href="mailto:contact@austindurham.info"
              size="xl"
              radius="xl"
              rightSection={<IconArrowUpRight size={20} stroke={1.8} />}
              className="contact-button"
            >
              contact@austindurham.info
            </Button>
          </div>
        </Container>
      </section>

      <footer className="footer">
        <Container size="xl" className="footer-inner">
          <div>
            <strong>Austin Durham</strong>
            <span>Full-Stack Software Engineer</span>
          </div>
          <Group gap="xs" className="social-links">
            <Anchor
              href="https://www.linkedin.com/in/austin-durham-031473186/"
              target="_blank"
              rel="noreferrer"
              aria-label="Austin Durham on LinkedIn"
            >
              <IconBrandLinkedin size={20} stroke={1.7} />
            </Anchor>
            <Anchor
              href="https://github.com/durhamaustin9"
              target="_blank"
              rel="noreferrer"
              aria-label="Austin Durham on GitHub"
            >
              <IconBrandGithub size={20} stroke={1.7} />
            </Anchor>
          </Group>
          <span className="footer-note">Designed for clarity. Built for impact.</span>
        </Container>
      </footer>
    </Box>
  );
}
