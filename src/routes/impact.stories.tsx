import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote, Sparkles } from "lucide-react";

export const Route = createFileRoute("/impact/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — GTIDS" },
      {
        name: "description",
        content:
          "Real stories of impact from rural India — financial inclusion, livelihoods and lives transformed by the GTIDS network.",
      },
      { property: "og:title", content: "Success Stories — GTIDS" },
      {
        property: "og:description",
        content: "Stories of how access, literacy and livelihoods change lives in rural India.",
      },
    ],
  }),
  component: SuccessStoriesPage,
});

const stories = [
  {
    name: "Lakshmi · Koraput, Odisha",
    title: "From cash-only to confident saver",
    quote:
      "Opening my first bank account changed everything. I now save monthly for my daughter's education, and the Bank Mitra visits our village every week.",
  },
  {
    name: "Ramesh · Vizianagaram, AP",
    title: "Microcredit fueled my dairy business",
    quote:
      "A small loan helped me buy two cows. Today, I sell milk to three villages and have repaid my loan in full.",
  },
  {
    name: "Ananya SHG · Ganjam, Odisha",
    title: "Self-help group, self-reliant futures",
    quote:
      "Our group of 12 women now runs a tailoring unit. Financial literacy training and DBT-linked accounts brought us here.",
  },
];

function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact · Success Stories"
        title="Stories from the last mile."
        description="Real people. Real progress. The everyday impact of inclusive finance."
      />
      <section className="container-prose pb-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s) => (
            <article
              key={s.name}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-5 font-display text-lg text-foreground leading-snug">{s.title}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{s.quote}"</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
                {s.name}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          <Sparkles className="mx-auto mb-3 h-5 w-5 text-accent" />
          More stories from the field are being collected. Have one to share?
          Reach us at <a className="text-primary font-medium" href="mailto:info@gramtarang.org">info@gramtarang.org</a>.
        </div>
      </section>
    </>
  );
}
