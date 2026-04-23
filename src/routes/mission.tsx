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

      <section className="container-prose pb-12 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
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

        {/* Aim tabs — 1 keyword per tab */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground">We aim to:</h2>

          {/* Tab triggers */}
          <div
            role="tablist"
            aria-label="Our aims"
            className="mt-5 flex flex-wrap gap-2"
          >
            {goals.map((g, i) => {
              const isActive = i === active;
              return (
                <button
                  key={g.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-primary-soft/60 hover:text-primary"
                  }`}
                >
                  {g.key}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div
            key={active}
            role="tabpanel"
            className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft animate-fade-up"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground">
                {goals[active].title}
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{goals[active].desc}</p>
          </div>
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
