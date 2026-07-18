import {
  getGovernanceJourneyStageStatus,
  type GovernanceJourneyStage,
} from "@/content/governance-journey";

interface PhaseNavigatorProps {
  stages: GovernanceJourneyStage[];
  selectedStageId: string;
  onStageChange: (stageId: string) => void;
  cycleLabel: string;
  cycleDescription: string;
  restartLabel: string;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(`${date}T00:00:00`),
  );
}

export function PhaseNavigator({ stages, selectedStageId, onStageChange, cycleLabel, cycleDescription, restartLabel }: PhaseNavigatorProps) {
  return (
    <section aria-label="Governance playbook phases">
      <div className="relative mx-auto max-w-5xl">
        <div aria-hidden="true" className="absolute bottom-10 left-5 top-10 w-px bg-[#D8C4AB] md:left-1/2 md:-translate-x-1/2" />
        <ol className="space-y-12 sm:space-y-16">
          {stages.map((stage, index) => {
            const isLeft = index % 2 === 0;
            const isSelected = stage.id === selectedStageId;
            const milestone = String(index + 1).padStart(2, "0");
            const status = getGovernanceJourneyStageStatus(stage);
            const statusLabel = status === "in-progress" ? "In progress" : status === "completed" ? "Completed" : "Upcoming";
            const statusClasses = {
              completed: "border-emerald-200 bg-emerald-50 text-emerald-800",
              "in-progress": "border-amber-200 bg-amber-50 text-amber-800",
              upcoming: "border-slate-200 bg-slate-50 text-slate-700",
            }[status];

            return (
              <li key={stage.id} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 md:grid-cols-[1fr_5rem_1fr] md:gap-0">
                <div aria-hidden="true" className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-[0.68rem] font-bold tracking-[0.14em] shadow-[0_10px_30px_-20px_rgba(10,23,55,0.7)] md:col-start-2 md:justify-self-center ${isSelected ? "border-[#0A1737] bg-[#0A1737] text-white" : "border-[#CDB394] bg-[#F8F4EC] text-[#0A1737]"}`}>{milestone}</div>
                <button type="button" onClick={() => onStageChange(stage.id)} aria-pressed={isSelected} className={`col-start-2 row-start-1 cursor-pointer rounded-2xl border bg-white p-6 text-left shadow-[0_24px_70px_-52px_rgba(10,23,55,0.6)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1737] sm:p-7 md:row-auto md:max-w-md ${isLeft ? "md:col-start-1 md:mr-10 md:justify-self-end" : "md:col-start-3 md:ml-10 md:justify-self-start"} ${isSelected ? "border-[#0A1737] ring-2 ring-[#0A1737]/15" : "border-[#E6D7C5] hover:border-[#B66B2A]"}`}>
                  <span className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">Phase {milestone}</span><span className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${statusClasses}`}>{statusLabel}</span></span>
                  <span className="mt-3 block text-2xl font-semibold tracking-tight text-[#0A1737]">{stage.title}</span>
                  <span className="mt-2 block text-sm font-medium text-slate-700">{formatDate(stage.dateRange.start)} – {formatDate(stage.dateRange.end)}</span>
                  <span className="mt-5 block border-t border-[#F0E6D9] pt-5"><span className="sr-only">Phase focus: </span><span className="flex flex-wrap gap-2">{stage.activities.map((activity) => <span key={activity} className="rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-semibold text-[#0A1737]">{activity}</span>)}</span></span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="relative mt-8 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 md:grid-cols-[1fr_5rem_1fr] md:gap-0">
          <div aria-hidden="true" className="col-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[#CDB394] bg-[#F8F4EC] text-lg font-semibold text-[#0A1737] md:col-start-2 md:justify-self-center">↻</div>
          <div className="col-start-2 row-start-1 md:col-start-3 md:pl-10"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B66B2A]">{cycleLabel}</p><p className="mt-1 font-semibold text-[#0A1737]">{restartLabel}</p><p className="mt-1 text-sm leading-6 text-slate-700">{cycleDescription}</p></div>
        </div>
      </div>
    </section>
  );
}
