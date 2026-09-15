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
//
// Separately: link-preview bots (Slack, Twitter, WhatsApp, Discord, ...)
// never run our JS, so they only ever see whatever <head> tags are baked
// into the physical file for that route. Our <Seo> component only updates
// them client-side, so any route we write a physical index.html for should
// also get its own title/description/image swapped in below — otherwise
// every shared link previews as the homepage.
import { existsSync, mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(import.meta.dirname, '..', 'dist');
const indexHtml = join(distDir, 'index.html');
const SITE_URL = 'https://ishanlahiru.github.io';

copyFileSync(indexHtml, join(distDir, '404.html'));

// path -> per-route <head> overrides. Keep these in sync with the `title`/
// `description`/`image` passed to the <Seo> component on that route.
const routeMeta = {
  '/about': {
    title: 'About Ishan Lahiru - Software Developer',
    description:
      'Ishan Lahiru is a software developer based in Kalutara District, Sri Lanka, building mobile apps and backend platforms with Flutter, TypeScript, and NestJS.'
  },
  '/projects/omi-clash': {
    title: 'Omi Clash - Real-time Sri Lankan Card Game | Ishan Lahiru',
    description:
      'Omi Clash is a 4-player trick-taking card game (Omi) with friend chat, live table voice chat, and country/global leaderboards, built by Ishan Lahiru.',
    image: `${SITE_URL}/projects/omi-clash/hero-art.png`
  },
  '/projects/theravada-chants': {
    title: 'Theravāda Chants - Pali Chanting Companion | Ishan Lahiru',
    description:
      'A Pali chanting companion by Ishan Lahiru — chants with English translations, precept-level reading lists, a guided ceremony walkthrough, and a Pali pronunciation guide.'
  },
  '/projects/dammapadaya': {
    title: 'Dammapadaya - Ishan Lahiru',
    description:
      "A daily-reading companion for the Dhammapada — all 423 verses across 26 chapters, in Pāli with English renderings, browsable by chapter or searchable by wording and theme."
  },
  '/projects/drift-and-direct': {
    title: 'Drift & Direct - Ishan Lahiru',
    description:
      'A swiping-mechanism based mobile focus game by Ishan Lahiru — swipe the direction the arrow drifts, survive as long as you can, and climb the leaderboards.'
  },
  '/projects/deckdrill': {
    title: 'DeckDrill - Ishan Lahiru',
    description:
      'DeckDrill is a Blackjack training and card-counting simulator app by Ishan Lahiru, built to help players learn basic strategy and practice counting.'
  },
  '/blog/understanding-react-dnd': {
    title: 'Understanding React DnD - Ishan Lahiru',
    description: 'Official docs, setup, code, and a live drag-and-drop demo built with React DnD.'
  },
  '/blog/svg-map-manipulation-with-react': {
    title: 'SVG Map Manipulation with React - Ishan Lahiru',
    description: 'How the Election Results Dashboard renders an interactive SVG map — with a live demo.'
  },
  '/blog/monorepo-management-with-turbo': {
    title: 'Monorepo Management with Turbo - Ishan Lahiru',
    description: 'Task graphs, remote caching, and workspaces in Turborepo, with Mermaid diagrams.'
  }
};

const criticalRoutes = [
  ...Object.keys(routeMeta),
  '/projects/omi-clash/privacy-policy',
  '/projects/omi-clash/terms',
  '/projects/omi-clash/support',
  '/projects/omi-clash/community',
  '/projects/theravada-chants/privacy-policy',
  '/projects/theravada-chants/terms',
  '/projects/theravada-chants/support',
  '/projects/dammapadaya/privacy-policy',
  '/projects/dammapadaya/terms',
  '/projects/dammapadaya/support',
  '/projects/drift-and-direct/privacy-policy',
  '/projects/drift-and-direct/terms',
  '/projects/drift-and-direct/support',
  '/projects/deckdrill/privacy-policy',
  '/projects/deckdrill/terms',
  '/projects/deckdrill/support'
];

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Attributes on these tags are sometimes wrapped onto their own lines in the
// source (e.g. `<meta\n  name="description"\n  content="...">`), so matching
// requires `\s+` between attributes rather than assuming a single line.
const replaceAttr = (html, matchAttr, value) =>
  html.replace(new RegExp(`(${matchAttr}\\s+content=")[^"]*(")`), `$1${value}$2`);

const withRouteMeta = (html, route) => {
  const meta = routeMeta[route];
  if (!meta) return html;

  const url = `${SITE_URL}${route}`;
  const image = meta.image ?? `${SITE_URL}/og-image.jpg`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  let result = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  result = result.replace(/(rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
  result = replaceAttr(result, 'name="description"', description);
  result = replaceAttr(result, 'property="og:title"', title);
  result = replaceAttr(result, 'property="og:description"', description);
  result = replaceAttr(result, 'property="og:image"', image);
  result = replaceAttr(result, 'property="og:url"', url);
  result = replaceAttr(result, 'name="twitter:title"', title);
  result = replaceAttr(result, 'name="twitter:description"', description);
  result = replaceAttr(result, 'name="twitter:image"', image);
  return result;
};

const template = readFileSync(indexHtml, 'utf8');

for (const route of criticalRoutes) {
  const dir = join(distDir, ...route.split('/').filter(Boolean));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), withRouteMeta(template, route));
}
