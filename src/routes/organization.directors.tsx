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
    photo: "/assets/directors/prof-mukti-kanta-mishra.jpg",
  },
  {
    name: "Prof. D.N. Rao",
    role: "Managing Director",
    bio: "Civil Engineer from Osmania University and PGDM from IIM Kolkata. Co-founder and Vice President of Centurion Universities and Gram Tarang institutions. Has strong expertise in technology-driven enterprises.",
    email: "dnrao@cutm.ac.in",
    photo: "/assets/directors/dn.jpg",
  },
  {
    name: "Prof. Supriya Pattanayak",
    role: "Managing Director",
    bio: "Over 25 years of experience in the development sector and academia. Known for working with bilateral, multilateral, government, and non-government organizations. Strong stakeholder management skills.",
    email: "supriya.pattanayak@cutm.ac.in",
    photo: "/assets/directors/supriya-patnaik.jpg",
  },
  {
    name: "Venkat Sivanand Kumar",
    role: "Managing Director",
    bio: "B.Com from Osmania University and Management degree from Xavier Institute of Management, Bhubaneswar. Experience with ICICI Bank and Intellecap. Founder of Gram Tarang Financial Services Pvt. Ltd. Expertise in microfinance, financial modeling, and investment banking.",
    email: "venkat@gramtarang.org",
    photo: "/assets/directors/shiva.jpg",
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
        <div className="flex flex-col gap-6">
          {directors.map((d, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={d.name}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                {/* Decorative side accent */}
                <span
                  aria-hidden
                  className={`absolute top-0 ${isEven ? "left-0" : "right-0"} h-full w-1.5`}
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.45 0.12 230) 0%, oklch(0.55 0.13 195) 50%, oklch(0.65 0.14 80) 100%)",
                  }}
                />
                <span
                  aria-hidden
                  className={`pointer-events-none absolute ${isEven ? "-right-20 -top-20" : "-left-20 -top-20"} h-56 w-56 rounded-full opacity-50 blur-3xl`}
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.65 0.14 80 / 0.35), transparent 70%)",
                  }}
                />

                <div
                  className={`relative flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center md:items-stretch gap-6 md:gap-8 p-6 md:p-8`}
                >
                  {/* Photo block */}
                  <div className="shrink-0 flex md:items-center justify-center">
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute -inset-2 rounded-3xl opacity-60 blur-md"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.45 0.12 230 / 0.35), oklch(0.65 0.14 80 / 0.3))",
                        }}
                      />
                      <div
                        className="relative h-36 w-36 md:h-40 md:w-40 rounded-3xl bg-muted ring-4 ring-card overflow-hidden shadow-elevated grid place-items-center"
                        style={{
                          backgroundImage: d.photo ? `url(${d.photo})` : undefined,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {!d.photo && (
                          <User
                            className="h-16 w-16 text-muted-foreground/50"
                            strokeWidth={1.4}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col text-center md:text-left">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                      {d.role}
                    </span>
                    <h3 className="mt-1.5 font-display text-2xl md:text-3xl text-foreground leading-tight">
                      {d.name}
                    </h3>
                    <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      {d.bio}
                    </p>
                    <div className="mt-5">
                      <a
                        href={`mailto:${d.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-primary hover:bg-primary-soft/40 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {d.email}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
