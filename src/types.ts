export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  github: string;
  demo: string;
  features: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level?: number }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface SoftSkill {
  id: string;
  title: string;
  metric: string;
  description: string;
}

export interface HackathonWin {
  id: string;
  title: string;
  organizer: string;
  award: string;
  rankBadge: string;
  prize: string;
  date: string;
  projectName: string;
  projectRepo?: string;
  projectDemo?: string;
  image: string;
  description: string;
  highlights: string[];
  skills: string[];
}
