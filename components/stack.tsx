import Reveal from "./reveal";

const categories = [
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
      { name: "Terraform", note: "nfrastructure as code" },
      { name: "GitHub Actions", note: "CI/CD pipelines" },
      { name: "Grafana · OpenTelemetry", note: "monitoring and tracing" },
    ],
  },
] as const;

const methods = [
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
] as const;

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="eyebrow">02 / Stack</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <Reveal className="max-w-3xl mb-14">
          <h2 className="text-[32px] md:text-[44px] leading-[1.05] tracking-tighter2 font-medium">
            Technologies I work with
          </h2>
          <p className="mt-4 text-muted text-[16px] leading-relaxed">
            A short list, on purpose. I prefer to go deep on a small set than
            collect logos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {categories.map((cat) => (
            <Reveal key={cat.title} className="bg-bg p-7">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="text-[15px] font-medium tracking-tightish">
                  {cat.title}
                </h3>
                <span className="eyebrow">{cat.badge}</span>
              </div>
              <ul className="space-y-3 font-mono text-[13.5px]">
                {cat.items.map(({ name, note }) => (
                  <li key={name} className="flex items-center justify-between">
                    <span>{name}</span>
                    <span className="text-dim">{note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 text-[13px] text-muted">
          <span className="eyebrow mr-2">Also</span>
          {methods.map((m) => (
            <span
              key={m}
              className="px-2.5 py-1 rounded-md border border-line font-mono"
            >
              {m}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
