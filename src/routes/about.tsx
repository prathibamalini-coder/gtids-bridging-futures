import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Users2,
  Wallet,
  Coins,
  GraduationCap,
  FlaskConical,
  Sprout,
  Landmark,
  Building2,
  UserCog,
  Banknote,
  Send,
  BookOpen,
  HandCoins,
  Briefcase,
  Quote,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutSplit from "@/assets/about-split.jpg";
import { IndiaImpactMap } from "@/components/site/IndiaImpactMap";
import { useCountUp } from "@/hooks/use-count-up";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GTIDS" },
      {
        name: "description",
        content:
          "Founded in 2011, GTIDS is a social enterprise of Centurion University driving financial inclusion across 14 states and 25,000+ villages.",
      },
      { property: "og:title", content: "About Us — GTIDS" },
      {
        property: "og:description",
        content: "A pioneering social enterprise bridging rural India with the formal financial ecosystem.",
      },
      { property: "og:image", content: aboutHero },
      { name: "twitter:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

interface ImpactStat {
  icon: typeof MapPin;
  end: number;
  /** how to format the animated value back into the displayed string */
  format: (n: number) => string;
  suffix?: string;
  label: string;
}

const impact: ImpactStat[] = [
  {
    icon: MapPin,
    end: 14,
    format: (n) => Math.round(n).toString(),
    suffix: "States",
    label: "Pan-India footprint",
  },
  {
    icon: Sprout,
    end: 25000,
    format: (n) => `${Math.round(n).toLocaleString("en-IN")}+`,
    label: "Villages served",
  },
  {
    icon: Users2,
    end: 1.6,
    format: (n) => `${n.toFixed(1)} Cr+`,
    label: "Individuals reached",
  },
  {
    icon: Wallet,
    end: 2000,
    format: (n) => `₹${Math.round(n).toLocaleString("en-IN")} Cr+`,
    label: "Savings mobilized",
  },
];

const livingLab = [
  {
    icon: GraduationCap,
    title: "Academic Integration",
    desc: "Students and faculty of Centurion University embed with field teams to translate research into action.",
  },
  {
    icon: FlaskConical,
    title: "Real-time Innovation",
    desc: "Solutions are tested, refined and scaled directly in the communities they're built for.",
  },
  {
    icon: Sprout,
    title: "Grassroots Implementation",
    desc: "A trusted Bank Mitra network ensures every innovation reaches the last mile.",
  },
];

const services = [
  { icon: Banknote, title: "Bank Accounts" },
  { icon: Send, title: "DBT Services" },
  { icon: BookOpen, title: "Financial Literacy" },
  { icon: Coins, title: "Microfinance" },
  { icon: Briefcase, title: "Livelihood Support" },
  { icon: HandCoins, title: "Savings & Credit" },
];

const network = [
  { icon: UserCog, title: "Bank Mitras", desc: "Trusted local facilitators" },
  { icon: Landmark, title: "Public Sector Banks", desc: "Formal financial backbone" },
  { icon: Building2, title: "Government Agencies", desc: "Welfare & policy delivery" },
];

function AboutPage() {
  return (
    <>
      {/* 1. HERO with overlay */}
      <section className="relative isolate overflow-hidden">
        <img
          src={aboutHero}
          alt="A rural woman receives doorstep banking via a Bank Mitra"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 250 / 0.88) 0%, oklch(0.3 0.08 220 / 0.78) 55%, oklch(0.36 0.07 158 / 0.72) 100%)",
          }}
        />
        <div className="container-prose py-20 md:py-28 lg:py-32 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur ring-1 ring-white/20">
            About GTIDS
          </span>
          <h1 className="mt-6 mx-auto max-w-4xl font-display text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] animate-fade-up">
            A Bridge Between Rural India and the Formal Financial Ecosystem
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Established in 2011 as the outreach arm of Centurion University of Technology and Management.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#impact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:-translate-y-0.5"
            >
              Explore Impact <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SPLIT: text left, image right */}
      <section className="container-prose py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Who we are
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              A pioneering social enterprise driving inclusion at scale.
            </h2>
            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  GTIDS is the outreach arm of Centurion University, on a mission to drive
                  large-scale financial inclusion and sustainable livelihoods across rural and
                  tribal India.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Operating across 14 states and 25,000+ villages, we are a trusted bridge between
                  underserved communities and the formal financial ecosystem.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our university-led model has enabled 1.6 crore+ people to access banking,
                  mobilized ₹2,000+ crore in savings and facilitated ₹400+ crore in microfinance.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={aboutSplit}
                alt="Women gather around a Bank Mitra demonstrating banking services"
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 md:-left-8 rounded-2xl bg-card border border-border shadow-elevated px-5 py-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg text-foreground leading-none">
                  Serving 14 States
                </div>
                <div className="text-xs text-muted-foreground mt-1">25,000+ villages reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT — animated counters + 3D India map */}
      <section id="impact" className="gradient-soft py-12 md:py-16 border-y border-border">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Impact
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              Measurable change, at the scale of a nation.
            </h2>
            <p className="mt-3 text-muted-foreground">
              A pan-India footprint built one village, one beneficiary at a time.
            </p>
          </div>

          {/* Animated counter circles */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {impact.map((stat) => (
              <ImpactStatCard key={stat.label} stat={stat} />
            ))}
          </div>

          {/* 3D India map with active state dots */}
          <div className="mt-14 md:mt-16">
            <IndiaImpactMap />
          </div>
        </div>
      </section>

      {/* 4. LIVING LAB CARDS */}
      <section className="container-prose py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            The Living Lab
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Where academic knowledge meets the grassroots.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {livingLab.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1.5"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES ICON GRID */}
      <section className="bg-surface border-y border-border py-12 md:py-16">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                What we do
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
                A complete inclusion stack.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NETWORK FLOW */}
      <section className="container-prose py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Network
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            An ecosystem built on trust.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three pillars working together to deliver end-to-end financial services.
          </p>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
          {network.map((node, i) => (
            <div key={node.title} className="flex md:flex-1 items-center">
              <div className="flex-1 rounded-3xl border border-border bg-card p-7 text-center shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-circle text-white shadow-elevated">
                  <node.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">{node.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{node.desc}</p>
              </div>
              {i < network.length - 1 && (
                <>
                  <div className="hidden md:flex items-center justify-center px-3 text-primary">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <div className="md:hidden flex justify-center w-full py-2 text-primary rotate-90">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. QUOTE */}
      <section className="gradient-soft border-y border-border py-12 md:py-16">
        <div className="container-narrow text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-soft">
            <Quote className="h-6 w-6" />
          </div>
          <blockquote className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl text-foreground text-balance leading-snug">
            "Beyond access, we ensure sustained financial usage and long-term empowerment."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">— GTIDS impact philosophy</div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="container-prose py-12">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-16 md:py-20 text-primary-foreground shadow-elevated">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full"
            style={{ background: "oklch(0.5 0.13 230 / 0.35)", filter: "blur(60px)" }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-balance max-w-xl">
                Transforming Rural Economies at Scale
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-xl">
                Join us in building an inclusive future for India's villages.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 shrink-0"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
