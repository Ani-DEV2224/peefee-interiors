"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  dark?: boolean;
};

export default function NavLink({
  href,
  label,
  dark = false,
}: Props) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        group
        relative
        py-2
        text-[13px]
        font-medium
        uppercase
        tracking-[0.22em]
        transition-all
        duration-300

        ${
          dark
            ? "text-black"
            : "text-[#F3F0EA]"
        }
      `}
    >
      {label}

      {/* Active / Hover underline */}
      <span
        className={`
          absolute
          -bottom-1
          left-1/2
          h-[2px]
          -translate-x-1/2
          rounded-full
          bg-[#C6A46A]
          transition-all
          duration-300

          ${
            active
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />
    </Link>
  );
}