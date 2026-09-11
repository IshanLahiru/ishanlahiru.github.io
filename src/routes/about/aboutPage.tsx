import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../components/base-container/baseContainer';
import { CornerMarks } from '../../components/decorative/decorativeSvgs';
import NavigationBar from '../../components/header/header';
import Footer from '../../components/footer/footer';

const experience = [
  {
    title: 'Associate Software Engineer',
    org: 'Plurative',
    dates: 'February 2024 – December 2025',
    duration: '1 yr 11 mo',
    bullets: [
      'Contributed to a "Stateful AI" platform giving conversational agents an OS-inspired memory architecture, paging context in and out to maintain continuity over long-running interactions.',
      'Integrated vector-based search into a RAG system for on-demand retrieval of relevant knowledge.',
      'Supported a robust, type-safe backend exposing agent capabilities through multiple API endpoints.',
      'Contributed to the containerization and deployment strategy behind the agentic workflow engine.'
    ]
  },
  {
    title: 'Software Engineering Trainee',
    org: 'Plurative',
    dates: 'November 2023 – February 2024',
    duration: '4 mo',
    bullets: [
      'Contributed end-to-end to a scalable, multi-tenant workflow platform.',
      'Containerized application services for consistent development environments.',
      'Designed and developed a high-performance backend for exposing and managing data.',
      'Implemented secure, multi-tenant business logic with strict data isolation.',
      'Built interactive dashboards with real-time state management.'
    ]
  },
  {
    title: 'Teacher',
    org: 'Institute of Computer Engineering Technology (iCET)',
    dates: 'January 2023 – October 2023',
    duration: 'Panadura, Sri Lanka',
    bullets: [
      'Delivered software engineering training using hands-on, practical teaching methods.',
      "Designed the institute's logos, flyers, and other marketing materials."
    ]
  },
  {
    title: 'Student',
    org: 'IJSE – Institute of Software Engineering',
    dates: 'April 2022 – January 2023',
    duration: 'Panadura, Sri Lanka',
    bullets: []
  }
];

const education = [
  {
    school: 'Tianjin Polytechnic University',
    detail: 'Artificial Intelligence',
    date: 'March 2025'
  },
  {
    school: 'ANC School of Postgraduate Education',
    detail: 'Foundation, Information Technology',
    date: ''
  },
  {
    school: 'IJSE',
    detail: 'Bachelor of Science (BS), Computer Software Engineering',
    date: 'April 2022'
  },
  {
    school: 'Anandasa sthralaya',
    detail: 'A/L, Mathematics',
    date: '2019 – 2021'
  }
];

const topSkills = ['Retrieval-Augmented Generation (RAG)', 'NestJS', 'Generative AI'];

const certifications = [
  'ServiceNow IT Leadership Professional Certificate',
  'Vector Databases Professional Certificate by Weaviate',
  'Foundation in IT',
  'Docker Foundations Professional Certificate',
  'Scientific Computing with Python'
];

const SectionHeading = ({ id, label }: { id: string; label: string }) => (
  <h2
    id={id}
    className="scroll-mt-24 border-t-4 border-np-ink pt-4 font-mono text-xs uppercase tracking-widest text-np-500 dark:border-np-ink-night dark:text-np-500-night">
    {label}
  </h2>
);

const TimelineItem = ({
  title,
  org,
  dates,
  duration,
  bullets
}: {
  title: string;
  org: string;
  dates: string;
  duration: string;
  bullets: string[];
}) => (
  <div className="border-l-2 border-np-muted py-1 pl-5 dark:border-np-muted-night">
    <h3 className="font-serif text-lg font-bold text-np-ink dark:text-np-ink-night">{title}</h3>
    <p className="mt-0.5 font-sans text-sm font-semibold text-np-accent dark:text-np-accent-night">
      {org}
    </p>
    <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-np-500 dark:text-np-500-night">
      {dates}
      {duration ? ` · ${duration}` : ''}
    </p>
    {bullets.length > 0 && (
      <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-10 text-start">
        <Link
          to="/"
          className="text-sm text-np-600 underline-offset-4 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
          &larr; Back to Home
        </Link>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="relative w-fit flex-none">
            <CornerMarks className="pointer-events-none absolute -right-6 -top-6 -z-10 h-16 w-16 text-np-accent/30 dark:text-np-accent-night/30 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            <img
              src="https://avatars.githubusercontent.com/u/50785933?v=4"
              alt="Ishan Lahiru"
              className="h-28 w-28 border border-np-ink object-cover transition-all duration-300 dark:border-np-ink-night sm:h-40 sm:w-40 lg:h-52 lg:w-52"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-4xl font-black tracking-tight text-np-ink dark:text-np-ink-night sm:text-5xl">
              Ishan Lahiru
            </h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
              Still learning, one project at a time.
            </p>

            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-np-600 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-np-ink dark:text-np-400-night dark:first-letter:text-np-ink-night">
              I'm based in Kalutara District, Sri Lanka. Most recently, I was an Associate
              Software Engineer at Plurative, building a "Stateful AI" platform that gives
              conversational agents an OS-inspired memory system &mdash; paging context in and out
              over long-running interactions, backed by RAG-style vector search and a type-safe
              API layer. Before that, I worked as a trainee on a multi-tenant workflow platform,
              and spent time teaching software engineering at iCET while also designing the
              institute's brand and marketing materials.
            </p>

            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-block min-h-[44px] content-center border border-np-ink bg-np-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-np-paper transition-colors hover:bg-np-paper hover:text-np-ink dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-paper-night dark:hover:text-np-ink-night"
            >
              &darr; Download CV
            </a>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
          <a
            href="#experience"
            className="text-np-600 hover:text-np-accent dark:text-np-400-night dark:hover:text-np-accent-night">
            Experience
          </a>
          <a
            href="#education"
            className="text-np-600 hover:text-np-accent dark:text-np-400-night dark:hover:text-np-accent-night">
            Education
          </a>
          <a
            href="#skills"
            className="text-np-600 hover:text-np-accent dark:text-np-400-night dark:hover:text-np-accent-night">
            Skills &amp; Certifications
          </a>
        </nav>

        <section className="mt-12">
          <SectionHeading id="experience" label="Experience" />
          <div className="mt-6 space-y-8">
            {experience.map((item) => (
              <TimelineItem key={`${item.title}-${item.org}`} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <SectionHeading id="education" label="Education" />
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="font-serif text-base font-bold text-np-ink dark:text-np-ink-night">
                  {item.school}
                </h3>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-np-500 dark:text-np-500-night">
                  {item.detail}
                  {item.date ? ` · ${item.date}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 mt-6">
          <SectionHeading id="skills" label="Skills & Certifications" />
          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-wide text-np-500 dark:text-np-500-night">
              Top Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-np-ink px-2 py-1 font-mono text-xs text-np-ink dark:border-np-ink-night dark:text-np-ink-night">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-wide text-np-500 dark:text-np-500-night">
              Certifications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="border border-np-ink px-2 py-1 font-mono text-xs text-np-ink dark:border-np-ink-night dark:text-np-ink-night">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export default AboutPage;
