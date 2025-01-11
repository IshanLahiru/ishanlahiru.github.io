const Footer = () => {
  return (
    <footer className="mb-4 mt-8 rounded-xl bg-gray-200 py-6 dark:bg-neutral-900">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ishan Lahiru Sampath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
