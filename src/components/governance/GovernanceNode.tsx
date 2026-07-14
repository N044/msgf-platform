import type { GovernanceNodeData, GovernanceTone } from "@/content/governance-structure";

interface GovernanceNodeProps {
  node: GovernanceNodeData;
  compact?: boolean;
}

const toneClasses: Record<GovernanceTone, string> = {
  institutional: "border-[#C8D0DF] bg-white shadow-[0_22px_60px_-44px_rgba(10,23,55,0.75)]",
  academic: "border-[#D5DEEA] bg-white shadow-[0_22px_60px_-46px_rgba(37,99,235,0.55)]",
  studentAffairs: "border-[#E6D7C5] bg-white shadow-[0_22px_60px_-46px_rgba(231,137,56,0.55)]",
  student: "border-[#E6D7C5] bg-white shadow-[0_22px_60px_-46px_rgba(10,23,55,0.55)]",
  advisory: "border-emerald-200 bg-white shadow-[0_22px_60px_-46px_rgba(16,185,129,0.45)]",
};

const markerClasses: Record<GovernanceTone, string> = {
  institutional: "bg-[#0A1737]",
  academic: "bg-sky-600",
  studentAffairs: "bg-[#E78938]",
  student: "bg-slate-500",
  advisory: "bg-emerald-500",
};

export function GovernanceNode({ node, compact = false }: GovernanceNodeProps) {
  return (
    <article
      tabIndex={0}
      data-node-id={node.id}
      data-future-route={node.futurePath}
      className={`group relative rounded-[1.4rem] border p-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:border-[#E78938] hover:shadow-[0_28px_70px_-44px_rgba(231,137,56,0.65)] ${toneClasses[node.tone]}`}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${markerClasses[node.tone]}`} />
        <div className="min-w-0 space-y-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {node.layer}
          </p>
          <h3 className="text-lg font-semibold leading-6 tracking-tight text-[#0A1737]">
            {node.name}
          </h3>
          {!compact ? (
            <p className="text-sm leading-6 text-slate-600">
              {node.description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
