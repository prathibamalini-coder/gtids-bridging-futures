import { useState } from "react";

interface City {
  name: string;
  /** Approx longitude → x% on the map (0-100) */
  x: number;
  /** Approx latitude → y% on the map (0-100) */
  y: number;
}

// Coordinates calibrated to the simplified India silhouette path below.
// (x,y) are percentages relative to the 600×680 viewBox.
const cities: City[] = [
  { name: "Delhi", x: 38, y: 24 },
  { name: "Mumbai", x: 22, y: 56 },
  { name: "Goa", x: 24, y: 66 },
  { name: "Hyderabad", x: 41, y: 62 },
  { name: "Vijayawada", x: 49, y: 66 },
  { name: "Andhra", x: 46, y: 70 },
  { name: "Chennai", x: 47, y: 78 },
  { name: "Tamil Nadu", x: 42, y: 84 },
  { name: "Odisha", x: 56, y: 53 },
  { name: "Koraput", x: 52, y: 58 },
];

/**
 * 3D-styled stylised India map highlighting the 10+ key cities & states
 * where GTIDS operates. Uses pure SVG with CSS shadows + gradients to
 * achieve a tactile, lifted feel — no external map library required.
 */
export function IndiaImpactMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Soft 3D platform shadow under the map */}
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-2 h-10 rounded-[50%] blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.36 0.07 158 / 0.45), transparent 70%)",
        }}
      />

      <div
        className="relative rounded-[2rem] p-6 md:p-10"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.015 220) 0%, oklch(0.94 0.025 200) 60%, oklch(0.9 0.04 180) 100%)",
          boxShadow:
            "0 30px 60px -30px oklch(0.36 0.07 158 / 0.35), inset 0 1px 0 0 oklch(1 0 0 / 0.7), inset 0 -2px 6px 0 oklch(0 0 0 / 0.05)",
        }}
      >
        <svg
          viewBox="0 0 600 680"
          className="w-full h-auto block"
          role="img"
          aria-label="Map of India highlighting GTIDS presence across 14 states"
        >
          <defs>
            <linearGradient id="indiaFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.12 165)" />
              <stop offset="55%" stopColor="oklch(0.42 0.1 175)" />
              <stop offset="100%" stopColor="oklch(0.32 0.08 220)" />
            </linearGradient>
            <linearGradient id="indiaHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(1 0 0 / 0.35)" />
              <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
            </linearGradient>
            <filter id="india3d" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="14"
                stdDeviation="14"
                floodColor="oklch(0.32 0.08 220)"
                floodOpacity="0.45"
              />
            </filter>
            <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.85 0.18 62 / 0.7)" />
              <stop offset="70%" stopColor="oklch(0.78 0.15 62 / 0)" />
            </radialGradient>
          </defs>

          {/* Stylised India silhouette (single path, hand-tuned) */}
          <g filter="url(#india3d)">
            <path
              fill="url(#indiaFill)"
              d="M236,52
                 C260,40 296,42 322,52
                 C346,60 360,80 384,86
                 C410,92 432,82 452,98
                 C472,114 466,142 480,164
                 C496,188 522,206 524,236
                 C528,272 498,290 484,316
                 C470,344 482,372 470,400
                 C458,428 432,440 414,464
                 C396,488 396,520 380,544
                 C364,570 340,578 318,598
                 C300,614 296,640 278,648
                 C262,656 246,640 240,620
                 C232,594 248,572 246,548
                 C244,520 222,500 214,474
                 C204,442 220,414 212,384
                 C204,354 178,340 166,312
                 C152,278 168,250 156,222
                 C146,196 122,190 116,164
                 C110,138 132,118 152,104
                 C172,90 198,82 214,72
                 C224,66 230,58 236,52 Z"
            />
            {/* Glossy top highlight */}
            <path
              fill="url(#indiaHighlight)"
              d="M236,52
                 C260,40 296,42 322,52
                 C346,60 360,80 384,86
                 C410,92 432,82 452,98
                 C472,114 466,142 480,164
                 C492,184 510,196 518,216
                 C490,210 458,210 432,224
                 C400,238 380,234 348,228
                 C312,220 282,238 250,232
                 C220,226 198,200 174,180
                 C152,162 130,156 122,140
                 C118,120 134,108 152,104
                 C172,90 198,82 214,72
                 C224,66 230,58 236,52 Z"
              opacity="0.55"
            />
          </g>

          {/* City dots + labels */}
          {cities.map((c, i) => {
            const cx = (c.x / 100) * 600;
            const cy = (c.y / 100) * 680;
            const isActive = active === c.name;
            return (
              <g
                key={c.name}
                onMouseEnter={() => setActive(c.name)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(c.name)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                style={{ cursor: "pointer", outline: "none" }}
              >
                {/* Glow halo */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isActive ? 32 : 22}
                  fill="url(#dotGlow)"
                  style={{ transition: "r 250ms ease" }}
                />
                {/* Pulsing ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="10"
                  fill="none"
                  stroke="oklch(0.85 0.18 62 / 0.7)"
                  strokeWidth="1.5"
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    animation: `mapPulse 2.4s ease-out ${i * 0.18}s infinite`,
                  }}
                />
                {/* Solid dot with 3D shading */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="6"
                  fill="oklch(0.78 0.15 62)"
                  stroke="oklch(1 0 0)"
                  strokeWidth="1.5"
                  style={{
                    filter: "drop-shadow(0 2px 3px oklch(0 0 0 / 0.35))",
                  }}
                />
                {/* Label */}
                <g
                  style={{
                    transition: "opacity 200ms ease, transform 200ms ease",
                    opacity: isActive ? 1 : 0.85,
                  }}
                >
                  <rect
                    x={cx + 10}
                    y={cy - 16}
                    rx="6"
                    ry="6"
                    width={c.name.length * 7 + 14}
                    height="22"
                    fill="oklch(1 0 0 / 0.92)"
                    stroke="oklch(0.36 0.07 158 / 0.2)"
                    strokeWidth="1"
                    style={{
                      filter: "drop-shadow(0 4px 8px oklch(0 0 0 / 0.18))",
                    }}
                  />
                  <text
                    x={cx + 17}
                    y={cy}
                    fontSize="12"
                    fontWeight="600"
                    fill="oklch(0.22 0.04 160)"
                    fontFamily="Inter, sans-serif"
                  >
                    {c.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Footer caption */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: "oklch(0.78 0.15 62)" }}
            />
            <span>Active GTIDS regions</span>
          </div>
          <div className="font-medium text-foreground">
            14 States · 25,000+ Villages
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mapPulse {
          0%   { r: 8;  opacity: 0.9; }
          70%  { r: 24; opacity: 0;   }
          100% { r: 24; opacity: 0;   }
        }
      `}</style>
    </div>
  );
}
