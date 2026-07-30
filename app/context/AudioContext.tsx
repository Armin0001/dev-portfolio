'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AudioContextType {
  audioActive: boolean;
  toggleAudio: () => void;
  playSound: () => void;
}

const AudioContext = createContext<AudioContextType>({
  audioActive: true,
  toggleAudio: () => {},
  playSound: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [audioActive, setAudioActive] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Correct public URL for public/sounds/click.mp3
    const sound = new Audio('/sounds/click.mp3');
    sound.volume = 0.25;
    setAudio(sound);
  }, []);

  const playSound = () => {
    if (!audioActive || !audio) return;

    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn('Audio play prevented:', err);
    });
  };

  const toggleAudio = () => {
    setAudioActive((prev) => !prev);
  };

  return (
    <AudioContext.Provider value={{ audioActive, toggleAudio, playSound }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => useContext(AudioContext);