import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Navbar from '../portfolio/Navbar';
import Footer from '../portfolio/Footer';
import Reveal from '../portfolio/Reveal';

const BlogPostLayout: React.FC<{
  title: string;
  eyebrow: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}> = ({ title, eyebrow, date, readTime, children }) => (
  <div className="min-h-screen bg-black font-sans text-slate-300">
    <Navbar />

    <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <Link to="/#thoughts" className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <Reveal>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>
      </Reveal>

      <Reveal delay={100} className="prose-blog mt-12 space-y-6 text-[15px] leading-relaxed text-slate-300">
        {children}
      </Reveal>
    </div>

    <Footer />
  </div>
);

export default BlogPostLayout;
