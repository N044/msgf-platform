export interface OrganizationDetailCard {
  id: string;
  title: string;
  description: string;
  meta?: string;
  memberCount?: string;
}

export interface OrganizationRelationshipGroup {
  id: string;
  label: string;
  items: string[];
  tone: "reporting" | "support" | "coordination";
}

export interface OrganizationHighlight {
  id: string;
  title: string;
  value: string;
  suffix: string;
  label: string;
  icon?: string;
}

export interface OrganizationResource {
  id: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
}

export interface OrganizationContact {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface OrganizationNavigationItem {
  id: string;
  label: string;
  href: string;
}

export const studentsUnionContent = {
  hero: {
    eyebrow: "Organization Blueprint",
    title: "Students' Union",
    subtitle: "Official student representative body",
    academicYear: "Academic Year 2026/2027",
  },
  navigation: {
    label: "Explore the blueprint",
    items: [
      { id: "purpose", label: "Purpose", href: "#purpose" },
      { id: "structure", label: "Structure", href: "#organization-structure" },
      { id: "roles", label: "Roles", href: "#roles" },
      { id: "ministries", label: "Ministries", href: "#ministries" },
      { id: "highlights", label: "Glance", href: "#highlights" },
      { id: "responsibilities", label: "Responsibilities", href: "#responsibilities" },
      { id: "resources", label: "Resources", href: "#resources" },
      { id: "contact", label: "Contact", href: "#contact" },
    ] satisfies OrganizationNavigationItem[],
  },
  purpose: {
    eyebrow: "Purpose",
    title: "Representation with responsibility.",
    description:
      "Students' Union represents the collective student voice, connects student priorities with the university, and leads initiatives that strengthen student life at Universitas Mikroskil.",
  },
  visionMission: {
    eyebrow: "Direction",
    title: "Vision & Mission",
    items: [
      { id: "vision", title: "Vision", description: "To be a trusted student representative body that enables a connected, capable, and constructive student community." },
      { id: "mission", title: "Mission", description: "Represent student aspirations, develop student leadership, and collaborate with the university to create meaningful student impact." },
    ] satisfies OrganizationDetailCard[],
  },
  structure: {
    eyebrow: "Organization structure",
    title: "A clear leadership pathway for coordinated action.",
    president: "President",
    vicePresident: "Vice President",
    officers: ["Secretary", "Treasurer"],
    ministryLabel: "Ministries",
    ministryDescription: "Each ministry is led by a Minister and supported by its members.",
  },
  roles: {
    eyebrow: "Roles & responsibilities",
    title: "Leadership roles with distinct stewardship.",
    instruction: "Select a role to bring its primary responsibility into focus.",
    selectedRoleLabel: "Primary responsibility",
    items: [
      { id: "president", title: "President", description: "Sets student leadership direction, represents the Union, and ensures accountable delivery of priorities." },
      { id: "vice-president", title: "Vice President", description: "Supports strategic coordination, aligns ministries, and acts on behalf of the President when needed." },
      { id: "secretary", title: "Secretary", description: "Maintains records, correspondence, meeting documentation, and administrative continuity." },
      { id: "treasurer", title: "Treasurer", description: "Safeguards financial planning, reporting, and responsible use of organization resources." },
      { id: "minister", title: "Minister", description: "Leads a ministry, guides its members, and delivers the ministry's responsibilities in alignment with the Students' Union's direction." },
    ] satisfies OrganizationDetailCard[],
  },
  ministries: {
    eyebrow: "Ministries",
    title: "Minister-led teams that turn representation into action.",
    items: [
      { id: "academic-development", title: "Ministry of Academic Development", description: "Supports academic growth, learning initiatives, and constructive student feedback.", meta: "Led by a Minister · Supported by members", memberCount: "7 members" },
      { id: "information-media-development", title: "Ministry of Information and Media Development", description: "Develops clear student information, media channels, and communication initiatives.", meta: "Led by a Minister · Supported by members", memberCount: "5 members" },
    ] satisfies OrganizationDetailCard[],
  },
  relationships: {
    eyebrow: "Governance relationship",
    title: "Connected to the people who enable student leadership.",
    groups: [
      { id: "reports-to", label: "Reports To", items: ["Student Affairs Office"], tone: "reporting" },
      { id: "supported-by", label: "Supported By", items: ["Advisor"], tone: "support" },
      { id: "coordinates-with", label: "Coordinates With", items: ["Students' Clubs", "Students' Societies"], tone: "coordination" },
    ] satisfies OrganizationRelationshipGroup[],
  },
  organizationHighlights: [
    { id: "years-history", title: "Years of History", value: "25", suffix: "+", label: "Years of Leadership", icon: "CalendarIcon" },
    { id: "current-members", title: "Current Members", value: "120", suffix: "+", label: "Active Student Leaders", icon: "UserGroupIcon" },
    { id: "events-held", title: "Events Held", value: "350", suffix: "+", label: "Programs & Events", icon: "BoltIcon" },
  ] satisfies OrganizationHighlight[],
  responsibilities: {
    eyebrow: "Key responsibilities",
    title: "What the Students' Union is here to advance.",
    items: [
      { id: "representation", title: "Student Representation", description: "Bring student perspectives into relevant university conversations." },
      { id: "leadership", title: "Leadership", description: "Model responsible leadership and develop capable student leaders." },
      { id: "advocacy", title: "Advocacy", description: "Identify student needs and advocate for constructive responses." },
      { id: "collaboration", title: "Collaboration", description: "Connect communities, partners, and university stakeholders." },
      { id: "governance", title: "Governance", description: "Maintain clear, transparent, and accountable organization practice." },
    ] satisfies OrganizationDetailCard[],
  },
  resources: {
    eyebrow: "Related resources",
    title: "Continue with the wider governance context.",
    items: [
      { id: "governance-structure", title: "Governance Structure", description: "See where the Students' Union sits in the wider framework.", href: "/governance-structure", actionLabel: "View structure" },
      { id: "governance-journey", title: "Governance Journey", description: "Understand the annual phases that shape Union stewardship.", href: "/governance-journey", actionLabel: "View journey" },
      { id: "policies", title: "Policies", description: "Access the policy library as governance resources become available.", href: "/resources", actionLabel: "View policies" },
    ] satisfies OrganizationResource[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Connect with the Students' Union.",
    items: [
      { id: "instagram", label: "Instagram", value: "@su.mikroskil", href: "https://instagram.com/mikroskilstudentsunion" },
      { id: "email", label: "Email", value: "students.union@mikroskil.ac.id", href: "mailto:studentsunion@mikroskil.ac.id" },
    ] satisfies OrganizationContact[],
  },
};
