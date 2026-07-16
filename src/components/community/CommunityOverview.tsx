import { Card } from "@/components/ui/Card";
import type { CommunityOverviewItem } from "@/content/student-communities";

interface CommunityOverviewProps {
  eyebrow: string;
  title: string;
  items: CommunityOverviewItem[];
}

export function CommunityOverview({ eyebrow, title, items }: CommunityOverviewProps) {
  return (
    <section aria-labelledby="community-overview-title">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="community-overview-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id} className="border-[#E6D7C5] p-6">
            <p className="text-4xl font-semibold tracking-tight text-[#B66B2A]">{item.value}</p>
            <h3 className="mt-4 text-lg font-semibold text-[#0A1737]">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
