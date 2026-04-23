import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../../data/projects";
import { Container } from "../../components/shared/Container";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Tag } from "../../components/ui/Tag";

export function ProjectsSection() {
  return (
    <Container id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects built for real-world performance."
        description="AI products, mobile apps, and automation systems designed to solve practical problems."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <GlassCard key={project.title} className={index % 2 === 0 ? "p-7 lg:-mt-7" : "p-7"}>
            <h3 className="font-display text-3xl text-accent">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((stackItem) => (
                <Tag key={`${project.title}-${stackItem}`} label={stackItem} />
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1 text-sm uppercase tracking-[0.16em] text-primary transition hover:text-accent"
            >
              Visit Project
              <ArrowUpRight size={15} />
            </a>
          </GlassCard>
        ))}
      </div>
    </Container>
  );
}
