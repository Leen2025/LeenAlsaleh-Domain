import { GlassCard } from "../../components/ui/GlassCard";
import { Pill } from "../../components/ui/Pill";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { projects } from "./projectsData";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work blending design clarity with engineering precision."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <GlassCard key={project.title} className={`p-7 ${index % 2 === 0 ? "lg:-mt-7" : ""}`}>
            <h3 className="font-display text-3xl text-accent">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Pill key={`${project.title}-${item}`} label={item} />
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex text-sm uppercase tracking-[0.16em] text-primary transition hover:text-accent"
            >
              Visit Project ↗
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
