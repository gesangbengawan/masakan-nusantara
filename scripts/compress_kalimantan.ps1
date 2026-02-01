$imagesDir = "$PSScriptRoot\..\public\images"
$targetFiles = @(
    "kalimantan_barat_bubur_pedas_sambas.jpeg",
    "kalimantan_barat_asam_pedas_tempoyak.jpeg",
    "kalimantan_barat_choipan.jpeg",
    "kalimantan_selatan_soto_banjar.jpeg",
    "kalimantan_selatan_ketupat_kandangan.jpeg",
    "kalimantan_selatan_ikan_patin_bakar.jpeg",
    "kalimantan_tengah_juhu_singkah.jpeg",
    "kalimantan_tengah_wadi_ikan.jpeg",
    "kalimantan_tengah_tumis_kalakai.jpeg",
    "kalimantan_timur_ayam_cincane.jpeg",
    "kalimantan_timur_nasi_bekepor.jpeg",
    "kalimantan_timur_gence_ruan.jpeg",
    "kalimantan_utara_kepiting_soka.jpeg",
    "kalimantan_utara_lawa_timun.jpeg",
    "kalimantan_utara_sate_temburung.jpeg"
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

Write-Host "Kalimantan Compression Complete!"
