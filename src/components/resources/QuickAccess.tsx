import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { QuickAccessResource } from "@/content/resources";

interface QuickAccessProps { eyebrow: string; title: string; downloadLabel: string; resources: QuickAccessResource[]; }

export function QuickAccess({ eyebrow, title, downloadLabel, resources }: QuickAccessProps) {
  return <div className="space-y-8"><div className="space-y-3"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map((resource) => <Card key={resource.id} className="flex min-h-52 flex-col justify-between gap-6 border-[#E6D7C5]"><div className="space-y-3"><span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">{resource.fileType}</span><h3 className="text-lg font-semibold text-[#0A1737]">{resource.title}</h3><p className="text-sm leading-6 text-slate-700">{resource.description}</p></div><Link href={resource.downloadUrl} className="w-fit text-sm font-semibold text-[#0A1737] underline underline-offset-4 hover:text-[#B66B2A]">{downloadLabel} <span aria-hidden="true">↓</span></Link></Card>)}</div></div>;
}
