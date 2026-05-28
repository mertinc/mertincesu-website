import Image from "next/image";
import Reveal from "./reveal";

const facts = [
  { label: "Based in", value: "Munich, DE" },
  { label: "Languages", value: "English · German · Turkish" },
  { label: "Role", value: "Backend / Platform" },
] as const;

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="eyebrow">01 / About</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Photo placeholder */}
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] rounded-lg border border-line overflow-hidden">
              <Image
                src="/portrait.jpg"
                alt="Mert Incesu"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal className="md:col-span-8">
            <h2 className="text-[32px] md:text-[40px] leading-[1.05] tracking-tighter2 font-medium max-w-[20ch]">
              I build the essential parts carefully, so the complex parts work seamlessly.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted max-w-[62ch]">
              <p>
                I&apos;ve spent the last three years on payments, identity and
                internal platform teams, owning services that handle millions of
                requests a day. Most of my work lives in Kotlin and Spring Boot,
                with PostgreSQL underneath and Kafka in front.
              </p>
              <p>
                I perform best in environments where systems must remain reliable, maintainable, and operationally{" "}
                <span className="text-fg">predictable</span>. My focus is on defining clear service boundaries,
                 establishing stable contracts, and reducing technical debt before it becomes operational risk. 
                  I value thoughtful architecture, clear documentation, and pragmatic engineering decisions that improve long-term system stability.
              </p>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1.5 text-[14px] whitespace-nowrap">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1.5 text-[14px] flex items-center gap-1.5 whitespace-nowrap">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Open to roles
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
