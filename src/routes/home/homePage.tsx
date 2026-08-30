import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../components/base-container/baseContainer';
import { CornerMarks, LineArt } from '../../components/decorative/decorativeSvgs';
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
  <div className="relative h-12 w-16 overflow-hidden rounded border border-dm-aluminum dark:border-dm-dark">
    <svg
      viewBox="0 0 160 48"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-[160px] animate-wave"
    >
      <path
        d="M0 30 Q10 20 20 30 T40 30 T60 30 T80 30 L80 48 L0 48 Z"
        className="fill-dm-accent2/30 dark:fill-dm-accent/30"
      />
      <path
        d="M80 30 Q90 20 100 30 T120 30 T140 30 T160 30 L160 48 L80 48 Z"
        className="fill-dm-accent2/30 dark:fill-dm-accent/30"
      />
    </svg>
    <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 animate-bob rounded-full bg-dm-accent2 dark:bg-dm-accent" />
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
            className={`cursor-pointer stroke-dm-enamel transition-colors duration-150 dark:stroke-dm-carbon ${
              hovered === d.id
                ? 'fill-dm-accent2 dark:fill-dm-accent'
                : 'fill-dm-aluminum dark:fill-dm-dark'
            }`}
          />
        ))}
      </svg>
      {active && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded border border-dm-aluminum bg-dm-enamel px-1.5 py-0.5 text-[9px] text-dm-dark shadow-sm dark:border-dm-dark dark:bg-dm-carbon dark:text-dm-cement">
          {active.name} &middot; {active.result}
        </div>
      )}
    </div>
  );
};

const CardFan = () => (
  <div className="group/cards flex h-12 items-center">
    <div className="flex h-9 w-6 -rotate-6 flex-col items-center justify-between rounded-sm border border-dm-aluminum bg-white px-0.5 py-0.5 text-[8px] font-bold text-black shadow-sm transition-transform duration-300 group-hover/cards:-translate-y-1 dark:border-dm-dark">
      <span>A</span>
      <span className="text-xs">&spades;</span>
    </div>
    <div className="z-10 -ml-3 flex h-9 w-6 flex-col items-center justify-between rounded-sm border border-dm-aluminum bg-white px-0.5 py-0.5 text-[8px] font-bold text-red-600 shadow-sm transition-transform duration-300 group-hover/cards:-translate-y-1.5 dark:border-dm-dark">
      <span>10</span>
      <span className="text-xs">&hearts;</span>
    </div>
    <div className="-ml-3 flex h-9 w-6 rotate-6 flex-col items-center justify-between rounded-sm border border-dm-aluminum bg-white px-0.5 py-0.5 text-[8px] font-bold text-red-600 shadow-sm transition-transform duration-300 group-hover/cards:-translate-y-1 dark:border-dm-dark">
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
  <div className="relative mb-8 mt-16 border-t border-dm-aluminum pt-6 dark:border-dm-dark">
    <LineArt className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-10 w-full text-dm-dark/10 dark:text-dm-cement/10" />
    <span className="text-xs uppercase tracking-widest text-dm-ash dark:text-dm-ash">{label}</span>
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
      className="group flex animate-fade-in-up flex-col justify-between border border-dm-aluminum p-8 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-dm-accent2 dark:border-dm-dark dark:hover:border-dm-accent"
    >
      <div>
        <div className="flex items-center gap-4">
          {logo && (
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-12 w-12 rounded-md border border-dm-aluminum dark:border-dm-dark"
            />
          )}
          <h3 className="text-xl font-bold text-dm-dark dark:text-dm-cement">{title}</h3>
          <div className="ml-auto">
            {visual === 'drift' && <DriftWave />}
            {visual === 'map' && <MiniMap />}
            {visual === 'cards' && <CardFan />}
          </div>
        </div>
        <p className="my-4 text-base text-dm-ash dark:text-dm-ash">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="border border-dm-aluminum px-3 py-1 text-xs uppercase tracking-wide text-dm-ash dark:border-dm-dark dark:text-dm-ash"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {internalLink ? (
        <Link
          to={internalLink}
          className="text-base text-dm-dark transition-colors group-hover:text-dm-accent2 dark:text-dm-cement dark:group-hover:text-dm-accent"
        >
          &gt; View Details
        </Link>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-dm-dark transition-colors group-hover:text-dm-accent2 dark:text-dm-cement dark:group-hover:text-dm-accent"
        >
          &gt; View Project
        </a>
      )}
    </div>
  );
};

const BlogCard = ({ title, description, date, link }: any) => {
  return (
    <div className="flex flex-col justify-between border border-dm-aluminum p-5 transition-all duration-300 hover:-translate-y-1 hover:border-dm-accent2 dark:border-dm-dark dark:hover:border-dm-accent">
      <div>
        <h3 className="text-base font-bold text-dm-dark dark:text-dm-cement">{title}</h3>
        <p className="mt-1 text-xs text-dm-ash dark:text-dm-ash">{date}</p>
        <p className="my-3 text-sm text-dm-ash dark:text-dm-ash">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-dm-dark transition-colors hover:text-dm-accent2 dark:text-dm-cement dark:hover:text-dm-accent"
      >
        &gt; Read More
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
          className="flex animate-fade-in-up flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-dm-ash opacity-0 dark:text-dm-ash"
        >
          <ToolTipWrapper
            tooltipText="A technophile is a person who has a strong enthusiasm for or interest in technology, particularly new or emerging technologies. They are often early adopters of gadgets, software, or innovations and enjoy exploring how technology can improve daily life or solve problems."
            tooltipWidth="320px"
            direction="bottom"
          >
            <span className="cursor-default border-b border-dotted border-dm-ash dark:border-dm-ash">
              Technophile
            </span>
          </ToolTipWrapper>
          <span>&middot;</span>
          <span>Sri Lanka</span>
        </div>

        <div
          style={{ animationDelay: '100ms' }}
          className="relative mt-6 w-fit animate-fade-in-up opacity-0"
        >
          <CornerMarks className="pointer-events-none absolute -right-6 -top-6 -z-10 h-16 w-16 text-dm-accent2/30 dark:text-dm-accent/30" />
          <img
            src="https://avatars.githubusercontent.com/u/50785933?v=4"
            alt="Ishan Lahiru"
            className="h-24 w-24 rounded-md border border-dm-aluminum object-cover dark:border-dm-dark"
          />
        </div>

        <p
          style={{ animationDelay: '200ms' }}
          className="mt-4 animate-fade-in-up text-base font-bold text-dm-dark opacity-0 dark:text-dm-cement"
        >
          A person who understands code.
        </p>

        <div
          style={{ animationDelay: '300ms' }}
          className="mt-6 flex animate-fade-in-up flex-wrap items-center gap-6 opacity-0"
        >
          <Link
            to="/about"
            className="border border-dm-aluminum px-4 py-2 text-xs uppercase tracking-widest text-dm-dark transition-colors hover:border-dm-accent2 hover:text-dm-accent2 dark:border-dm-dark dark:text-dm-cement dark:hover:border-dm-accent dark:hover:text-dm-accent"
          >
            About Ishan Lahiru
          </Link>

          <div className="flex items-center gap-4 text-lg text-dm-ash dark:text-dm-cement">
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faGithub}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faWeixin}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faTiktok}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faXTwitter}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="cursor-pointer transition-all duration-300 hover:scale-125 hover:text-dm-accent2 dark:hover:text-dm-accent"
              icon={faThreads}
            />
          </div>
        </div>
      </main>

      <section>
        <SectionHeader label="Projects" />
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 120} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="Blogs" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
