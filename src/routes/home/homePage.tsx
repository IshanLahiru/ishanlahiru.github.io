import React from 'react';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';
import ToolTipWrapper from '../../components/tool-tip-wrapper/toolTipWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faThreads, faTiktok, faWeixin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="text-center">
        <div className="flex mt-4 ml-4">
          <ToolTipWrapper
            tooltipText="A technophile is a person who has a strong enthusiasm for or interest in technology, particularly new or emerging technologies. They are often early adopters of gadgets, software, or innovations and enjoy exploring how technology can improve daily life or solve problems."
            tooltipWidth="600px"
            direction="bottom">
            <p className="text-dark dark:text-white font-sansMono font-semibold">Technophile</p>
          </ToolTipWrapper>
          <span style={{ margin: '0 10px' }}></span>
          <p className="text-dark dark:text-gray-400 font-sansMono font-normal">Sri Lanka</p>
          <br />
        </div>
        <div className="flex text-start">
          <p className="mt-4 ml-4 text-dark dark:text-gray-400 font-sansMono font-extralight">
            Exploring the realm of tech, the journey unfolds with crafting innovative solutions,
            unraveling complex systems, and embracing the ever-evolving digital landscape, where
            creativity meets logic to shape a future brimming with possibilities.{' '}
          </p>
        </div>
        <div className="flex justify-start">
          <button className="flex bg-gray-600 dark:bg-gray-200 p-2  mt-4  rounded-md">
            <p className="text-slate-200 dark:text-gray-950 ml-4">About</p>
            <span style={{ margin: '0 3px' }} />
            <p className="text-slate-200 dark:text-gray-950">Ishan Lahiru</p>
            <span style={{ margin: '0 3px' }} />
            <ArrowLongRightIcon className="h-5 text-slate-200 dark:text-gray-950 mr-2 translate-y-0.5" />
            <span style={{ margin: '0 4px' }}></span>
          </button>
        </div>
      </main>
      <section>
        <hr className="border-t-0.5 mt-4  text-gray-950 dark:border-gray-500" />
          <FontAwesomeIcon className="mr-4 text-xl translate-y-2 rounded-lg p-0.5 bg-white" icon={faGithub} />
          <FontAwesomeIcon className="mr-4 text-xl text-green-600 translate-y-2" icon={faWeixin} />
          <FontAwesomeIcon className="mr-4 text-xl text-blue-600 translate-y-2" icon={faFacebook} />
          <FontAwesomeIcon className="mr-4 p-0.5 rounded-lg text-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 translate-y-2" icon={faInstagram} />
          <FontAwesomeIcon className="mr-4 text-xl translate-y-2 rounded-lg p-0.5 bg-white" icon={faTiktok} />
          <FontAwesomeIcon className="mr-4 text-xl translate-y-2 rounded-lg p-0.5 bg-white" icon={faXTwitter} />
          <FontAwesomeIcon className="mr-4 text-xl translate-y-2 text-blue-500  " icon={faLinkedin} />
          <FontAwesomeIcon className="mr-4 text-xl translate-y-2 rounded-lg p-0.5 bg-white" icon={faThreads} />
        <hr className="border-t-0.5 mt-4  text-gray-950 dark:border-gray-500" />
      </section>
    </BaseContainer>
  );
};

export default HomePage;
