"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import Container from "./Container";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

import useScroll from "@/hooks/useScroll";

type DropdownKey =
  | "services"
  | "projects"
  | null;

/* =========================================
   SERVICES
========================================= */

const servicesLinks = [
  {
    label: "Upholstery",
    href: "/services#upholstery",
  },
  {
    label: "Interior",
    href: "/services#interior-design",
  },
  {
    label: "TV Console",
    href: "/services#tv-console",
  },
  {
    label: "Exterior",
    href: "/services#exterior-design",
  },
  {
    label: "Architecture",
    href: "/services#architecture",
  },
  {
    label: "Electrical",
    href: "/services#electrical",
  },
];

/* =========================================
   PROJECTS
========================================= */

const projectsLinks = [
  {
    label: "Residential Projects",
    href: "/projects/residential",
  },
  {
    label: "Commercial Projects",
    href: "/projects/commercial",
  },
  {
    label: "Luxury Projects",
    href: "/projects/luxury",
  },
];

export default function Navbar() {
  const { scrolled } = useScroll();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    openDropdown,
    setOpenDropdown,
  ] = useState<DropdownKey>(null);

  const dark = scrolled;

  const servicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  const projectsActive =
    pathname.startsWith("/projects/");

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ===================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[1000]
          w-full
          py-4
        "
      >
        <Container>
          <nav
            className={`
              flex
              items-center
              justify-between
              rounded-full
              px-6
              transition-all
              duration-500
              lg:px-8

              ${
                dark
                  ? `
                    h-16
                    border
                    border-black/5
                    bg-white/88
                    shadow-xl
                    backdrop-blur-2xl
                  `
                  : `
                    h-20
                    bg-transparent
                  `
              }
            `}
          >
            {/* =================================
                LOGO
            ================================= */}

            <Logo dark={dark} />

            {/* =================================
                DESKTOP NAVIGATION
            ================================= */}

            <div
              className="
                hidden
                items-center
                gap-10
                lg:flex
              "
            >
              {/* HOME */}

              <NavLink
                label="Home"
                href="/"
                dark={dark}
              />

              {/* ABOUT */}

              <NavLink
                label="About"
                href="/about"
                dark={dark}
              />

              {/* =================================
                  SERVICES
              ================================= */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setOpenDropdown("services")
                }
                onMouseLeave={closeDropdown}
                onFocus={() =>
                  setOpenDropdown("services")
                }
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node
                    )
                  ) {
                    closeDropdown();
                  }
                }}
              >
                <Link
                  href="/services"
                  aria-haspopup="menu"
                  aria-expanded={
                    openDropdown === "services"
                  }
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-1.5
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
                  Services

                  <motion.span
                    animate={{
                      rotate:
                        openDropdown ===
                        "services"
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiChevronDown size={15} />
                  </motion.span>

                  {/* GOLD UNDERLINE */}

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
                        servicesActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>

                {/* =================================
                    SERVICES DROPDOWN
                ================================= */}

                <AnimatePresence>
                  {openDropdown ===
                    "services" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-[1200]
                        w-[280px]
                        -translate-x-1/2
                        pt-5
                      "
                    >
                      <div
                        className="
                          flex
                          w-full
                          flex-col
                          items-center
                          justify-center
                          gap-2.5
                          bg-transparent
                          text-center
                        "
                      >
                        {servicesLinks.map(
                          (
                            service,
                            index
                          ) => (
                            <motion.div
                              key={
                                service.label
                              }
                              initial={{
                                opacity: 0,
                                y: -8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay:
                                  index *
                                  0.04,
                                duration:
                                  0.25,
                              }}
                              className="
                                flex
                                w-full
                                justify-center
                                text-center
                              "
                            >
                              <Link
                                href={
                                  service.href
                                }
                                onClick={
                                  closeDropdown
                                }
                                style={{
                                  color:
                                    "#F3F0EA",
                                }}
                                className="
                                  group/dropdown
                                  relative
                                  inline-block
                                  py-1.5
                                  text-center
                                  text-[12px]
                                  font-medium
                                  uppercase
                                  tracking-[0.18em]
                                  !text-[#F3F0EA]
                                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                                  transition-all
                                  duration-300
                                  hover:scale-[1.04]
                                  hover:!text-[#C6A46A]
                                "
                              >
                                {
                                  service.label
                                }

                                <span
                                  className="
                                    absolute
                                    -bottom-[2px]
                                    left-1/2
                                    h-px
                                    w-0
                                    -translate-x-1/2
                                    bg-[#C6A46A]
                                    transition-all
                                    duration-300
                                    group-hover/dropdown:w-full
                                  "
                                />
                              </Link>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================
                  PROJECTS
              ================================= */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setOpenDropdown("projects")
                }
                onMouseLeave={closeDropdown}
                onFocus={() =>
                  setOpenDropdown("projects")
                }
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node
                    )
                  ) {
                    closeDropdown();
                  }
                }}
              >
                {/* Projects is a dropdown trigger only */}

                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={
                    openDropdown === "projects"
                  }
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "projects"
                        ? null
                        : "projects"
                    )
                  }
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-1.5
                    bg-transparent
                    py-2
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-black
                    transition-all
                    duration-300
                  "
                >
                  Projects

                  <motion.span
                    animate={{
                      rotate:
                        openDropdown ===
                        "projects"
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiChevronDown size={15} />
                  </motion.span>

                  {/* GOLD UNDERLINE */}

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
                        projectsActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>

                {/* =================================
                    PROJECTS DROPDOWN
                ================================= */}

                <AnimatePresence>
                  {openDropdown ===
                    "projects" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-[1200]
                        w-[330px]
                        -translate-x-1/2
                        pt-5
                      "
                    >
                      <div
                        className="
                          flex
                          w-full
                          flex-col
                          items-center
                          justify-center
                          gap-2.5
                          bg-transparent
                          text-center
                        "
                      >
                        {projectsLinks.map(
                          (
                            project,
                            index
                          ) => (
                            <motion.div
                              key={
                                project.label
                              }
                              initial={{
                                opacity: 0,
                                y: -8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay:
                                  index *
                                  0.04,
                                duration:
                                  0.25,
                              }}
                              className="
                                flex
                                w-full
                                justify-center
                                text-center
                              "
                            >
                              <Link
                                href={
                                  project.href
                                }
                                onClick={
                                  closeDropdown
                                }
                                style={{
                                  color:
                                    "#F3F0EA",
                                }}
                                className="
                                  group/dropdown
                                  relative
                                  inline-block
                                  py-1.5
                                  text-center
                                  text-[12px]
                                  font-medium
                                  uppercase
                                  tracking-[0.18em]
                                  !text-[#F3F0EA]
                                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                                  transition-all
                                  duration-300
                                  hover:scale-[1.04]
                                  hover:!text-[#C6A46A]
                                "
                              >
                                {
                                  project.label
                                }

                                <span
                                  className="
                                    absolute
                                    -bottom-[2px]
                                    left-1/2
                                    h-px
                                    w-0
                                    -translate-x-1/2
                                    bg-[#C6A46A]
                                    transition-all
                                    duration-300
                                    group-hover/dropdown:w-full
                                  "
                                />
                              </Link>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================
                  CONTACT
              ================================= */}

              <NavLink
                label="Contact"
                href="/contact"
                dark={dark}
              />
            </div>

            {/* =================================
                DESKTOP BOOK CONSULTATION
            ================================= */}

            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant={
                  dark
                    ? "secondary"
                    : "outline"
                }
              >
                Book Consultation
              </Button>
            </div>

            {/* =================================
                MOBILE HAMBURGER
            ================================= */}

            <button
              type="button"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen(
                  (previous) =>
                    !previous
                )
              }
              className="
                relative
                z-[1200]
                h-10
                w-10
                bg-transparent
                p-0
                lg:hidden
              "
            >
              {/* TOP LINE */}

              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 8,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.3,
                }}
                className={`
                  absolute
                  left-1
                  top-2
                  h-[2px]
                  w-8
                  rounded-full

                  ${
                    dark
                      ? "bg-black"
                      : "bg-[#F3F0EA]"
                  }
                `}
              />

              {/* MIDDLE LINE */}

              <motion.span
                animate={{
                  opacity:
                    menuOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`
                  absolute
                  left-1
                  top-5
                  h-[2px]
                  w-8
                  rounded-full

                  ${
                    dark
                      ? "bg-black"
                      : "bg-[#F3F0EA]"
                  }
                `}
              />

              {/* BOTTOM LINE */}

              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: -8,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{
                  duration: 0.3,
                }}
                className={`
                  absolute
                  left-1
                  top-8
                  h-[2px]
                  w-8
                  rounded-full

                  ${
                    dark
                      ? "bg-black"
                      : "bg-[#F3F0EA]"
                  }
                `}
              />
            </button>
          </nav>
        </Container>
      </header>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            open={menuOpen}
            close={() =>
              setMenuOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}