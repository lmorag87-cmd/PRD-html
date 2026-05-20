param(
  [string]$Project = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$protoRoot = Join-Path $root "prototypes"
$docsRoot = Join-Path $root "docs"

function Sync-Project($slug) {
  $src = Join-Path $protoRoot $slug
  if (-not (Test-Path $src)) { throw "Missing prototypes/$slug" }
  $dst = Join-Path $docsRoot $slug
  foreach ($sub in @("hmi", "mobile")) {
    $from = Join-Path $src $sub
    if (Test-Path $from) {
      $to = Join-Path $dst $sub
      New-Item -ItemType Directory -Force -Path $to | Out-Null
      Copy-Item (Join-Path $from "*.html") $to -Force
      if ($sub -eq "hmi") {
        Copy-Item (Join-Path $from "hmi-pay-proto-common.css") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "hmi-pay-nav.js") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "hmi-find-proto-common.css") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "hmi-find-nav.js") $to -Force -ErrorAction SilentlyContinue
      }
      if ($sub -eq "mobile") {
        Copy-Item (Join-Path $from "mobile-pay-proto-common.css") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "mobile-pay-nav.js") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "mobile-find-proto-common.css") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "mobile-find-nav.js") $to -Force -ErrorAction SilentlyContinue
        Copy-Item (Join-Path $from "mobile-find-index-prototype.html") $to -Force -ErrorAction SilentlyContinue
      }
    }
  }
  $idx = Join-Path $src "index.html"
  if (Test-Path $idx) { Copy-Item $idx (Join-Path $dst "index.html") -Force }
  Write-Host "Synced: $slug"
}

New-Item -ItemType File -Force -Path (Join-Path $docsRoot ".nojekyll") | Out-Null

if ($Project) {
  Sync-Project $Project
} else {
  Get-ChildItem $protoRoot -Directory | Where-Object {
    $_.Name -notmatch '^\.' -and (
      (Test-Path (Join-Path $_.FullName "hmi")) -or (Test-Path (Join-Path $_.FullName "mobile"))
    )
  } | ForEach-Object { Sync-Project $_.Name }
}

Write-Host "Done. Publish folder: docs/"
