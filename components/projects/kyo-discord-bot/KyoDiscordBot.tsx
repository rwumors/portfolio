'use client';

import { useState } from 'react';
import Image from 'next/image';
import { techIcons } from '@/components/shared/TechIcons';
import { kyoDiscordBotData } from './data';

interface KyoDiscordBotProps {
  isExpanded: boolean;
  onToggle: () => void;
  activeTab: 'stats' | 'architecture' | 'features';
  onTabChange: (tab: 'stats' | 'architecture' | 'features') => void;
}

export default function KyoDiscordBot({ isExpanded, onToggle, activeTab, onTabChange }: KyoDiscordBotProps) {
  const { title, description, tech, image, stats, architecture, features } = kyoDiscordBotData;
  const [showArchitectureDetails, setShowArchitectureDetails] = useState(false);

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-6 flex gap-6 relative">
        {image && (
          <div className="flex-shrink-0 w-36 h-36 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>
        )}
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
      
      {/* Tabs Dropdown */}
      <div 
        className={`border-t border-gray-700 bg-[#151515] overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'max-h-[3000px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => onTabChange('features')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'features'
                ? 'text-[#00ff88] border-b-2 border-[#00ff88]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => onTabChange('stats')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'stats'
                ? 'text-[#00ff88] border-b-2 border-[#00ff88]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Stats
          </button>
          <button
            onClick={() => onTabChange('architecture')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'architecture'
                ? 'text-[#00ff88] border-b-2 border-[#00ff88]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Architecture
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 pb-8">
          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white mb-4">kyo status:</h4>
          
              {/* Shard Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.discordapp.com/emojis/829440788856438784.webp?size=160"
                    alt="Shard"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-bold text-white">Shard [{stats.shard}]:</span>
                </div>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1372831147184230440.webp?size=160"
                      alt="Latency"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">Latency:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.latency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1372303081970073721.webp?size=160"
                      alt="Uptime"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">Uptime:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.uptime}</span>
                  </div>
                </div>
              </div>
              
              {/* Resources Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.discordapp.com/emojis/1371578872050745414.webp?size=160"
                    alt="Resources"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-bold text-white">Resources:</span>
                </div>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1371574922601693274.webp?size=160"
                      alt="RAM"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">RAM:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.ram}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1371574921083490424.webp?size=160"
                      alt="CPU"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">CPU:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.cpu}</span>
                  </div>
                </div>
              </div>
              
              {/* Size Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.discordapp.com/emojis/1371580207445704754.webp?size=160"
                    alt="Size"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-bold text-white">Size:</span>
                </div>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1372221937039966259.webp?size=160"
                      alt="Servers"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">Servers:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.servers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://cdn.discordapp.com/emojis/1372323579173142559.webp?size=160"
                      alt="Users"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-semibold text-gray-300">Members:</span>
                    <span className="text-sm font-medium bg-gray-700 px-2 py-0.5 rounded text-white">{stats.members}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* TL;DR Section - Always Visible */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Architecture Overview</h4>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">{architecture.tldr.overview}</p>
              </div>

              {/* Core Architecture Flow */}
              <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                <div className="text-xs font-bold text-[#00ff88] mb-2">Core Architecture</div>
                <div className="text-xs text-gray-300 font-mono">{architecture.tldr.coreFlow}</div>
              </div>

              {/* Key Design Decisions */}
              <div>
                <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Key Design Decisions</div>
                <div className="space-y-2">
                  {architecture.tldr.keyDecisions.map((decision, idx) => (
                    <div key={idx} className="text-xs text-gray-300">• {decision}</div>
                  ))}
                </div>
              </div>

              {/* Scaling & Reliability */}
              <div>
                <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Scaling & Reliability</div>
                <div className="space-y-2">
                  {architecture.tldr.scalingReliability.map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-300">• {item}</div>
                  ))}
                </div>
              </div>

              {/* Why This Matters */}
              <div className="bg-[#1a1a1a] rounded-lg border border-[#00ff88]/30 p-4">
                <div className="text-xs font-bold text-[#00ff88] mb-2">Why This Matters</div>
                <div className="text-xs text-gray-300 leading-relaxed">{architecture.tldr.whyItMatters}</div>
              </div>

              {/* Expandable Details Section */}
              <div className="border-t border-gray-700 pt-6">
                <button
                  onClick={() => setShowArchitectureDetails(!showArchitectureDetails)}
                  className="text-xs uppercase text-gray-400 hover:text-[#00ff88] transition-colors px-3 py-2 border border-gray-700 hover:border-[#00ff88]/50 rounded mb-4"
                >
                  {showArchitectureDetails ? '▼ Hide Details' : '▶ Show Detailed Architecture'}
                </button>

                {showArchitectureDetails && (
                  <div className="space-y-6 mt-4">
                    {/* Design Decisions & Trade-offs */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Design Decisions & Trade-offs</div>
                      <div className="space-y-4">
                        {architecture.details.designDecisions.map((decision, idx) => (
                          <div key={idx} className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                            <div className="text-xs font-bold text-white mb-2">{decision.title}</div>
                            <div className="text-xs text-gray-300 mb-2">
                              <span className="text-[#00ff88]">Decision: </span>
                              {decision.decision}
                            </div>
                            <div className="text-xs text-gray-400">
                              <span className="text-gray-500">Trade-off: </span>
                              {decision.tradeoff}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Data Flow */}
                    <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                      <div className="text-xs font-bold text-[#00ff88] mb-2">Data Flow Overview</div>
                      <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlow}</div>
                    </div>

                    {/* Scaling Strategy */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Scaling Strategy</div>
                      <div className="space-y-2">
                        {architecture.details.scalingStrategy.map((strategy, idx) => (
                          <div key={idx} className="text-xs text-gray-300">• {strategy}</div>
                        ))}
                      </div>
                    </div>

                    {/* Failure Handling */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Failure Handling & Degradation</div>
                      <div className="space-y-2">
                        {architecture.details.failureHandling.map((item, idx) => (
                          <div key={idx} className="text-xs text-gray-300">• {item}</div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Optimizations */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Performance Optimizations</div>
                      <div className="space-y-2">
                        {architecture.details.performanceOptimizations.map((opt, idx) => (
                          <div key={idx} className="text-xs text-gray-300">• {opt}</div>
                        ))}
                      </div>
                    </div>

                    {/* Monitoring */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Monitoring & Alerting</div>
                      <div className="space-y-2">
                        {architecture.details.monitoring.map((item, idx) => (
                          <div key={idx} className="text-xs text-gray-300">• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-4">Key Features</h4>
                <p className="text-xs text-gray-400 mb-6">100+ commands across 15+ major modules</p>
              </div>
              
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
          )}
        </div>
      </div>
    </div>
  );
}

