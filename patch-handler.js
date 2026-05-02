const fs = require('fs');
const path = require('path');

const handlerPath = path.join(__dirname, '.open-next', 'server-functions', 'default', 'handler.mjs');

// Read the handler
let handler = fs.readFileSync(handlerPath, 'utf8');

// Step 1: Patch requireChunk to use fs.readFileSync
// The current function is: function requireChunk(chunkPath){throw new Error(`Not found ${chunkPath}`)}}
// We need to replace it with a version that reads from filesystem

const oldRequireChunk = 'function requireChunk(chunkPath){throw new Error(`Not found ${chunkPath}`)}}});';
const newRequireChunk = `function requireChunk(chunkPath){
  try {
    var resolvedPath = path2.resolve(RUNTIME_ROOT, chunkPath);
    var chunkContent = fs.readFileSync(resolvedPath, 'utf8');
    var chunkFn = new Function('exports', 'module', 'require', chunkContent);
    var mod = { exports: {} };
    chunkFn(mod.exports, mod, __require);
    return mod.exports;
  } catch(e) {
    throw new Error('Not found ' + chunkPath);
  }
}}});`;

if (handler.includes(oldRequireChunk)) {
  handler = handler.replace(oldRequireChunk, newRequireChunk);
  fs.writeFileSync(handlerPath, handler, 'utf8');
  console.log('✓ Patched requireChunk to use fs.readFileSync');
} else {
  console.log('✗ Could not find requireChunk pattern');
  // Try to find it
  const idx = handler.indexOf('function requireChunk(chunkPath)');
  if (idx >= 0) {
    console.log('Found at', idx, ':', handler.slice(idx, idx + 120));
  }
}

// Step 2: Check if fs and path2 are available
// path2 is already defined in the handler (from require('path'))
// We need to add fs import
const fsImportCheck = handler.indexOf('var fs=');
if (fsImportCheck < 0) {
  // Add fs import after the path2 import
  const pathImportIdx = handler.indexOf('var path2=');
  if (pathImportIdx >= 0) {
    const endOfLine = handler.indexOf('\n', pathImportIdx);
    const fsImport = handler.slice(pathImportIdx, endOfLine).replace('path', 'fs').replace('"path"', '"fs"');
    handler = handler.slice(0, endOfLine + 1) + fsImport + '\n' + handler.slice(endOfLine + 1);
    fs.writeFileSync(handlerPath, handler, 'utf8');
    console.log('✓ Added fs import');
  }
}

// Step 3: Check the handler export pattern
const exportPattern = /var (\w+);\nexport\{(\w+) as handler\};/;
const exportMatch = handler.match(exportPattern);
if (exportMatch) {
  console.log('✓ Found handler export pattern, var name:', exportMatch[1]);
} else {
  console.log('✗ Could not find handler export pattern');
  console.log('Last 500 chars:', handler.slice(-500));
}

console.log('\nDone patching handler.mjs!');
