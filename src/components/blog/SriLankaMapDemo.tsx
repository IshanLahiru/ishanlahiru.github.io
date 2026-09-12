import React, { useState } from 'react';
import sriLanka from '@svg-maps/sri-lanka';

type Location = { id: string; name: string; path: string };

const results = (sriLanka.locations as Location[]).map((loc, index) => ({
  ...loc,
  party: index % 2 === 0 ? 'Party A' : 'Party B',
  share: 50 + ((index * 7) % 40)
}));

const SriLankaMapDemo: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = results.find((d) => d.id === hovered);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <div className="relative w-full max-w-[220px]">
        <svg viewBox={sriLanka.viewBox} className="w-full">
          {results.map((district) => (
            <path
              key={district.id}
              d={district.path}
              onMouseEnter={() => setHovered(district.id)}
              onMouseLeave={() => setHovered(null)}
              strokeWidth={1.5}
              className={`cursor-pointer stroke-black transition-colors duration-150 ${
                hovered === district.id
                  ? district.party === 'Party A'
                    ? 'fill-orange-500'
                    : 'fill-lime-300'
                  : 'fill-slate-600'
              }`}
            />
          ))}
        </svg>
      </div>

      <div className="min-w-[180px] flex-1 rounded-xl border border-white/10 bg-zinc-900 p-4">
        {active ? (
          <>
            <p className="text-sm font-bold text-white">{active.name}</p>
            <p className={`mt-1 text-sm ${active.party === 'Party A' ? 'text-orange-400' : 'text-lime-300'}`}>
              {active.party} &middot; {active.share}%
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-500">Hover a district to see its result.</p>
        )}
      </div>
    </div>
  );
};

export default SriLankaMapDemo;
