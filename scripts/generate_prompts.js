const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const outputFile = path.join(__dirname, '../image_prompts.md');

// Helper to normalize province name for filenames
const cleanName = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');

// Valid image patterns that don't need replacement
const validImages = [
    'rendang_premium.png',
    'sate_padang_premium.png',
    'dendeng_batokok_premium.png',
    'pempek_premium.png',
    'soto_betawi_premium.png',
    'rawon_premium.png',
    'gudeg_jogja_premium.png',
    'soto_banjar_premium.png',
    'coto_makassar_premium.png'
];

function isPlaceholder(img) {
    if (!img) return true;
    if (img.includes('hero.png')) return true;
    if (img.includes('placeholder')) return true;
    // Check if filename is in valid list (relaxed check)
    const filename = path.basename(img);
    if (validImages.some(v => filename.includes(v))) return false;
    return true; // Default to needing update if not explicitly valid/premium
}

let output = `# Image Generation Prompts\n\nGenerated List for missing premium photos.\n\n| No | Province | Recipe Title | Target Filename | AI Prompt (Copy Paste) |\n|---|---|---|---|---|\n`;

try {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    let count = 0;
    const processedSlugs = new Set();

    files.forEach(f => {
        try {
            const recipes = require(path.join(dataDir, f));
            if (Array.isArray(recipes)) {
                recipes.forEach(r => {
                    if (processedSlugs.has(r.slug)) return;
                    processedSlugs.add(r.slug);

                    if (isPlaceholder(r.image)) {
                        count++;
                        const provinceSlug = cleanName(r.province);
                        const recipeSlug = cleanName(r.title.split('(')[0].trim()); // Shorten filename
                        const targetFilename = `${provinceSlug}_${recipeSlug}.png`;

                        // Construct Rich Prompt
                        const prompt = `Professional food photography of ${r.title}, authentic ${r.province} Indonesian cuisine. ${r.description.slice(0, 100)}... Plated in a rustic ceramic bowl/plate, dark moody lighting, cinematic depth of field, steam rising, fresh garnish (chili, lime, herbs), 8k resolution, culinary magazine style, delicious texture close-up.`;

                        output += `| ${count} | ${r.province} | ${r.title} | \`${targetFilename}\` | **${prompt}** |\n`;
                    }
                });
            }
        } catch (e) {
            console.error("Error reading file:", f, e);
        }
    });

    fs.writeFileSync(outputFile, output);
    console.log(`Generated prompts for ${count} missing images.`);

} catch (e) {
    console.error("Critical Error:", e);
}
