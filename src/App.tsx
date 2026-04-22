import { AppLayout } from "./layout/AppLayout";
import { AboutSection } from "./features/about/AboutSection";
import { ContactSection } from "./features/contact/ContactSection";
import { HeroSection } from "./features/hero/HeroSection";
import { MediaSection } from "./features/media/MediaSection";
import { PhotographySection } from "./features/photography/PhotographySection";
import { ProjectsSection } from "./features/projects/ProjectsSection";
import { SkillsSection } from "./features/skills/SkillsSection";

export default function App() {
  return (
    <AppLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <MediaSection />
      <PhotographySection />
      <ContactSection />
    </AppLayout>
  );
}
