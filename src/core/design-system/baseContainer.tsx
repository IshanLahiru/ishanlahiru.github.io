interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div id="top" className="relative min-h-screen bg-np-paper dark:bg-np-paper-night">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default BaseContainer;
