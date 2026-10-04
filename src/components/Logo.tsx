import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "./utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-lg font-semibold tracking-[-0.02em] text-ink", className)}
      aria-label={`${site.name} · inicio`}>
      <span className="lowercase">i</span>
      <span className="uppercase">STOODY</span>
      <span className="align-top text-[var(--accent)]">.</span>
    </Link>
  );
}
