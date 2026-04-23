import { aboutData } from "../../data/about";
import { Container } from "../../components/shared/Container";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function AboutSection() {
  return (
    <Container id="about">
      <SectionHeading
        eyebrow="About"
        title="Building practical systems with intelligence and clarity."
        description="A focused engineering approach grounded in real-world outcomes."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-7 md:p-9">
          <h3 className="font-display text-2xl text-accent">Personal Story</h3>
          <p className="mt-4 leading-relaxed text-muted">{aboutData.story}</p>
        </GlassCard>

        <GlassCard className="p-7 md:p-9">
          <h3 className="font-display text-2xl text-accent">Creative + AI Focus</h3>
          <p className="mt-4 leading-relaxed text-muted">{aboutData.focus}</p>
        </GlassCard>
      </div>
    </Container>
  );
}
