import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import Navbar from '../../components/portfolio/Navbar';
import Footer from '../../components/portfolio/Footer';
import { Section, SectionHeading } from '../../components/portfolio/Section';
import Reveal from '../../components/portfolio/Reveal';

export const experience = [
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

const quickLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills & Certifications' }
];

const TimelineItem: React.FC<{
  title: string;
  org: string;
  dates: string;
  duration: string;
  bullets: string[];
}> = ({ title, org, dates, duration, bullets }) => (
  <div className="border-l-2 border-white/10 py-1 pl-5">
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <p className="mt-0.5 text-sm font-medium text-orange-400">{org}</p>
    <p className="mt-0.5 text-xs text-slate-500">
      {dates}
      {duration ? ` · ${duration}` : ''}
    </p>
    {bullets.length > 0 && (
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-400">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-slate-300">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Reveal className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="relative aspect-square w-28 flex-none overflow-hidden rounded-[2rem] shadow-xl shadow-black/40 sm:w-40 lg:w-48">
            <img
              src="https://avatars.githubusercontent.com/u/50785933?v=4"
              alt="Ishan Lahiru"
              className="h-full w-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-orange-600/50 mix-blend-multiply" />
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
              Ishan Lahiru
            </h1>
            <p className="mt-2 text-sm text-slate-500">A lifelong learner and creator.</p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
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
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-150 hover:bg-lime-200 active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm font-medium">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-400 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <Section id="experience" className="!border-t-0">
          <SectionHeading eyebrow="Career" title="Experience" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={`${item.title}-${item.org}`} delay={index * 80}>
                <TimelineItem {...item} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" tint>
          <SectionHeading eyebrow="Academics" title="Education" />
          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="text-base font-bold text-white">{item.school}</h3>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  {item.detail}
                  {item.date ? ` · ${item.date}` : ''}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills">
          <SectionHeading eyebrow="Expertise" title="Skills & Certifications" />
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Top Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Certifications</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
