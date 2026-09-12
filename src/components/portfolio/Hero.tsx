import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import TechWatermark from './TechWatermark';
import DecryptedText from './DecryptedText';
import { stats } from './data';

const stackIcons = ['/tools/flutter.svg', '/tools/typescript.svg', '/tools/firebase.svg', '/tools/nestjs.svg'];
const systemIcons = ['/tools/supabase.svg', '/tools/cloudflare.svg', '/tools/figma.svg', '/tools/rive.svg'];

const Hero: React.FC = () => (
  <div>
    <Reveal>
      <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
        <span className="block text-white">Learner</span>
        <span className="block text-zinc-800">&amp; Creator</span>
      </h1>

      <p className="mt-6 h-36 max-w-lg overflow-hidden text-base leading-relaxed text-slate-400 sm:text-lg">
        <DecryptedText
          text="Based in Kalutara District, Sri Lanka, building mobile apps and backend systems — most recently "
          animateOn="view"
          sequential
          speed={20}
          useOriginalCharsOnly
          revealDirection="start"
          encryptedClassName="font-mono text-slate-600"
          style={{ display: 'inline', whiteSpace: 'normal' }}
        />
        <Reveal delay={2100} className="inline-block align-middle">
          <Link
            to="/projects/omi-clash"
            state={{ from: 'portfolio' }}
            className="group/omi relative -mt-1 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-2.5 align-middle font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-300/50 hover:bg-white/10"
          >
            <img
              src="/projects/omi-clash/icon.png"
              alt="Omi Clash icon"
              className="h-5 w-5 rounded-[30%] object-cover transition-transform duration-200 group-hover/omi:rotate-6 group-hover/omi:scale-110"
            />
            Omi Clash
          </Link>
        </Reveal>
        <DecryptedText
          text=", a multiplayer card game packed with friend chat, live table voice chat, and global leaderboards."
          animateOn="view"
          sequential
          speed={20}
          useOriginalCharsOnly
          revealDirection="start"
          encryptedClassName="font-mono text-slate-600"
          style={{ display: 'inline', whiteSpace: 'normal' }}
        />
      </p>

      <Link
        to="/#contact"
        className="group relative mt-6 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-lime-300/30 bg-gradient-to-r from-lime-300/10 via-orange-500/10 to-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-lime-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300/60 hover:shadow-[0_0_24px_-4px_rgba(163,230,53,0.6)] active:scale-95"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-300" />
        </span>
        Open to Work
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Reveal>

    <Reveal delay={150}>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
            <p className="mt-1 max-w-[9rem] text-xs uppercase leading-snug text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href="/#tools"
          className="group relative flex min-h-[9rem] flex-col justify-between overflow-hidden rounded-2xl bg-orange-600 p-5 text-black shadow-lg shadow-orange-950/0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-950/40 active:scale-[0.98]"
        >
          <TechWatermark icons={stackIcons} />
          <Layers className="relative h-6 w-6 text-black transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
          <span className="relative text-lg font-extrabold uppercase leading-tight">
            Flutter, TypeScript, Firebase, NestJS
          </span>
          <ArrowUpRight className="absolute bottom-4 right-4 h-8 w-8 rounded-full border border-black/20 bg-black/0 p-1.5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black/10" />
        </a>
        <a
          href="/#experience"
          className="group relative flex min-h-[9rem] flex-col justify-between overflow-hidden rounded-2xl bg-lime-300 p-5 text-black shadow-lg shadow-lime-950/0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-lime-950/30 active:scale-[0.98]"
        >
          <TechWatermark icons={systemIcons} />
          <Wrench className="relative h-6 w-6 text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="relative text-lg font-extrabold uppercase leading-tight">
            Mobile Apps &amp; Backend Systems
          </span>
          <ArrowUpRight className="absolute bottom-4 right-4 h-8 w-8 rounded-full border border-black/20 bg-black/0 p-1.5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black/10" />
        </a>
      </div>
    </Reveal>
  </div>
);

export default Hero;
