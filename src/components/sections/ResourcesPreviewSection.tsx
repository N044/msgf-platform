import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const resources = [
  { title: "Guidance Notes", meta: "Reference material" },
  { title: "Governance Briefs", meta: "Perspective and context" },
  { title: "Implementation Kit", meta: "Practical next steps" },
];

export function ResourcesPreviewSection() {
  return (
    <Section id="resources-preview" className="bg-slate-50">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Resources Preview
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Helpful entry points for students, leaders, and advisors.
              </h2>
            </div>
            <Button variant="secondary">Browse Resources</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{resource.meta}</p>
                <h3 className="text-xl font-semibold text-slate-900">{resource.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
