import React from 'react';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import { H2, DocLink, CodeBlock, DemoFrame } from '../../components/blog/prose';
import DndDemo from '../../components/blog/DndDemo';

const setupCode = `npm install react-dnd react-dnd-html5-backend

# wrap the app once, near the root
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

<DndProvider backend={HTML5Backend}>
  <App />
</DndProvider>`;

const dragCode = `import { useDrag } from 'react-dnd';

function Card({ id, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.3 : 1 }}>
      {text}
    </div>
  );
}`;

const dropCode = `import { useDrop } from 'react-dnd';

function Column({ status, onDropCard, children }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => onDropCard(item.id, status),
    collect: (monitor) => ({ isOver: monitor.isOver() })
  }));

  return (
    <div ref={drop} className={isOver ? 'is-over' : ''}>
      {children}
    </div>
  );
}`;

const UnderstandingReactDndPage: React.FC = () => (
  <BlogPostLayout
    title="Understanding React DnD"
    eyebrow="Frontend"
    date="January 10, 2025"
    readTime="6 min read"
    description="Official docs, setup, code, and a live drag-and-drop demo built with React DnD."
    path="/blog/understanding-react-dnd"
  >
    <p>
      Drag-and-drop feels simple to use and surprisingly fiddly to build: you need to track what's
      being dragged, which target it's hovering over, and what should happen when it's dropped —
      all while keeping the DOM and your component state in sync.{' '}
      <DocLink href="https://react-dnd.github.io/react-dnd/about">React DnD</DocLink> solves this by
      splitting drag-and-drop into two hooks — <code>useDrag</code> for the thing being dragged, and{' '}
      <code>useDrop</code> for the thing it can be dropped on — connected through a backend that
      translates real browser events (or touch events) into a consistent drag-and-drop protocol.
    </p>

    <H2>Setup</H2>
    <p>
      The <DocLink href="https://react-dnd.github.io/react-dnd/docs/backends/html5">HTML5 backend</DocLink>{' '}
      is the standard choice for desktop browsers. Everything using drag-and-drop needs to sit
      inside a single <code>DndProvider</code>:
    </p>
    <CodeBlock language="bash + tsx" code={setupCode} />

    <H2>Making Something Draggable</H2>
    <p>
      <code>useDrag</code> returns a connector function you attach to a DOM node via <code>ref</code>.
      The <code>item</code> is the payload that will be handed to whatever it gets dropped on:
    </p>
    <CodeBlock language="tsx" code={dragCode} />

    <H2>Making a Drop Target</H2>
    <p>
      <code>useDrop</code> mirrors this on the receiving end — it declares which <code>type</code> of
      item it accepts and what to do when one lands on it:
    </p>
    <CodeBlock language="tsx" code={dropCode} />

    <H2>Live Demo</H2>
    <p>
      A small board built with exactly the pattern above — drag a card from "To Do" into "Done".
    </p>
    <DemoFrame label="Try it — React DnD board">
      <DndDemo />
    </DemoFrame>
  </BlogPostLayout>
);

export default UnderstandingReactDndPage;
