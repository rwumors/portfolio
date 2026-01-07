export const kyoSocialPlatformData = {
  title: 'Kyo Social Platform',
  description: 'A modern social platform with customizable profiles, music playlists, and image albums. Built with Next.js 15 and self-hosted Supabase.',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  image: '/portfolio/images/kyoSocial.webp',
  screenshots: [
    // Add your screenshot URLs here
    // Example: '/images/social-platform-1.png',
    // '/images/social-platform-2.png',
  ],
  architecture: {
    tldr: {
      overview: 'Production social platform built with Next.js 15 App Router and self-hosted Supabase. Designed as a stateless, horizontally scalable system with edge-ready architecture, real-time capabilities, and comprehensive error handling to ensure high availability and performance.',
      coreFlow: 'Client (Browser/Mobile) → Next.js Edge Middleware (Auth) → App Router (Server/Client Components) → API Routes/Server Actions → Supabase (PostgreSQL/Auth/Storage) → External APIs (Spotify, Discord, TMDB)',
      keyDecisions: [
        'Next.js App Router for server/client component separation and optimal performance',
        'Self-hosted Supabase for full control over database, auth, and storage',
        'Stateless architecture enabling horizontal scaling across multiple instances',
        'Edge middleware for authentication and route protection before page load',
      ],
      scalingReliability: [
        'Horizontal scaling via multiple Next.js instances behind load balancer',
        'Supabase PostgreSQL with connection pooling and read replicas',
        'Multi-layer caching strategy (Browser → CDN → Redis → Database)',
        'Comprehensive error handling with retries, fallbacks, and graceful degradation',
      ],
      whyItMatters: 'This architecture prioritizes scalability and reliability, allowing the platform to grow seamlessly while maintaining high performance. The stateless design and managed database services enable easy horizontal scaling, while comprehensive error handling ensures continuous operation under failure conditions.',
    },
    details: {
      systemDiagram: {
        clientLayer: ['Next.js App Router - Server & Client Components', 'React 19 - UI rendering', 'Tailwind CSS - Styling', 'BlockNote - Rich text editor', 'State Management - React hooks + Context API'],
        edgeLayer: ['Next.js Middleware - Request interception', 'Supabase Session Management - Auth cookie refresh', 'Route Protection - Auth checks before page load', 'URL Rewriting - Custom profile URLs (@username)'],
        applicationLayer: ['API Routes (/api/*) - RESTful endpoints', 'Server Actions - Form submissions, mutations', 'Server Components - Data fetching, SEO', 'Client Components - Interactive UI'],
        dataLayer: ['Supabase PostgreSQL - Primary database', 'Supabase Auth - Authentication & authorization', 'Supabase Storage - File storage (S3-compatible)', 'Supabase Realtime - Real-time subscriptions'],
        externalServices: ['Spotify API - Music data, playlists', 'Discord OAuth - Social authentication', 'TMDB - TV/Movie metadata', 'Last.fm - Music scrobbling', 'MusicBrainz - Music metadata'],
      },
      dataFlows: {
        authentication: 'User Request → Next.js Middleware (Check session) → Supabase Auth (Validate JWT) → Load User Data → Render Page',
        apiRequest: 'Client Component → API Route → Authentication Check → Request Validation → Business Logic → Supabase Client → PostgreSQL → Response',
        fileUpload: 'User Upload → FormData Processing → POST /api/[endpoint] → Server-Side Processing (Sharp) → Supabase Storage → Database Update → Return Public URL',
        realtime: 'Client Subscription → Supabase Realtime → WebSocket Connection → Database Change Event → Broadcast to Subscribers (RLS filtered) → Client Receives Update',
        externalAPI: 'User Action → Client Request → API Route Handler → External API Call (with retry) → Response Processing → Database Storage → Background Processing → Return Success',
      },
      scalingStrategy: {
        horizontal: [
          'Deploy multiple Next.js instances behind load balancer (Vercel/Cloudflare)',
          'Stateless server instances with shared session storage (Supabase)',
          'Auto-scaling based on CPU/memory metrics',
          'Regional edge deployments for global performance',
        ],
        database: [
          'Supabase scales PostgreSQL automatically with connection pooling (PgBouncer)',
          'Read replicas for read-heavy workloads',
          'Partitioning for large tables',
          'Index optimization and query optimization',
        ],
        caching: [
          'Browser Cache - Static assets, images',
          'CDN Cache - Vercel Edge Network',
          'Redis Cache - API responses, computed data (recommended)',
          'Database Query Cache - Supabase built-in',
        ],
        media: [
          'Migrate all images to Supabase Storage',
          'Implement image CDN (Cloudflare/Cloudinary)',
          'Lazy loading & responsive images',
          'Image optimization pipeline with multiple size variants',
        ],
      },
      failureHandling: {
        errorBoundaries: ['Client-side error boundaries for React rendering errors', 'Server-side error handling in API routes with appropriate status codes', 'Fallback UI and user recovery mechanisms'],
        database: ['Connection retry logic with exponential backoff', 'RLS policy violation handling', 'Transaction rollback for multi-step operations'],
        externalAPIs: ['Retry logic with exponential backoff', 'Rate limiting handling (429 status)', 'Fallback strategies (e.g., Spotify → Last.fm → Default)'],
        fileUpload: ['File validation (size, type)', 'Duplicate upload handling', 'Error logging and user-friendly messages'],
        network: ['Request timeout handling', 'AbortController for cancellation', 'Network error detection and retry'],
        monitoring: ['Centralized error logging (Sentry integration)', 'Database error log table', 'User-friendly error messages', 'Circuit breaker pattern for external services'],
      },
    },
  },
  features: {
    'User Profiles & Authentication': [
      'Supabase-based auth with Discord OAuth and email/password',
      'Customizable profiles: Avatar, banner, username, bio, location',
      'Custom profile URLs (e.g., kyo.gg/@username)',
      'Privacy controls: Public/private profiles and activity visibility',
    ],
    'Rich Content Editor (Home Tab)': [
      'BlockNote Editor for rich text profile content',
      'Media embedding: Songs, playlists, albums, and images',
      'Customizable home page creation and editing',
      'Manual save system with unsaved changes indicator',
    ],
    'Music Management': [
      'Create, edit, and manage playlists',
      'Spotify integration: Import playlists and view recently played tracks',
      'Global track database with album art',
      'Track previews via Spotify',
      'Public/private playlist privacy controls',
      'Right-click context menus for playlists',
    ],
    'Image Albums': [
      'Create and organize image albums',
      'Privacy controls: Private/public albums',
      'Custom album covers',
      'Image organization with tags and categories',
      'Grid/list viewing modes',
      'Filters & sorting: By date, name, size, favorites',
    ],
    'Activity Feed': [
      'Social activity tracking and interactions',
      'Activity visibility controls',
      'Interactive elements: Clickable activities linking to content',
    ],
    'Settings & Customization': [
      'Theme customization: Custom accent colors with color picker',
      'Cursor styles: Custom cursor options',
      'Profile settings: Username, location, bio management',
      'Privacy settings: Profile and activity visibility controls',
      'Connections: Manage external account connections',
    ],
    'Gallery': [
      'Image browsing and viewing',
      'Album viewing and collections',
      'Tag system for image organization',
      'Sorting options by various criteria',
    ],
    'Admin Features': [
      'Admin dashboard with tools and statistics',
      'Data management: Import/export tools, data fixes',
      'Spotify integration tools for admin',
    ],
    'Additional Features': [
      'Multi-step onboarding (username, avatar, banner, bio, location)',
      'Public profiles: View other users\' public profiles',
      'Responsive design with modern UI and Tailwind CSS',
      'Self-hosted Supabase backend',
      'Image storage: Album art, avatars, banners, and user uploads',
    ],
  },
};

