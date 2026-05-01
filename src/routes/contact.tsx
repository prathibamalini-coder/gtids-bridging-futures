import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — GTIDS" },
      {
        name: "description",
        content:
          "Connect with GTIDS — partners, beneficiaries, institutions and individuals welcome. Reach our corporate office in Vishakhapatnam.",
      },
      { property: "og:title", content: "Contact Us — GTIDS" },
      {
        property: "og:description",
        content: "Get in touch with the GTIDS team to collaborate on inclusive development.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Whether you are a partner, beneficiary, institution, or individual looking to collaborate, our team is here to assist you."
      />
      <section className="container-prose pb-12 grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="font-display text-xl text-foreground">Corporate Office</h3>
            <div className="mt-5 space-y-5 text-sm">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground leading-relaxed">
                  <div className="font-medium text-foreground">Address</div>
                  Gram Tarang Inclusive Development Services Pvt. Ltd.<br />
                  Flat no 501, Akruthi Vijayalakshmi Residency,<br />
                  P &amp; T Colony, Seethammadhara,<br />
                  Vishakhapatnam – 530013
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Phone</div>
                  <a href="tel:+91" className="hover:text-primary">+91 93488 65447</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Email</div>
                  <a href="mailto:info@gramtarang.org" className="hover:text-primary">
                    info@gramtarang.org
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Globe className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Website</div>
                  <a
                    href="https://www.gramtarang.org"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    www.gramtarang.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
            <h3 className="font-display text-2xl text-foreground">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us a little about your interest and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-primary-soft/60 p-6 text-center">
                <div className="font-display text-lg text-primary">Thank you!</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your message has been received. Our team will reach out soon.
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Organization" name="org" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                    placeholder="Tell us how we can help…"
                  />
                </div>
                <button
                  type="submit"
                  className="justify-self-start inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
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
