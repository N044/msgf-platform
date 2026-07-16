import { OrganizationCardGrid } from "@/components/organization/OrganizationCardGrid";
import { OrganizationHierarchy } from "@/components/organization/OrganizationHierarchy";
import { OrganizationPageNav } from "@/components/organization/OrganizationPageNav";
import { OrganizationRelationships } from "@/components/organization/OrganizationRelationships";
import { OrganizationRoleExplorer } from "@/components/organization/OrganizationRoleExplorer";
import {
  OrganizationContact,
  OrganizationResources,
} from "@/components/organization/OrganizationResources";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BackButton } from "@/components/navigation/BackButton";
import { studentsUnionContent } from "@/content/students-union";

export default function StudentsUnionPage() {
  const {
    hero,
    navigation,
    purpose,
    visionMission,
    structure,
    roles,
    ministries,
    relationships,
    responsibilities,
    resources,
    contact,
  } = studentsUnionContent;

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl space-y-6">
            <BackButton href="/student-communities" label="Back to Student Communities" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="text-xl leading-8 text-slate-300">{hero.subtitle}</p>
            <span className="inline-flex rounded-full border border-[#E8C9A8]/50 bg-[#FFF7EC]/10 px-4 py-2 text-sm font-semibold text-[#F6D4AF]">{hero.academicYear}</span>
          </div>
        </Container>
      </section>
      <OrganizationPageNav {...navigation} />

      <Section className="bg-[#F8F4EC]">
        <Container>
          <section id="purpose" aria-labelledby="purpose-title" className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{purpose.eyebrow}</p>
            <h2 id="purpose-title" className="mt-3 text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{purpose.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{purpose.description}</p>
          </section>
          <div className="mt-12">
            <OrganizationCardGrid {...visionMission} columns="two" align="center" compact />
          </div>
        </Container>
      </Section>
      <Section className="bg-white"><Container><OrganizationHierarchy {...structure} /></Container></Section>
      <Section className="bg-[#F8F4EC]"><Container><OrganizationRoleExplorer {...roles} /></Container></Section>
      <Section className="bg-white"><Container><OrganizationCardGrid {...ministries} sectionId="ministries" /></Container></Section>
      <Section className="bg-[#F8F4EC]"><Container><OrganizationRelationships {...relationships} sectionId="relationships" /></Container></Section>
      <Section className="bg-white"><Container><OrganizationCardGrid {...responsibilities} sectionId="responsibilities" /></Container></Section>
      <Section className="bg-[#F8F4EC]"><Container><OrganizationResources {...resources} sectionId="resources" /></Container></Section>
      <Section className="bg-slate-950"><Container><OrganizationContact {...contact} /></Container></Section>
    </main>
  );
}
