import { Card } from "@/components/ui/Card";
import type { OrganizationDetailCard } from "@/content/students-union";

interface OrganizationCardGridProps {
  eyebrow: string;
  title: string;
  items: OrganizationDetailCard[];
  columns?: "two" | "three";
  sectionId?: string;
  align?: "left" | "center";
  compact?: boolean;
}

export function OrganizationCardGrid({ eyebrow, title, items, columns = "three", sectionId, align = "left", compact = false }: OrganizationCardGridProps) {
  return (
    <section id={sectionId}>
      <div className={`max-w-2xl space-y-3 ${align === "center" ? "mx-auto text-center" : ""}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className={`mt-10 grid gap-5 ${columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"} ${compact ? "mx-auto max-w-3xl" : ""}`}>
        {items.map((item) => <Card key={item.id} className={`border-[#E6D7C5] ${compact ? "p-5" : "p-6"} ${align === "center" ? "text-center" : ""}`}><h3 className="text-xl font-semibold text-[#0A1737]">{item.title}</h3>{item.meta ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#B66B2A]">{item.meta}</p> : null}{item.memberCount ? <p className="mt-3 text-sm font-semibold text-[#0A1737]">{item.memberCount}</p> : null}<p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></Card>)}
      </div>
    </section>
  );
}
