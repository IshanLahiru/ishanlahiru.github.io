import React from 'react';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';
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
        <div className="flex justify-start">
          <button className="mt-4 flex rounded-md bg-gray-600 p-2 dark:bg-gray-200">
            <p className="ml-4 text-slate-200 dark:text-gray-950">About</p>
            <span style={{ margin: '0 3px' }} />
            <p className="text-slate-200 dark:text-gray-950">Ishan Lahiru</p>
            <span style={{ margin: '0 3px' }} />
            <ArrowLongRightIcon className="mr-2 h-5 translate-y-0.5 text-slate-200 dark:text-gray-950" />
            <span style={{ margin: '0 4px' }}></span>
          </button>
        </div>
      </main>
      <section>
        <hr className="border-t-0.5 mt-4 text-gray-950 dark:border-gray-500" />

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
          className="mr-4 translate-y-2 text-xl text-blue-500 transition-all duration-300 hover:scale-110 hover:text-blue-300"
          icon={faLinkedin}
        />

        <FontAwesomeIcon
          className="mr-4 translate-y-2 rounded-lg bg-white p-0.5 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
          icon={faThreads}
        />

        <hr className="border-t-0.5 mt-4 text-gray-950 dark:border-gray-500" />
      </section>
    </BaseContainer>
  );
};

export default HomePage;
