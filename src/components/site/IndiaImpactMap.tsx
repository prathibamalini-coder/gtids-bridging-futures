import { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator } from "d3-geo";
import indiaTopo from "@/assets/geo/india.json";

// Use the lighter "states" layer of the TopoJSON
const indiaStates = {
  ...(indiaTopo as any),
  objects: { states: (indiaTopo as any).objects.states },
};

// Operational states — all other states stay neutral
const HIGHLIGHTED_STATES = new Set<string>([
  "Odisha",
  "Bihar",
  "Assam",
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Karnataka",
  "Goa",
]);

const STATE_COLOR: Record<string, string> = {
  Odisha: "oklch(0.7 0.14 35)",
  Bihar: "oklch(0.74 0.13 90)",
  Assam: "oklch(0.7 0.13 145)",
  "Andhra Pradesh": "oklch(0.7 0.14 220)",
  Telangana: "oklch(0.72 0.13 260)",
  "Tamil Nadu": "oklch(0.7 0.14 15)",
  Karnataka: "oklch(0.72 0.13 175)",
  Goa: "oklch(0.78 0.14 70)",
};

const NEUTRAL = "oklch(0.96 0.005 100)";

const HEAD_OFFICE = {
  name: "Head Office — Visakhapatnam",
  short: "Visakhapatnam",
  coordinates: [83.2185, 17.6868] as [number, number],
};

interface SparkleSeed {
  state: string;
  base: [number, number];
  offsets: { dx: number; dy: number; r: number; delay: number; dur: number }[];
}

// Approximate centers of highlighted states for sparkle anchoring
const STATE_CENTERS: Record<string, [number, number]> = {
  Odisha: [85.0, 20.5],
  Bihar: [85.5, 25.5],
  Assam: [92.9, 26.2],
  "Andhra Pradesh": [80.0, 15.9],
  Telangana: [79.0, 17.9],
  "Tamil Nadu": [78.6, 11.1],
  Karnataka: [76.0, 14.5],
  Goa: [74.0, 15.4],
};

function rand(seed: number) {
  // deterministic pseudo-random in [-1, 1]
  const x = Math.sin(seed) * 10000;
  return (x - Math.floor(x)) * 2 - 1;
}

function buildSparkles(): SparkleSeed[] {
  const list: SparkleSeed[] = [];
  let s = 1;
  for (const [state, base] of Object.entries(STATE_CENTERS)) {
    const count = 4 + Math.floor((Math.abs(rand(s++)) + 1) * 1.5); // 4–6
    const offsets = Array.from({ length: count }, (_, i) => ({
      dx: rand(s++) * 1.6,
      dy: rand(s++) * 1.6,
      r: 0.45 + (Math.abs(rand(s++)) * 0.5),
      delay: i * 0.4 + Math.abs(rand(s++)) * 1.2,
      dur: 3.2 + Math.abs(rand(s++)) * 1.8,
    }));
    list.push({ state, base, offsets });
  }
  return list;
}

export function IndiaImpactMap() {
  const [hover, setHover] = useState<string | null>(null);
  const sparkles = useMemo(buildSparkles, []);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* soft 3D platform shadow */}
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-2 h-10 rounded-[50%] blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.36 0.07 158 / 0.45), transparent 70%)",
        }}
      />

      <div
        className="relative rounded-[2rem] p-4 sm:p-6 md:p-10"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.98 0.01 220) 0%, oklch(0.95 0.02 200) 60%, oklch(0.92 0.03 180) 100%)",
          boxShadow:
            "0 30px 60px -30px oklch(0.36 0.07 158 / 0.35), inset 0 1px 0 0 oklch(1 0 0 / 0.7), inset 0 -2px 6px 0 oklch(0 0 0 / 0.05)",
        }}
      >
        <div className="text-center mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Operational Presence
          </span>
          <h3 className="mt-1 font-display text-xl md:text-2xl text-foreground">
            8 States · Headquartered in Visakhapatnam
          </h3>
        </div>

        <div className="relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 950, center: [82, 22] }}
            width={600}
            height={680}
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <defs>
              <filter id="stateShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="4"
                  floodColor="oklch(0.32 0.08 220)"
                  floodOpacity="0.18"
                />
              </filter>
              <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.7 0.22 25 / 0.85)" />
                <stop offset="70%" stopColor="oklch(0.7 0.22 25 / 0)" />
              </radialGradient>
              <radialGradient id="sparkle" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(1 0 0 / 0.95)" />
                <stop offset="60%" stopColor="oklch(0.92 0.16 80 / 0.6)" />
                <stop offset="100%" stopColor="oklch(0.92 0.16 80 / 0)" />
              </radialGradient>
            </defs>

            <g filter="url(#stateShadow)">
              <Geographies geography={indiaStates}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties?.st_nm as string | undefined;
                    const isHighlighted = !!name && HIGHLIGHTED_STATES.has(name);
                    const fill = isHighlighted
                      ? STATE_COLOR[name!] ?? "oklch(0.7 0.13 160)"
                      : NEUTRAL;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => isHighlighted && setHover(name!)}
                        onMouseLeave={() => setHover(null)}
                        style={{
                          default: {
                            fill,
                            stroke: "oklch(0.78 0.01 200 / 0.9)",
                            strokeWidth: 0.6,
                            strokeLinejoin: "round",
                            outline: "none",
                            transition: "fill 200ms ease",
                          },
                          hover: {
                            fill: isHighlighted
                              ? "oklch(0.62 0.18 50)"
                              : "oklch(0.93 0.01 100)",
                            stroke: "oklch(1 0 0)",
                            strokeWidth: 0.9,
                            outline: "none",
                            cursor: isHighlighted ? "pointer" : "default",
                          },
                          pressed: { fill, outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </g>

            {/* Air-connectivity routes from Head Office to each highlighted state */}
            {Object.entries(STATE_CENTERS).map(([state, coord]) => (
              <Line
                key={`route-${state}`}
                from={HEAD_OFFICE.coordinates}
                to={coord}
                stroke="oklch(0.62 0.22 25 / 0.7)"
                strokeWidth={1.1}
                strokeLinecap="round"
                strokeDasharray="3 4"
                style={{
                  animation: "routeDash 1.6s linear infinite",
                }}
              />
            ))}

            {/* State name labels on highlighted states */}
            {Object.entries(STATE_CENTERS).map(([state, coord]) => (
              <Marker key={`label-${state}`} coordinates={coord}>
                <circle
                  r={2.2}
                  fill="oklch(1 0 0)"
                  stroke="oklch(0.32 0.08 220)"
                  strokeWidth={1}
                />
                <text
                  textAnchor="middle"
                  y={-7}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 8.5,
                    fontWeight: 700,
                    fill: "oklch(0.22 0.05 220)",
                    paintOrder: "stroke",
                    stroke: "oklch(1 0 0 / 0.92)",
                    strokeWidth: 2.8,
                    strokeLinejoin: "round",
                    pointerEvents: "none",
                  }}
                >
                  {state}
                </text>
              </Marker>
            ))}

            {/* Sparkles anchored to highlighted state centers via Marker projection */}
            {sparkles.map((sp) => (
              <Marker
                key={sp.state}
                coordinates={[sp.base[0], sp.base[1]]}
                style={{
                  default: { pointerEvents: "none" },
                  hover: { pointerEvents: "none" },
                  pressed: { pointerEvents: "none" },
                }}
              >
                {sp.offsets.map((o, i) => (
                  <circle
                    key={i}
                    cx={o.dx * 6}
                    cy={o.dy * 6}
                    r={o.r * 1.6}
                    fill="url(#sparkle)"
                    style={{
                      transformOrigin: `${o.dx * 6}px ${o.dy * 6}px`,
                      animation: `sparkleFloat ${o.dur}s ease-in-out ${o.delay}s infinite`,
                    }}
                  />
                ))}
              </Marker>
            ))}

            {/* Head Office marker (Visakhapatnam) */}
            <Marker coordinates={HEAD_OFFICE.coordinates}>
              <circle r={20} fill="url(#hqGlow)" />
              <circle
                r={5}
                fill="none"
                stroke="oklch(0.7 0.22 25 / 0.85)"
                strokeWidth={1.4}
                style={{
                  animation: "hqPulse 2.2s ease-out infinite",
                  transformOrigin: "center",
                }}
              />
              <circle
                r={6}
                fill="oklch(0.62 0.22 25)"
                stroke="oklch(1 0 0)"
                strokeWidth={1.5}
                style={{ filter: "drop-shadow(0 2px 4px oklch(0 0 0 / 0.4))" }}
              />
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  fill: "oklch(0.32 0.12 25)",
                  paintOrder: "stroke",
                  stroke: "oklch(1 0 0 / 0.9)",
                  strokeWidth: 2.5,
                  strokeLinejoin: "round",
                }}
              >
                Head Office
              </text>
              <text
                textAnchor="middle"
                y={18}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 8.5,
                  fontWeight: 600,
                  fill: "oklch(0.22 0.04 160)",
                  paintOrder: "stroke",
                  stroke: "oklch(1 0 0 / 0.9)",
                  strokeWidth: 2.5,
                  strokeLinejoin: "round",
                }}
              >
                Visakhapatnam
              </text>
            </Marker>
          </ComposableMap>

          {hover && (
            <div
              className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-elevated animate-fade-up"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.32 0.08 220) 0%, oklch(0.36 0.07 158) 100%)",
              }}
            >
              {hover} · Operational
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: "oklch(0.62 0.22 25)" }}
              />
              <span className="text-foreground font-semibold">Head Office</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ background: "oklch(0.7 0.14 220)" }}
              />
              <span>Operational State</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm border border-border"
                style={{ background: NEUTRAL }}
              />
              <span>Other</span>
            </span>
          </div>
          <div className="font-medium text-foreground">8 States · Pan-India Network</div>
        </div>
      </div>

      <style>{`
        @keyframes hqPulse {
          0%   { r: 5;  opacity: 0.9; }
          70%  { r: 20; opacity: 0;   }
          100% { r: 20; opacity: 0;   }
        }
        @keyframes sparkleFloat {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.8); }
          40%      { opacity: 1; transform: translateY(-3px) scale(1.1); }
          70%      { opacity: 0.7; transform: translateY(-5px) scale(1); }
        }
        @keyframes routeDash {
          to { stroke-dashoffset: -14; }
        }
      `}</style>
    </div>
  );
}
