'use client';

import { useState } from 'react';
import DellOwnershipTag from '@/components/patterns-utility-scripts/dell-ownership-tag/DellOwnershipTag';
import LenovoWarrantyLookup from '@/components/patterns-utility-scripts/lenovo-warranty-lookup/LenovoWarrantyLookup';
import ExcelFileProcessor from '@/components/patterns-utility-scripts/excel-file-processor/ExcelFileProcessor';
import GhostDeviceCleanup from '@/components/patterns-utility-scripts/ghost-device-cleanup/GhostDeviceCleanup';
import AssetPingDnsResolver from '@/components/patterns-utility-scripts/asset-ping-dns-resolver/AssetPingDnsResolver';

export default function PatternsUtilityScripts() {
  const [expandedScript, setExpandedScript] = useState<string | null>(null);

  return (
    <section className="mb-32">
      <h3 className="text-3xl font-bold mb-8 uppercase">Patterns & Utility Scripts</h3>
      <p className="text-xl mb-12 uppercase opacity-80">Small scripts and patterns I use</p>
      
      <div className="flex flex-col gap-4">
        <DellOwnershipTag
          isExpanded={expandedScript === 'Dell Ownership Tag Utility'}
          onToggle={() => {
            if (expandedScript === 'Dell Ownership Tag Utility') {
              setExpandedScript(null);
            } else {
              setExpandedScript('Dell Ownership Tag Utility');
            }
          }}
        />
        <LenovoWarrantyLookup
          isExpanded={expandedScript === 'Lenovo Warranty Lookup Utility'}
          onToggle={() => {
            if (expandedScript === 'Lenovo Warranty Lookup Utility') {
              setExpandedScript(null);
            } else {
              setExpandedScript('Lenovo Warranty Lookup Utility');
            }
          }}
        />
        <ExcelFileProcessor
          isExpanded={expandedScript === 'Excel File Processor'}
          onToggle={() => {
            if (expandedScript === 'Excel File Processor') {
              setExpandedScript(null);
            } else {
              setExpandedScript('Excel File Processor');
            }
          }}
        />
        <GhostDeviceCleanup
          isExpanded={expandedScript === 'Ghost Device Cleanup Utility'}
          onToggle={() => {
            if (expandedScript === 'Ghost Device Cleanup Utility') {
              setExpandedScript(null);
            } else {
              setExpandedScript('Ghost Device Cleanup Utility');
            }
          }}
        />
        <AssetPingDnsResolver
          isExpanded={expandedScript === 'Asset Ping / DNS Resolver'}
          onToggle={() => {
            if (expandedScript === 'Asset Ping / DNS Resolver') {
              setExpandedScript(null);
            } else {
              setExpandedScript('Asset Ping / DNS Resolver');
            }
          }}
        />
        {/* Add more script components here as you create them */}
      </div>
    </section>
  );
}

