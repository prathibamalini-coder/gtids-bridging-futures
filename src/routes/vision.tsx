import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import visionImg from "@/assets/vision.jpg";
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

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision & Mission — GTIDS" },
      {
        name: "description",
        content:
          "An inclusive society where every rural and tribal household has access to formal finance and sustainable livelihoods — and the mission to make it real.",
      },
      { property: "og:title", content: "Our Vision & Mission — GTIDS" },
      {
        property: "og:description",
        content:
          "Empowering every rural and tribal household to participate in India's economic growth.",
      },
      { property: "og:image", content: visionImg },
      { name: "twitter:image", content: visionImg },
    ],
  }),
  component: VisionMissionPage,
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
    title: "Expand Banking Access",
    desc: "Expand Access To Formal Banking Services For Underserved And Excluded Populations Across Rural And Tribal India.",
  },
  {
    key: "Literacy",
    icon: BookOpen,
    title: "Promote Financial Literacy",
    desc: "Promote Financial Literacy And Responsible Financial Behavior At The Community Level.",
  },
  {
    key: "Livelihood",
    icon: Briefcase,
    title: "Integrate Livelihoods",
    desc: "Integrate Financial Inclusion With Skilling, Entrepreneurship And Livelihood Opportunities.",
  },
  {
    key: "Trust",
    icon: Users,
    title: "Build Community Trust",
    desc: "Strengthen Community Trust Through Local Engagement And Our Bank Mitra Networks.",
  },
  {
    key: "Partnerships",
    icon: Handshake,
    title: "Scale Through Partnerships",
    desc: "Leverage Partnerships With Banks, Government And Institutions For Scalable, Sustainable Impact.",
  },
  {
    key: "Lab",
    icon: FlaskConical,
    title: "Run A Living Lab",
    desc: 'Create A "Living Lab" Model By Integrating Field Implementation With Academic Research Through Centurion University Of Technology And Management.',
  },
];

function VisionMissionPage() {
  const [active, setActive] = useState(0);
  const ActiveIcon = goals[active].icon;

  return (
    <>
      <PageHero
        eyebrow="Our Vision & Mission"
        title="Inclusion that endures. Empowerment that grows."
        description="A shared vision and a clear mission — driving last-mile financial inclusion and lifelong empowerment across rural India."
      />

      {/* VISION */}
      <section className="container-prose pb-10 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Vision
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-foreground">
            An inclusive and empowered society.
          </h2>
          <blockquote className="mt-5 font-display text-xl md:text-2xl text-foreground leading-snug text-balance border-l-4 border-accent pl-5">
            To build an inclusive and empowered society where every rural and tribal household has
            seamless access to formal financial systems, sustainable livelihood opportunities, and
            the ability to participate fully in the economic growth of the nation.
          </blockquote>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { t: "Inclusive", d: "Every household, every voice." },
              { t: "Empowered", d: "Through access and opportunity." },
              { t: "Participatory", d: "Full role in economic growth." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl bg-primary-soft/40 p-4">
                <div className="font-display text-lg text-primary">{p.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={visionImg}
              alt="Aerial view of a rural Indian village at sunrise"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="container-prose py-10">
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
              Our Mission
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-foreground">
              Last-Mile Inclusion. Lifelong Empowerment.
            </h2>
            <p className="mt-3 text-muted-foreground">
              At GTIDS, Our Mission Is To Enable Last-Mile Financial Inclusion And Livelihood
              Transformation Through A Scalable, Community-Driven And Technology-Enabled Ecosystem.
            </p>

            <div role="tablist" aria-label="Our aims" className="mt-6 flex flex-wrap gap-2">
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
                    className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-elevated"
                        : "bg-surface text-foreground ring-1 ring-border hover:-translate-y-0.5 hover:ring-primary/40"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {g.key}
                  </button>
                );
              })}
            </div>

            <div
              key={active}
              role="tabpanel"
              className="relative mt-5 overflow-hidden rounded-2xl p-6 text-white shadow-elevated animate-fade-up"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.36 0.07 158) 0%, oklch(0.32 0.08 200) 60%, oklch(0.3 0.1 235) 100%)",
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
              <div className="relative flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.18 62) 0%, oklch(0.7 0.15 50) 100%)",
                  }}
                >
                  <ActiveIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg md:text-xl">{goals[active].title}</h3>
              </div>
              <p className="relative mt-4 text-white/85 leading-relaxed">{goals[active].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-10 md:py-14">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Technology
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground text-balance">
              Digital Innovation, Delivered At The Doorstep.
            </h2>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <p>
              Technology Is At The Core Of GTIDS's Approach To Delivering Scalable, Efficient, And
              Transparent Financial Inclusion Services. By Combining Digital Innovation With
              Grassroots Outreach, GTIDS Ensures Even The Most Remote Communities Are Seamlessly
              Connected To The Formal Financial Ecosystem.
            </p>
            <p>
              Secure, User-Friendly Digital Platforms Enable Real-Time Banking Transactions, Account
              Management, And Service Delivery Through Our Bank Mitra Network. Handheld Devices,
              Biometric Authentication, And Mobile Applications Empower Field Agents To Provide
              Doorstep Services.
            </p>
            <p>
              We Integrate Technology With National Financial Infrastructure To Facilitate Direct
              Benefit Transfers (DBT), Aadhaar-Enabled Payments, And Seamless Fund Flows — Reducing
              Leakages And Enhancing Transparency. Digital Onboarding Accelerates Account Opening.
            </p>
            <p>
              Data-Driven Systems Monitor Performance, Track Beneficiary Engagement, And Improve
              Service Delivery — Enabling Continuous Innovation And Targeted Interventions For Rural
              And Tribal Communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
