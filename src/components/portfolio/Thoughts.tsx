import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import Reveal from './Reveal';
import { articles } from './data';

const rowClass = 'group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6';

const ArticleContent: React.FC<{ title: string; description: string; date: string; readTime: string }> = ({
  title,
  description,
  date,
  readTime
}) => (
  <>
    <div className="min-w-0">
      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-lime-300">{title}</h3>
      <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {readTime}
        </span>
      </div>
    </div>
    <ArrowUpRight className="h-5 w-5 flex-none text-slate-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-500" />
  </>
);

const Thoughts: React.FC = () => (
  <Section id="thoughts">
    <SectionHeading eyebrow="Blogs" title="From the Blog" />
    <div className="divide-y divide-white/10 border-t border-white/10">
      {articles.map((article, index) => (
        <Reveal key={article.id} delay={index * 80}>
          {article.internalLink ? (
            <Link to={article.internalLink} className={rowClass}>
              <ArticleContent {...article} />
            </Link>
          ) : (
            <a href={article.link} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <ArticleContent {...article} />
            </a>
          )}
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Thoughts;
