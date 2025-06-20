
const fs = require('fs');
const path = require('path');

const sourceDir = '/home/ubuntu/synthocracy_platform/prototype/frontend/public/patterns';

const destDir = '/home/ubuntu/synthocracy_platform/prototype/frontend/synthsara_frontend/public/patterns';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const patternFiles = [
  'flower-of-life.svg',
  'vesica-piscis.svg',
  'torus.svg',
  'diamond-essence.svg'
];

patternFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(destDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to React app public directory`);
  } else {
    console.error(`Source file ${sourcePath} not found`);
  }
});

console.log('Pattern files copied successfully');
