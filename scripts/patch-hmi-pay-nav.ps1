# Inject shared proto-nav into all cooperative-parking-pay HMI HTML pages.
$dir = Join-Path (Split-Path $PSScriptRoot -Parent) "prototypes\cooperative-parking-pay\hmi"
$files = Get-ChildItem $dir -Filter "hmi-pay*.html"

$navBlock = @'
  <nav class="proto-nav" id="proto-nav" aria-label="全部界面索引"></nav>
  <script src="hmi-pay-nav.js"></script>
'@

foreach ($f in $files) {
  $name = $f.Name
  $html = [System.IO.File]::ReadAllText($f.FullName, [System.Text.UTF8Encoding]::new($false))

  if ($html -notmatch 'hmi-pay-proto-common\.css') {
    $html = $html -replace '(<head>\s*)', "`$1`n  <link rel=`"stylesheet`" href=`"hmi-pay-proto-common.css`">`n"
  }

  $html = $html -replace '(?s)<nav class="proto-nav"[^>]*>.*?</nav>\s*', ''

  if ($html -notmatch 'id="proto-nav"') {
    if ($html -match '<div class="demo-wrap">') {
      $html = $html -replace '(<div class="demo-wrap">\s*)', "`$1$navBlock`n"
    } elseif ($name -eq 'hmi-pay-index-prototype.html') {
      $html = $html -replace '(<body[^>]*>)', "`$1`n$navBlock`n  <div class=`"proto-index-wrap`">"
      if ($html -notmatch 'proto-index-wrap">\s*</body>') {
        $html = $html -replace '</body>', "  </div>`n</body>"
      }
    } else {
      $html = $html -replace '(<body[^>]*>)', "`$1`n<div class=`"demo-wrap`">`n$navBlock`n"
      $html = $html -replace '</body>', "</div>`n</body>"
    }
  }

  if ($name -eq 'hmi-pay-index-prototype.html') {
    $html = $html -replace '<body([^>]*)>', '<body class="hmi-proto-index"$1 data-nav-current="hmi-pay-index-prototype.html">'
    $html = $html -replace '\s*padding-top:\s*44px[^;]*;', ''
  } else {
    if ($html -notmatch 'hmi-proto-screen') {
      $html = $html -replace '<body([^>]*)>', "<body class=`"hmi-proto-screen`"`$1 data-nav-current=`"$name`">"
    } else {
      $html = $html -replace 'data-nav-current="[^"]*"', "data-nav-current=`"$name`""
    }
    $html = $html -replace '(?m)^\s*\.proto-nav\s*\{[^}]+\}\s*', ''
    $html = $html -replace '(?m)^\s*\.proto-nav a[^}]+\}\s*', ''
    $html = $html -replace '(?m)^\s*\.proto-nav a\.on[^}]+\}\s*', ''
    $html = $html -replace 'padding-top:\s*44px[^;]*;', ''
    $html = $html -replace 'position:\s*fixed[^;]*;', ''
  }

  [System.IO.File]::WriteAllText($f.FullName, $html, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Patched: $name"
}

Write-Host "Done."
