import Reveal from "./reveal";

interface ExperienceItem {
  period: string;
  location: string;
  role: string;
  company: string;
  companyNote?: string;
  description: string;
  tags?: readonly string[];
  dotOpacity: "accent" | "muted/60" | "muted/40";
}

const items: ExperienceItem[] = [
  {
    period: "2024 — Present",
    location: "Munich · full-time",
    role: "Senior Backend Engineer",
    company: "Helix Payments",
    companyNote: "fintech, Series C",
    description:
      "Tech lead on the ledger & reconciliation domain. Migrated three legacy services to an event-sourced model; reduced reconciliation lag from 12h to under 6 minutes. Drive RFC reviews and on-call culture across the payments tribe.",
    tags: ["Kotlin", "Spring Boot 3", "Kafka", "Postgres", "AWS"],
    dotOpacity: "accent",
  },
  {
    period: "2022 — 2024",
    location: "Berlin · remote",
    role: "Backend Engineer",
    company: "Northwind Logistics",
    companyNote: "supply-chain SaaS",
    description:
      "Built the internal feature-flag platform and the warehouse-events pipeline. Owned the Kotlin SDK and contributed to the Node one. Wrote the team's testing-with-Testcontainers playbook.",
    tags: ["Java 17", "Kotlin", "Redis", "gRPC", "Kubernetes"],
    dotOpacity: "muted/60",
  },
  {
    period: "2021 — 2022",
    location: "Istanbul · hybrid",
    role: "Software Engineer",
    company: "Atlas Mobility",
    companyNote: "mobility startup",
    description:
      "First backend hire. Took the booking service from a Rails monolith to a Kotlin / Spring Boot service behind a strangler facade. Set up CI, blue-green deploys, and structured logging.",
    tags: ["Kotlin", "Spring Boot 2", "Postgres", "Docker"],
    dotOpacity: "muted/60",
  },
  {
    period: "2017 — 2021",
    location: "Istanbul Tech. Uni.",
    role: "B.Sc. Computer Engineering",
    company: "Istanbul Technical University",
    description:
      "Thesis on consistency trade-offs in distributed key-value stores. Teaching assistant for the operating systems course in my final year.",
    dotOpacity: "muted/40",
  },
];

function DotIndicator({ opacity }: { opacity: ExperienceItem["dotOpacity"] }) {
  const innerClass =
    opacity === "accent"
      ? "bg-accent"
      : opacity === "muted/60"
      ? "bg-muted/60"
      : "bg-muted/40";

  return (
    <span
      className="hidden sm:block absolute left-0 top-8 w-[15px] h-[15px] rounded-full border border-line2 bg-bg"
      aria-hidden="true"
    >
      <span className={`absolute inset-[3px] rounded-full ${innerClass}`} />
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="eyebrow">04 / Experience</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <Reveal className="max-w-3xl mb-16">
          <h2 className="text-[32px] md:text-[44px] leading-[1.05] tracking-tighter2 font-medium">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <ol className="relative">
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block"
            aria-hidden="true"
          />

          {items.map((item, i) => (
            <Reveal
              key={item.company}
              as="li"
              className={`relative pl-0 sm:pl-10 py-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10${
                i < items.length - 1 ? " border-b border-line" : ""
              }`}
            >
              <DotIndicator opacity={item.dotOpacity} />

              <div className="sm:col-span-3">
                <div className="eyebrow">{item.period}</div>
                <div className="mt-1 text-[13px] text-dim font-mono">
                  {item.location}
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-[19px] font-medium tracking-tightish">
                    {item.role}
                  </h3>
                  <span className="text-muted">·</span>
                  <span className="text-[15px] text-muted">
                    {item.company}
                    {item.companyNote && (
                      <span className="text-dim font-mono text-[12px]">
                        {" "}
                        ({item.companyNote})
                      </span>
                    )}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-muted max-w-[62ch]">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded border border-line text-[11.5px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
