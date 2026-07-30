'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export default function Navbar() {
  const pathname = usePathname();
  const { audioActive, toggleAudio, playSound } = useAudio();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200"
      id="mainNavbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          onClick={() => { playSound(); setIsOpen(false); }} 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-indigo-600 transition-colors">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
              Armin Isaković
            </span>
            <span className="font-mono text-xs text-slate-500">Frontend Engineer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={playSound}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isActive
                    ? 'text-slate-900 bg-white shadow-sm'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>EU Blue Card Eligible • German B1</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              toggleAudio();
            }}
            className="p-2.5 sm:p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 transition-all"
            title={audioActive ? 'Disable Sound Effects' : 'Enable Sound Effects'}
          >
            {audioActive ? (
              <Volume2 className="w-4 h-4 text-indigo-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Contact Button (Desktop) */}
          <Link
            href="/contact"
            onClick={playSound}
            className="hidden sm:inline-flex btn-primary-light text-xs uppercase tracking-wider py-2 px-4"
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playSound();
              setIsOpen(!isOpen);
            }}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-indigo-600 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={playSound}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/70 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </Link>
              );
            })}
          </nav>

          {/* Credentials Info Badge for Mobile */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>EU Blue Card Eligible • German B1</span>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={playSound}
            className="btn-primary-light w-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}