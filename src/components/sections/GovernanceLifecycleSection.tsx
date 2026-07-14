import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

const lifecycleSteps = [
  { title: "Foundation", note: "Purpose, values, and scope" },
  { title: "Participation", note: "Engagement, input, and dialogue" },
  { title: "Sustainability", note: "Continuity, reflection, and growth" },
];

export function GovernanceLifecycleSection() {
  return (
    <Section id="governance-lifecycle" className="bg-slate-50">
      <Container>
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Governance Lifecycle
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A simple path from foundation to long-term stewardship.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {lifecycleSteps.map((step) => (
              <Card key={step.title} className="space-y-3">
                <div className="h-2 w-16 rounded-full bg-slate-200" />
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
