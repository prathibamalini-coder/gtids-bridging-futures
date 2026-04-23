import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

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
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A bridge between rural India and the formal financial ecosystem."
        description="Established in 2011 as the outreach arm of Centurion University of Technology and Management."
      />
      <article className="container-narrow pb-20 prose-lg">
        <div className="space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <p>
            <strong className="text-foreground">Gram Tarang Inclusive Development Services Pvt. Ltd. (GTIDS)</strong> is
            a pioneering social enterprise and the outreach arm of Centurion University of Technology and Management,
            established in 2011 with a mission to drive large-scale financial inclusion and sustainable livelihoods
            across rural and tribal India.
          </p>
          <p>
            Operating across <strong className="text-foreground">14 states and more than 25,000 villages</strong>,
            GTIDS has emerged as a trusted bridge between underserved communities and the formal financial ecosystem.
            Through its innovative, university-led model, the organization has enabled over{" "}
            <strong className="text-foreground">1.6 crore individuals</strong> to access banking services, mobilized{" "}
            <strong className="text-foreground">₹2,000+ crore in savings</strong>, facilitated{" "}
            <strong className="text-foreground">₹400+ crore in microfinance</strong>, and significantly strengthened
            rural financial resilience.
          </p>
          <p>
            At the heart of GTIDS lies a unique <em>"living lab"</em> approach — where academic knowledge meets
            grassroots implementation. By integrating students, faculty, and field practitioners, the organization
            continuously innovates solutions that address real-world challenges such as financial exclusion, lack of
            awareness, and limited access to institutional credit.
          </p>
          <p>
            GTIDS works through a strong network of community-based facilitators (Bank Mitras), partnerships with
            public sector banks, and collaborations with government agencies to deliver end-to-end financial services.
            These include opening bank accounts, enabling Direct Benefit Transfers (DBT), providing financial literacy,
            and linking individuals to livelihood and skilling opportunities.
          </p>
          <p>
            Beyond access, GTIDS focuses on <strong className="text-foreground">sustained usage and impact</strong>,
            ensuring that financial inclusion translates into improved incomes, enhanced savings behavior, and
            long-term economic empowerment — especially for women and marginalized communities.
          </p>
          <p>
            With a self-sustaining model supported by banking partnerships, GTIDS continues to unlock economic value
            at scale, contributing to transparent governance, inclusive growth, and the transformation of rural
            economies.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {[
            { k: "1.6 Cr+", v: "Individuals enabled to access banking" },
            { k: "₹2,000 Cr+", v: "Savings mobilized in rural India" },
            { k: "₹400 Cr+", v: "Microfinance facilitated" },
            { k: "14 States", v: "Reach across the country" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-surface p-6">
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
