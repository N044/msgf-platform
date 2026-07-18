export type ResourceTaskId =
  | "start-organization"
  | "organize-event"
  | "manage-finance"
  | "leadership"
  | "end-of-term";

export interface ResourceTask {
  id: ResourceTaskId;
  title: string;
  description: string;
  icon: string;
}

export interface GovernanceResource {
  id: string;
  title: string;
  category: string;
  fileType: string;
  description: string;
  downloadUrl: string;
  taskIds: ResourceTaskId[];
}

export interface FeaturedResource {
  id: string;
  title: string;
  description: string;
  resourceId: string;
}

export interface QuickAccessResource {
  id: string;
  title: string;
  description: string;
  fileType: string;
  downloadUrl: string;
}

export const resourcesContent = {
  hero: {
    eyebrow: "Governance Library",
    title: "The resources behind confident student leadership.",
    description:
      "Find the guidance, templates, and reference documents needed to lead organizations with clarity and accountability.",
  },
  taskBrowser: {
    eyebrow: "Browse by task",
    title: "What are you working on?",
    description: "Choose a task to focus the resource library on the guidance most relevant to your next step.",
    allTasksLabel: "All resources",
  },
  featured: {
    eyebrow: "Featured resources",
    title: "Start with the essentials.",
  },
  library: {
    eyebrow: "Resource library",
    title: "Browse every governance resource.",
    searchLabel: "Search resources",
    searchPlaceholder: "Search by title, category, or file type",
    resultsLabel: "resources found",
    emptyTitle: "No resources found",
    emptyDescription: "Try another search term or choose a different task.",
    downloadLabel: "Download",
  },
  quickAccess: {
    eyebrow: "Quick access",
    title: "Useful templates, ready when you need them.",
    downloadLabel: "Download template",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Need help finding the right resource?",
  },
  tasks: [
    { id: "start-organization", title: "Start an Organization", description: "Build a strong foundation.", icon: "01" },
    { id: "organize-event", title: "Organize an Event", description: "Plan with confidence.", icon: "02" },
    { id: "manage-finance", title: "Manage Finance", description: "Keep every record clear.", icon: "03" },
    { id: "leadership", title: "Leadership", description: "Lead people and decisions.", icon: "04" },
    { id: "end-of-term", title: "End of Term", description: "Close the cycle responsibly.", icon: "05" },
  ] satisfies ResourceTask[],
  resources: [
    {
      id: "student-governance-framework",
      title: "Student Governance Framework",
      category: "Policy",
      fileType: "PDF",
      description: "The shared foundation for roles, responsibilities, and student organization governance.",
      downloadUrl: "#student-governance-framework",
      taskIds: ["start-organization", "leadership", "end-of-term"],
    },
    {
      id: "student-organization-handbook",
      title: "Student Organization Handbook",
      category: "Handbook",
      fileType: "PDF",
      description: "A practical guide to managing an organization throughout the academic year.",
      downloadUrl: "#student-organization-handbook",
      taskIds: ["start-organization", "organize-event", "leadership", "end-of-term"],
    },
    {
      id: "advisor-guidelines",
      title: "Advisor Guidelines",
      category: "Guideline",
      fileType: "PDF",
      description: "Guidance for advisors supporting healthy, accountable student organizations.",
      downloadUrl: "#advisor-guidelines",
      taskIds: ["start-organization", "leadership", "end-of-term"],
    },
    {
      id: "event-management-guide",
      title: "Event Management Guide",
      category: "Guide",
      fileType: "PDF",
      description: "A clear reference for preparing, delivering, and reviewing student events.",
      downloadUrl: "#event-management-guide",
      taskIds: ["organize-event", "manage-finance"],
    },
    {
      id: "financial-accountability-guide",
      title: "Financial Accountability Guide",
      category: "Guide",
      fileType: "PDF",
      description: "Principles and procedures for transparent organization finance management.",
      downloadUrl: "#financial-accountability-guide",
      taskIds: ["manage-finance", "end-of-term"],
    },
    {
      id: "leadership-transition-guide",
      title: "Leadership Transition Guide",
      category: "Guide",
      fileType: "PDF",
      description: "Prepare a thoughtful handover that gives the next team a strong start.",
      downloadUrl: "#leadership-transition-guide",
      taskIds: ["leadership", "end-of-term"],
    },
  ] satisfies GovernanceResource[],
  featuredResources: [
    {
      id: "featured-framework",
      title: "Student Governance Framework",
      description: "Understand the system that connects student leadership, accountability, and support.",
      resourceId: "student-governance-framework",
    },
    {
      id: "featured-handbook",
      title: "Student Organization Handbook",
      description: "A practical reference for everyday organization management.",
      resourceId: "student-organization-handbook",
    },
    {
      id: "featured-advisor",
      title: "Advisor Guidelines",
      description: "A shared reference for advisors and organization leaders.",
      resourceId: "advisor-guidelines",
    },
  ] satisfies FeaturedResource[],
  quickAccessResources: [
    { id: "proposal-template", title: "Proposal Template", description: "Structure your activity proposal clearly.", fileType: "DOCX", downloadUrl: "#proposal-template" },
    { id: "lpj-template", title: "LPJ Template", description: "Report outcomes and accountability.", fileType: "DOCX", downloadUrl: "#lpj-template" },
    { id: "budget-template", title: "Budget Template", description: "Plan and track your activity budget.", fileType: "XLSX", downloadUrl: "#budget-template" },
    { id: "meeting-minutes", title: "Meeting Minutes", description: "Document decisions and follow-ups.", fileType: "DOCX", downloadUrl: "#meeting-minutes" },
  ] satisfies QuickAccessResource[],
  faqs: [
    { id: "latest-documents", question: "How do I know which document is current?", answer: "Use the documents in this library as the official reference. Each resource will show its latest revision when published." },
    { id: "download-access", question: "Who can use these templates?", answer: "The templates are intended for students, student leaders, advisors, and Student Affairs collaborators at Universitas Mikroskil." },
    { id: "resource-help", question: "What if I cannot find the resource I need?", answer: "Start with the task that best matches your work, then contact Student Affairs for guidance on materials not yet listed here." },
  ],
};
