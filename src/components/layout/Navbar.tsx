import React from 'react';
import { Menu, Github } from 'lucide-react';
import CyberButton from '../ui/CyberButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 glass z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-bold chromatic-text">Cyberpunk UI</h1>
        </div>
        <div className="flex items-center gap-4">
          <CyberButton
            icon={Github}
            variant="secondary"
            onClick={() => window.open('https://github.com/yourusername/cyberpunk-theme', '_blank')}
          >
            View on GitHub
          </CyberButton>
        </div>
      </div>
    </nav>
  );
}