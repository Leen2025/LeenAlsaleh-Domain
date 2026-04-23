import { photographyData } from "../../data/photography";
import { Container } from "../../components/shared/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function PhotographySection() {
  return (
    <Container id="photography">
      <SectionHeading
        eyebrow="Photography"
        title="A visual diary in full-frame rhythm."
        description="Images keep their natural ratio with no hard cropping or distortion."
      />

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photographyData.map((photo) => (
          <figure
            key={photo.src}
            className="glass mb-5 break-inside-avoid overflow-hidden p-3 transition duration-300 hover:-translate-y-1"
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain" />
          </figure>
        ))}
      </div>
    </Container>
  );
}
