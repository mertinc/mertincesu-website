import Reveal from "./reveal";

export default function SectionHeader({ eyebrow }: { eyebrow: string }) {
  return (
    <Reveal className="flex items-center gap-3 mb-12">
      <span className="eyebrow">{eyebrow}</span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </Reveal>
  );
}
