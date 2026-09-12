import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';
import { projects, type Project, type ProjectStatus } from './data';

const tileTints = ['from-orange-600/40 via-black to-black', 'from-lime-400/30 via-black to-black'];

const dotColors: Record<ProjectStatus, string> = {
  live: 'bg-emerald-400',
  testing: 'bg-amber-400',
  development: 'bg-slate-400'
};

const textColors: Record<ProjectStatus, string> = {
  live: 'text-emerald-400',
  testing: 'text-amber-400',
  development: 'text-slate-400'
};

const ProjectRow: React.FC<Project & { index: number }> = ({
  title,
  category,
  badges,
  description,
  internalLink,
  link,
  logo,
  appStoreUrl,
  index
}) => {
  const CardInner = (
    <>
      <div
        className={`flex aspect-square w-20 flex-none items-center justify-center overflow-hidden rounded-[22%] border border-white/10 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105 sm:w-28 ${tileTints[index % tileTints.length]}`}
      >
        {logo ? (
          <img src={logo} alt={`${title} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-2xl font-extrabold uppercase text-white/20">{title[0]}</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-sm text-slate-500">{category}</span>
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 text-xs font-medium ${textColors[badge.status]}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${dotColors[badge.status]}`} />
              {badge.label}
            </span>
          ))}
        </div>
        <p className="mt-2 hidden max-w-md text-sm leading-relaxed text-slate-400 sm:block">{description}</p>
      </div>

      <ArrowUpRight className="h-6 w-6 flex-none text-slate-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-500" />
    </>
  );

  const linkClass = 'group flex flex-1 items-center gap-5 sm:gap-8';

  return (
    <div className={`py-6 ${index === 0 ? '' : 'border-t border-white/10'}`}>
      {internalLink ? (
        <Link to={internalLink} state={{ from: 'portfolio' }} className={linkClass}>
          {CardInner}
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {CardInner}
        </a>
      )}

      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[5.75rem] mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-orange-500/60 hover:text-white sm:ml-[8.5rem]"
        >
          <FontAwesomeIcon icon={faApple} className="h-3.5 w-3.5" />
          View on the App Store
        </a>
      )}
    </div>
  );
};

const Projects: React.FC = () => (
  <div>
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">Recent Work</p>
      <h2 className="mt-3 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
        <span className="block text-white">Recent</span>
        <span className="block text-zinc-800">Projects</span>
      </h2>
    </Reveal>

    <div className="mt-10">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 80}>
          <ProjectRow {...project} index={index} />
        </Reveal>
      ))}
    </div>
  </div>
);

export default Projects;
