import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-np-paper px-4 text-center dark:bg-np-paper-night">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-np-accent dark:text-np-accent-night">
        Stop the Presses
      </p>
      <h1 className="font-serif text-7xl font-black leading-none text-np-ink dark:text-np-ink-night sm:text-9xl">
        404
      </h1>
      <p className="max-w-sm font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        The page you're looking for was never printed, or has since been pulled from the archives.
      </p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-4 min-h-[44px] border border-np-ink bg-np-ink px-6 py-2 font-sans text-xs uppercase tracking-widest text-np-paper transition-colors hover:bg-np-paper hover:text-np-ink dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-paper-night dark:hover:text-np-ink-night">
        Back to the Front Page
      </button>
    </div>
  );
};

export default PageNotFound;
