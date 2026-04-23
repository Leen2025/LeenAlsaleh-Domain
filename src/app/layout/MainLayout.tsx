import { ReactNode } from "react";
import { navItems } from "../../data/navigation";
import { siteProfile } from "../../data/site";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(203,169,102,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />

      <header className="sticky top-0 z-30 border-b border-primary/10 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <a href="#hero" className="font-display text-xl text-accent">
            {siteProfile.name}
          </a>

          <ul className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-muted md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
