import type { GovernanceNodeData } from "@/content/governance-structure";

interface RoleInformationPanelProps {
  node: GovernanceNodeData;
}

export function RoleInformationPanel({ node }: RoleInformationPanelProps) {
  return (
    <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-58px_rgba(10,23,55,0.6)] lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Role information model
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-[#0A1737]">
            {node.name}
          </h3>
          <p className="text-sm leading-6 text-slate-600">
            {node.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-[#0A1737]">Roles</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {node.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0A1737]">Responsibilities</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {node.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0A1737]">Reports To</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {node.reportsTo.length > 0 ? node.reportsTo.join(", ") : "Not part of a reporting line."}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0A1737]">Coordinates With</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {node.coordinatesWith.length > 0 ? node.coordinatesWith.join(", ") : "No coordination line defined."}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
