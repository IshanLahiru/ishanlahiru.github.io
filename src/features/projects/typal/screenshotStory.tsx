import React, { useRef, useState } from 'react';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'motion/react';
import { ImagePlus, LockKeyhole, ScanText, Sparkles, Users } from 'lucide-react';
import { type } from './type';

// The conversation in the screenshot: the same one the keyboard demo captures.
const messages = [
  { mine: false, text: 'Where are you? We said 6.', time: '6:12 PM' },
  { mine: true, text: 'On the way, traffic is bad', time: '6:14 PM' },
  { mine: false, text: 'Should I order for you?', time: '6:15 PM' },
  { mine: false, text: 'They close the kitchen at 7', time: '6:15 PM' }
];
const reply = 'Yes please, order for me. I’ll be there in 15.';

// How TyPal reads a screenshot, as its help page and its code describe it.
const steps = [
  {
    icon: ImagePlus,
    title: 'Pick the screenshots.',
    body: 'Up to ten, in order. TyPal sees only the pictures you choose, never the rest of your photo library.'
  },
  {
    icon: ScanText,
    title: 'Read on this iPhone.',
    body: 'Apple’s text recognition reads each one on the device. Nothing is uploaded, not even for a moment.'
  },
  {
    icon: Users,
    title: 'Who said what.',
    body: 'Bubbles on the right become you, the left become them. The clock, the header and the “Today” in the middle are left out.'
  },
  {
    icon: LockKeyhole,
    title: 'Only the words stay.',
    body: 'The picture is let go as soon as it’s read. The messages are saved encrypted, and a reply is one ask away.'
  }
];

// Where each step starts, along the section's scroll.
const STEP_AT = [0, 0.2, 0.47, 0.6];

// A value that follows the section's scroll over part of it, clamped so it rests at either end.
const useRange = (progress: MotionValue<number>, input: number[], output: number[]) =>
  useTransform(progress, input, output, { clamp: true });

/** The screenshot as it was picked: someone else's chat app, in a picture. */
const Screenshot: React.FC<{ progress: MotionValue<number> }> = ({ progress }) => {
  const opacity = useRange(progress, [0.02, 0.12, 0.72, 0.84], [0, 1, 1, 0]);
  const y = useRange(progress, [0.02, 0.14], [60, 0]);
  const rotate = useRange(progress, [0.02, 0.14, 0.72, 0.84], [-12, -5, -5, -9]);
  const scale = useRange(progress, [0.72, 0.84], [1, 0.86]);
  const blur = useRange(progress, [0.72, 0.84], [0, 6]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);
  // The scan, top to bottom.
  const scanTop = useRange(progress, [0.21, 0.45], [4, 96]);
  const scanY = useTransform(scanTop, (value) => `${value}%`);
  const scanOpacity = useRange(progress, [0.2, 0.23, 0.44, 0.47], [0, 1, 1, 0]);
  // What is left out: the clock, the header, the day, the times, the typing bar.
  const chrome = useRange(progress, [0.48, 0.58], [1, 0.25]);
  const strike = useRange(progress, [0.48, 0.58], [0, 1]);

  return (
    <motion.div
      style={{ opacity, y, rotate, scale, filter }}
      className="absolute left-[3%] top-[3%] flex aspect-[9/17] w-[50%] flex-col overflow-hidden rounded-[7cqw] bg-[#0B0B0F] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_0_1px_oklch(1_0_0/0.12)]">
      {/* Status bar and header */}
      <motion.div style={{ opacity: chrome }} className="relative">
        <div className="flex items-center justify-between px-[5cqw] pt-[2.6cqw] font-geist text-[2.2cqw] font-semibold text-white">
          <span>6:16</span>
          <span className="h-[1.6cqw] w-[4.5cqw] rounded-[0.5cqw] bg-white" />
        </div>
        <div className="flex items-center gap-[2cqw] border-b border-white/10 px-[4cqw] py-[2.4cqw]">
          <span className="flex h-[6cqw] w-[6cqw] items-center justify-center rounded-full bg-[#7C8CF8] font-geist text-[2.4cqw] font-bold text-white">
            N
          </span>
          <span className="font-geist text-[2.6cqw] font-semibold text-white">Nimal</span>
        </div>
        <motion.span
          style={{ scaleX: strike }}
          className="absolute left-[4cqw] right-[4cqw] top-1/2 h-[0.35cqw] origin-left bg-[#FF7A45]"
        />
      </motion.div>

      <div className="relative flex flex-1 flex-col gap-[2cqw] px-[3.4cqw] py-[3cqw]">
        <motion.span
          style={{ opacity: chrome }}
          className="self-center rounded-full bg-white/10 px-[2.4cqw] py-[0.6cqw] font-geist text-[1.9cqw] text-white/55">
          Today
        </motion.span>
        {messages.map((message, index) => (
          <Bubble key={message.text} progress={progress} index={index} {...message} />
        ))}
        {/* The scan line, as Vision reads down the picture. */}
        <motion.div
          style={{ top: scanY, opacity: scanOpacity }}
          className="pointer-events-none absolute inset-x-0 h-[0.5cqw] bg-[#FF7A45] shadow-[0_0_24px_6px_rgba(255,122,69,0.55)]"
        />
      </div>

      <motion.div style={{ opacity: chrome }} className="px-[3cqw] pb-[3cqw]">
        <div className="rounded-full bg-white/10 px-[3cqw] py-[1.6cqw] font-geist text-[2cqw] text-white/35">
          Message
        </div>
      </motion.div>
    </motion.div>
  );
};

/** One bubble in the screenshot: found by the scan, then tagged with who sent it. */
const Bubble: React.FC<{
  progress: MotionValue<number>;
  index: number;
  mine: boolean;
  text: string;
  time: string;
}> = ({ progress, index, mine, text, time }) => {
  const found = useRange(progress, [0.25 + index * 0.045, 0.29 + index * 0.045], [0, 1]);
  const tag = useRange(progress, [0.5 + index * 0.02, 0.56 + index * 0.02], [0, 1]);
  const tagScale = useRange(progress, [0.5 + index * 0.02, 0.56 + index * 0.02], [0.6, 1]);
  const stamp = useRange(progress, [0.48, 0.58], [1, 0.25]);
  return (
    <div className={`relative max-w-[78%] ${mine ? 'self-end' : 'self-start'}`}>
      <div
        className={`rounded-[2.6cqw] px-[2.6cqw] py-[1.6cqw] font-geist text-[2.25cqw] leading-[1.3] text-white ${
          mine ? 'bg-[#3A4FD8]' : 'bg-[#26262B]'
        }`}>
        {text}
        <motion.span
          style={{ opacity: stamp }}
          className="ml-[1.6cqw] whitespace-nowrap text-[1.6cqw] text-white/45">
          {time}
        </motion.span>
      </div>
      {/* The box text recognition draws around what it read. */}
      <motion.span
        style={{ opacity: found }}
        className="pointer-events-none absolute -inset-[0.8cqw] rounded-[3cqw] border-[0.35cqw] border-dashed border-[#FF7A45]"
      />
      <motion.span
        style={{ opacity: tag, scale: tagScale }}
        className={`absolute -top-[2.4cqw] rounded-full px-[1.6cqw] py-[0.4cqw] font-geist-mono text-[1.6cqw] font-medium uppercase tracking-[0.12em] ${
          mine
            ? 'right-[1cqw] bg-[#16183A] text-[#F3EFE7]'
            : 'left-[1cqw] bg-[#FF7A45] text-[#16183A]'
        }`}>
        {mine ? 'Me' : 'Nimal'}
      </motion.span>
    </div>
  );
};

/** What TyPal keeps: the messages, who sent them, encrypted, and a reply when asked. */
const SavedChat: React.FC<{ progress: MotionValue<number> }> = ({ progress }) => {
  const opacity = useRange(progress, [0.58, 0.68], [0, 1]);
  const x = useRange(progress, [0.58, 0.7], [48, 0]);
  const rotate = useRange(progress, [0.58, 0.7], [6, 2]);
  const locked = useRange(progress, [0.82, 0.88], [0, 1]);
  const replyIn = useRange(progress, [0.88, 0.95], [0, 1]);
  const replyY = useRange(progress, [0.88, 0.95], [16, 0]);
  return (
    <motion.div
      style={{ opacity, x, rotate }}
      className="absolute right-[3%] top-[12%] w-[56%] rounded-[5cqw] bg-[#23264F] p-[4cqw] text-[#F3EFE7] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_0_1px_oklch(1_0_0/0.1)]">
      <div className="flex items-center justify-between">
        <span className="font-grotesque text-[3.4cqw] font-semibold tracking-[-0.02em]">Nimal</span>
        <span className="font-geist-mono text-[1.7cqw] uppercase tracking-[0.18em] text-[#F3EFE7]/50">
          4 messages
        </span>
      </div>
      <div className="mt-[3cqw] flex flex-col gap-[1.6cqw]">
        {messages.map((message, index) => (
          <SavedLine key={message.text} progress={progress} index={index} {...message} />
        ))}
      </div>
      <motion.div
        style={{ opacity: locked }}
        className="mt-[3cqw] flex items-center gap-[1.4cqw] font-geist text-[1.9cqw] text-[#F3EFE7]/60">
        <LockKeyhole className="h-[2.4cqw] w-[2.4cqw]" strokeWidth={2} />
        Saved encrypted on this iPhone. The picture is gone.
      </motion.div>
      <motion.div
        style={{ opacity: replyIn, y: replyY }}
        className="mt-[3cqw] rounded-[3cqw] bg-[#FF7A45] p-[2.6cqw] text-[#16183A]">
        <span className="flex items-center gap-[1cqw] font-geist-mono text-[1.6cqw] font-medium uppercase tracking-[0.16em]">
          <Sparkles className="h-[2.2cqw] w-[2.2cqw]" strokeWidth={2.2} />
          Your reply
        </span>
        <span className="mt-[1cqw] block font-geist text-[2.4cqw] font-medium leading-[1.3]">
          {reply}
        </span>
      </motion.div>
    </motion.div>
  );
};

const SavedLine: React.FC<{
  progress: MotionValue<number>;
  index: number;
  mine: boolean;
  text: string;
}> = ({ progress, index, mine, text }) => {
  const opacity = useRange(progress, [0.64 + index * 0.045, 0.69 + index * 0.045], [0, 1]);
  const y = useRange(progress, [0.64 + index * 0.045, 0.69 + index * 0.045], [10, 0]);
  return (
    <motion.div style={{ opacity, y }} className="flex items-start gap-[1.6cqw]">
      <span
        className={`mt-[0.3cqw] shrink-0 rounded-full px-[1.4cqw] py-[0.3cqw] font-geist-mono text-[1.5cqw] font-medium uppercase tracking-[0.1em] ${
          mine ? 'bg-[#F3EFE7] text-[#16183A]' : 'bg-[#FF7A45]/90 text-[#16183A]'
        }`}>
        {mine ? 'Me' : 'Nimal'}
      </span>
      <span className="font-geist text-[2.2cqw] leading-[1.35] text-[#F3EFE7]/90">{text}</span>
    </motion.div>
  );
};

/**
 * Some chats can't be copied: TyPal reads the screenshot instead. As the section scrolls, a
 * screenshot is picked, read line by line, sorted into who said what, and handed over as a
 * saved conversation with a reply, the picture itself let go.
 */
const ScreenshotStory: React.FC = () => {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress: scrolled } = useScroll({
    target: section,
    offset: ['start start', 'end end']
  });
  // Read through a plain value: bound straight to opacity, the library hands the effect to
  // the browser's own scroll timeline, which ignores the ranges below and fades things out.
  const scrollYProgress = useTransform(scrolled, (value) => value);
  const [step, setStep] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = STEP_AT.filter((at) => value >= at).length - 1;
    setStep((last) => (last === next ? last : Math.max(0, next)));
  });
  const current = steps[step];

  return (
    <section
      ref={section}
      aria-labelledby="screenshots-title"
      className="relative h-[330svh] bg-[#101231] text-[#F3EFE7] lg:h-[380vh]">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-8">
          <div>
            <p className={`text-[#F3EFE7]/55 ${type.meta}`}>From a screenshot</p>
            <h2 id="screenshots-title" className={`mt-4 lg:mt-5 ${type.title}`}>
              Some chats won’t copy.
              <span className={`text-[#FF7A45] ${type.voice}`}>So TyPal reads the picture.</span>
            </h2>

            {/* On a wide screen every step is listed and the one happening is lit; on a phone
                there is room for the one happening. */}
            <ol className="mt-8 hidden gap-1 lg:grid xl:mt-10">
              {steps.map(({ icon: Icon, title, body }, index) => (
                <li
                  key={title}
                  className={`flex gap-4 rounded-2xl p-4 transition-[opacity,background-color] duration-300 ${
                    step === index ? 'bg-[#23264F] opacity-100' : 'opacity-40'
                  }`}>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      step === index ? 'bg-[#FF7A45] text-[#16183A]' : 'bg-[#F3EFE7]/10'
                    }`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className={`block ${type.subheading}`}>{title}</span>
                    {/* Only the step happening says more, so the list fits a short screen. */}
                    <span
                      className={`mt-1 text-[#F3EFE7]/65 ${type.small} ${
                        step === index ? 'block' : 'hidden'
                      }`}>
                      {body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className={`mt-6 hidden max-w-[30rem] text-[#F3EFE7]/50 xl:block ${type.caption}`}>
              Screenshots in English and Chinese read best; for Sinhala, copy the messages instead.
              Reading screenshots in the app is part of Premium.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] [container-type:inline-size] lg:max-w-[40rem]">
            <div className="relative aspect-[10/9] w-full">
              <Screenshot progress={scrollYProgress} />
              <SavedChat progress={scrollYProgress} />
            </div>
          </div>

          <div className="min-h-[7.5rem] lg:hidden" aria-live="off">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, ease: 'easeOut' }}>
                <p className={`text-[#F3EFE7]/50 ${type.meta}`}>
                  {String(step + 1).padStart(2, '0')} / {steps.length}
                </p>
                <p className={`mt-2 ${type.subheading}`}>{current.title}</p>
                <p className={`mt-1 text-[#F3EFE7]/65 ${type.small}`}>{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotStory;
