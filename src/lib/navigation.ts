export interface NavItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  subsections?: NavItem[];
}

export interface SidebarNavItem extends NavItem {
  subsections?: SidebarNavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export const navigation: NavItem[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    href: '',
  },
  {
    id: 'introduction',
    title: 'Introduction',
    href: '',
    subsections: [
      { id: 'company-overview', title: 'Company Overview', href: '' },
      { id: 'internship-goals', title: 'Internship Goals', href: '' }
    ]
  },
  {
    id: 'overview',
    title: 'Overview of the Internship',
    href: '',
    subsections: [
      { id: 'timeline', title: 'Timeline', href: '' },
      { id: 'department-structure', title: 'Department Structure', href: '' }
    ]
  },
  {
    id: 'tasks',
    title: 'Tasks and Responsibilities',
    href: '',
    subsections: [
      { id: 'weekly-activities', title: 'Weekly Activities', href: '' },
      { id: 'major-projects', title: 'Major Projects', href: '' },
      { id: 'technical-implementations', title: 'Technical Implementations', href: '' }
    ]
  },
  {
    id: 'skills',
    title: 'Skills Gained',
    href: '',
    subsections: [
      { id: 'technical-skills', title: 'Technical Skills', href: '' },
      { id: 'soft-skills', title: 'Soft Skills', href: '' },
      { id: 'certifications', title: 'Certifications', href: '' }
    ]
  },
  {
    id: 'projects-workflows',
    title: 'Projects & Workflows',
    href: '',
    subsections: [
      { id: 'network-infrastructure', title: 'Network Infrastructure', href: '' },
      { id: 'automation-tools', title: 'Automation Tools', href: '' },
      { id: 'security-implementations', title: 'Security Implementations', href: '' }
    ]
  },
  {
    id: 'automation-scripts',
    title: 'Automation Scripts',
    href: '',
    subsections: [
      { id: 'monitoring-scripts', title: 'Monitoring Scripts', href: '' },
      { id: 'deployment-scripts', title: 'Deployment Scripts', href: '' },
      { id: 'maintenance-scripts', title: 'Maintenance Scripts', href: '' }
    ]
  },
  {
    id: 'challenges',
    title: 'Challenges and Solutions',
    href: '',
    subsections: [
      { id: 'technical-challenges', title: 'Technical Challenges', href: '' },
      { id: 'problem-solving', title: 'Problem Solving Approach', href: '' }
    ]
  },
  {
    id: 'takeaways',
    title: 'Key Takeaways',
    href: ''
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    href: ''
  },
  {
    id: 'acknowledgments',
    title: 'Acknowledgments',
    href: ''
  },
  {
    id: 'glossary',
    title: 'Glossary',
    href: ''
  }
];
