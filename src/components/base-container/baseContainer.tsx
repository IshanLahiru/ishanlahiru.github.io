import { CornerMarks, DotGrid } from '../decorative/decorativeSvgs';

interface BaseContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-np-paper dark:bg-np-paper-night">
      <CornerMarks className="pointer-events-none absolute right-0 top-0 -z-10 h-24 w-24 text-np-ink/20 dark:text-np-ink-night/20 sm:h-32 sm:w-32" />
      <DotGrid className="pointer-events-none absolute bottom-0 left-0 -z-10 h-40 w-40 text-np-ink/10 dark:text-np-ink-night/10 sm:h-56 sm:w-56" />
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default BaseContainer;
