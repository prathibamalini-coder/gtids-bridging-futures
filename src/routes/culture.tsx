import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import cultureImg from "@/assets/culture.jpg";
import {
  Compass,
  Users,
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Handshake,
} from "lucide-react";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Our Culture — GTIDS" },
      {
        name: "description",
        content:
          "Purpose, inclusivity, and a deep commitment to social impact define life at GTIDS — where communities and teams grow together.",
      },
      { property: "og:title", content: "Our Culture — GTIDS" },
      {
        property: "og:description",
        content: "Purpose-driven, community-centric, learning-led — the GTIDS way.",
      },
      { property: "og:image", content: cultureImg },
      { name: "twitter:image", content: cultureImg },
    ],
  }),
  component: CulturePage,
});

const values = [
  {
    icon: Compass,
    title: "Purpose-Driven Work",
    desc: "Every member of GTIDS is guided by a shared vision of empowering underserved communities — creating lasting change in people's lives.",
  },
  {
    icon: Users,
    title: "Community-Centric Approach",
    desc: "Communities sit at the center of everything we do. Building trust and engaging grassroots stakeholders keeps our solutions relevant and sustainable.",
  },
  {
    icon: Lightbulb,
    title: "Learning & Innovation",
    desc: 'As a "living lab" with Centurion University, students, faculty, and practitioners collaborate to test ideas and develop scalable solutions.',
  },
  {
    icon: Sparkles,
    title: "Ownership & Accountability",
    desc: "Our decentralized model empowers individuals to take initiative while maintaining accountability for outcomes and impact.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusivity & Diversity",
    desc: "We embrace diversity across regions, cultures, and backgrounds — creating space where everyone, especially women and marginalized groups, can grow.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    desc: "Trust is the foundation of our work. We uphold the highest standards in operations, transactions, and stakeholder relationships.",
  },
  {
    icon: Handshake,
    title: "Collaboration & Partnerships",
    desc: "Working closely with banks, government, and development partners, we create an ecosystem that amplifies impact and drives sustainable development.",
  },
];

function CulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Culture"
        title="Rooted in purpose. Grown through people."
        description="At GTIDS, meaningful change begins with people — both the communities we serve and the teams that drive our mission forward."
      />

      <section className="container-prose pb-8">
        <div className="overflow-hidden rounded-3xl shadow-elevated">
          <img
            src={cultureImg}
            alt="GTIDS team collaborating with rural community members"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover aspect-[21/9]"
          />
        </div>
      </section>

      <section className="container-prose pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
