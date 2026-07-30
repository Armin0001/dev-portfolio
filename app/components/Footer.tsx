'use client';

import Link from 'next/link';
import { useAudio } from '@/app/context/AudioContext'; // Adjust path if using relative import like "../context/AudioContext"

export default function Footer() {
  const { playSound } = useAudio();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    playSound();

    // Smooth scroll to the top of the window
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative z-10 font-mono text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-slate-900 font-bold">Armin Isaković</span>
          <span>© 2026. Frontend Engineer.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" onClick={playSound} className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={playSound} className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link href="/projects" onClick={playSound} className="hover:text-indigo-600 transition-colors">
            Projects
          </Link>
          <Link href="/contact" onClick={playSound} className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
          <a
            href="#mainNavbar"
            onClick={handleBackToTop}
            className="text-slate-900 font-bold hover:text-indigo-600 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}