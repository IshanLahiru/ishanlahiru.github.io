import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
      <p>&copy; {new Date().getFullYear()} Ishan Lahiru. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/ishanlahiru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4 transition-colors hover:text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4 transition-colors hover:text-white" />
        </a>
        <a href="mailto:ishanlahiru2002@gmail.com" aria-label="Email">
          <Mail className="h-4 w-4 transition-colors hover:text-white" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
