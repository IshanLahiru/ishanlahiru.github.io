// GitHub Pages only serves files that physically exist — any other path
// (e.g. a client-side route like /projects/omi-clash/terms) 404s before our
// SPA's JS ever gets a chance to run. dist/404.html being a copy of
// index.html papers over that for a browser (GitHub Pages serves it on any
// miss, the bundle boots, react-router renders the right page from
// location.pathname) — but the HTTP status on that first response is still
// a real 404, which is exactly what an automated link checker (or an App
// Store reviewer's tooling) sees instead of the page.
//
// For routes that get linked from outside our own SPA — an app's in-app
// Privacy Policy / Terms links, an App Store Connect metadata field, a
// support email footer — that first response has to be a genuine 200. The
// fix: physically write index.html at those exact nested paths too, so
// GitHub Pages finds a real file and never falls through to 404.html for
// them. Add to this list whenever a new externally-linked route needs the
// same guarantee.
import { existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(import.meta.dirname, '..', 'dist');
const indexHtml = join(distDir, 'index.html');

copyFileSync(indexHtml, join(distDir, '404.html'));

const criticalRoutes = [
  '/projects/omi-clash',
  '/projects/omi-clash/privacy-policy',
  '/projects/omi-clash/terms',
  '/projects/omi-clash/support',
  '/projects/omi-clash/community',
  '/projects/theravada-chants',
  '/projects/theravada-chants/privacy-policy',
  '/projects/theravada-chants/terms',
  '/projects/theravada-chants/support',
];

for (const route of criticalRoutes) {
  const dir = join(distDir, ...route.split('/').filter(Boolean));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, 'index.html'));
}
