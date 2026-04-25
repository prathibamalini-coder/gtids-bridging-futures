import { Landmark } from "lucide-react";

const partners = [
  { name: "State Bank of India", short: "SBI", grad: "linear-gradient(135deg, oklch(0.45 0.18 265) 0%, oklch(0.32 0.14 270) 100%)" },
  { name: "Andhra Pragathi Grameena Bank", short: "APGB", grad: "linear-gradient(135deg, oklch(0.55 0.16 30) 0%, oklch(0.42 0.14 25) 100%)" },
  { name: "Tamil Nadu Grameena Bank", short: "TNGB", grad: "linear-gradient(135deg, oklch(0.55 0.16 145) 0%, oklch(0.4 0.13 160) 100%)" },
  { name: "Central Bank of India", short: "CBI", grad: "linear-gradient(135deg, oklch(0.5 0.18 25) 0%, oklch(0.38 0.14 350) 100%)" },
  { name: "Indian Overseas Bank", short: "IOB", grad: "linear-gradient(135deg, oklch(0.5 0.16 230) 0%, oklch(0.38 0.13 215) 100%)" },
  { name: "Centurion University", short: "CUTM", grad: "linear-gradient(135deg, oklch(0.55 0.16 60) 0%, oklch(0.42 0.14 40) 100%)" },
];

function PartnerPill({ short, name, grad }: { short: string; name: string; grad: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft min-w-max">
      <div
        className="grid h-11 w-11 place-items-center rounded-xl text-white font-display text-xs font-semibold shrink-0"
        style={{ background: grad, boxShadow: "inset 0 1px 0 0 oklch(1 0 0 / 0.25)" }}
      >
        {short}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="text-[11px] text-muted-foreground">Banking Partner</div>
      </div>
    </div>
  );
}

export function BankPartnersMarquee() {
  // duplicate list for seamless loop
  const loop = [...partners, ...partners];
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-12">
      <div className="container-prose mb-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <Landmark className="h-4 w-4" /> Trusted Partners
        </span>
        <h2 className="mt-2 font-display text-2xl md:text-3xl text-foreground">
          Powered by India's leading banks
        </h2>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-5 animate-bank-marquee">
          {loop.map((p, i) => (
            <PartnerPill key={`${p.short}-${i}`} {...p} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bank-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-bank-marquee {
          animation: bank-marquee 28s linear infinite;
        }
        .animate-bank-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
