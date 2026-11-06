// Colour tokens for the Open Graph image. Satori (next/og) cannot read CSS
// variables, so the values from globals.css :root are mirrored here once.
export const og = {
  paper: "#07080b",
  ink: "#f2f1ec",
  muted: "#9a9ca6",
  accent: "#c8ff4d",
  bloom: "radial-gradient(circle, rgba(200,255,77,0.32), transparent 65%)",
} as const;
