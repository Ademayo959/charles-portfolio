import GitHubIcon from './icons/GitHubIcon';
import XIcon from './icons/XIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react'; // this one's still fine, it's not a brand icon
import Info from './Info';
import Projects from './Projects';
import portrait from './assets/portrait.jpg'
import logo from './assets/logo2.jpg'
import WifiIcon from './icons/WifiIcon';
import BatteryIcon from './icons/BatteryIcon';

export default function App() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatted = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">
            {/* Fixed social icon dock — mirrors the floating strip in the reference */}
            <div className="hidden lg:flex flex-col gap-3 fixed right-6 top-1/5 z-20">
                <a href="https://github.com/Ademayo959" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50">
                    <GitHubIcon size={22} />
                </a>
                <a href="https://x.com/build_pixels" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50">
                    <XIcon size={22} />
                </a>
                <a href="https://www.linkedin.com/in/adeleye-mayowa-75a937359/" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50">
                    <LinkedInIcon size={22} />
                </a>
            </div>

            {/* Top nav */}
            <header className="max-w-6xl mx-auto px-4 py-4 md:px-6 md:py-6 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-8">
                    <div className="">
                        <img src={logo} alt="logo" className='h-12 w-12 md:h-13 md:w-13' />
                    </div>
                    <nav className="flex items-center gap-8 text-md text-gray-900 font-display">
                        <Link to="/about" className="hover:text-neutral-900">
                            About
                        </Link>
                        <a href="#skills" className="hidden md:block hover:text-neutral-900">Skills</a>
                        <a href="#work" className="hidden md:block hover:text-neutral-900">Work</a>
                        <a href="#contact" className="hidden md:block hover:text-neutral-900">Contact</a>
                    </nav>
                </div>
                <div className="flex items-center gap-2 md:gap-2">
                    <span className="hidden lg:inline text-xs text-neutral-600">Lagos, Nigeria</span>
                    <span className="hidden lg:inline text-neutral-500">|</span>
                    <span className='hidden sm:inline font-display text-[13px]'>{formatted}</span>
                    <div className="relative group hidden sm:block">

                        {/* Comic bubble */}
                        <div
                            className="
  absolute top-full right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 mt-4
  w-56 sm:w-64
  rounded-2xl border-2 border-black bg-white
  px-4 py-3 sm:px-5 sm:py-4
  text-xs sm:text-sm leading-relaxed text-black
  shadow-[4px_4px_0px_0px_#000]

  opacity-0 invisible
  -translate-y-2
  group-hover:opacity-100
  group-hover:visible
  group-hover:translate-y-0

  transition-all duration-200
  z-20
  font-display
  before:content-['']
  before:absolute
  before:right-4 before:left-auto sm:before:left-1/2 sm:before:right-auto
  before:-top-[11px]
  sm:before:-translate-x-1/2
  before:w-5
  before:h-5
  before:bg-white
  before:border-l-2
  before:border-t-2
  before:border-black
  before:rotate-45
"
                        >
                            Yeah.. they're literally just icons 😅
                            <br />
                            But I'm learning to accept my L's.
                        </div>

                        <div className="flex items-center gap-3">
                            <WifiIcon size={14} />
                            <BatteryIcon size={16} />
                        </div>

                    </div>
                </div>
                <button className="px-3 py-1.5 md:px-4 md:py-2 md:mx-4 rounded-sm bg-black text-white text-xs md:text-sm font-medium cursor-pointer whitespace-nowrap">
                    Talk with me
                </button>
            </header>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-18 pb-20 grid md:grid-cols-2 gap-10 items-start">
                <div>
                    {/* Profile photo — add yours here */}
                    <div className="relative group w-24 h-24 mb-6">

                        {/* Comic bubble */}
                        <div
                            className="
      absolute bottom-full left-1/2 -translate-x-1/2 mb-5
      w-72
      rounded-2xl border-2 border-black bg-white
      px-5 py-4
      text-sm leading-relaxed text-black
      shadow-[4px_4px_0px_0px_#000]
      opacity-0 invisible
      translate-y-2
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      transition-all duration-200
      z-20
      font-display
      before:content-['']
      before:absolute
      before:left-8
      before:-bottom-[11px]
      before:w-5
      before:h-5
      before:bg-white
      before:border-r-2
      before:border-b-2
      before:border-black
      before:rotate-45
    "
                        >
                            Took this picture after a long, stressful day at the farm.
                            Somehow I still thought, “yeah, this would make a decent
                            portfolio picture.” 😭
                        </div>

                        {/* Image */}
                        <img
                            src={portrait}
                            alt="Oluwamayowa Charles"
                            className="
      w-24 h-24 rounded-full object-cover
      transition-transform duration-200
      group-hover:scale-105
    "
                        />

                    </div>
                    <h1 className="font-display font-bold text-2xl md:text-6xl leading-tight">
                        <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              // 200-level,<br />building anyway.
                        </h1>
                    </h1>
                </div>
                <div className="pt-2 md:pt-4">
                    <p className="font-display font-medium text-3xl md:text-5xl leading-snug">
                        Building tools students {' '}
                        <span className="relative inline-block px-1">
                            <span className="relative z-10">actually use</span>
                            <svg
                                viewBox="0 0 120 50"
                                className="absolute -inset-x-3 -inset-y-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-0"
                                preserveAspectRatio="none"
                                style={{ mixBlendMode: 'multiply' }}
                            >
                                <path
                                    d="M10 32 C 8 18, 25 8, 55 7 C 85 6, 108 10, 112 22 C 114 30, 100 36, 78 38 C 55 40, 25 39, 14 34"
                                    fill="none"
                                    stroke="#A3E635"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    opacity="0.45"
                                />
                            </svg>
                        </span>
                    </p>
                    <p className="mt-3 text-md text-neutral-400 max-w-sm">
                        Software engineering student at FUTA, Nigeria.
                    </p>
                    <div className="mt-6 flex gap-5">
                        <a href="#work" className="px-5 py-2.5 rounded-md bg-black text-white text-sm font-medium">
                            See my work
                        </a>
                        <a href="#contact" className="px-5 py-2.5 rounded-md bg-white text-sm font-medium border border-neutral-200">
                            Get in touch
                        </a>
                    </div>
                </div>
            </section>

            <Info />
            <Projects />
        </div>
    );
}