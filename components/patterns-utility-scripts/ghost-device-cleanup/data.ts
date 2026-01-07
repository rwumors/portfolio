export const ghostDeviceCleanupData = {
  title: 'Ghost Device Cleanup Utility',
  category: 'System remediation utility',
  description: 'Automates removal of non-present display and USB devices to resolve driver conflicts during hardware troubleshooting in Windows environments.',
  tech: ['Batch', 'Windows'],
  githubUrl: '', // Update with your actual GitHub URL
  codeExcerpts: [
    {
      title: 'Admin Privilege Check (Critical Context)',
      language: 'batch',
      code: `:: Ensure script is running as Administrator
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo This script must be run as Administrator.
    pause
    exit /b
)`,
    },
    {
      title: 'Enable Hidden / Non-Present Devices',
      language: 'batch',
      code: `:: Enable display of non-present devices
set devmgr_show_nonpresent_devices=1
start devmgmt.msc`,
    },
    {
      title: 'Ghost Device Enumeration & Removal (Core Logic)',
      language: 'batch',
      code: `:: Remove ghost display devices
for /f "tokens=2 delims==" %%a in (
    'wmic path Win32_PnPEntity where "PNPDeviceID like '%%Display%%' and Status='Error'" get PNPDeviceID /value'
) do (
    echo Removing: %%a
    wmic path Win32_PnPEntity where PNPDeviceID='%%a' call Delete
)`,
    },
    {
      title: 'Completion Feedback',
      language: 'batch',
      code: `echo Ghost device cleanup completed successfully.
pause`,
    },
  ],
  features: {
    'Privilege Management': [
      'Administrator privilege validation before execution',
      'Prevents unsafe partial execution',
      'Clear error messaging for privilege issues',
    ],
    'Device Management': [
      'Enables display of non-present devices in Device Manager',
      'Automated enumeration of ghost devices via WMI',
      'Conditional filtering for display and USB devices',
    ],
    'System Remediation': [
      'Automated removal of non-present devices',
      'Hardware enumeration and cleanup',
      'User feedback and completion confirmation',
    ],
  },
  patterns: [
    'Privilege-aware execution',
    'System remediation automation',
    'Hardware enumeration & cleanup',
    'Defensive scripting',
    'Manual-to-automated workflow conversion',
  ],
};

