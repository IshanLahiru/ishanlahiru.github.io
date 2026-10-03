// TyPal's typefaces, loaded with its pages only (this module is in the TyPal chunks):
// a tight grotesque for headlines, an italic serif for the line that carries the voice,
// Geist for reading, and Geist Mono for the small labels.
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import '@fontsource/instrument-serif/400-italic.css';

// TyPal's type scale, shared by its pages. Headlines are set large and close: the bigger the
// size, the tighter the tracking and the leading. Reading text stays under about 65 characters
// a line, in the blocks that use it. The families are named in tailwind.config.js.
export const type = {
  display:
    'font-grotesque text-[clamp(2.75rem,12.5vw,8rem)] font-semibold leading-[0.92] tracking-[-0.055em]',
  title:
    'font-grotesque text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[0.96] tracking-[-0.045em]',
  heading:
    'font-grotesque text-[clamp(2rem,3.7vw,3.125rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance',
  subheading: 'font-grotesque text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.03em]',
  stat: 'font-grotesque text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.05em]',
  // The second line of a headline, in the voice's own face, at the size of the line above it.
  voice: 'block font-voice font-normal italic tracking-[-0.025em]',
  lead: 'font-geist text-[1.125rem] leading-[1.55] text-pretty sm:text-[1.25rem] sm:leading-[1.5]',
  body: 'font-geist text-[1rem] leading-[1.65] text-pretty',
  small: 'font-geist text-[0.9375rem] leading-[1.6] text-pretty',
  label: 'font-geist text-[0.875rem] font-semibold leading-[1.4]',
  caption: 'font-geist text-[0.8125rem] leading-[1.45]',
  meta: 'font-geist-mono text-[0.6875rem] font-medium uppercase leading-[1.5] tracking-[0.22em]'
};

// A press that can be felt: the control gives a little, and comes back if the press is let go.
export const press =
  'transition-[color,background-color,border-color,transform] duration-150 ease-out active:scale-[0.96]';

// A hairline and a little lift, as shadows: they sit on any background, where a border's one
// colour doesn't. On light, three layers; on dark, a single ring.
export const edge = {
  light:
    'shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_1px_2px_-1px_oklch(0_0_0/0.06),0_2px_4px_0_oklch(0_0_0/0.04)]',
  lightHover:
    'hover:shadow-[0_0_0_1px_oklch(0_0_0/0.08),0_1px_2px_-1px_oklch(0_0_0/0.08),0_2px_4px_0_oklch(0_0_0/0.06)]',
  dark: 'shadow-[0_0_0_1px_oklch(1_0_0/0.08)]'
};
