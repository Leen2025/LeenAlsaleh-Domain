import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { skills } from "./skillsData";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A multidisciplinary stack tuned for velocity and quality."
        description="From interface craft to automation engines, each capability supports shipping better products."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <GlassCard
            key={skill.title}
            className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
          >
            <h3 className="font-display text-2xl text-accent">{skill.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{skill.details}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
