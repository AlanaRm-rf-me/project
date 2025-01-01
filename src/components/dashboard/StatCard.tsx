import React from 'react';
import { LucideIcon } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <GlassCard className="p-6 rounded-lg">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {trend && (
            <div className={`flex items-center mt-2 ${
              trend.isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              <span className="text-sm">
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
            </div>
          )}
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </GlassCard>
  );
}