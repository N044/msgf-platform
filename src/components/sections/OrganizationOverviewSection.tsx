import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

const overviewItems = [
  { title: "Purpose", text: "Clarify the role of student governance within the institution." },
  { title: "Structure", text: "Outline responsibilities and decision-making pathways." },
  { title: "Momentum", text: "Highlight continuity, engagement, and shared progress." },
];

export function OrganizationOverviewSection() {
  return (
    <Section id="organization-overview">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Organization Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A high-level map of how the platform is organized.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {overviewItems.map((item) => (
              <Card key={item.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
