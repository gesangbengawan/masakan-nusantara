$imagesDir = "$PSScriptRoot\..\public\images"
$targetFiles = @(
    "bali_bebek_crispy_ubud.jpeg",
    "bali_nasi_jinggo.jpeg",
    "bali_sate_plecing.jpeg",
    "bali_tipat_cantok.jpeg",
    "bali_ikan_bakar_jimbaran.jpeg",
    "bali_jukut_ares.jpeg",
    "bali_laklak.jpeg"
)

Add-Type -AssemblyName System.Drawing

foreach ($file in $targetFiles) {
    $path = Join-Path $imagesDir $file
    if (Test-Path $path) {
        Write-Host "Processing $file..."
        
        $img = [System.Drawing.Image]::FromFile($path)
        
        # Resize if > 1200px
        if ($img.Width -gt 1200) {
            $newHeight = [int]($img.Height * (1200 / $img.Width))
            $resized = new-object System.Drawing.Bitmap 1200, $newHeight
            $graph = [System.Drawing.Graphics]::FromImage($resized)
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.DrawImage($img, 0, 0, 1200, $newHeight)
            $img.Dispose()
            $img = $resized
        }

        # Compress JPEG Q=75
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 75)
        
        $tempPath = $path + ".tmp"
        $img.Save($tempPath, $codec, $params)
        $img.Dispose()
        
        Move-Item $tempPath $path -Force
        Write-Host "  -> Compressed (Q=75)"
    }
    else {
        Write-Warning "File not found: $file"
    }
}

Write-Host "Bali Compression Complete!"
