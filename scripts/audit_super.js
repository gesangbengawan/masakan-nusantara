const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/grand_master');
const outputFile = path.join(__dirname, '../super_audit_report.md');

function superAudit() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    let report = `# Super Grand Audit (Target: 4+ Tips) 🛡️\n\n`;
    let needsWork = 0;

    files.forEach(f => {
        const recipes = require(path.join(dataDir, f));
        let fileIssues = [];

        recipes.forEach(r => {
            let issues = [];
            // Check Tips Count (Strict 4+)
            if (!r.tips || r.tips.length < 4) {
                issues.push(`Tips: ${r.tips ? r.tips.length : 0}/4`);
            }
            // Check Description Length (Authenticity proxy)
            if (r.description.length < 150) {
                issues.push(`Desc too short (${r.description.length} chars)`);
            }

            if (issues.length > 0) {
                fileIssues.push(`- [ ] **${r.title}** (${r.province}): ${issues.join(', ')}`);
                needsWork++;
            }
        });

        if (fileIssues.length > 0) {
            report += `### 📁 ${f}\n${fileIssues.join('\n')}\n\n`;
        }
    });

    report += `\n**Total Recipes Needing Upgrade: ${needsWork}**`;
    fs.writeFileSync(outputFile, report);
    console.log(`Audit Complete. ${needsWork} recipes need upgrades.`);
}

superAudit();
