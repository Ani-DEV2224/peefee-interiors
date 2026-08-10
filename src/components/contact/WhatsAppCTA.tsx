import {
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

export default function WhatsAppCTA() {
  const rawNumber =
    process.env
      .NEXT_PUBLIC_PEEFEE_WHATSAPP || "";

  const whatsappNumber =
    rawNumber.replace(/\D/g, "");

  const message =
    encodeURIComponent(
      "Hello PeeFee Interiors, I'd like to discuss a project with you."
    );

  const href = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${message}`
    : "mailto:peefeeinteriors@gmail.com";

  return (
    <section
      className="
        bg-[#EEE8DD]
        px-6
        py-16
        sm:px-8
        lg:px-12
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1100px]
          flex-col
          items-center
          justify-between
          gap-7
          text-center
          md:flex-row
          md:text-left
        "
      >
        <div>
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#B28A4B]
            "
          >
            Prefer WhatsApp?
          </p>

          <h2
            className="
              font-[family-name:var(--font-heading)]
              text-3xl
              text-[#191712]
              sm:text-4xl
            "
          >
            Need A Quicker Conversation?
          </h2>

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-black/55
            "
          >
            Chat directly with our team and
            tell us what you&apos;re looking
            to create.
          </p>
        </div>

        <a
          href={href}
          target={
            whatsappNumber
              ? "_blank"
              : undefined
          }
          rel={
            whatsappNumber
              ? "noopener noreferrer"
              : undefined
          }
          className="
            group
            inline-flex
            shrink-0
            items-center
            gap-3
            rounded-full
            bg-[#191712]
            px-6
            py-4
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            !text-white
            transition-all
            duration-300
            hover:bg-[#C6A46A]
            hover:!text-[#191712]
          "
        >
          <FiMessageCircle size={17} />

          Chat On WhatsApp

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
    </section>
  );
}