import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { aboutData } from "./aboutData";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Crafting elegant interfaces with intelligent systems."
        description="A builder mindset with product taste, technical depth, and execution speed."
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
    </section>
  );
}
