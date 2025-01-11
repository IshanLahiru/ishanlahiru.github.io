interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className={`flex flex-row h-screen w-screen  dark:bg-neutral-950 bg-neutral-100`}>
      <div className={`hidden sm:block basis-1/2 md:basis-1/8 dark:bg-neutral-950 bg-neutral-100`} />
      <div className="grow h-screen mx-5">{children}</div>
      <div className={`hidden sm:block basis-1/2 md:basis-1/8 dark:bg-neutral-950 bg-neutral-100`} />
    </div>
  );
};

export default BaseContainer;
