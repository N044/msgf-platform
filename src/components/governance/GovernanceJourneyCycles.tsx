"use client";

import { useRef, useState } from "react";

import { NextPhase } from "@/components/governance/NextPhase";
import { PhaseDetails } from "@/components/governance/PhaseDetails";
import { PhaseNavigator } from "@/components/governance/PhaseNavigator";
import { PhaseResources } from "@/components/governance/PhaseResources";
import { Card } from "@/components/ui/Card";
import {
  getGovernanceJourneyCycleProgress,
  getGovernanceJourneyStageStatus,
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
  tabPrompt: string;
}

export function GovernanceJourneyCycles({ cycles, labels, tabLabel, tabPrompt }: GovernanceJourneyCyclesProps) {
  const [activeCycleId, setActiveCycleId] = useState(cycles[0]?.id);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId) ?? cycles[0];
  const [selectedStageId, setSelectedStageId] = useState(
    () => (activeCycle ? getGovernanceJourneyCycleProgress(activeCycle).currentStage.id : ""),
  );
  const selectedPhaseRef = useRef<HTMLDivElement>(null);

  if (!activeCycle) return null;

  const selectedStage = activeCycle.stages.find((stage) => stage.id === selectedStageId)
    ?? getGovernanceJourneyCycleProgress(activeCycle).currentStage;
  const selectedStageIndex = activeCycle.stages.findIndex((stage) => stage.id === selectedStage.id);
  const selectedPhaseNumber = String(selectedStageIndex + 1).padStart(2, "0");
  const nextStage = activeCycle.stages[selectedStageIndex + 1];

  function handleCycleChange(cycle: GovernanceJourneyCycle) {
    setActiveCycleId(cycle.id);
    setSelectedStageId(getGovernanceJourneyCycleProgress(cycle).currentStage.id);
  }

  function handleStageChange(stageId: string) {
    setSelectedStageId(stageId);
    requestAnimationFrame(() => {
      selectedPhaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="space-y-16">
      <section aria-label="Governance cycle summaries" className="grid gap-5 lg:grid-cols-2">
        {cycles.map((cycle) => {
          const { currentStage, nextStage: upcomingStage, progress } = getGovernanceJourneyCycleProgress(cycle);

          return (
            <Card key={cycle.id} className="overflow-hidden border-[#E6D7C5] p-0 shadow-[0_20px_50px_-42px_rgba(10,23,55,0.7)]">
              <div className="flex flex-col gap-4 border-b border-[#E6D7C5] bg-[#FFFDF9] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B66B2A]">{labels.organizationGroupLabel}</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0A1737]">{cycle.organizationGroup}</h2>
                </div>
                <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-[#E6D7C5] bg-white px-3 py-2.5">
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8F4EC] text-xs font-bold text-[#0A1737]">AY</span>
                  <span><span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-700">{labels.academicYearLabel}</span><span className="mt-0.5 block text-sm font-semibold text-[#0A1737]">{cycle.academicYear}</span></span>
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="flex items-center gap-5">
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                    <svg aria-hidden="true" viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" strokeWidth="10" pathLength="100" className="stroke-[#E6EDE8]" />
                      <circle cx="50" cy="50" r="42" fill="none" strokeWidth="10" pathLength="100" strokeDasharray={`${progress} ${100 - progress}`} strokeLinecap="round" className="stroke-emerald-600" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0A1737]">
                      <span className="text-xl font-semibold tracking-tight">{progress}%</span>
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-slate-700">{labels.progressLabel}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B66B2A]">{labels.currentPhaseLabel}</p>
                    <p className="mt-2 text-xl font-semibold text-[#0A1737]">{currentStage.title}</p>
                    <p className="mt-1 text-sm text-slate-700">{cycle.stages.length} connected phases</p>
                  </div>
                </div>
                <ol aria-label={`${cycle.organizationGroup} phase progress`} className="flex items-center gap-1.5">
                    {cycle.stages.map((stage) => {
                      const status = getGovernanceJourneyStageStatus(stage);
                      const markerClass = status === "completed" ? "bg-emerald-600" : status === "in-progress" ? "bg-[#E78938] ring-4 ring-[#F9E9D8]" : "bg-[#E6D7C5]";
                      const isLastStage = stage.id === cycle.stages[cycle.stages.length - 1]?.id;

                      return (
                        <li key={stage.id} className="flex flex-1 items-center last:flex-none">
                          <span aria-label={stage.title} className={`h-3 w-3 shrink-0 rounded-full ${markerClass}`} />
                          {!isLastStage ? <span aria-hidden="true" className="h-px flex-1 bg-[#E6D7C5]" /> : null}
                        </li>
                      );
                    })}
                </ol>
                <div className="grid gap-3 border-t border-[#E6D7C5] pt-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">Now</p>
                    <p className="mt-1 font-semibold text-[#0A1737]">{currentStage.title}</p>
                  </div>
                  <span aria-hidden="true" className="text-center text-[#B66B2A]">→</span>
                  <div className="sm:text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">{labels.nextPhaseLabel}</p>
                    <p className="mt-1 font-semibold text-[#0A1737]">{upcomingStage?.title ?? "Cycle complete"}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </section>

      <section aria-label={tabLabel}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B66B2A]">{tabPrompt}</p>
          <div role="tablist" aria-label={tabLabel} className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-[#E6D7C5] bg-white p-1 shadow-[0_12px_30px_-24px_rgba(10,23,55,0.7)]">
            {cycles.map((cycle) => {
              const isActive = cycle.id === activeCycle.id;

              return <button key={cycle.id} type="button" role="tab" aria-selected={isActive} aria-controls={`${cycle.id}-playbook`} id={`${cycle.id}-tab`} onClick={() => handleCycleChange(cycle)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] ${isActive ? "bg-[#0A1737] text-white shadow-sm" : "text-slate-700 hover:bg-[#FFF7EC] hover:text-[#0A1737]"}`}>{cycle.shortLabel}</button>;
            })}
          </div>
        </div>
        <div role="tabpanel" id={`${activeCycle.id}-playbook`} aria-labelledby={`${activeCycle.id}-tab`} className="space-y-16 pt-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{activeCycle.timeline.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{activeCycle.timeline.title}</h2>
            <p className="leading-7 text-slate-700">Select a phase to see its purpose, objectives, and related governance support.</p>
          </div>
          <PhaseNavigator {...activeCycle.timeline} stages={activeCycle.stages} selectedStageId={selectedStage.id} onStageChange={handleStageChange} />
          <div ref={selectedPhaseRef} className="scroll-mt-6 space-y-8 rounded-3xl border border-[#E6D7C5] bg-white p-6 shadow-[0_24px_70px_-52px_rgba(10,23,55,0.55)] sm:p-8">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1737] text-xs font-bold tracking-[0.14em] text-white">{selectedPhaseNumber}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">Selected phase</p>
                <h3 className="mt-1 text-3xl font-semibold tracking-tight text-[#0A1737]">{selectedStage.title}</h3>
              </div>
            </div>
            <PhaseDetails stage={selectedStage} />
          </div>
          <div className="rounded-3xl border border-[#E6D7C5] bg-white p-6 shadow-[0_24px_70px_-52px_rgba(10,23,55,0.55)] sm:p-8">
            <PhaseResources resources={selectedStage.resources} />
          </div>
          <NextPhase stage={nextStage} preparation={selectedStage.nextPhasePreparation} />
        </div>
      </section>
    </div>
  );
}
