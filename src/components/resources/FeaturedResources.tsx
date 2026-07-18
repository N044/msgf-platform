import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { FeaturedResource, GovernanceResource } from "@/content/resources";

interface FeaturedResourcesProps {
  eyebrow: string;
  title: string;
  resources: FeaturedResource[];
  allResources: GovernanceResource[];
}

export function FeaturedResources({ eyebrow, title, resources, allResources }: FeaturedResourcesProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B66B2A]">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {resources.map((resource) => {
          const linkedResource = allResources.find((item) => item.id === resource.resourceId);
          return (
            <Card key={resource.id} className="flex min-h-64 flex-col justify-between gap-8 border-[#E6D7C5]">
              <div className="space-y-4"><span className="inline-flex rounded-full bg-[#F8F4EC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0A1737]">Featured</span><h3 className="text-xl font-semibold text-[#0A1737]">{resource.title}</h3><p className="leading-7 text-slate-700">{resource.description}</p></div>
              {linkedResource ? <Link href={linkedResource.downloadUrl} className="w-fit text-sm font-semibold text-[#0A1737] underline underline-offset-4 hover:text-[#B66B2A]">View resource <span aria-hidden="true">→</span></Link> : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
