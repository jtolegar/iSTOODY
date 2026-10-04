import { cn } from "./utils";

type Kind = "text" | "table" | "scheme" | "diagram";

interface Props {
  kind?: Kind;
  label?: string;
  accent?: string;
  className?: string;
}

export function PagePlaceholder({ kind = "text", label, accent = "var(--accent)", className }: Props) {
  return (
    <div className={cn("relative aspect-[3/4] w-full overflow-hidden rounded-[10px] border border-line bg-surface", className)}
      role="img" aria-label={label ? `Muestra de material: ${label}` : "Muestra de material"}>
      <span className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: accent, opacity: 0.5 }} />
      <div className="flex h-full flex-col gap-3 p-5">
        <div className="space-y-1.5">
          <div className="h-2.5 w-2/5 rounded-full" style={{ backgroundColor: accent, opacity: 0.35 }} />
          <div className="h-2 w-3/5 rounded-full bg-black/10" />
        </div>
        {kind === "text" && <TextBody accent={accent} />}
        {kind === "table" && <TableBody accent={accent} />}
        {kind === "scheme" && <SchemeBody accent={accent} />}
        {kind === "diagram" && <DiagramBody accent={accent} />}
      </div>
      {label && (
        <span className="absolute bottom-3 left-5 text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
          {label}
        </span>
      )}
    </div>
  );
}

function TextBody({ accent }: { accent: string }) {
  return (
    <div className="mt-1 flex-1 space-y-2">
      {["100%", "96%", "88%", "94%", "70%"].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-black/[0.07]" style={{ width: w }} />
      ))}
      <div className="my-2 rounded-md border-l-2 p-2" style={{ borderColor: accent, backgroundColor: "rgba(0,0,0,0.02)" }}>
        <div className="h-1.5 w-4/5 rounded-full bg-black/[0.08]" />
        <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-black/[0.08]" />
      </div>
      {["92%", "80%"].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-black/[0.07]" style={{ width: w }} />
      ))}
    </div>
  );
}
function TableBody({ accent }: { accent: string }) {
  return (
    <div className="mt-1 flex-1">
      <div className="overflow-hidden rounded-md border border-line">
        <div className="grid grid-cols-3" style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-b border-line p-2">
              <div className="h-1.5 rounded-full" style={{ backgroundColor: accent, opacity: 0.4 }} />
            </div>
          ))}
        </div>
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="grid grid-cols-3">
            {[0, 1, 2].map((c) => (
              <div key={c} className="border-b border-line p-2">
                <div className="h-1.5 rounded-full bg-black/[0.07]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
function SchemeBody({ accent }: { accent: string }) {
  return (
    <div className="mt-2 flex flex-1 flex-col items-center justify-center gap-3">
      <Node accent={accent} w="w-24" /><Connector accent={accent} />
      <div className="flex gap-3"><Node accent={accent} w="w-16" /><Node accent={accent} w="w-16" /></div>
      <Connector accent={accent} /><Node accent={accent} w="w-20" />
    </div>
  );
}
function DiagramBody({ accent }: { accent: string }) {
  return (
    <div className="mt-2 flex flex-1 items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <circle cx="60" cy="60" r="40" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="2" />
        <circle cx="60" cy="60" r="26" fill={accent} fillOpacity="0.08" />
        <circle cx="60" cy="60" r="6" fill={accent} fillOpacity="0.4" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = (deg * Math.PI) / 180;
          const x = 60 + 40 * Math.cos(r);
          const y = 60 + 40 * Math.sin(r);
          return <circle key={deg} cx={x} cy={y} r="4" fill={accent} fillOpacity="0.5" />;
        })}
      </svg>
    </div>
  );
}
function Node({ accent, w }: { accent: string; w: string }) {
  return (
    <div className={cn("rounded-md border px-2 py-1.5", w)} style={{ borderColor: accent, backgroundColor: "rgba(0,0,0,0.015)" }}>
      <div className="h-1.5 rounded-full bg-black/10" />
    </div>
  );
}
function Connector({ accent }: { accent: string }) {
  return <div className="h-3 w-px" style={{ backgroundColor: accent, opacity: 0.4 }} />;
}
