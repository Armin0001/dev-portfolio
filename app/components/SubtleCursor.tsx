'use client';

import { useEffect, useState } from 'react';

export default function SubtleCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="subtle-cursor pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border border-indigo-500/30 transition-transform duration-75 z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}