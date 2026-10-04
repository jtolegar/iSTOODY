import { Reveal } from "./Reveal";
import { cn } from "./utils";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, intro, align = "left", className }: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
