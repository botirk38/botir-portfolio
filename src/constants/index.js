import {
  backend,
  prototyping,
  javascript,
  typescript,
  git,
  docker,
  postgresql,
  smartguardian,
  infrastructure,
  c_icon,
  cpp_icon,
  rust_icon,
  go_icon,
  python,
  java,
  linux,
  kubernetes,
  mongodb,
  kafka,
  rabbitmq,
  fashion_ai,
  kreativstorm,
  fastkey,
  flowstream,
  dockstream,
  soloAgent,
  shellmaster
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },

  {
    title: "Infrastructure Developer",
    icon: infrastructure
  },

  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];


const technologies = [
  {
    name: 'C',
    icon: c_icon, // Add the appropriate icon for C
  },
  {
    name: 'C++',
    icon: cpp_icon, // Add the appropriate icon for C++
  },
  {
    name: 'Rust',
    icon: rust_icon, // Add the appropriate icon for Rust
  },
  {
    name: 'Go',
    icon: go_icon, // Add the appropriate icon for Go
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Git',
    icon: git,
  },

  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Linux',
    icon: linux, // Add the appropriate icon for Linux
  },
  {
    name: 'Kubernetes',
    icon: kubernetes, // Add the appropriate icon for Kubernetes
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Apache Kafka',
    icon: kafka, // Add the appropriate icon for Apache Kafka
  },
  {
    name: 'RabbitMQ',
    icon: rabbitmq, // Add the appropriate icon for RabbitMQ
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Fashion AI',
    icon: fashion_ai, // Add the appropriate icon for Fashion AI
    iconBg: '#333333',
    date: 'Nov 2023 - Mar 2024',
    points: [
      'Led the development of a sophisticated authentication system for Competiio, integrating Auth0 with Next.js and Spring.',
      'Designed a highly interactive competition interface, significantly enhancing user engagement and operational efficiency.',
      'Implemented Redis to optimize database interactions, reducing calls by 15% for real-time updates.',
      'Applied advanced search algorithms in Spring, markedly improving data retrieval speed and accuracy.'
    ],
  },
  {
    title: 'Frontend Engineer Intern',
    company_name: 'Kreativstorm',
    icon: kreativstorm, // Add the appropriate icon for Kreativstorm
    iconBg: '#333333',
    date: 'Jul 2023 - Aug 2023',
    points: [
      'Developed and deployed visually appealing websites with HTML, CSS, and JavaScript, boosting user engagement by 30% and reducing bounce rate by 20%.',
      'Played a key role in enhancing site loading speed by 15% through collaborative performance optimization.',
      'Utilized user interaction data to refine website design, achieving a 15% increase in session duration and a 10% uplift in conversion rates.'
    ],
  }
];


const projects = [
  {
    id: 'project-1',
    name: 'SmartGuardian',
    description: 'A tool that allows detection of vulnerabilites in SVM based smart contracts',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: smartguardian,
    repo: 'https://github.com/botirk38/GuardianAI',
    demo: 'https://smart-guardian.com',
  },
  {
    id: 'project-2',
    name: 'SoloAgent',
    description:
      'A AI agent that generates a MVP for a software product from a specification.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: soloAgent,
    repo: 'https://github.com/botirk38/SoloAgent',
    demo: 'https://soloagent.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'fastkey',
    description: 'A custom key value store database with various features such as streams, replication, and transactions.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: fastkey,
    repo: 'https://github.com/botirk38/fastkey',
    demo: 'https://github.com/botirk38/fastkey',
  },
  {
    id: 'project-4',
    name: 'Flowstream',
    description: 'A high performance designed to enhance peer-to-peer file sharing built with Go.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: flowstream,
    repo: 'https://github.com/botirk38/FlowStream',
    demo: 'https://github.com/botirk38/FlowStream',
  },
  {
    id: 'project-5',
    name: 'Dockstream',
    description:
      'DockStream is a command-line utility designed to facilitate the management and isolation of containerized applications.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: dockstream,
    repo: 'https://github.com/botirk38/DockStream',
    demo: 'https://github.com/botirk38/DockStream',
  },
  {
    id: 'project-6',
    name: 'ShellMaster',
    description: 'MyShell, a custom Unix shell designed to mimic the behavior of common shell commands.',
    image: shellmaster,
    repo: 'https://github.com/botirk38/ShellMaster',
    demo: 'https://github.com/botirk38/ShellMaster',
  }
];

export { services, technologies, experiences, projects };

