import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CyberButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  className?: string;
}

export default function CyberButton({ 
  children, 
  icon: Icon, 
  variant = 'primary',
  onClick,
  className = ''
}: CyberButtonProps) {
  const baseStyles = "relative group overflow-hidden rounded-md transition-all duration-300";
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-500",
    accent: "bg-gradient-to-r from-red-600 to-orange-500"
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <div className="relative z-10 px-6 py-3 flex items-center gap-2 font-medium">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
        <div className="absolute -inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute -inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </button>
  );
}