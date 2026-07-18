import type { GovernanceJourneyStage } from "@/content/governance-journey";

interface NextPhaseProps { stage?: GovernanceJourneyStage; preparation: string[]; }

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${date}T00:00:00`),
  );
}

export function NextPhase({ stage, preparation }: NextPhaseProps) {
  return <section className="overflow-hidden rounded-2xl bg-[#0A1737] text-white shadow-[0_24px_70px_-52px_rgba(10,23,55,0.85)]"><div className="h-1 bg-[#E78938]" /><div className="p-6 sm:p-8"><div className="flex items-center gap-3"><span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#F6D4AF]">→</span><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F6D4AF]">Next phase</p></div><div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><h4 className="text-2xl font-semibold">{stage?.title ?? "Cycle complete"}</h4>{stage ? <p className="mt-2 text-slate-200">Starts {formatDate(stage.dateRange.start)}</p> : <p className="mt-2 text-slate-200">Prepare for the next governance cycle.</p>}</div><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">Preparation checklist</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{preparation.map((item) => <li key={item} className="flex gap-3 text-slate-100"><span aria-hidden="true" className="text-[#F6D4AF]">✓</span><span>{item}</span></li>)}</ul></div></div></div></section>;
}
