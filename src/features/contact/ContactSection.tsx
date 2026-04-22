import { CTAButton } from "../../components/ui/CTAButton";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { siteProfile } from "../../core/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something iconic."
        description="Open to collaborations, product consulting, and ambitious engineering work."
      />

      <div className="glass grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <a
            href={`mailto:${siteProfile.email}`}
            className="font-display text-3xl text-accent transition hover:text-primary sm:text-4xl"
          >
            {siteProfile.email}
          </a>

          <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.16em] text-muted">
            <a href={siteProfile.links.github} target="_blank" rel="noreferrer" className="transition hover:text-primary">
              GitHub
            </a>
            <a href={siteProfile.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-primary">
              LinkedIn
            </a>
            <a href={siteProfile.links.portfolio} target="_blank" rel="noreferrer" className="transition hover:text-primary">
              Portfolio
            </a>
          </div>
        </div>

        <CTAButton href={siteProfile.links.linkedin} label="Start Conversation" />
      </div>
    </section>
  );
}
