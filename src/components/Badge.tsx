import { cn } from "./utils";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "soon";
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  const tones = {
    neutral: "bg-black/[0.04] text-muted",
    accent: "bg-[var(--accent-soft)] text-[var(--accent)]",
    soon: "bg-black/[0.04] text-muted",
  };
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
      tones[tone], className
    )}>
      {children}
    </span>
  );
}
