import { Button } from "./Button";
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}
export function CTASection({ title, primary, secondary }: Props) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[2.6rem]">{title}</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primary.href} size="lg">{primary.label}</Button>
          {secondary && <Button href={secondary.href} variant="ghost" size="lg">{secondary.label} →</Button>}
        </div>
      </Reveal>
    </section>
  );
}
