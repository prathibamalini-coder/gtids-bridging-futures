import { useState } from "react";

interface City {
  name: string;
  /** Approx longitude → x% on the map (0-100) */
  x: number;
  /** Approx latitude → y% on the map (0-100) */
  y: number;
}

// Coordinates calibrated to the realistic India silhouette path below.
// (x,y) are percentages relative to the 600×680 viewBox.
const cities: City[] = [
  { name: "Delhi", x: 36, y: 28 },
  { name: "Mumbai", x: 28, y: 58 },
  { name: "Goa", x: 30, y: 66 },
  { name: "Hyderabad", x: 42, y: 64 },
  { name: "Vijayawada", x: 48, y: 67 },
  { name: "Andhra", x: 45, y: 72 },
  { name: "Chennai", x: 46, y: 78 },
  { name: "Tamil Nadu", x: 41, y: 84 },
  { name: "Odisha", x: 53, y: 54 },
  { name: "Koraput", x: 50, y: 58 },
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

          {/* Realistic India silhouette — mainland + tapering southern peninsula */}
          <g filter="url(#india3d)">
            <path
              fill="url(#indiaFill)"
              d="M150,90
                 C170,70 200,62 232,60
                 C260,58 282,70 304,80
                 C324,88 342,84 364,82
                 C390,80 414,88 436,100
                 C458,112 472,128 484,148
                 C496,168 502,188 510,208
                 C520,232 528,256 522,280
                 C516,304 498,318 482,336
                 C468,352 460,372 452,392
                 C444,412 434,430 422,448
                 C410,468 398,486 386,504
                 C374,524 364,544 352,564
                 C342,580 332,596 320,610
                 C308,624 294,634 280,634
                 C268,634 260,622 256,608
                 C252,592 256,576 260,560
                 C266,538 272,516 270,494
                 C266,470 252,452 240,432
                 C228,412 218,392 210,370
                 C202,346 200,322 192,300
                 C182,274 166,256 152,236
                 C138,216 124,196 116,174
                 C108,150 110,124 122,108
                 C130,98 140,92 150,90 Z
                 M380,170
                 C390,168 398,176 396,186
                 C394,196 384,200 376,196
                 C368,192 370,178 380,170 Z"
            />
            {/* Glossy top highlight */}
            <path
              fill="url(#indiaHighlight)"
              d="M150,90
                 C170,70 200,62 232,60
                 C260,58 282,70 304,80
                 C324,88 342,84 364,82
                 C390,80 414,88 436,100
                 C458,112 472,128 484,148
                 C490,162 494,176 498,188
                 C470,184 442,188 414,196
                 C384,204 354,206 324,200
                 C292,194 262,200 232,196
                 C204,192 180,180 160,164
                 C140,148 124,134 118,118
                 C120,106 130,96 150,90 Z"
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
