// Fails the build when an import crosses a layer boundary (see docs/ARCHITECTURE.md):
//
//   app       may import anything (it wires features into routes)
//   features  may import core, shared and their own feature, never another feature
//   shared    may import core and shared
//   core      may import only core
//
// A feature is `src/features/<name>`, or `src/features/projects/<name>` for app pages.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const root = join(import.meta.dirname, '..');
const src = join(root, 'src');
const aliases = { '@app': 'app', '@core': 'core', '@shared': 'shared', '@features': 'features' };

const files = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : /\.(ts|tsx)$/.test(name) ? [path] : [];
  });

// "features/projects/typal/typalPage.tsx" -> { layer: "features", unit: "features/projects/typal" }
const locate = (pathInSrc) => {
  const parts = pathInSrc.split('/');
  const layer = parts[0];
  const depth = layer === 'features' && parts[1] === 'projects' ? 3 : 2;
  return { layer, unit: parts.slice(0, depth).join('/') };
};

const allowed = {
  app: ['app', 'core', 'shared', 'features'],
  features: ['core', 'shared'],
  shared: ['core', 'shared'],
  core: ['core']
};

const violations = [];
for (const file of files(src)) {
  const from = relative(src, file);
  const source = readFileSync(file, 'utf8');
  for (const [, spec] of source.matchAll(/(?:from\s+|import\s*\(\s*)['"]([^'"]+)['"]/g)) {
    const alias = Object.keys(aliases).find((a) => spec === a || spec.startsWith(`${a}/`));
    let target;
    if (alias) target = aliases[alias] + spec.slice(alias.length);
    else if (spec.startsWith('.')) target = relative(src, resolve(dirname(file), spec));
    else continue; // npm package

    const a = locate(from);
    const b = locate(target);
    if (a.unit === b.unit) continue;
    if (!(allowed[a.layer] ?? []).includes(b.layer)) {
      violations.push(`${from} imports ${spec} (${a.layer} may not import ${b.unit})`);
    } else if (a.layer === 'features' && b.layer === 'features') {
      violations.push(`${from} imports ${spec} (features may not import other features)`);
    }
  }
}

if (violations.length) {
  console.error(`Layer boundary violations:\n  ${violations.join('\n  ')}`);
  process.exit(1);
}
console.log('Layer boundaries OK');
