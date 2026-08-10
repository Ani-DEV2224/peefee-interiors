"use client";

export default function WhyChooseOverlay() {
  return (
    <>
      {/* Base Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-black/35
        "
      />

      {/* Luxury Gradient */}
      <div
        className="
          absolute
          inset-0
          z-20
          bg-gradient-to-r
          from-[#0F0F0F]/85
          via-[#111111]/45
          to-transparent
        "
      />

      {/* Warm Gold Glow */}
      <div
        className="
          absolute
          inset-0
          z-30
          bg-[radial-gradient(circle_at_20%_45%,rgba(198,164,106,.22),transparent_45%)]
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-40
          h-72
          bg-gradient-to-t
          from-black/60
          via-black/25
          to-transparent
        "
      />

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          z-40
          h-40
          bg-gradient-to-b
          from-black/40
          to-transparent
        "
      />

      {/* Premium Vignette */}
      <div
        className="
          absolute
          inset-0
          z-50
          shadow-[inset_0_0_180px_rgba(0,0,0,.35)]
        "
      />
    </>
  );
}