import { GovernanceJourneyCycles } from "@/components/governance/GovernanceJourneyCycles";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BackButton } from "@/components/navigation/BackButton";
import { governanceJourneyContent } from "@/content/governance-journey";

export default function GovernanceJourneyPage() {
  const { hero, cycles, summary, tabs } = governanceJourneyContent;

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl space-y-6">
            <BackButton href="/" label="Back to SGP" ariaLabel="Back to homepage" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      <Section className="overflow-hidden bg-[#F8F4EC]">
        <Container>
          <GovernanceJourneyCycles cycles={cycles} labels={summary} tabLabel={tabs.label} tabPrompt={tabs.prompt}/>
        </Container>
      </Section>
    </main>
  );
}
