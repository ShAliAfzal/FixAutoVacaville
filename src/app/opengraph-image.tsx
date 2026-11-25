import { ImageResponse } from "next/og";

export const alt = "Fix Auto Vacaville - Collision & Auto Body Repair";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #061427 0%, #0a1f3d 45%, #163e74 100%)",
          color: "white",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 4, color: "#5a93f2" }}>
          FIX AUTO VACAVILLE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Collision & auto body repair on Peabody Road
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.72)", maxWidth: 820 }}>
            70 Peabody Road, Vacaville, CA 95687 · (707) 898-7313
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
          4.7 Google rating · Mon-Fri 9AM-5PM
        </div>
      </div>
    ),
    { ...size },
  );
}
