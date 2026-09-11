import React from 'react';
import { Section, SectionHeading } from './Section';
import Reveal from './Reveal';
import { tools } from './data';

const Tools: React.FC = () => (
  <Section id="tools">
    <SectionHeading eyebrow="Tech Stack" title="Tools I Reach For" />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {tools.map((tool, index) => (
        <Reveal key={tool.name} delay={index * 60}>
          <div className="group rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.03]">
            <div className="flex aspect-square w-12 items-center justify-center overflow-hidden rounded-[22%] bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img src={tool.logo} alt={`${tool.name} logo`} className="h-full w-full object-contain" />
            </div>
            <h3 className="mt-4 text-base font-bold text-white">{tool.name}</h3>
            <p className="mt-1 text-xs text-slate-500">{tool.note}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Tools;
