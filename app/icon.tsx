import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#151718",
          border: "1px solid #2a2d30",
          borderRadius: 6,
          fontFamily: "monospace",
          fontSize: 13,
          fontWeight: 500,
          color: "#f0f0f2",
          letterSpacing: "-0.02em",
        }}
      >
        mi
      </div>
    ),
    { ...size }
  );
}
