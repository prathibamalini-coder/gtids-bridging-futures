import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/vision", label: "Our Vision" },
  { to: "/mission", label: "Our Mission" },
  { to: "/services", label: "Our Services" },
  { to: "/culture", label: "Culture" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-semibold shadow-soft">
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              GTIDS
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Inclusive Development
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary bg-primary-soft/50" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-primary hover:bg-primary-soft/40"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-0.5"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="px-2 py-3 text-sm font-medium text-foreground border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
