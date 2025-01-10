import { Cog6ToothIcon} from '@heroicons/react/20/solid';
import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <header className="bg-[#08090d] text-white p-4 sm:mt-4 mt-0 sm:rounded-xl rounded-none">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#contact" className="flex items-center hover:underline">
                <Cog6ToothIcon className="h-5 w-5 text-gray-800 dark:text-gray-400 mr-2" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
