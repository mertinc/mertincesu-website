import Reveal from "./reveal";

const facts = [
  { label: "Based in", value: "Munich, DE" },
  { label: "Languages", value: "EN · DE · TR" },
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
            <div
              className="aspect-[4/5] rounded-lg border border-line stripe-placeholder flex items-center justify-center"
              aria-label="Portrait photo placeholder"
            >
              <div className="text-center font-mono text-[11px] text-dim leading-relaxed">
                <div>[ portrait.jpg ]</div>
                <div className="mt-1">800 × 1000</div>
              </div>
            </div>
            <div className="mt-4 font-mono text-[11px] text-dim flex items-center justify-between">
              <span>// drop your photo here</span>
              <span>4:5</span>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal className="md:col-span-8">
            <h2 className="text-[32px] md:text-[40px] leading-[1.05] tracking-tighter2 font-medium max-w-[20ch]">
              I build the boring parts well — so the interesting parts can stay
              interesting.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted max-w-[62ch]">
              <p>
                I&apos;ve spent the last three years on payments, identity and
                internal platform teams, owning services that handle millions of
                requests a day. Most of my work lives in Kotlin and Spring Boot,
                with PostgreSQL underneath and Kafka in front.
              </p>
              <p>
                I&apos;m at my best when a system needs to be made{" "}
                <span className="text-fg">predictable</span> — defining
                contracts, tightening boundaries, paying down the kind of debt
                that wakes people up at 3am. I write down decisions, draw the
                boxes before the code, and prefer four good integration tests to
                forty flaky unit tests.
              </p>
              <p>
                Outside the IDE you&apos;ll find me climbing in the Alps,
                reading distributed-systems papers, or losing at chess to a
                teenager on lichess.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 max-w-[640px]">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1.5 text-[14px]">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1.5 text-[14px] flex items-center gap-1.5">
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
