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
    className="scroll-mt-24 border-t border-dm-aluminum pt-6 text-xs uppercase tracking-widest text-dm-ash dark:border-dm-dark dark:text-dm-ash">
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
  <div className="border-l border-dm-aluminum py-1 pl-5 dark:border-dm-dark">
    <h3 className="text-base font-bold text-dm-dark dark:text-dm-cement">{title}</h3>
    <p className="mt-0.5 text-sm text-dm-accent2 dark:text-dm-accent">{org}</p>
    <p className="mt-0.5 text-xs text-dm-ash dark:text-dm-ash">
      {dates}
      {duration ? ` · ${duration}` : ''}
    </p>
    {bullets.length > 0 && (
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-dm-ash dark:text-dm-ash">
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
        <Link to="/" className="text-sm text-dm-ash hover:text-dm-accent2 dark:text-dm-ash dark:hover:text-dm-accent">
          &larr; Back to Home
        </Link>

        <div className="relative mt-6 w-fit">
          <CornerMarks className="pointer-events-none absolute -right-6 -top-6 -z-10 h-16 w-16 text-dm-accent2/30 dark:text-dm-accent/30" />
          <img
            src="https://avatars.githubusercontent.com/u/50785933?v=4"
            alt="Ishan Lahiru"
            className="h-24 w-24 rounded-md border border-dm-aluminum object-cover dark:border-dm-dark"
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-dm-dark dark:text-dm-cement">Ishan Lahiru</h1>
        <p className="mt-1 text-base font-bold text-dm-dark dark:text-dm-cement">
          A person who understands code.
        </p>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-dm-ash dark:text-dm-ash">
          I'm based in Kalutara District, Sri Lanka. Most recently, I was an Associate Software
          Engineer at Plurative, building a "Stateful AI" platform that gives conversational
          agents an OS-inspired memory system &mdash; paging context in and out over long-running
          interactions, backed by RAG-style vector search and a type-safe API layer. Before that,
          I worked as a trainee on a multi-tenant workflow platform, and spent time teaching
          software engineering at iCET while also designing the institute's brand and marketing
          materials.
        </p>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest">
          <a href="#experience" className="text-dm-ash hover:text-dm-accent2 dark:text-dm-ash dark:hover:text-dm-accent">
            Experience
          </a>
          <a href="#education" className="text-dm-ash hover:text-dm-accent2 dark:text-dm-ash dark:hover:text-dm-accent">
            Education
          </a>
          <a href="#skills" className="text-dm-ash hover:text-dm-accent2 dark:text-dm-ash dark:hover:text-dm-accent">
            Skills &amp; Certifications
          </a>
        </nav>

        <section className="mt-10">
          <SectionHeading id="experience" label="Experience" />
          <div className="mt-6 space-y-8">
            {experience.map((item) => (
              <TimelineItem key={`${item.title}-${item.org}`} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-4">
          <SectionHeading id="education" label="Education" />
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="text-sm font-bold text-dm-dark dark:text-dm-cement">
                  {item.school}
                </h3>
                <p className="mt-0.5 text-xs text-dm-ash dark:text-dm-ash">
                  {item.detail}
                  {item.date ? ` · ${item.date}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 mt-4">
          <SectionHeading id="skills" label="Skills & Certifications" />
          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-wide text-dm-ash dark:text-dm-ash">
              Top Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-dm-aluminum px-2 py-0.5 text-xs text-dm-dark dark:border-dm-dark dark:text-dm-cement">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-wide text-dm-ash dark:text-dm-ash">
              Certifications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="border border-dm-aluminum px-2 py-0.5 text-xs text-dm-dark dark:border-dm-dark dark:text-dm-cement">
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
