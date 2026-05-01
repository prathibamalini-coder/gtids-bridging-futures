import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { IndiaImpactMap } from "@/components/site/IndiaImpactMap";
import { BankPartnersMarquee } from "@/components/site/BankPartnersMarquee";
import imgInclusion from "@/assets/services/financial-inclusion.jpg";
import imgDbt from "@/assets/services/dbt.jpg";
import imgLiteracy from "@/assets/services/literacy.jpg";
import imgCredit from "@/assets/services/credit.jpg";
import imgSavings from "@/assets/services/savings.jpg";
import imgLivelihood from "@/assets/services/livelihood.jpg";
import imgNetwork from "@/assets/services/network.jpg";
import imgPartnerships from "@/assets/services/partnerships.jpg";
import {
  ArrowRight,
  ChevronDown,
  Plane,
  ExternalLink,
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
  image: string;
  title: string;
  desc: string;
}

const offerings: Offering[] = [
  {
    image: imgInclusion,
    title: "Financial Inclusion Services",
    desc: "Seamless access to formal banking for rural and tribal populations — zero-balance accounts, Aadhaar-enabled services, deposits, withdrawals, remittances and balance inquiries through our Bank Mitra network.",
  },
  {
    image: imgDbt,
    title: "Direct Benefit Transfer",
    desc: "Beneficiaries receive government entitlements directly into their bank accounts in a timely, transparent manner — reducing leakages and improving access to welfare schemes.",
  },
  {
    image: imgLiteracy,
    title: "Financial Literacy & Awareness",
    desc: "Community-level training and awareness programs that build financial knowledge, promote savings habits and encourage responsible use of financial services.",
  },
  {
    image: imgCredit,
    title: "Credit Linkages & Microfinance",
    desc: "Connecting individuals and small entrepreneurs to formal credit — microfinance, small loans and financial products that support income generation and business growth.",
  },
  {
    image: imgSavings,
    title: "Savings & Investment",
    desc: "Encouraging a culture of savings by facilitating recurring deposits, fixed deposits and other instruments that help households build long-term financial security.",
  },
  {
    image: imgLivelihood,
    title: "Livelihood & Skilling",
    desc: "Integrating banking services with skilling programs and livelihood opportunities in collaboration with Centurion University of Technology and Management.",
  },
  {
    image: imgNetwork,
    title: "Last-Mile Delivery Network",
    desc: "A trained network of Bank Mitras ensures doorstep delivery of financial services in remote and underserved regions — building trust and accessibility within communities.",
  },
  {
    image: imgPartnerships,
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

        <div className="container-prose py-12 md:py-16 lg:py-20 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur ring-1 ring-white/20">
            Inclusive Finance · Rural India
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
              href="#map"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:-translate-y-0.5"
            >
              See Our Reach <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              See Bank Partners
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur ring-1 ring-white/30 transition-colors hover:bg-white/20"
            >
              Partner With Us
            </Link>
          </div>

          <a
            href="#map"
            aria-label="Scroll to map"
            className="mt-10 inline-flex items-center justify-center text-white/80 hover:text-white animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* 2. MAP — moved to top, right after hero */}
      <section id="map" className="gradient-soft py-12 md:py-16 border-b border-border scroll-mt-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Where We Work
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-foreground text-balance">
              Operational across 15 states.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Headquartered in Visakhapatnam, with active operations in Odisha, Bihar, Assam,
              Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Goa, Tripura, Meghalaya,
              West Bengal, Uttarakhand, Jharkhand, Uttar Pradesh and Mizoram.
            </p>
          </div>
          <IndiaImpactMap />
        </div>
      </section>

      {/* 3. BANK PARTNERS MARQUEE */}
      <BankPartnersMarquee />

      {/* 4. OFFERINGS — Image-top cards (2 × 4) */}
      <section
        id="offerings"
        className="relative scroll-mt-24 py-12 md:py-16"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.97 0.015 220) 0%, var(--background) 70%)",
        }}
      >
        <div className="container-prose relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Services
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-foreground text-balance">
              A complete suite for inclusive growth
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">
              Each service connects to the next — forming a single, end-to-end ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {offerings.map((o, i) => (
              <article
                key={o.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated hover:ring-primary/30"
              >
                {/* Top image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, oklch(0.18 0.04 220 / 0.55) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg text-foreground leading-snug">
                    {o.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Drone initiative */}
      <section className="container-prose py-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Other Initiatives
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground text-balance">
            Innovation that takes flight.
          </h2>
        </div>
        <a
          href="https://superbeeaeronautics.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-3xl p-8 md:p-10 text-white shadow-elevated transition-transform hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.3 0.1 235) 0%, oklch(0.36 0.07 158) 100%)",
          }}
        >
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur shrink-0">
                <Plane className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur ring-1 ring-white/20">
                  Sister Company
                </span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl">Super Bee Aeronautics</h3>
                <p className="mt-2 text-white/85 max-w-lg">
                  Drone systems for agriculture, mapping and rural logistics.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform group-hover:-translate-y-0.5">
              Visit website <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </section>

      {/* 6. CTA */}
      <section className="container-prose pb-12 pt-2">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-16 text-white shadow-elevated"
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
