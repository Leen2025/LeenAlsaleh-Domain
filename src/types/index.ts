export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type SiteProfile = {
  name: string;
  role: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
    project: string;
  };
};

export type HeroData = {
  headline: string;
  valueProposition: string;
  primaryCta: string;
  secondaryCta: string;
  avatar: string;
  chips: string[];
};

export type AboutData = {
  story: string;
  focus: string;
};

export type SkillItem = {
  title: string;
  details: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export type MediaItem = {
  title: string;
  caption: string;
  duration: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
};
