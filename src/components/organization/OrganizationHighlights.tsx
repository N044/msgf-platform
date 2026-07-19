import type { OrganizationHighlight } from "@/content/students-union";
import { CalendarIcon, UserGroupIcon, BoltIcon } from "@heroicons/react/24/outline";

// Map the string `icon` property from content to the actual Heroicon component.
const ICON_MAP: Record<string, any> = {
  CalendarIcon,
  UserGroupIcon,
  BoltIcon,
};

interface OrganizationHighlightsProps {
  eyebrow: string;
  title: string;
  highlights: OrganizationHighlight[];
  sectionId?: string;
}

export function OrganizationHighlights({ eyebrow, title, highlights, sectionId }: OrganizationHighlightsProps) {
  return (
    <section id={sectionId} aria-labelledby="organization-highlights-title">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-highlights-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => {
  const Icon = (highlight as any).icon ? ICON_MAP[(highlight as any).icon] : null;
  return (
    <article
      key={highlight.id}
      className="rounded-2xl border border-[#E6D7C5] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50"
    >
      {Icon && <Icon className="mx-auto h-12 w-12 text-[#B66B2A]" aria-hidden="true" />}
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#B66B2A]">{highlight.title}</p>
      <div aria-hidden="true" className="my-4 h-px w-10 bg-[#E6D7C5] mx-auto" />
      <p className="text-3xl font-bold tracking-tight text-[#0A1737] sm:text-4xl">
        {highlight.value}
        <span className="text-2xl font-bold text-[#B66B2A] sm:text-3xl">{highlight.suffix}</span>
      </p>
      <p className="mt-3 text-sm font-semibold text-[#0A1737]">{highlight.label}</p>
    </article>
  );
})}
      </div>
    </section>
  );
}