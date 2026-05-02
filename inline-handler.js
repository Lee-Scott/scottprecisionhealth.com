const fs = require('fs');
const path = require('path');

const handlerPath = path.join(__dirname, '.open-next', 'server-functions', 'default', 'handler.mjs');
const workerPath = path.join(__dirname, '.open-next', 'worker.js');

// Read the handler
let handler = fs.readFileSync(handlerPath, 'utf8');

// Step 1: Fix requireChunk to actually load chunks from filesystem
// Current: function requireChunk(chunkPath){throw new Error(`Not found ${chunkPath}`)}
// New: use fs.readFileSync to load the chunk
const requireChunkPattern = /function requireChunk\(chunkPath\)\{throw new Error\(`Not found \$\{chunkPath\}`\)\}/;
const requireChunkReplacement = `function requireChunk(chunkPath){
  try {
    const resolved = path2.resolve(RUNTIME_ROOT, chunkPath);
    const chunkContent = fs.readFileSync(resolved, 'utf8');
    const chunkFn = new Function('exports', 'module', 'require', chunkContent);
    const mod = { exports: {} };
    chunkFn(mod.exports, mod, __require);
    return mod.exports;
  } catch(e) {
    throw new Error('Not found ' + chunkPath);
  }
}`;

if (handler.match(requireChunkPattern)) {
  handler = handler.replace(requireChunkPattern, requireChunkReplacement);
  fs.writeFileSync(handlerPath, handler, 'utf8');
  console.log('✓ Patched requireChunk to use fs.readFileSync');
} else {
  console.log('✗ Could not find requireChunk pattern');
  const idx = handler.indexOf('function requireChunk');
  if (idx >= 0) {
    console.log('Found at', idx, ':', handler.slice(idx, idx + 100));
  }
}

// Step 2: Fix the handler export - no top-level await
const oldPattern = /var (\w+);export\{\1 as handler\};\n\/\/ Top-level await workaround for Cloudflare Workers\nconst __handlerPromise = createMainHandler\(\);\n__handlerPromise\.then\(v => \{ \1 = v; \}\);\n/;

const match = handler.match(oldPattern);
if (match) {
  const varName = match[1];
  console.log('Found variable name:', varName);
  
  handler = handler.replace(
    oldPattern,
    `var ${varName};export{${varName} as handler};\n// Top-level await workaround for Cloudflare Workers\nconst __handlerPromise = createMainHandler();\n__handlerPromise.then(v => { ${varName} = v; });\n`
  );
  
  fs.writeFileSync(handlerPath, handler, 'utf8');
  console.log('✓ Verified handler.mjs - no top-level await, uses .then()');
} else {
  console.log('✗ Could not find expected pattern');
  console.log('Last 300 chars:', handler.slice(-300));
}

// Step 3: Fix worker.js to wait for handler
let worker = fs.readFileSync(workerPath, 'utf8');

const oldWorkerPattern = `            // @ts-expect-error: resolved by wrangler build
            const handlerModule = await import("./server-functions/default/handler.mjs");
            // Wait for handler initialization (top-level await workaround)
            if (!handlerModule.handler) {
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            const handler = handlerModule.handler;
            return handler(reqOrResp, env, ctx, request.signal);`;

const newWorkerPattern = `            // @ts-expect-error: resolved by wrangler build
            const handlerModule = await import("./server-functions/default/handler.mjs");
            // Wait for handler initialization (top-level await workaround)
            if (!handlerModule.handler) {
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            const handler = handlerModule.handler;
            return handler(reqOrResp, env, ctx, request.signal);`;

if (worker.includes(oldWorkerPattern)) {
  // Already patched, no change needed
  console.log('✓ Worker.js already patched');
} else {
  const idx = worker.indexOf('server-functions');
  if (idx >= 0) {
    console.log('Current worker context:', worker.slice(Math.max(0, idx - 50), idx + 250));
  }
}

console.log('\nDone!');
