try {
    $r = Invoke-WebRequest -Uri 'https://scottprecisionhealth.leehscott24.workers.dev/' -UseBasicParsing -TimeoutSec 30
    Write-Host "Status: $($r.StatusCode)"
    Write-Host "Content length: $($r.Content.Length)"
    if ($r.Content.Length -gt 0) {
        Write-Host "First 500 chars:"
        Write-Host $r.Content.Substring(0, [Math]::Min(500, $r.Content.Length))
    }
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
