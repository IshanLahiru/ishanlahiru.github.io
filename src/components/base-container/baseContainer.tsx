interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className={`flex h-screen w-screen flex-row bg-neutral-100 dark:bg-neutral-950`}>
      <div
        className={`md:basis-1/8 hidden basis-1/2 bg-neutral-100 dark:bg-neutral-950 sm:block`}
      />
      <div className="mx-5 h-screen grow">{children}</div>
      <div
        className={`md:basis-1/8 hidden basis-1/2 bg-neutral-100 dark:bg-neutral-950 sm:block`}
      />
    </div>
  );
};

export default BaseContainer;
