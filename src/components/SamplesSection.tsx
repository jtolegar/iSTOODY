import { samples } from "@/data/samples";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

/*
  SamplesSection
  ------------------------------------------------------------
  Descargas de muestra gratuitas, una por asignatura. Cada
  tarjeta enlaza al PDF real en /public/muestras e indica de
  qué producto procede. Para añadir/cambiar: edita data/samples.ts
*/
export function SamplesSection() {
  return (
    <section id="muestras" className="container-x py-20 sm:py-24">
      <SectionHeader
        eyebrow="Gratis"
        title="Descarga una muestra real de cada asignatura"
        intro="Un tema completo de cada producto, en PDF y sin registro. Así ves exactamente cómo es el material antes de comprar."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {samples.map((s, i) => (
          <Reveal key={s.subject} delay={(i % 2) * 70}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
              style={{ ["--s-accent" as string]: s.accentVar }}
            >
              <span
                className="absolute left-0 top-6 h-8 w-1 rounded-r-full"
                style={{ backgroundColor: s.accentVar, opacity: 0.7 }}
                aria-hidden
              />
              <div className="pl-3">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: s.accentVar }}
                >
                  {s.subject}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-ink">
                  {s.temaLabel}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  Muestra de <span className="text-ink/80">{s.fromProduct}</span>
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pl-3 pt-4">
                <span className="text-xs text-muted">PDF · descarga directa</span>
                <a
                  href={s.file}
                  download
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: s.accentVar }}
                  aria-label={`Descargar muestra gratis de ${s.subject}`}
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                    <path d="M7.5 2v8m0 0L4 6.5M7.5 10L11 6.5M2.5 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Descargar gratis
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
