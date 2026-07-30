'use client';

import Link from 'next/link';
import { useAudio } from '@/app/context/AudioContext'; // Adjust path if needed

interface AudioLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function AudioLink({ children, href, onClick, target, rel, ...props }: AudioLinkProps) {
  const { playSound } = useAudio();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playSound();
    if (onClick) onClick(e);
  };

  // If it's an external link, render standard <a> tag
  const isExternal = typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://'));

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} target={target} rel={rel} className={props.className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} target={target} rel={rel} {...props}>
      {children}
    </Link>
  );
}