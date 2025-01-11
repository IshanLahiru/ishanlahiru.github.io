const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-200 py-6 dark:bg-gray-950 mb-4 rounded-xl">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ishan Lahiru Sampath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
