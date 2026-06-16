import Reveal from "./reveal";
import SectionHeader from "./section-header";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type ExperienceKey = keyof Dictionary["experience"]["items"];
type DotOpacity = "accent" | "muted/60" | "muted/40";

interface ExperienceBase {
  key: ExperienceKey;
  company: string;
  tags?: readonly string[];
  dotOpacity: DotOpacity;
}

const items: ExperienceBase[] = [
  {
    key: "sfc",
    company: "SFC Energy AG",
    tags: ["Kotlin", "Spring Boot", "Azure", "Docker", "Gradle"],
    dotOpacity: "accent",
  },
  {
    key: "autodeals",
    company: "auto.deals",
    dotOpacity: "muted/60",
  },
  {
    key: "viennalife",
    company: "Viennalife",
    tags: ["Java", "Spring Boot", "React", "Kubernetes", "Jenkins", "Oracle"],
    dotOpacity: "muted/60",
  },
  {
    key: "pia",
    company: "PiA",
    tags: ["Java", "Spring", "PostgreSQL", "MongoDB", "Camunda", "AWS"],
    dotOpacity: "muted/40",
  },
  {
    key: "pyz",
    company: "PYZ Realise Design Studio",
    dotOpacity: "muted/40",
  },
];

function DotIndicator({ opacity }: { opacity: DotOpacity }) {
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

export default function Experience({
  dict,
}: {
  dict: Dictionary["experience"];
}) {
  return (
    <section id="experience" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <SectionHeader eyebrow={dict.eyebrow} />

        <Reveal className="max-w-3xl mb-16">
          <h2 className="text-[32px] md:text-[44px] leading-[1.05] tracking-tighter2 font-medium">
            {dict.heading}
          </h2>
        </Reveal>

        <ol className="relative">
          <span
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block"
            aria-hidden="true"
          />

          {items.map((item, i) => {
            const t = dict.items[item.key];

            return (
              <Reveal
                key={item.company}
                as="li"
                className={`relative pl-0 sm:pl-10 py-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10${
                  i < items.length - 1 ? " border-b border-line" : ""
                }`}
              >
                <DotIndicator opacity={item.dotOpacity} />

                <div className="sm:col-span-3">
                  <div className="eyebrow">{t.period}</div>
                  <div className="mt-1 text-[13px] text-dim font-mono">
                    {t.location}
                  </div>
                </div>

                <div className="sm:col-span-9">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="text-[19px] font-medium tracking-tightish">
                      {t.role}
                    </h3>
                    <span className="text-muted">·</span>
                    <span className="text-[15px] text-muted">
                      {item.company}
                      {t.companyNote && (
                        <span className="text-dim font-mono text-[12px]">
                          {" "}
                          ({t.companyNote})
                        </span>
                      )}
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-relaxed text-muted max-w-[62ch]">
                    {t.description}
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
            );
          })}
        </ol>
      </div>
    </section>
  );
}
