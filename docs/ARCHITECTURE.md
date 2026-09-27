# Architecture

The site is split into layers so each page area is isolated: a feature can't reach into another feature, and only `app/` wires features into routes. It mirrors the structure used in the Typal iOS app.

## Layout

```text
src/
├── app/                      composition root
│   ├── main.tsx              entry: providers + <App />
│   ├── App.tsx
│   ├── router.tsx            the route table (lazy-loads every feature page)
│   └── index.css             global styles
├── core/                     no page content, no knowledge of features
│   ├── design-system/        Reveal, Section, baseContainer, toolTipWrapper, routeLoadingBar
│   ├── seo/                  Seo
│   └── theme/                theme and language context
├── shared/                   used by more than one feature
│   └── layouts/
│       ├── site-chrome/      Navbar, Footer (home, about, blog)
│       ├── page-chrome/      header, footer (project and legal pages)
│       ├── project-page/     projectPageLayout
│       └── legal-page/       legalPageLayout
└── features/                 isolated page areas
    ├── home/                 homePage, data.ts, components/
    ├── about/
    ├── blog/                 pages/, components/ (post layout, demos, prose)
    ├── not-found/
    └── projects/
        ├── typal/            each app is its own feature:
        ├── omi-clash/        its page, privacy policy, terms, support
        ├── theravada-chants/
        ├── drift-and-direct/
        ├── deckdrill/
        └── dammapadaya/
```

A feature is `src/features/<name>`, or `src/features/projects/<name>` for app pages.

## Rules

| Layer | May import |
|---|---|
| `app` | anything |
| `features/*` | `core`, `shared`, and its own feature only |
| `shared` | `core`, `shared` |
| `core` | `core` only |

Features link to each other by URL (`<Link to="/projects/typal">`), never by importing each other's code.

`npm run build` runs `scripts/check-boundaries.mjs` first and fails on any violation. Run it on its own with `npm run check:boundaries`.

## Imports

Cross-layer imports use aliases; imports within the same feature (or the same core/shared module) stay relative.

```ts
import Seo from '@core/seo/Seo';
import LegalPageLayout from '@shared/layouts/legal-page/legalPageLayout';
import Hero from './components/Hero';
```

Aliases are defined in both `vite.config.ts` (`resolve.alias`) and `tsconfig.app.json` (`paths`); keep them in sync.

## Where new code goes

- **A new app page:** `src/features/projects/<app>/` with its page, privacy policy and terms. Add the routes to `src/app/router.tsx`, the project card to `src/features/home/data.ts`, and the prerendered paths to `scripts/postbuild.mjs` and `public/sitemap.xml`.
- **A component only one feature uses:** inside that feature.
- **A layout or piece of page chrome two or more features use:** `src/shared/layouts/`.
- **A generic building block with no page content:** `src/core/design-system/`.
