"use client";
import { useCallback, useEffect, useState } from "react";
import { PagePlaceholder } from "./PagePlaceholder";
import { Reveal } from "./Reveal";
import { cn } from "./utils";

export interface GalleryItem { id: string; label: string; kind: "text" | "table" | "scheme" | "diagram"; }
interface Props { items: GalleryItem[]; accent?: string; }

export function ProductGallery({ items, accent = "var(--accent)" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close, prev, next]);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 60}>
            <button type="button" onClick={() => setOpen(i)}
              className="group block w-full text-left transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Ampliar: ${item.label}`}>
              <div className="overflow-hidden rounded-card shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
                <PagePlaceholder kind={item.kind} accent={accent} />
              </div>
              <span className="mt-2.5 flex items-center gap-1.5 text-sm text-muted">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path d="M8 2h3v3M5 11H2V8M11 2l-4 4M2 11l4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item.label}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm animate-fade-up"
          role="dialog" aria-modal="true" aria-label={items[open].label} onClick={close}>
          <button type="button" onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
          <NavButton side="left" onClick={(e) => { e.stopPropagation(); prev(); }} />
          <NavButton side="right" onClick={(e) => { e.stopPropagation(); next(); }} />
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-card bg-surface p-2 shadow-lift">
              <PagePlaceholder kind={items[open].kind} accent={accent} className="aspect-[3/4]" />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">{items[open].label} · {open + 1} / {items.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
function NavButton({ side, onClick }: { side: "left" | "right"; onClick: (e: React.MouseEvent) => void; }) {
  return (
    <button type="button" onClick={onClick} aria-label={side === "left" ? "Anterior" : "Siguiente"}
      className={cn("absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex", side === "left" ? "left-4" : "right-4")}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d={side === "left" ? "M11 4l-5 5 5 5" : "M7 4l5 5-5 5"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
