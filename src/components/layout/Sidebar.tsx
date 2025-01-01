import React from 'react';
import { 
  Palette,
  Box,
  Sparkles,
  Layers,
  Code,
  BookOpen
} from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const navItems = [
  { icon: Palette, label: 'Colors', href: '/colors' },
  { icon: Box, label: 'Components', href: '/components' },
  { icon: Sparkles, label: 'Effects', href: '/effects' },
  { icon: Layers, label: 'Layout', href: '/layout' },
  { icon: Code, label: 'Installation', href: '/installation' },
  { icon: BookOpen, label: 'Documentation', href: '/docs' },
];

export default function Sidebar() {
  return (
    <GlassCard className="w-64 min-h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2 py-4">
          <Sparkles className="w-8 h-8 text-[#4a9eff]" />
          <span className="text-xl font-bold text-white">Theme System</span>
        </div>
        
        <nav className="mt-8 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-gray-300 
                hover:bg-white/10 rounded-md transition-colors
                ${item.label === 'Colors' 
                  ? 'bg-[#4a9eff]/20 text-[#4a9eff] border border-[#4a9eff]/20' 
                  : ''}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </GlassCard>
  );
}