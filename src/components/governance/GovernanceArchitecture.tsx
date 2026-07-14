import { GovernanceLayer } from "@/components/governance/GovernanceLayer";
import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";
import { RoleInformationPanel } from "@/components/governance/RoleInformationPanel";

import type {
  GovernanceBridgeData,
  GovernanceLayerData,
  GovernanceNodeData,
  GovernanceRelationshipData,
} from "@/content/governance-structure";

interface GovernanceArchitectureProps {
  layers: GovernanceLayerData[];
  nodes: GovernanceNodeData[];
  bridges: GovernanceBridgeData[];
  relationships: GovernanceRelationshipData[];
  featuredNodeId: string;
}

export function GovernanceArchitecture({
  layers,
  nodes,
  bridges,
  relationships,
  featuredNodeId,
}: GovernanceArchitectureProps) {
  const nodesById = nodes.reduce<Record<string, GovernanceNodeData>>((collection, node) => {
    collection[node.id] = node;
    return collection;
  }, {});
  const featuredNode = nodesById[featuredNodeId] ?? nodes[0];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {layers.map((layer) => {
          const bridge = bridges.find((item) => item.afterLayerId === layer.id);

          return (
            <div key={layer.id}>
              <GovernanceLayer layer={layer} nodesById={nodesById} />
              {bridge ? (
                <GovernanceRelationship
                  type={bridge.type}
                  label={bridge.label}
                  className="py-6"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white/70 p-5 sm:grid-cols-2 lg:grid-cols-4">
        {relationships.slice(0, 4).map((relationship) => (
          <div key={relationship.id} className="space-y-2">
            <GovernanceRelationship type={relationship.type} orientation="horizontal" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {relationship.label}
            </p>
          </div>
        ))}
      </div>

      {featuredNode ? <RoleInformationPanel node={featuredNode} /> : null}
    </div>
  );
}
