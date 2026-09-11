import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-np-paper px-4 text-center dark:bg-np-paper-night">
      <p className="text-sm font-medium text-np-accent dark:text-np-accent-night">Page not found</p>
      <h1 className="text-7xl font-bold leading-none tracking-tight text-np-ink dark:text-np-ink-night sm:text-9xl">
        404
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        The page you're looking for doesn't exist, or has moved somewhere else.
      </p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-4 min-h-[44px] rounded-full bg-np-ink px-6 py-2.5 text-sm font-medium text-np-paper transition-colors hover:bg-np-700 dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-200">
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
