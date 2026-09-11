import{r as s,j as l}from"./index-VBqZbJnd.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:n,iconNode:p,...c},u)=>s.createElement("svg",{ref:u,...g,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:i("lucide",a),...c},[...p.map(([m,d])=>s.createElement(m,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(e,t)=>{const r=s.forwardRef(({className:o,...a},n)=>s.createElement(x,{ref:n,iconNode:t,className:i(`lucide-${f(e)}`,o),...a}));return r.displayName=`${e}`,r},w=({children:e,tooltipText:t,direction:r="top",tooltipWidth:o="auto"})=>{const a={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"};return l.jsxs("div",{className:"group relative inline-block",children:[e,l.jsx("span",{className:`absolute z-30 rounded-lg bg-np-ink px-2.5 py-1.5 text-start text-xs text-np-paper opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-np-ink-night dark:text-np-paper-night ${a[r]}`,style:{width:o},children:t})]})};export{w as T,b as c};
