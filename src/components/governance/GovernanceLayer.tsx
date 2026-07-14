import { GovernanceNode } from "@/components/governance/GovernanceNode";
import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";

import type {
  GovernanceLayerData,
  GovernanceNodeData,
  GovernanceTone,
} from "@/content/governance-structure";

interface GovernanceLayerProps {
  layer: GovernanceLayerData;
  nodesById: Record<string, GovernanceNodeData>;
}

const columnToneClasses: Record<GovernanceTone, string> = {
  institutional: "border-slate-200 bg-slate-50/80",
  academic: "border-sky-100 bg-sky-50/50",
  studentAffairs: "border-[#E6D7C5] bg-[#FFF8F0]",
  student: "border-slate-200 bg-slate-50/80",
  advisory: "border-emerald-100 bg-emerald-50/50",
};

export function GovernanceLayer({ layer, nodesById }: GovernanceLayerProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_80px_-58px_rgba(10,23,55,0.55)] sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          {layer.eyebrow}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#0A1737] sm:text-3xl">
          {layer.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600 sm:text-base">
          {layer.description}
        </p>
      </div>

      <div className={`mt-8 grid gap-6 ${layer.columns.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {layer.columns.map((column) => (
          <div
            key={column.id}
            className={`rounded-[1.5rem] border p-5 sm:p-6 ${columnToneClasses[column.tone]}`}
          >
            <div className="mb-6 space-y-2">
              <h4 className="text-lg font-semibold tracking-tight text-[#0A1737]">
                {column.title}
              </h4>
              <p className="text-sm leading-6 text-slate-600">
                {column.description}
              </p>
            </div>

            <div>
              {column.rows.map((row, rowIndex) => (
                <div key={`${column.id}-${row.nodeIds.join("-")}-${rowIndex}`}>
                  <div className={`grid gap-4 ${row.nodeIds.length > 1 ? "sm:grid-cols-2" : ""}`}>
                    {row.nodeIds.map((nodeId) => {
                      const node = nodesById[nodeId];

                      if (!node) {
                        return null;
                      }

                      return (
                        <GovernanceNode
                          key={`${column.id}-${rowIndex}-${node.id}`}
                          node={node}
                          compact={row.variant === "compact"}
                        />
                      );
                    })}
                  </div>

                  {row.relationshipToNext ? (
                    <GovernanceRelationship
                      type={row.relationshipToNext}
                      label={row.relationshipLabel}
                      className="py-4"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
