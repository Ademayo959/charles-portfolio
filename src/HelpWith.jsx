import { useState } from 'react';
import { Computer, Layers, Search, GraduationCap, Plus } from 'lucide-react';

const HELP_WITH = [
  {
    icon: Computer,
    title: 'Frontend',
    desc: 'React interfaces that feel considered, not thrown together.',
    images: [],
  },
  {
    icon: Layers,
    title: 'Full-stack apps',
    desc: 'React front ends wired to a real Node/Express/Mongo backend.',
    images: [],
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Making sure the things you build can actually be found.',
    images: [],
  },
  {
    icon: GraduationCap,
    title: 'Student-helping tools',
    desc: 'Voting, polling, and course-resource platforms built for how students actually use them.',
    images: [],
  },
];

export default function HelpWith() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-2">
        <h2 className="font-display font-semibold text-3xl">What I can help with</h2>
        <a href="#work" className="text-xs px-4 font-display py-2.5 rounded-md border border-neutral-200 text-neutral-500 hover:text-neutral-900">
          See my work
        </a>
      </div>

      <ul>
        {HELP_WITH.map((h, i) => {
          const Icon = h.icon;
          const isActive = active === i;

          return (
            <li
              key={h.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="border-b border-neutral-200 last:border-b-0"
            >
              <div className="py-5 flex items-start justify-between gap-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                    <Icon size={19} strokeWidth={2.0} className="text-black" />
                  </div>
                  <p className="text-2xl font-medium font-display">{h.title}</p>
                </div>

                <div className="flex items-start gap-4 flex-1 justify-end">
                  <p className="text-sm text-neutral-400 max-w-sm text-right pt-2">{h.desc}</p>
                  <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                    <Plus
                      size={14}
                      strokeWidth={1.75}
                      className={`transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isActive ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden flex gap-4">
                  {h.images.length === 0 ? (
                    <div className="w-full h-40 rounded-xl bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
                      add images for {h.title}
                    </div>
                  ) : (
                    h.images.map((src, idx) => (
                      <img key={idx} src={src} alt="" className="rounded-xl h-40 object-cover" />
                    ))
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}