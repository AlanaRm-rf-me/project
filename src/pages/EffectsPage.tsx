import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { EffectShowcase } from '../components/effects/EffectShowcase';
import { effectsList } from '../components/effects/effectsList';

export default function EffectsPage() {
  return (
    <div className="p-8">
      <PageHeader 
        title="Visual Effects"
        description="Cyberpunk-inspired effects to enhance your UI"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {effectsList.map((effect) => (
          <EffectShowcase key={effect.id} {...effect} />
        ))}
      </div>
    </div>
  );
}