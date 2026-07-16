export interface GovernanceJourneyStage {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  activities: string[];
}

export type GovernanceJourneyStageStatus = "completed" | "in-progress" | "upcoming";

export interface GovernanceJourneyCycle {
  id: string;
  organizationGroup: string;
  academicYear: string;
  timeline: {
    eyebrow: string;
    title: string;
    cycleLabel: string;
    cycleDescription: string;
  };
  stages: GovernanceJourneyStage[];
}

export interface GovernanceJourneyCycleProgress {
  currentStage: GovernanceJourneyStage;
  nextStage?: GovernanceJourneyStage;
  progress: number;
}

function createStage(
  id: string,
  title: string,
  start: string,
  end: string,
  activities: string[],
): GovernanceJourneyStage {
  return { id, title, dateRange: { start, end }, activities };
}

export const governanceJourneyContent = {
  hero: {
    eyebrow: "Governance Journey",
    title: "The annual rhythm of student organization governance.",
    description:
      "From leadership transition to accountability, each stage creates a clear and continuous cycle of student leadership at Universitas Mikroskil.",
  },
  summary: {
    organizationGroupLabel: "Organization Group",
    academicYearLabel: "Academic Year",
    currentPhaseLabel: "Current Phase",
    progressLabel: "Progress",
    nextPhaseLabel: "Next Phase",
  },
  tabs: {
    label: "Governance cycles",
  },
  cycles: [
    {
      id: "students-union",
      organizationGroup: "Students' Union",
      academicYear: "2026/2027",
      timeline: {
        eyebrow: "Students' Union governance cycle",
        title: "A year of student representation and leadership.",
        cycleLabel: "Continuous Cycle",
        cycleDescription: "The next leadership transition begins a new academic year.",
      },
      stages: [
        createStage(
          "union-transition",
          "Leadership Transition",
          "2026-03-01",
          "2026-04-08",
          [
            "Election",
            "Leadership Handover",
            "Inauguration"
          ]
        ),

        createStage(
          "union-planning",
          "Annual Planning",
          "2026-04-09",
          "2026-04-30",
          [
            "Work Program",
            "Budget Planning",
            "Annual Calendar"
          ]
        ),

        createStage(
          "union-development",
          "Organization Development",
          "2026-05-01",
          "2026-06-30",
          [
            "Member Recruitment",
            "Leadership Development",
            "Board Orientation"
          ]
        ),

        createStage(
          "union-programs",
          "Events & Programs",
          "2026-07-01",
          "2027-01-31",
          [
            "Programs",
            "Events",
            "Collaborations",
            "Community Engagement"
          ]
        ),

        createStage(
          "union-evaluation",
          "Monitoring & Evaluation",
          "2027-02-01",
          "2027-02-15",
          [
            "Performance Review",
            "Program Evaluation",
            "Improvement Planning"
          ]
        ),

        createStage(
          "union-accountability",
          "Accountability",
          "2027-02-16",
          "2027-02-28",
          [
            "Annual Report",
            "Financial Accountability",
            "Leadership Handover Preparation"
          ]
        ),

        createStage(
          "union-next-transition",
          "Leadership Transition",
          "2027-03-01",
          "2027-04-08",
          [
            "Election",
            "Leadership Handover",
            "New Inauguration"
          ]
        ),
      ]
    },
    {
      id: "clubs-and-societies",
      organizationGroup: "Students' Clubs & Students' Societies",
      academicYear: "2025/2026",
      timeline: {
        eyebrow: "Students' Clubs & Societies governance cycle",
        title: "A year of community, development, and accountability.",
        cycleLabel: "Continuous Cycle",
        cycleDescription: "The next leadership transition begins a new academic year.",
      },
      stages: [
        createStage(
          "community-transition",
          "Leadership Transition",
          "2025-09-01",
          "2025-10-28",
          [
            "Election",
            "Leadership Handover",
            "Inauguration"
          ]
        ),

        createStage(
          "community-planning",
          "Annual Planning",
          "2025-10-29",
          "2025-11-30",
          [
            "Work Program",
            "Budget Planning",
            "Annual Calendar"
          ]
        ),

        createStage(
          "community-development",
          "Organization Development",
          "2025-12-01",
          "2026-01-31",
          [
            "Member Recruitment",
            "Leadership Development",
            "Board Orientation"
          ]
        ),

        createStage(
          "community-programs",
          "Events & Programs",
          "2026-02-01",
          "2026-06-30",
          [
            "Programs",
            "Events",
            "Collaborations",
            "Community Engagement"
          ]
        ),

        createStage(
          "community-evaluation",
          "Monitoring & Evaluation",
          "2026-07-01",
          "2026-07-31",
          [
            "Performance Review",
            "Program Evaluation",
            "Improvement Planning"
          ]
        ),

        createStage(
          "community-accountability",
          "Accountability",
          "2026-08-01",
          "2026-08-31",
          [
            "Annual Report",
            "Financial Accountability",
            "Leadership Handover Preparation"
          ]
        ),

        createStage(
          "community-next-transition",
          "Leadership Transition",
          "2026-09-01",
          "2026-10-28",
          [
            "Election",
            "Leadership Handover",
            "New Inauguration"
          ]
        ),
      ]
    },
  ] satisfies GovernanceJourneyCycle[],
};

function toDate(date: string, isEndDate = false) {
  return new Date(`${date}T${isEndDate ? "23:59:59.999" : "00:00:00.000"}`);
}

export function getGovernanceJourneyStageStatus(
  stage: GovernanceJourneyStage,
  today = new Date(),
): GovernanceJourneyStageStatus {
  if (today < toDate(stage.dateRange.start)) return "upcoming";
  if (today > toDate(stage.dateRange.end, true)) return "completed";

  return "in-progress";
}

export function getGovernanceJourneyCycleProgress(
  cycle: GovernanceJourneyCycle,
  today = new Date(),
): GovernanceJourneyCycleProgress {
  const currentIndex = cycle.stages.findIndex(
    (stage) => getGovernanceJourneyStageStatus(stage, today) === "in-progress",
  );
  const nextIndex = cycle.stages.findIndex(
    (stage) => getGovernanceJourneyStageStatus(stage, today) === "upcoming",
  );
  const activeIndex = currentIndex >= 0 ? currentIndex : nextIndex >= 0 ? nextIndex : cycle.stages.length - 1;
  const completedStages = cycle.stages.filter(
    (stage) => getGovernanceJourneyStageStatus(stage, today) === "completed",
  ).length;

  return {
    currentStage: cycle.stages[activeIndex],
    nextStage: currentIndex >= 0 ? cycle.stages[currentIndex + 1] : cycle.stages[nextIndex + 1],
    progress: Math.round((completedStages / cycle.stages.length) * 100),
  };
}
