import { skillsData } from "../../data/skills";
import { Container } from "../../components/shared/Container";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <Container id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Core capabilities focused on delivery, quality, and impact."
        description="A structured blend of engineering, automation, and user-focused product thinking."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <GlassCard key={skill.title} className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/45">
            <h3 className="font-display text-2xl text-accent">{skill.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{skill.details}</p>
          </GlassCard>
        ))}
      </div>
    </Container>
  );
}
