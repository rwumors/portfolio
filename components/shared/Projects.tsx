'use client';

import { useState } from 'react';
import KyoDiscordBot from '@/components/projects/kyo-discord-bot/KyoDiscordBot';
import KyoSocialPlatform from '@/components/projects/kyo-social-platform/KyoSocialPlatform';
import PersonalPortfolio from '@/components/projects/personal-portfolio/PersonalPortfolio';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'stats' | 'architecture' | 'features'>('features');
  const [activeTabSocial, setActiveTabSocial] = useState<'features' | 'screenshots' | 'architecture'>('features');
  const [activeTabPortfolio, setActiveTabPortfolio] = useState<'features' | 'architecture'>('features');

  return (
    <div className="flex flex-col gap-4">
      <KyoDiscordBot
        isExpanded={expandedProject === 'Kyo Discord Bot'}
        onToggle={() => {
          if (expandedProject === 'Kyo Discord Bot') {
            setExpandedProject(null);
          } else {
            setExpandedProject('Kyo Discord Bot');
            setActiveTab('features');
          }
        }}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <KyoSocialPlatform
        isExpanded={expandedProject === 'Kyo Social Platform'}
        onToggle={() => {
          if (expandedProject === 'Kyo Social Platform') {
            setExpandedProject(null);
          } else {
            setExpandedProject('Kyo Social Platform');
            setActiveTabSocial('features');
          }
        }}
        activeTab={activeTabSocial}
        onTabChange={setActiveTabSocial}
      />
      
      <PersonalPortfolio
        isExpanded={expandedProject === 'Personal Portfolio'}
        onToggle={() => {
          if (expandedProject === 'Personal Portfolio') {
            setExpandedProject(null);
          } else {
            setExpandedProject('Personal Portfolio');
            setActiveTabPortfolio('features');
          }
        }}
        activeTab={activeTabPortfolio}
        onTabChange={setActiveTabPortfolio}
      />
    </div>
  );
}

