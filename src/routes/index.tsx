import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import {
  ArrowRight,
  ChevronDown,
  Banknote,
  Send,
  GraduationCap,
  HandCoins,
  PiggyBank,
  Briefcase,
  Network,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTIDS — Financial Inclusion & Livelihoods for Rural India" },
      {
        name: "description",
        content:
          "A complete ecosystem for inclusive finance and livelihoods — banking access, DBT, microfinance, financial literacy and last-mile delivery across 14 states.",
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

interface Offering {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const offerings: Offering[] = [
  {
    icon: Banknote,
    title: "Financial Inclusion Services",
    desc: "Seamless access to formal banking for rural and tribal populations — zero-balance accounts, Aadhaar-enabled services, deposits, withdrawals, remittances and balance inquiries through our Bank Mitra network.",
  },
  {
    icon: Send,
    title: "Direct Benefit Transfer",
    desc: "Beneficiaries receive government entitlements directly into their bank accounts in a timely, transparent manner — reducing leakages and improving access to welfare schemes.",
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy & Awareness",
    desc: "Community-level training and awareness programs that build financial knowledge, promote savings habits and encourage responsible use of financial services.",
  },
  {
    icon: HandCoins,
    title: "Credit Linkages & Microfinance",
    desc: "Connecting individuals and small entrepreneurs to formal credit — microfinance, small loans and financial products that support income generation and business growth.",
  },
  {
    icon: PiggyBank,
    title: "Savings & Investment",
    desc: "Encouraging a culture of savings by facilitating recurring deposits, fixed deposits and other instruments that help households build long-term financial security.",
  },
  {
    icon: Briefcase,
    title: "Livelihood & Skilling",
    desc: "Integrating banking services with skilling programs and livelihood opportunities in collaboration with Centurion University of Technology and Management.",
  },
  {
    icon: Network,
    title: "Last-Mile Delivery Network",
    desc: "A trained network of Bank Mitras ensures doorstep delivery of financial services in remote and underserved regions — building trust and accessibility within communities.",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    desc: "Working closely with public sector banks, government agencies and development institutions to deliver scalable, sustainable solutions for inclusive growth.",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
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
              "linear-gradient(135deg, oklch(0.2 0.07 250 / 0.9) 0%, oklch(0.28 0.08 220 / 0.78) 55%, oklch(0.36 0.07 158 / 0.7) 100%)",
          }}
        />
        {/* Floating 3D orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.78 0.15 62 / 0.6), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, oklch(0.7 0.1 158 / 0.7), transparent 70%)",
          }}
        />

        <div className="container-prose py-16 md:py-24 lg:py-28 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur ring-1 ring-white/20">
            Our Services
          </span>
          <h1 className="mt-6 mx-auto max-w-4xl font-display text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] animate-fade-up">
            A complete ecosystem for inclusive finance and livelihoods.
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Banking access, DBT, microfinance, literacy and last-mile delivery — built for sustained
            usage and long-term impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:-translate-y-0.5"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              Partner With Us
            </Link>
          </div>

          <a
            href="#offerings"
            aria-label="Scroll to offerings"
            className="mt-10 inline-flex items-center justify-center text-white/80 hover:text-white animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* 2. OFFERINGS — Numbered card grid (2 × 4) with 3D tilt */}
      <section
        id="offerings"
        className="relative scroll-mt-24 py-10 md:py-14"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.97 0.015 220) 0%, var(--background) 70%)",
        }}
      >
        {/* Floating 3D background shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[5%] top-10 h-40 w-40 rounded-3xl rotate-12 opacity-40 blur-2xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.7 0.1 158 / 0.5), oklch(0.45 0.12 230 / 0.4))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[3%] bottom-20 h-52 w-52 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.15 62 / 0.4), transparent 70%)",
          }}
        />

        <div className="container-prose relative">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our 8 Services
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-foreground text-balance">
              A complete suite for inclusive growth
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">
              Each service connects to the next — forming a single, end-to-end ecosystem.
            </p>
          </div>

          {/* 2 × 4 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <article
                  key={o.title}
                  className="group relative overflow-hidden rounded-3xl bg-card p-6 md:p-7 ring-1 ring-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated hover:ring-primary/30"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* 3D faded background number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-8 -right-3 font-display text-[8.5rem] leading-none font-semibold select-none transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.36 0.07 158 / 0.12), oklch(0.45 0.12 230 / 0.06))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {pad(i)}
                  </span>

                  {/* Decorative 3D corner shape */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.7 0.1 158 / 0.45), transparent 70%)",
                    }}
                  />

                  {/* 3D icon tile */}
                  <div className="relative">
                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.45 0.12 230) 0%, oklch(0.4 0.09 180) 50%, oklch(0.36 0.07 158) 100%)",
                        boxShadow:
                          "0 8px 20px -6px oklch(0.36 0.07 158 / 0.5), inset 0 1px 0 0 oklch(1 0 0 / 0.25), inset 0 -2px 4px 0 oklch(0 0 0 / 0.15)",
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="relative mt-5">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-accent">
                      {pad(i)} · SERVICE
                    </div>
                    <h3 className="mt-1.5 font-display text-lg md:text-xl text-foreground leading-snug">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="container-prose pb-12 pt-2">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-16 text-white shadow-elevated"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.32 0.1 235) 0%, oklch(0.36 0.07 158) 100%)",
          }}
        >
          {/* 3D floating spheres */}
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.78 0.15 62 / 0.7), oklch(0.78 0.15 62 / 0.1) 60%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, oklch(1 0 0 / 0.18), transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-balance max-w-2xl">
                Driving Inclusive Finance at Scale
              </h2>
              <p className="mt-3 text-white/80 max-w-xl">
                Join us in transforming rural economies through partnership, technology and trust.
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
