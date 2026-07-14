import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";

import type { GovernanceLegendItem } from "@/content/governance-structure";

interface GovernanceLegendProps {
  items: GovernanceLegendItem[];
}

export function GovernanceLegend({ items }: GovernanceLegendProps) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 shadow-[0_20px_70px_-56px_rgba(10,23,55,0.6)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.type} className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-3">
            <GovernanceRelationship type={item.type} orientation="horizontal" />
            <div>
              <p className="text-sm font-semibold text-[#0A1737]">{item.label}</p>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
