import { ReactNode } from "react";
import { cn } from "../../lib/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return <article className={cn("glass", className)}>{children}</article>;
}
