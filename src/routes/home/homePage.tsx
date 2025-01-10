import React from 'react';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';
import { ArrowRight, ArrowRightFromLine, ArrowRightLeft } from 'lucide-react';
import { ArrowLongRightIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

const HomePage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="text-center">
        <div className="flex mt-1 ml-4">
          <p className="text-dark dark:text-white font-sansMono font-semibold">Developer</p>
          <span style={{ margin: '0 10px' }}></span>
          <p className="text-dark dark:text-gray-400 font-sansMono font-normal">Sri Lanka</p>
          <br />
        </div>
        <div className="flex text-start">
          <p className="mt-1 ml-4 text-dark dark:text-gray-400 font-sansMono font-extralight">
            Exploring the realm of tech, the journey unfolds with crafting innovative solutions,
            unraveling complex systems, and embracing the ever-evolving digital landscape, where
            creativity meets logic to shape a future brimming with possibilities.{' '}
          </p>
        </div>
        <div className="flex justify-start mt-4 ">
          <button className="flex bg-gray-600 dark:bg-gray-200 p-2 rounded-md">
            <p className='text-slate-200 dark:text-gray-950'>About</p>
            <span style={{ margin: '0 3px' }}/>
            <p className='text-slate-200 dark:text-gray-950'>Ishan Lahiru</p>
            <span style={{ margin: '0 3px' }}/>
            <ArrowLongRightIcon className="h-5 text-slate-200 dark:text-gray-950 mr-2 translate-y-0.5" />
            <span style={{ margin: '0 4px' }}></span>
          </button>
        </div>
      </main>
    </BaseContainer>
  );
};

export default HomePage;
