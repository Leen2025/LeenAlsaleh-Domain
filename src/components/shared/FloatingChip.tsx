import { motion } from "motion/react";
import { cn } from "../../lib/cn";

type FloatingChipProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function FloatingChip({ text, className, delay = 0 }: FloatingChipProps) {
  return (
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: [0, -9, 0] }}
      transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay }}
      className={cn(
        "absolute rounded-full border border-primary/35 bg-card/85 px-4 py-2 text-xs uppercase tracking-[0.14em] text-accent shadow-luxe",
        className
      )}
    >
      {text}
    </motion.span>
  );
}
