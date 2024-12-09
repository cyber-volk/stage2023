export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface Workflow {
  name: string;
  description: string;
  steps: string[];
}

export interface ProjectsTranslations {
  projects: {
    title: string;
    list: Project[];
    technologies: string;
  };
  workflows: {
    title: string;
    list: Workflow[];
    steps: string;
  };
}
