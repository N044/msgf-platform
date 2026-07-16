"use client";

import { useState } from "react";

import { GovernanceJourneyTimeline } from "@/components/governance/GovernanceJourneyTimeline";
import { Card } from "@/components/ui/Card";
import {
  getGovernanceJourneyCycleProgress,
  type GovernanceJourneyCycle,
} from "@/content/governance-journey";

interface GovernanceJourneyCyclesProps {
  cycles: GovernanceJourneyCycle[];
  labels: {
    organizationGroupLabel: string;
    academicYearLabel: string;
    currentPhaseLabel: string;
    progressLabel: string;
    nextPhaseLabel: string;
  };
  tabLabel: string;
}

export function GovernanceJourneyCycles({ cycles, labels, tabLabel }: GovernanceJourneyCyclesProps) {
  const [activeCycleId, setActiveCycleId] = useState(cycles[0]?.id);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId) ?? cycles[0];

  if (!activeCycle) return null;

  return (
    <div className="space-y-14">
      <section aria-label="Governance cycle summaries" className="grid gap-5 lg:grid-cols-2">
        {cycles.map((cycle) => {
          const { currentStage, nextStage, progress } = getGovernanceJourneyCycleProgress(cycle);

          return (
            <Card key={cycle.id} className="border-[#E6D7C5] p-6 sm:p-7">
              <dl className="grid gap-5 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{labels.organizationGroupLabel}</dt><dd className="mt-2 text-lg font-semibold text-[#0A1737]">{cycle.organizationGroup}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{labels.academicYearLabel}</dt><dd className="mt-2 text-lg font-semibold text-[#0A1737]">{cycle.academicYear}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{labels.currentPhaseLabel}</dt><dd className="mt-2 text-base font-semibold text-[#B66B2A]">{currentStage.title}</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{labels.progressLabel}</dt><dd className="mt-2 text-base font-semibold text-[#0A1737]">{progress}%</dd></div>
                <div className="sm:col-span-2"><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{labels.nextPhaseLabel}</dt><dd className="mt-2 text-base font-semibold text-[#0A1737]">{nextStage?.title ?? "Cycle complete"}</dd></div>
              </dl>
            </Card>
          );
        })}
      </section>

      <section aria-label={tabLabel}>
        <div role="tablist" aria-label={tabLabel} className="flex flex-col gap-2 border-b border-[#D8C4AB] sm:flex-row">
          {cycles.map((cycle) => {
            const isActive = cycle.id === activeCycle.id;
            return <button key={cycle.id} type="button" role="tab" aria-selected={isActive} aria-controls={`${cycle.id}-timeline`} id={`${cycle.id}-tab`} onClick={() => setActiveCycleId(cycle.id)} className={`rounded-t-xl px-5 py-3 text-left text-sm font-semibold transition-colors ${isActive ? "bg-[#0A1737] text-white" : "text-slate-600 hover:bg-white hover:text-[#0A1737]"}`}>{cycle.organizationGroup.replace("Students' Clubs & Students' Societies", "Students' Clubs & Societies")}</button>;
          })}
        </div>
        <div role="tabpanel" id={`${activeCycle.id}-timeline`} aria-labelledby={`${activeCycle.id}-tab`} className="pt-14">
          <GovernanceJourneyTimeline {...activeCycle.timeline} stages={activeCycle.stages} />
        </div>
      </section>
    </div>
  );
}
