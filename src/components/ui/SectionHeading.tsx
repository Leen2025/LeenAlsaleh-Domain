type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-3xl">
      <p className="subheadline">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-accent sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </header>
  );
}
