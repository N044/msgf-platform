"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { GovernanceResource, ResourceTaskId } from "@/content/resources";

interface ResourceLibraryProps {
  eyebrow: string;
  title: string;
  searchLabel: string;
  searchPlaceholder: string;
  resultsLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  downloadLabel: string;
  resources: GovernanceResource[];
  selectedTaskId: ResourceTaskId | null;
}

export function ResourceLibrary({ eyebrow, title, searchLabel, searchPlaceholder, resultsLabel, emptyTitle, emptyDescription, downloadLabel, resources, selectedTaskId }: ResourceLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredResources = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesTask = selectedTaskId === null || resource.taskIds.includes(selectedTaskId);
      const searchableContent = `${resource.title} ${resource.category} ${resource.fileType} ${resource.description}`.toLowerCase();
      return matchesTask && searchableContent.includes(normalizedSearch);
    });
  }, [resources, searchTerm, selectedTaskId]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="space-y-3"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2></div><div className="w-full lg:max-w-md"><label htmlFor="resource-search" className="sr-only">{searchLabel}</label><input id="resource-search" type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder={searchPlaceholder} className="w-full rounded-full border border-[#D8C4AB] bg-white px-5 py-3 text-[#0A1737] outline-none placeholder:text-slate-600 focus:border-[#0A1737] focus:ring-2 focus:ring-[#0A1737]/10" /></div></div>
      <p className="text-sm font-medium text-slate-700">{filteredResources.length} {resultsLabel}</p>
      {filteredResources.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredResources.map((resource) => <Card key={resource.id} className="flex min-h-64 flex-col justify-between gap-8 border-[#E6D7C5]"><div className="space-y-4"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"><span>{resource.category}</span><span aria-hidden="true">•</span><span>{resource.fileType}</span></div><h3 className="text-xl font-semibold text-[#0A1737]">{resource.title}</h3><p className="leading-7 text-slate-700">{resource.description}</p></div><Link href={resource.downloadUrl} className="w-fit text-sm font-semibold text-[#0A1737] underline underline-offset-4 hover:text-[#B66B2A]">{downloadLabel} <span aria-hidden="true">↓</span></Link></Card>)}</div> : <Card className="border-[#E6D7C5] py-12 text-center"><h3 className="text-xl font-semibold text-[#0A1737]">{emptyTitle}</h3><p className="mt-2 text-slate-700">{emptyDescription}</p></Card>}
    </div>
  );
}
