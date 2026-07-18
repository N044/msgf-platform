import { Container } from "@/components/layout/Container";
import { DashboardButton } from "@/components/navigation/DashboardButton";
import { Navbar } from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 text-white">
      <Navbar className="absolute inset-x-0 top-0 z-50 !border-slate-800 !bg-slate-950/80 text-white">
        <DashboardButton />
      </Navbar>
      <Container className="flex min-h-screen items-center py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300">
              Student Governance Platform (SGP)
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Explore Student Governance.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                The official platform of Universitas Mikroskil for exploring organizational structures, policies, and student communities.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button  className="!bg-white !text-slate-950 hover:!bg-slate-100 hover:!text-slate-950">
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
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">STUDENT ECOSYSTEM</p>
                <p className="mt-3 text-xl font-medium text-white">Lead • Learn • Connect</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
