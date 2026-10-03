import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform
} from 'motion/react';
import { Heart, KeyRound, LockKeyhole, ScanFace, Undo2 } from 'lucide-react';
import { edge, press, type } from './type';

/* ---------- Why it exists: a statement that lights up word by word as it is read ---------- */

const statement =
  'Every message is written twice. Once by you, in a hurry, with your thumbs. And once more by the person who reads it, in their mood, in their language, at the end of their day.';
const answer = 'TyPal writes for the second one.';

const Word: React.FC<{ progress: MotionValue<number>; at: [number, number]; children: string }> = ({
  progress,
  at,
  children
}) => {
  const opacity = useTransform(progress, at, [0.16, 1], { clamp: true });
  return <motion.span style={{ opacity }}>{children} </motion.span>;
};

export const Manifesto: React.FC = () => {
  const text = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: scrolled } = useScroll({
    target: text,
    offset: ['start 85%', 'end 50%']
  });
  // A plain value, so each word keeps its own range (see screenshotStory.tsx).
  const scrollYProgress = useTransform(scrolled, (value) => value);
  const words = [...statement.split(' '), ...answer.split(' ')];
  const lit = (index: number): [number, number] => [
    index / words.length,
    (index + 1) / words.length
  ];
  const first = statement.split(' ').length;

  return (
    <section aria-labelledby="why-title" className="bg-[#16183A] text-[#F3EFE7]">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pb-36 lg:px-8">
        <h2 id="why-title" className={`text-[#F3EFE7]/55 ${type.meta}`}>
          Why it exists
        </h2>
        <p
          ref={text}
          className="mt-8 max-w-5xl text-balance font-grotesque text-[clamp(1.875rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
          {reduceMotion ? (
            <>
              {statement} <span className={`text-[#FF7A45] ${type.voice} inline`}>{answer}</span>
            </>
          ) : (
            <>
              {words.slice(0, first).map((word, index) => (
                <Word key={index} progress={scrollYProgress} at={lit(index)}>
                  {word}
                </Word>
              ))}
              <span className={`text-[#FF7A45] ${type.voice} inline`}>
                {words.slice(first).map((word, index) => (
                  <Word key={index} progress={scrollYProgress} at={lit(first + index)}>
                    {word}
                  </Word>
                ))}
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

/* ---------- Spot, swap, send, restore: what happens to a message on its way to an AI ---------- */

type Piece = string | { text: string; kind: 'private' | 'code' };

const stages: { name: string; where: string; line: string; message: Piece[] }[] = [
  {
    name: 'Spot',
    where: 'On your iPhone',
    line: 'Names, numbers, addresses and the private terms you add are found as you type.',
    message: [
      { text: 'nimal', kind: 'private' },
      ' call me on ',
      { text: '077 123 4567', kind: 'private' },
      ' when ur free'
    ]
  },
  {
    name: 'Swap',
    where: 'Still on your iPhone',
    line: 'Each becomes a code, made fresh for every request.',
    message: [
      { text: '[[PERSON_7KQ2]]', kind: 'code' },
      ' call me on ',
      { text: '[[PHONE_M3XD]]', kind: 'code' },
      ' when ur free'
    ]
  },
  {
    name: 'Send',
    where: 'What the AI sees, and sends back',
    line: 'Only the coded text leaves. If anything private slips through, nothing is sent at all.',
    message: [
      'Hi ',
      { text: '[[PERSON_7KQ2]]', kind: 'code' },
      ', could you call me on ',
      { text: '[[PHONE_M3XD]]', kind: 'code' },
      ' when you’re free?'
    ]
  },
  {
    name: 'Restore',
    where: 'Back on your iPhone',
    line: 'Your real words go back in, here, before you ever see the answer.',
    message: [
      'Hi ',
      { text: 'Nimal', kind: 'private' },
      ', could you call me on ',
      { text: '077 123 4567', kind: 'private' },
      ' when you’re free?'
    ]
  }
];

const privacyPoints = [
  'No accounts',
  'No tracking or ads',
  'Encrypted on device',
  'Not in iCloud backups',
  'Delete everything in one tap'
];

export const Secrets: React.FC = () => {
  const card = useRef<HTMLDivElement>(null);
  const inView = useInView(card, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);
  const [held, setHeld] = useState(false);

  // It walks through the four on its own while it is in view, unless someone has picked one.
  useEffect(() => {
    if (!inView || held || reduceMotion) return;
    const timer = window.setInterval(() => setStage((last) => (last + 1) % stages.length), 2800);
    return () => window.clearInterval(timer);
  }, [inView, held, reduceMotion]);

  const current = stages[stage];

  return (
    <section
      aria-labelledby="secrets-title"
      className="bg-[#16183A] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div
        ref={card}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#23264F]/70 px-6 py-12 text-[#F3EFE7] shadow-[0_0_0_1px_oklch(1_0_0/0.08)] sm:px-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p className={`text-[#F3EFE7]/55 ${type.meta}`}>Privacy, step by step</p>
            <h2 id="secrets-title" className={`mt-5 ${type.title}`}>
              Spot. Swap. Send.
              <span className={`text-[#FF7A45] ${type.voice}`}>Restore.</span>
            </h2>
            <p className={`mt-6 max-w-[30rem] text-[#F3EFE7]/70 ${type.body}`}>
              An AI can help you say it better without ever learning who you’re saying it to. This
              is the whole journey of a message, and most of it never leaves your hand.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={stage === index}
                  onClick={() => {
                    setHeld(true);
                    setStage(index);
                  }}
                  className={`min-h-[44px] rounded-full px-4 ${press} ${type.label} ${
                    stage === index
                      ? 'bg-[#FF7A45] text-[#16183A]'
                      : `text-[#F3EFE7]/75 hover:text-[#F3EFE7] ${edge.dark}`
                  }`}>
                  {String(index + 1).padStart(2, '0')} {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[17rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, ease: 'easeOut' }}>
                <p className={`text-[#F3EFE7]/50 ${type.meta}`}>{current.where}</p>
                <p className="mt-4 rounded-[1.5rem] bg-[#16183A] p-6 font-geist text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.4] tracking-[-0.01em] shadow-[0_0_0_1px_oklch(1_0_0/0.08)] sm:p-8">
                  {current.message.map((piece, index) =>
                    typeof piece === 'string' ? (
                      <span key={index}>{piece}</span>
                    ) : (
                      <span
                        key={index}
                        className={
                          piece.kind === 'code'
                            ? 'rounded-md bg-[#FF7A45]/15 px-1.5 font-geist-mono text-[0.8em] text-[#FF9A70]'
                            : 'rounded-md bg-[#40C8E0]/20 px-1 text-[#F3EFE7] underline decoration-[#40C8E0] decoration-2 underline-offset-4'
                        }>
                        {piece.text}
                      </span>
                    )
                  )}
                </p>
                <p className={`mt-5 max-w-[32rem] text-[#F3EFE7]/70 ${type.body}`}>
                  {current.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[#F3EFE7]/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className={`flex flex-wrap gap-2 ${type.small}`}>
            {privacyPoints.map((point) => (
              <li
                key={point}
                className={`flex items-center gap-2 rounded-full px-4 py-2 ${edge.dark}`}>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A45]" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            to="/projects/typal/privacy-policy"
            className={`inline-flex min-h-[44px] shrink-0 items-center self-start rounded-xl bg-[#FF7A45] px-5 text-[#16183A] hover:bg-[#ff8d5e] lg:self-auto ${press} ${type.label}`}>
            Read the Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Everything around it: a bento of the smaller things ---------- */

const styles = [
  { name: 'Flirty', color: '#FF5A8A' },
  { name: 'Friendly', color: '#FF9500' },
  { name: 'Professional', color: '#007AFF' },
  { name: 'Concise', color: '#FFCC00' },
  { name: 'Family', color: '#34C759' }
];
const providers = [
  'TyPal AI',
  'OpenAI',
  'Anthropic',
  'Google',
  'OpenRouter',
  'Mistral',
  'Groq',
  'xAI'
];

const Tile: React.FC<{
  className?: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}> = ({ className = '', title, body, children }) => (
  <div
    className={`flex flex-col justify-between gap-8 rounded-[1.75rem] bg-[#23264F]/70 p-6 sm:p-7 ${edge.dark} ${className}`}>
    <div>{children}</div>
    <div>
      <h3 className={type.subheading}>{title}</h3>
      <p className={`mt-2 max-w-[28rem] text-[#F3EFE7]/65 ${type.small}`}>{body}</p>
    </div>
  </div>
);

export const Bento: React.FC = () => (
  <section aria-labelledby="bento-title" className="bg-[#101231] text-[#F3EFE7]">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className={`text-[#F3EFE7]/55 ${type.meta}`}>Everything around it</p>
      <h2 id="bento-title" className={`mt-5 max-w-4xl ${type.title}`}>
        The small things,
        <span className={`text-[#FF7A45] ${type.voice}`}>made with the same care.</span>
      </h2>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
        <Tile
          className="sm:col-span-2 lg:col-span-4"
          title="A style for every person"
          body="Your crush, your boss, the family group: each gets a style, with its own notes and its own private terms, used whenever you write to them.">
          <div className="flex flex-wrap gap-2">
            {styles.map((style, index) => (
              <span
                key={style.name}
                className={`flex items-center gap-2 rounded-full bg-[#16183A] px-3.5 py-2 ${edge.dark} ${type.label} ${
                  index === 0 ? 'outline outline-2 outline-offset-2 outline-[#F3EFE7]' : ''
                }`}>
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: style.color }} />
                {style.name}
              </span>
            ))}
          </div>
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="TyPal AI, or your own key"
          body="No sign-up for TyPal AI. Or bring a key and talk to the provider directly.">
          <div className="flex flex-wrap gap-1.5">
            {providers.map((provider) => (
              <span
                key={provider}
                className={`rounded-md px-2 py-1 font-geist-mono text-xs ${
                  provider === 'TyPal AI' ? 'bg-[#FF7A45] text-[#16183A]' : 'bg-[#F3EFE7]/[0.08]'
                }`}>
                {provider}
              </span>
            ))}
          </div>
        </Tile>
        <Tile
          className="sm:col-span-2 lg:col-span-6"
          title="Yes, it can flirt."
          body="Make a Flirty style for the one you’re talking to, or just ask it to “make it a little flirty”. Your words with a wink, and you still choose what gets sent.">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-xl bg-[#16183A] px-4 py-2.5 font-geist text-sm ${edge.dark}`}>
              hey what are u doing friday
            </span>
            <Heart className="h-5 w-5 shrink-0 text-[#FF5A8A]" strokeWidth={2} />
            <span className="rounded-xl bg-[#FF5A8A] px-4 py-2.5 font-geist text-sm text-[#16183A]">
              Free Friday? I’ve been looking for an excuse to see you.
            </span>
          </div>
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="Encrypted where it rests"
          body="Every name, note and message is sealed with a key made on this iPhone that never leaves it.">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16183A] text-[#FF7A45]">
              <LockKeyhole className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <span className="font-geist-mono text-sm text-[#F3EFE7]/65">AES-256-GCM</span>
          </div>
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="Stays out of passwords"
          body="In password and code fields TyPal reads nothing, saves nothing and learns nothing.">
          <div className={`flex items-center gap-3 rounded-xl bg-[#16183A] px-4 py-3 ${edge.dark}`}>
            <KeyRound className="h-4 w-4 text-[#F3EFE7]/50" strokeWidth={1.75} />
            <span className="font-geist-mono text-lg tracking-[0.3em] text-[#F3EFE7]/55">
              ••••••••
            </span>
          </div>
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="Behind your face"
          body="App Lock keeps your notes and chats behind Face ID or your passcode.">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16183A] text-[#F3EFE7]">
            <ScanFace className="h-6 w-6" strokeWidth={1.75} />
          </span>
        </Tile>
        <Tile
          className="lg:col-span-3"
          title="Sinhala and Tamil, by sound"
          body="Type how a word sounds and watch it become itself. Each key carries its letter.">
          <div className="flex flex-wrap gap-2">
            {[
              ['k', 'ක'],
              ['m', 'ම'],
              ['n', 'න'],
              ['k', 'க'],
              ['m', 'ம'],
              ['n', 'ந']
            ].map(([latin, letter], index) => (
              <span
                key={index}
                className={`relative flex h-14 w-11 items-center justify-center rounded-[0.6rem] bg-[#3A3E6E] font-geist text-xl ${edge.dark}`}>
                {latin}
                <span className="absolute right-1 top-0.5 text-[0.7rem] text-[#FF7A45]">
                  {letter}
                </span>
              </span>
            ))}
          </div>
        </Tile>
        <Tile
          className="sm:col-span-2 lg:col-span-3"
          title="Nothing changes until you tap"
          body="Your words only change when you ask. Undo puts back exactly what you wrote; redo brings the new version again.">
          <div className="flex items-center gap-3">
            <span className={`rounded-xl bg-[#16183A] px-4 py-2.5 font-geist text-sm ${edge.dark}`}>
              nimal im running late
            </span>
            <Undo2 className="h-5 w-5 shrink-0 text-[#FF7A45]" strokeWidth={2} />
            <span className="rounded-xl bg-[#FF7A45] px-4 py-2.5 font-geist text-sm text-[#16183A]">
              Hey Nimal, I’m running late!
            </span>
          </div>
        </Tile>
      </div>
    </div>
  </section>
);

/* ---------- Voices: the same keyboard, many people, many languages ---------- */

const voices = [
  ['Running 10 minutes late, sorry!', 'light'],
  ['Free Friday? I’ve been looking for an excuse to see you.', 'pink'],
  ['ආයුබෝවන් අම්මේ', 'coral'],
  ['Per our call, the revised quote is attached.', 'dark'],
  ['வணக்கம், நாளை சந்திப்போம்', 'light'],
  ['Haha okay fine, you win', 'coral'],
  ['收到，谢谢！', 'dark'],
  ['Can we move it to Friday?', 'light'],
  ['Still smiling at your last text', 'pink'],
  ['Thank you for your patience.', 'dark']
];

const Bubble: React.FC<{ text: string; tone: string }> = ({ text, tone }) => (
  <span
    className={`shrink-0 rounded-[1.4rem] px-5 py-3 font-geist text-base sm:text-lg ${
      tone === 'coral'
        ? 'bg-[#FF7A45] text-[#16183A]'
        : tone === 'pink'
          ? 'bg-[#FF5A8A] text-[#16183A]'
          : tone === 'dark'
            ? 'bg-[#F3EFE7] text-[#16183A]'
            : `bg-[#23264F] text-[#F3EFE7] ${edge.dark}`
    }`}>
    {text}
  </span>
);

export const Voices: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const rows = [voices, [...voices].reverse()];
  return (
    <section
      aria-label="Messages in many voices"
      className="overflow-hidden bg-[#101231] pb-16 sm:pb-24">
      {reduceMotion ? (
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8">
          {voices.map(([text, tone]) => (
            <Bubble key={text} text={text} tone={tone} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {rows.map((row, index) => (
            <motion.div
              key={index}
              aria-hidden={index > 0}
              className="flex w-max gap-3"
              animate={{ x: index ? ['-50%', '0%'] : ['0%', '-50%'] }}
              transition={{ duration: 46, ease: 'linear', repeat: Infinity }}>
              {[...row, ...row].map(([text, tone], position) => (
                <Bubble key={position} text={text} tone={tone} />
              ))}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

/* ---------- A note from the maker ---------- */

export const MakersNote: React.FC = () => (
  <section aria-label="A note from the maker" className="bg-[#16183A] text-[#F3EFE7]">
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
      <img
        src="/projects/typal/typal-symbol.svg"
        alt=""
        className="mx-auto h-12 w-12 rounded-[22.37%] outline outline-1 -outline-offset-1 outline-[oklch(1_0_0/0.1)]"
      />
      <p className="mt-8 text-balance font-voice text-[clamp(1.5rem,3.2vw,2.25rem)] italic leading-[1.35] tracking-[-0.01em] text-[#F3EFE7]/85">
        Most keyboards help you type faster. I wanted one that helps you be understood: by a manager
        in English, by your mother in Sinhala, by the friend who reads every full stop as anger. And
        one that keeps the people in your messages to itself.
      </p>
      <p className="mt-6 font-voice text-[clamp(1.5rem,3.2vw,2.25rem)] italic leading-[1.35] text-[#F3EFE7]/85">
        I hope it says it the way you mean it.
      </p>
      <p className="mt-8 font-voice text-3xl italic text-[#FF7A45]">Ishan Lahiru</p>
      <p className={`mt-1 text-[#F3EFE7]/55 ${type.meta}`}>Made TyPal</p>
    </div>
  </section>
);
