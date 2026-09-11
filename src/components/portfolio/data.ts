export const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '8', label: 'Core Technologies' }
];

export const techPills = ['Flutter', 'TypeScript', 'NestJS', 'Firebase', 'RAG / Vector Search', 'UI/UX'];

export type ProjectStatus = 'live' | 'testing' | 'development';

export type StatusBadge = { label: string; status: ProjectStatus };

export type Project = {
  id: number;
  title: string;
  category: string;
  badges: StatusBadge[];
  description: string;
  techStack: string[];
  internalLink?: string;
  link?: string;
  logo?: string;
  appStoreUrl?: string;
};

export const projects: Project[] = [
  {
    id: 2,
    title: 'Theravāda Chants',
    category: 'Mobile App',
    badges: [
      { label: 'Live on App Store', status: 'live' },
      { label: 'Testing on Google Play', status: 'testing' }
    ],
    description:
      'A Pali chanting companion — chants with English translations, precept-level reading lists, a guided ceremony walkthrough, and a Pali pronunciation guide.',
    techStack: ['Flutter', 'Firebase', 'RevenueCat'],
    internalLink: '/projects/theravada-chants',
    logo: '/projects/theravada-chants/icon.png',
    appStoreUrl: 'https://apps.apple.com/lk/app/therav%C4%81da-chants/id6806461385'
  },
  {
    id: 3,
    title: 'Omi Clash',
    category: 'Mobile Game',
    badges: [
      { label: 'Live on App Store', status: 'live' },
      { label: 'Testing on Google Play', status: 'testing' }
    ],
    description:
      'A 4-player trick-taking card game (Omi) with friend chat, live table voice chat, and country/global leaderboards.',
    techStack: ['Flutter', 'Flame', 'WebRTC', 'Cloud Functions'],
    internalLink: '/projects/omi-clash',
    logo: '/projects/omi-clash/icon.png',
    appStoreUrl: 'https://apps.apple.com/lk/app/omi-clash/id6793634949'
  },
  {
    id: 4,
    title: 'Drift & Direct',
    category: 'Mobile Game',
    badges: [
      { label: 'Testing on App Store', status: 'testing' },
      { label: 'Testing on Google Play', status: 'testing' }
    ],
    description: 'A swiping-mechanism based mobile focus game, designed to help players relax and stay in the moment.',
    techStack: ['Flutter', 'Bloc', 'Firebase Auth', 'Game Center'],
    internalLink: '/projects/drift-and-direct',
    logo: '/projects/drift-and-direct/icon.png'
  },
  {
    id: 5,
    title: 'DeckDrill',
    category: 'Utility App',
    badges: [{ label: 'In Development', status: 'development' }],
    description: 'A card counting and training simulator application.',
    techStack: ['Flutter', 'Riverpod'],
    internalLink: '/projects/deckdrill',
    logo: '/projects/deckdrill/icon.png'
  },
  {
    id: 6,
    title: 'Election Results Dashboard',
    category: 'Web App',
    badges: [{ label: 'Live', status: 'live' }],
    description: 'A dynamic dashboard displaying election results using interactive SVG maps and detailed statistics.',
    techStack: ['React', 'JavaScript', 'SVG'],
    link: 'https://ishanlahiru.github.io/election-map-site/'
  },
  {
    id: 1,
    title: 'Dammapadaya',
    category: 'Mobile App',
    badges: [{ label: 'In Development', status: 'development' }],
    description:
      'A daily-reading companion for the Dhammapada — all 423 verses across 26 chapters, in Pāli with English renderings, browsable by chapter or searchable by wording and theme.',
    techStack: ['Flutter', 'Firebase', 'Cloud Firestore'],
    internalLink: '/projects/dammapadaya',
    logo: '/projects/dammapadaya/icon.png'
  }
];

export const experience = [
  {
    title: 'Associate Software Engineer',
    org: 'Plurative',
    dates: 'Feb 2024 – Dec 2025',
    summary:
      'Built a "Stateful AI" platform giving conversational agents an OS-inspired memory architecture, with RAG-based retrieval and a type-safe backend.'
  },
  {
    title: 'Software Engineering Trainee',
    org: 'Plurative',
    dates: 'Nov 2023 – Feb 2024',
    summary:
      'Contributed end-to-end to a scalable, multi-tenant workflow platform with containerized services and real-time dashboards.'
  },
  {
    title: 'Teacher',
    org: 'Institute of Computer Engineering Technology (iCET)',
    dates: 'Jan 2023 – Oct 2023',
    summary: 'Delivered hands-on software engineering training and designed the institute\'s marketing materials.'
  },
  {
    title: 'Student',
    org: 'IJSE – Institute of Software Engineering',
    dates: 'Apr 2022 – Jan 2023',
    summary: 'Completed foundational and advanced coursework in software engineering.'
  }
];

export type Tool = { name: string; note: string; logo: string };

export const tools: Tool[] = [
  { name: 'Flutter', note: 'Cross-platform apps', logo: '/tools/flutter.svg' },
  { name: 'TypeScript', note: 'Type-safe systems', logo: '/tools/typescript.svg' },
  { name: 'NestJS', note: 'Backend APIs', logo: '/tools/nestjs.svg' },
  { name: 'Firebase', note: 'Auth, data & functions', logo: '/tools/firebase.svg' },
  { name: 'Supabase', note: 'Postgres backends', logo: '/tools/supabase.svg' },
  { name: 'Figma', note: 'Interface design', logo: '/tools/figma.svg' },
  { name: 'Rive', note: 'Interactive animation', logo: '/tools/rive.svg' },
  { name: 'FreeCAD', note: '3D & parametric design', logo: '/tools/freecad.svg' },
  { name: 'Cloudflare', note: 'Edge & DNS', logo: '/tools/cloudflare.svg' }
];

export type Interest = { name: string; note: string; logo: string };

export const interests: Interest[] = [
  { name: 'Robotics', note: 'Building & automation', logo: '/tools/arduino.svg' },
  { name: 'ROS', note: 'Robot Operating System', logo: '/tools/ros.svg' },
  { name: 'Artificial Intelligence', note: 'Exploring ML & agents', logo: '/tools/huggingface.svg' },
  { name: 'RAG', note: 'Retrieval-augmented generation', logo: '/tools/langchain.svg' },
  { name: '3D Modeling', note: 'Designing in FreeCAD', logo: '/tools/freecad.svg' }
];

export const articles = [
  {
    id: 1,
    title: 'Understanding React DnD',
    description: 'A deep dive into implementing drag-and-drop functionality in React using React DnD.',
    date: 'January 10, 2025',
    readTime: '6 min read',
    link: '#'
  },
  {
    id: 2,
    title: 'SVG Map Manipulation with React',
    description: 'Learn how to dynamically manipulate SVG maps for interactive data visualization.',
    date: 'December 15, 2024',
    readTime: '5 min read',
    link: '#'
  },
  {
    id: 3,
    title: 'Monorepo Management with Turbo',
    description: 'Best practices for managing multiple projects in a monorepo using Turbo.',
    date: 'November 20, 2024',
    readTime: '4 min read',
    link: '#'
  }
];
