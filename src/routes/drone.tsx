import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Plane, ExternalLink, Sparkles, Wind, Layers } from "lucide-react";

export const Route = createFileRoute("/drone")({
  head: () => ({
    meta: [
      { title: "Drone — GTIDS" },
      {
        name: "description",
        content:
          "GTIDS drone initiative powered by Super Bee Aeronautics — agri-drone services, mapping and last-mile aerial logistics for rural India.",
      },
      { property: "og:title", content: "Drone — GTIDS" },
      {
        property: "og:description",
        content: "Aerial innovation for rural India in partnership with Super Bee Aeronautics.",
      },
    ],
  }),
  component: DronePage,
});

const capabilities = [
  {
    icon: Wind,
    title: "Agri-Spray Drones",
    desc: "Precision spraying for farmlands — reducing chemical use and improving yields.",
  },
  {
    icon: Layers,
    title: "Mapping & Survey",
    desc: "High-resolution aerial mapping for land records, planning and asset surveys.",
  },
  {
    icon: Sparkles,
    title: "Skilling & Pilots",
    desc: "Training rural youth as certified drone pilots and operators.",
  },
];

function DronePage() {
  return (
    <>
      <PageHero
        eyebrow="Initiative · Drone"
        title="Aerial innovation for rural India."
        description="Bringing drone technology to agriculture, mapping and skilling — in partnership with our sister company."
      />

      {/* Sister company hero card */}
      <section className="container-prose pb-10">
        <a
          href="https://superbeeaeronautics.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-3xl p-8 md:p-12 text-white shadow-elevated transition-transform hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.32 0.1 235) 0%, oklch(0.36 0.07 158) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.78 0.15 62 / 0.7), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full"
            style={{
              background: "radial-gradient(circle at 70% 30%, oklch(1 0 0 / 0.18), transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div
                className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur shrink-0"
              >
                <Plane className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur ring-1 ring-white/20">
                  Sister Company
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance">
                  Super Bee Aeronautics
                </h2>
                <p className="mt-2 max-w-lg text-white/85">
                  Our aerospace arm building drone systems for agriculture, mapping and rural
                  logistics. Visit the official site to learn more.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-transform group-hover:-translate-y-0.5">
              Visit website <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </section>

      <section className="container-prose pb-14">
        <div className="grid md:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
