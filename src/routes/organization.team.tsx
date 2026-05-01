import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/organization/team")({
  head: () => ({
    meta: [
      { title: "Team — GTIDS" },
      {
        name: "description",
        content:
          "Meet the GTIDS team driving operations, technology, partnerships and field delivery across India.",
      },
      { property: "og:title", content: "Team — GTIDS" },
      {
        property: "og:description",
        content: "Operational, technology and field leadership behind GTIDS.",
      },
    ],
  }),
  component: TeamPage,
});

interface Member {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

const team: Member[] = [
  { name: "Tapan Panda", role: "Business Development Head, GTIDS", email: "tapan.panda@gramtarang.org" },
  { name: "Kalyan Chakravarthy", role: "IT Director, GTIDS", email: "kalyan@gramtarang.org" },
  { name: "Padmana Kumar Kulesika", role: "HR Manager, GTIDS", email: "padmanakumar.kulesika@gramtarang.org" },
  { name: "Suresh", role: "Accounts Manager, GTIDS", email: "suresh@gramtarang.org" },
  {
    name: "Jannana Rambabu",
    role: "APGVB (AP & Telangana)",
    email: "rambabu.pream@gmail.com",
    phone: "8500101963",
  },
  {
    name: "Mantina Siva Rama Raju",
    role: "MIS Senior Manager – Andhra Bank, TGB, APGVB & BOI",
    email: "msrraju001@gmail.com",
    phone: "9040709061",
  },
  { name: "Amit Kumar", role: "MIS Head", email: "amit.kumar@gramtarang.org", phone: "8902757574" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Organization · Team"
        title="The people powering inclusive impact."
        description="Operations, technology and field leadership across multiple states."
      />
      <section className="container-prose pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-start gap-4">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-white font-display text-base font-semibold shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.13 165) 0%, oklch(0.36 0.07 158) 100%)",
                  }}
                >
                  {initials(m.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base text-foreground leading-tight">{m.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary break-all"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{m.email}</span>
                  </a>
                )}
                {m.phone && (
                  <a
                    href={`tel:${m.phone}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{m.phone}</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
