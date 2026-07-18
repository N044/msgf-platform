import { Container } from "@/components/layout/Container";
import { BackButton } from "@/components/navigation/BackButton";

interface ResourcesHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function ResourcesHero({ eyebrow, title, description }: ResourcesHeroProps) {
  return (
    <section className="bg-slate-950 text-white">
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="max-w-4xl space-y-6">
          <BackButton href="/" label="Back to SGP" ariaLabel="Back to homepage" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>
        </div>
      </Container>
    </section>
  );
}
