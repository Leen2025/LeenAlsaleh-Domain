import { CTAButton } from "../../components/ui/CTAButton";
import { FloatingBadge } from "../../components/ui/FloatingBadge";
import { heroData } from "./heroData";

export function HeroSection() {
  return (
    <section id="hero" className="section-shell relative overflow-hidden pt-16 md:pt-20">
      <FloatingBadge text="AI + Automation" className="right-6 top-10 hidden md:block" />
      <FloatingBadge text="Web + Mobile" className="bottom-16 left-8 hidden lg:block [animation-delay:600ms]" />
      <FloatingBadge text="Creative Builder" className="bottom-8 right-24 hidden lg:block [animation-delay:200ms]" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal">
          <p className="subheadline">Leen Alsaleh</p>
          <h1 className="headline mt-4 max-w-4xl">
            {heroData.greeting}
            <span className="mt-3 block font-serif text-primary">{heroData.name}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{heroData.role}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton href={heroData.ctaLink} label={heroData.ctaLabel} />
            <a
              href="#projects"
              className="rounded-full border border-primary/40 px-6 py-3 text-xs uppercase tracking-[0.18em] text-accent transition hover:border-primary hover:text-primary"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative reveal justify-self-end [animation-delay:250ms]">
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <figure className="relative rounded-[2rem] border border-primary/35 bg-surface p-6 shadow-luxe">
            <img
              src={heroData.avatar}
              alt="Leen avatar"
              className="w-full max-w-[340px] rounded-[1.4rem] border border-primary/20 bg-card object-contain p-2"
            />
            <figcaption className="mt-4 flex items-center justify-between text-sm text-muted">
              <span>Based in Saudi Arabia</span>
              <span className="text-2xl">✨</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
