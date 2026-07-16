export const COMMUNITY_CATEGORIES = [
  "Leadership",
  "Academic",
  "Sports",
  "Technology",
  "Arts",
  "Business",
  "Social",
  "Culture",
] as const;

export type CommunityCategory = (typeof COMMUNITY_CATEGORIES)[number];

export interface CommunityOverviewItem {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface StudentOrganization {
  id: string;
  name: string;
  category: CommunityCategory;
  description: string;
  memberCount: string;
  foundedYear: string;
  exploreLabel: string;
}

export interface JoinStep {
  id: string;
  title: string;
  description: string;
}

export const studentCommunitiesContent = {
  hero: {
    eyebrow: "Student life at Universitas Mikroskil",
    title: "Student Communities",
    description:
      "Find the community where your interests, skills, and contribution can grow alongside campus life.",
  },
  overview: {
    eyebrow: "Community overview",
    title: "A place for every kind of student contribution.",
    items: [
      { id: "students-union", label: "Students' Union", value: "1", description: "University-wide student representation." },
      { id: "students-clubs", label: "Students' Clubs", value: "6", description: "Interest-led communities and activities." },
      { id: "students-societies", label: "Students' Societies", value: "5", description: "Discipline and identity-based communities." },
      { id: "total-organizations", label: "Total Organizations", value: "12", description: "Communities open to Mikroskil students." },
    ] satisfies CommunityOverviewItem[],
  },
  explorer: {
    eyebrow: "Organization explorer",
    title: "Organization Explorer",
    description: "Find a community that fits the way you want to learn, lead, and contribute.",
    browseTitle: "Browse by Category",
    browseDescription: "Choose an area of interest to focus the organizations shown below.",
    allCategoriesLabel: "All categories",
    noResults: "No organizations are listed in this category yet.",
    categories: COMMUNITY_CATEGORIES,
    organizations: [
      { id: "student-representative-council", name: "Student Representative Council", category: "Leadership", description: "Represents student voices and supports accountable student governance.", memberCount: "24 members", foundedYear: "Founded 2005", exploreLabel: "Explore organization" },
      { id: "english-club", name: "English Club", category: "Academic", description: "Build confidence in English communication through practice, events, and peer learning.", memberCount: "86 members", foundedYear: "Founded 2011", exploreLabel: "Explore organization" },
      { id: "basketball-club", name: "Basketball Club", category: "Sports", description: "A community for training, competition, and teamwork on and off the court.", memberCount: "64 members", foundedYear: "Founded 2013", exploreLabel: "Explore organization" },
      { id: "programming-club", name: "Programming Club", category: "Technology", description: "Learn, build, and share technology projects with fellow student developers.", memberCount: "92 members", foundedYear: "Founded 2014", exploreLabel: "Explore organization" },
      { id: "photography-club", name: "Photography Club", category: "Arts", description: "Develop visual storytelling through workshops, exhibitions, and campus documentation.", memberCount: "58 members", foundedYear: "Founded 2012", exploreLabel: "Explore organization" },
      { id: "entrepreneurship-club", name: "Entrepreneurship Club", category: "Business", description: "Turn ideas into practical ventures through learning, mentorship, and collaboration.", memberCount: "71 members", foundedYear: "Founded 2016", exploreLabel: "Explore organization" },
      { id: "community-service-society", name: "Community Service Society", category: "Social", description: "Create meaningful impact through volunteer programs and local community partnerships.", memberCount: "47 members", foundedYear: "Founded 2010", exploreLabel: "Explore organization" },
      { id: "indonesian-culture-society", name: "Indonesian Culture Society", category: "Culture", description: "Celebrate local heritage through performances, workshops, and shared traditions.", memberCount: "53 members", foundedYear: "Founded 2015", exploreLabel: "Explore organization" },
      { id: "debate-society", name: "Debate Society", category: "Academic", description: "Strengthen research, argumentation, and public-speaking skills through friendly competition.", memberCount: "45 members", foundedYear: "Founded 2017", exploreLabel: "Explore organization" },
      { id: "badminton-society", name: "Badminton Society", category: "Sports", description: "Stay active and compete in an inclusive community for every skill level.", memberCount: "68 members", foundedYear: "Founded 2018", exploreLabel: "Explore organization" },
      { id: "visual-arts-society", name: "Visual Arts Society", category: "Arts", description: "Explore illustration, design, and creative expression with fellow visual artists.", memberCount: "39 members", foundedYear: "Founded 2019", exploreLabel: "Explore organization" },
      { id: "digital-business-society", name: "Digital Business Society", category: "Business", description: "Explore digital markets, product ideas, and the future of business innovation.", memberCount: "56 members", foundedYear: "Founded 2020", exploreLabel: "Explore organization" },
    ] satisfies StudentOrganization[],
  },
  join: {
    eyebrow: "How to join",
    title: "Four steps from curiosity to community.",
    steps: [
      { id: "discover", title: "Discover", description: "Explore communities that match your interests." },
      { id: "contact", title: "Contact", description: "Reach out to the organization and ask questions." },
      { id: "register", title: "Register", description: "Complete the membership registration process." },
      { id: "become-member", title: "Become a Member", description: "Join activities and grow with your new community." },
    ] satisfies JoinStep[],
  },
  cta: {
    title: "Ready to find your place?",
    description: "Explore each organization and take the first step toward your campus community.",
    actionLabel: "Explore each organization",
  },
};
