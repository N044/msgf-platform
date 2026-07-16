export type GovernanceRelationshipType = "authority" | "coordination" | "advisory" | "reporting";

export type GovernanceTone =
  | "institutional"
  | "academic"
  | "studentAffairs"
  | "student"
  | "advisory";

export interface GovernanceNodeData {
  id: string;
  name: string;
  layer: string;
  tone: GovernanceTone;
  description: string;
  roles: string[];
  responsibilities: string[];
  reportsTo: string[];
  coordinatesWith: string[];
  futurePath: string;
}

export interface GovernanceNodeRowData {
  nodeIds: string[];
  relationshipToNext?: GovernanceRelationshipType;
  relationshipLabel?: string;
  relationshipDirection?: "up" | "down";
  variant?: "standard" | "compact";
}

export interface GovernanceColumnData {
  id: string;
  title: string;
  description: string;
  tone: GovernanceTone;
  rows: GovernanceNodeRowData[];
}

export interface GovernanceLayerData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  columns: GovernanceColumnData[];
}

export interface GovernanceBridgeData {
  afterLayerId: string;
  type: GovernanceRelationshipType;
  label: string;
}

export interface GovernanceLegendItem {
  type: GovernanceRelationshipType;
  label: string;
  description: string;
}

export interface GovernanceSupportCardData {
  title: string;
  description: string;
  relationship: "advisory" | "coaching";
  appointedBy?: string;
}

export interface GovernanceSupportContent {
  eyebrow: string;
  title: string;
  description: string;
  connectedToLayer: string;
  connectionLabel: string;
  cards: GovernanceSupportCardData[];
}

export const governanceStructureContent = {
  hero: {
    eyebrow: "Governance Structure",
    title: "A visual architecture of student governance at Universitas Mikroskil.",
    description:
      "Understand how institutional authority, academic governance, student affairs, and advisory guidance work together inside the Student Governance Framework.",
  },
  overview: {
    eyebrow: "Governance overview",
    title: "A governance system designed for clarity, accountability, and coordinated student leadership.",
    cards: [
      {
        title: "🏛 Institutional Governance",
        description: "University leadership establishes governance, policy, and institutional direction.",
      },
      {
        title: "🎓 Academic Governance",
        description: "Connects faculties, study programs, and departmental student societies.",
      },
      {
        title: "👥 Non-Academic Governance",
        description: "Coordinates student organizations across the university.",
      },
      {
        title: "🤝 Advisory Network",
        description: "Empowers student leaders through mentorship and institutional guidance.",
      },
    ],
  },
  architecture: {
    eyebrow: "Architecture diagram",
    title: "Governance relationships as a coordinated architecture.",
    description:
      "The diagram separates hierarchy, coordination, and reporting so each role can be understood without reducing the system to a conventional org chart.",
    featuredNodeId: "student-affairs-office",
    layers: [
      {
        id: "institutional-governance",
        eyebrow: "Layer 1",
        title: "Institutional Governance",
        description: "The university-level mandate that anchors all student governance.",
        columns: [
          {
            id: "institutional-path",
            title: "Institutional foundation",
            description: "Formal university authority and strategic stewardship.",
            tone: "institutional",
            rows: [
              {
                nodeIds: ["foundation"],
                relationshipToNext: "authority",
                relationshipLabel: "Institutional mandate",
              },
              {
                nodeIds: ["rector"],
              },
            ],
          },
        ],
      },
      {
        id: "governance-branches",
        eyebrow: "Layer 2",
        title: "Governance Branches",
        description: "Two connected pathways translate university authority into student governance practice.",
        columns: [
          {
            id: "academic-governance",
            title: "Academic Governance",
            description: "Academic leadership and departmental student representation.",
            tone: "academic",
            rows: [
              {
                nodeIds: ["dean"],
                relationshipToNext: "coordination",
                relationshipLabel: "Academic coordination",
              },
              {
                nodeIds: ["head-of-study-program"],
                relationshipToNext: "reporting",
                relationshipLabel: "Departmental reporting",
                relationshipDirection: "up",
              },
              {
                nodeIds: ["HMPS"],
              },
            ],
          },
          {
            id: "student-affairs-governance",
            title: "Non-Academic Governance",
            description: "Student activity governance, recognition, coordination, and support.",
            tone: "studentAffairs",
            rows: [
              {
                nodeIds: ["vice-rector-I"],
                relationshipToNext: "coordination",
                relationshipLabel: "Administrative reporting",
                relationshipDirection: "up",
              },
              {
                nodeIds: ["student-affairs-office"],
                relationshipToNext: "reporting",
                relationshipLabel: "Operational reporting",
                relationshipDirection: "up",
              },
              {
                nodeIds: ["students-union"],
                relationshipToNext: "coordination",
                relationshipLabel: "Student coordination",
              },
              {
                nodeIds: ["students-club", "students-society"],
                variant: "compact",
              },
            ],
          },
        ],
      },
    ] satisfies GovernanceLayerData[],
    bridges: [
      {
        afterLayerId: "institutional-governance",
        type: "authority",
        label: "Institutional authority branches into academic and non-academic governance.",
      },
    ] satisfies GovernanceBridgeData[],
  },
  support: {
    eyebrow: "Layer 3",
    title: "Governance Support",
    description:
      "An integrated support layer that strengthens the overnance branches through advisory guidance and coaching.",
    connectedToLayer: "Layer 2 — Governance Branches",
    connectionLabel: "Advisory and coaching support",
    cards: [
      {
        title: "Advisor",
        description:
          "A university individual appointed by the Rector to guide a specific student organization or community.",
        relationship: "advisory",
        appointedBy: "Rector",
      },
      {
        title: "Coach",
        description:
          "Provides technical coaching, skill development, and performance improvement for Students' Clubs.",
        relationship: "coaching",
        appointedBy: "Student Affairs Office",
      },
    ],
  } satisfies GovernanceSupportContent,
  legend: [
    {
      type: "authority",
      label: "Solid Line",
      description: "Authority",
    },
    {
      type: "coordination",
      label: "Dashed Line",
      description: "Coordination",
    },
    {
      type: "reporting",
      label: "Arrow",
      description: "Reporting",
    },
  ] satisfies GovernanceLegendItem[],
  principles: {
    eyebrow: "Governance principles",
    title: "Principles that keep the structure understandable and accountable.",
    items: [
      {
        title: "Authority is explicit",
        description: "Formal authority remains visible so decisions can be traced to the right level.",
      },
      {
        title: "Coordination is flexible",
        description: "Student organizations coordinate across communities without creating unclear hierarchy.",
      },
      {
        title: "Advisory stays supportive",
        description: "Advisors guide and strengthen student leadership without replacing student ownership.",
      },
      {
        title: "Reporting remains accountable",
        description: "Reporting lines clarify stewardship, documentation, and institutional responsibility.",
      },
    ],
  },
  relatedDocuments: {
    eyebrow: "Related documents",
    title: "Reference materials will connect here as the governance library grows.",
    items: [
      "Student Organization Recognition Guide",
      "Advisor Handbook",
      "Student Governance Framework",
    ],
  },
};

export const governanceNodes: GovernanceNodeData[] = [
  {
    id: "foundation",
    name: "Board of Trustees / Yayasan",
    layer: "Institutional Governance",
    tone: "institutional",
    description: "Provides the university mandate, institutional direction, and governance foundation.",
    roles: ["Institutional stewardship", "Governance mandate", "Strategic oversight"],
    responsibilities: [
      "Set institutional direction for university governance.",
      "Safeguard the long-term mission of Universitas Mikroskil.",
      "Provide the foundation for formal authority.",
    ],
    reportsTo: [],
    coordinatesWith: ["Rector"],
    futurePath: "/governance/foundation",
  },
  {
    id: "rector",
    name: "Rector / Rektor",
    layer: "Institutional Governance",
    tone: "institutional",
    description: "Leads university governance and delegates authority.",
    roles: ["University leadership", "Institutional decision-making", "Executive accountability"],
    responsibilities: [
      "Translate institutional mandate into university governance direction.",
      "Oversee academic and student affairs leadership.",
      "Ensure governance alignment across the university.",
    ],
    reportsTo: ["Foundation"],
    coordinatesWith: ["Dean", "Vice Rector I"],
    futurePath: "/governance/rector",
  },
  {
    id: "dean",
    name: "Dean",
    layer: "Academic",
    tone: "academic",
    description: "Leads faculty-level academic governance and supervises study program leadership.",
    roles: ["Faculty leadership", "Academic governance", "Program oversight"],
    responsibilities: [
      "Guide academic governance within the faculty.",
      "Coordinate study program leadership.",
      "Support academic alignment for departmental student representation.",
    ],
    reportsTo: ["Rector"],
    coordinatesWith: ["Head of Study Program", "Vice Rector I"],
    futurePath: "/governance/dean",
  },
  {
    id: "head-of-study-program",
    name: "Head of Study Program",
    layer: "Academic ",
    tone: "academic",
    description: "Connects academic program leadership with departmental student representation.",
    roles: ["Program leadership", "Academic coordination", "Departmental guidance"],
    responsibilities: [
      "Coordinate academic matters within the study program.",
      "Guide departmental student representation through academic context.",
      "Support HMPS alignment with academic priorities.",
    ],
    reportsTo: ["Dean"],
    coordinatesWith: ["Departmental Students' Society (HMPS)"],
    futurePath: "/governance/head-of-study-program",
  },
  {
    id: "HMPS",
    name: "Departmental Students' Society (HMPS)",
    layer: "Student Organization",
    tone: "student",
    description: "Represents departmental student communities within the academic governance pathway.",
    roles: ["Departmental representation", "Academic community building", "Student participation"],
    responsibilities: [
      "Represent student interests within the department.",
      "Support academic and community activities for the study program.",
      "Coordinate with program leadership and student governance bodies.",
    ],
    reportsTo: ["Head of Study Program"],
    coordinatesWith: ["Students' Union"],
    futurePath: "/governance/HMPS",
  },
  {
    id: "vice-rector-I",
    name: "Vice Rector I",
    layer: "Non-Academic",
    tone: "studentAffairs",
    description: "Leads student affairs governance and supervises the student affairs function.",
    roles: ["Student affairs leadership", "Governance supervision", "Student development direction"],
    responsibilities: [
      "Set direction for student affairs governance.",
      "Supervise the Student Affairs Office.",
      "Ensure student activities align with university policy.",
    ],
    reportsTo: ["Rector"],
    coordinatesWith: ["Dean", "Student Affairs Office"],
    futurePath: "/governance/vice-rector-I",
  },
  {
    id: "student-affairs-office",
    name: "Student Affairs Office",
    layer: "Non-Academic",
    tone: "studentAffairs",
    description: "Coordinates student governance by supporting organizations, leadership development, and institutional collaboration.",
    roles: ["Recognition administration", "Student organization support"],
    responsibilities: [
      "Oversees university-wide student organization governance and operational coordination.",
    ],
    reportsTo: ["Vice Rector"],
    coordinatesWith: ["Students' Union", "Students' Club", "Students' Society", "Advisors", "Coaches"],
    futurePath: "/governance/student-affairs-office",
  },
  {
    id: "students-union",
    name: "Students' Union (BEM)",
    layer: "Student Organization",
    tone: "student",
    description: "Represents student leadership and coordinates recognized student communities.",
    roles: ["Student representation", "Leadership coordination", "Community stewardship"],
    responsibilities: [
      "Represent student voices within the governance framework.",
      "Coordinate Students' Club and Students' Society.",
      "Support transparent student leadership and participation.",
    ],
    reportsTo: ["Student Affairs Office"],
    coordinatesWith: ["Students' Club", "Students' Society", "Departmental Students' Society (HMPS)"],
    futurePath: "/governance/students-union",
  },
  {
    id: "students-club",
    name: "Students' Club (UKM)",
    layer: "Student Organization",
    tone: "student",
    description: "Interest-based student communities recognized under the Student Governance Framework.",
    roles: ["Interest community", "Student activity platform", "Leadership development"],
    responsibilities: [
      "Organize activities around shared interests and talents.",
      "Follow recognition, reporting, and activity procedures.",
      "Coordinate with Students' Union and Student Affairs Office.",
    ],
    reportsTo: ["Student Affairs Office"],
    coordinatesWith: ["Students' Union", "Students' Society"],
    futurePath: "/governance/students-club",
  },
  {
    id: "students-society",
    name: "Students' Society (UKM)",
    layer: "Student Organization",
    tone: "student",
    description: "Student communities that support academic, professional, religious, or social development.",
    roles: ["Community development", "Student support", "Professional and social participation"],
    responsibilities: [
      "Support learning and community beyond the classroom.",
      "Coordinate programs with student governance bodies.",
      "Maintain alignment with university policy and values.",
    ],
    reportsTo: ["Student Affairs Office"],
    coordinatesWith: ["Students' Union", "Students' Club"],
    futurePath: "/governance/students-society",
  },
];
