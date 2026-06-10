import type { Dictionary } from "./en";

const de: Dictionary = {
  meta: {
    title: "Mert Incesu — Backend-Softwareentwickler",
    description:
      "Mert Incesu ist ein Backend-Softwareentwickler in München und entwickelt zuverlässige verteilte Systeme mit Kotlin, Java, Spring Boot und PostgreSQL.",
    ogDescription:
      "Backend-Entwickler in München. Kotlin, Spring Boot, verteilte Systeme.",
    ogLocale: "de_DE",
  },
  nav: {
    role: "Software Engineer",
    links: {
      about: "Über mich",
      stack: "Stack",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    available: "Offen für neue Aufgaben",
    languageLabel: "Sprache",
  },
  hero: {
    location: "München, Deutschland",
    tz: "MEZ",
    title: {
      line1: "Softwareentwickler",
      line2Pre: "für ",
      line2Accent: "zuverlässige",
      line2Post: " Systeme",
      line3: "auf der API-Ebene.",
    },
    intro: {
      pre: "Ich bin ",
      name: "Mert Incesu",
      post: " — Softwareentwickler mit über drei Jahren Erfahrung im Entwurf und Betrieb von Produktions-Microservices mit Java, Kotlin und Spring Boot. Ich entwerfe Services rund um stabile, gut dokumentierte APIs, denke Observability von Anfang an mit und schreibe Code, der auf langfristige Wartbarkeit ausgelegt ist.",
    },
    ctaContact: "Kontakt aufnehmen",
    ctaCv: "Lebenslauf herunterladen",
    stats: [
      { label: "Schwerpunkt", value: "Verteilte Backends", mono: false },
      { label: "Hauptstack", value: "Kotlin · Spring Boot", mono: true },
      { label: "Erfahrung", value: "3+ Jahre, Produktion", mono: false },
      { label: "Offen für", value: "Backend · Full-Stack · Plattform", mono: false },
    ],
  },
  about: {
    eyebrow: "01 / Über mich",
    portraitAlt: "Mert Incesu",
    heading:
      "Ich baue die grundlegenden Teile sorgfältig, damit die komplexen reibungslos funktionieren.",
    p1: "Die letzten drei Jahre habe ich in Payments-, Identity- und internen Plattform-Teams gearbeitet und Services verantwortet, die Millionen von Anfragen pro Tag verarbeiten. Der Großteil meiner Arbeit entsteht in Kotlin und Spring Boot — mit PostgreSQL darunter und Kafka davor.",
    p2: {
      pre: "Ich arbeite am besten in Umgebungen, in denen Systeme zuverlässig, wartbar und betrieblich ",
      accent: "vorhersehbar",
      post: " bleiben müssen. Mein Fokus liegt darauf, klare Service-Grenzen zu definieren, stabile Schnittstellenverträge zu etablieren und technische Schulden abzubauen, bevor sie zum operativen Risiko werden. Ich lege Wert auf durchdachte Architektur, klare Dokumentation und pragmatische Engineering-Entscheidungen, die die langfristige Stabilität eines Systems verbessern.",
    },
    facts: [
      { label: "Standort", value: "München, DE" },
      { label: "Sprachen", value: "Englisch · Deutsch · Türkisch" },
      { label: "Rolle", value: "Backend Engineer / Fullstack Engineer" },
    ],
    statusLabel: "Status",
    statusValue: "Offen für neue Rollen",
  },
  stack: {
    eyebrow: "02 / Stack",
    heading: "Technologien, mit denen ich arbeite",
    sub: "Eine bewusst kurze Liste. Ich gehe lieber bei wenigen Technologien in die Tiefe, statt Logos zu sammeln.",
    categories: [
      {
        title: "Sprachen",
        badge: "core",
        items: [
          { name: "Java", note: "8 → 21" },
          { name: "Kotlin", note: "JVM-Backend" },
          { name: "SQL", note: "PostgreSQL-fokussiert" },
          { name: "TypeScript", note: "React-Ökosystem" },
          { name: "Bash", note: "Automatisierung & Skripte" },
        ],
      },
      {
        title: "Frameworks",
        badge: "backend",
        items: [
          { name: "Spring Boot", note: "2.x / 3.x" },
          { name: "Spring WebFlux", note: "reaktive Systeme" },
          { name: "Ktor", note: "leichtgewichtige Services" },
          { name: "JUnit · Testcontainers", note: "Integrationstests" },
          { name: "Flyway · jOOQ", note: "Datenbank-Tooling" },
        ],
      },
      {
        title: "Daten & Messaging",
        badge: "infra",
        items: [
          { name: "PostgreSQL", note: "12 → 16" },
          { name: "Redis", note: "Caching und Locking" },
          { name: "Apache Kafka", note: "ereignisgesteuerte Systeme" },
          { name: "OpenSearch", note: "Suche und Observability" },
          { name: "S3 · DynamoDB", note: "AWS-Services" },
        ],
      },
      {
        title: "Plattform & Betrieb",
        badge: "cloud",
        items: [
          { name: "AWS", note: "ECS · Lambda · RDS" },
          { name: "Docker", note: "containerisierte Deployments" },
          { name: "Kubernetes", note: "Helm · Kustomize" },
          { name: "Terraform", note: "Infrastructure as Code" },
          { name: "GitHub Actions", note: "CI/CD-Pipelines" },
          { name: "Grafana · OpenTelemetry", note: "Monitoring und Tracing" },
        ],
      },
    ],
    alsoLabel: "Außerdem",
    methods: [
      "REST",
      "gRPC",
      "OpenAPI",
      "Event-driven",
      "DDD-lite",
      "Hexagonal",
      "CI/CD",
      "SLO / SLI",
      "PR-Reviews",
      "RFCs verfassen",
    ],
  },
  experience: {
    eyebrow: "03 / Erfahrung",
    heading: "Wo ich gearbeitet habe.",
    items: {
      sfc: {
        period: "Apr. 2024 — Okt. 2025",
        location: "München",
        role: "Software Engineer",
        companyNote: "Energietechnik, IoT",
        description:
          "Mitarbeit an der EFOY-Cloud-Plattform als Teil des Data-Engineering-Teams. Entwurf und Implementierung von Kotlin-Microservices und RESTful Services mit Spring Boot; Deployment containerisierter Workloads auf Azure mit Docker.",
      },
      autodeals: {
        period: "Aug. 2023 — Apr. 2024",
        location: "München",
        role: "Software Engineer",
        companyNote: "Automobil-Marktplatz",
        description:
          "Begleitung der Plattform von der Konzeption bis in die Produktion, Steuerung der Software-Prozesse und Mitwirkung an der kontinuierlichen Verbesserung über den gesamten Entwicklungszyklus hinweg.",
      },
      viennalife: {
        period: "Okt. 2022 — Aug. 2023",
        location: "Istanbul",
        role: "Software Engineer",
        companyNote: "Vienna Insurance Group",
        description:
          "Entwicklung und Wartung von Java-Microservices für Enterprise-Versicherungsplattformen in den Bereichen Vertrieb, Policenverwaltung und operative Workflows. Verbesserung der Deployment-Zuverlässigkeit mit Jenkins CI/CD und Kubernetes; Entwicklung von Backoffice-Tools mit Spring Boot und React.",
      },
      pia: {
        period: "März 2022 — Okt. 2022",
        location: "Istanbul",
        role: "Software Engineer",
        companyNote: "People in Action",
        description:
          "Debugging von Java-/Spring-Backend-Services im Defect-Resolution-Team für Vodafone Türkei. Im Vodafone-Albanien-Projekt SQL-basierte Datenmigrationsregeln entwickelt und AWS-Services eingesetzt, um korrekte und konsistente Datenübertragungen sicherzustellen.",
      },
      pyz: {
        period: "Okt. 2021 — Feb. 2022",
        location: "Istanbul",
        role: "Software Developer",
        companyNote: "Designstudio",
        description:
          "Gestaltung und Pflege der Unternehmenswebsite, Unterstützung der Frontend-Entwicklung sowie Mitarbeit an Hardware- und Softwareprozessen für das E-Scooter-System.",
      },
    },
  },
  contact: {
    eyebrow: "04 / Kontakt",
    headingLine1: "Kontakt aufnehmen.",
    headingLine2: "Ich antworte auf jede Nachricht.",
    body: "Ich interessiere mich für Backend- und Plattform-Engineering-Rollen in München, Berlin oder remote innerhalb Europas. Außerdem offen für Open-Source-Zusammenarbeit, persönliche Projekte und langfristige kunden- oder projektbasierte Engineering-Arbeit.",
    linkLabels: {
      email: "E-Mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Lebenslauf",
    },
    form: {
      heading: "Nachricht senden",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "name@firma.de",
      subjectLabel: "Betreff",
      subjects: [
        "Recruiting / Stellenangebot",
        "Vertrags- oder projektbasierte Zusammenarbeit",
        "Langfristige Zusammenarbeit oder Beratung",
        "Open-Source-Zusammenarbeit",
        "Persönliches Projekt",
        "Sonstiges",
      ],
      messageLabel: "Nachricht",
      messagePlaceholder:
        "Beschreiben Sie das Projekt, die Rolle oder die Idee, über die Sie sprechen möchten.",
      privacyNote: "Verschlüsselt übertragen · Kein Tracking",
      submit: "Nachricht senden",
      sent: "Gesendet ✓",
      success: "// Nachricht eingegangen — ich antworte innerhalb von 48 h.",
    },
  },
  footer: {
    copyright: "© 2026 Mert Incesu",
    backToTop: "Nach oben ↑",
  },
};

export default de;
