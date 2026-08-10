"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  dark?: boolean;
};

export default function Logo({ dark = false }: Props) {
  return (
    <Link
      href="/"
      aria-label="PeeFee Interiors home"
      className="inline-flex items-center gap-3"
    >
      {/* BLACK LOGO ONLY */}
      <Image
        src="/logos/PeeFee_logo-1.svg"
        alt="PeeFee Interiors logo"
        width={46}
        height={46}
        priority
        className="
          h-[44px]
          w-[44px]
          shrink-0
          object-contain
        "
      />

      {/* BRAND NAME */}
      <div className="leading-none">
        <div className="inline-flex items-start">
          <h2
            className={`
              font-[family-name:var(--font-heading)]
              text-2xl
              transition-colors
              duration-500

              ${
                dark
                  ? "text-black"
                  : "text-[#F3F0EA]"
              }
            `}
          >
            PeeFee
          </h2>

          {/* VERIFIED BADGE */}
          <img
            src="/images/PeeFee_verified_badge.png"
            alt="Verified"
            width={16}
            height={16}
            className="
              relative
              -top-[0.01px]
              ml-[2px]
              h-[16px]
              w-[16px]
              shrink-0
              object-contain
            "
          />
        </div>

        {/* INTERIORS */}
        <p
          className={`
            mt-[2px]
            text-[11px]
            uppercase
            tracking-[0.35em]
            transition-colors
            duration-500

            ${
              dark
                ? "text-black/70"
                : "text-[#F3F0EA]/80"
            }
          `}
        >
          Interiors
        </p>
      </div>
    </Link>
  );
}