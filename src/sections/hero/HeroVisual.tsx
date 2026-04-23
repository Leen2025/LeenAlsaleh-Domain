import { Reveal } from "../../components/shared/Reveal";

type HeroVisualProps = {
  avatar: string;
};

export function HeroVisual({ avatar }: HeroVisualProps) {
  return (
    <Reveal className="relative justify-self-end" delay={0.2}>
      <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
      <figure className="relative rounded-[2rem] border border-primary/35 bg-surface p-6 shadow-luxe">
        <img
          src={avatar}
          alt="Leen avatar"
          className="w-full max-w-[340px] rounded-[1.4rem] border border-primary/20 bg-card object-contain p-2"
        />
        <figcaption className="mt-4 flex items-center justify-between text-sm text-muted">
          <span>Based in Saudi Arabia</span>
          <span className="text-2xl" aria-hidden="true">
            *
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
