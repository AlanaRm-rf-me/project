import React from 'react';
import { Palette, Layers, Box, Sparkles } from 'lucide-react';
import { useCyberpunkTheme } from '../theme/hooks/useCyberpunkTheme';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import CyberButton from '../components/ui/CyberButton';

const themeFeatures = [
  { 
    label: 'Color System', 
    icon: Palette,
    description: 'Cyberpunk-inspired gradients and glass effects',
    variant: 'primary'
  },
  { 
    label: 'Components', 
    icon: Box,
    description: 'Pre-built UI components with cyber aesthetics',
    variant: 'secondary'
  },
  { 
    label: 'Effects', 
    icon: Sparkles,
    description: 'Chromatic aberration and constellation effects',
    variant: 'accent'
  },
  { 
    label: 'Layout System', 
    icon: Layers,
    description: 'Flexible and responsive layouts',
    variant: 'primary'
  }
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <PageHeader 
        title="Cyberpunk Theme"
        description="A modern React theme system with cyberpunk aesthetics"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Theme Features</h2>
          <div className="grid grid-cols-1 gap-4">
            {themeFeatures.map(({ label, icon, description, variant }) => (
              <div key={label} className="space-y-2">
                <CyberButton
                  icon={icon}
                  variant={variant}
                  className="w-full"
                >
                  {label}
                </CyberButton>
                <p className="text-gray-400 text-sm px-2">{description}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Getting Started</h2>
          <div className="space-y-4 text-gray-300">
            <p>Install the theme in your React project:</p>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code>npm install @cyberpunk/theme</code>
            </pre>
            <p>Import and use the theme hooks:</p>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code>{`import { useCyberpunkTheme } from '@cyberpunk/theme';\n\nconst { gradients, glassEffect } = useCyberpunkTheme();`}</code>
            </pre>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}