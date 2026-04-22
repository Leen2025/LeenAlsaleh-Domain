type PillProps = {
  label: string;
};

export function Pill({ label }: PillProps) {
  return (
    <span className="rounded-full border border-primary/35 bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-accent">
      {label}
    </span>
  );
}
