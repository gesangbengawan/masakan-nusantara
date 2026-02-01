const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/grand_master');
const outputFile = path.join(__dirname, '../image_prompts_final.md');

function generatePrompts() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    let output = `# Final Image Generation Prompts (Grand Master Edition)\n\nComplete list of 99 Premium Recipes.\n\n| No | Province | Recipe Title | Target Filename | AI Prompt |\n|---|---|---|---|---|\n`;

    let no = 1;

    files.forEach(f => {
        const recipes = require(path.join(dataDir, f));
        recipes.forEach(r => {
            const safeTitle = r.title.replace(/[^a-zA-Z0-9 ]/g, '');
            const safeProv = r.province;
            const filename = r.image.includes('/') ? path.basename(r.image) : r.image;

            // Build Prompt
            let prompt = `Professional food photography of **${safeTitle}** typical dish from **${safeProv}**, Indonesia. `;
            prompt += `Plated on authentic traditional tableware or banana leaf. `;
            prompt += `High angle shot or 45-degree angle. `;
            prompt += `Lighting: Natural window light, warm tone, appetizing, glistening textures. `;
            prompt += `Key ingredients visible: ${extractKeyIngredients(r.description)}. `;
            prompt += `Background: Blurred hints of Indonesian fabrics (Batik/Tenun) or rustic wood. `;
            prompt += `Style: Bon Appetit magazine, 8k resolution, highly detailed, photorealistic.`;

            output += `| ${no++} | ${safeProv} | ${r.title} | \`${filename}\` | ${prompt} |\n`;
        });
    });

    fs.writeFileSync(outputFile, output);
    console.log("Prompts generated.");
}

function extractKeyIngredients(desc) {
    // Simple extraction of capitalized words or keywords from description
    // This is heuristics but better than nothing
    return desc.split(',')[0] + " rich spices, fresh herbs";
}

generatePrompts();
