import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

const ecosystemItems = [
  { title: "Students", description: "Voices, participation, and shared ownership." },
  { title: "Student Leaders", description: "Leadership, coordination, and representation." },
  { title: "Advisors", description: "Guidance, alignment, and institutional support." },
];

export function GovernanceEcosystemSection() {
  return (
    <Section id="governance-ecosystem">
      <Container>
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Governance Ecosystem
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A network of roles that keeps the system visible and connected.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ecosystemItems.map((item) => (
              <Card key={item.title} className="min-h-40">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
