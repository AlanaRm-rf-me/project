import React from 'react';
import { ServiceItem, ServiceTool } from '../types/service';
import { calculateServiceCost } from '../utils/serviceCalculator';
import GlassCard from './ui/GlassCard';
import GlassSelect from './ui/GlassSelect';

interface Props {
  item: ServiceItem;
  onChange: (item: ServiceItem) => void;
  onRemove: () => void;
}

export default function ServiceItemForm({ item, onChange, onRemove }: Props) {
  const updateField = <K extends keyof ServiceItem>(field: K, value: ServiceItem[K]) => {
    const updatedItem = { ...item, [field]: value };
    if (item.type === 'service') {
      updatedItem.price = calculateServiceCost(updatedItem);
    }
    onChange(updatedItem);
  };

  const addTool = () => {
    const tools = [...(item.tools || []), { name: '', monthlyCost: 0 }];
    updateField('tools', tools);
  };

  const updateTool = (index: number, field: keyof ServiceTool, value: string | number) => {
    const tools = [...(item.tools || [])];
    tools[index] = { ...tools[index], [field]: value };
    updateField('tools', tools);
  };

  return (
    <GlassCard className="p-6 rounded-lg space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={item.description}
          onChange={(e) => updateField('description', e.target.value)}
          className="flex-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-md p-2 
            text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4a9eff]/50"
          placeholder="Service description"
        />
        <GlassSelect
          value={item.type}
          onChange={(e) => updateField('type', e.target.value as 'service' | 'product')}
        >
          <option value="product">Product</option>
          <option value="service">Service</option>
        </GlassSelect>
      </div>

      {item.type === 'service' && (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-300">Hours</label>
              <input
                type="number"
                value={item.hours || 0}
                onChange={(e) => updateField('hours', Number(e.target.value))}
                className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-md p-2 
                  text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4a9eff]/50"
              />
            </div>
            <div className="flex-1">
              <GlassSelect
                label="Complexity"
                value={item.complexity || 'low'}
                onChange={(e) => updateField('complexity', e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </GlassSelect>
            </div>
          </div>
        </div>
      )}

      {item.type === 'product' && (
        <div>
          <label className="block text-sm mb-1 text-gray-300">Price</label>
          <input
            type="number"
            value={item.price}
            onChange={(e) => updateField('price', Number(e.target.value))}
            className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-md p-2 
              text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4a9eff]/50"
          />
        </div>
      )}

      <div className="flex justify-between items-center pt-2">
        <button
          onClick={onRemove}
          className="text-red-400 hover:text-red-300 text-sm"
        >
          Remove
        </button>
        <div className="text-[#4a9eff]">
          Total: ${item.price.toFixed(2)}
        </div>
      </div>
    </GlassCard>
  );
}