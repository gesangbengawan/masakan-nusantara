$imagesDir = "$PSScriptRoot\..\public\images"
$targetFiles = @(
    "sulawesi_utara_bubur_manado.jpeg",
    "sulawesi_utara_ayam_woku.jpeg",
    "sulawesi_utara_cakalang_fufu.jpeg",
    "gorontalo_binte_biluhuta.jpeg",
    "gorontalo_ayam_iloni.jpeg",
    "gorontalo_sate_tuna.jpeg",
    "sulawesi_tengah_kaledo.jpeg",
    "sulawesi_tengah_uta_dada.jpeg",
    "sulawesi_tengah_duo_saleh.jpeg",
    "sulawesi_barat_bau_peapi.jpeg",
    "sulawesi_barat_jepa.jpeg",
    "sulawesi_barat_golla_kambu.jpeg",
    "sulawesi_selatan_coto_makassar.jpeg",
    "sulawesi_selatan_pallubasa.jpeg",
    "sulawesi_selatan_konro_bakar_iga.jpeg",
    "sulawesi_tenggara_sinonggi.jpeg",
    "sulawesi_tenggara_ikan_parende.jpeg",
    "sulawesi_tenggara_kabuto.jpeg"
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

Write-Host "Sulawesi Compression Complete!"
