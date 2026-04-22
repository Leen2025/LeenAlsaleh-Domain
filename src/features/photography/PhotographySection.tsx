import { SectionHeading } from "../../components/ui/SectionHeading";
import { photos } from "./photographyData";

export function PhotographySection() {
  return (
    <section id="photography" className="section-shell">
      <SectionHeading
        eyebrow="Photography"
        title="A visual diary in full-frame rhythm."
        description="Images keep their natural ratio with no hard cropping or distortion."
      />

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="glass mb-5 break-inside-avoid overflow-hidden p-3 transition duration-300 hover:-translate-y-1"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-auto w-full rounded-xl object-contain"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
