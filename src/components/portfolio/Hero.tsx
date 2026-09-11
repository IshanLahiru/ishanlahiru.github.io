import React from 'react';
import { ArrowUpRight, Layers, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import { stats } from './data';

const Hero: React.FC = () => (
  <div>
    <Reveal>
      <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
        <span className="block text-white">Learner</span>
        <span className="block text-zinc-800">&amp; Creator</span>
      </h1>

      <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
        Based in Kalutara District, Sri Lanka, building mobile apps and backend systems — most
        recently a "Stateful AI" platform giving conversational agents an OS-inspired memory
        architecture.
      </p>
    </Reveal>

    <Reveal delay={150}>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
            <p className="mt-1 max-w-[7rem] text-xs uppercase leading-snug text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href="/#tools"
          className="group relative flex min-h-[9rem] flex-col justify-between rounded-2xl bg-orange-600 p-5 text-black transition-transform duration-200 hover:-translate-y-1 active:scale-[0.98]"
        >
          <Layers className="h-6 w-6 text-black" />
          <span className="text-lg font-extrabold uppercase leading-tight">
            Flutter, TypeScript, Firebase, NestJS
          </span>
          <ArrowUpRight className="absolute bottom-4 right-4 h-8 w-8 rounded-full border border-black/20 p-1.5 transition-transform duration-200 group-hover:rotate-45" />
        </a>
        <a
          href="/#experience"
          className="group relative flex min-h-[9rem] flex-col justify-between rounded-2xl bg-lime-300 p-5 text-black transition-transform duration-200 hover:-translate-y-1 active:scale-[0.98]"
        >
          <Wrench className="h-6 w-6 text-black" />
          <span className="text-lg font-extrabold uppercase leading-tight">
            Mobile Apps &amp; Backend Systems
          </span>
          <ArrowUpRight className="absolute bottom-4 right-4 h-8 w-8 rounded-full border border-black/20 p-1.5 transition-transform duration-200 group-hover:rotate-45" />
        </a>
      </div>
    </Reveal>
  </div>
);

export default Hero;
