const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const targetFiles = [
    'sumbar_rendang_daging.jpeg',
    'sumbar_dendeng_batokok.jpeg',
    'sumbar_sate_padang.jpeg',
    'sumsel_mie_celor.jpeg' // Valid check
];

console.log("--- Verifying File Headers ---");

targetFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    if (fs.existsSync(filePath)) {
        const buffer = Buffer.alloc(4);
        const fd = fs.openSync(filePath, 'r');
        fs.readSync(fd, buffer, 0, 4, 0);
        fs.closeSync(fd);

        const hex = buffer.toString('hex').toUpperCase();
        let type = "UNKNOWN";

        if (hex.startsWith('FFD8')) type = "JPEG";
        if (hex.startsWith('89504E47')) type = "PNG";

        console.log(`${file}: [${hex}] -> ${type}`);

        if (file.endsWith('.jpeg') && type !== 'JPEG') {
            console.error(`  ❌ INVALID FORMAT! Extension is .jpeg but header is ${type}`);
        }
    } else {
        console.error(`${file}: MISSING`);
    }
});
