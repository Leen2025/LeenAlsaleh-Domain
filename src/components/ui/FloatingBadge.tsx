type FloatingBadgeProps = {
  text: string;
  className?: string;
};

export function FloatingBadge({ text, className = "" }: FloatingBadgeProps) {
  return (
    <span
      className={`absolute animate-float rounded-full border border-primary/35 bg-card/85 px-4 py-2 text-xs uppercase tracking-[0.14em] text-accent shadow-luxe ${className}`}
    >
      {text}
    </span>
  );
}
