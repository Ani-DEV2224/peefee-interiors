import ContactForm from "./ContactForm";
import {
  FiMail,
  FiMessageCircle,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      className="
        bg-[#F7F4EE]
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1350px]
          gap-14
          lg:grid-cols-[0.75fr_1.25fr]
          lg:gap-20
        "
      >
        {/* =================================
            CONTACT DETAILS
        ================================= */}

        <div>
          <p
            className="
              mb-4
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#B28A4B]
            "
          >
            Let&apos;s Talk
          </p>

          <h2
            className="
              max-w-md
              font-[family-name:var(--font-heading)]
              text-4xl
              leading-tight
              text-[#191712]
              sm:text-5xl
            "
          >
            Tell Us About Your Vision.
          </h2>

          <div
            className="
              my-6
              h-px
              w-14
              bg-[#C6A46A]
            "
          />

          <p
            className="
              max-w-md
              text-[15px]
              leading-8
              text-black/60
            "
          >
            Share a little about yourself,
            your space and what you would
            like to create. Our team will
            review your enquiry and get back
            to you.
          </p>

          <div className="mt-10 space-y-7">
            {/* EMAIL */}

            <a
              href="mailto:peefeeinteriors@gmail.com"
              className="
                group
                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A46A]/40
                  text-[#B28A4B]
                  transition-all
                  duration-300
                  group-hover:border-[#C6A46A]
                  group-hover:bg-[#C6A46A]
                  group-hover:text-[#191712]
                "
              >
                <FiMail size={18} />
              </span>

              <div>
                <p
                  className="
                    mb-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/40
                  "
                >
                  Email
                </p>

                <p
                  className="
                    break-all
                    text-sm
                    font-medium
                    text-[#191712]
                  "
                >
                  peefeeinteriors@gmail.com
                </p>
              </div>
            </a>

            {/* WHATSAPP */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A46A]/40
                  text-[#B28A4B]
                "
              >
                <FiMessageCircle size={18} />
              </span>

              <div>
                <p
                  className="
                    mb-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/40
                  "
                >
                  WhatsApp
                </p>

                <p
                  className="
                    text-sm
                    font-medium
                    text-[#191712]
                  "
                >
                  Quick project conversations
                  available
                </p>
              </div>
            </div>

            {/* RESPONSE */}

            <div
              className="
                flex
                items-start
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C6A46A]/40
                  text-[#B28A4B]
                "
              >
                <FiClock size={18} />
              </span>

              <div>
                <p
                  className="
                    mb-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/40
                  "
                >
                  Enquiries
                </p>

                <p
                  className="
                    text-sm
                    font-medium
                    text-[#191712]
                  "
                >
                  We&apos;ll respond as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>

          <a
            href="mailto:peefeeinteriors@gmail.com"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#191712]
            "
          >
            Email PeeFee Directly

            <FiArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* =================================
            CONTACT FORM
        ================================= */}

        <ContactForm />
      </div>
    </section>
  );
}