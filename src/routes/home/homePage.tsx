import React from 'react';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';
import ToolTipWrapper from '../../components/tool-tip-wrapper/toolTipWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faThreads,
  faTiktok,
  faWeixin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import Footer from '../../components/footer/footer';

const projects = [
  {
    id: 1,
    title: 'Draggable People Manager',
    description:
      'A React-based application for managing employees with drag-and-drop functionality.',
    techStack: ['React', 'Ant Design', 'React DnD'],
    link: '#'
  },
  {
    id: 2,
    title: 'Election Results Dashboard',
    description:
      'A dynamic dashboard to display election results using SVG maps and detailed statistics.',
    techStack: ['JavaScript', 'SVG', 'React'],
    link: '#'
  },
  {
    id: 3,
    title: 'Online Course Platform',
    description: 'A responsive web platform for selling and managing courses.',
    techStack: ['React', 'TypeScript', 'Storybook'],
    link: '#'
  }
];

const blogs = [
  {
    id: 1,
    title: 'Understanding React DnD',
    description:
      'A deep dive into implementing drag-and-drop functionality in React using React DnD.',
    date: 'January 10, 2025',
    link: '#'
  },
  {
    id: 2,
    title: 'SVG Map Manipulation with React',
    description: 'Learn how to dynamically manipulate SVG maps for interactive data visualization.',
    date: 'December 15, 2024',
    link: '#'
  },
  {
    id: 3,
    title: 'Monorepo Management with Turbo',
    description: 'Best practices for managing multiple projects in a monorepo using Turbo.',
    date: 'November 20, 2024',
    link: '#'
  }
];

const ProjectCard = ({ title, description, techStack, link }: any) => {
  return (
    <div className="mb-4 rounded-lg bg-white border border-neutral-600 dark:border-gray-400 p-6 shadow-md dark:bg-neutral-950">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="my-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <div className="my-2 flex flex-wrap gap-2">
        {techStack.map((tech: string, index: number) => (
          <span
            key={index}
            className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
      >
        View Project
      </a>
    </div>
  );
};

const BlogCard = ({ title, description, date, link }: any) => {
  return (
    <div className="mb-4 rounded-lg bg-white border border-neutral-600 dark:border-gray-400 p-6 shadow-md dark:bg-neutral-950">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="my-2 text-sm text-gray-500 dark:text-gray-400">{date}</p>
      <p className="my-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
      >
        Read More
      </a>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="text-center">
        <div className="ml-4 mt-4 flex">
          <ToolTipWrapper
            tooltipText="A technophile is a person who has a strong enthusiasm for or interest in technology, particularly new or emerging technologies. They are often early adopters of gadgets, software, or innovations and enjoy exploring how technology can improve daily life or solve problems."
            tooltipWidth="600px"
            direction="bottom"
          >
            <p className="text-dark font-sansMono font-semibold dark:text-white">Technophile</p>
          </ToolTipWrapper>
          <span style={{ margin: '0 10px' }}></span>
          <p className="text-dark font-sansMono font-normal dark:text-gray-400">Sri Lanka</p>
          <br />
        </div>
        <div className="flex text-start">
          <p className="text-dark ml-4 mt-4 font-sansMono font-extralight dark:text-gray-400">
            Exploring the realm of tech, the journey unfolds with crafting innovative solutions,
            unraveling complex systems, and embracing the ever-evolving digital landscape, where
            creativity meets logic to shape a future brimming with possibilities.{' '}
          </p>
        </div>
        <div className="flex flex-col items-start sm:flex-row">
          <button className="mt-4 flex w-56 rounded-md bg-gray-600 p-2 pt-3 dark:bg-gray-200">
            <p className="dark:text-gray-750 ml-4 text-slate-400 dark:text-slate-600">About</p>
            <span style={{ margin: '0 3px' }} />
            <p className="text-slate-200 dark:text-gray-950">Ishan Lahiru</p>
            <span style={{ margin: '0 3px' }} />
            <picture className="translate-y-0">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                alt="🚀"
                width="32"
                height="32"
              />
            </picture>
            <span style={{ margin: '0 4px' }}></span>
          </button>

          <section className="ml-4 mt-4 flex flex-row items-start">
            <FontAwesomeIcon
              className="mr-4 translate-y-2 rounded-lg bg-white p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              icon={faGithub}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 text-xl text-green-600 transition-all duration-300 hover:scale-110 hover:text-green-400"
              icon={faWeixin}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 text-xl text-blue-600 transition-all duration-300 hover:scale-110 hover:text-blue-400"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:brightness-110"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 rounded-lg bg-white p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              icon={faTiktok}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 rounded-lg bg-white p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              icon={faXTwitter}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 text-xl text-blue-700 transition-all duration-300 hover:scale-110 hover:text-blue-500"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="mr-4 translate-y-2 rounded-lg bg-white p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              icon={faThreads}
            />
          </section>
        </div>
      </main>
      <section>
        <hr className="border-t-0.5 mt-4 text-gray-950 dark:border-gray-800" />
        <h2 className="my-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <section>
        <section>
          <hr className="border-t-0.5 mt-4 text-gray-950 dark:border-gray-800" />
          <h2 className="my-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Blogs</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </BaseContainer>
  );
};

export default HomePage;
