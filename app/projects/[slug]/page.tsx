import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { projectsData, getProjectBySlug } from '../../lib/projectsData';
import AudioLink from '../../components/AudioLink'; // Adjust import path if needed

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render static paths for all projects at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Back Navigation */}
      <div>
        <AudioLink
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </AudioLink>
      </div>

      {/* Header Info */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`tag-pill ${tag === project.accentTag ? 'tag-pill-accent' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {project.title}
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          {project.overview}
        </p>

        {/* Action Links */}
        {(project.demoUrl || project.repoUrl) && (
          <div className="flex items-center gap-4 pt-2">
            {project.demoUrl && (
              <AudioLink
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-light text-xs flex items-center gap-2"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </AudioLink>
            )}
            {project.repoUrl && (
              <AudioLink
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-light text-xs flex items-center gap-2"
              >
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </AudioLink>
            )}
          </div>
        )}
      </div>

      {/* Main Banner Image */}
      <div className="img-wrapper-light aspect-video relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover"
        />
      </div>

      {/* Engineering Breakdown Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
        {/* Key Engineering Challenges */}
        <div className="card-light p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 font-heading font-bold text-lg">
            <Cpu className="w-5 h-5" />
            <h2>Technical Challenges</h2>
          </div>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Stack */}
        <div className="card-light p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 font-heading font-bold text-lg">
            <Layers className="w-5 h-5" />
            <h2>Architecture & Stack</h2>
          </div>
          <ul className="space-y-3">
            {project.architecture.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}