const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules') {
      searchDir(p);
    } else if (e.isFile() && (e.name.endsWith('.ts') || e.name.endsWith('.tsx') || e.name.endsWith('.js') || e.name.endsWith('.mjs'))) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes("runtime = 'edge'") || c.includes('runtime: "edge"') || c.includes("runtime: 'edge'")) {
        console.log('FOUND edge runtime in:', p);
      }
    }
  }
}

searchDir('app');
searchDir('components');
searchDir('lib');
console.log('Search complete.');
