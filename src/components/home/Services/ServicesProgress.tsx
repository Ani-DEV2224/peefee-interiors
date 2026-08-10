"use client";

type Props = {
  active: number;
  total: number;
};

export default function ServicesProgress({
  active,
  total,
}: Props) {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        z-30
        flex
        -translate-x-1/2
        gap-3
      "
    >
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="
            h-[4px]
            w-16
            overflow-hidden
            rounded-full
            bg-white/20
          "
        >
          <div
            className={`
              h-full
              rounded-full
              transition-all
              duration-700

              ${
                active >= index
                  ? "w-full bg-[#C6A46A]"
                  : "w-0"
              }
            `}
          />
        </div>
      ))}
    </div>
  );
}