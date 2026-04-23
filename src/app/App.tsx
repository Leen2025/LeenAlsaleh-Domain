import { MainLayout } from "./layout/MainLayout";
import { AboutSection } from "../sections/about/AboutSection";
import { ContactSection } from "../sections/contact/ContactSection";
import { FooterSection } from "../sections/footer/FooterSection";
import { HeroSection } from "../sections/hero/HeroSection";
import { MediaSection } from "../sections/media/MediaSection";
import { PhotographySection } from "../sections/photography/PhotographySection";
import { ProjectsSection } from "../sections/projects/ProjectsSection";
import { SkillsSection } from "../sections/skills/SkillsSection";

export default function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <MediaSection />
      <PhotographySection />
      <ContactSection />
      <FooterSection />
    </MainLayout>
  );
}
