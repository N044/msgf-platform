import type { ReactNode } from "react";
import type {
  GovernanceNodeData,
  GovernanceNodeVisualVariant,
  GovernanceTone,
} from "@/content/governance-structure";

interface GovernanceNodeProps {
  node: GovernanceNodeData;
  compact?: boolean;
  className?: string;
  children?: ReactNode;
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

const visualVariantClasses: Record<GovernanceNodeVisualVariant, string> = {
  standard: "",
  union: "border-[#0A1737] bg-[#0A1737] shadow-[0_24px_64px_-42px_rgba(10,23,55,0.9)]",
  council: "border-2 border-[#0A1737] bg-[#FFF8F0] shadow-[0_22px_60px_-44px_rgba(10,23,55,0.7)]",
  cell: "rounded-[1rem] border-dashed border-[#C8D0DF] bg-slate-50 p-4 shadow-[0_16px_42px_-34px_rgba(10,23,55,0.45)]",
};

const visualMarkerClasses: Record<GovernanceNodeVisualVariant, string> = {
  standard: "",
  union: "bg-[#E78938]",
  council: "bg-[#0A1737]",
  cell: "h-2 w-2 rounded-sm bg-[#0A1737]",
};

const visualTextClasses: Record<
  GovernanceNodeVisualVariant,
  { layer: string; title: string; description: string }
> = {
  standard: {
    layer: "text-slate-500",
    title: "text-[#0A1737]",
    description: "text-slate-600",
  },
  union: {
    layer: "text-slate-300",
    title: "text-white",
    description: "text-slate-200",
  },
  council: {
    layer: "text-[#B66B2A]",
    title: "text-[#0A1737]",
    description: "text-slate-600",
  },
  cell: {
    layer: "text-slate-500",
    title: "text-base leading-5 text-[#0A1737]",
    description: "text-xs leading-5 text-slate-600",
  },
};

export function GovernanceNode({ node, compact = false, className = "", children }: GovernanceNodeProps) {
  const visualVariant = node.visualVariant ?? "standard";
  const textClasses = visualTextClasses[visualVariant];

  if (visualVariant === "union") {
    return (
      <article
        tabIndex={0}
        data-node-id={node.id}
        data-future-route={node.futurePath}
        className={`group relative flex flex-col items-center justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 ${className}`}
      >
        <div className="flex w-full items-center gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-[#0A1737]/25" />
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#0A1737] bg-white shadow-[0_12px_30px_-22px_rgba(10,23,55,0.75)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#E78938]" />
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#0A1737]/25" />
        </div>
        <div className="mt-3 max-w-sm space-y-1.5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            {node.layer}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-[#0A1737]">{node.name}</h3>
          {!compact ? <p className="text-sm leading-6 text-slate-600">{node.description}</p> : null}
        </div>

        {/* Stem down to connection line */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-8 w-px -translate-x-1/2 bg-[#0A1737]/25"
        />
      </article>
    );
  }

  if (visualVariant === "cell") {
    const shortName = node.name.replace(/ Cell$/, "");

    return (
      <div
        tabIndex={0}
        data-node-id={node.id}
        data-future-route={node.futurePath}
        className={`group flex flex-col items-center justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 ${className}`}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8D0DF] px-3 py-1">
          <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#0A1737]" />
          <span className="text-xs font-medium leading-tight text-[#0A1737]">
            {shortName}
          </span>
        </span>
      </div>
    );
  }

  if (visualVariant === "council") {
    return (
      <article
        tabIndex={0}
        data-node-id={node.id}
        data-future-route={node.futurePath}
        className={`group relative flex flex-col justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 ${className}`}
      >
        {/* Card wrapper — left-aligns the board card */}
        <div className="flex w-full justify-start">
          <div className="flex w-full max-w-[40rem] flex-col items-center gap-4 rounded-2xl border-2 border-[#0A1737] bg-white px-6 py-6 shadow-[0_16px_48px_-36px_rgba(10,23,55,0.6)]">
            {/* Multi-diamond row — each diamond represents a constituency on the board */}
            <div className="flex items-center gap-1.5">
              <span className="block h-2 w-2 rotate-45 border border-[#0A1737]/40 bg-[#FFF8F0]" />
              <span className="block h-2 w-2 rotate-45 border border-[#0A1737]/60 bg-[#FFF8F0]" />
              <span className="block h-[1.125rem] w-[1.125rem] rotate-45 border-2 border-[#0A1737] bg-[#FFF8F0] shadow-[0_4px_12px_-8px_rgba(10,23,55,0.35)]" />
              <span className="block h-2 w-2 rotate-45 border border-[#0A1737]/60 bg-[#FFF8F0]" />
              <span className="block h-2 w-2 rotate-45 border border-[#0A1737]/40 bg-[#FFF8F0]" />
            </div>

            <div className="space-y-1">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#B66B2A]">
                {node.layer}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#0A1737]">
                {node.name}
              </h3>
            </div>

            {!compact ? (
              <div className="w-full space-y-3 border-t border-[#0A1737]/10 pt-4">
                <p className="mx-auto max-w-xs text-sm leading-6 text-slate-600">
                  {node.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      tabIndex={0}
      data-node-id={node.id}
      data-future-route={node.futurePath}
      className={`group relative rounded-[1.4rem] border p-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78938] focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:border-[#E78938] hover:shadow-[0_28px_70px_-44px_rgba(231,137,56,0.65)] ${toneClasses[node.tone]} ${visualVariantClasses[visualVariant]} ${className}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${markerClasses[node.tone]} ${visualMarkerClasses[visualVariant]}`}
        />
        <div className="min-w-0 space-y-2">
          <p
            className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${textClasses.layer}`}
          >
            {node.layer}
          </p>
          <h3
            className={`text-lg font-semibold leading-6 tracking-tight ${textClasses.title}`}
          >
            {node.name}
          </h3>
          {!compact ? (
            <p className={`text-sm leading-6 ${textClasses.description}`}>
              {node.description}
            </p>
          ) : null}
          {children ? (
            <div className="flex flex-wrap gap-2 pt-3">{children}</div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
