import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-slate-950 text-white">
      <Container className="flex min-h-screen items-center py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300">
            Mikroskil Guide Governance Framework (MGGF)
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Guide to student governance at Mikroskil.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Academic Year 2025/2026. A visual-first overview of the structure, roles, and journey behind student leadership.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-white text-slate-950 hover:bg-slate-100">
                Explore
              </Button>
              <a href="#governance-overview" className="text-sm font-medium text-slate-300 transition hover:text-white">
                View overview
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl">
            <div className="space-y-5">
              <div className="h-2 w-24 rounded-full bg-slate-700" />
              <div className="h-2 w-40 rounded-full bg-slate-700" />
              <div className="h-2 w-32 rounded-full bg-slate-700" />
              <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Student Organizations</p>
                <p className="mt-3 text-xl font-medium text-white">Governance, Leadership, and Impact</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
