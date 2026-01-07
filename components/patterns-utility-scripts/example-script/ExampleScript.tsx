'use client';

import { useState } from 'react';
import { techIcons } from '@/components/shared/TechIcons';
import { exampleScriptData } from './data';

interface ExampleScriptProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ExampleScript({ isExpanded, onToggle }: ExampleScriptProps) {
  const { title, description, tech, code, features } = exampleScriptData;

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-6 flex gap-6 relative">
        <div className="flex-1 flex flex-col min-w-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold accent-green leading-tight">{title}</h3>
              <button
                onClick={onToggle}
                className="text-xs uppercase text-gray-400 hover:text-[#00ff88] transition-colors px-3 py-1 border border-gray-700 hover:border-[#00ff88]/50 rounded"
              >
                {isExpanded ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-3 items-center">
              {tech.map((techName) => (
                <div key={techName} className="flex items-center gap-2 text-gray-300">
                  {techIcons[techName] && (
                    <div className="flex-shrink-0 w-4 h-4">
                      {techIcons[techName]}
                    </div>
                  )}
                  <span className="text-sm">{techName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Expanded Content */}
      <div 
        className={`border-t border-gray-700 bg-[#151515] overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'max-h-[2000px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pb-8">
          <div className="space-y-6">
            {/* Features */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Features</h4>
              <div className="space-y-5">
                {Object.entries(features).map(([category, items]) => (
                  <div key={category}>
                    <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">{category}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {items.map((item, idx) => (
                        <div key={idx} className="text-xs text-gray-300">• {item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            {code && (
              <div>
                <h4 className="text-sm font-bold text-white mb-4">Code</h4>
                <div className="bg-[#0a0a0a] rounded-lg border border-gray-700 p-4 overflow-x-auto">
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
                    <code>{code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

