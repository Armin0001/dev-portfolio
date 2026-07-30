"use client";

import Link from "next/link";
import { User, Check, GitPullRequest } from "lucide-react";
import { useAudio } from "@/app/context/AudioContext"; // Adjust path if using relative import like "../context/AudioContext"

export default function AboutPage() {
  const { playSound } = useAudio();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header Story */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>BACKGROUND & EXPERIENCE</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineering interfaces with clarity, craft, and attention to detail.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          I am Armin Isaković, a Frontend Engineer with 3+ years of professional
          software engineering experience. Based in Zenica, Bosnia &
          Herzegovina, I specialize in crafting accessible user interfaces,
          component design systems, and frontend performance optimizations.
        </p>
      </div>

      {/* Personal Motivation & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-200 pt-12">
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">
            Why I Focus on Frontend
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            I enjoy the direct impact frontend development has on user
            perception and product quality. A well-engineered interface should
            load quickly, handle edge cases gracefully, provide clear feedback
            to user interactions, and remain accessible to everyone regardless
            of input method or device capabilities.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            My core work revolves around building modular, maintainable React,
            Next.js, and TypeScript component structures that translate product
            requirements into clean user experiences.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">
            Core Frontend Skills
          </h3>
          <ul className="space-y-3 text-sm text-slate-600 font-mono">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Scalable Component Architecture & Reusable UI Systems</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>
                Performance Optimization (Core Web Vitals, Code Splitting & Lazy
                Loading)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Accessible Interfaces (WCAG, Semantic HTML & ARIA)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>Type-Safe React Development with TypeScript</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>
                Modern React Patterns (Hooks, Server Components & Suspense)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Employment Section */}
      <div className="space-y-12 border-t border-slate-200 pt-12">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              Professional Employment
            </h2>
            <span className="text-xs font-mono text-indigo-600 font-bold">
              Formal Work History
            </span>
          </div>

          <div className="card-light p-6 space-y-3 bg-white border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Full Stack Developer
                </h3>
                <span className="font-mono text-xs text-indigo-600 font-semibold">
                  Artco Group • Sarajevo, Bosnia and Herzegovina
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                April 2023 — April 2026
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Sole formal employment position (3 years). Built and maintained
              production web applications across the stack, focusing heavily on
              frontend user interfaces, responsive component integration, REST
              APIs, and application performance optimizations.
            </p>
          </div>
        </div>

        {/* Open Source Contributions Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Open Source Contributions
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Community Contributions
            </span>
          </div>

          <div className="card-light p-6 space-y-2 bg-slate-50 border-slate-200">
            <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs font-bold">
              <GitPullRequest className="w-4 h-4" />
              <span>TanStack Router Contributor</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authored a core bug-fix pull request in TanStack Router resolving
              dynamic path-parameter regressions, accompanied by unit test
              coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div className="card-light p-8 bg-slate-50 border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-base text-slate-900">
            EU Blue Card Eligible • German B1 (ÖSD) Certified
          </h4>
          <p className="text-xs text-slate-600">
            Based in Zenica / Sarajevo, Bosnia & Herzegovina. Available for
            remote frontend roles or European relocation.
          </p>
        </div>
        <Link
          href="/contact"
          onClick={playSound}
          className="btn-primary-light text-xs shrink-0"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
