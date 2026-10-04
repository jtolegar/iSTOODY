import { differentiation as d } from "@/data/home";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Differentiation() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x py-20 sm:py-24">
        <SectionHeader eyebrow={d.eyebrow} title={d.title} intro={d.intro} />
        <ol className="mt-12 grid gap-x-12 gap-y-1 sm:grid-cols-2">
          {d.pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 4) * 50}>
              <div className="group flex gap-5 border-t border-line py-5">
                <span className="mt-1 select-none font-serif text-sm tabular-nums text-[var(--accent)]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
