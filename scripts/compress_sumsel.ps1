# Load System.Drawing for image processing
Add-Type -AssemblyName System.Drawing

$sourceDir = ".\public\images"
$quality = 75
$maxWidth = 1200

# Get ONLY Sumsel images
$images = Get-ChildItem -Path $sourceDir -Filter "sumsel_*.jpeg" -Recurse

if ($images.Count -eq 0) {
    Write-Warning "No 'sumsel_*.jpeg' images found!"
    exit
}

foreach ($imgFile in $images) {
    Write-Host "Processing $($imgFile.Name)..."
    try {
        $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
        
        # Check dimensions
        if ($img.Width -gt $maxWidth) {
            $newHeight = [int]($img.Height * ($maxWidth / $img.Width))
            $resized = new-object System.Drawing.Bitmap $maxWidth, $newHeight
            $graph = [System.Drawing.Graphics]::FromImage($resized)
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            
            $graph.DrawImage($img, 0, 0, $maxWidth, $newHeight)
            $img.Dispose()
            $img = $resized
            Write-Host "  -> Resized to $maxWidth px width"
        }
        
        # Save with compression
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
        
        # Save to temp file then replace
        $tempFile = "$($imgFile.FullName).tmp.jpg"
        $img.Save($tempFile, $codec, $encoderParams)
        $img.Dispose()
        
        # Replace original
        Remove-Item $imgFile.FullName
        Move-Item $tempFile $imgFile.FullName -Force
        
        Write-Host "  -> Compressed (Q=$quality)"
    }
    catch {
        Write-Warning "Failed to process $($imgFile.Name): $_"
    }
}

Write-Host "Sumsel Compression Complete!"
