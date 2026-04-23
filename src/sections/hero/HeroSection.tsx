import { siteProfile } from "../../data/site";
import { heroData } from "../../data/hero";
import { ButtonLink, SubtleLinkButton } from "../../components/ui/ButtonLink";
import { Container } from "../../components/shared/Container";
import { FloatingChip } from "../../components/shared/FloatingChip";
import { Reveal } from "../../components/shared/Reveal";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <Container id="hero" className="relative overflow-hidden pt-16 md:pt-20">
      <FloatingChip text={heroData.chips[0]} className="right-6 top-10 hidden md:block" />
      <FloatingChip text={heroData.chips[1]} className="bottom-16 left-8 hidden lg:block" delay={0.6} />
      <FloatingChip text={heroData.chips[2]} className="bottom-8 right-24 hidden lg:block" delay={0.2} />

      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="subheadline">{siteProfile.name}</p>
          <h1 className="headline mt-4 max-w-4xl">
            {heroData.headline}
            <span className="mt-3 block font-serif text-primary">{siteProfile.name}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{heroData.valueProposition}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" label={heroData.primaryCta} />
            <SubtleLinkButton href="#contact">{heroData.secondaryCta}</SubtleLinkButton>
          </div>
        </Reveal>

        <HeroVisual avatar={heroData.avatar} />
      </div>
    </Container>
  );
}
