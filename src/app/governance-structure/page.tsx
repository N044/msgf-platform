import { GovernanceArchitecture } from "@/components/governance/GovernanceArchitecture";
import { GovernanceLegend } from "@/components/governance/GovernanceLegend";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BackButton } from "@/components/navigation/BackButton";
import {
  governanceNodes,
  governanceRelationships,
  governanceStructureContent,
} from "@/content/governance-structure";

export default function GovernanceStructurePage() {
  const { hero, overview, architecture, legend, principles, relatedDocuments } =
    governanceStructureContent;

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

      <Section className="bg-white">
        <Container>
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {overview.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">
                {overview.title}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {overview.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-[#0A1737]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F8F4EC]">
        <Container>
          <div className="space-y-10">
            <div className="mx-auto max-w-3xl space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {architecture.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">
                {architecture.title}
              </h2>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                {architecture.description}
              </p>
            </div>

            <GovernanceLegend items={legend} />

            <GovernanceArchitecture
              layers={architecture.layers}
              nodes={governanceNodes}
              bridges={architecture.bridges}
              relationships={governanceRelationships}
              featuredNodeId={architecture.featuredNodeId}
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {principles.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">
                {principles.title}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {principles.items.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_-52px_rgba(10,23,55,0.55)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-[#0A1737]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                {relatedDocuments.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {relatedDocuments.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {relatedDocuments.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
