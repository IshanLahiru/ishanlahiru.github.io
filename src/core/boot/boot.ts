// The loading screen is in index.html (#boot), so it's on screen before any script has
// arrived. It stays until the page under it is whole: mounted, its fonts in, the pictures
// at the top of it loaded, and anything a page asked it to wait for (`holdBoot`) done.
// Nothing half-drawn is ever shown.

/** However slow things are, the page is shown after this long. */
const LONGEST_WAIT = 10_000;
const started = performance.now();

let holds = 0;
let mounted = false;
let lifted = false;

const lift = () => {
  if (lifted) return;
  lifted = true;
  const screen = document.getElementById('boot');
  if (!screen) return;
  screen.classList.add('boot-done');
  // Gone once it has faded, so it never sits over the page taking taps.
  window.setTimeout(() => screen.remove(), 250);
};

const liftWhenWhole = () => {
  if (mounted && holds === 0) lift();
};

const within = <T>(wait: Promise<T>, ms: number) =>
  Promise.race([wait, new Promise((done) => window.setTimeout(done, ms))]);

/** The pictures in the first screenful: the rest load as they're scrolled to. */
const picturesInView = () =>
  Promise.all(
    Array.from(document.images)
      .filter((image) => !image.complete && image.getBoundingClientRect().top < window.innerHeight)
      .map(
        (image) =>
          new Promise((done) => {
            image.addEventListener('load', done, { once: true });
            image.addEventListener('error', done, { once: true });
          })
      )
  );

/** A page asks the loading screen to wait for something of its own; call what's returned
 * when it's ready. */
export const holdBoot = () => {
  if (lifted) return () => {};
  holds += 1;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    holds -= 1;
    liftWhenWhole();
  };
};

/** The first page has mounted. */
export const pageMounted = () => {
  if (mounted) return;
  const left = Math.max(0, LONGEST_WAIT - (performance.now() - started));
  // A frame first, so a page's own holds, made as it mounted, are counted.
  requestAnimationFrame(() => {
    void within(Promise.all([document.fonts.ready, picturesInView()]), Math.min(left, 4_000)).then(
      () => {
        mounted = true;
        liftWhenWhole();
      }
    );
  });
  window.setTimeout(lift, left);
};
