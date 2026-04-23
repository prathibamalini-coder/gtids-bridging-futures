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
} from "lucide-react";

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
        content: "A comprehensive suite of inclusive finance and livelihood services for rural India.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Banknote,
    title: "Financial Inclusion Services",
    desc: "Seamless access to formal banking — zero-balance accounts, Aadhaar-enabled services, deposits, withdrawals, remittances and balance inquiries through our Bank Mitra network.",
  },
  {
    icon: Send,
    title: "Direct Benefit Transfer (DBT) Enablement",
    desc: "Beneficiaries receive government entitlements directly into their bank accounts in a timely and transparent manner, reducing leakages and improving access to welfare schemes.",
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy & Awareness",
    desc: "Community-level training and awareness programs that build financial knowledge, promote savings habits, and encourage responsible use of financial services.",
  },
  {
    icon: HandCoins,
    title: "Credit Linkages & Microfinance",
    desc: "Connecting individuals and small entrepreneurs to formal credit — microfinance, small loans, and financial products that support income generation and business growth.",
  },
  {
    icon: PiggyBank,
    title: "Savings & Investment Promotion",
    desc: "We encourage a culture of savings by facilitating recurring deposits, fixed deposits, and other instruments that help households build financial security.",
  },
  {
    icon: Briefcase,
    title: "Livelihood & Skilling Integration",
    desc: "Banking services integrated with skilling programs and livelihood opportunities in collaboration with Centurion University of Technology and Management.",
  },
  {
    icon: Network,
    title: "Last-Mile Service Delivery Network",
    desc: "Trained Bank Mitras ensure doorstep delivery of financial services in remote and underserved regions — building trust and accessibility within communities.",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    desc: "We work closely with public sector banks, government agencies, and development institutions to deliver scalable and sustainable solutions for inclusive growth.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Offerings"
        title="A complete ecosystem for inclusive finance and livelihoods."
        description="Our services go beyond basic banking access — focusing on sustained usage, economic participation, and long-term impact."
      />
      <section className="container-prose pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-xl text-foreground">{title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
