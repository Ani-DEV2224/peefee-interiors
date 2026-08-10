"use client";

import WhyChooseBackground from "./WhyChooseBackground";
import WhyChooseOverlay from "./WhyChooseOverlay";
import WhyChooseTimeline from "./WhyChooseTimeline";
import WhyChooseIndicator from "./WhyChooseIndicator";

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative h-[450vh]"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Image */}
        <WhyChooseBackground />

        {/* Luxury Overlay */}
        <WhyChooseOverlay />

        {/* Scroll Story */}
        <WhyChooseTimeline />

        {/* Scroll Indicator */}
        <WhyChooseIndicator />

      </div>
    </section>
  );
}