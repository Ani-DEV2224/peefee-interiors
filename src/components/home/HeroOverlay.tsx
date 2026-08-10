"use client";

export default function HeroOverlay() {
  return (
    <>
      {/* Main Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Luxury Gradient */}
      <div
        className="
          absolute
          inset-0
          z-20

          bg-gradient-to-b

          from-black/20

          via-transparent

          to-black/35
        "
      />

      {/* Soft vignette */}
      <div
        className="
          absolute
          inset-0
          z-20

          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.18)_100%)]
        "
      />
    </>
  );
}