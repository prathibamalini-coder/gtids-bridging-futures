import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Users, Wallet, Sprout, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTIDS — Financial Inclusion & Livelihoods for Rural India" },
      {
        name: "description",
        content:
          "Gram Tarang Inclusive Development Services empowers 1.6+ crore people across 14 states with banking access, microfinance and livelihoods.",
      },
      { property: "og:title", content: "GTIDS — Financial Inclusion for Rural India" },
      {
        property: "og:description",
        content:
          "Bridging underserved communities with the formal financial ecosystem since 2011.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "1.6 Cr+", label: "Individuals reached" },
  { value: "₹2,000 Cr+", label: "Savings mobilized" },
  { value: "₹400 Cr+", label: "Microfinance facilitated" },
  { value: "25,000+", label: "Villages served" },
];

const pillars = [
  {
    icon: Wallet,
    title: "Financial Inclusion",
    desc: "Zero-balance accounts, Aadhaar-enabled services, deposits, withdrawals and remittances at the doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Direct Benefit Transfers",
    desc: "Transparent, timely delivery of government entitlements directly into beneficiaries' bank accounts.",
  },
  {
    icon: Sprout,
    title: "Livelihood Integration",
    desc: "Linking financial access with skilling and entrepreneurship through Centurion University.",
  },
  {
    icon: Users,
    title: "Bank Mitra Network",
    desc: "Trained community facilitators delivering trusted, last-mile banking services in remote regions.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="A rural woman receives doorstep banking via a Bank Mitra"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 gradient-hero" />
        <div className="container-prose py-28 md:py-40 lg:py-48">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
              Since 2011 · 14 States · 25,000+ Villages
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05]">
              Banking the unbanked. Empowering rural India.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
              GTIDS is a pioneering social enterprise driving large-scale financial inclusion and
              sustainable livelihoods across rural and tribal communities through a community-driven,
              technology-enabled ecosystem.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:-translate-y-0.5"
              >
                Discover our story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="container-prose py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Who we are
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-foreground text-balance">
            A living lab where academia meets the grassroots.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            As the outreach arm of Centurion University of Technology and Management, GTIDS
            integrates students, faculty, and field practitioners to design solutions for real-world
            challenges — financial exclusion, lack of awareness, and limited access to credit.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Through a strong network of Bank Mitras, partnerships with public sector banks, and
            collaborations with government agencies, we deliver end-to-end financial services that
            translate into improved incomes and long-term economic empowerment.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read the full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-16 md:py-20 text-primary-foreground shadow-elevated">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-balance">
              Partner with us to transform rural economies.
            </h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              Whether you represent a bank, government agency, institution, or community — we'd love
              to explore how we can build inclusive growth together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
