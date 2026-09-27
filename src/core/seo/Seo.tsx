import { useEffect } from 'react';

const SITE_URL = 'https://ishanlahiru.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const setMetaContent = (selector: string, content: string) => {
  document.querySelector(selector)?.setAttribute('content', content);
};

const Seo: React.FC<SeoProps> = ({ title, description, path = '/', image = DEFAULT_IMAGE }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[property="og:image"]', image);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', image);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, image]);

  return null;
};

export default Seo;
