"use client";

import { services } from "./ServicesData";

type Props = {
  active: number;
  setActive: (index: number) => void;
};

export default function ServicesNavigation({
  active,
  setActive,
}: Props) {
  return (
    <div
      className="
        absolute
        left-10
        top-1/2
        z-30
        hidden
        -translate-y-1/2
        xl:flex
        flex-col
        gap-5
      "
    >
      {services.map((service, index) => (
        <button
          key={service.number}
          onClick={() => setActive(index)}
          className="group flex items-center gap-4 text-left"
        >
          <span
            className={`
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active === index
                  ? "text-[#C6A46A]"
                  : "text-white/50"
              }
            `}
          >
            {service.number}
          </span>

          <div
            className={`
              h-px
              transition-all
              duration-300

              ${
                active === index
                  ? "w-12 bg-[#C6A46A]"
                  : "w-6 bg-white/30 group-hover:w-10"
              }
            `}
          />

          <span
            className={`
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300

              ${
                active === index
                  ? "text-[#C6A46A]"
                  : "text-white/70"
              }
            `}
          >
            {service.title}
          </span>
        </button>
      ))}
    </div>
  );
}