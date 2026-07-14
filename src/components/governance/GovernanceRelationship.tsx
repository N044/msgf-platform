import type { GovernanceRelationshipType } from "@/content/governance-structure";

interface GovernanceRelationshipProps {
  type: GovernanceRelationshipType;
  orientation?: "vertical" | "horizontal";
  label?: string;
  className?: string;
}

const solidClasses = {
  vertical: "h-10 w-px bg-[#0A1737]/25",
  horizontal: "h-px w-14 bg-[#0A1737]/25",
};

const borderClasses = {
  vertical: "h-10 w-0 border-l",
  horizontal: "h-0 w-14 border-t",
};

const arrowClasses = {
  vertical:
    "after:absolute after:bottom-0 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1/2 after:rotate-45 after:border-b after:border-r after:border-[#0A1737]/35",
  horizontal:
    "after:absolute after:right-0 after:top-1/2 after:h-2 after:w-2 after:translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:border-b after:border-r after:border-[#0A1737]/35",
};

export function GovernanceRelationship({
  type,
  orientation = "vertical",
  label,
  className = "",
}: GovernanceRelationshipProps) {
  const isBorderLine = type === "coordination" || type === "advisory";
  const lineBase = isBorderLine ? borderClasses[orientation] : solidClasses[orientation];
  const typeClass = {
    authority: "",
    coordination: "border-dashed border-[#0A1737]/30",
    advisory: "border-dotted border-emerald-500/60",
    reporting: `relative ${arrowClasses[orientation]}`,
  }[type];

  return (
    <div
      className={`flex items-center justify-center gap-3 ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      } ${className}`.trim()}
    >
      <div aria-hidden="true" className={`${lineBase} ${typeClass}`.trim()} />
      {label ? (
        <span className="max-w-[12rem] text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-500">
          {label}
        </span>
      ) : null}
    </div>
  );
}
