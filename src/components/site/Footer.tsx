import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowUpRight, Facebook, Linkedin, Twitter, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer
      className="relative mt-20 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.04 220) 0%, oklch(0.22 0.06 200) 45%, oklch(0.24 0.08 160) 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.7 0.1 158 / 0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, oklch(0.78 0.15 62 / 0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.15 62 / 0.6), transparent)",
        }}
      />

      <div className="relative container-prose pt-16 pb-10 grid gap-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden shadow-elevated transition-transform group-hover:scale-105"
            >
              <img
                src={logo}
                alt="GTIDS Logo"
                width={56}
                height={56}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-white leading-tight">GTIDS</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                Inclusive Development
              </div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
            Gram Tarang Inclusive Development Services — building financial inclusion and
            sustainable livelihoods across rural and tribal India since 2011.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Facebook, href: "#", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/80 transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/about" className="inline-flex items-center gap-1 hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/vision" className="hover:text-accent transition-colors">Vision &amp; Mission</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/drone" className="hover:text-accent transition-colors">Drone</Link></li>
          </ul>
        </div>

        {/* Organization */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Organization
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/organization/directors" className="hover:text-accent transition-colors">Directors</Link></li>
            <li><Link to="/organization/team" className="hover:text-accent transition-colors">Team</Link></li>
            <li><Link to="/organization/organogram" className="hover:text-accent transition-colors">Organogram</Link></li>
            <li><Link to="/impact/stories" className="hover:text-accent transition-colors">Success Stories</Link></li>
            <li><Link to="/impact/partners" className="hover:text-accent transition-colors">Partners</Link></li>
          </ul>
        </div>

        {/* Reach */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>Flat no 501, Akruthi Vijayalakshmi Residency, P &amp; T Colony, Seethammadhara, Visakhapatnam – 530013</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:+91" className="hover:text-accent transition-colors">+91-XXXXXXXXXX</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:info@gramtarang.org" className="hover:text-accent transition-colors">info@gramtarang.org</a>
            </li>
            <li>
              <Link
                to="/grievance"
                className="inline-flex items-center gap-1 text-accent hover:text-white transition-colors"
              >
                Raise a grievance <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-prose py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Gram Tarang Inclusive Development Services Pvt. Ltd.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 text-accent fill-accent" /> for rural India · An outreach initiative of CUTM
          </p>
        </div>
      </div>
    </footer>
  );
}
