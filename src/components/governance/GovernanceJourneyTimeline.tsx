import {
  getGovernanceJourneyStageStatus,
  type GovernanceJourneyStage,
} from "@/content/governance-journey";

interface GovernanceJourneyTimelineProps {
  eyebrow: string;
  title: string;
  stages: GovernanceJourneyStage[];
  cycleLabel: string;
  cycleDescription: string;
}

export function GovernanceJourneyTimeline({
  eyebrow,
  title,
  stages,
  cycleLabel,
  cycleDescription,
}: GovernanceJourneyTimelineProps) {
  return (
    <section aria-labelledby="governance-journey-timeline-title">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
        <h2
          id="governance-journey-timeline-title"
          className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl"
        >
          {title}
        </h2>
      </div>

      <ol className="relative mx-auto mt-16 max-w-5xl space-y-12 sm:space-y-16">
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-5 top-10 w-px bg-[#D8C4AB] md:left-1/2 md:-translate-x-1/2"
        />

        {stages.map((stage, index) => {
          const isLeft = index % 2 === 0;
          const milestone = String(index + 1).padStart(2, "0");
          const isFinalStage = index === stages.length - 1;
          const status = getGovernanceJourneyStageStatus(stage);
          const statusLabel = status === "in-progress" ? "In Progress" : status === "completed" ? "Completed" : "Upcoming";
          const statusClasses = {
            completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
            "in-progress": "border-amber-200 bg-amber-50 text-amber-700",
            upcoming: "border-slate-200 bg-slate-50 text-slate-600",
          }[status];

          return (
            <li key={stage.id} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 md:grid-cols-[1fr_5rem_1fr] md:gap-0">
              <div
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#CDB394] bg-[#F8F4EC] text-[0.68rem] font-bold tracking-[0.14em] text-[#0A1737] shadow-[0_10px_30px_-20px_rgba(10,23,55,0.7)] md:col-start-2 md:justify-self-center"
              >
                {milestone}
              </div>

              <article
                className={`col-start-2 row-start-1 rounded-[1.5rem] border border-[#E6D7C5] bg-white p-6 shadow-[0_24px_70px_-52px_rgba(10,23,55,0.6)] sm:p-7 md:row-auto md:max-w-md ${
                  isLeft
                    ? "md:col-start-1 md:mr-10 md:justify-self-end"
                    : "md:col-start-3 md:ml-10 md:justify-self-start"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">Stage {milestone}</p>
                  <span className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${statusClasses}`}>
                    {statusLabel}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A1737]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${stage.dateRange.start}T00:00:00`))}
                  {" – "}
                  {new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${stage.dateRange.end}T00:00:00`))}
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
                  {stage.activities.map((activity) => (
                    <li key={activity} className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E78938]" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </article>

              {isFinalStage ? (
                <div className="col-start-2 flex items-center gap-3 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:col-span-3 md:justify-center">
                  <span aria-hidden="true" className="h-7 w-7 rounded-full border border-dashed border-[#CDB394]" />
                  <span>
                    {cycleLabel}
                    <span className="mt-1 block normal-case tracking-normal text-slate-500">
                      {cycleDescription}
                    </span>
                  </span>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
