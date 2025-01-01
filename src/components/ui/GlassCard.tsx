import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 shadow-lg ${className}`}>
      {children}
    </div>
  );
}