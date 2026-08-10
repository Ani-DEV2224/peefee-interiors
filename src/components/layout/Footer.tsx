"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";

const exploreLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const projectLinks = [
  { title: "Residential Projects", href: "/projects/residential" },
  { title: "Commercial Projects", href: "/projects/commercial" },
  { title: "Luxury Projects", href: "/projects/luxury" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#F7F4EE] border-t border-[#E5DDD2]">
      <Container>
        <div
          className="
            grid
            gap-10
            py-14

            lg:grid-cols-[1.15fr_.7fr_.9fr]
          "
        >
          {/* LEFT */}
          <div>
            <Image
              src="/logos/PeeFee_logo-1.svg"
              alt="PeeFee Interiors"
              width={140}
              height={140}
              priority
              className="h-auto w-28 md:w-32"
            />

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-neutral-600
              "
            >
              Creating timeless interiors,
              elegant exteriors and exceptional
              architectural spaces with unmatched
              craftsmanship and attention to detail.
            </p>

            <div className="mt-8 h-px w-full bg-[#C6A46A]" />

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/peefee_interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D7CCBC]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C6A46A]
                  hover:bg-[#C6A46A]
                "
              >
                <Image
                  src="/images/Instagram_logo-removebg-preview.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="transition duration-300 group-hover:scale-110"
                />
              </Link>

              <Link
                href="https://wa.me/2348165762085"
                target="_blank"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D7CCBC]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C6A46A]
                  hover:bg-[#C6A46A]
                "
              >
                <Image
                  src="/images/Whatsapp_logo-removebg-preview.png"
                  alt="Whatsapp"
                  width={22}
                  height={22}
                  className="transition duration-300 group-hover:scale-110"
                />
              </Link>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#111111]
              "
            >
              Explore
            </h3>

            <div className="mt-10 flex flex-col gap-3">
              {exploreLinks.map((link) =>
                link.title === "Projects" ? (
                  <div key={link.title} className="group">
                    <div
                      className="
                        flex
                        items-center
                        text-sm
                        text-neutral-500
                        transition-all
                        duration-300
                        group-hover:translate-x-2
                        group-hover:text-[#C6A46A]
                        cursor-default
                      "
                    >
                      {link.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4 text-neutral-400 group-hover:text-[#C6A46A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="hidden flex-col w-full gap-1 pt-3 group-hover:flex">
                      {projectLinks.map((p) => (
                        <Link
                          key={p.title}
                          href={p.href}
                          className="px-3 py-2 text-sm text-neutral-600 hover:text-[#C6A46A] rounded"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="
                      text-sm
                      text-neutral-500
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-[#C6A46A]
                    "
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#111111]
              "
            >
              Contact Us
            </h3>

            <div
              className="
                mt-10
                space-y-4
                text-sm
                leading-7
                text-neutral-600
              "
            >
              <p>Office – 175 Chu-Ngewe Street</p>

              <p>
                Our store at Abuloma Road,
                Trans Amadi,
                Rivers State,
                Port Harcourt.
              </p>

              <p>
                Ada George Road
                <br />
                (Production Area)
              </p>

              <p>+2348165762086</p>

              <p>peefeeinteriors@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-[#E5DDD2]
            py-6

            md:flex-row
          "
        >
          <p
            className="
              text-xs
              tracking-wide
              text-neutral-500
            "
          >
            © {new Date().getFullYear()} PeeFee Interiors.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-[#D7CCBC]
              bg-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#C6A46A]
              hover:bg-[#C6A46A]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </footer>
  );
}
