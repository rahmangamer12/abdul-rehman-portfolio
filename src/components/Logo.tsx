import { icons } from "@/lib/icons";

/** Logos whose brand colour is (near) black or white: draw them in the theme's ink colour instead. */
const INK = new Set(["000000", "181717", "191919", "2D3748", "FFFFFF"]);

const fallback: Record<string, { color: string; node: React.ReactNode }> = {
  openai: {
    color: "var(--ink)",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        {[0, 60, 120].map((r) => (
          <ellipse key={r} cx="12" cy="12" rx="9.5" ry="4.2" transform={`rotate(${r} 12 12)`} />
        ))}
      </g>
    ),
  },
  groq: {
    color: "#F55036",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <circle cx="12" cy="10" r="5.5" />
        <path d="M17.5 10v5.5a5.5 5.5 0 0 1-9 4.2" />
      </g>
    ),
  },
  polar: {
    color: "#3B82F6",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4.5" ry="10" />
        <path d="M2 12h20" />
      </g>
    ),
  },
  divi: {
    color: "#8A3FFC",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 7.5h2.5a4.5 4.5 0 0 1 0 9H9z" />
      </g>
    ),
  },
};

export function brandColor(key: string) {
  const i = icons[key];
  if (i) return INK.has(i.hex.toUpperCase()) ? "var(--ink)" : `#${i.hex}`;
  return fallback[key]?.color ?? "var(--ink)";
}

export function Logo({ name, size = 28, className = "" }: { name: string; size?: number; className?: string }) {
  const i = icons[name];
  const color = brandColor(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={i?.title ?? name}
      className={className}
      style={{ color }}
      fill="currentColor"
    >
      {i ? <path d={i.path} /> : fallback[name]?.node}
    </svg>
  );
}
