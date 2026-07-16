"use client";

import { useState } from "react";

import { OrganizationCard } from "@/components/community/OrganizationCard";
import { Button } from "@/components/ui/Button";
import type { CommunityCategory, StudentOrganization } from "@/content/student-communities";

interface OrganizationExplorerProps {
  eyebrow: string;
  title: string;
  description: string;
  browseTitle: string;
  browseDescription: string;
  allCategoriesLabel: string;
  noResults: string;
  categories: readonly CommunityCategory[];
  organizations: StudentOrganization[];
}

export function OrganizationExplorer({ eyebrow, title, description, browseTitle, browseDescription, allCategoriesLabel, noResults, categories, organizations }: OrganizationExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<CommunityCategory | "all">("all");
  const visibleOrganizations = activeCategory === "all" ? organizations : organizations.filter((organization) => organization.category === activeCategory);

  return (
    <section id="organization-explorer" aria-labelledby="organization-explorer-title">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-explorer-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-8 border-y border-[#E6D7C5] py-6">
        <h3 className="text-lg font-semibold text-[#0A1737]">{browseTitle}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{browseDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label={browseTitle}>
        <Button type="button" size="sm" variant={activeCategory === "all" ? "primary" : "secondary"} onClick={() => setActiveCategory("all")}>{allCategoriesLabel}</Button>
        {categories.map((category) => (
          <Button key={category} type="button" size="sm" variant={activeCategory === category ? "primary" : "secondary"} onClick={() => setActiveCategory(category)}>{category}</Button>
        ))}
        </div>
      </div>
      {visibleOrganizations.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleOrganizations.map((organization) => <OrganizationCard key={organization.id} organization={organization} />)}
        </div>
      ) : <p className="mt-10 rounded-2xl border border-dashed border-[#D8C4AB] bg-white p-8 text-center text-slate-600">{noResults}</p>}
    </section>
  );
}
