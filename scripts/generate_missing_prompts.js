const fs = require('fs');
const path = require('path');

const masterDir = path.join(__dirname, '../src/data/grand_master');
const promptFile = path.join(__dirname, '../image_prompts.md');
const outputFile = path.join(__dirname, '../image_prompts_missing.md');

// 1. Read Existing Prompts Content
const existingContent = fs.readFileSync(promptFile, 'utf8');

// 2. Read Master Recipes & Filter Missing
const masterFiles = fs.readdirSync(masterDir).filter(f => f.endsWith('.js'));
let missingRecipes = [];
let count = 0;

masterFiles.forEach(f => {
    const recipes = require(path.join(masterDir, f));
    recipes.forEach(r => {
        // cleanup image path for check
        const imgName = r.image.replace('/images/', '').replace('images/', '');

        // Robust check: does the filename appear in the prompt file?
        if (!existingContent.includes(imgName)) {
            missingRecipes.push(r);
        }
    });
});

// 3. Generate Markdown
let md = `# Missing Image Prompts\n\nGenerated List for remaining recipes.\n\n| No | Province | Recipe Title | Target Filename | AI Prompt (Copy Paste) |\n|---|---|---|---|---|\n`;

missingRecipes.forEach((r, idx) => {
    const province = r.province;
    const title = r.title;
    const imgName = r.image.replace('/images/', '').replace('images/', '');

    // Construct Prompt
    const desc = r.description.substring(0, 150).replace(/\n/g, ' ') + '...';
    const prompt = `**Professional food photography of ${title}, authentic ${province} Indonesian cuisine. ${desc} Plated in a rustic ceramic bowl/plate, dark moody lighting, cinematic depth of field, steam rising, fresh garnish (chili, lime, herbs), 8k resolution, culinary magazine style, delicious texture close-up.**`;

    md += `| ${idx + 1} | ${province} | ${title} | \`${imgName}\` | ${prompt} |\n`;
});

fs.writeFileSync(outputFile, md);
console.log(`Generated prompts for ${missingRecipes.length} missing recipes.`);
