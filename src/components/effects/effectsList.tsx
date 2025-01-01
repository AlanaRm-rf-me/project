import React from 'react';
import type { Effect } from './types';

export const effectsList: Effect[] = [
  {
    id: 'chromatic',
    title: 'Chromatic Text',
    description: 'Text effect with RGB color separation and subtle animation',
    preview: <h3 className="chromatic-text text-2xl">Cyberpunk Text</h3>,
    code: `.chromatic-text {
  color: white;
  text-shadow: 
    -2px -2px 0 rgba(255, 0, 0, 0.7),
    2px 2px 0 rgba(0, 255, 255, 0.7);
  animation: chromaticMove 4s ease infinite;
}`
  },
  {
    id: 'constellation',
    title: 'Constellation Background',
    description: 'Animated starfield background effect',
    preview: <div className="h-40 w-full constellation-bg rounded-lg" />,
    code: `.constellation-bg {
  background-color: black;
  background-image: radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px);
  background-size: 550px 550px;
  animation: starsMove 120s linear infinite;
}`
  },
  {
    id: 'glass',
    title: 'Glass Effect',
    description: 'Modern glassmorphism effect for cards and panels',
    preview: (
      <div className="glass p-4 rounded-lg">
        <p className="text-white">Frosted glass container</p>
      </div>
    ),
    code: `.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`
  },
  {
    id: 'neon',
    title: 'Neon Glow',
    description: 'Vibrant neon text effect with pulsing animation',
    preview: (
      <h3 className="text-2xl font-bold text-cyan-500 animate-pulse 
        drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
        Neon Glow
      </h3>
    ),
    code: `<div className="text-cyan-500 animate-pulse
  drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
  Neon Text
</div>`
  }
];