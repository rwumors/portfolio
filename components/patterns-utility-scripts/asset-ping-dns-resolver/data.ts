export const assetPingDnsResolverData = {
  title: 'Asset Ping / DNS Resolver',
  category: 'Network diagnostics utility',
  description: 'PowerShell utility for validating asset reachability and DNS resolution. Processes asset lists with multi-strategy DNS resolution fallbacks and graceful failure handling for network diagnostics workflows.',
  tech: ['PowerShell', 'Windows'],
  githubUrl: '', // Update with your actual GitHub URL
  codeExcerpts: [
    {
      title: 'Input Validation & File-Based Configuration',
      language: 'powershell',
      code: `$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$assetFile = Join-Path $scriptDir "assets.txt"

if (!(Test-Path $assetFile)) {
    Write-Host "Asset list not found: $assetFile" -ForegroundColor Red
    exit
}`,
    },
    {
      title: 'Asset Normalization & Filtering',
      language: 'powershell',
      code: `$assets = Get-Content $assetFile |
    ForEach-Object { $_.Trim() } |
    Where-Object { $_ -match '^(WIN|WIND)' -and $_ -ne "" }

if ($assets.Count -eq 0) {
    Write-Host "No valid asset tags found." -ForegroundColor Yellow
    exit
}`,
    },
    {
      title: 'Multi-Strategy DNS Resolution (Core Logic)',
      language: 'powershell',
      code: `function Get-IPsFromName {
    param([string]$Name)
    
    $ips = @()
    
    try {
        $ips += Resolve-DnsName -Name $Name -Type A -ErrorAction Stop |
                Select-Object -ExpandProperty IPAddress
    } catch {}
    
    try {
        $ips += [System.Net.Dns]::GetHostAddresses($Name) |
                Where-Object { $_.AddressFamily -eq 'InterNetwork' } |
                ForEach-Object { $_.IPAddressToString }
    } catch {}
    
    return $ips | Select-Object -Unique
}`,
    },
    {
      title: 'Operator Feedback',
      language: 'powershell',
      code: `Write-Host "Pinging $($assets.Count) assets..."`,
    },
  ],
  features: {
    'Input Processing': [
      'Configuration-driven asset list processing',
      'Script-relative file path resolution',
      'Input validation and early exit on errors',
    ],
    'DNS Resolution': [
      'Multi-strategy DNS resolution with fallbacks',
      'Resilient failure handling across methods',
      'Automatic deduplication of resolved IPs',
    ],
    'Network Diagnostics': [
      'Asset reachability validation',
      'Pattern-based asset filtering',
      'Operator-friendly progress feedback',
    ],
  },
  patterns: [
    'Input validation & normalization',
    'Resilient DNS resolution',
    'Network diagnostics automation',
  ],
};

