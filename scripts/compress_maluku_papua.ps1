$imagesDir = "$PSScriptRoot\..\public\images"
$targetFiles = @(
    "maluku_ikan_kuah_kuning.jpeg",
    "maluku_kohu_kohu.jpeg",
    "maluku_nasi_lapola.jpeg",
    "maluku_utara_gohu_ikan.jpeg",
    "maluku_utara_gatang_kenari.jpeg",
    "maluku_utara_popeda.jpeg",
    "papua_papeda.jpeg",
    "papua_ikan_asar.jpeg",
    "papua_kue_lontar.jpeg",
    "papua_barat_ikan_bakar_manokwari.jpeg",
    "papua_barat_aunu_senebre.jpeg",
    "papua_barat_ikan_bungkus.jpeg",
    "papua_udang_selingkuh.jpeg",
    "papua_selatan_sagu_sep.jpeg",
    "papua_keladi_tumbuk.jpeg"
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

Write-Host "Maluku Papua Compression Complete!"
