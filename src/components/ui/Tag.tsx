import { cn } from "../../lib/cn";

type TagProps = {
  label: string;
  className?: string;
};

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-primary/35 bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-accent",
        className
      )}
    >
      {label}
    </span>
  );
}
