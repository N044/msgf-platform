import Link from "next/link";

import type { OrganizationContact, OrganizationResource } from "@/content/students-union";

interface OrganizationResourcesProps {
  eyebrow: string;
  title: string;
  items: OrganizationResource[];
  sectionId?: string;
}

interface OrganizationContactProps {
  eyebrow: string;
  title: string;
  items: OrganizationContact[];
}

export function OrganizationResources({ eyebrow, title, items, sectionId }: OrganizationResourcesProps) {
  return (
    <section id={sectionId} aria-labelledby="organization-resources-title">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-resources-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#E6D7C5] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0A1737]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold text-[#B66B2A] hover:text-[#0A1737]">
              {item.actionLabel} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OrganizationContact({ eyebrow, title, items }: OrganizationContactProps) {
  return (
    <section id="contact" aria-labelledby="organization-contact-title">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{eyebrow}</p>
        <h2 id="organization-contact-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <a key={item.id} href={item.href} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center transition-colors hover:bg-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
            <p className="mt-3 break-words text-sm font-medium text-white">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
