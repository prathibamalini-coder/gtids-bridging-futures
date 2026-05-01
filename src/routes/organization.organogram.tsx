import { useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/organization/organogram")({
  head: () => ({
    meta: [
      { title: "Organogram — GTIDS" },
      {
        name: "description",
        content:
          "GTIDS organisational chart — Managing Director, GMs across Operations, MIS/BD, Finance, Insurance, HRD and Audit, with reporting hierarchy.",
      },
      { property: "og:title", content: "Organogram — GTIDS" },
      {
        property: "og:description",
        content: "How GTIDS is organised to deliver financial inclusion at scale.",
      },
    ],
  }),
  component: OrganogramPage,
});

type Tone = "top" | "gm" | "mid" | "low";

const toneStyle: Record<Tone, { background: string; color: string; ring: string }> = {
  top: {
    background:
      "linear-gradient(135deg, oklch(0.32 0.08 220) 0%, oklch(0.36 0.07 158) 100%)",
    color: "white",
    ring: "oklch(0.32 0.08 220 / 0.35)",
  },
  gm: {
    background:
      "linear-gradient(135deg, oklch(0.78 0.15 62) 0%, oklch(0.65 0.16 50) 100%)",
    color: "white",
    ring: "oklch(0.65 0.16 50 / 0.3)",
  },
  mid: {
    background:
      "linear-gradient(135deg, oklch(0.7 0.1 158) 0%, oklch(0.55 0.09 165) 100%)",
    color: "white",
    ring: "oklch(0.55 0.09 165 / 0.28)",
  },
  low: {
    background:
      "linear-gradient(180deg, oklch(0.99 0.005 200) 0%, oklch(0.95 0.01 195) 100%)",
    color: "oklch(0.22 0.02 160)",
    ring: "oklch(0.85 0.02 200)",
  },
};

interface OrgNodeData extends Record<string, unknown> {
  title: string;
  subtitle?: string;
  tone: Tone;
}

function OrgNode({ data }: NodeProps<Node<OrgNodeData>>) {
  const t = toneStyle[data.tone];
  const isTop = data.tone === "top";
  const isGm = data.tone === "gm";
  return (
    <div
      className="rounded-xl text-center font-sans"
      style={{
        background: t.background,
        color: t.color,
        border: `1px solid ${t.ring}`,
        boxShadow: `0 8px 22px -12px ${t.ring}, inset 0 1px 0 0 oklch(1 0 0 / 0.18)`,
        padding: isTop ? "14px 20px" : isGm ? "10px 16px" : "8px 14px",
        minWidth: isTop ? 200 : 170,
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{ opacity: 0, pointerEvents: "none" }}
      />
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: isTop ? 16 : isGm ? 14 : 12.5,
          lineHeight: 1.2,
        }}
      >
        {data.title}
      </div>
      {data.subtitle && (
        <div
          style={{
            marginTop: 3,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.78,
          }}
        >
          {data.subtitle}
        </div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0, pointerEvents: "none" }}
      />
    </div>
  );
}

const nodeTypes = { org: OrgNode };

interface Branch {
  id: string;
  head: string;
  subtitle: string;
  /** Multiple chains under one GM (e.g. HRD has 3 manager streams) */
  chains: { title: string; tone: Tone }[][];
}

const branches: Branch[] = [
  {
    id: "ops",
    head: "GM – Operations",
    subtitle: "Delivery",
    chains: [
      [
        { title: "Regional Manager", tone: "mid" },
        { title: "State Manager", tone: "mid" },
        { title: "Area Manager", tone: "low" },
        { title: "Area Supervisor", tone: "low" },
        { title: "Bank Mitras", tone: "low" },
      ],
    ],
  },
  {
    id: "mis",
    head: "GM – MIS / BD",
    subtitle: "Growth · Tech",
    chains: [
      [
        { title: "Manager – MIS / BD", tone: "mid" },
        { title: "MIS / BD Executives", tone: "low" },
      ],
    ],
  },
  {
    id: "fin",
    head: "GM – Finance",
    subtitle: "Finance",
    chains: [
      [
        { title: "Manager – Finance", tone: "mid" },
        { title: "Accounts Officer", tone: "low" },
        { title: "Accounts Executives", tone: "low" },
      ],
    ],
  },
  {
    id: "ins",
    head: "GM – Insurance",
    subtitle: "Insurance",
    chains: [
      [
        { title: "Manager – Insurance", tone: "mid" },
        { title: "Insurance Executive", tone: "low" },
        { title: "Insurance Exec. – State", tone: "low" },
      ],
    ],
  },
  {
    id: "hrd",
    head: "GM – HRD",
    subtitle: "People",
    chains: [
      [
        { title: "Manager – HRA", tone: "mid" },
        { title: "HR Executives", tone: "low" },
        { title: "HR / Admin Executives", tone: "low" },
      ],
      [
        { title: "Manager – Training", tone: "mid" },
        { title: "Training Officer", tone: "low" },
      ],
      [
        { title: "Manager – Admin", tone: "mid" },
        { title: "Admin Executives", tone: "low" },
      ],
    ],
  },
  {
    id: "aud",
    head: "Manager – Audit",
    subtitle: "Audit",
    chains: [
      [
        { title: "Internal Audit Executives", tone: "low" },
        { title: "IA Executive – State Office", tone: "low" },
      ],
    ],
  },
];

const NODE_W = 200; // visual node width incl. padding allowance
const COL_GAP = 60; // gap between sibling chains (HRD's three chains)
const BRANCH_GAP = 80; // gap between branches
const ROW_H = 90;

function buildGraph(): { nodes: Node<OrgNodeData>[]; edges: Edge[] } {
  const nodes: Node<OrgNodeData>[] = [];
  const edges: Edge[] = [];

  // 1) Compute width occupied by each branch (number of chains * NODE_W + gaps)
  const branchWidths = branches.map(
    (b) => b.chains.length * NODE_W + (b.chains.length - 1) * COL_GAP,
  );
  const totalWidth =
    branchWidths.reduce((a, b) => a + b, 0) +
    (branches.length - 1) * BRANCH_GAP;

  // 2) Position branch heads
  let cursorX = -totalWidth / 2;
  const branchHeadX: Record<string, number> = {};
  const chainXByBranch: Record<string, number[]> = {};

  branches.forEach((b, i) => {
    const bw = branchWidths[i];
    // Each chain center within branch
    const chainCenters: number[] = [];
    for (let c = 0; c < b.chains.length; c++) {
      const x = cursorX + c * (NODE_W + COL_GAP) + NODE_W / 2;
      chainCenters.push(x);
    }
    chainXByBranch[b.id] = chainCenters;
    // Branch head sits at the average of its chain centers
    branchHeadX[b.id] =
      chainCenters.reduce((a, c) => a + c, 0) / chainCenters.length;
    cursorX += bw + BRANCH_GAP;
  });

  // 3) MD at top, centered
  const MD_Y = 0;
  const GM_Y = 140;
  const FIRST_LEVEL_Y = GM_Y + ROW_H;

  nodes.push({
    id: "md",
    type: "org",
    position: { x: -NODE_W / 2, y: MD_Y },
    data: { title: "Managing Director", subtitle: "Leadership", tone: "top" },
    draggable: false,
  });

  // 4) Branch heads + edge from MD
  branches.forEach((b) => {
    const id = `head-${b.id}`;
    nodes.push({
      id,
      type: "org",
      position: { x: branchHeadX[b.id] - NODE_W / 2, y: GM_Y },
      data: { title: b.head, subtitle: b.subtitle, tone: "gm" },
      draggable: false,
    });
    edges.push({
      id: `e-md-${id}`,
      source: "md",
      target: id,
      type: "smoothstep",
      style: { stroke: "oklch(0.55 0.05 200)", strokeWidth: 1.6 },
    });
  });

  // 5) Each chain under each branch
  branches.forEach((b) => {
    b.chains.forEach((chain, ci) => {
      const x = chainXByBranch[b.id][ci];
      let parentId = `head-${b.id}`;
      chain.forEach((node, ri) => {
        const id = `${b.id}-${ci}-${ri}`;
        nodes.push({
          id,
          type: "org",
          position: { x: x - NODE_W / 2, y: FIRST_LEVEL_Y + ri * ROW_H },
          data: { title: node.title, tone: node.tone },
          draggable: false,
        });
        edges.push({
          id: `e-${parentId}-${id}`,
          source: parentId,
          target: id,
          type: "smoothstep",
          style: {
            stroke:
              node.tone === "low"
                ? "oklch(0.78 0.02 200)"
                : "oklch(0.6 0.05 200)",
            strokeWidth: 1.4,
          },
        });
        parentId = id;
      });
    });
  });

  return { nodes, edges };
}

function OrganogramPage() {
  const { nodes, edges } = useMemo(buildGraph, []);

  return (
    <>
      <PageHero
        eyebrow="Organization · Organogram"
        title="A clear, accountable structure."
        description="From the Managing Director down to field execution — pan, zoom and explore the GTIDS hierarchy."
      />

      <section className="container-prose pb-16">
        <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
          <div style={{ width: "100%", height: "78vh", minHeight: 600 }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.15 }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              proOptions={{ hideAttribution: true }}
              minZoom={0.25}
              maxZoom={1.6}
            >
              <Background gap={24} size={1} color="oklch(0.9 0.01 200)" />
              <Controls showInteractive={false} />
              <MiniMap
                pannable
                zoomable
                nodeColor={(n) => {
                  const tone = (n.data as OrgNodeData)?.tone ?? "low";
                  if (tone === "top") return "oklch(0.36 0.07 158)";
                  if (tone === "gm") return "oklch(0.78 0.15 62)";
                  if (tone === "mid") return "oklch(0.7 0.1 158)";
                  return "oklch(0.85 0.01 200)";
                }}
                maskColor="oklch(0.95 0.01 200 / 0.6)"
              />
            </ReactFlow>
          </div>

          {/* Legend */}
          <div className="border-t border-border bg-muted/30 px-5 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded"
                  style={{ background: toneStyle.top.background }}
                />
                Executive Leadership
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded"
                  style={{ background: toneStyle.gm.background }}
                />
                General Managers
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded"
                  style={{ background: toneStyle.mid.background }}
                />
                Managers
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded border border-border"
                  style={{ background: toneStyle.low.background }}
                />
                Executives &amp; Field
              </span>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Tip: drag to pan, scroll to zoom. Indicative structure — full organogram available on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
