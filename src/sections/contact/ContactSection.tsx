import { siteProfile } from "../../data/site";
import { ButtonLink } from "../../components/ui/ButtonLink";
import { Container } from "../../components/shared/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { SocialLinks } from "../../components/shared/SocialLinks";

const contactSocialLinks = [
  { href: siteProfile.links.github, label: "GitHub" },
  { href: siteProfile.links.linkedin, label: "LinkedIn" },
  { href: siteProfile.links.portfolio, label: "Portfolio" }
];

export function ContactSection() {
  return (
    <Container id="contact" className="pb-24">
      <SectionHeading
        eyebrow="Contact"
        title="Ready to build something meaningful?"
        description="I am available for product collaboration, technical consulting, and AI or automation-focused engineering work."
      />

      <div className="glass grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <a
            href={`mailto:${siteProfile.email}`}
            className="font-display text-3xl text-accent transition hover:text-primary sm:text-4xl"
          >
            {siteProfile.email}
          </a>

          <SocialLinks links={contactSocialLinks} />
        </div>

        <ButtonLink href={siteProfile.links.linkedin} label="Get In Touch" />
      </div>
    </Container>
  );
}
