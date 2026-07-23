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

  const clubsNode = nodesById["students-clubs-and-societies"];
  const execNode = nodesById["executive-committee"];
  const facultyNode = nodesById["faculty-students-society"];

  if (
    !union ||
    !council ||
    !clubsNode ||
    !execNode ||
    !facultyNode ||
    children.length !== hierarchy.childNodeIds.length ||
    executiveCells.length !== hierarchy.executiveCellNodeIds.length
  ) {
    return null;
  }

  return (
    <div className="relative mx-auto mt-8 max-w-6xl">
      {/* ── UNION AT TOP (centered) ── */}
      <div className="mx-auto w-full max-w-[17rem]">
        <GovernanceNode node={union} className="h-52" />
      </div>

      {/* Stem from union down */}
      <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#0A1737]/25" />

      {/* ── DESKTOP LAYOUT ── */}
      <div className="relative hidden lg:block">
        {/* Branch from Union: splits to Council (center) and HMPS (col 3) */}
        <div className="relative h-8">
          {/* Horizontal bar from Council center to col 3 center */}
          <div
            aria-hidden="true"
            className="absolute left-[20rem] right-[calc((100%-2rem)/6)] top-0 h-px bg-[#0A1737]/25"
          />
          {/* Stem down to Council (centered on card at 20rem) */}
          <div
            aria-hidden="true"
            className="absolute left-[20rem] top-0 h-8 w-px -translate-x-1/2 bg-[#0A1737]/25"
          />
        </div>

        {/* Long stem from Union to HMPS — at col 3 center */}
        <div
          aria-hidden="true"
          className="absolute right-[calc((100%-2rem)/6)] top-0 w-px -translate-x-1/2 bg-[#0A1737]/25"
          style={{ height: '25rem' }}
        />

        {/* ── COUNCIL ── */}
        <div className="w-full max-w-[40rem]">
          <GovernanceNode node={council} className="h-auto min-h-[12rem]" />
        </div>

        {/* Branch from Council to Clubs and Executive Committee */}
        <div className="relative h-8 w-full max-w-[40rem]">
          {/* Stem from Council to horizontal bar */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-[#0A1737]/25"
          />
          {/* Horizontal bar from col 1 center to col 2 center */}
          <div
            aria-hidden="true"
            className="absolute left-[calc((100%-1rem)/4)] right-[calc((100%-1rem)/4)] top-8 h-px bg-[#0A1737]/25"
          />
          {/* Stem to Clubs & Societies */}
          <div
            aria-hidden="true"
            className="absolute left-[calc((100%-1rem)/4)] top-8 h-12 w-px -translate-x-1/2 bg-[#0A1737]/25"
          />
          {/* Stem to Executive Committee */}
          <div
            aria-hidden="true"
            className="absolute left-[calc(100%-(100%-1rem)/4)] top-8 h-12 w-px -translate-x-1/2 bg-[#0A1737]/25"
          />
        </div>

        {/* Row 2: Clubs & Societies + Executive Committee + HMPS (same level) */}
        <div className="flex items-stretch gap-4">
          {/* Left section: Clubs + Exec under Council */}
          <div className="w-full max-w-[40rem] shrink-0">
            <div className="grid grid-cols-2 gap-4">
              {/* Clubs & Societies — left column */}
              <div className="mt-8">
                <GovernanceNode node={clubsNode} className="h-auto">
                  {hierarchy.clubSocietyNames ? (
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
                </GovernanceNode>
              </div>

              {/* Executive Committee */}
              <div className="mt-8">
                <GovernanceNode node={execNode} className="h-auto">
                  {executiveCells.length > 0 ? (
                    executiveCells.map((cell) => (
                      <GovernanceNode key={cell.id} node={cell} />
                    ))
                  ) : null}
                </GovernanceNode>
              </div>
            </div>
          </div>

          {/* Right section: HMPS at same level as Clubs & Exec */}
          <div className="flex min-w-0 flex-1 pt-8">
            <div className="w-full">
              <GovernanceNode node={facultyNode} className="h-auto">
                {hierarchy.hmpsChildNames ? (
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
          </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="mt-4 space-y-4 lg:hidden">
        {/* Council */}
        <GovernanceNode node={council} className="h-auto min-h-[12rem]" />

        {/* Stem from Council to Clubs & Exec */}
        <div className="flex justify-center py-4">
          <div aria-hidden="true" className="h-8 w-px bg-[#0A1737]/25" />
        </div>

        {/* Clubs & Societies */}
        <GovernanceNode node={clubsNode} className="h-auto">
          {hierarchy.clubSocietyNames ? (
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
        </GovernanceNode>

        {/* Relationship between Clubs and Exec */}
        <GovernanceRelationship type="authority" className="py-4" />

        {/* Executive Committee */}
        <GovernanceNode node={execNode} className="h-auto">
          {executiveCells.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {executiveCells.map((cell) => (
                <GovernanceNode key={cell.id} node={cell} />
              ))}
            </div>
          ) : null}
        </GovernanceNode>

        {/* Separator: HMPS is connected to Union, not Council */}
        <div className="flex justify-center py-4">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#0A1737]/25" />
            <span className="text-[0.55rem] font-semibold uppercase tracking-widest text-slate-400">
              Direct from Union
            </span>
            <span className="h-px w-8 bg-[#0A1737]/25" />
          </div>
        </div>

        {/* HMPS (Faculty Students' Society) */}
        <GovernanceNode node={facultyNode} className="h-auto">
          {hierarchy.hmpsChildNames ? (
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
    </div>
  );
}
