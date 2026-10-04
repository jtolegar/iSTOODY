import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export interface Feature { title: string; desc: string; }
interface Props { eyebrow: string; title: string; items: Feature[]; }

export function FeatureSection({ eyebrow, title, items }: Props) {
  return (
    <section className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 60}>
            <div className="flex gap-4 border-t border-line py-6">
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-medium"
                style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
