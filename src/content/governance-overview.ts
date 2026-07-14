export interface GovernanceOverviewCard {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const governanceOverviewCards: GovernanceOverviewCard[] = [
  {
    id: "governance-structure",
    title: "Governance Structure",
    description: "Explore governance roles, responsibilities, and reporting relationships.",
    href: "/governance-structure",
    icon: "🏗️",
  },
  {
    id: "governance-journey",
    title: "Governance Journey",
    description: "Understand how student organizations are established and governed.",
    href: "/governance-journey",
    icon: "♻️",
  },
  {
    id: "student-communities",
    title: "Student Communities",
    description: "Discover students' union, clubs, and societies.",
    href: "/student-communities",
    icon: "🏰",
  },
  {
    id: "resources",
    title: "Resources",
    description: "Access policies, guidelines, templates, and governance documents.",
    href: "/resources",
    icon: "📄",
  },
];
