import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function FooterSection() {
  return (
    <Section id="footer" className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Student Governance Platform
            </p>
            <p className="mt-2 text-sm text-slate-600">A visual foundation for future governance storytelling.</p>
          </div>
          <p className="text-sm text-slate-500">Universitas Mikroskil</p>
        </div>
      </Container>
    </Section>
  );
}
