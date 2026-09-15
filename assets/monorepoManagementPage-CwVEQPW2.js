const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-CV7YUZ23.js","assets/index-DI-5G5Yf.js","assets/index-BQeKKZnS.css"])))=>i.map(i=>d[i]);
import{r as i,_ as u,j as e}from"./index-DI-5G5Yf.js";import{B as b,D as l,H as t,C as m}from"./prose-C7WciTjH.js";import"./Footer-gEvAv5w3.js";import"./toolTipWrapper-1G5ODIUT.js";import"./createLucideIcon-xqyzwYD-.js";import"./index-DwlAsIea.js";import"./arrow-left-BFKGYQ9E.js";import"./clock-BDuEOW38.js";let d=!1;const c=({chart:r,id:o})=>{const[n,p]=i.useState("");return i.useEffect(()=>{let s=!1;return u(()=>import("./mermaid.core-CV7YUZ23.js").then(a=>a.bz),__vite__mapDeps([0,1,2])).then(async({default:a})=>{d||(a.initialize({startOnLoad:!1,theme:"dark",themeVariables:{background:"#000000",primaryColor:"#18181b",primaryTextColor:"#f4f4f5",primaryBorderColor:"#f97316",lineColor:"#71717a",secondaryColor:"#27272a",tertiaryColor:"#18181b"}}),d=!0);const{svg:h}=await a.render(o,r);s||p(h)}),()=>{s=!0}},[r,o]),e.jsxs("div",{className:"overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900 p-6",children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:n}}),!n&&e.jsx("p",{className:"text-xs text-slate-500",children:"Rendering diagram…"})]})},g=`{
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
}`,y=`graph LR
  lint[lint] --> deploy[deploy]
  build[build] --> deploy
  test[test] --> deploy
  build --> test`,f=`sequenceDiagram
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
  end`,D=()=>e.jsxs(b,{title:"Monorepo Management with Turbo",eyebrow:"Tooling",date:"November 20, 2024",readTime:"4 min read",children:[e.jsxs("p",{children:["Once a codebase has more than one deployable package — an app, a shared UI library, a couple of internal tools — running ",e.jsx("code",{children:"lint"}),", ",e.jsx("code",{children:"test"}),", and ",e.jsx("code",{children:"build"})," ","across all of them by hand stops scaling. ",e.jsx(l,{href:"https://turbo.build/repo/docs",children:"Turborepo"})," ","manages that by turning your package scripts into a dependency graph and caching every task it runs, locally and remotely."]}),e.jsx(t,{children:"Task Pipelines"}),e.jsxs("p",{children:["A ",e.jsx("code",{children:"turbo.json"})," file declares tasks and what each one depends on. ",e.jsx("code",{children:"^build"})," ",'means "build every package this one depends on first":']}),e.jsx(m,{language:"json",code:g}),e.jsx("p",{children:"Turborepo turns that config into a task graph and only runs what's actually affected:"}),e.jsx(c,{id:"task-graph",chart:y}),e.jsx(t,{children:"Why It's Fast: Caching"}),e.jsxs("p",{children:["Every task run is fingerprinted from its inputs (source files, env vars, the task's own config). If nothing relevant changed, Turborepo replays the cached output instead of re-running the task — locally, or from a"," ",e.jsx(l,{href:"https://turbo.build/repo/docs/core-concepts/remote-caching",children:"remote cache"})," ","shared across your team and CI:"]}),e.jsx(c,{id:"cache-flow",chart:f}),e.jsx(t,{children:"Workspaces"}),e.jsx("p",{children:"Turborepo sits on top of your package manager's native workspaces (npm, pnpm, or Yarn) — it doesn't reinvent dependency installation, only task orchestration. That keeps a monorepo feeling like a set of ordinary packages that happen to know about each other, rather than a new tool you have to learn to install anything."})]});export{D as default};
