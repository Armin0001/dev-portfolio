export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  accentTag: string;
  description: string;
  overview: string;
  challenges: string[];
  architecture: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'ether-perfume',
    title: 'Ether Perfume',
    image: '/assets/images/ether.png',
    tags: ['Next.js', 'WebGL / GLSL', 'GSAP'],
    accentTag: 'Next.js',
    description: 'Interactive product landing page rendering GPU-accelerated particle systems synchronized with scroll motion.',
    overview: 'A high-performance luxury fragrance showcase combining custom WebGL fragment shaders with GSAP ScrollTrigger for seamless cinematic micro-interactions.',
    challenges: [
      'Maintaining 60FPS particle simulations while handling heavy scroll events.',
      'Ensuring fallback rendering on low-power mobile GPUs.',
      'Synchronizing canvas animations with DOM text overlays.'
    ],
    architecture: [
      'Next.js App Router for SSG/ISR static performance.',
      'Three.js / Custom GLSL shaders for WebGL GPU rendering.',
      'Tailwind CSS for responsive layout utility bounds.'
    ]
  },
  {
    id: 'aura-flow',
    title: 'Aura Flow Workspace',
    image: '/assets/images/aura.png',
    tags: ['React 19', 'Tailwind v4', 'Local Storage'],
    accentTag: 'React 19',
    description: 'Productivity workspace featuring drag-and-drop Kanban boards, focus timer, and subtask checklists.',
    overview: 'A focused, distraction-free modular productivity engine designed for managing engineering sprints, daily task lists, and focus routines.',
    challenges: [
      'Optimizing re-renders during rapid drag-and-drop state modifications.',
      'Implementing persistent client-side data synchronization without database latency.',
      'Creating fluid accessible keyboard shortcuts for task reordering.'
    ],
    architecture: [
      'React 19 Hooks for local optimistic state management.',
      'Tailwind CSS v4 for clean theme tokens.',
      'HTML5 Drag and Drop API with custom drop-indicator animations.'
    ]
  },
  {
    id: 'cinescope',
    title: 'CineScope Discovery',
    image: '/assets/images/cinescope.png',
    tags: ['Angular 18', 'TMDB API', 'RxJS'],
    accentTag: 'Angular 18',
    description: 'Entertainment discovery application built with Angular 18 and TMDB API for responsive media browsing.',
    overview: 'A streamlined streaming media discovery portal built to deliver instant search filtering, real-time infinite scrolling, and rich media previews.',
    challenges: [
      'Managing complex API query debouncing with RxJS streams.',
      'Handling high-resolution image preloading during fast carousel scroll.',
      'Structuring dynamic route transitions for movie detail views.'
    ],
    architecture: [
      'Angular 18 Signals for fine-grained reactivity.',
      'RxJS operators (switchMap, debounceTime) for clean API request orchestration.',
      'TMDB REST API with local caching strategies.'
    ]
  },
  {
    id: 'ticket-filter-system',
    title: 'Ticket Filter System',
    image: '/assets/images/ticket.png',
    tags: ['Next.js', 'Firebase Firestore', 'TypeScript'],
    accentTag: 'Next.js',
    description: 'Multi-criteria ticket filtering application performing low-latency query lookups on Firestore.',
    overview: 'An enterprise-grade support ticket management interface capable of performing instant multi-attribute query indexing across high-volume datasets.',
    challenges: [
      'Constructing complex composite Firestore queries while maintaining minimal execution latency.',
      'Designing flexible UI state filters with immediate dynamic updates.',
      'Enforcing strict TypeScript typing across dynamic query payloads.'
    ],
    architecture: [
      'Next.js App Router with Server Components.',
      'Firebase Firestore for indexed database queries.',
      'TypeScript for strict payload type safety.'
    ]
  },
  {
    id: 'excalidraw-ai',
    title: 'Excalidraw AI Agent',
    image: '/assets/images/excalidraw.png',
    tags: ['TypeScript', 'Cloudflare Workers', 'Excalidraw API'],
    accentTag: 'TypeScript',
    description: 'Diagramming UI converting natural language text descriptions into visual Excalidraw canvas layouts.',
    overview: 'An AI-powered canvas visualizer that parses plain text instructions into structured SVG element trees and interactive Excalidraw scenes.',
    challenges: [
      'Parsing unstructured LLM JSON outputs into strict Excalidraw element schemas.',
      'Managing low-latency edge function calls on Cloudflare Workers.',
      'Handling real-time visual canvas rendering and zoom controls.'
    ],
    architecture: [
      'Cloudflare Workers for serverless edge execution.',
      'Excalidraw API for dynamic canvas element injection.',
      'TypeScript for strict structural schema validation.'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.id === slug);
}