'use client';

import { useState } from 'react';
import Image from 'next/image';
import { techIcons } from '@/components/shared/TechIcons';
import { kyoSocialPlatformData } from './data';

interface KyoSocialPlatformProps {
  isExpanded: boolean;
  onToggle: () => void;
  activeTab: 'features' | 'screenshots' | 'architecture';
  onTabChange: (tab: 'features' | 'screenshots' | 'architecture') => void;
}

export default function KyoSocialPlatform({ isExpanded, onToggle, activeTab, onTabChange }: KyoSocialPlatformProps) {
  const { title, description, tech, image, features, screenshots, architecture } = kyoSocialPlatformData;
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
            ? 'max-h-[4000px] opacity-100' 
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
            onClick={() => onTabChange('screenshots')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'screenshots'
                ? 'text-[#00ff88] border-b-2 border-[#00ff88]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Screenshots
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
          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-4">Key Features</h4>
                <p className="text-xs text-gray-400 mb-6">A comprehensive social platform with rich content editing, music management, and image organization</p>
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

          {/* Screenshots Tab */}
          {activeTab === 'screenshots' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white mb-4">Website Screenshots</h4>
              
              {screenshots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.map((screenshot, idx) => (
                    <div key={idx} className="bg-[#1a1a1a] rounded-lg border border-gray-700 overflow-hidden">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={screenshot}
                          alt={`Screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#1a1a1a] rounded-lg border border-gray-700/50 border-dashed flex items-center justify-center py-20 opacity-40">
                  <p className="text-xs uppercase text-gray-600 tracking-wider">Screenshots Coming Soon</p>
                </div>
              )}
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
                    {/* System Diagram */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">System Architecture Layers</div>
                      <div className="space-y-3">
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Client Layer</div>
                          <div className="space-y-1">
                            {architecture.details.systemDiagram.clientLayer.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Edge/Middleware Layer</div>
                          <div className="space-y-1">
                            {architecture.details.systemDiagram.edgeLayer.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Application Layer</div>
                          <div className="space-y-1">
                            {architecture.details.systemDiagram.applicationLayer.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Data Layer</div>
                          <div className="space-y-1">
                            {architecture.details.systemDiagram.dataLayer.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">External Services</div>
                          <div className="space-y-1">
                            {architecture.details.systemDiagram.externalServices.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Flows */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Data Flow Explanations</div>
                      <div className="space-y-3">
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Authentication Flow</div>
                          <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlows.authentication}</div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">API Request Flow</div>
                          <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlows.apiRequest}</div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">File Upload Flow</div>
                          <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlows.fileUpload}</div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">Real-time Data Flow</div>
                          <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlows.realtime}</div>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg border border-gray-700 p-4">
                          <div className="text-xs font-bold text-white mb-2">External API Integration Flow</div>
                          <div className="text-xs text-gray-300 font-mono">{architecture.details.dataFlows.externalAPI}</div>
                        </div>
                      </div>
                    </div>

                    {/* Scaling Strategy */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Scaling Strategy</div>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Horizontal Scaling</div>
                          <div className="space-y-1">
                            {architecture.details.scalingStrategy.horizontal.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Database Scaling</div>
                          <div className="space-y-1">
                            {architecture.details.scalingStrategy.database.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Caching Strategy</div>
                          <div className="space-y-1">
                            {architecture.details.scalingStrategy.caching.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Media & Image Scaling</div>
                          <div className="space-y-1">
                            {architecture.details.scalingStrategy.media.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Failure Handling */}
                    <div>
                      <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wide mb-3">Failure Handling & Resilience</div>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Error Boundaries</div>
                          <div className="space-y-1">
                            {architecture.details.failureHandling.errorBoundaries.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Database Failure Handling</div>
                          <div className="space-y-1">
                            {architecture.details.failureHandling.database.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">External API Failure Handling</div>
                          <div className="space-y-1">
                            {architecture.details.failureHandling.externalAPIs.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">File Upload & Network</div>
                          <div className="space-y-1">
                            {architecture.details.failureHandling.fileUpload.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                            {architecture.details.failureHandling.network.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-2">Monitoring & Observability</div>
                          <div className="space-y-1">
                            {architecture.details.failureHandling.monitoring.map((item, idx) => (
                              <div key={idx} className="text-xs text-gray-300">• {item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

