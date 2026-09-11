import React from 'react';
import { Home, FolderKanban, Briefcase, Wrench, Mail } from 'lucide-react';
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#projects', label: 'Projects', icon: FolderKanban },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#tools', label: 'Tools', icon: Wrench },
  { href: '/#contact', label: 'Contact', icon: Mail }
];

const Navbar: React.FC = () => (
  <header className="sticky top-4 z-50 flex justify-center px-4">
    <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1.5 shadow-lg shadow-black/40 backdrop-blur-xl">
      {navLinks.map((link) => (
        <ToolTipWrapper key={link.href} tooltipText={link.label} direction="bottom">
          <a
            href={link.href}
            aria-label={link.label}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-all duration-150 hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
          >
            <link.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
          </a>
        </ToolTipWrapper>
      ))}
    </nav>
  </header>
);

export default Navbar;
