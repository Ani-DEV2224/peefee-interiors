"use client";

import { useEffect, useState } from "react";

import ServiceSlide from "./ServiceSlide";
import ServicesNavigation from "./ServicesNavigation";
import ServicesProgress from "./ServicesProgress";

import { services } from "./ServicesData";

export default function ServicesSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">

      <ServiceSlide service={services[active]} />

      <ServicesNavigation
        active={active}
        setActive={setActive}
      />

      <ServicesProgress
        active={active}
        total={services.length}
      />

    </div>
  );
}