import React, { SelectHTMLAttributes } from 'react';

interface GlassSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export default function GlassSelect({ label, className = '', ...props }: GlassSelectProps) {
  return (
    <div className="relative">
      {label && <label className="block text-sm text-gray-300 mb-1">{label}</label>}
      <select
        {...props}
        className={`w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-md p-2 
        text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4a9eff]/50 
        appearance-none hover:bg-white/10 transition-colors ${className}`}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}