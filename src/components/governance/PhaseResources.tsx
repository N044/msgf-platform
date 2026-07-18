import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { GovernanceJourneyRelatedResource } from "@/content/governance-journey";

interface PhaseResourcesProps { resources: GovernanceJourneyRelatedResource[]; }

export function PhaseResources({ resources }: PhaseResourcesProps) {
  return <section><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B66B2A]">Related resources</p><h4 className="mt-2 text-2xl font-semibold text-[#0A1737]">Continue in the Governance Library.</h4></div><span aria-hidden="true" className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7EC] text-xl text-[#B66B2A] sm:flex">↗</span></div><div className="mt-6 grid gap-4 md:grid-cols-2">{resources.map((resource, index) => <Card key={resource.id} className="flex flex-col justify-between gap-5 border-[#E6D7C5] border-t-4 border-t-[#B66B2A]"><div><span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B66B2A]">Library link {String(index + 1).padStart(2, "0")}</span><h5 className="mt-3 text-lg font-semibold text-[#0A1737]">{resource.title}</h5><p className="mt-2 leading-7 text-slate-700">{resource.description}</p></div><Link href={resource.href} className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0A1737] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B66B2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2">Open resources <span aria-hidden="true">→</span></Link></Card>)}</div></section>;
}
