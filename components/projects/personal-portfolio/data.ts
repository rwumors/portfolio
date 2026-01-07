export const personalPortfolioData = {
  title: 'Personal Portfolio',
  description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js 15, TypeScript, and Tailwind CSS with a clean component-based architecture.',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  image: '/portfolio/images/personalPfp.jpg',
  architecture: {
    tldr: {
      overview: 'Modern portfolio website built with Next.js 15 App Router and TypeScript. Designed with a modular, component-based architecture that separates shared components from project-specific implementations, enabling easy maintenance and scalability.',
      coreFlow: 'Next.js App Router → Page Component → Shared Components (Header, Hero, Footer) → Project Components (Individual project cards with tabs) → Data Layer (TypeScript data files)',
      keyDecisions: [
        'Modular component structure separating shared and project-specific code',
        'TypeScript for type safety across all components and data',
        'Component-based architecture for maximum reusability',
        'Separated data and presentation layers for easy updates',
      ],
      scalingReliability: [
        'Modular structure allows easy addition of new projects',
        'Type-safe implementation prevents runtime errors',
        'Component reusability reduces code duplication',
        'Clean separation of concerns for maintainability',
      ],
      whyItMatters: 'This architecture demonstrates clean code principles and scalable design patterns. The modular structure makes it easy to add new projects or features without affecting existing code, while TypeScript ensures type safety and better developer experience.',
    },
    details: {
      structure: {
        overview: 'Modular component architecture with separated concerns for easy maintenance and scalability.',
        folders: [
          {
            name: 'app/',
            description: 'Next.js App Router pages and layouts',
            items: ['page.tsx - Main portfolio page', 'layout.tsx - Root layout', 'globals.css - Global styles'],
          },
          {
            name: 'components/',
            description: 'Reusable React components',
            items: [
              'shared/ - Shared components (Header, Footer, Hero, etc.)',
              'projects/ - Project-specific components',
              '  ├── kyo-discord-bot/ - Discord bot project',
              '  ├── kyo-social-platform/ - Social platform project',
              '  └── personal-portfolio/ - Portfolio project',
            ],
          },
          {
            name: 'public/',
            description: 'Static assets',
            items: ['images/ - Project images and screenshots'],
          },
        ],
        architecture: [
          'Component-based architecture for reusability',
          'Separated data and presentation layers',
          'Type-safe with TypeScript',
          'Responsive design with Tailwind CSS',
          'Modular project structure for easy expansion',
        ],
      },
      designPatterns: [
        'Component Composition - Building complex UIs from smaller, reusable components',
        'Data Separation - Project data stored separately from presentation logic',
        'Type Safety - TypeScript interfaces ensure data consistency',
        'State Management - React hooks for local component state',
        'Conditional Rendering - Dynamic content based on project type',
      ],
      technologies: {
        framework: 'Next.js 15 with App Router for optimal performance and SEO',
        language: 'TypeScript for type safety and better developer experience',
        styling: 'Tailwind CSS for utility-first, responsive design',
        deployment: 'Vercel-ready architecture for seamless deployment',
      },
    },
  },
  structure: {
    overview: 'Modular component architecture with separated concerns for easy maintenance and scalability.',
    folders: [
      {
        name: 'app/',
        description: 'Next.js App Router pages and layouts',
        items: ['page.tsx - Main portfolio page', 'layout.tsx - Root layout', 'globals.css - Global styles'],
      },
      {
        name: 'components/',
        description: 'Reusable React components',
        items: [
          'shared/ - Shared components (Header, Footer, Hero, etc.)',
          'projects/ - Project-specific components',
          '  ├── kyo-discord-bot/ - Discord bot project',
          '  ├── kyo-social-platform/ - Social platform project',
          '  └── personal-portfolio/ - Portfolio project',
        ],
      },
      {
        name: 'public/',
        description: 'Static assets',
        items: ['images/ - Project images and screenshots'],
      },
    ],
    architecture: [
      'Component-based architecture for reusability',
      'Separated data and presentation layers',
      'Type-safe with TypeScript',
      'Responsive design with Tailwind CSS',
      'Modular project structure for easy expansion',
    ],
  },
  features: {
    'Design & UI': [
      'Modern dark theme with green accents',
      'Responsive design for all screen sizes',
      'Smooth animations and transitions',
      'Clean, minimalist interface',
    ],
    'Architecture': [
      'Modular component structure',
      'Separated project components',
      'Reusable shared components',
      'Type-safe TypeScript implementation',
    ],
    'Features': [
      'Real-time clock display',
      'Expandable project details',
      'Tabbed project information',
      'Tech stack icons',
      'Project showcase with images',
    ],
  },
};

