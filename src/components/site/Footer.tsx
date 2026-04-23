import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-prose py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-semibold">
              G
            </span>
            <span className="font-display text-lg font-semibold">GTIDS</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
            Gram Tarang Inclusive Development Services — building financial inclusion and
            sustainable livelihoods across rural and tribal India since 2011.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/vision" className="hover:text-primary transition-colors">Our Vision</Link></li>
            <li><Link to="/mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link to="/culture" className="hover:text-primary transition-colors">Culture</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Flat no 501, Akruthi Vijayalakshmi Residency, P &amp; T Colony, Seethammadhara, Vishakhapatnam – 530013</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:+91" className="hover:text-primary transition-colors">+91-XXXXXXXXXX</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:info@gramtarang.org" className="hover:text-primary transition-colors">info@gramtarang.org</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Gram Tarang Inclusive Development Services Pvt. Ltd.</p>
          <p>An outreach initiative of Centurion University of Technology and Management.</p>
        </div>
      </div>
    </footer>
  );
}
