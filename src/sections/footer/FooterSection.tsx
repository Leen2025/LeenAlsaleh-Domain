import { Container } from "../../components/shared/Container";
import { siteProfile } from "../../data/site";

export function FooterSection() {
  return (
    <footer className="border-t border-primary/10">
      <Container as="div" className="py-8 text-xs tracking-[0.14em] text-muted">
        <p>© 2026 {siteProfile.name} - All rights reserved.</p>
        <p className="mt-2">Built with passion, creativity, and a focus on real impact.</p>
      </Container>
    </footer>
  );
}
