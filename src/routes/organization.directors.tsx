import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/organization/directors")({
  head: () => ({
    meta: [
      { title: "Directors — GTIDS" },
      {
        name: "description",
        content:
          "Meet the directors of GTIDS — a leadership team driving inclusive finance, livelihoods and rural empowerment across India.",
      },
      { property: "og:title", content: "Directors — GTIDS" },
      {
        property: "og:description",
        content: "Leadership steering GTIDS' mission of last-mile financial inclusion.",
      },
    ],
  }),
  component: DirectorsPage,
});

const directors = [
  {
    name: "Prof. Mukti Mishra",
    role: "Co-founder & President",
    bio: "Holds an MBA and PhD from Victoria University, Melbourne. He is Co-founder and President of Centurion Universities and Gram Tarang institutions. He has promoted many companies, trusts, and societies.",
    email: "mukti.mishra@gmail.com",
    initials: "MM",
  },
  {
    name: "Prof. D.N. Rao",
    role: "Managing Director",
    bio: "Civil Engineer from Osmania University and PGDM from IIM Kolkata. Co-founder and Vice President of Centurion Universities and Gram Tarang institutions. Has strong expertise in technology-driven enterprises.",
    email: "dnrao@cutm.ac.in",
    initials: "DR",
  },
  {
    name: "Prof. Supriya Pattanayak",
    role: "Managing Director",
    bio: "Over 25 years of experience in the development sector and academia. Known for working with bilateral, multilateral, government, and non-government organizations. Strong stakeholder management skills.",
    email: "supriya.pattanayak@cutm.ac.in",
    initials: "SP",
  },
  {
    name: "Venkat Sivanand Kumar",
    role: "Managing Director",
    bio: "B.Com from Osmania University and Management degree from Xavier Institute of Management, Bhubaneswar. Experience with ICICI Bank and Intellecap. Founder of Gram Tarang Financial Services Pvt. Ltd. Expertise in microfinance, financial modeling, and investment banking.",
    email: "venkat@gramtarang.org",
    initials: "VK",
  },
  {
    name: "Prof. A.R.K. Raju",
    role: "Managing Director",
    bio: "CEO, BREDS. Over 25 years of experience in the development sector and microfinance. Promoted multiple cooperative societies and has extensive field experience. Visiting faculty at CSREM.",
    email: "arkraju64@gmail.com",
    initials: "AR",
  },
];

function DirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Organization · Directors"
        title="Leadership shaping inclusive growth."
        description="A team of academic, financial and development leaders steering GTIDS forward."
      />
      <section className="container-prose pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directors.map((d) => (
            <article
              key={d.name}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-16 w-16 place-items-center rounded-2xl text-white font-display text-xl font-semibold shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.45 0.12 230) 0%, oklch(0.36 0.07 158) 100%)",
                    boxShadow:
                      "0 8px 18px -6px oklch(0.36 0.07 158 / 0.5), inset 0 1px 0 0 oklch(1 0 0 / 0.25)",
                  }}
                >
                  {d.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground leading-tight">{d.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
                    {d.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{d.bio}</p>
              <a
                href={`mailto:${d.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {d.email}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
