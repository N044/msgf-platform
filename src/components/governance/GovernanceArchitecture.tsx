import { GovernanceLayer } from "@/components/governance/GovernanceLayer";
import { GovernanceRelationship } from "@/components/governance/GovernanceRelationship";

import type {
  GovernanceBridgeData,
  GovernanceLayerData,
  GovernanceNodeData,
} from "@/content/governance-structure";

interface GovernanceArchitectureProps {
  layers: GovernanceLayerData[];
  nodes: GovernanceNodeData[];
  bridges: GovernanceBridgeData[];
}

export function GovernanceArchitecture({
  layers,
  nodes,
  bridges,
}: GovernanceArchitectureProps) {
  const nodesById = nodes.reduce<Record<string, GovernanceNodeData>>((collection, node) => {
    collection[node.id] = node;
    return collection;
  }, {});

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
                  direction="up"
                  className="py-6"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
