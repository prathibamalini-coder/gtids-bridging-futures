import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaTopo from "@/assets/geo/india.json";

// Force the states layer (not districts) to keep the map clean
const indiaStates = {
  ...(indiaTopo as any),
  objects: { states: (indiaTopo as any).objects.states },
};

// Group states into colored regions for visual distinction
const REGION_COLORS: Record<string, string> = {
  north: "oklch(0.72 0.13 50)",   // warm amber
  south: "oklch(0.62 0.13 165)",  // teal green
  east:  "oklch(0.6 0.14 280)",   // indigo
  west:  "oklch(0.68 0.15 30)",   // coral
  ne:    "oklch(0.66 0.14 130)",  // lime
  central: "oklch(0.7 0.1 90)",   // muted gold
};

const STATE_REGION: Record<string, keyof typeof REGION_COLORS> = {
  // North
  "Jammu & Kashmir": "north", "Ladakh": "north", "Himachal Pradesh": "north",
  "Punjab": "north", "Haryana": "north", "Delhi": "north", "Uttarakhand": "north",
  "Uttar Pradesh": "north", "Rajasthan": "north", "Chandigarh": "north",
  // West
  "Gujarat": "west", "Maharashtra": "west", "Goa": "west",
  "Dadra and Nagar Haveli": "west", "Daman & Diu": "west",
  // Central
  "Madhya Pradesh": "central", "Chhattisgarh": "central", "Jharkhand": "central",
  // East
  "Bihar": "east", "West Bengal": "east", "Odisha": "east", "Sikkim": "east",
  // North East
  "Assam": "ne", "Arunachal Pradesh": "ne", "Nagaland": "ne", "Manipur": "ne",
  "Mizoram": "ne", "Tripura": "ne", "Meghalaya": "ne",
  // South
  "Andhra Pradesh": "south", "Telangana": "south", "Karnataka": "south",
  "Kerala": "south", "Tamil Nadu": "south", "Puducherry": "south",
  "Andaman & Nicobar Island": "south", "Lakshadweep": "south",
};

const colorForState = (name?: string) => {
  if (!name) return REGION_COLORS.central;
  const region = STATE_REGION[name];
  return region ? REGION_COLORS[region] : REGION_COLORS.central;
};

interface Location {
  name: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
  branches: number;
  agents: number;
  villages: number;
}

const locations: Location[] = [
  { name: "Delhi",      coordinates: [77.1025, 28.7041], branches: 12, agents: 320,  villages: 480  },
  { name: "Mumbai",     coordinates: [72.8777, 19.0760], branches: 18, agents: 540,  villages: 720  },
  { name: "Goa",        coordinates: [73.8278, 15.4909], branches: 6,  agents: 140,  villages: 210  },
  { name: "Hyderabad",  coordinates: [78.4867, 17.3850], branches: 22, agents: 680,  villages: 950  },
  { name: "Vijayawada", coordinates: [80.6480, 16.5062], branches: 14, agents: 410,  villages: 600  },
  { name: "Andhra",     coordinates: [80.0193, 15.9129], branches: 28, agents: 920,  villages: 1450 },
  { name: "Chennai",    coordinates: [80.2707, 13.0827], branches: 20, agents: 610,  villages: 870  },
  { name: "Tamil Nadu", coordinates: [78.6569, 11.1271], branches: 32, agents: 1080, villages: 1700 },
  { name: "Odisha",     coordinates: [85.0985, 20.9517], branches: 36, agents: 1240, villages: 2100 },
  { name: "Koraput",    coordinates: [82.7108, 18.8127], branches: 9,  agents: 260,  villages: 380  },
];

/**
 * Real India map powered by react-simple-maps + a TopoJSON of Indian
 * states. Markers represent GTIDS presence with hover tooltips
 * showing branches, agents and villages.
 */
export function IndiaImpactMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeLoc = locations.find((l) => l.name === active);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Soft 3D platform shadow */}
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
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 950, center: [82, 22] }}
            width={600}
            height={680}
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <defs>
              <linearGradient id="stateFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.12 165)" />
                <stop offset="55%" stopColor="oklch(0.42 0.1 175)" />
                <stop offset="100%" stopColor="oklch(0.32 0.08 220)" />
              </linearGradient>
              <filter id="stateShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="10"
                  floodColor="oklch(0.32 0.08 220)"
                  floodOpacity="0.4"
                />
              </filter>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.85 0.18 62 / 0.7)" />
                <stop offset="70%" stopColor="oklch(0.78 0.15 62 / 0)" />
              </radialGradient>
            </defs>

            <g filter="url(#stateShadow)">
              <Geographies geography={indiaTopo}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "url(#stateFill)",
                          stroke: "oklch(1 0 0 / 0.35)",
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                        hover: {
                          fill: "oklch(0.5 0.13 195)",
                          stroke: "oklch(1 0 0 / 0.6)",
                          strokeWidth: 0.8,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: { fill: "oklch(0.42 0.12 200)", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
            </g>

            {locations.map((loc, i) => {
              const isActive = active === loc.name;
              return (
                <Marker
                  key={loc.name}
                  coordinates={loc.coordinates}
                  onMouseEnter={() => setActive(loc.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(loc.name)}
                  onBlur={() => setActive(null)}
                  style={{
                    default: { cursor: "pointer", outline: "none" },
                    hover: { cursor: "pointer", outline: "none" },
                    pressed: { cursor: "pointer", outline: "none" },
                  }}
                >
                  {/* Glow halo */}
                  <circle
                    r={isActive ? 22 : 16}
                    fill="url(#dotGlow)"
                    style={{ transition: "r 250ms ease" }}
                  />
                  {/* Pulsing ring */}
                  <circle
                    r={6}
                    fill="none"
                    stroke="oklch(0.85 0.18 62 / 0.7)"
                    strokeWidth={1.2}
                    style={{
                      animation: `mapPulse 2.4s ease-out ${i * 0.18}s infinite`,
                      transformOrigin: "center",
                    }}
                  />
                  {/* Solid dot */}
                  <circle
                    r={isActive ? 5.5 : 4.5}
                    fill="oklch(0.78 0.15 62)"
                    stroke="oklch(1 0 0)"
                    strokeWidth={1.2}
                    style={{
                      filter: "drop-shadow(0 2px 3px oklch(0 0 0 / 0.35))",
                      transition: "r 200ms ease",
                    }}
                  />
                  <text
                    textAnchor="start"
                    x={8}
                    y={3}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 9,
                      fontWeight: 600,
                      fill: "oklch(0.22 0.04 160)",
                      paintOrder: "stroke",
                      stroke: "oklch(1 0 0 / 0.85)",
                      strokeWidth: 2.5,
                      strokeLinejoin: "round",
                    }}
                  >
                    {loc.name}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>

          {/* Hover tooltip overlay */}
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
          0%   { r: 4;  opacity: 0.9; }
          70%  { r: 18; opacity: 0;   }
          100% { r: 18; opacity: 0;   }
        }
      `}</style>
    </div>
  );
}
