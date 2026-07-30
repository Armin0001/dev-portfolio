"use client";

import { Mail, Globe } from "lucide-react";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import GithubIcon from "../components/icons/GithubIcon";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { useAudio } from "@/app/context/AudioContext"; // Adjust path if using relative imports like "../app/context/AudioContext"
import RelocationCard from "../components/RelocationCard";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const { playSound } = useAudio();

  const handleCopy = () => {
    playSound();
    navigator.clipboard.writeText("armin.isakovic23@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let's Build Something Great
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Available for Frontend Engineer, React, Next.js, and TypeScript opportunities. Open to full-time, remote, hybrid, and contract roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-slate-200 pt-12">
        <div className="lg:col-span-5 space-y-6">
            <div className="card-light p-6 space-y-3">
  <span className="text-xs font-mono text-slate-500 uppercase block">
    Direct Email
  </span>

  <div className="flex items-center justify-between gap-4">
    <a
      href="mailto:armin.isakovic23@gmail.com"
      className="font-mono text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all"
    >
      armin.isakovic23@gmail.com
    </a>

    <button
      onClick={handleCopy}
      className="btn-secondary-light py-1 px-3 text-xs font-mono shrink-0"
      aria-label="Copy email address"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  </div>
</div>
          {/* <div className="card-light p-6 space-y-3">
            <span className="text-xs font-mono text-slate-500 uppercase block">
              Direct Email
            </span>
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-slate-900">
                armin.isakovic23@gmail.com
              </span>
              <button
                onClick={handleCopy}
                className="btn-secondary-light py-1 px-3 text-xs font-mono"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div> */}

          {/* <div className="card-light p-6 space-y-3">
            <span className="text-xs font-mono text-slate-500 uppercase block">
              Relocation Status
            </span>
            <p className="text-xs text-slate-700 leading-relaxed font-mono">
              EU Blue Card Eligible • German B1 (ÖSD) Certified • Zenica /
              Sarajevo, Bosnia & Herzegovina
            </p>
          </div> */}
          <RelocationCard />


            {/* <div className="card-light p-6 space-y-4">
  <span className="text-xs font-mono text-slate-500 uppercase block">
    Location & Availability
  </span>

  <div className="space-y-2 text-xs font-mono">
    <div>
      <span className="text-slate-500">Location</span>
      <p className="text-slate-900 font-bold">
        Zenica / Sarajevo, Bosnia & Herzegovina
      </p>
    </div>

    <div>
      <span className="text-slate-500">Work Authorization</span>
      <p className="text-slate-900 font-bold">
        EU Blue Card Eligible
      </p>
    </div>

    <div>
      <span className="text-slate-500">Languages</span>
      <p className="text-slate-900 font-bold">
        English • German (ÖSD B1)
      </p>
    </div>
  </div>
</div> */}

          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-500 uppercase block">
              Links
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Armin0001"
                target="_blank"
                rel="noreferrer"
                onClick={playSound}
                className="btn-secondary-light text-xs py-2 px-3 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/armin-isakovic-b07b24215/"
                target="_blank"
                rel="noreferrer"
                onClick={playSound}
                className="btn-secondary-light text-xs py-2 px-3 flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>

              <a
                href="https://arminisakovic.vercel.app/main"
                target="_blank"
                rel="noreferrer"
                onClick={playSound}
                className="btn-secondary-light text-xs py-2 px-3 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" /> Project Archive
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}