import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import missionImg from "@/assets/mission.jpg";
import {
  Banknote,
  BookOpen,
  Briefcase,
  Users,
  Handshake,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — GTIDS" },
      {
        name: "description",
        content:
          "Enabling last-mile financial inclusion and livelihood transformation through a scalable, community-driven, technology-enabled ecosystem.",
      },
      { property: "og:title", content: "Our Mission — GTIDS" },
      {
        property: "og:description",
        content:
          "Last-mile financial inclusion through community trust, technology and partnerships.",
      },
      { property: "og:image", content: missionImg },
      { name: "twitter:image", content: missionImg },
    ],
  }),
  component: MissionPage,
});

interface Goal {
  key: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const goals: Goal[] = [
  {
    key: "Access",
    icon: Banknote,
    title: "Expand banking access",
    desc: "Expand access to formal banking services for underserved and excluded populations across rural and tribal India.",
  },
  {
    key: "Literacy",
    icon: BookOpen,
    title: "Promote financial literacy",
    desc: "Promote financial literacy and responsible financial behavior at the community level.",
  },
  {
    key: "Livelihood",
    icon: Briefcase,
    title: "Integrate livelihoods",
    desc: "Integrate financial inclusion with skilling, entrepreneurship and livelihood opportunities.",
  },
  {
    key: "Trust",
    icon: Users,
    title: "Build community trust",
    desc: "Strengthen community trust through local engagement and our Bank Mitra networks.",
  },
  {
    key: "Partnerships",
    icon: Handshake,
    title: "Scale through partnerships",
    desc: "Leverage partnerships with banks, government and institutions for scalable, sustainable impact.",
  },
  {
    key: "Lab",
    icon: FlaskConical,
    title: "Run a living lab",
    desc: 'Create a "living lab" model by integrating field implementation with academic research through Centurion University of Technology and Management.',
  },
];

function MissionPage() {
  const [active, setActive] = useState(0);
  const ActiveIcon = goals[active].icon;

  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="Last-mile inclusion. Lifelong empowerment."
        description="At GTIDS, our mission is to enable last-mile financial inclusion and livelihood transformation through a scalable, community-driven and technology-enabled ecosystem."
      />

      <section className="container-prose pb-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={missionImg}
              alt="Rural Indian women in a self-help group meeting"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Aims
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
              We aim to:
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tap a pillar to explore — each one builds on the last.
            </p>

            {/* Active panel — large 3D card */}
            <div
              key={active}
              role="tabpanel"
              className="relative mt-6 overflow-hidden rounded-3xl p-7 md:p-8 text-white shadow-elevated animate-fade-up"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.36 0.07 158) 0%, oklch(0.32 0.08 200) 60%, oklch(0.3 0.1 235) 100%)",
                boxShadow:
                  "0 24px 50px -20px oklch(0.32 0.08 200 / 0.5), inset 0 1px 0 0 oklch(1 0 0 / 0.18)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.85 0.18 62 / 0.55), transparent 70%)",
                }}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.18 62) 0%, oklch(0.7 0.15 50) 100%)",
                    boxShadow:
                      "0 8px 18px -6px oklch(0 0 0 / 0.4), inset 0 1px 0 0 oklch(1 0 0 / 0.35), inset 0 -2px 4px 0 oklch(0 0 0 / 0.2)",
                  }}
                >
                  <ActiveIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl md:text-2xl">{goals[active].title}</h3>
              </div>
              <p className="relative mt-5 text-white/85 leading-relaxed">
                {goals[active].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Large 3D individual tabs — full width below */}
        <div
          role="tablist"
          aria-label="Our aims"
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {goals.map((g, i) => {
            const isActive = i === active;
            const Icon = g.icon;
            return (
              <button
                key={g.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl p-4 md:p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "-translate-y-1.5 ring-2 ring-accent"
                    : "hover:-translate-y-1 ring-1 ring-border"
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(160deg, oklch(0.36 0.07 158) 0%, oklch(0.3 0.1 235) 100%)"
                    : "linear-gradient(160deg, oklch(1 0 0) 0%, oklch(0.97 0.012 95) 100%)",
                  boxShadow: isActive
                    ? "0 16px 36px -14px oklch(0.32 0.08 200 / 0.55), inset 0 1px 0 0 oklch(1 0 0 / 0.2)"
                    : "0 6px 18px -10px oklch(0 0 0 / 0.18), inset 0 1px 0 0 oklch(1 0 0 / 0.8)",
                }}
              >
                {/* 3D icon tile */}
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, oklch(0.85 0.18 62) 0%, oklch(0.7 0.15 50) 100%)"
                      : "linear-gradient(135deg, oklch(0.45 0.12 230) 0%, oklch(0.36 0.07 158) 100%)",
                    boxShadow:
                      "0 6px 14px -4px oklch(0 0 0 / 0.3), inset 0 1px 0 0 oklch(1 0 0 / 0.3), inset 0 -2px 4px 0 oklch(0 0 0 / 0.15)",
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div
                  className={`mt-3 font-display text-base md:text-lg leading-tight ${
                    isActive ? "text-white" : "text-foreground"
                  }`}
                >
                  {g.key}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Technology */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Technology
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground text-balance">
              Digital innovation, delivered at the doorstep.
            </h2>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <p>
              Technology is at the core of GTIDS's approach to delivering scalable, efficient, and
              transparent financial inclusion services. By combining digital innovation with
              grassroots outreach, GTIDS ensures even the most remote communities are seamlessly
              connected to the formal financial ecosystem.
            </p>
            <p>
              Secure, user-friendly digital platforms enable real-time banking transactions,
              account management, and service delivery through our Bank Mitra network. Handheld
              devices, biometric authentication, and mobile applications empower field agents to
              provide doorstep services.
            </p>
            <p>
              We integrate technology with national financial infrastructure to facilitate Direct
              Benefit Transfers (DBT), Aadhaar-enabled payments, and seamless fund flows — reducing
              leakages and enhancing transparency. Digital onboarding accelerates account opening.
            </p>
            <p>
              Data-driven systems monitor performance, track beneficiary engagement, and improve
              service delivery — enabling continuous innovation and targeted interventions for
              rural and tribal communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
