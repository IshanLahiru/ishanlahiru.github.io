import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';
import Reveal from './Reveal';

const inputClass =
  'w-full rounded-lg bg-zinc-800 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const budget = data.get('budget');
    const message = data.get('message');
    const body = `From: ${name} (${email})\nBudget: ${budget}\n\n${message}`;
    window.location.href = `mailto:ishanlahiru2002@gmail.com?subject=${encodeURIComponent(
      `Project inquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact">
      <Reveal>
        <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block text-white">Let's Work</span>
          <span className="block text-zinc-800">Together</span>
        </h2>
      </Reveal>

      <form onSubmit={handleSubmit} className="mt-14 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm text-slate-400">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm text-slate-400">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Your@email.com"
              className={`mt-2 ${inputClass}`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-budget" className="text-sm text-slate-400">
            Budget
          </label>
          <div className="relative mt-2">
            <select
              id="contact-budget"
              name="budget"
              defaultValue=""
              className={`appearance-none ${inputClass}`}
            >
              <option value="" disabled>
                Select...
              </option>
              <option>&lt;$3k</option>
              <option>$3k - $5k</option>
              <option>$5k - $10k</option>
              <option>&gt;$10k</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm text-slate-400">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder="Message"
            className={`mt-2 resize-y ${inputClass}`}
          />
        </div>

        <button
          type="submit"
          className="min-h-[52px] w-full rounded-lg bg-orange-600 text-sm font-bold text-white transition-all duration-150 hover:bg-orange-500 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </Section>
  );
};

export default Contact;
