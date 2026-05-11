import Reveal from "./reveal";

interface Project {
  index: string;
  year: string;
  badge: string;
  placeholderLabel: string;
  placeholderSub: string;
  title: string;
  description: string;
  tags: readonly string[];
  cta: string;
}

const projects: Project[] = [
  {
    index: "01",
    year: "2025",
    badge: "Production",
    placeholderLabel: "[ architecture-diagram.svg ]",
    placeholderSub: "payments topology",
    title: "Ledger & reconciliation service",
    description:
      "Event-sourced double-entry ledger handling ~4M transactions/day. Idempotent ingestion via Kafka, append-only Postgres ledger, nightly reconciliation against external PSPs.",
    tags: ["Kotlin", "Spring Boot", "Kafka", "Postgres", "AWS ECS"],
    cta: "Case study",
  },
  {
    index: "02",
    year: "2024",
    badge: "Open source",
    placeholderLabel: "[ cli-screenshot.png ]",
    placeholderSub: "spring-otel-bootstrap",
    title: "spring-otel-bootstrap",
    description:
      "Opinionated Spring Boot starter that wires OpenTelemetry traces, metrics and structured JSON logs in a single dependency. 700+ stars, adopted by three teams at my day job.",
    tags: ["Kotlin", "Spring Boot 3", "OpenTelemetry", "Gradle"],
    cta: "View on GitHub",
  },
  {
    index: "03",
    year: "2024",
    badge: "Internal",
    placeholderLabel: "[ dashboard.png ]",
    placeholderSub: "feature-flag console",
    title: "Feature-flag platform",
    description:
      "Low-latency flag evaluation service (p99 < 4ms) backed by Redis and an audit log in Postgres. Designed the SDK contract, implemented the Kotlin and Node clients.",
    tags: ["Kotlin", "Redis", "gRPC", "Postgres"],
    cta: "Read write-up",
  },
  {
    index: "04",
    year: "2023",
    badge: "Side project",
    placeholderLabel: "[ schema.svg ]",
    placeholderSub: "api-gateway-lite",
    title: "api-gateway-lite",
    description:
      "A 1.5k-line API gateway in Ktor: auth, rate-limit, request shaping and OpenAPI-driven routing. Built it to understand what the boxes in our infra diagrams actually do.",
    tags: ["Kotlin", "Ktor", "Coroutines", "Docker"],
    cta: "Source & notes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="eyebrow">03 / Selected projects</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="text-[32px] md:text-[44px] leading-[1.05] tracking-tighter2 font-medium max-w-[16ch]">
            A few things I&apos;ve shipped.
          </h2>
          <p className="text-muted text-[15px] max-w-sm">
            Trimmed to the four that taught me the most. Happy to walk through
            any of them.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Reveal
              key={project.index}
              as="li"
              className="card group rounded-xl border border-line bg-bg p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] text-dim">
                  {project.index} — {project.year}
                </span>
                <span className="px-2 py-0.5 rounded-md border border-line text-[11px] font-mono text-muted">
                  {project.badge}
                </span>
              </div>

              <div
                className="aspect-[16/9] rounded-md stripe-placeholder border border-line mb-6 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="font-mono text-[11px] text-dim text-center">
                  <div>{project.placeholderLabel}</div>
                  <div className="mt-1">{project.placeholderSub}</div>
                </div>
              </div>

              <h3 className="text-[20px] tracking-tightish font-medium">
                {project.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded border border-line text-[11.5px] font-mono text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-fg group-hover:text-accent transition-colors"
              >
                {project.cta} <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
