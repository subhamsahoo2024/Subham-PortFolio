export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Full-Stack' | 'AI/ML';
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
