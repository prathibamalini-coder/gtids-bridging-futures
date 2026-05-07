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

const RECIPIENT = "aswinikumar@cutmap.ac.in";

function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Grievance from ${formData.name}`;
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Grievance:\n${formData.message}`;
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
                Your email client should have opened with your grievance. If not, please email us directly at {RECIPIENT}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-primary underline"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="g-name" className="text-sm font-medium text-foreground">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="g-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="g-email" className="text-sm font-medium text-foreground">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="g-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="g-message" className="text-sm font-medium text-foreground">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="g-message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
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
