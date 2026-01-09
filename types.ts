
export interface Project {
  title: string;
  description: string[];
  link?: string;
  tags: string[];
}

export interface Education {
  institution: string;
  location: string;
  period: string;
  degree: string;
}

export interface Certification {
  title: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
