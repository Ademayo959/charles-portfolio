import { ArrowUpRight } from 'lucide-react';
import HelpWith from './HelpWith';

const BUILD_HISTORY = [
  { title: 'Reekol', subtitle: 'Course-material sharing platform, in progress', date: '2026', link: 'https://reekol.vercel.app' },
  { title: 'VoteLive', subtitle: 'Adopted for a real departmental election', date: '2026', link: 'https://votelive.click' },
  { title: 'Cascade.js', subtitle: 'JS form-validation library, published on npm', date: '2025', link: 'https://cascadejs.vercel.app' },
  { title: 'FUTAevents', subtitle: 'A capus event discovery platform', date: '2026', link: 'https://futaevents.vercel.app' },
];

const SKILLS = [
  { label: 'Frontend', value: 'React, Tailwind, JavaScript', link: '#' },
  { label: 'Backend', value: 'Node.js, Express, MongoDB, Firebase', link: '#' },
  { label: 'Learning now', value: 'TypeScript, Next.js', link: '#' },
];

const HELP_WITH = [
  { title: 'Full-stack web apps', desc: 'React front ends wired to a real Node/Express/Mongo backend, not just static pages.' },
  { title: 'Student-facing tools', desc: 'Voting, polling, and course-resource platforms built for how students actually use them.' },
  { title: 'Form & data validation', desc: 'Cascade.js — a small library for clean client-side validation without the bloat.' },
  { title: 'DSA & problem solving', desc: 'Currently deep in NeetCode/LeetCode, prepping for global-standard technical interviews.' },
];

const TOP_SONGS = [
  { rank: 1, title: '—', artist: '—' },
  { rank: 2, title: '—', artist: '—' },
  { rank: 3, title: '—', artist: '—' },
];

function Row({ title, subtitle, date, link }) {
  return (
    <li className="py-4 border-b border-neutral-200 last:border-b-0 flex items-start justify-between gap-4">
      <div>
        <p className="text-md font-light">
          {subtitle} at <span className="font-semibold">{title}</span>
        </p>
        <p className="text-sm text-neutral-400 mt-1">{date}</p>
      </div>
      <a href={link} className="shrink-0 mt-0.5 text-neutral-400 hover:text-neutral-900">
        <ArrowUpRight size={16} strokeWidth={1.75} />
      </a>
    </li>
  );
}

export default function Info() {
  return (
    <>
      {/* Two-column: build history + skills, hairline top/bottom border like the reference block */}
      <section className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div id="build">
            <h2 className="font-display font-medium text-4xl mb-4">What I&apos;ve been building</h2>
            <ul>
              {BUILD_HISTORY.map((item) => <Row key={item.title} {...item} />)}
            </ul>
          </div>

          <div id="skills">
            <h2 className="font-display font-medium text-4xl mb-4">What I work with</h2>
            <ul>
              {SKILLS.map((s) => (
                <li key={s.label} className="py-4 border-b border-neutral-200 last:border-b-0 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium">{s.label}</p>
                    <p className="text-sm text-neutral-400 mt-1">{s.value}</p>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={1.75} className="shrink-0 mt-0.5 text-neutral-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* "I can help you with" — services-style list from the reference */}
      <HelpWith />

      {/* Top songs + contact */}
      <section className="max-w-6xl mx-auto px-6 py-14" id="contact">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-neutral-400 mb-3">Top 3 rn</p>
            <ul className="space-y-2">
              {TOP_SONGS.map((s) => (
                <li key={s.rank} className="text-sm flex gap-3">
                  <span className="text-neutral-300 font-mono">0{s.rank}</span>
                  <span>{s.title} — <span className="text-neutral-400">{s.artist}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-semibold text-xl mb-3">Get in touch</h2>
            <p className="text-sm text-neutral-400 mb-4">your-email@example.com</p>
            <div className="flex gap-3 text-sm">
              <a href="#" className="underline underline-offset-4">GitHub</a>
              <a href="#" className="underline underline-offset-4">X</a>
              <a href="#" className="underline underline-offset-4">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}