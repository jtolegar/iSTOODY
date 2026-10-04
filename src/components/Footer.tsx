import Link from "next/link";
import { site, social, footerLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-5 flex gap-4">
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-ink">{s.label}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Asignaturas" links={footerLinks.asignaturas} />
          <FooterCol title="Recursos" links={footerLinks.recursos} />
          <FooterCol title="Legal" links={footerLinks.legal} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p>Materiales educativos para 2º de Bachillerato y PAU.</p>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-ink/75 transition-colors hover:text-ink">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
