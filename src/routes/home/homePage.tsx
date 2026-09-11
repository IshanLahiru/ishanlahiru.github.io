import React from 'react';
import Navbar from '../../components/portfolio/Navbar';
import PortraitCard from '../../components/portfolio/PortraitCard';
import Hero from '../../components/portfolio/Hero';
import Projects from '../../components/portfolio/Projects';
import Interests from '../../components/portfolio/Interests';
import Experience from '../../components/portfolio/Experience';
import Tools from '../../components/portfolio/Tools';
import Thoughts from '../../components/portfolio/Thoughts';
import Contact from '../../components/portfolio/Contact';
import Footer from '../../components/portfolio/Footer';

const HomePage: React.FC = () => {
  return (
    <div id="top" className="min-h-screen bg-black font-sans text-slate-300">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px,1fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <PortraitCard />
          </div>
          <div>
            <Hero />
            <div id="projects" className="mt-24 scroll-mt-24">
              <Projects />
            </div>
            <Interests />
            <Thoughts />
            <Experience />
            <Tools />
            <Contact />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
