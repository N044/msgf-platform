import { Footer } from "@/components/home/Footer";
import { GovernanceOverview } from "@/components/home/GovernanceOverview";
import { Hero } from "@/components/home/Hero";
import { OrganizationJourney } from "@/components/home/OrganizationJourney";
import { StudentCommunity } from "@/components/home/StudentCommunity";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OrganizationJourney />
      <GovernanceOverview />
      <StudentCommunity />
      <Footer />
    </main>
  );
}
