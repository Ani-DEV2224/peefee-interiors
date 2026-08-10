"use client";

import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 30);

      if (current > lastScroll) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrolled,
    scrollDirection,
  };
}