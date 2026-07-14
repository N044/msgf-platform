import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <Section id="hero" className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="space-y-6">
            <Badge className="border-slate-700 bg-slate-900 text-slate-200">
              Student Governance Platform
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A clear view of how student governance works at Mikroskil.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                A visual-first overview of the structure, roles, and journey behind student leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                Explore Governance
              </Button>
              <Button variant="ghost" className="text-slate-200 hover:bg-slate-900">
                View Resources
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Story snapshot</p>
            <div className="mt-6 space-y-4">
              <div className="h-2 w-24 rounded-full bg-slate-700" />
              <div className="h-2 w-40 rounded-full bg-slate-700" />
              <div className="h-2 w-32 rounded-full bg-slate-700" />
              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
                <p className="text-sm text-slate-400">Governance focus</p>
                <p className="mt-2 text-xl font-medium text-white">Foundation, participation, continuity</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
