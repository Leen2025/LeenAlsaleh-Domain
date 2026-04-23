import { SocialLink } from "../../types";

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.16em] text-muted">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-primary">
          {link.label}
        </a>
      ))}
    </div>
  );
}
