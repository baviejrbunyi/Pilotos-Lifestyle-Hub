import React, { useState } from 'react';
import { Database, Check, Layers, Cpu } from 'lucide-react';
import { CRM_PLANS } from '../data/pilotosData';

export const CrmView: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const plan = CRM_PLANS[activeIdx];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Data Architecture & CRM Plan</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">CRM INTEGRATION STRATEGY</h1>
        <p className="text-sm text-[#9CA3AF]">
          Clear integration instructions for popular CRM tools from cheapest to most used across our 3 lifestyle hub branches.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CRM_PLANS.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setActiveIdx(idx)}
            className={`p-6 text-left border rounded-lg transition-all ${
              activeIdx === idx
                ? 'border-[#D8CBB9] bg-[#141414]'
                : 'border-[#262626] bg-[#0B0B0B] hover:border-[#9CA3AF]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-[#D8CBB9]">Tier {idx + 1}</span>
              {activeIdx === idx && <Check className="w-4 h-4 text-[#D8CBB9]" />}
            </div>
            <h3 className="font-bold text-xl mb-1">{p.name}</h3>
            <p className="text-xs text-[#9CA3AF]">{p.tier}</p>
            <div className="mt-4 pt-4 border-t border-[#262626] text-xs font-mono font-bold text-[#D8CBB9]">
              {p.price}
            </div>
          </button>
        ))}
      </div>

      {/* Detailed Blueprint */}
      <div className="angst-card p-6 sm:p-10 bg-[#141414] border border-[#262626] space-y-8 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262626] pb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Selected Strategy</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mt-1">{plan.name} Architecture</h2>
            <p className="text-xs text-[#9CA3AF] mt-1 font-mono">Best For: {plan.bestFor}</p>
          </div>
          <div className="px-4 py-2 bg-[#0B0B0B] border border-[#262626] font-mono text-xs text-[#D8CBB9] rounded-md">
            {plan.price}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-sm uppercase flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#D8CBB9]" /> Key Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plan.features.map((feat, i) => (
              <div key={i} className="p-4 bg-[#0B0B0B] border border-[#262626] text-xs font-mono flex items-start space-x-3 rounded-md">
                <Check className="w-4 h-4 text-[#D8CBB9] shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF]">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
