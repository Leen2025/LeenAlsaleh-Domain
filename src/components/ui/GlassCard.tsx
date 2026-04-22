import { ReactNode } from "react";

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

export function GlassCard({ className = "", children }: GlassCardProps) {
  return <article className={`glass ${className}`}>{children}</article>;
}
