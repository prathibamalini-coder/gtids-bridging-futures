import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import visionImg from "@/assets/vision.jpg";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — GTIDS" },
      {
        name: "description",
        content:
          "An inclusive society where every rural and tribal household has access to formal finance and sustainable livelihoods.",
      },
      { property: "og:title", content: "Our Vision — GTIDS" },
      {
        property: "og:description",
        content: "Empowering every rural and tribal household to participate in India's economic growth.",
      },
      { property: "og:image", content: visionImg },
      { name: "twitter:image", content: visionImg },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      <PageHero eyebrow="Our Vision" title="An inclusive and empowered society." />
      <section className="container-prose pb-12 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug text-balance border-l-4 border-accent pl-6">
            To build an inclusive and empowered society where every rural and tribal household has
            seamless access to formal financial systems, sustainable livelihood opportunities, and
            the ability to participate fully in the economic growth of the nation.
          </blockquote>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { t: "Inclusive", d: "Every household, every voice." },
              { t: "Empowered", d: "Through access and opportunity." },
              { t: "Participatory", d: "Full role in economic growth." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl bg-primary-soft/40 p-5">
                <div className="font-display text-lg text-primary">{p.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={visionImg}
              alt="Aerial view of a rural Indian village at sunrise"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
