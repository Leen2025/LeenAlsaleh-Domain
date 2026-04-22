type CTAButtonProps = {
  href: string;
  label: string;
};

export function CTAButton({ href, label }: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-primary/70 bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.17em] text-[#20170c] transition duration-300 hover:-translate-y-1 hover:bg-[#dcbc7f]"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
