import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import Reveal from './Reveal';
import { articles } from './data';

const Thoughts: React.FC = () => (
  <Section id="thoughts">
    <SectionHeading eyebrow="Blogs" title="From the Blog" />
    <div className="divide-y divide-white/10 border-t border-white/10">
      {articles.map((article, index) => (
        <Reveal key={article.id} delay={index * 80}>
          <a
            href={article.link}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-lime-300">
                {article.title}
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">{article.description}</p>
              <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 flex-none text-slate-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-500" />
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Thoughts;
