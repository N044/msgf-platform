"use client";

import { useState } from "react";

import type { OrganizationDetailCard } from "@/content/students-union";

interface OrganizationRoleExplorerProps {
  eyebrow: string;
  title: string;
  instruction: string;
  selectedRoleLabel: string;
  items: OrganizationDetailCard[];
}

export function OrganizationRoleExplorer({ eyebrow, title, instruction, selectedRoleLabel, items }: OrganizationRoleExplorerProps) {
  const [activeRoleId, setActiveRoleId] = useState(items[0]?.id);
  const activeRole = items.find((item) => item.id === activeRoleId) ?? items[0];

  if (!activeRole) return null;

  return (
    <section id="roles" aria-labelledby="organization-roles-title">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">{eyebrow}</p>
        <h2 id="organization-roles-title" className="text-3xl font-semibold tracking-tight text-[#0A1737] sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-600">{instruction}</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const isActive = item.id === activeRole.id;

          return (
            <button key={item.id} type="button" aria-pressed={isActive} onClick={() => setActiveRoleId(item.id)} className={`rounded-2xl border p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] ${isActive ? "border-[#0A1737] bg-[#0A1737] text-white" : "border-[#E6D7C5] bg-white text-[#0A1737] hover:border-[#CDB394]"}`}>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B66B2A]">{String(items.indexOf(item) + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="mt-5 rounded-2xl border border-[#D8C4AB] bg-[#FFF7EC] p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B66B2A]">{selectedRoleLabel}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A1737]">{activeRole.title}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{activeRole.description}</p>
      </div>
    </section>
  );
}
