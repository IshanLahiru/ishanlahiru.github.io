interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className={`flex flex-row h-screen w-screen  dark:bg-stone-900 bg-slate-100`}>
      <div className={`hidden sm:block basis-1/4 md:basis-1/10 dark:bg-stone-900 bg-slate-100`} />
      <div className="grow h-screen mx-5">{children}</div>
      <div className={`hidden sm:block basis-1/4 md:basis-1/10 dark:bg-stone-900 bg-slate-100`} />
    </div>
  );
};

export default BaseContainer;
