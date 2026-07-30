'use client';

import Link from 'next/link';
import { Code2, ArrowRight } from 'lucide-react';
import { useAudio } from '@/app/context/AudioContext'; // Adjust path if using relative import like "../context/AudioContext"

const projects = [
  {
    id: 'ether-perfume',
    title: 'Ether Perfume',
    image: '/assets/images/ether.png',
    tags: ['Next.js', 'WebGL / GLSL', 'GSAP'],
    accentTag: 'Next.js',
    description: 'Interactive product landing page rendering GPU-accelerated particle systems synchronized with scroll motion.'
  },
  {
    id: 'aura-flow',
    title: 'Aura Flow Workspace',
    image: '/assets/images/aura.png',
    tags: ['React 19', 'Tailwind v4', 'Local Storage'],
    accentTag: 'React 19',
    description: 'Productivity workspace featuring drag-and-drop Kanban boards, focus timer, and subtask checklists.'
  },
  {
    id: 'cinescope',
    title: 'CineScope Discovery',
    image: '/assets/images/cinescope.png',
    tags: ['Angular 18', 'TMDB API', 'RxJS'],
    accentTag: 'Angular 18',
    description: 'Entertainment discovery application built with Angular 18 and TMDB API for responsive media browsing.'
  },
  {
    id: 'ticket-filter-system',
    title: 'Ticket Filter System',
    image: '/assets/images/ticket.png',
    tags: ['Next.js', 'Firebase Firestore', 'TypeScript'],
    accentTag: 'Next.js',
    description: 'Multi-criteria ticket filtering application performing low-latency query lookups on Firestore.'
  },
  {
    id: 'excalidraw-ai',
    title: 'Excalidraw AI Agent',
    image: '/assets/images/excalidraw.png',
    tags: ['TypeScript', 'Cloudflare Workers', 'Excalidraw API'],
    accentTag: 'TypeScript',
    description: 'Diagramming UI converting natural language text descriptions into visual Excalidraw canvas layouts.'
  }
];

export default function ProjectsPage() {
  const { playSound } = useAudio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>INDEPENDENT ENGINEERING PROJECTS</span>
        </div>
        <h1 className="font-heading text-4xl font-extrabold text-slate-900 tracking-tight">
          Frontend Case Studies
        </h1>
        <p className="text-slate-600 text-base">
          Independent frontend engineering case studies exploring component design decisions, responsive layout strategies, performance trade-offs, and accessibility implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="card-light overflow-hidden flex flex-col justify-between group">
            <div className="img-wrapper-light aspect-video relative">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag-pill ${tag === project.accentTag ? 'tag-pill-accent' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <Link
                href={`/projects/${project.id}`}
                onClick={playSound}
                className="btn-secondary-light text-xs w-full py-2 flex items-center justify-center gap-1"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}