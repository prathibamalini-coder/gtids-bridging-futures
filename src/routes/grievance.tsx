import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/grievance")({
  head: () => ({
    meta: [
      { title: "Grievance — GTIDS" },
      {
        name: "description",
        content:
          "Raise a grievance with GTIDS. We take every concern seriously and respond promptly.",
      },
      { property: "og:title", content: "Grievance — GTIDS" },
      {
        property: "og:description",
        content: "Submit a grievance to the GTIDS team — we respond promptly.",
      },
    ],
  }),
  component: GrievancePage,
});

function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact · Grievance"
        title="Raise a grievance."
        description="Your feedback helps us serve communities better. Share your concern and our team will get back to you."
      />
      <section className="container-prose pb-14">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/20 text-accent">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl text-foreground">Grievance form</h2>
              <p className="text-sm text-muted-foreground">
                We treat every report with care and confidentiality.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-primary-soft/60 p-6 text-center">
              <div className="font-display text-lg text-primary">Received</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Thank you. Your grievance has been logged and our team will reach out shortly.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                  placeholder="Describe your grievance in detail…"
                />
              </div>
              <button
                type="submit"
                className="justify-self-start inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Submit grievance
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
