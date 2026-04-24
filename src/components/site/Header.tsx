import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem =
  | { label: string; to: string }
  | { label: string; children: { to: string; label: string }[] };

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/vision", label: "Our Vision & Mission" },
    ],
  },
  { label: "Services", to: "/services" },
  {
    label: "Organization",
    children: [
      { to: "/organization/directors", label: "Directors" },
      { to: "/organization/team", label: "Team" },
      { to: "/organization/organogram", label: "Organogram" },
    ],
  },
  {
    label: "Impact",
    children: [
      { to: "/impact/stories", label: "Success Stories" },
      { to: "/impact/partners", label: "Partners" },
    ],
  },
  { label: "Drone", to: "/drone" },
  {
    label: "Contact",
    children: [
      { to: "/contact", label: "Contact Us" },
      { to: "/grievance", label: "Grievance" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          onClick={() => {
            setOpen(false);
            setOpenMenu(null);
          }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-semibold shadow-soft">
            G
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              GTIDS
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Inclusive Development
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          ref={menuRef}
          className="hidden lg:flex items-center gap-0.5"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {nav.map((item) => {
            if ("to" in item) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  activeProps={{ className: "text-primary bg-primary-soft/50" }}
                  activeOptions={{ exact: item.to === "/" }}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-primary hover:bg-primary-soft/40"
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-primary hover:bg-primary-soft/40"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2 min-w-[14rem] z-50">
                    <div className="rounded-xl border border-border bg-popover p-1.5 shadow-elevated animate-fade-up">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpenMenu(null)}
                          activeProps={{ className: "bg-primary-soft/60 text-primary" }}
                          className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary-soft/40 hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-2">
            {nav.map((item) => {
              if ("to" in item) {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                    className="px-2 py-3 text-sm font-medium text-foreground border-b border-border/60"
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = openMobileGroup === item.label;
              return (
                <div key={item.label} className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup(isOpen ? null : item.label)
                    }
                    className="flex w-full items-center justify-between px-2 py-3 text-sm font-medium text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-2 pl-4">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => {
                            setOpen(false);
                            setOpenMobileGroup(null);
                          }}
                          className="block px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
