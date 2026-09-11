const Footer = () => {
  return (
    <footer className="mt-16 -mx-4 flex flex-col gap-2 border-t border-np-muted bg-np-100 px-4 py-6 text-np-500 dark:border-np-muted-night dark:bg-np-700/10 dark:text-np-500-night sm:-mx-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-col gap-1">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Ishan Lahiru Sampath. All rights reserved.
        </p>
        <p className="text-xs text-np-400 dark:text-np-400-night">
          Sri Lanka district map data by{' '}
          <a
            href="https://github.com/VictorCazanave/svg-maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-np-accent hover:underline dark:text-np-accent-night">
            svg-maps
          </a>
          , licensed under CC BY 4.0.
        </p>
      </div>
      <a href="#top" className="text-xs font-medium text-np-accent hover:underline dark:text-np-accent-night">
        Back to top &uarr;
      </a>
    </footer>
  );
};

export default Footer;
