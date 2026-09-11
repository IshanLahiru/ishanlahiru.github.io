import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../components/base-container/baseContainer';
import { CornerMarks } from '../../components/decorative/decorativeSvgs';
import NavigationBar from '../../components/header/header';
import ToolTipWrapper from '../../components/tool-tip-wrapper/toolTipWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faThreads,
  faTiktok,
  faWeixin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import Footer from '../../components/footer/footer';
import sriLanka from '@svg-maps/sri-lanka';

const projects = [
  {
    id: 6,
    title: 'Dammapadaya',
    description:
      'A daily-reading companion for the Dhammapada — all 423 verses across 26 chapters, in Pāli with English renderings, browsable by chapter or searchable by wording and theme.',
    techStack: ['Flutter', 'Firebase', 'Cloud Firestore'],
    internalLink: '/projects/dammapadaya',
    logo: '/projects/dammapadaya/icon.png'
  },
  {
    id: 5,
    title: 'Theravāda Chants',
    description:
      'A Pali chanting companion — chants with English translations, precept-level reading lists, a guided ceremony walkthrough, and a Pali pronunciation guide.',
    techStack: ['Flutter', 'Firebase', 'Cloud Firestore', 'Cloud Storage', 'RevenueCat'],
    internalLink: '/projects/theravada-chants',
    logo: '/projects/theravada-chants/icon.png'
  },
  {
    id: 1,
    title: 'Drift & Direct',
    description:
      'A swiping-mechanism based mobile focus game, designed to help players relax and stay in the moment.',
    techStack: [
      'Flutter',
      'Bloc',
      'Firebase',
      'Firebase Functions',
      'Firebase Auth',
      'Game Center',
      'RevenueCat'
    ],
    internalLink: '/projects/drift-and-direct',
    logo: '/projects/drift-and-direct/icon.png',
    visual: 'drift'
  },
  {
    id: 4,
    title: 'Omi Clash',
    description:
      'A 4-player trick-taking card game (Omi) with friend chat, live table voice chat, and country/global leaderboards.',
    techStack: ['Flutter', 'Flame', 'Firebase', 'Cloud Functions', 'WebRTC', 'RevenueCat'],
    internalLink: '/projects/omi-clash',
    logo: '/projects/omi-clash/icon.png'
  },
  {
    id: 2,
    title: 'Election Results Dashboard',
    description:
      'A dynamic dashboard to display election results using SVG maps and detailed statistics.',
    techStack: ['JavaScript', 'SVG', 'React'],
    link: 'https://ishanlahiru.github.io/election-map-site/',
    visual: 'map'
  },
  {
    id: 3,
    title: 'DeckDrill',
    description: 'A card counting and training simulator application.',
    techStack: ['Flutter', 'Riverpod'],
    internalLink: '/projects/deckdrill',
    logo: '/projects/deckdrill/icon.png',
    visual: 'cards'
  }
];

const DriftWave = () => (
  <div className="relative h-12 w-16 overflow-hidden border border-np-ink dark:border-np-ink-night">
    <svg
      viewBox="0 0 160 48"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-[160px] animate-wave"
    >
      <path
        d="M0 30 Q10 20 20 30 T40 30 T60 30 T80 30 L80 48 L0 48 Z"
        className="fill-np-accent/30 dark:fill-np-accent-night/30"
      />
      <path
        d="M80 30 Q90 20 100 30 T120 30 T140 30 T160 30 L160 48 L80 48 Z"
        className="fill-np-accent/30 dark:fill-np-accent-night/30"
      />
    </svg>
    <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 animate-bob rounded-full bg-np-accent dark:bg-np-accent-night" />
  </div>
);

const districtResults = (sriLanka.locations as { id: string; name: string; path: string }[]).map(
  (loc, index) => ({
    id: loc.id,
    name: loc.name,
    path: loc.path,
    result: `${index % 2 === 0 ? 'Party A' : 'Party B'} ${55 + ((index * 7) % 20)}%`
  })
);

const MiniMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = districtResults.find((d) => d.id === hovered);

  return (
    <div className="relative h-12 w-[27px]">
      <svg viewBox={sriLanka.viewBox} className="h-12 w-[27px]">
        {districtResults.map((d) => (
          <path
            key={d.id}
            d={d.path}
            onMouseEnter={() => setHovered(d.id)}
            onMouseLeave={() => setHovered(null)}
            strokeWidth={2}
            className={`cursor-pointer stroke-np-paper transition-colors duration-150 dark:stroke-np-paper-night ${
              hovered === d.id
                ? 'fill-np-accent dark:fill-np-accent-night'
                : 'fill-np-400 dark:fill-np-400-night'
            }`}
          />
        ))}
      </svg>
      {active && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap border border-np-ink bg-np-paper px-1.5 py-0.5 font-mono text-[9px] text-np-ink dark:border-np-ink-night dark:bg-np-paper-night dark:text-np-ink-night">
          {active.name} &middot; {active.result}
        </div>
      )}
    </div>
  );
};

const CardFan = () => (
  <div className="group/cards flex h-12 items-center">
    <div className="flex h-9 w-6 -rotate-6 flex-col items-center justify-between border border-np-ink bg-white px-0.5 py-0.5 font-mono text-[8px] font-bold text-black transition-transform duration-300 group-hover/cards:-translate-y-1 dark:border-np-ink-night">
      <span>A</span>
      <span className="text-xs">&spades;</span>
    </div>
    <div className="z-10 -ml-3 flex h-9 w-6 flex-col items-center justify-between border border-np-ink bg-white px-0.5 py-0.5 font-mono text-[8px] font-bold text-np-accent transition-transform duration-300 group-hover/cards:-translate-y-1.5 dark:border-np-ink-night">
      <span>10</span>
      <span className="text-xs">&hearts;</span>
    </div>
    <div className="-ml-3 flex h-9 w-6 rotate-6 flex-col items-center justify-between border border-np-ink bg-white px-0.5 py-0.5 font-mono text-[8px] font-bold text-np-accent transition-transform duration-300 group-hover/cards:-translate-y-1 dark:border-np-ink-night">
      <span>K</span>
      <span className="text-xs">&diams;</span>
    </div>
  </div>
);

const blogs = [
  {
    id: 1,
    title: 'Understanding React DnD',
    description:
      'A deep dive into implementing drag-and-drop functionality in React using React DnD.',
    date: 'January 10, 2025',
    link: '#'
  },
  {
    id: 2,
    title: 'SVG Map Manipulation with React',
    description: 'Learn how to dynamically manipulate SVG maps for interactive data visualization.',
    date: 'December 15, 2024',
    link: '#'
  },
  {
    id: 3,
    title: 'Monorepo Management with Turbo',
    description: 'Best practices for managing multiple projects in a monorepo using Turbo.',
    date: 'November 20, 2024',
    link: '#'
  }
];

const SectionHeader = ({ label }: { label: string }) => (
  <div className="mb-8 mt-16 border-t-4 border-np-ink pt-4 dark:border-np-ink-night">
    <span className="font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
      {label}
    </span>
  </div>
);

const ProjectCard = ({
  title,
  description,
  techStack,
  link,
  internalLink,
  logo,
  delay,
  visual
}: any) => {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="group flex animate-fade-in-up flex-col justify-between border border-np-ink p-6 opacity-0 transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#111111] dark:border-np-ink-night dark:hover:shadow-[4px_4px_0_0_#F2F0EA] sm:p-8"
    >
      <div>
        <div className="flex items-center gap-4">
          {logo && (
            <picture>
              <source srcSet={logo.replace(/\.png$/, '.webp')} type="image/webp" />
              <img
                src={logo}
                alt={`${title} logo`}
                className="h-12 w-12 border border-np-ink object-cover transition-all duration-300 dark:border-np-ink-night"
                loading="lazy"
              />
            </picture>
          )}
          <h3 className="font-serif text-xl font-bold text-np-ink dark:text-np-ink-night">{title}</h3>
          <div className="ml-auto">
            {visual === 'drift' && <DriftWave />}
            {visual === 'map' && <MiniMap />}
            {visual === 'cards' && <CardFan />}
          </div>
        </div>
        <p className="my-4 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="border border-np-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-np-ink dark:border-np-ink-night dark:text-np-ink-night"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {internalLink ? (
        <Link
          to={internalLink}
          className="font-mono text-xs uppercase tracking-widest text-np-ink transition-colors group-hover:text-np-accent dark:text-np-ink-night dark:group-hover:text-np-accent-night"
        >
          &rarr; View Details
        </Link>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-np-ink transition-colors group-hover:text-np-accent dark:text-np-ink-night dark:group-hover:text-np-accent-night"
        >
          &rarr; View Project
        </a>
      )}
    </div>
  );
};

const BlogCard = ({ title, description, date, link }: any) => {
  return (
    <div className="flex flex-col justify-between border border-np-ink p-5 transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#111111] dark:border-np-ink-night dark:hover:shadow-[4px_4px_0_0_#F2F0EA]">
      <div>
        <h3 className="font-serif text-base font-bold text-np-ink dark:text-np-ink-night">{title}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-np-500 dark:text-np-500-night">
          {date}
        </p>
        <p className="my-3 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
          {description}
        </p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs uppercase tracking-widest text-np-ink hover:text-np-accent dark:text-np-ink-night dark:hover:text-np-accent-night"
      >
        &rarr; Read More
      </a>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="pt-10 text-start">
        <div
          style={{ animationDelay: '0ms' }}
          className="flex animate-fade-in-up flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-np-500 opacity-0 dark:text-np-500-night"
        >
          <ToolTipWrapper
            tooltipText="A technophile is a person who has a strong enthusiasm for or interest in technology, particularly new or emerging technologies. They are often early adopters of gadgets, software, or innovations and enjoy exploring how technology can improve daily life or solve problems."
            tooltipWidth="min(320px, 80vw)"
            direction="bottom"
          >
            <span className="cursor-default border-b border-dotted border-np-500 dark:border-np-500-night">
              Technophile
            </span>
          </ToolTipWrapper>
          <span>&middot;</span>
          <span>Sri Lanka</span>
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end">
          <div
            style={{ animationDelay: '100ms' }}
            className="relative w-fit flex-none animate-fade-in-up opacity-0"
          >
            <CornerMarks className="pointer-events-none absolute -right-6 -top-6 -z-10 h-16 w-16 text-np-accent/30 dark:text-np-accent-night/30 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            <img
              src="https://avatars.githubusercontent.com/u/50785933?v=4"
              alt="Ishan Lahiru"
              className="h-28 w-28 border border-np-ink object-cover transition-all duration-300 dark:border-np-ink-night sm:h-40 sm:w-40 lg:h-52 lg:w-52"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h1
              style={{ animationDelay: '200ms' }}
              className="animate-fade-in-up font-serif text-4xl font-black leading-[0.95] tracking-tighter text-np-ink opacity-0 dark:text-np-ink-night sm:text-6xl lg:text-7xl"
            >
              Still learning, one project at a time.
            </h1>

            <p
              style={{ animationDelay: '250ms' }}
              className="mt-6 max-w-xl animate-fade-in-up font-body text-base leading-relaxed text-np-600 opacity-0 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-np-ink dark:text-np-400-night dark:first-letter:text-np-ink-night"
            >
              Based in Kalutara District, Sri Lanka, building mobile apps and backend systems
              &mdash; most recently a "Stateful AI" platform giving conversational agents an
              OS-inspired memory architecture.
            </p>
          </div>
        </div>

        <div
          style={{ animationDelay: '300ms' }}
          className="mt-8 flex animate-fade-in-up flex-wrap items-center gap-6 opacity-0"
        >
          <Link
            to="/about"
            className="min-h-[44px] content-center border border-np-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-np-ink transition-colors hover:bg-np-ink hover:text-np-paper dark:border-np-ink-night dark:text-np-ink-night dark:hover:bg-np-ink-night dark:hover:text-np-paper-night"
          >
            About Ishan Lahiru
          </Link>

          <a
            href="/cv.pdf"
            download
            className="min-h-[44px] content-center border border-np-ink bg-np-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-np-paper transition-colors hover:bg-np-paper hover:text-np-ink dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-paper-night dark:hover:text-np-ink-night"
          >
            &darr; Download CV
          </a>

          <div className="flex flex-wrap items-center gap-2 text-np-ink dark:text-np-ink-night">
            {[faGithub, faWeixin, faFacebook, faInstagram, faTiktok, faXTwitter, faLinkedin, faThreads].map(
              (icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center border border-np-ink transition-colors hover:bg-np-ink hover:text-np-paper dark:border-np-ink-night dark:hover:bg-np-ink-night dark:hover:text-np-paper-night"
                >
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </span>
              )
            )}
          </div>
        </div>
      </main>

      <section>
        <SectionHeader label="Projects" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 120} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="Blogs" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      <Footer />
    </BaseContainer>
  );
};

export default HomePage;
