import { Reveal } from "./Reveal";

/*
  Banner dentro de la página de producto: ofrece la descarga
  gratuita del tema de muestra como prueba antes de comprar.
*/
interface Props { sampleFile: string; temaLabel: string; }
export function SampleBanner({ sampleFile, temaLabel }: Props) {
  return (
    <section className="container-x py-4">
      <Reveal>
        <div className="flex flex-col items-start gap-4 rounded-card border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-soft)" }}>
          <div>
            <p className="text-sm font-semibold text-ink">¿Quieres verlo antes de comprar?</p>
            <p className="mt-1 text-sm text-muted">Descarga gratis {temaLabel}, tal cual lo recibirás.</p>
          </div>
          <a href={sampleFile} download
            className="inline-flex flex-none items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all hover:brightness-105"
            style={{ boxShadow: "0 1px 2px rgba(16,24,40,0.06)" }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden style={{ color: "var(--accent)" }}>
              <path d="M7.5 2v8m0 0L4 6.5M7.5 10L11 6.5M2.5 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Descargar muestra gratis
          </a>
        </div>
      </Reveal>
    </section>
  );
}
