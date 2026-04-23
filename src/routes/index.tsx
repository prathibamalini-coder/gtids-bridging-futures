import { useEffect, useRef, useState } from "react";
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
  short: string;
  desc: string;
}

const offerings: Offering[] = [
  {
    icon: Banknote,
    title: "Financial Inclusion Services",
    short: "Doorstep banking",
    desc: "We enable seamless access to formal banking for rural and tribal populations by facilitating zero-balance account opening, Aadhaar-enabled services, deposits, withdrawals, remittances, and balance inquiries through our Bank Mitra network.",
  },
  {
    icon: Send,
    title: "Direct Benefit Transfer (DBT) Enablement",
    short: "Welfare delivery",
    desc: "GTIDS ensures beneficiaries receive government entitlements directly into their bank accounts in a timely and transparent manner, reducing leakages and improving access to welfare schemes.",
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy & Awareness",
    short: "Knowledge for all",
    desc: "We conduct community-level training and awareness programs to build financial knowledge, promote savings habits, and encourage responsible use of financial services.",
  },
  {
    icon: HandCoins,
    title: "Credit Linkages & Microfinance",
    short: "Capital access",
    desc: "We connect individuals and small entrepreneurs to formal credit systems, enabling access to microfinance, small loans, and financial products that support income generation and business growth.",
  },
  {
    icon: PiggyBank,
    title: "Savings & Investment Promotion",
    short: "Build resilience",
    desc: "GTIDS encourages a culture of savings by facilitating recurring deposits, fixed deposits, and other financial instruments that help households build financial security.",
  },
  {
    icon: Briefcase,
    title: "Livelihood & Skilling Integration",
    short: "Income + banking",
    desc: "Recognizing that financial inclusion must be linked to income, we integrate banking services with skilling programs and livelihood opportunities in collaboration with Centurion University of Technology and Management.",
  },
  {
    icon: Network,
    title: "Last-Mile Service Delivery Network",
    short: "Trust, locally built",
    desc: "Our strong network of trained Bank Mitras ensures doorstep delivery of financial services, particularly in remote and underserved regions, building trust and accessibility within communities.",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    short: "Scale through collaboration",
    desc: "We work closely with public sector banks, government agencies, and development institutions to deliver scalable and sustainable solutions for inclusive growth.",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

function HomePage() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);

  // Observe which card is in view to drive the sticky left panel + nav strip
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.idx);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = (i: number) => {
    const el = cardRefs.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const ActiveIcon = offerings[active].icon;

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
        <div className="container-prose py-28 md:py-40 lg:py-48 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur ring-1 ring-white/20">
            Our Offerings
          </span>
          <h1 className="mt-6 mx-auto max-w-4xl font-display text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] animate-fade-up">
            A complete ecosystem for inclusive finance and livelihoods.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Our services go beyond basic banking access — focusing on sustained usage, economic
            participation, and long-term impact.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:-translate-y-0.5"
            >
              Explore Offerings <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              Partner With Us
            </Link>
          </div>

          <a
            href="#nav-strip"
            aria-label="Scroll to offerings"
            className="mt-14 inline-flex items-center justify-center text-white/80 hover:text-white animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* 2. PREVIEW NAV STRIP (sticky on scroll) */}
      <div
        id="nav-strip"
        className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      >
        <div className="container-prose">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-thin">
            {offerings.map((o, i) => {
              const isActive = i === active;
              return (
                <button
                  key={o.title}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className={`group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-primary-soft/60 hover:text-primary"
                  }`}
                >
                  <span
                    className={`font-display text-sm leading-none ${
                      isActive ? "text-accent" : "text-foreground/60"
                    }`}
                  >
                    {pad(i)}
                  </span>
                  <span className="hidden sm:inline">{o.short}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN SPLIT — sticky left panel + scrolling cards */}
      <section
        id="offerings"
        className="container-prose py-16 md:py-24 scroll-mt-32"
      >
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16">
          {/* Sticky left */}
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Our 8 Offerings
              </span>
              <div
                key={active}
                className="mt-4 font-display text-[7rem] leading-none font-semibold text-primary animate-fade-up"
              >
                {pad(active)}
              </div>
              <h2
                key={`t-${active}`}
                className="mt-4 font-display text-3xl xl:text-4xl text-foreground text-balance animate-fade-up"
              >
                {offerings[active].title}
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div className="text-sm text-muted-foreground">
                  {offerings[active].short}
                </div>
              </div>

              {/* Progress dots */}
              <div className="mt-10 space-y-2">
                {offerings.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToCard(i)}
                    aria-label={`Go to offering ${pad(i)}`}
                    className="flex items-center gap-3 group"
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all ${
                        i === active
                          ? "w-10 bg-accent"
                          : "w-5 bg-border group-hover:bg-primary/40"
                      }`}
                    />
                    <span
                      className={`text-xs font-mono transition-colors ${
                        i === active
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {pad(i)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Scrolling cards (right) — connected by a vertical line */}
          <div className="relative">
            <div
              aria-hidden
              className="hidden md:block absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-border to-primary/10"
            />
            <div className="space-y-8">
              {offerings.map((o, i) => {
                const Icon = o.icon;
                return (
                  <article
                    key={o.title}
                    data-idx={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className={`relative md:ml-14 group rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 overflow-hidden ${
                      i === active ? "ring-1 ring-primary/30" : ""
                    }`}
                  >
                    {/* Step dot */}
                    <span
                      aria-hidden
                      className={`hidden md:grid absolute -left-[3.75rem] top-9 h-7 w-7 place-items-center rounded-full border-2 transition-all ${
                        i === active
                          ? "bg-accent border-accent shadow-elevated scale-110"
                          : "bg-card border-border"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          i === active ? "bg-white" : "bg-primary/40"
                        }`}
                      />
                    </span>

                    {/* Faded background number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-6 -right-2 font-display text-[9rem] leading-none font-semibold text-primary/[0.06] select-none transition-colors group-hover:text-primary/[0.1]"
                    >
                      {pad(i)}
                    </span>

                    <div className="relative flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary shrink-0 transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold tracking-[0.18em] text-accent">
                          {pad(i)} · OFFERING
                        </div>
                        <h3 className="mt-1 font-display text-xl md:text-2xl text-foreground leading-snug">
                          {o.title}
                        </h3>
                      </div>
                    </div>

                    <p className="relative mt-5 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                      {o.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="container-prose pb-24 pt-4">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-white shadow-elevated"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.32 0.1 235) 0%, oklch(0.36 0.07 158) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-balance max-w-2xl">
                Driving Inclusive Finance at Scale
              </h2>
              <p className="mt-4 text-white/80 max-w-xl">
                Join us in transforming rural economies through partnership, technology, and trust.
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
