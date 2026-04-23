#!/usr/bin/env pwsh
# Cake Design System Skill — Copilot Installer
# Usage: irm https://raw.githubusercontent.com/zengwenju/ui-ux-lenovo-skill/main/scripts/install-copilot.ps1 | iex
# Or:    .\scripts\install-copilot.ps1 [-TargetDir <path>]

param(
    [string]$TargetDir = (Get-Location).Path
)

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/zengwenju/ui-ux-lenovo-skill"
$Branch  = "main"

Write-Host ""
Write-Host "  Cake Design System Skill — Copilot Installer" -ForegroundColor Cyan
Write-Host "  =============================================" -ForegroundColor Cyan
Write-Host ""

# --- 1. Determine source ---
$scriptDir = $PSScriptRoot
$isLocal   = $false

if ($scriptDir -and (Test-Path (Join-Path $scriptDir "..\SKILL.md"))) {
    $sourceDir = Resolve-Path (Join-Path $scriptDir "..")
    $isLocal = $true
    Write-Host "  [Source] Local: $sourceDir" -ForegroundColor Green
} else {
    Write-Host "  [Source] GitHub: $RepoUrl" -ForegroundColor Yellow
    $tempDir = Join-Path $env:TEMP "cake-skill-$(Get-Random)"
    git clone --depth 1 --branch $Branch $RepoUrl $tempDir 2>&1 | Out-Null
    if (-not (Test-Path (Join-Path $tempDir "SKILL.md"))) {
        Write-Host "  [ERROR] Failed to clone repository." -ForegroundColor Red
        exit 1
    }
    $sourceDir = $tempDir
}

# --- 2. Install paths ---
$skillDir   = Join-Path $TargetDir ".github\skills\cake-design-system"
$promptsDir = Join-Path $TargetDir ".github\prompts"
$instrDir   = Join-Path $TargetDir ".github"

Write-Host ""
Write-Host "  [Target] $TargetDir" -ForegroundColor Green
Write-Host ""

# --- 3. Install SKILL.md → .github/skills/cake-design-system/ ---
Write-Host "  [1/4] Installing skill definition..." -ForegroundColor White
New-Item -ItemType Directory -Path $skillDir -Force | Out-Null
Copy-Item (Join-Path $sourceDir "SKILL.md") (Join-Path $skillDir "SKILL.md") -Force

# Copy data/ for search engine
$dataSource = Join-Path $sourceDir "data"
if (Test-Path $dataSource) {
    $dataDest = Join-Path $skillDir "data"
    New-Item -ItemType Directory -Path $dataDest -Force | Out-Null
    Copy-Item (Join-Path $dataSource "*") $dataDest -Force
}

# Copy scripts/ for search engine
$scriptsSource = Join-Path $sourceDir "scripts"
if (Test-Path $scriptsSource) {
    $scriptsDest = Join-Path $skillDir "scripts"
    New-Item -ItemType Directory -Path $scriptsDest -Force | Out-Null
    Copy-Item (Join-Path $scriptsSource "core.py") $scriptsDest -Force
    Copy-Item (Join-Path $scriptsSource "search.py") $scriptsDest -Force
}

# Copy templates/
$tmplSource = Join-Path $sourceDir "templates"
if (Test-Path $tmplSource) {
    $tmplDest = Join-Path $skillDir "templates"
    Copy-Item $tmplSource $tmplDest -Recurse -Force
}

# Copy references/
$refSource = Join-Path $sourceDir "references"
if (Test-Path $refSource) {
    $refDest = Join-Path $skillDir "references"
    Copy-Item $refSource $refDest -Recurse -Force
}

Write-Host "         -> $skillDir" -ForegroundColor DarkGray

# --- 4. Install .prompt.md files → .github/prompts/ ---
Write-Host "  [2/4] Installing prompt commands..." -ForegroundColor White
$promptSource = Join-Path $sourceDir "prompts"
if (Test-Path $promptSource) {
    New-Item -ItemType Directory -Path $promptsDir -Force | Out-Null
    Get-ChildItem (Join-Path $promptSource "*.prompt.md") | ForEach-Object {
        Copy-Item $_.FullName (Join-Path $promptsDir $_.Name) -Force
        Write-Host "         -> /$($_.BaseName)" -ForegroundColor DarkGray
    }
}

# --- 5. Install copilot-instructions.md → .github/ ---
Write-Host "  [3/4] Installing copilot instructions..." -ForegroundColor White
$instrSource = Join-Path $sourceDir ".github\copilot-instructions.md"
$instrDest   = Join-Path $instrDir "copilot-instructions.md"
if (Test-Path $instrSource) {
    New-Item -ItemType Directory -Path $instrDir -Force | Out-Null
    if (Test-Path $instrDest) {
        # Append to existing file instead of overwriting
        $marker = "# --- Cake Design System ---"
        $existing = Get-Content $instrDest -Raw
        if ($existing -notmatch "Cake Design System") {
            Add-Content $instrDest "`n`n$marker`n"
            Get-Content $instrSource | Add-Content $instrDest
            Write-Host "         -> Appended to existing copilot-instructions.md" -ForegroundColor DarkGray
        } else {
            Write-Host "         -> Already contains Cake instructions, skipped" -ForegroundColor DarkGray
        }
    } else {
        Copy-Item $instrSource $instrDest -Force
        Write-Host "         -> $instrDest" -ForegroundColor DarkGray
    }
}

# --- 6. Copy cake-tokens.css ---
Write-Host "  [4/4] Copying cake-tokens.css..." -ForegroundColor White
$cssSource = Join-Path $sourceDir "templates\cake-tokens.css"
if (Test-Path $cssSource) {
    $cssDest = Join-Path $TargetDir "src\styles"
    if (-not (Test-Path $cssDest)) {
        $cssDest = $TargetDir
    }
    Copy-Item $cssSource (Join-Path $cssDest "cake-tokens.css") -Force
    Write-Host "         -> $(Join-Path $cssDest 'cake-tokens.css')" -ForegroundColor DarkGray
}

# --- Cleanup ---
if (-not $isLocal -and $tempDir -and (Test-Path $tempDir)) {
    Remove-Item $tempDir -Recurse -Force
}

Write-Host ""
Write-Host "  ✅ Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Installed:" -ForegroundColor White
Write-Host "    Skill:    .github/skills/cake-design-system/SKILL.md" -ForegroundColor DarkGray
Write-Host "    Prompts:  .github/prompts/cake-*.prompt.md" -ForegroundColor DarkGray
Write-Host "    Rules:    .github/copilot-instructions.md" -ForegroundColor DarkGray
Write-Host "    Tokens:   cake-tokens.css" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Slash commands available in Copilot Chat:" -ForegroundColor White
Write-Host "    /cake-component   Generate a Cake component" -ForegroundColor Cyan
Write-Host "    /cake-review      Review code for compliance" -ForegroundColor Cyan
Write-Host "    /cake-tokens      Look up token values" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Skill auto-activates when Copilot generates UI code." -ForegroundColor Yellow
Write-Host ""
