"use client";

import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import HeroTimeline from "./HeroTimeline";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[500vh]"
    >
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Video */}
        <HeroVideo />

        {/* Overlay */}
        <HeroOverlay />

        {/* Timeline Text */}
        <HeroTimeline />

        {/* Scroll Indicator */}
        <HeroScrollIndicator />

      </div>
    </section>
  );
}