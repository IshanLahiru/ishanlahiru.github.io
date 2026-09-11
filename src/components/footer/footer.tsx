const Footer = () => {
  return (
    <footer className="mt-12 -mx-4 flex flex-col gap-1 bg-np-ink px-4 py-6 text-np-paper sm:-mx-6 sm:px-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-np-paper/70">
        &copy; {new Date().getFullYear()} Ishan Lahiru Sampath. All rights reserved.
      </p>
      <p className="text-[10px] text-np-paper/50">
        Sri Lanka district map data by{' '}
        <a
          href="https://github.com/VictorCazanave/svg-maps"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-np-accent-night decoration-2 underline-offset-2 hover:text-np-paper">
          svg-maps
        </a>
        , licensed under CC BY 4.0.
      </p>
    </footer>
  );
};

export default Footer;
