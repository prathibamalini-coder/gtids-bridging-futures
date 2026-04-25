import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Banknote,
  Send,
  GraduationCap,
  HandCoins,
  PiggyBank,
  Briefcase,
  Network,
  Building2,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";
import financialInclusionImg from "@/assets/services/financial-inclusion.jpg";
import dbtImg from "@/assets/services/dbt.jpg";
import literacyImg from "@/assets/services/literacy.jpg";
import creditImg from "@/assets/services/credit.jpg";
import savingsImg from "@/assets/services/savings.jpg";
import livelihoodImg from "@/assets/services/livelihood.jpg";
import networkImg from "@/assets/services/network.jpg";
import partnershipsImg from "@/assets/services/partnerships.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — GTIDS" },
      {
        name: "description",
        content:
          "From banking access and DBT enablement to microfinance, financial literacy, and livelihood integration — explore the GTIDS service suite.",
      },
      { property: "og:title", content: "Our Services — GTIDS" },
      {
        property: "og:description",
        content:
          "A comprehensive suite of inclusive finance and livelihood services for rural India.",
      },
    ],
  }),
  component: ServicesPage,
});

interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  gradient: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Banknote,
    title: "Financial Inclusion Services",
    short: "Doorstep banking access",
    desc: "We enable seamless access to formal banking for rural and tribal populations by facilitating zero-balance account opening, Aadhaar-enabled services, deposits, withdrawals, remittances, and balance inquiries through our Bank Mitra network.",
    gradient: "linear-gradient(135deg, oklch(0.55 0.16 240) 0%, oklch(0.45 0.13 215) 100%)",
    image: financialInclusionImg,
  },
  {
    icon: Send,
    title: "Direct Benefit Transfer (DBT) Enablement",
    short: "Transparent welfare delivery",
    desc: "GTIDS ensures beneficiaries receive government entitlements directly into their bank accounts in a timely and transparent manner, reducing leakages and improving access to welfare schemes.",
    gradient: "linear-gradient(135deg, oklch(0.6 0.15 165) 0%, oklch(0.45 0.12 180) 100%)",
    image: dbtImg,
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy & Awareness",
    short: "Knowledge for the last mile",
    desc: "We conduct community-level training and awareness programs to build financial knowledge, promote savings habits, and encourage responsible use of financial services.",
    gradient: "linear-gradient(135deg, oklch(0.65 0.16 60) 0%, oklch(0.55 0.16 35) 100%)",
    image: literacyImg,
  },
  {
    icon: HandCoins,
    title: "Credit Linkages & Microfinance",
    short: "Capital for entrepreneurs",
    desc: "We connect individuals and small entrepreneurs to formal credit systems, enabling access to microfinance, small loans, and financial products that support income generation and business growth.",
    gradient: "linear-gradient(135deg, oklch(0.6 0.18 25) 0%, oklch(0.5 0.18 350) 100%)",
    image: creditImg,
  },
  {
    icon: PiggyBank,
    title: "Savings & Investment Promotion",
    short: "Building household resilience",
    desc: "GTIDS encourages a culture of savings by facilitating recurring deposits, fixed deposits, and other financial instruments that help households build financial security.",
    gradient: "linear-gradient(135deg, oklch(0.7 0.16 340) 0%, oklch(0.55 0.18 310) 100%)",
    image: savingsImg,
  },
  {
    icon: Briefcase,
    title: "Livelihood & Skilling Integration",
    short: "Banking + income, together",
    desc: "Recognizing that financial inclusion must be linked to income, we integrate banking services with skilling programs and livelihood opportunities in collaboration with Centurion University of Technology and Management.",
    gradient: "linear-gradient(135deg, oklch(0.55 0.16 290) 0%, oklch(0.42 0.14 260) 100%)",
    image: livelihoodImg,
  },
  {
    icon: Network,
    title: "Last-Mile Service Delivery Network",
    short: "Trust, built locally",
    desc: "Our strong network of trained Bank Mitras ensures doorstep delivery of financial services, particularly in remote and underserved regions, building trust and accessibility within communities.",
    gradient: "linear-gradient(135deg, oklch(0.6 0.15 195) 0%, oklch(0.45 0.13 230) 100%)",
    image: networkImg,
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    short: "Scaling through collaboration",
    desc: "We work closely with public sector banks, government agencies, and development institutions to deliver scalable and sustainable solutions for inclusive growth.",
    gradient: "linear-gradient(135deg, oklch(0.55 0.13 145) 0%, oklch(0.42 0.11 180) 100%)",
    image: partnershipsImg,
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A complete ecosystem for inclusive finance and livelihoods."
        description="Our services go beyond basic banking access — focusing on sustained usage, economic participation, and long-term impact."
      />

      {/* Desktop & tablet: Numbered card grid with hover expand */}
      <section className="container-prose pb-8 hidden md:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} service={s} />
          ))}
        </div>
      </section>

      {/* Mobile: Accordion */}
      <section className="container-prose pb-12 md:hidden">
        <ServiceAccordion services={services} />
      </section>
    </>
  );
}

function ServiceCard({ index, service }: { index: number; service: Service }) {
  const { title, short, desc, image } = service;
  void index;
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 flex flex-col">
      {/* Full image header */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
      </div>

      <div className="relative px-6 pt-5 pb-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg text-foreground leading-snug">{title}</h3>
        <p className="mt-1.5 text-sm font-medium text-primary">{short}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}

function ServiceAccordion({ services }: { services: Service[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden shadow-soft">
      {services.map((s, i) => {
        const isOpen = openIdx === i;
        const num = String(i + 1).padStart(2, "0");
        const Icon = s.icon;
        return (
          <div key={s.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-primary-soft/30"
            >
              <span className="font-display text-base font-semibold text-accent w-8 shrink-0">
                {num}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 font-display text-base text-foreground">{s.title}</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-muted-foreground shrink-0">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pl-[4.75rem] -mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
