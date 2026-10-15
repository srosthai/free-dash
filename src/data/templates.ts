export type TemplateStatus = 'completed' | 'coming-soon' | 'planned';

export interface Template {
  id: number;
  title: string;
  description: string;
  image: string;
  status: TemplateStatus;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  progress?: number;
  startDate?: string;
}

export const templates: Template[] = [
  {
    id: 1,
    title: 'Bootstrap 5 Admin & Dashboard Template',
    description:
      'Built with Bootstrap, HTML5, CSS3, and jQuery, it includes flexible vertical and horizontal layouts, reusable components, widgets, and pre-built pages—perfect for creating dynamic dashboards and enterprise applications.',
    image: 'main.png',
    demoUrl: 'https://2d-admin-panel.vercel.app/',
    githubUrl: 'https://github.com/srosthai/2D-Admin-Panel',
    status: 'completed',
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery..'],
  },
  {
    id: 2,
    title: 'AdminTo & Dashboard Template',
    description:
      'It offers a fully responsive design, extensive customization options, and a rich collection of UI components. Ideal for building modern web applications, it includes multiple layouts, themes, and plugins to enhance user experience.',
    image: 'main-adminTo.png',
    demoUrl: 'https://admin-panel-dashboard-eta.vercel.app/',
    githubUrl: 'https://github.com/srosthai/AdminTo-Dashboard-Panel',
    status: 'completed',
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery...'],
  },
  {
    id: 3,
    title: 'Modern Admin Dashboard Template',
    description:
      "Free Dashboard, Click to view demo here's the link. And you can download the source code from GitHub.",
    image: 'modern-dash.webp',
    demoUrl: 'https://modern-dash.vercel.app/',
    githubUrl: 'https://github.com/srosthai/modern-dashboard',
    status: 'completed',
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery...'],
  },
  {
    id: 4,
    title: 'Modern Admin Panel',
    description:
      "Free Dashboard, Click to view demo here's the link. And you can download the source code from GitHub.",
    image: 'dashly.webp',
    demoUrl: 'https://adminpanel-templete.vercel.app/',
    githubUrl: 'https://github.com/srosthai/AdminPanel-Dashly',
    status: 'completed',
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery...'],
  },
  {
    id: 5,
    title: 'Loper-Dashboard',
    description:
      'Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.',
    image: 'loper.webp',
    demoUrl: 'https://adminpanel-loper.vercel.app/',
    githubUrl: 'https://github.com/srosthai/AdminLoper-Dashboard',
    status: 'completed',
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery...'],
  },
  {
    id: 6,
    title: 'Craft-AdminPanel Dashboard',
    description:
      'Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.',
    image: 'craf.webp',
    status: 'coming-soon',
    progress: 25,
    technologies: ['Bootstrap 5', 'HTML5', 'CSS3', 'jQuery...'],
  },
  {
    id: 7,
    title: 'Falcon – Admin Dashboard & WebApp Template',
    description:
      'Create a UI that stands out — a design that is beautiful, slick, and delivers the ultimate user experience. Start with Falcon, streamline your UI design.',
    image: 'image.png',
    status: 'planned',
    startDate: 'Fall 2025',
    technologies: ['Vue.js', 'TailwindCSS', 'Firebase'],
  },
  {
    id: 8,
    title: 'Keen – Admin Dashboard Template',
    description:
      'Keen is a powerful admin dashboard template built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.',
    image: 'keen.webp',
    status: 'planned',
    startDate: 'Fall 2025',
    technologies: ['Vue.js', 'TailwindCSS', 'Firebase'],
  },
  {
    id: 9,
    title: 'GOOD – AdminPanel Dashboard',
    description:
      'Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.',
    image: 'good.webp',
    status: 'planned',
    startDate: 'Fall 2025',
    technologies: ['Vue.js', 'TailwindCSS', 'Firebase'],
  },
];
