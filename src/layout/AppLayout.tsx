import { ReactNode } from "react";
import { siteProfile } from "../core/config/site";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(203,169,102,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />

      <header className="sticky top-0 z-30 border-b border-primary/10 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <a href="#hero" className="font-display text-xl text-accent">
            {siteProfile.name}
          </a>
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-muted md:flex">
            <a href="#about" className="transition hover:text-primary">
              About
            </a>
            <a href="#projects" className="transition hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-primary">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-primary/10">
        <div className="section-shell py-8 text-xs tracking-[0.14em] text-muted">
          {new Date().getFullYear()} Leen Alsaleh. Crafted with React and Tailwind.
        </div>
      </footer>
    </div>
  );
}
