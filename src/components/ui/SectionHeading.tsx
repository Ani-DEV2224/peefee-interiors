type Props = {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {tag && (
        <p className="mb-3 uppercase tracking-[0.3em] text-sm text-[#C6A46A]">
          {tag}
        </p>
      )}

      <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}