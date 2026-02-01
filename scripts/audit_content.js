const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const outputFile = path.join(__dirname, '../audit_report.md');

// Standard Criteria
const MIN_RECIPES = 3;
const REQUIRED_TIPS = 3;

function analyzeProvince(name, recipes) {
    const issues = [];
    let pass = true;

    // 1. Count Check
    if (recipes.length < MIN_RECIPES) {
        issues.push(`❌ **Count**: Only ${recipes.length}/${MIN_RECIPES} recipes.`);
        pass = false;
    } else {
        issues.push(`✅ **Count**: ${recipes.length} recipes.`);
    }

    // 2. Structure Check (Headers in Instructions) & Tips Check
    let badStructure = 0;
    let badTips = 0;

    recipes.forEach(r => {
        // Check for Bold Headers in instructions (e.g. "**Bumbu Halus**")
        const hasHeaders = r.instructions.some(i => i.includes('**'));
        if (!hasHeaders) badStructure++;

        // Check for Tips count
        if (!r.tips || r.tips.length < REQUIRED_TIPS) badTips++;
    });

    if (badStructure > 0) {
        issues.push(`❌ **Structure**: ${badStructure} recipes lack bold headers (e.g. "**Step 1**: ...").`);
        pass = false;
    } else {
        issues.push(`✅ **Structure**: Premium standard.`);
    }

    if (badTips > 0) {
        issues.push(`❌ **Tips**: ${badTips} recipes have fewer than ${REQUIRED_TIPS} chef tips.`);
        pass = false;
    } else {
        issues.push(`✅ **Tips**: Rich content.`);
    }

    return { pass, issues };
}

try {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    let allRecipes = [];

    // Load all data
    files.forEach(f => {
        try {
            const recipes = require(path.join(dataDir, f));
            if (Array.isArray(recipes)) {
                allRecipes = [...allRecipes, ...recipes];
            }
        } catch (e) {
            console.error("Error reading", f, e.message);
        }
    });

    // Dedup
    const uniqueRecipes = Array.from(new Map(allRecipes.map(item => [item.slug, item])).values());

    // Group by Province
    const provinces = {};
    uniqueRecipes.forEach(r => {
        const p = r.province || "Unknown";
        if (!provinces[p]) provinces[p] = [];
        provinces[p].push(r);
    });

    // Generate Report
    let md = `# Comprehensive Content Audit Report\n\n**Standard Reference**: West Sumatra (Rendang Standard)\n- Min 3 Recipes/Province\n- Structured Instructions (with Headers)\n- Rich Tips (3+ items)\n\n---\n\n`;

    // Sort provinces
    const provinceNames = Object.keys(provinces).sort();

    let passCount = 0;

    provinceNames.forEach((p, index) => {
        const result = analyzeProvince(p, provinces[p]);
        const icon = result.pass ? '✅' : '⚠️';
        if (result.pass) passCount++;

        md += `### ${index + 1}. ${p} ${icon}\n`;
        result.issues.forEach(i => md += `- ${i}\n`);
        md += `\n`;
    });

    const totalProvinces = provinceNames.length;
    md = `**Overall Status**: ${passCount}/${totalProvinces} Provinces Passed\n\n` + md;

    fs.writeFileSync(outputFile, md);
    console.log(`Audit Complete. Report generated at ${outputFile}`);

} catch (e) {
    console.error("Audit Failed:", e);
}
