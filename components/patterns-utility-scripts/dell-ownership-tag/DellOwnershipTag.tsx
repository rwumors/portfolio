'use client';

import { useState } from 'react';
import { techIcons } from '@/components/shared/TechIcons';
import CodeBlock from '@/components/shared/CodeBlock';
import { dellOwnershipTagData } from './data';

interface DellOwnershipTagProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function DellOwnershipTag({ isExpanded, onToggle }: DellOwnershipTagProps) {
  const { title, category, description, tech, codeExcerpts, features, patterns, githubUrl } = dellOwnershipTagData;

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-6 flex gap-6 relative">
        <div className="flex-1 flex items-center justify-between gap-4 min-w-0">
          <div className="flex items-center gap-3 flex-wrap min-w-0">
            <h3 className="text-xl font-bold accent-green leading-tight whitespace-nowrap">{title}</h3>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-sm text-gray-400">{category}</span>
            <span className="text-xs text-gray-400">·</span>
            <div className="flex items-center gap-2 flex-wrap">
              {tech.map((techName, idx) => (
                <div key={techName} className="flex items-center gap-1.5 text-gray-300">
                  {techIcons[techName] && (
                    <div className="flex-shrink-0 w-3.5 h-3.5">
                      {techIcons[techName]}
                    </div>
                  )}
                  <span className="text-sm">{techName}</span>
                  {idx < tech.length - 1 && <span className="text-xs text-gray-500">·</span>}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onToggle}
            className="text-xs uppercase text-gray-400 hover:text-[#00ff88] transition-colors px-3 py-1 border border-gray-700 hover:border-[#00ff88]/50 rounded flex-shrink-0"
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
          </button>
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
            {/* Description */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Description</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>

            {/* Patterns Demonstrated */}
            {patterns && patterns.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Patterns Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {patterns.map((pattern, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-[#1a1a1a] border border-gray-700 rounded text-gray-300"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Key Features</h4>
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

            {/* Code Excerpts */}
            {codeExcerpts && codeExcerpts.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-white mb-4">Selected Code Excerpts</h4>
                <div className="space-y-4">
                  {codeExcerpts.map((excerpt, idx) => (
                    <div key={idx} className="bg-[#0a0a0a] rounded-lg border border-gray-700 overflow-hidden">
                      <div className="text-xs font-bold text-[#00ff88] mb-0 px-4 pt-4">{excerpt.title}</div>
                      <CodeBlock code={excerpt.code} language={excerpt.language} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GitHub Link */}
            {githubUrl && (
              <div className="pt-4 border-t border-gray-700">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#00ff88] hover:text-[#00ff88]/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View full script on GitHub</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

