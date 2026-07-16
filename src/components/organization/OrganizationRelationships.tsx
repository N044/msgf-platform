import type { OrganizationRelationshipGroup } from "@/content/students-union";

interface OrganizationRelationshipsProps {
  eyebrow: string;
  title: string;
  groups: OrganizationRelationshipGroup[];
  sectionId?: string;
}

const relationshipTones = {
  reporting: "border-[#C5D4E8] bg-[#EFF6FF] text-[#1D4E89]",
  support: "border-[#CBE6D8] bg-[#F0FDF4] text-[#2E6B4A]",
  coordination: "border-[#E8C9A8] bg-[#FFF7EC] text-[#9A571D]",
};

export function OrganizationRelationships({ eyebrow, title, groups, sectionId }: OrganizationRelationshipsProps) {
  return (
    <section id={sectionId} aria-labelledby="organization-relationships-title">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-relationships-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {groups.map((group) => <article key={group.id} className={`rounded-2xl border p-6 ${relationshipTones[group.tone]}`}><p className="text-xs font-semibold uppercase tracking-[0.18em]">{group.label}</p><div aria-hidden="true" className="my-4 h-px w-10 bg-current/35" /><ul className="space-y-3">{group.items.map((item) => <li key={item} className="text-lg font-semibold">{item}</li>)}</ul></article>)}
      </div>
    </section>
  );
}
