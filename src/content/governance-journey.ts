export interface GovernanceJourneyStage {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  activities: string[];
  purpose: string;
  objectives: string[];
  expectedOutcome: string;
  checklist: string[];
  deliverables: string[];
  resources: GovernanceJourneyRelatedResource[];
  responsibilities: string[];
  nextPhasePreparation: string[];
}

export interface GovernanceJourneyRelatedResource {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface GovernanceJourneyStagePlaybook {
  purpose: string;
  objectives: string[];
  expectedOutcome: string;
  checklist: string[];
  deliverables: string[];
  resources: GovernanceJourneyRelatedResource[];
  responsibilities: string[];
  nextPhasePreparation: string[];
}

export type GovernanceJourneyStageStatus = "completed" | "in-progress" | "upcoming";

export interface GovernanceJourneyCycle {
  id: string;
  organizationGroup: string;
  shortLabel: string;
  academicYear: string;
  timeline: {
    eyebrow: string;
    title: string;
    cycleLabel: string;
    cycleDescription: string;
    restartLabel: string;
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
  playbook: GovernanceJourneyStagePlaybook,
): GovernanceJourneyStage {
  return { id, title, dateRange: { start, end }, activities, ...playbook };
}

const relatedResources = (task: string, description: string): GovernanceJourneyRelatedResource[] => [
  {
    id: `${task}-resources`,
    title: "Explore related resources",
    description,
    href: "/resources#resource-library",
  },
];

const phasePlaybooks = {
  transition: {
    purpose: "Establish a legitimate, prepared leadership team and ensure responsibility is transferred with care.",
    objectives: ["Run a transparent selection process", "Complete leadership handover", "Orient the incoming team"],
    expectedOutcome: "An inaugurated leadership team with a clear mandate, records, and next steps.",
    checklist: ["Confirm election or appointment process", "Prepare handover records", "Complete board orientation"],
    deliverables: ["Leadership handover record", "Inauguration documentation", "Incoming board directory"],
    resources: relatedResources("transition", "Find governance guidance and leadership templates in the Governance Library."),
    responsibilities: ["Outgoing leadership", "Incoming leadership", "Student Affairs", "Advisor"],
    nextPhasePreparation: ["Review the organization mandate", "Gather prior-year reports", "Schedule annual planning"],
  },
  planning: {
    purpose: "Turn the organization mandate into a focused annual plan, calendar, and budget.",
    objectives: ["Set annual priorities", "Build a realistic work program", "Align planned spending"],
    expectedOutcome: "An approved plan that gives the team a shared direction for the academic year.",
    checklist: ["Review organization priorities", "Draft the work program", "Create an annual calendar", "Prepare the budget"],
    deliverables: ["Annual work program", "Activity calendar", "Proposed annual budget"],
    resources: relatedResources("planning", "Browse proposal and budget support materials in the Governance Library."),
    responsibilities: ["Organization leadership", "Division coordinators", "Treasurer", "Advisor"],
    nextPhasePreparation: ["Assign program owners", "Share the approved plan", "Prepare member recruitment"],
  },
  development: {
    purpose: "Build a capable team and a healthy organization culture before major programs begin.",
    objectives: ["Recruit and orient members", "Develop leadership capacity", "Clarify team roles"],
    expectedOutcome: "A prepared team with shared working practices and clear responsibilities.",
    checklist: ["Plan recruitment", "Run member orientation", "Confirm division roles", "Schedule development sessions"],
    deliverables: ["Member roster", "Organization structure", "Leadership development plan"],
    resources: relatedResources("development", "Find organization and leadership guidance in the Governance Library."),
    responsibilities: ["Organization leadership", "Human resource division", "Advisor"],
    nextPhasePreparation: ["Confirm program teams", "Brief committee leads", "Publish the activity calendar"],
  },
  programs: {
    purpose: "Deliver meaningful programs that serve students while maintaining quality and accountability.",
    objectives: ["Plan each activity responsibly", "Coordinate people and partners", "Track implementation and spending"],
    expectedOutcome: "Well-run programs with documented results, learning, and financial records.",
    checklist: ["Confirm activity proposal", "Assign committee responsibilities", "Monitor budget use", "Document outcomes"],
    deliverables: ["Approved activity proposal", "Event documentation", "Activity report"],
    resources: relatedResources("programs", "Access event, proposal, and meeting templates in the Governance Library."),
    responsibilities: ["Program lead", "Committee members", "Treasurer", "Advisor"],
    nextPhasePreparation: ["Collect program evidence", "Review participant feedback", "Prepare evaluation notes"],
  },
  evaluation: {
    purpose: "Reflect on performance and turn evidence into practical improvements for the team and its programs.",
    objectives: ["Review performance", "Identify lessons learned", "Agree improvement actions"],
    expectedOutcome: "A shared improvement plan supported by evidence from the year’s work.",
    checklist: ["Gather activity reports", "Review financial records", "Discuss team feedback", "Record improvements"],
    deliverables: ["Evaluation summary", "Improvement plan", "Performance review notes"],
    resources: relatedResources("evaluation", "Find reporting and meeting resources in the Governance Library."),
    responsibilities: ["Organization leadership", "Division coordinators", "Advisor", "Student Affairs"],
    nextPhasePreparation: ["Finalize reports", "Reconcile finances", "Prepare accountability materials"],
  },
  accountability: {
    purpose: "Close the organization year transparently and leave the next leadership team with complete records.",
    objectives: ["Report organizational outcomes", "Account for financial use", "Prepare continuity materials"],
    expectedOutcome: "A complete, accountable close of term and a strong foundation for the next transition.",
    checklist: ["Complete annual report", "Finalize financial accountability", "Organize organization archives", "Prepare handover notes"],
    deliverables: ["Annual accountability report", "Financial accountability report", "Organization archive"],
    resources: relatedResources("accountability", "Access LPJ, budget, and accountability templates in the Governance Library."),
    responsibilities: ["Organization leadership", "Treasurer", "Advisor", "Student Affairs"],
    nextPhasePreparation: ["Confirm outgoing responsibilities", "Update organization records", "Prepare the leadership handover"],
  },
} satisfies Record<string, GovernanceJourneyStagePlaybook>;

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
    prompt: "View cycle for",
  },
  cycles: [
    {
      id: "students-union",
      organizationGroup: "Students' Union",
      shortLabel: "Students' Union",
      academicYear: "2026/2027",
      timeline: {
        eyebrow: "Students' Union governance cycle",
        title: "A year of student representation and leadership.",
        cycleLabel: "Continuous Cycle",
        cycleDescription: "The next leadership transition begins a new academic year.",
        restartLabel: "Return to Phase 01",
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
          ],
          phasePlaybooks.transition,
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
          ],
          phasePlaybooks.planning,
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
          ],
          phasePlaybooks.development,
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
          ],
          phasePlaybooks.programs,
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
          ],
          phasePlaybooks.evaluation,
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
          ],
          phasePlaybooks.accountability,
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
          ],
          phasePlaybooks.transition,
        ),
      ]
    },
    {
      id: "clubs-and-societies",
      organizationGroup: "Students' Club & Society",
      shortLabel: "Clubs & Societies",
      academicYear: "2025/2026",
      timeline: {
        eyebrow: "Students' Clubs & Societies governance cycle",
        title: "A year of community, development, and accountability.",
        cycleLabel: "Continuous Cycle",
        cycleDescription: "The next leadership transition begins a new academic year.",
        restartLabel: "Return to Phase 01",
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
          ],
          phasePlaybooks.transition,
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
          ],
          phasePlaybooks.planning,
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
          ],
          phasePlaybooks.development,
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
          ],
          phasePlaybooks.programs,
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
          ],
          phasePlaybooks.evaluation,
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
          ],
          phasePlaybooks.accountability,
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
          ],
          phasePlaybooks.transition,
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
