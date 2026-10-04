import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Props {
  eyebrow: string; planName: string; price: string;
  features: string[]; cta: string; note: string; href: string;
}
export function ProductPricing({ eyebrow, planName, price, features, cta, note, href }: Props) {
  return (
    <section id="precio" className="border-y border-line bg-surface">
      <div className="container-x py-20 sm:py-24">
        <SectionHeader eyebrow={eyebrow} title="Un pago, todo el material" align="center" />
        <Reveal className="mx-auto mt-12 max-w-md">
          <div className="overflow-hidden rounded-[18px] border border-line bg-paper shadow-card">
            <div className="px-8 pt-8 text-center" style={{ backgroundColor: "var(--accent-soft)" }}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">{planName}</h3>
              <p className="mt-4 font-serif text-5xl font-medium tracking-[-0.02em] text-ink">{price}</p>
              <p className="mb-8 mt-2 text-sm text-muted">{note}</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-ink">
                    <svg className="h-4 w-4 flex-none" viewBox="0 0 16 16" fill="none" style={{ color: "var(--accent)" }} aria-hidden>
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>{f}
                  </li>
                ))}
              </ul>
              <a href={href} target="_blank" rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-base font-medium text-white shadow-card transition-all hover:brightness-110"
                style={{ backgroundColor: "var(--accent)" }}>{cta}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
