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
    period: "Apr 2024 — Oct 2025",
    location: "Munich",
    role: "Software Engineer",
    company: "SFC Energy AG",
    companyNote: "energy tech, IoT",
    description:
      "Contributed to the EFOY Cloud platform as part of the data engineering team. Designed and implemented Kotlin microservices and RESTful services with Spring Boot; deployed containerized workloads on Azure via Docker.",
    tags: ["Kotlin", "Spring Boot", "Azure", "Docker", "Gradle"],
    dotOpacity: "accent",
  },
  {
    period: "Aug 2023 — Apr 2024",
    location: "Munich",
    role: "Software Engineer",
    company: "auto.deals",
    companyNote: "automotive marketplace",
    description:
      "Supported the platform from inception to production, managing software processes and contributing to continuous improvement across the full development lifecycle.",
    dotOpacity: "muted/60",
  },
  {
    period: "Oct 2022 — Aug 2023",
    location: "Istanbul",
    role: "Software Engineer",
    company: "Viennalife",
    companyNote: "Vienna Insurance Group",
    description:
      "Developed and maintained Java microservices for enterprise insurance platforms covering sales, policy management, and operational workflows. Improved deployment reliability via Jenkins CI/CD and Kubernetes; built back-office tooling with Spring Boot and React.",
    tags: ["Java", "Spring Boot", "React", "Kubernetes", "Jenkins", "Oracle"],
    dotOpacity: "muted/60",
  },
  {
    period: "Mar 2022 — Oct 2022",
    location: "Istanbul",
    role: "Software Engineer",
    company: "PiA",
    companyNote: "People in Action",
    description:
      "Debugged Java/Spring backend services on the Vodafone Turkey defect resolution team. On the Vodafone Albania project, built SQL-based data migration rules and used AWS services to ensure accurate, consistent data transfers.",
    tags: ["Java", "Spring", "PostgreSQL", "MongoDB", "Camunda", "AWS"],
    dotOpacity: "muted/40",
  },
  {
    period: "Oct 2021 — Feb 2022",
    location: "Istanbul",
    role: "Software Developer",
    company: "PYZ Realise Design Studio",
    companyNote: "design studio",
    description:
      "Designed and maintained the company website, supported frontend development, and assisted with hardware and software processes for the electric scooter system.",
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
