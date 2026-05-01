import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/organization/organogram")({
  head: () => ({
    meta: [
      { title: "Organogram — GTIDS" },
      {
        name: "description",
        content:
          "GTIDS organisational chart — Managing Director, GMs across Operations, MIS/BD, Finance, Insurance, HRD and Audit, with their reporting hierarchy.",
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

const toneStyle: Record<
  Tone,
  { background: string; color: string; ring: string }
> = {
  top: {
    background:
      "linear-gradient(135deg, oklch(0.32 0.08 220) 0%, oklch(0.36 0.07 158) 100%)",
    color: "white",
    ring: "oklch(0.32 0.08 220 / 0.25)",
  },
  gm: {
    background:
      "linear-gradient(135deg, oklch(0.78 0.15 62) 0%, oklch(0.65 0.16 50) 100%)",
    color: "white",
    ring: "oklch(0.65 0.16 50 / 0.25)",
  },
  mid: {
    background:
      "linear-gradient(135deg, oklch(0.7 0.1 158) 0%, oklch(0.55 0.09 165) 100%)",
    color: "white",
    ring: "oklch(0.55 0.09 165 / 0.22)",
  },
  low: {
    background:
      "linear-gradient(180deg, oklch(0.98 0.005 200) 0%, oklch(0.94 0.01 195) 100%)",
    color: "var(--color-foreground)",
    ring: "oklch(0.85 0.02 200 / 0.6)",
  },
};

function Node({
  title,
  subtitle,
  tone,
  size = "md",
}: {
  title: string;
  subtitle?: string;
  tone: Tone;
  size?: "sm" | "md" | "lg";
}) {
  const t = toneStyle[tone];
  const pad =
    size === "lg" ? "px-6 py-4" : size === "sm" ? "px-3 py-2" : "px-4 py-3";
  const titleSize =
    size === "lg" ? "text-base md:text-lg" : size === "sm" ? "text-[12px]" : "text-sm";
  return (
    <div
      className={`rounded-xl ${pad} text-center shadow-soft min-w-[150px]`}
      style={{
        background: t.background,
        color: t.color,
        border: `1px solid ${t.ring}`,
        boxShadow: `0 10px 24px -14px ${t.ring}, inset 0 1px 0 0 oklch(1 0 0 / 0.18)`,
      }}
    >
      <div className={`font-display ${titleSize} leading-tight font-medium`}>
        {title}
      </div>
      {subtitle && (
        <div
          className="mt-1 text-[10px] uppercase tracking-[0.14em] opacity-80"
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}

/* Connecting line helpers — pure CSS, no SVG needed */
function VLine({ h = 20 }: { h?: number }) {
  return (
    <div
      aria-hidden
      style={{ height: h }}
      className="w-px bg-border mx-auto"
    />
  );
}

/**
 * A vertical chain of nodes connected by short vertical lines.
 * Used for sub-trees beneath each GM.
 */
function VerticalChain({ items }: { items: { title: string; tone: Tone }[] }) {
  return (
    <div className="flex flex-col items-stretch gap-0">
      {items.map((it, i) => (
        <div key={`${it.title}-${i}`} className="flex flex-col items-stretch">
          {i > 0 && <VLine h={16} />}
          <Node title={it.title} tone={it.tone} size="sm" />
        </div>
      ))}
    </div>
  );
}

interface Branch {
  head: string;
  /** Optional secondary chains under the same GM (e.g. HRD has multiple managers) */
  chains: { title: string; tone: Tone }[][];
}

const branches: Branch[] = [
  {
    head: "GM – Operations",
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
    head: "GM – MIS / Business Development",
    chains: [
      [
        { title: "Manager – MIS / BD", tone: "mid" },
        { title: "MIS / BD Executives", tone: "low" },
      ],
    ],
  },
  {
    head: "GM – Finance",
    chains: [
      [
        { title: "Manager – Finance", tone: "mid" },
        { title: "Accounts Officer", tone: "low" },
        { title: "Accounts Executives", tone: "low" },
      ],
    ],
  },
  {
    head: "GM – Insurance",
    chains: [
      [
        { title: "Manager – Insurance", tone: "mid" },
        { title: "Insurance Executive", tone: "low" },
        { title: "Insurance Executive – State Office", tone: "low" },
      ],
    ],
  },
  {
    head: "GM – HRD",
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
    head: "Manager – Audit",
    chains: [
      [
        { title: "Internal Audit Executives", tone: "low" },
        { title: "IA Executive – State Office", tone: "low" },
      ],
    ],
  },
];

function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Organization · Organogram"
        title="A clear, accountable structure."
        description="From the Managing Director down to field-level execution — purpose-built for transparent, scalable delivery."
      />

      <section className="container-prose pb-16">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-12 shadow-soft overflow-x-auto">
          <div className="min-w-[1100px]">
            {/* Level 1 — Managing Director */}
            <div className="flex justify-center">
              <Node title="Managing Director" subtitle="Leadership" tone="top" size="lg" />
            </div>

            <VLine h={28} />

            {/* Horizontal bar connecting all branches */}
            <div className="relative">
              <div className="grid grid-cols-6 gap-4">
                {branches.map((b) => (
                  <div key={b.head} className="flex flex-col items-stretch">
                    {/* small vertical drop into each branch from the bar */}
                    <div
                      aria-hidden
                      className="h-5 w-px bg-border mx-auto"
                    />
                    <Node
                      title={b.head}
                      subtitle={b.head.startsWith("Manager") ? "Audit" : "GM"}
                      tone="gm"
                    />
                  </div>
                ))}
              </div>
              {/* Horizontal connector across all 6 branch heads */}
              <div
                aria-hidden
                className="absolute left-0 right-0 top-0 h-px bg-border"
                style={{
                  // align centered above the small vertical drop (h-5 = 20px)
                  marginInline: `${100 / 12}%`,
                }}
              />
            </div>

            {/* Sub-trees */}
            <div className="grid grid-cols-6 gap-4 mt-2">
              {branches.map((b) => (
                <div key={`sub-${b.head}`} className="flex flex-col items-stretch">
                  <VLine h={20} />
                  {b.chains.length === 1 ? (
                    <VerticalChain items={b.chains[0]} />
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {b.chains.map((chain, ci) => (
                        <div
                          key={ci}
                          className="rounded-xl border border-dashed border-border p-3 bg-muted/30"
                        >
                          <VerticalChain items={chain} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
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
              Executives & Field
            </span>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Indicative organisational structure. Detailed organogram available on request.
          </p>
        </div>
      </section>
    </>
  );
}
