import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { mediaItems } from "./mediaData";

export function MediaSection() {
  return (
    <section id="media" className="section-shell">
      <SectionHeading
        eyebrow="Media"
        title="Showcase videos for AI agents and automation flows."
        description="Swap placeholders with your uploaded clips or embedded videos when ready."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mediaItems.map((item) => (
          <GlassCard key={item.title} className="group overflow-hidden p-0">
            <div className="relative grid min-h-[220px] place-items-center bg-gradient-to-br from-primary/25 via-transparent to-accent/20 p-6">
              <button
                className="grid h-16 w-16 place-items-center rounded-full border border-primary/50 bg-bg/80 text-xl text-primary transition group-hover:scale-110 group-hover:animate-glow"
                type="button"
                aria-label={`Play ${item.title}`}
              >
                ▶
              </button>
              <span className="absolute right-4 top-4 rounded-full border border-primary/35 bg-bg/70 px-3 py-1 text-xs text-accent">
                {item.duration}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-accent">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.caption}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
