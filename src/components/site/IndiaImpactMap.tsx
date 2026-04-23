import { useState } from "react";

interface Location {
  name: string;
  /** Approx longitude → x% on the map (0-100) */
  x: number;
  /** Approx latitude → y% on the map (0-100) */
  y: number;
  branches: number;
  agents: number;
  villages: number;
}

// (x,y) calibrated against the realistic India path below (viewBox 0 0 600 680).
const locations: Location[] = [
  { name: "Delhi",       x: 36, y: 22, branches: 12, agents: 320,  villages: 480  },
  { name: "Mumbai",      x: 22, y: 52, branches: 18, agents: 540,  villages: 720  },
  { name: "Goa",         x: 24, y: 64, branches: 6,  agents: 140,  villages: 210  },
  { name: "Hyderabad",   x: 41, y: 60, branches: 22, agents: 680,  villages: 950  },
  { name: "Vijayawada",  x: 49, y: 64, branches: 14, agents: 410,  villages: 600  },
  { name: "Andhra",      x: 46, y: 70, branches: 28, agents: 920,  villages: 1450 },
  { name: "Chennai",     x: 47, y: 78, branches: 20, agents: 610,  villages: 870  },
  { name: "Tamil Nadu",  x: 42, y: 84, branches: 32, agents: 1080, villages: 1700 },
  { name: "Odisha",      x: 56, y: 50, branches: 36, agents: 1240, villages: 2100 },
  { name: "Koraput",     x: 52, y: 56, branches: 9,  agents: 260,  villages: 380  },
];

/**
 * Realistic India map with hover tooltips showing per-location
 * branches, agents and villages served. SVG path adapted from a
 * simplified GeoJSON outline of the Indian mainland + Sri Lanka.
 */
export function IndiaImpactMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeLoc = locations.find((l) => l.name === active);

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
        <div className="relative">
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

            {/* Realistic India silhouette — mainland + J&K crown + NE arm + Sri Lanka */}
            <g filter="url(#india3d)">
              {/* Mainland India */}
              <path
                fill="url(#indiaFill)"
                d="M188,78
                   C200,62 220,52 244,48
                   C268,44 290,52 308,62
                   C326,72 344,72 364,68
                   C386,64 408,68 428,80
                   L444,72
                   C452,68 462,72 462,82
                   L456,96
                   C470,108 484,124 494,144
                   C504,164 510,184 514,206
                   C520,232 522,256 514,278
                   C506,300 488,316 472,332
                   C460,346 452,362 446,380
                   C440,400 432,418 422,436
                   C412,454 400,472 388,490
                   C376,508 364,526 352,544
                   C342,560 330,576 316,588
                   C302,600 286,608 272,604
                   C260,600 254,586 254,572
                   C254,556 260,540 264,524
                   C270,504 274,484 268,464
                   C260,442 244,426 232,408
                   C218,388 208,366 202,344
                   C194,318 192,290 184,264
                   C174,238 158,218 144,198
                   C130,178 118,158 114,136
                   C110,114 122,96 140,86
                   C156,78 174,80 188,78 Z
                   M450,90
                   L468,84
                   C476,82 484,86 484,94
                   L478,108
                   C470,112 458,108 450,100
                   Z
                   M488,116
                   C500,114 514,118 524,128
                   C534,138 540,152 540,168
                   C540,180 532,190 520,192
                   C508,194 498,186 492,176
                   C486,164 484,150 484,136
                   C484,128 484,120 488,116 Z"
              />
              {/* North-East narrow arm */}
              <path
                fill="url(#indiaFill)"
                d="M482,164
                   C498,158 516,160 532,168
                   C548,176 558,190 562,206
                   C566,222 562,238 552,246
                   C540,254 524,250 512,242
                   C498,232 488,218 484,202
                   C482,190 480,176 482,164 Z"
              />
              {/* Sri Lanka */}
              <path
                fill="url(#indiaFill)"
                d="M348,612
                   C358,608 370,612 376,624
                   C382,636 380,652 372,662
                   C364,672 350,672 342,664
                   C334,654 334,640 338,628
                   C340,620 344,614 348,612 Z"
              />
              {/* Glossy top highlight */}
              <path
                fill="url(#indiaHighlight)"
                d="M188,78
                   C200,62 220,52 244,48
                   C268,44 290,52 308,62
                   C326,72 344,72 364,68
                   C386,64 408,68 428,80
                   C440,90 452,104 462,118
                   C440,118 416,124 392,128
                   C362,134 332,134 302,128
                   C272,122 244,118 218,124
                   C196,128 178,134 162,140
                   C146,146 130,148 122,138
                   C118,124 124,108 140,98
                   C156,86 174,80 188,78 Z"
                opacity="0.55"
              />
            </g>

            {/* Location dots */}
            {locations.map((loc, i) => {
              const cx = (loc.x / 100) * 600;
              const cy = (loc.y / 100) * 680;
              const isActive = active === loc.name;
              return (
                <g
                  key={loc.name}
                  onMouseEnter={() => setActive(loc.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(loc.name)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  style={{ cursor: "pointer", outline: "none" }}
                  aria-label={`${loc.name}: ${loc.branches} branches, ${loc.agents} agents`}
                >
                  {/* Glow halo */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 34 : 22}
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
                    r={isActive ? 8 : 6}
                    fill="oklch(0.78 0.15 62)"
                    stroke="oklch(1 0 0)"
                    strokeWidth="1.5"
                    style={{
                      filter: "drop-shadow(0 2px 3px oklch(0 0 0 / 0.35))",
                      transition: "r 200ms ease",
                    }}
                  />
                  {/* Label chip — always visible but subtle */}
                  <g
                    style={{
                      transition: "opacity 200ms ease",
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    <rect
                      x={cx + 10}
                      y={cy - 16}
                      rx="6"
                      ry="6"
                      width={loc.name.length * 7 + 14}
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
                      {loc.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Hover tooltip — overlaid */}
          {activeLoc && (
            <div
              className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-2xl px-5 py-4 text-white shadow-elevated animate-fade-up"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.32 0.08 220) 0%, oklch(0.36 0.07 158) 100%)",
                boxShadow:
                  "0 20px 40px -16px oklch(0.32 0.08 220 / 0.55), inset 0 1px 0 0 oklch(1 0 0 / 0.18)",
                minWidth: 240,
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                GTIDS Presence
              </div>
              <div className="mt-1 font-display text-xl">{activeLoc.name}</div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-display text-lg leading-none">
                    {activeLoc.branches}+
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
                    Branches
                  </div>
                </div>
                <div>
                  <div className="font-display text-lg leading-none">
                    {activeLoc.agents.toLocaleString("en-IN")}+
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
                    Agents
                  </div>
                </div>
                <div>
                  <div className="font-display text-lg leading-none">
                    {activeLoc.villages.toLocaleString("en-IN")}+
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
                    Villages
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer caption */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: "oklch(0.78 0.15 62)" }}
            />
            <span>Hover a location to view branches, agents & villages</span>
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
