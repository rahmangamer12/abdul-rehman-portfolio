import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Abdul Rehman, AI Web Developer & Agentic AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const photo = await readFile(join(process.cwd(), "public", "abdul-rehman-glasses.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07080b",
          color: "#f2f1ec",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -160,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(138,125,255,0.45), transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 200,
            bottom: -260,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(200,255,77,0.32), transparent 65%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 80px", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#9a9ca6", textTransform: "uppercase" }}>
            Portfolio · Karachi, Pakistan
          </div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 1, marginTop: 24 }}>
            Abdul Rehman
          </div>
          <div style={{ display: "flex", fontSize: 38, marginTop: 24, color: "#c8ff4d" }}>AI Web Developer &amp; Agentic AI Engineer</div>
          <div style={{ display: "flex", fontSize: 26, marginTop: 18, color: "#9a9ca6" }}>
            Co-Founder, Undercraft Studio · Founder, Velcarro
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", paddingRight: 70 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={340} height={340} alt="" style={{ borderRadius: 40, border: "4px solid #c8ff4d", objectFit: "cover" }} />
        </div>
      </div>
    ),
    size,
  );
}
