const en = {
  meta: {
    title: "Mert Incesu — Backend Software Engineer",
    description:
      "Mert Incesu is a backend software engineer based in Munich, building reliable distributed systems with Kotlin, Java, Spring Boot, and PostgreSQL.",
    ogDescription:
      "Backend engineer in Munich. Kotlin, Spring Boot, distributed systems.",
    ogLocale: "en_US",
  },
  nav: {
    role: "Software Engineer",
    links: {
      about: "About",
      stack: "Stack",
      experience: "Experience",
      contact: "Contact",
    },
    available: "Available for work",
    languageLabel: "Language",
  },
  hero: {
    location: "Munich, Germany",
    tz: "CET",
    title: {
      line1: "Software engineer",
      line2Pre: "building ",
      line2Accent: "reliable",
      line2Post: " systems",
      line3: "at the API layer.",
    },
    intro: {
      pre: "I'm ",
      name: "Mert Incesu",
      post: " — a software engineer with 3+ years of experience designing and shipping production microservices in Java, Kotlin and Spring Boot. I design services around stable, well-documented APIs, build observability in from the start, and write code that supports long-term maintainability.",
    },
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    stats: [
      { label: "Focus", value: "Distributed backends", mono: false },
      { label: "Primary", value: "Kotlin · Spring Boot", mono: true },
      { label: "Experience", value: "3+ years, production", mono: false },
      { label: "Open to", value: "Backend · Full-Stack · Platform", mono: false },
    ],
  },
  about: {
    eyebrow: "01 / About",
    portraitAlt: "Mert Incesu",
    heading:
      "I build the essential parts carefully, so the complex parts work seamlessly.",
    p1: "I've spent the last three years on payments, identity and internal platform teams, owning services that handle millions of requests a day. Most of my work lives in Kotlin and Spring Boot, with PostgreSQL underneath and Kafka in front.",
    p2: {
      pre: "I perform best in environments where systems must remain reliable, maintainable, and operationally ",
      accent: "predictable",
      post: ". My focus is on defining clear service boundaries, establishing stable contracts, and reducing technical debt before it becomes operational risk. I value thoughtful architecture, clear documentation, and pragmatic engineering decisions that improve long-term system stability.",
    },
    facts: [
      { label: "Based in", value: "Munich, DE" },
      { label: "Languages", value: "English · German · Turkish" },
      { label: "Role", value: "Backend Engineer / Fullstack Engineer" },
    ],
    statusLabel: "Status",
    statusValue: "Open to roles",
  },
  stack: {
    eyebrow: "02 / Stack",
    heading: "Technologies I work with",
    sub: "A short list, on purpose. I prefer to go deep on a small set than collect logos.",
    categories: [
      {
        title: "Languages",
        badge: "core",
        items: [
          { name: "Java", note: "8 → 21" },
          { name: "Kotlin", note: "JVM backend" },
          { name: "SQL", note: "PostgreSQL-focused" },
          { name: "TypeScript", note: "React ecosystems" },
          { name: "Bash", note: "automation and scripting" },
        ],
      },
      {
        title: "Frameworks",
        badge: "backend",
        items: [
          { name: "Spring Boot", note: "2.x / 3.x" },
          { name: "Spring WebFlux", note: "reactive systems" },
          { name: "Ktor", note: "lightweight services" },
          { name: "JUnit · Testcontainers", note: "integration testing" },
          { name: "Flyway · jOOQ", note: "database tooling" },
        ],
      },
      {
        title: "Data & messaging",
        badge: "infra",
        items: [
          { name: "PostgreSQL", note: "12 → 16" },
          { name: "Redis", note: "caching and locking" },
          { name: "Apache Kafka", note: "event-driven systems" },
          { name: "OpenSearch", note: "search and observability" },
          { name: "S3 · DynamoDB", note: "AWS services" },
        ],
      },
      {
        title: "Platform & ops",
        badge: "cloud",
        items: [
          { name: "AWS", note: "ECS · Lambda · RDS" },
          { name: "Docker", note: "containerized deployments" },
          { name: "Kubernetes", note: "Helm · Kustomize" },
          { name: "Terraform", note: "infrastructure as code" },
          { name: "GitHub Actions", note: "CI/CD pipelines" },
          { name: "Grafana · OpenTelemetry", note: "monitoring and tracing" },
        ],
      },
    ],
    alsoLabel: "Also",
    methods: [
      "REST",
      "gRPC",
      "OpenAPI",
      "Event-driven",
      "DDD-lite",
      "Hexagonal",
      "CI/CD",
      "SLO / SLI",
      "PR reviews",
      "RFC writing",
    ],
  },
  experience: {
    eyebrow: "03 / Experience",
    heading: "Where I've worked.",
    items: {
      sfc: {
        period: "Mar 2024 — Oct 2025",
        location: "Munich",
        role: "Software Engineer",
        companyNote: "energy tech, IoT",
        description:
          "Contributed to the EFOY Cloud platform as part of the data engineering team. Designed and implemented Kotlin microservices and RESTful services with Spring Boot; deployed containerized workloads on Azure via Docker.",
      },
      autodeals: {
        period: "Aug 2023 — Mar 2024",
        location: "Munich",
        role: "Software Engineer",
        companyNote: "automotive marketplace",
        description:
          "Supported the platform from inception to production, managing software processes and contributing to continuous improvement across the full development lifecycle.",
      },
      viennalife: {
        period: "Sep 2022 — Aug 2023",
        location: "Istanbul",
        role: "Software Engineer",
        companyNote: "Vienna Insurance Group",
        description:
          "Developed and maintained Java microservices for enterprise insurance platforms covering sales, policy management, and operational workflows. Improved deployment reliability via Jenkins CI/CD and Kubernetes; built back-office tooling with Spring Boot and React.",
      },
      pia: {
        period: "Jan 2022 — Sep 2022",
        location: "Istanbul",
        role: "Software Engineer",
        companyNote: "People in Action",
        description:
          "Debugged Java/Spring backend services on the Vodafone Turkey defect resolution team. On the Vodafone Albania project, built SQL-based data migration rules and used AWS services to ensure accurate, consistent data transfers.",
      },
      pyz: {
        period: "Aug 2021 — Jan 2022",
        location: "Istanbul",
        role: "Software Developer",
        companyNote: "design studio",
        description:
          "Designed and maintained the company website, supported frontend development, and assisted with hardware and software processes for the electric scooter system.",
      },
    },
  },
  contact: {
    eyebrow: "04 / Contact",
    headingLine1: "Get in touch.",
    headingLine2: "I respond to every message.",
    body: "Interested in backend and platform engineering roles across Munich, Berlin, or remote within Europe. Also open to open-source collaborations, personal projects, and long-term client or project-based engineering work.",
    linkLabels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Resume",
    },
    form: {
      heading: "Send a message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      subjectLabel: "Subject",
      subjects: [
        "Hiring / role opportunity",
        "Contract or project-based engagement",
        "Long-term client or consultancy",
        "Open-source collaboration",
        "Personal project",
        "Other",
      ],
      messageLabel: "Message",
      messagePlaceholder:
        "Describe the project, role, or idea you'd like to discuss.",
      privacyNote: "Encrypted in transit · No tracking",
      submit: "Send message",
      sending: "Sending…",
      sent: "Sent ✓",
      success: "// message queued — I'll reply within 48h.",
      error: "// something went wrong — please try again.",
    },
  },
  footer: {
    copyright: "© 2026 Mert Incesu — All rights reserved.",
    backToTop: "Back to top ↑",
  },
};

export type Dictionary = typeof en;
export default en;
