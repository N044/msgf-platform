export type Locale = "id" | "en";

export interface PageContent {
  slug: string;
  title: string;
  description?: string;
  body?: string[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string[];
}
