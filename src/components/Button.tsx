import Link from "next/link";
import { cn } from "./utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  download?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3.5 text-base",
};
const variants: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-white shadow-card hover:brightness-110 hover:shadow-card-hover active:brightness-95",
  secondary: "bg-surface text-ink border border-line hover:border-ink/25 hover:bg-paper",
  ghost: "text-ink/80 hover:text-ink hover:bg-black/[0.03]",
};

export function Button({
  href, children, variant = "primary", size = "md",
  external = false, className, ariaLabel, download = false,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const isExternal = external || href.startsWith("http") || href.startsWith("mailto");
  if (download) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} download>
        {children}
      </a>
    );
  }
  if (isExternal) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={classes} aria-label={ariaLabel}>{children}</Link>;
}
