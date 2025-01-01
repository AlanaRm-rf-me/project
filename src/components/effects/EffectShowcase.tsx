import React from 'react';
import GlassCard from '../ui/GlassCard';
import { CodeBlock } from './CodeBlock';
import type { Effect } from './types';

export function EffectShowcase({ title, description, preview, code }: Effect) {
  return (
    <GlassCard className="overflow-hidden">
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
        
        <div className="bg-black/30 rounded-lg p-6">
          {preview}
        </div>

        <CodeBlock code={code} />
      </div>
    </GlassCard>
  );
}