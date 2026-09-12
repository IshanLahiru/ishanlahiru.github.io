import React from 'react';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import { H2, DocLink, CodeBlock } from '../../components/blog/prose';
import Mermaid from '../../components/blog/Mermaid';

const turboJsonCode = `{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "lint": {},
    "test": {
      "dependsOn": ["^build"]
    },
    "deploy": {
      "dependsOn": ["build", "lint", "test"]
    }
  }
}`;

const taskGraph = `graph LR
  lint[lint] --> deploy[deploy]
  build[build] --> deploy
  test[test] --> deploy
  build --> test`;

const cacheFlow = `sequenceDiagram
  participant Dev as Developer
  participant Turbo as Turborepo
  participant Cache as Remote Cache
  Dev->>Turbo: turbo run build
  Turbo->>Cache: hash inputs, check cache
  alt cache hit
    Cache-->>Turbo: cached output
    Turbo-->>Dev: restore instantly
  else cache miss
    Turbo->>Turbo: run task
    Turbo->>Cache: upload output
    Turbo-->>Dev: build result
  end`;

const MonorepoManagementPage: React.FC = () => (
  <BlogPostLayout
    title="Monorepo Management with Turbo"
    eyebrow="Tooling"
    date="November 20, 2024"
    readTime="4 min read"
  >
    <p>
      Once a codebase has more than one deployable package — an app, a shared UI library, a couple
      of internal tools — running <code>lint</code>, <code>test</code>, and <code>build</code>{' '}
      across all of them by hand stops scaling. <DocLink href="https://turbo.build/repo/docs">Turborepo</DocLink>{' '}
      manages that by turning your package scripts into a dependency graph and caching every task
      it runs, locally and remotely.
    </p>

    <H2>Task Pipelines</H2>
    <p>
      A <code>turbo.json</code> file declares tasks and what each one depends on. <code>^build</code>{' '}
      means "build every package this one depends on first":
    </p>
    <CodeBlock language="json" code={turboJsonCode} />
    <p>Turborepo turns that config into a task graph and only runs what's actually affected:</p>
    <Mermaid id="task-graph" chart={taskGraph} />

    <H2>Why It's Fast: Caching</H2>
    <p>
      Every task run is fingerprinted from its inputs (source files, env vars, the task's own
      config). If nothing relevant changed, Turborepo replays the cached output instead of
      re-running the task — locally, or from a{' '}
      <DocLink href="https://turbo.build/repo/docs/core-concepts/remote-caching">remote cache</DocLink>{' '}
      shared across your team and CI:
    </p>
    <Mermaid id="cache-flow" chart={cacheFlow} />

    <H2>Workspaces</H2>
    <p>
      Turborepo sits on top of your package manager's native workspaces (npm, pnpm, or Yarn) — it
      doesn't reinvent dependency installation, only task orchestration. That keeps a monorepo
      feeling like a set of ordinary packages that happen to know about each other, rather than a
      new tool you have to learn to install anything.
    </p>
  </BlogPostLayout>
);

export default MonorepoManagementPage;
