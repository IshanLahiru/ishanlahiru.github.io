import React from 'react';
import { Section, SectionHeading } from './Section';
import Reveal from './Reveal';
import { experience } from './data';

const Experience: React.FC = () => (
  <Section id="experience" tint>
    <SectionHeading eyebrow="Career" title="Experience" />
    <div className="space-y-0">
      {experience.map((item, index) => (
        <Reveal key={`${item.title}-${item.org}`} delay={index * 80}>
          <div
            className={`relative flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-10 ${
              index === 0 ? '' : 'border-t border-white/10'
            }`}
          >
            <span className="flex-none text-xs font-semibold uppercase tracking-widest text-slate-500 sm:w-40">
              {item.dates}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {item.title}
                <span className="text-slate-600"> — {item.org}</span>
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{item.summary}</p>
            </div>
            <span
              className={`hidden h-2.5 w-2.5 flex-none rounded-full sm:block ${index === 0 ? 'bg-lime-300' : 'bg-slate-700'}`}
            />
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
