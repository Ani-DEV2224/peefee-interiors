"use client";

export default function HeroScrollIndicator() {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        z-50
        -translate-x-1/2

        md:bottom-12
      "
    >
      <div className="flex flex-col items-center">

        <span
          className="
            mb-4

            text-[11px]

            uppercase

            tracking-[0.45em]

            text-[#F3F0EA]/90
          "
        >
          Scroll
        </span>

        <div
          className="
            relative

            h-14
            w-7

            rounded-full

            border

            border-[#F3F0EA]/40
          "
        >
          <span
            className="
              absolute

              left-1/2
              top-2

              h-2.5
              w-2.5

              -translate-x-1/2

              rounded-full

              bg-[#C6A46A]

              animate-bounce
            "
          />
        </div>

      </div>
    </div>
  );
}