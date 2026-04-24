import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, User } from "lucide-react";

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
    photo: "",
  },
  {
    name: "Prof. D.N. Rao",
    role: "Managing Director",
    bio: "Civil Engineer from Osmania University and PGDM from IIM Kolkata. Co-founder and Vice President of Centurion Universities and Gram Tarang institutions. Has strong expertise in technology-driven enterprises.",
    email: "dnrao@cutm.ac.in",
    photo: "",
  },
  {
    name: "Prof. Supriya Pattanayak",
    role: "Managing Director",
    bio: "Over 25 years of experience in the development sector and academia. Known for working with bilateral, multilateral, government, and non-government organizations. Strong stakeholder management skills.",
    email: "supriya.pattanayak@cutm.ac.in",
    photo: "",
  },
  {
    name: "Venkat Sivanand Kumar",
    role: "Managing Director",
    bio: "B.Com from Osmania University and Management degree from Xavier Institute of Management, Bhubaneswar. Experience with ICICI Bank and Intellecap. Founder of Gram Tarang Financial Services Pvt. Ltd. Expertise in microfinance, financial modeling, and investment banking.",
    email: "venkat@gramtarang.org",
    photo: "",
  },
  {
    name: "Prof. A.R.K. Raju",
    role: "Managing Director",
    bio: "CEO, BREDS. Over 25 years of experience in the development sector and microfinance. Promoted multiple cooperative societies and has extensive field experience. Visiting faculty at CSREM.",
    email: "arkraju64@gmail.com",
    photo: "",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {directors.map((d) => (
            <article
              key={d.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
            >
              {/* Decorative banner */}
              <div
                aria-hidden
                className="h-24 w-full"
                style={{
                  background:
                    "linear-gradient(120deg, oklch(0.45 0.12 230) 0%, oklch(0.55 0.13 195) 50%, oklch(0.65 0.14 80) 100%)",
                }}
              />

              {/* Photo placeholder, overlapping the banner */}
              <div className="px-6 -mt-14 flex justify-center">
                <div className="relative">
                  <div
                    className="h-28 w-28 rounded-full bg-muted ring-4 ring-card overflow-hidden shadow-elevated grid place-items-center"
                    style={{
                      backgroundImage: d.photo ? `url(${d.photo})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!d.photo && (
                      <User
                        className="h-12 w-12 text-muted-foreground/50"
                        strokeWidth={1.4}
                      />
                    )}
                  </div>
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.1)",
                    }}
                  />
                </div>
              </div>

              <div className="px-6 pt-4 pb-6 flex flex-col flex-1 text-center">
                <h3 className="font-display text-lg text-foreground leading-tight">
                  {d.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {d.role}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1 text-left">
                  {d.bio}
                </p>
                <a
                  href={`mailto:${d.email}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-primary hover:bg-primary-soft/40 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {d.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
