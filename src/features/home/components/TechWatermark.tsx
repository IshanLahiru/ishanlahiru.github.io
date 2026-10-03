import React from 'react';

const TechWatermark: React.FC<{ icons: string[] }> = ({ icons }) => {
  const pattern = Array.from({ length: 9 }, (_, i) => icons[i % icons.length]);

  return (
    // Faded out before the card's label: the icons are a corner decoration, and the label
    // below them has to stay readable.
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,black_35%,transparent_62%)]">
      <div className="absolute -right-8 -top-10 grid rotate-[22deg] grid-cols-3 gap-5 opacity-40 grayscale transition-[right,top,transform,opacity] duration-500 ease-out group-hover:-right-6 group-hover:top-[-2.25rem] group-hover:rotate-[14deg] group-hover:scale-110 group-hover:opacity-60">
        {pattern.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            className="h-9 w-9 object-contain"
            style={{ transitionDelay: `${i * 20}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechWatermark;
