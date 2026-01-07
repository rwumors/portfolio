export const dellOwnershipTagData = {
  title: 'Dell Ownership Tag Utility',
  category: 'Enterprise automation utility',
  description: 'Automates Dell BIOS ownership tag configuration during device provisioning. Eliminates manual BIOS entry and ensures consistent asset tagging across enterprise deployments in both WinPE and full Windows environments.',
  tech: ['PowerShell', 'Windows'],
  githubUrl: 'https://github.com/rwumors/Windows-ADK-Dell-Ownership',
  patterns: [
    'Environment detection',
    'BIOS automation',
    'Error handling & validation',
  ],
  codeExcerpts: [
    {
      title: 'WinPE Detection & Module Management',
      language: 'powershell',
      code: `function Test-IsWinPE {
    return (Test-Path 'X:\\Windows') -and (Get-PSDrive -Name X -ErrorAction SilentlyContinue)
}

function Ensure-DellBIOSProvider {
    param([bool]$IsWinPE)
    if ($IsWinPE) {
        Write-Log "WinPE detected." "INFO"
        # Auto-copy DellBIOSProvider from USB root to WinPE
        $dest = 'X:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules'
        foreach ($dl in 'C','D','E','F'...) {
            $candidate = "$dl\`:\\DellBIOSProvider"
            if (Test-Path $candidate) { 
                Copy-Item -Path $candidate -Destination $dest -Recurse -Force
                break
            }
        }
        Import-Module DellBIOSProvider -ErrorAction Stop
    }
}`,
    },
    {
      title: 'BIOS Automation & Validation',
      language: 'powershell',
      code: `function Set-OwnershipTag {
    param(
        [Parameter(Mandatory)][string]$Tag,
        [bool]$IsWinPE
    )
    if ($IsWinPE) {
        Set-Item -Path 'DellSmbios:\\SystemInformation\\OwnershipTag' -Value $Tag
    } else {
        Set-ItemProperty -Path 'DellSmbios:\\SystemInformation\\OwnershipTag' 
                         -Name 'CurrentValue' -Value $Tag
    }
}

# Automatic validation after setting
$validated = Get-CurrentOwnershipTag
if ($validated -eq $ownershipTag) {
    Write-Log "Ownership Tag successfully set to '$validated'." "SUCCESS"
} else {
    throw "Validation mismatch. Expected '$ownershipTag', got '$validated'."
}`,
    },
    {
      title: 'Model Detection & Tag Building',
      language: 'powershell',
      code: `function Get-DellModelNumeric {
    $fields = @(
        (Get-CimInstance Win32_ComputerSystem).Model,
        (Get-CimInstance Win32_BaseBoard).Product,
        (Get-CimInstance Win32_BIOS).SMBIOSBIOSVersion
    ) | Where-Object { $_ }
    
    foreach ($f in $fields) {
        if ($f -match '\\b(\\d{3,4})\\b') { return $Matches[1] }
    }
    throw "Unable to determine Dell model."
}

# Build ownership tag from country code + model suffix
$model = Get-DellModelNumeric
$suffix = $models[$modelKey]
$ownershipTag = "$countryCode$suffix"`,
    },
  ],
  features: {
    'WinPE Detection': [
      'Automatic environment detection (WinPE vs full Windows)',
      'USB-based module deployment for WinPE environments',
      'Zero-configuration module management',
    ],
    'BIOS Automation': [
      'Direct BIOS ownership tag configuration via DellBIOSProvider',
      'Automatic model number detection from multiple WMI sources',
      'JSON-driven configuration for country codes and model suffixes',
    ],
    'Validation & Reliability': [
      'Post-set validation to ensure tag was written correctly',
      'Idempotent operation (skips if tag already correct)',
      'Comprehensive error handling with proper exit codes',
    ],
  },
};

