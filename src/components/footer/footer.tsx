const Footer = () => {
  return (
    <footer className="mb-4 mt-8 flex flex-col gap-1 border-t border-dm-aluminum py-6 dark:border-dm-dark">
      <p className="text-xs text-dm-ash dark:text-dm-ash">
        © {new Date().getFullYear()} Ishan Lahiru Sampath. All rights reserved.
      </p>
      <p className="text-[10px] text-dm-ash/70 dark:text-dm-ash/70">
        Sri Lanka district map data by{' '}
        <a
          href="https://github.com/VictorCazanave/svg-maps"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-dm-accent2 dark:hover:text-dm-accent">
          svg-maps
        </a>
        , licensed under CC BY 4.0.
      </p>
    </footer>
  );
};

export default Footer;
