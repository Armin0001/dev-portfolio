"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Code,
  ArrowRight,
  ChevronRight,
  Boxes,
  Gauge,
  Accessibility,
  Sparkles,
} from "lucide-react";
import { useAudio } from "@/app/context/AudioContext";

export default function HomePage() {
  const { playSound } = useAudio();
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/syabro/neat-annotations/neat-annotations.css"
  ></link>;
  return (
    <section className="page-view active-page">
      {/* Grounded Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-indigo-700 text-xs font-mono">
            <Code className="w-3.5 h-3.5" />
            <span>
              FRONTEND ENGINEER &{" "}
              <span
                className="ann ann-w ann-blue"
                data-note="check out my projects"
                style={{ "--ann-label-max-width": "220px" } as React.CSSProperties}
                
              >
                 UI SPECIALIST
              </span>
            </span>
          </div>

          <h1 className="custom-heading font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] w-full text-center">
            Building responsive, accessible, and performant web interfaces.
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Frontend Engineer with 3+ years of professional software engineering
            experience (Full Stack Developer at Artco Group). Specialized in
            building modern user interfaces using{" "}
            <strong className="text-slate-900">
              React, Next.js, TypeScript
            </strong>
            , and CSS design systems with a strong focus on accessibility,
            motion, and web performance.
          </p>

          {/* Verified Experience Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-slate-200 py-6 max-w-3xl w-full font-mono">
            <div>
              <span className="block text-2xl font-bold text-slate-900">
                3+ Years
              </span>
              <span className="text-xs text-slate-500">Professional Exp.</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-indigo-600">
                React + Next.js
              </span>
              <span className="text-xs text-slate-500">Frontend Stack</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-emerald-600">
                WCAG & Vitals
              </span>
              <span className="text-xs text-slate-500">
                Accessibility & Perf
              </span>
            </div>
          </div>

          {/* Hero Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              onClick={playSound}
              className="btn-primary-light text-sm flex items-center gap-2"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              onClick={playSound}
              className="btn-secondary-light text-sm flex items-center gap-2"
            >
              <span>Read About My Background</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Core Frontend Focus Matrix */}
      <div className="bg-slate-50 border-y border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider block mb-2">
              Frontend Disciplines
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              Core Technical Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="card-light p-6 space-y-3 cursor-pointer"
              onClick={playSound}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Component Architecture
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designing modular, encapsulated UI component structures using
                React, Next.js, and TypeScript.
              </p>
            </div>

            <div
              className="card-light p-6 space-y-3 cursor-pointer"
              onClick={playSound}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                <span
                className="ann ann-sw ann-blue ann-no-mark"
                data-note="fast load times, smooth interactions, happier users"
                style={{ "--ann-label-max-width": "120px" } as React.CSSProperties}
                
              >
                Web Performance
              </span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optimizing Core Web Vitals through code splitting, lazy asset
                loading, responsive media, and efficient rendering.
              </p>
            </div>

            <div
              className="card-light p-6 space-y-3 cursor-pointer"
              onClick={playSound}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Accessibility className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Accessibility (a11y)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Implementing semantic HTML, keyboard navigation, ARIA
                attributes, focus states, and reduced-motion support.
              </p>
            </div>

            <div
              className="card-light p-6 space-y-3 cursor-pointer"
              onClick={playSound}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Motion & Interactions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creating intentional micro-interactions, spring physics
                transitions, and WebGL particle shaders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Studies Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider block mb-2">
              Featured Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frontend Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            onClick={playSound}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="card-light overflow-hidden flex flex-col justify-between group">
            <div className="img-wrapper-light aspect-video relative">
              <Image
                src="/assets/images/ether.png"
                alt="Ether Perfume"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="tag-pill tag-pill-accent">Next.js</span>
                  <span className="tag-pill">WebGL / GLSL</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Ether Perfume
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3">
                  Interactive luxury product landing page rendering
                  GPU-accelerated particle systems synchronized with GSAP
                  ScrollSmoother.
                </p>
              </div>
              <Link
                href="/projects/ether-perfume"
                onClick={playSound}
                className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>View Engineering Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          <article className="card-light overflow-hidden flex flex-col justify-between group">
            <div className="img-wrapper-light aspect-video relative">
              <Image
                src="/assets/images/aura.png"
                alt="Aura Flow Workspace"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="tag-pill tag-pill-accent">React 19</span>
                  <span className="tag-pill">Tailwind v4</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Aura Flow Workspace
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3">
                  Productivity workspace featuring drag-and-drop Kanban boards,
                  subtask checklists, and theme tokens.
                </p>
              </div>
              <Link
                href="/projects/aura-flow"
                onClick={playSound}
                className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>View Engineering Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          <article className="card-light overflow-hidden flex flex-col justify-between group">
            <div className="img-wrapper-light aspect-video relative">
              <Image
                src="/assets/images/cinescope.png"
                alt="CineScope Discovery App"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="tag-pill tag-pill-accent">Angular 18</span>
                  <span className="tag-pill">RxJS</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  CineScope Discovery
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3">
                  Entertainment discovery application built with Angular 18 and
                  TMDB API for responsive media browsing.
                </p>
              </div>
              <Link
                href="/projects/cinescope"
                onClick={playSound}
                className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>View Engineering Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
