import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react';
import { Heart, Languages, LockKeyhole, ShieldCheck } from 'lucide-react';
import { type } from './type';

// The keyboard, redrawn for the web from its own code (brag-output/keyboard-model.html in the
// TyPal repo, copied to public/). With ?embed=1 it is the iPhone alone on a clear background:
// this page tells it which demo to play and it sends back the caption for each step.
const MODEL_URL = '/projects/typal/keyboard-model.html?embed=1&appearance=dark&home=1';
// The iPhone's own shape, frame included: 393 × 852 pt of screen and an 11 pt band, plus the
// 4 pt the model keeps clear around it.
const PHONE_SHAPE = '423 / 882';

// The hand that works the iPhone in the demos: a person's hand at its real size against the
// phone, see-through so what it taps stays in view. The model says where the fingertip is, in
// the screen's points; this page draws the hand, because it reaches out past the model's frame.
// The outline is the system's pointing hand; its fingertip is at (130, 56) of a 520 pt box.
const HAND_PATH =
  'M16.01 20.89C20.19 19.37 21.6 15.9 19.98 11.44L19.31 9.6C18.69 7.91 17.49 7.14 16.54 7.49C16.3 7.57 16.22 7.75 16.3 7.97L16.59 8.77C16.73 9.13 16.61 9.38 16.41 9.45C16.18 9.53 15.94 9.43 15.81 9.07L15.62 8.53C15.25 7.53 14.35 7.09 13.47 7.41C13.05 7.57 12.93 7.82 13.06 8.18L13.46 9.27C13.58 9.63 13.47 9.86 13.27 9.95C13.04 10.03 12.79 9.92 12.66 9.56L12.3 8.55C11.89 7.43 11.04 7.11 10.17 7.42C9.78 7.56 9.63 7.84 9.75 8.18L10.53 10.33C10.66 10.69 10.56 10.93 10.34 11.01C10.12 11.09 9.88 10.98 9.74 10.62L7.15 3.49C6.88 2.76 6.22 2.44 5.6 2.68C4.93 2.92 4.64 3.58 4.91 4.3L8.68 14.67C8.76 14.91 8.67 15.09 8.51 15.14C8.37 15.2 8.22 15.15 8.04 14.95L5.51 12.23C5.11 11.81 4.68 11.67 4.19 11.85C3.5 12.1 3.22 12.74 3.44 13.34C3.52 13.56 3.63 13.73 3.75 13.88L7.01 17.95C9.75 21.34 12.89 22.03 16.01 20.89Z';
const HAND = { size: 520, tipX: 130, tipY: 56 };
// The model's frame is the phone's screen (393 × 852) inside its 11 pt band and a 4 pt margin.
const FRAME = { width: 423, height: 882, inset: 15 };

// What the iPhone shows before the first chapter: the Home Screen beside the page's opening
// lines, then the app opened from its icon, at rest, beside the demo's introduction.
const HOME = -2;
const OPENED = -1;

// One per demo in the model; `id` is the demo it plays.
const chapters = [
  {
    id: 'typing',
    title: 'A keyboard first, and a good one.',
    body: 'Before any of the clever parts, it has to type well. Suggestions that learn how you write, accents under a held key, and the emoji you reach for most, waiting in the top bar.',
    points: [
      'Suggestions above the keys',
      'Hold a key for its accents',
      'Numbers, symbols and emoji one tap away'
    ]
  },
  {
    id: 'private',
    title: 'Names and numbers never leave.',
    body: 'The moment you write a name, a phone number or an address, the shield fills. Tap it to see what TyPal keeps to itself, and the code an AI would meet in its place.',
    points: [
      'Spotted as you type',
      'Swapped for codes on your iPhone',
      'A preview of exactly what would be sent'
    ]
  },
  {
    id: 'ai',
    title: 'Rewritten in the voice you use with them.',
    body: 'You don’t write to your manager the way you write to your mother, or to someone you’re hoping to impress. Give each person a style, tap an action, and read every change before it goes in.',
    points: [
      'A style for each person you write to',
      'Added, removed and private parts marked',
      'Insert, then undo or redo'
    ]
  },
  {
    id: 'ask',
    title: 'Or just say what you mean.',
    body: 'Ask in plain words: “say I’m ten minutes late”, “turn this down kindly”, “make it a little flirty”. The keys type into the ask, not into the chat, and return sends it.',
    points: [
      'Type the ask with the same keys',
      'Return becomes send',
      'Drag the panel taller for a long answer'
    ]
  },
  {
    id: 'whole',
    title: 'It reads the whole message.',
    body: 'Leave the cursor in the middle of a sentence. TyPal reads what comes before it and after it, rewrites all of it, and puts it back in one piece.',
    points: [
      'The cursor can be anywhere',
      'Both sides of it are read',
      'Insert and Replace swap all of it'
    ]
  },
  {
    id: 'chat',
    title: 'Replies that follow the conversation.',
    body: 'Bring the conversation in, say who said what, and ask for a reply that answers what was actually said, not what you remember being said.',
    points: [
      'Copied messages, or a screenshot',
      'Tag who said what in a tap',
      'Pick a wording and insert it'
    ]
  },
  {
    id: 'translate',
    title: 'Write in yours. They read it in theirs.',
    body: 'Translated as you type, on your iPhone, by Apple. For Sinhala and Tamil your AI steps in, with the private details swapped out first.',
    points: [
      'Apple’s on-device translation',
      'Replace, with undo',
      'Sinhala and Tamil through your AI'
    ]
  },
  {
    id: 'sinhala',
    title: 'Type Sinhala the way it sounds.',
    body: '“mama gedhara enawaa” becomes මම ගෙදර එනවා as you type. Each key carries its Sinhala letter, and English is one tap away for the words in between.',
    points: [
      'Phonetic typing',
      'Each key shows its Sinhala letter',
      'EN and සිං side by side in the top bar'
    ]
  },
  {
    id: 'onehand',
    title: 'One thumb is enough.',
    body: 'On a crowded train, or with a cup in your other hand: tap the logo and the keys slide under your left or right thumb, with everything else following.',
    points: [
      'Left hand, full width or right hand',
      'One tap on the logo',
      'The five places move with the keys'
    ]
  },
  {
    id: 'clipboard',
    title: 'A clipboard that remembers, privately.',
    body: 'Save what you copied or what you wrote, pin the ones you reuse, and type any of them with a tap. Encrypted on your iPhone, like everything else.',
    points: [
      'Save what you copied or wrote',
      'Pinned items stay at the top',
      'Encrypted on the iPhone'
    ]
  },
  {
    id: 'themes',
    title: 'Make it feel like yours.',
    body: 'Twelve key colours, each with a light and a dark version that follows the app you’re typing in.',
    points: [
      'Twelve key colours',
      'A light and a dark version of each',
      'Matches the app you’re typing in'
    ]
  }
];

// Around the iPhone at the top: what it does, as little notes stuck to the page. They fall
// away when the iPhone crosses to the slideshow.
const stickers = [
  {
    icon: ShieldCheck,
    text: 'Nimal → [[PERSON_7KQ2]]',
    place: 'left-[-4%] top-[9%] -rotate-6',
    look: 'bg-[#F3EFE7] text-[#16183A] font-geist-mono text-[0.8125rem]'
  },
  {
    icon: Languages,
    text: 'EN ⇄ සිං',
    place: 'right-[-20%] top-[34%] rotate-[5deg]',
    look: 'bg-[#FF7A45] text-[#16183A]'
  },
  {
    icon: Heart,
    text: 'Make it a little flirty',
    place: 'left-[-20%] bottom-[30%] rotate-[4deg]',
    look: 'bg-[#23264F]/95 text-[#F3EFE7] ring-1 ring-white/10'
  },
  {
    icon: LockKeyhole,
    text: 'Read on this iPhone',
    place: 'right-[-14%] bottom-[14%] -rotate-3',
    look: 'bg-[#F3EFE7] text-[#16183A]'
  }
];

// The slideshow's steps: the introduction, then each chapter.
const slides = [OPENED, ...chapters.map((_, index) => index)];

// A slide leaves the way the page is going and the next comes in after it. The one leaving goes
// quickly and quietly, a short way; the one arriving takes a little longer.
const slideMotion = {
  enter: (direction: number) => ({ opacity: 0, y: 12 * direction, filter: 'blur(4px)' }),
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: 'easeOut' as const }
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: -12 * direction,
    filter: 'blur(4px)',
    transition: { duration: 0.15, ease: 'easeOut' as const }
  })
};

/**
 * The page's opening and the demo share one iPhone. At the top it stands on the right, beside
 * `hero`, on its Home Screen. Scrolling on, it crosses to the left and stays there, the app opens,
 * and the right side becomes a slideshow: each step of the scroll changes the slide in place and
 * plays that part on the iPhone.
 */
const KeyboardShowcase: React.FC<{ hero: React.ReactNode }> = ({ hero }) => {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const opening = useRef<HTMLDivElement>(null);
  const steps = useRef<(HTMLDivElement | null)[]>([]);
  // The slide in view, and whether it was reached by scrolling down (1) or back up (-1).
  const [{ active, direction }, setSlide] = useState({ active: HOME, direction: 1 });
  const [ready, setReady] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [caption, setCaption] = useState('');
  // Where the hand's fingertip is, how long it takes to get there, and whether it is pressing.
  const [hand, setHand] = useState({ x: 300, y: 820, ms: 300, shown: false });
  const [pressing, setPressing] = useState(false);
  // How large the model's frame is drawn here, against its own points.
  const [scale, setScale] = useState(1);
  // Side by side on a wide screen; on a phone the iPhone is pinned over the slides.
  // Known before the first paint, so the iPhone is drawn where it belongs and doesn't slide
  // there as the page loads.
  const [wide, setWide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );
  const turnedFor = useRef(HOME);
  const reduceMotion = useReducedMotion();
  const [phone, animatePhone] = useAnimate<HTMLDivElement>();

  const tell = useCallback((message: Record<string, unknown>) => {
    frame.current?.contentWindow?.postMessage(message, window.location.origin);
  }, []);

  // The model's captions: one line for each step of the demo it is playing.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow) return;
      const data = event.data as {
        typal?: string;
        text?: string;
        x?: number;
        y?: number;
        ms?: number;
        hidden?: boolean;
      } | null;
      if (data?.typal === 'caption') setCaption(data.text ?? '');
      if (data?.typal === 'hand') {
        const x = data.x ?? 0;
        const y = data.y ?? 0;
        const ms = data.ms ?? 300;
        setHand((last) => {
          if (data.hidden) return { ...last, shown: false };
          if (last.shown) return { x, y, ms, shown: true };
          // Coming back after hiding, it doesn't sweep across from where it last was: it
          // appears just short of where it is going and moves the rest of the way in.
          window.setTimeout(() => setHand({ x, y, ms, shown: true }), 40);
          return { x: x - 40, y: y + 90, ms: 0, shown: true };
        });
      }
      if (data?.typal === 'press') {
        setPressing(true);
        window.setTimeout(() => setPressing(false), 130);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // The hand is drawn in the model's points and scaled with its frame.
  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setScale(element.clientWidth / FRAME.width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // The step crossing a line on the screen is the slide that shows: near the top on a wide
  // screen, so the opening has scrolled away before the iPhone crosses over it; lower down on
  // a phone, where the iPhone is pinned over the top of the screen.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches;
    setWide(wide);
    const stepObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setSlide((slide) =>
            slide.active === index
              ? slide
              : { active: index, direction: index > slide.active ? 1 : -1 }
          );
        }
      },
      { rootMargin: wide ? '-14% 0px -86% 0px' : '-80% 0px -20% 0px' }
    );
    [opening.current, ...steps.current].forEach((step) => step && stepObserver.observe(step));
    const sectionObserver = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting)
    );
    if (section.current) sectionObserver.observe(section.current);
    return () => {
      stepObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  // At the top the iPhone waits on its Home Screen; scrolling on opens the app from its icon,
  // then plays the slide in view. It stops when the section is scrolled away, and with
  // reduced motion no demo plays until it is asked for.
  //
  // Only once the scroll rests on a slide: scrolling quickly past several would otherwise start
  // and stop a demo for each, and the hand would jump between them.
  useEffect(() => {
    if (!ready) return;
    if (!onScreen) return tell({ typal: 'stop' });
    const wait = window.setTimeout(() => {
      if (active === HOME) return tell({ typal: 'home' });
      if (active === OPENED) return tell({ typal: 'open' });
      if (reduceMotion) return;
      setCaption('');
      tell({ typal: 'play', id: chapters[active].id });
    }, 260);
    return () => window.clearTimeout(wait);
  }, [active, ready, onScreen, reduceMotion, tell]);

  // Each new slide turns the iPhone a little, one way then the other, and lets it settle flat
  // again so the keyboard stays sharp while it plays.
  useEffect(() => {
    // Not on load: only when the slide changes.
    if (turnedFor.current === active) return;
    turnedFor.current = active;
    if (reduceMotion || !phone.current) return;
    const way = active === HOME ? -1 : active % 2 ? -0.6 : 1;
    animatePhone(
      phone.current,
      { rotateY: [null, 13 * way, 0], rotateZ: [null, -1.5 * way, 0] },
      { duration: 1, ease: [0.2, 0, 0, 1] }
    );
  }, [active, reduceMotion, phone, animatePhone]);

  // And it drifts a little with the scroll itself, where there is room for it to.
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const drift = useSpring(useTransform(scrollYProgress, [0, 1], [14, -28]), {
    stiffness: 90,
    damping: 24
  });

  const goTo = (index: number) => {
    const step = steps.current[index + 1];
    if (!step) return;
    const line = window.innerHeight * (wide ? 0.14 : 0.8);
    window.scrollTo({
      top: step.getBoundingClientRect().top + window.scrollY - line + 12,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  };

  // Beside the opening the right side is the iPhone's; the slides start once it has crossed.
  const shown = wide ? active : Math.max(active, OPENED);
  const chapter = shown >= 0 ? chapters[shown] : null;
  const number = String(shown + 1).padStart(2, '0');

  return (
    <section ref={section} className="relative overflow-x-clip bg-[#16183A] text-[#F3EFE7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* One column, in two rows: the opening, then the slideshow. The iPhone lies over both,
            so it is beside the opening lines at the top and stays as the slides change. */}
        <div className="relative lg:grid lg:grid-cols-1">
          <div
            ref={opening}
            data-index={HOME}
            className="relative lg:col-start-1 lg:row-start-1 lg:flex lg:min-h-[calc(100vh-4rem)] lg:flex-col lg:justify-center lg:pr-[40%]">
            {hero}
          </div>

          {/* The iPhone: pinned. On a wide screen it starts on the right, crosses to the left
              when the slideshow begins, and stays there. On a phone the hand is cut off at the
              bottom of this block, so it doesn't lie over the slide under it. */}
          <div className="pointer-events-none sticky top-16 z-10 -mx-4 flex h-[62svh] flex-col overflow-clip bg-[#16183A] px-4 pb-2 pt-3 sm:-mx-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:h-[calc(100vh-4rem)] lg:self-start lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-6">
            <motion.div
              initial={false}
              animate={{ x: wide ? (active === HOME ? '25%' : '-25%') : '0%' }}
              transition={
                reduceMotion ? { duration: 0 } : { type: 'spring', duration: 1.1, bounce: 0 }
              }
              className="flex min-h-0 w-full flex-1 flex-col items-center lg:justify-center">
              <div className="relative flex min-h-0 w-full flex-1 items-center justify-center lg:flex-none">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 h-3/5 w-[130%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A45]/20 blur-3xl"
                />
                <motion.div
                  style={reduceMotion ? undefined : { y: wide ? drift : 0 }}
                  className="pointer-events-auto relative h-full [perspective:1400px] lg:h-[min(calc(100vh-8.5rem),882px)]">
                  {/* The notes stuck around it, on a wide screen at the top of the page only. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
                    {stickers.map(({ icon: Icon, text, place, look }, index) => (
                      <motion.div
                        key={text}
                        initial={false}
                        animate={
                          active === HOME
                            ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                            : { opacity: 0, scale: 0.9, filter: 'blur(4px)' }
                        }
                        transition={{
                          duration: active === HOME ? 0.4 : 0.15,
                          delay: active === HOME ? 0.35 + index * 0.1 : 0,
                          ease: 'easeOut'
                        }}
                        className={`absolute ${place}`}>
                        <motion.div
                          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                          transition={{
                            duration: 5.5,
                            delay: index * 0.9,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className={`flex items-center gap-2 whitespace-nowrap rounded-2xl px-3.5 py-2 font-geist text-sm font-semibold shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] ${look}`}>
                          <Icon className="h-4 w-4" strokeWidth={2} />
                          {text}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <div ref={phone} className="relative h-full" style={{ aspectRatio: PHONE_SHAPE }}>
                    {/* The phone is drawn inside the frame below, which is a file of its own:
                        until it arrives, its outline holds the place. */}
                    {!ready && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-[1%] animate-pulse rounded-[15.9%/7.6%] border-[3px] border-[#F3EFE7]/15 bg-[#0F1130] motion-reduce:animate-none"
                      />
                    )}
                    <iframe
                      ref={frame}
                      src={MODEL_URL}
                      title="The TyPal keyboard, playing a demo"
                      onLoad={() => setReady(true)}
                      className="block h-full w-full border-0 bg-transparent [@media(hover:none)]:pointer-events-none"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 origin-top-left"
                      style={{
                        width: FRAME.width,
                        height: FRAME.height,
                        transform: `scale(${scale})`
                      }}>
                      <div
                        className="absolute left-0 top-0 drop-shadow-[0_14px_22px_rgba(0,0,0,0.35)] will-change-transform"
                        style={{
                          width: HAND.size,
                          height: HAND.size,
                          opacity: hand.shown ? 1 : 0,
                          transform: `translate(${FRAME.inset + hand.x - HAND.tipX}px, ${
                            FRAME.inset + hand.y - HAND.tipY
                          }px)`,
                          transition: `transform ${hand.ms}ms cubic-bezier(0.3, 0.7, 0.3, 1), opacity 300ms`
                        }}>
                        <svg
                          width={HAND.size}
                          height={HAND.size}
                          viewBox="0 0 24 24"
                          className="overflow-visible transition-transform duration-100 ease-out"
                          style={{
                            transformOrigin: `${HAND.tipX}px ${HAND.tipY}px`,
                            // turned to reach in from the left, away from the slides
                            transform: pressing ? 'scale(-0.965, 0.965)' : 'scaleX(-1)'
                          }}>
                          <path
                            d={HAND_PATH}
                            fill="rgba(255,255,255,0.14)"
                            stroke="rgba(255,255,255,0.8)"
                            strokeWidth="0.12"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Which slide is showing, as a row of keys: the lit one is where you are. */}
              <nav
                aria-label="Parts of the demo"
                className="pointer-events-auto mt-2 flex items-center lg:mt-5">
                {chapters.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={item.title}
                    aria-current={active === index ? 'true' : undefined}
                    className="group flex h-6 w-6 items-center justify-center rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF7A45]">
                    <span
                      className={`h-2.5 w-2.5 rounded-[3px] transition-colors duration-150 ${
                        active === index
                          ? 'bg-[#FF7A45]'
                          : 'bg-[#F3EFE7]/25 group-hover:bg-[#F3EFE7]/60'
                      }`}
                    />
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          <div id="demo" className="scroll-mt-16 lg:col-start-1 lg:row-start-2">
            {/* The slide: pinned beside (or, on a phone, under) the iPhone, changing in place
                as the steps below scroll past. It is for the eye; the steps carry the same
                words for screen readers, in order. */}
            <div
              aria-hidden
              className="sticky top-[calc(4rem+62svh)] flex h-[calc(38svh-4rem)] items-start overflow-hidden pt-4 lg:top-16 lg:h-[calc(100vh-4rem)] lg:items-center lg:justify-end lg:overflow-visible lg:pt-0">
              <div className="relative w-full lg:w-[calc(50%-3rem)]">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  {shown === HOME ? null : (
                    <motion.div
                      key={shown}
                      custom={reduceMotion ? 0 : direction}
                      variants={slideMotion}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="relative">
                      {chapter ? (
                        <>
                          {/* The slide's number, very large and very faint, behind its words. */}
                          <span className="pointer-events-none absolute -left-3 -top-[5.5rem] hidden select-none font-grotesque text-[15rem] font-semibold leading-none tracking-[-0.06em] text-[#F3EFE7]/[0.045] lg:block">
                            {number}
                          </span>
                          <div className="relative">
                            <p className={`text-[#F3EFE7]/50 ${type.meta}`}>
                              {number} / {chapters.length}
                            </p>
                            <h3 className={`mt-3 lg:mt-4 ${type.heading}`}>{chapter.title}</h3>
                            <p
                              className={`mt-3 text-[#F3EFE7]/70 lg:mt-4 ${type.small} lg:text-[1rem]`}>
                              {chapter.body}
                            </p>
                            <ul
                              className={`mt-6 hidden gap-2.5 text-[#F3EFE7]/85 lg:grid ${type.small}`}>
                              {chapter.points.map((point) => (
                                <li key={point} className="flex items-baseline gap-3">
                                  <span className="h-2 w-2 shrink-0 translate-y-[-1px] rounded-[2.5px] bg-[#FF7A45]" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                            {/* What the keyboard is doing this second, in its own words. */}
                            <p
                              className={`mt-7 hidden min-h-[3.2rem] border-l-2 border-[#FF7A45]/70 pl-4 text-[#F3EFE7]/60 lg:block ${type.small}`}>
                              {caption}
                            </p>
                            {reduceMotion && (
                              <button
                                type="button"
                                tabIndex={-1}
                                onClick={() => tell({ typal: 'play', id: chapter.id, once: true })}
                                className={`pointer-events-auto mt-4 inline-flex min-h-[44px] items-center rounded-xl border border-[#F3EFE7]/25 px-4 transition-[color,border-color,transform] duration-150 ease-out hover:border-[#FF7A45] hover:text-[#FF7A45] active:scale-[0.96] ${type.label}`}>
                                Play this part
                              </button>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <p className={`text-[#F3EFE7]/55 ${type.meta}`}>
                            Live demo · {chapters.length} parts
                          </p>
                          <h2 className={`mt-4 lg:mt-5 ${type.title}`}>
                            Watch it work.
                            <span className={`text-[#FF7A45] ${type.voice}`}>
                              Every part, playing.
                            </span>
                          </h2>
                          <p
                            className={`mt-4 max-w-[34rem] text-[#F3EFE7]/70 lg:mt-6 ${type.body}`}>
                            This is the keyboard itself, drawn for the web from its own code. Keep
                            scrolling and it plays each part, with a hand doing the tapping.
                          </p>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* The steps: what the scroll is measured in. Each is as tall as it should take to
                pass one slide, and holds that slide's words for screen readers. */}
            <div className="-mt-[calc(38svh-4rem)] lg:-mt-[calc(100vh-4rem)]">
              {/* On a phone the first step waits a little, so the Home Screen is seen whole
                  before the app opens. */}
              <div className="h-[30svh] lg:hidden" />
              {slides.map((index, order) => (
                <div
                  key={index}
                  data-index={index}
                  ref={(element) => {
                    steps.current[order] = element;
                  }}
                  className="h-[58svh] lg:h-[74vh]">
                  <div className="sr-only">
                    {index === OPENED ? (
                      <h2>Watch it work. Every part, playing.</h2>
                    ) : (
                      <>
                        <h3>{chapters[index].title}</h3>
                        <p>{chapters[index].body}</p>
                        <ul>
                          {chapters[index].points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
              {/* Room for the last slide to hold before the section ends. */}
              <div className="h-[24svh] lg:h-[30vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyboardShowcase;
