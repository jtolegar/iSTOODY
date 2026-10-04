"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/data/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "./utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={cn(
      "sticky top-0 z-50 border-b transition-colors duration-300",
      scrolled ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper"
    )}>
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/#asignaturas" size="md">Ver materiales</Button>
        </div>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span className="relative block h-4 w-5">
            <span className={cn("absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300", open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-ink transition-opacity duration-200", open && "opacity-0")} />
            <span className={cn("absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300", open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")} />
          </span>
        </button>
      </div>
      <div className={cn("overflow-hidden border-t border-line bg-paper md:hidden", open ? "max-h-[80vh]" : "max-h-0 border-t-0")}
        style={{ transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Móvil">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-ink hover:bg-black/[0.03]">
              {item.label}
            </Link>
          ))}
          <div className="mt-2">
            <Button href="/#asignaturas" size="lg" className="w-full">Ver materiales</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
