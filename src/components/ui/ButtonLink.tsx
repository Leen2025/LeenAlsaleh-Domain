import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";

type ButtonLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function ButtonLink({ href, label, className }: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/70 bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.17em] text-[#20170c] transition duration-300 hover:-translate-y-1 hover:bg-[#dcbc7f]",
        className
      )}
    >
      {label}
      <ArrowUpRight size={16} />
    </a>
  );
}

type SubtleLinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function SubtleLinkButton({ href, children, className }: SubtleLinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-full border border-primary/40 px-6 py-3 text-xs uppercase tracking-[0.18em] text-accent transition hover:border-primary hover:text-primary",
        className
      )}
    >
      {children}
    </a>
  );
}
