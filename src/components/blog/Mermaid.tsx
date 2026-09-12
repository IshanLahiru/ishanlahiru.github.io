import React, { useEffect, useState } from 'react';

let mermaidInitialized = false;

const Mermaid: React.FC<{ chart: string; id: string }> = ({ chart, id }) => {
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    import('mermaid').then(async ({ default: mermaid }) => {
      if (!mermaidInitialized) {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            background: '#000000',
            primaryColor: '#18181b',
            primaryTextColor: '#f4f4f5',
            primaryBorderColor: '#f97316',
            lineColor: '#71717a',
            secondaryColor: '#27272a',
            tertiaryColor: '#18181b'
          }
        });
        mermaidInitialized = true;
      }

      const { svg: rendered } = await mermaid.render(id, chart);
      if (!cancelled) setSvg(rendered);
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      {!svg && <p className="text-xs text-slate-500">Rendering diagram…</p>}
    </div>
  );
};

export default Mermaid;
