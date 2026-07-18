import { ResourcesPageContent } from "@/components/resources/ResourcesPageContent";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { resourcesContent } from "@/content/resources";

export default function ResourcesPage() {
  return <main><ResourcesHero {...resourcesContent.hero} /><ResourcesPageContent /></main>;
}
