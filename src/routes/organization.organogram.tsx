import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/organization/organogram")({
  head: () => ({
    meta: [
      { title: "Organogram — GTIDS" },
      {
        name: "description",
        content:
          "GTIDS organisational chart — leadership, functional heads and field operations across India.",
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

function Node({
  title,
  subtitle,
  tone = "primary",
}: {
  title: string;
  subtitle?: string;
  tone?: "primary" | "accent" | "muted";
}) {
  const palette = {
    primary:
      "linear-gradient(135deg, oklch(0.36 0.07 158) 0%, oklch(0.32 0.08 200) 100%)",
    accent:
      "linear-gradient(135deg, oklch(0.78 0.15 62) 0%, oklch(0.65 0.16 50) 100%)",
    muted:
      "linear-gradient(135deg, oklch(0.95 0.02 200) 0%, oklch(0.9 0.03 180) 100%)",
  } as const;
  const isLight = tone === "muted";
  return (
    <div
      className="rounded-2xl px-5 py-4 text-center shadow-soft min-w-[170px]"
      style={{
        background: palette[tone],
        color: isLight ? "var(--color-foreground)" : "white",
        boxShadow:
          "0 14px 28px -14px oklch(0.32 0.08 220 / 0.45), inset 0 1px 0 0 oklch(1 0 0 / 0.2)",
      }}
    >
      <div className="font-display text-sm md:text-base leading-tight">{title}</div>
      {subtitle && (
        <div
          className={`mt-1 text-[11px] uppercase tracking-wider ${
            isLight ? "text-muted-foreground" : "text-white/75"
          }`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center" aria-hidden>
      <span className="block h-6 w-px bg-border" />
    </div>
  );
}

function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Organization · Organogram"
        title="How we are structured."
        description="A clear hierarchy from leadership to field operations enables efficient, accountable delivery."
      />
      <section className="container-prose pb-14">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft">
          <div className="flex flex-col items-center gap-0">
            {/* Level 1 */}
            <Node title="President & Board of Directors" subtitle="Governance" tone="primary" />
            <Connector />

            {/* Level 2 */}
            <Node title="Managing Directors" subtitle="Strategy" tone="primary" />
            <Connector />

            {/* Level 3 — functional heads */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="flex justify-center"><Node title="Business Development" subtitle="Growth" tone="accent" /></div>
              <div className="flex justify-center"><Node title="IT & MIS" subtitle="Technology" tone="accent" /></div>
              <div className="flex justify-center"><Node title="Operations" subtitle="Delivery" tone="accent" /></div>
              <div className="flex justify-center"><Node title="HR & Accounts" subtitle="Support" tone="accent" /></div>
            </div>

            <Connector />

            {/* Level 4 — regional / field */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="flex justify-center"><Node title="Project Directors" subtitle="State" tone="muted" /></div>
              <div className="flex justify-center"><Node title="Regional Managers" subtitle="District" tone="muted" /></div>
              <div className="flex justify-center"><Node title="Branch Coordinators" subtitle="Block" tone="muted" /></div>
              <div className="flex justify-center"><Node title="Bank Mitras" subtitle="Village" tone="muted" /></div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Indicative structure. Detailed organogram available on request.
          </p>
        </div>
      </section>
    </>
  );
}
