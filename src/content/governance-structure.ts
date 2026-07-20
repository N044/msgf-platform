export type GovernanceRelationshipType = "authority" | "coordination" | "advisory" | "reporting";

export type GovernanceTone =
  | "institutional"
  | "academic"
  | "studentAffairs"
  | "student"
  | "advisory";

export type GovernanceNodeVisualVariant = "standard" | "union" | "council" | "cell";

export interface GovernanceNodeData {
  id: string;
  name: string;
  layer: string;
  tone: GovernanceTone;
  visualVariant?: GovernanceNodeVisualVariant;
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
  columns?: GovernanceColumnData[];
  studentGovernanceHierarchy?: GovernanceStudentGovernanceHierarchyData;
}

export interface GovernanceStudentGovernanceHierarchyData {
  unionNodeId: string;
  councilNodeId: string;
  childNodeIds: string[];
  unionConnectedChildNodeId: string;
  executiveNodeId: string;
  executiveCellNodeIds: [string, string, string, string];
  clubSocietyNames?: string[];
  hmpsChildNames?: string[];
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
              },
            ],
          },
        ],
      },
      {
        id: "student-governance",
        eyebrow: "Layer 3",
        title: "Student Governance",
        description:
          "Student leadership is organized through the Students' Union, Council, and clearly connected governance bodies.",
        studentGovernanceHierarchy: {
          unionNodeId: "mikroskil-students-union",
          councilNodeId: "council",
          childNodeIds: [
            "students-clubs-and-societies",
            "executive-committee",
            "faculty-students-society",
          ],
          unionConnectedChildNodeId: "faculty-students-society",
          executiveNodeId: "executive-committee",
          executiveCellNodeIds: [
            "presidential-cell",
            "finance-cell",
            "internal-cell",
            "communication-cell",
          ],
          clubSocietyNames: [
            "Photography Club",
            "Music Society",
            "Debate Club",
            "Robotics Club",
            "Dance Society",
            "Film Club",
            "Chess Club",
            "Environmental Society",
            "Literary Club",
            "Sports Club",
            "AI Society",
            "Business Club",
            "Design Club",
            "Volunteer Club",
            "Language Society",
            "Coding Club",
            "Theatre Society",
            "Cultural Club",
          ],
          hmpsChildNames: [
            "Information Technology Student of Mikroskil",
            "One Magister Information Technology Students",
            "Ikatan Mahasiswa Manajemen",
            "Ikatan Mahasiswa Akuntansi",
            "Ikatan Mahasiswa Sistem Informasi",
            "Big Family of Informatics Students Mikroskil",
          ],
        },
      },
    ] satisfies GovernanceLayerData[],
    bridges: [
      {
        afterLayerId: "institutional-governance",
        type: "authority",
        label: "Institutional authority branches into academic and non-academic governance.",
      },
      {
        afterLayerId: "governance-branches",
        type: "coordination",
        label: "Key collaborators",
      },
    ] satisfies GovernanceBridgeData[],
  },
  support: {
    eyebrow: "Layer 4",
    title: "Supporting Roles",
    description:
      "An integrated support layer that strengthens student governance through advisory guidance and coaching.",
    connectedToLayer: "Layer 3 — Student Governance",
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
  {
    id: "mikroskil-students-union",
    name: "Universitas Mikroskil",
    layer: "Students' Union",
    tone: "student",
    visualVariant: "union",
    description: "The university-wide student body that anchors the student governance structure.",
    roles: ["Student representation", "Governance leadership", "University-wide coordination"],
    responsibilities: [
      "Provide the student governance mandate for the Council and Faculty Students' Society.",
      "Coordinate student representation across university communities.",
      "Maintain accountable student leadership structures.",
    ],
    reportsTo: ["Student Affairs Office"],
    coordinatesWith: ["Council"],
    futurePath: "/student-communities/students-union",
  },
  {
    id: "council",
    name: "Council",
    layer: "Students' Union",
    tone: "student",
    visualVariant: "council",
    description: "Provides shared oversight for the three student governance bodies connected beneath it.",
    roles: ["Student oversight", "Representation", "Coordination"],
    responsibilities: [
      "Guide the three student governance bodies connected beneath it.",
      "Coordinate university-wide student representation.",
      "Support transparent governance decisions.",
    ],
    reportsTo: ["Mikroskil University Students' Union"],
    coordinatesWith: [
      "Students' Clubs",
      "Executive Committee",
      "Student Societies",
    ],
    futurePath: "/governance/council",
  },
  {
    id: "students-clubs-and-societies",
    name: "Students' Clubs & Societies",
    layer: "Student Governance",
    tone: "student",
    description:
      "Interest-based student communities and academic, professional, religious, and social development societies within the student governance structure.",
    roles: ["Student communities", "Student activities", "Leadership development"],
    responsibilities: [
      "Represent recognized student clubs and societies.",
      "Coordinate activities through the Council.",
      "Develop student participation and leadership.",
    ],
    reportsTo: ["Council"],
    coordinatesWith: ["Mikroskil University Students' Union"],
    futurePath: "/governance/students-clubs-and-societies",
  },
  {
    id: "students-clubs-governance",
    name: "Students' Clubs",
    layer: "Student Governance",
    tone: "student",
    description: "Interest-based student communities within the student governance structure.",
    roles: ["Interest communities", "Student activities", "Leadership development"],
    responsibilities: [
      "Represent recognized interest-based student communities.",
      "Coordinate activities through the Council.",
      "Develop student participation and leadership.",
    ],
    reportsTo: ["Council"],
    coordinatesWith: ["Mikroskil University Students' Union"],
    futurePath: "/governance/students-clubs",
  },
  {
    id: "executive-committee",
    name: "Executive Committee",
    layer: "Student Governance",
    tone: "student",
    description: "Leads the execution of student governance priorities and programs.",
    roles: ["Executive leadership", "Program delivery", "Governance implementation"],
    responsibilities: [
      "Implement student governance priorities.",
      "Coordinate executive programs and operations.",
      "Report progress through the Council.",
    ],
    reportsTo: ["Council"],
    coordinatesWith: ["Mikroskil University Students' Union"],
    futurePath: "/governance/executive-committee",
  },
  {
    id: "student-societies-governance",
    name: "Student Societies",
    layer: "Student Governance",
    tone: "student",
    description: "Student communities for academic, professional, religious, and social development.",
    roles: ["Community development", "Student support", "Participation"],
    responsibilities: [
      "Represent recognized student societies.",
      "Coordinate society activities through the Council.",
      "Support student development beyond the classroom.",
    ],
    reportsTo: ["Council"],
    coordinatesWith: ["Mikroskil University Students' Union"],
    futurePath: "/governance/student-societies",
  },
  {
    id: "faculty-students-society",
    name: "Faculty Students' Society (HMPS)",
    layer: "Student Governance",
    tone: "student",
    description:
      "Represents faculty student communities through a direct relationship with the Students' Union.",
    roles: ["Faculty representation", "Academic community", "Student participation"],
    responsibilities: [
      "Represent student interests at faculty level.",
      "Coordinate faculty community activity through the Students' Union.",
      "Support academic and student community participation.",
    ],
    reportsTo: ["Mikroskil University Students' Union"],
    coordinatesWith: [],
    futurePath: "/governance/faculty-students-society",
  },
  {
    id: "presidential-cell",
    name: "Presidential Cell",
    layer: "Executive Cell",
    tone: "student",
    visualVariant: "cell",
    description: "Supports presidential leadership and strategic coordination within the Executive Committee.",
    roles: ["Presidential support", "Strategic coordination", "Executive leadership"],
    responsibilities: [
      "Support presidential leadership priorities.",
      "Coordinate strategic Executive Committee work.",
      "Maintain alignment across executive cells.",
    ],
    reportsTo: ["Executive Committee"],
    coordinatesWith: [],
    futurePath: "/governance/presidential-cell",
  },
  {
    id: "finance-cell",
    name: "Finance Cell",
    layer: "Executive Cell",
    tone: "student",
    visualVariant: "cell",
    description: "Coordinates financial planning, records, and accountability for executive work.",
    roles: ["Financial planning", "Budget coordination", "Accountability"],
    responsibilities: [
      "Coordinate executive financial planning.",
      "Maintain accurate financial records.",
      "Support accountable budget use.",
    ],
    reportsTo: ["Executive Committee"],
    coordinatesWith: [],
    futurePath: "/governance/finance-cell",
  },
  {
    id: "internal-cell",
    name: "Internal Cell",
    layer: "Executive Cell",
    tone: "student",
    visualVariant: "cell",
    description: "Strengthens internal coordination, communication, and delivery across executive work.",
    roles: ["Internal coordination", "Team alignment", "Operations support"],
    responsibilities: [
      "Coordinate internal executive activity.",
      "Support team alignment and delivery.",
      "Maintain effective internal communication.",
    ],
    reportsTo: ["Executive Committee"],
    coordinatesWith: [],
    futurePath: "/governance/internal-cell",
  },
  {
    id: "communication-cell",
    name: "Communication Cell",
    layer: "Executive Cell",
    tone: "student",
    visualVariant: "cell",
    description: "Leads clear communication and information sharing for executive initiatives.",
    roles: ["Communications", "Information sharing", "Public engagement"],
    responsibilities: [
      "Coordinate communication for executive initiatives.",
      "Maintain clear information sharing.",
      "Support student engagement through communication.",
    ],
    reportsTo: ["Executive Committee"],
    coordinatesWith: [],
    futurePath: "/governance/communication-cell",
  },
];
