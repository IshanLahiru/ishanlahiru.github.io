import React from 'react';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import { H2, DocLink, CodeBlock, DemoFrame } from '../../components/blog/prose';
import SriLankaMapDemo from '../../components/blog/SriLankaMapDemo';

const mapDataCode = `import sriLanka from '@svg-maps/sri-lanka';

// { viewBox: string, locations: { id, name, path }[] }
sriLanka.locations.map((district) => ({
  ...district,
  result: computeResultFor(district.id)
}));`;

const renderCode = `<svg viewBox={sriLanka.viewBox}>
  {results.map((district) => (
    <path
      key={district.id}
      d={district.path}
      onMouseEnter={() => setHovered(district.id)}
      onMouseLeave={() => setHovered(null)}
      className={hovered === district.id ? 'fill-orange-500' : 'fill-slate-600'}
    />
  ))}
</svg>`;

const SvgMapManipulationPage: React.FC = () => (
  <BlogPostLayout
    title="SVG Map Manipulation with React"
    eyebrow="Data Visualization"
    date="December 15, 2024"
    readTime="5 min read"
  >
    <p>
      My{' '}
      <DocLink href="https://ishanlahiru.github.io/election-map-site/">Election Results Dashboard</DocLink>{' '}
      renders an interactive district map without any charting library — just an SVG, a data file,
      and React state. The trick is that an SVG map is really just a list of <code>&lt;path&gt;</code>{' '}
      elements, one per region, and once you have that, "manipulating the map" is no different from
      manipulating any other list of DOM elements in React.
    </p>

    <H2>Where the Paths Come From</H2>
    <p>
      Rather than tracing Sri Lanka's district borders by hand, the dashboard uses the{' '}
      <DocLink href="https://www.npmjs.com/package/@svg-maps/sri-lanka">@svg-maps/sri-lanka</DocLink>{' '}
      package — part of the open-source{' '}
      <DocLink href="https://github.com/VictorCazanave/svg-maps">svg-maps</DocLink> project. It
      exports a <code>viewBox</code> and a list of <code>locations</code>, each with an{' '}
      <code>id</code>, a display <code>name</code>, and an SVG path string:
    </p>
    <CodeBlock language="tsx" code={mapDataCode} />

    <H2>Turning Data Into Color</H2>
    <p>
      Each district becomes a <code>&lt;path&gt;</code>, and its fill color is just a class name
      driven by component state — the same pattern you'd use to highlight a row in a table:
    </p>
    <CodeBlock language="tsx" code={renderCode} />

    <H2>Live Demo</H2>
    <p>Hover a district below — this is the same map component, wired to mock election data.</p>
    <DemoFrame label="Try it — hover a district">
      <SriLankaMapDemo />
    </DemoFrame>
  </BlogPostLayout>
);

export default SvgMapManipulationPage;
