import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Github, Instagram, Linkedin, Mail, Download } from 'lucide-react';
import Reveal from './Reveal';

const PortraitCard: React.FC = () => (
  <Reveal className="mx-auto w-full max-w-xs rounded-[2rem] bg-white p-5 text-center shadow-xl shadow-black/40 lg:mx-0">
    <Link to="/about" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://avatars.githubusercontent.com/u/50785933?v=4"
          alt="Ishan Lahiru"
          className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-orange-600/50 mix-blend-multiply" />
      </div>

      <div className="relative mt-4">
        <span className="absolute -top-8 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-orange-600 text-white shadow-md shadow-orange-600/40">
          <Flame className="h-4 w-4" fill="currentColor" />
        </span>
        <h3 className="text-xl font-extrabold text-black transition-colors group-hover:text-orange-600">
          Ishan Lahiru
        </h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        A lifelong learner and creator, shipping mobile apps and backend platforms one project at
        a time.
      </p>
    </Link>

    <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-gray-700">
      <a href="https://github.com/ishanlahiru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github className="h-4.5 w-4.5 transition-all duration-150 hover:scale-110 hover:text-orange-600 active:scale-95" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="h-4.5 w-4.5 transition-all duration-150 hover:scale-110 hover:text-orange-600 active:scale-95" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram className="h-4.5 w-4.5 transition-all duration-150 hover:scale-110 hover:text-orange-600 active:scale-95" />
      </a>
      <a href="mailto:ishanlahiru2002@gmail.com" aria-label="Email">
        <Mail className="h-4.5 w-4.5 transition-all duration-150 hover:scale-110 hover:text-orange-600 active:scale-95" />
      </a>
      <a href="/cv.pdf" download aria-label="Download CV">
        <Download className="h-4.5 w-4.5 transition-all duration-150 hover:scale-110 hover:text-orange-600 active:scale-95" />
      </a>
    </div>
  </Reveal>
);

export default PortraitCard;
