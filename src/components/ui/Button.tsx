import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(
    `
      inline-flex
      items-center
      justify-center

      rounded-full

      px-7
      py-3.5

      text-sm
      font-medium

      transition-all
      duration-500

      hover:-translate-y-1

      active:translate-y-0
    `,

    {
      // Black Button
      "bg-black text-white hover:shadow-2xl":
        variant === "primary",

      // Gold Button
      "bg-[#C6A46A] text-white hover:bg-[#b99457] hover:shadow-xl":
        variant === "secondary",

      // Hero Button
      "border border-[#F3F0EA] bg-transparent text-[#F3F0EA] hover:bg-[#F3F0EA] hover:text-black":
        variant === "outline",
    },

    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}