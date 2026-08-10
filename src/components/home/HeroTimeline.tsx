"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: (
      <>
        We don't just
        <br />
        decorate rooms—
        <br />
        we transform
        <br />
        living experiences.
      </>
    ),
  },

  {
    title: (
      <>
        You imagine it.
        <br />
        We create it.
      </>
    ),
  },

  {
    title: (
      <>
        Every detail
        <br />
        has purpose.
        <br />
        Every space
        <br />
        tells a story.
      </>
    ),
  },

  {
    title: (
      <>
        Luxury isn't
        <br />
        an expense.
        <br />
        It's an experience.
      </>
    ),
  },

  {
    title: (
      <>
        We Build.
        <br />
        We Design.
        <br />
        We Construct.
        <br />
        We Deliver.
      </>
    ),
  },
];

export default function HeroTimeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();

      const total = hero.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      const index = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
      );

      setActive(index);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[999] pointer-events-none">
      <div
        className="
          flex
          h-full
          items-end
          justify-start

          px-6
          pb-16

          sm:px-10
          sm:pb-20

          md:px-16
          md:pb-24

          lg:px-24
          lg:pb-28

          xl:px-32
          xl:pb-32
        "
      >
        <div className="relative h-[340px] w-full max-w-5xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute
                bottom-0
                left-0
                w-full

                transition-all
                duration-700
                ease-out

                ${
                  active === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              <h1
                className="
                  hero-title
                  !text-[#F3F0EA]

                  font-[family-name:var(--font-heading)]

                  text-[clamp(2.5rem,6vw,7rem)]

                  leading-[0.92]

                  tracking-tight

                  max-w-[900px]
                "
                style={{
                  color: "#F3F0EA",
                  textShadow:
                    "0 10px 50px rgba(0,0,0,.95), 0 0 100px rgba(0,0,0,.45)",
                }}
              >
                {slide.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}