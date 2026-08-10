"use client";

import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex items-center">

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

        <div className="max-w-4xl">

          <p className="mb-8 -mt-10 text-sm uppercase tracking-[0.45em] text-white">
            Luxury Interior Design Studio
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl leading-[0.95] text-white md:text-7xl xl:text-8xl drop-shadow-2xl">
            We don't just
            <br />
            decorate rooms—
            <br />
            we transform
            <br />
            living experiences.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/85">
            Elegant interiors crafted with timeless design,
            functionality and purpose.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Button variant="secondary">
              Book Consultation
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Explore Projects
            </Button>

          </div>

        </div>

      </div>

    </div>
  );
}