import { GovernanceNode } from "@/components/governance/GovernanceNode";
import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";

import type {
  GovernanceNodeData,
  GovernanceStudentGovernanceHierarchyData,
} from "@/content/governance-structure";

interface StudentGovernanceHierarchyProps {
  hierarchy: GovernanceStudentGovernanceHierarchyData;
  nodesById: Record<string, GovernanceNodeData>;
}

export function StudentGovernanceHierarchy({
  hierarchy,
  nodesById,
}: StudentGovernanceHierarchyProps) {
  const union = nodesById[hierarchy.unionNodeId];
  const council = nodesById[hierarchy.councilNodeId];
  const children = hierarchy.childNodeIds
    .map((nodeId) => nodesById[nodeId])
    .filter((node): node is GovernanceNodeData => Boolean(node));
  const executiveCells = hierarchy.executiveCellNodeIds
    .map((nodeId) => nodesById[nodeId])
    .filter((node): node is GovernanceNodeData => Boolean(node));

  if (
    !union ||
    !council ||
    children.length !== hierarchy.childNodeIds.length ||
    executiveCells.length !== hierarchy.executiveCellNodeIds.length
  ) {
    return null;
  }

  return (
    <div className="relative mx-auto mt-8 max-w-6xl">
      <div
        aria-hidden="true"
        className="absolute left-1/2 right-[16.67%] top-[13rem] hidden h-px bg-[#0A1737]/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-[16.67%] top-[13rem] hidden h-[19rem] w-px bg-[#0A1737]/25 lg:block"
      />
      <div className="mx-auto w-full max-w-[17rem]">
        <GovernanceNode node={union} className="h-52" />
      </div>

      <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#0A1737]/25" />

      <div className="mx-auto w-full max-w-[17rem]">
        <GovernanceNode node={council} className="h-52" />
      </div>

      <div className="hidden lg:block">
        <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#0A1737]/25" />
        <div className="relative grid grid-cols-3 gap-4 pt-8">
          <div
            aria-hidden="true"
            className="absolute left-[16.67%] right-[50%] top-0 h-px bg-[#0A1737]/25"
          />
          {children.map((child) => (
            <div
              key={child.id}
              className={
                child.id === hierarchy.unionConnectedChildNodeId
                  ? "relative"
                  : "relative before:absolute before:left-1/2 before:-top-8 before:h-8 before:w-px before:-translate-x-1/2 before:bg-[#0A1737]/25"
              }
            >
              <GovernanceNode
                node={child}
                className={
                  child.id === "students-clubs-and-societies" || child.id === "faculty-students-society"
                    ? "h-auto"
                    : "h-52"
                }
              >
                {child.id === hierarchy.executiveNodeId && executiveCells.length > 0 ? (
                  executiveCells.map((cell) => (
                    <GovernanceNode key={cell.id} node={cell} />
                  ))
                ) : null}
                {child.id === "students-clubs-and-societies" && hierarchy.clubSocietyNames ? (
                  <div className="space-y-3">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-sm bg-red-600" />
                        <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                          Clubs
                        </span>
                        <span className="h-px flex-1 bg-slate-200" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hierarchy.clubSocietyNames
                          .filter((n) => n.includes("Club"))
                          .map((name) => (
                            <span
                              key={name}
                              className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-400" />
                              <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                                {name}
                              </span>
                            </span>
                          ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-sm bg-yellow-500" />
                        <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                          Societies
                        </span>
                        <span className="h-px flex-1 bg-slate-200" />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hierarchy.clubSocietyNames
                          .filter((n) => n.includes("Society"))
                          .map((name) => (
                            <span
                              key={name}
                              className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-400" />
                              <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                                {name}
                              </span>
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                ) : null}
                {child.id === "faculty-students-society" && hierarchy.hmpsChildNames ? (
                  <div className="space-y-2">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-sm bg-sky-600" />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                        Study Programs
                      </span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hierarchy.hmpsChildNames.map((name) => (
                        <span
                          key={name}
                          className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-600" />
                          <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                            {name}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </GovernanceNode>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-4 lg:hidden">
        {children.map((child, index) => (
          <div key={child.id}>
            <GovernanceNode
              node={child}
              className={
                child.id === "students-clubs-and-societies" || child.id === "faculty-students-society"
                  ? "h-auto"
                  : "h-52"
              }>
              {child.id === hierarchy.executiveNodeId && executiveCells.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {executiveCells.map((cell) => (
                    <GovernanceNode key={cell.id} node={cell} />
                  ))}
                </div>
              ) : null}
              {child.id === "students-clubs-and-societies" && hierarchy.clubSocietyNames ? (
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-sm bg-red-600" />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                        Clubs
                      </span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hierarchy.clubSocietyNames
                        .filter((n) => n.includes("Club"))
                        .map((name) => (
                          <span
                            key={name}
                            className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-400" />
                            <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                              {name}
                            </span>
                          </span>
                        ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-2 w-2 shrink-0 rounded-sm bg-yellow-500" />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                        Societies
                      </span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hierarchy.clubSocietyNames
                        .filter((n) => n.includes("Society"))
                        .map((name) => (
                          <span
                            key={name}
                            className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-slate-400" />
                            <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                              {name}
                            </span>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ) : null}
              {child.id === "faculty-students-society" && hierarchy.hmpsChildNames ? (
                <div className="space-y-2">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-sm bg-sky-600" />
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                      Study Programs
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hierarchy.hmpsChildNames.map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-1 rounded-full border border-[#C8D0DF] px-2.5 py-0.5"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-600" />
                        <span className="text-[0.6rem] font-medium leading-tight text-[#0A1737]">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </GovernanceNode>
            {index < children.length - 1 ? (
              <GovernanceRelationship type="authority" className="py-4" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
