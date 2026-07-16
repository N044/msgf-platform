import { CommunityOverview } from "@/components/community/CommunityOverview";
import { HowToJoin } from "@/components/community/HowToJoin";
import { OrganizationExplorer } from "@/components/community/OrganizationExplorer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BackButton } from "@/components/navigation/BackButton";
import { studentCommunitiesContent } from "@/content/student-communities";

export default function StudentCommunitiesPage() {
  const { hero, overview, explorer, join, cta } = studentCommunitiesContent;

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl space-y-6">
            <BackButton href="/" label="Back to SGP" ariaLabel="Back to homepage" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{hero.description}</p>
          </div>
        </Container>
      </section>

      <Section className="bg-[#F8F4EC]"><Container><CommunityOverview {...overview} /></Container></Section>
      <Section className="bg-white"><Container><OrganizationExplorer {...explorer} /></Container></Section>
      <Section className="bg-[#F8F4EC]"><Container><HowToJoin {...join} /></Container></Section>
      <Section className="bg-slate-950 text-center text-white"><Container><div className="mx-auto max-w-2xl space-y-5"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{cta.title}</h2><p className="text-lg leading-8 text-slate-300">{cta.description}</p><a href="#organization-explorer" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A1737] transition-colors hover:bg-slate-100">{cta.actionLabel}</a></div></Container></Section>
    </main>
  );
}
