export interface ProjectMetric {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    category: 'NLP' | 'Deep Learning' | 'Computer Vision' | 'MLOps & Systems';
    tags: string[];
    metrics: ProjectMetric[];
    architecture: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface SkillItem {
    name: string;
    level: number;
    highlight?: string;
}

export interface SkillGroup {
    category: string;
    description: string;
    skills: SkillItem[];
}

export interface ExperienceItem {
    role: string;
    organization: string;
    location: string;
    period: string;
    description: string[];
    tags: string[];
}