import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import missionImg from "@/assets/mission.jpg";
import { Check } from "lucide-react";

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
        content: "Last-mile financial inclusion through community trust, technology and partnerships.",
      },
      { property: "og:image", content: missionImg },
      { name: "twitter:image", content: missionImg },
    ],
  }),
  component: MissionPage,
});

const goals = [
  "Expand access to formal banking services for underserved and excluded populations",
  "Promote financial literacy and responsible financial behavior",
  "Integrate financial inclusion with skilling, entrepreneurship, and livelihood opportunities",
  "Strengthen community trust through local engagement and Bank Mitra networks",
  "Leverage partnerships with banks, government, and institutions for scalable impact",
  'Create a "living lab" model by integrating field implementation with academic research through Centurion University of Technology and Management',
];

function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title="Last-mile inclusion. Lifelong empowerment."
        description="At GTIDS, our mission is to enable last-mile financial inclusion and livelihood transformation through a scalable, community-driven and technology-enabled ecosystem."
      />
      <section className="container-prose pb-20 grid lg:grid-cols-2 gap-14 items-start">
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
          <h2 className="font-display text-2xl md:text-3xl text-foreground">We aim to:</h2>
          <ul className="mt-6 space-y-4">
            {goals.map((g) => (
              <li key={g} className="flex gap-4">
                <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-muted-foreground leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Technology
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground text-balance">
              Digital innovation, delivered at the doorstep.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
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
