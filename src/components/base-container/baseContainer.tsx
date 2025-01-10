import React from 'react';

interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen bg-slate-200 dark:bg-stone-900 ">
      <div className="hidden sm:block basis-1/3 md:basis-1/10 bg-slate-100 dark:bg-stone-900" />
      <div className="grow w-screen h-screen">{children}</div>
      <div className="hidden sm:block basis-1/3 md:basis-1/10 bg-slate-100 dark:bg-stone-900" />
    </div>
  );
};

export default BaseContainer;
