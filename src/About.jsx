import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import mark from './assets/mark.jpeg'
import jesus from './assets/jesus.jpeg'
import robert from './assets/robert.jpeg'
import steve from './assets/steve.jpeg'
import vusi from './assets/vusi.jpeg'
import BugGame from './BugGame';

const TOPICS = [
    {
        number: '01',
        title: 'HISTORY',
        text: 'Humans have been doing some ridiculous things for thousands of years.',
        rotate: '-rotate-1',
    },
    {
        number: '02',
        title: 'TECH',
        text: 'The obvious one.',
        rotate: 'rotate-1',
    },
    {
        number: '03',
        title: 'SILICON VALLEY / YC',
        text: 'People building weird things and somehow convincing other people to give them money to build even weirder things.',
        rotate: '-rotate-[0.5deg]',
    },
    {
        number: '04',
        title: 'TRAVEL',
        text: "I'd like to see as much of the world as I possibly can.",
        rotate: 'rotate-1',
    },
    {
        number: '05',
        title: 'SPACE',
        text: "Because apparently building things on Earth wasn't enough.",
        rotate: '-rotate-1',
    },
];

const GOATS = [
    {
        number: '01',
        name: 'Jesus',
        note: 'no explanation needed.',
        image: jesus, // add image path here
        rotate: '-rotate-1',
    },
    {
        number: '02',
        name: 'Steve Jobs',
        note: 'had opinions about buttons.',
        image: steve, // add image path here
        rotate: 'rotate-1',
    },
    {
        number: '03',
        name: 'Mark Zuckerberg',
        note: 'bro built a website and things got slightly out of hand.',
        image: mark, // add image path here
        rotate: '-rotate-[0.5deg]',
    },
    {
        number: '04',
        name: 'Robert Herjavec',
        note: 'the man knows how to sell. (and yeah kym has to be here too)',
        image: robert, // add image path here
        rotate: 'rotate-1',
    },
    {
        number: '05',
        name: 'Vusi Thembekwayo',
        note: 'bro can turn a sentence into a TED Talk.',
        image: vusi, // add image path here
        rotate: '-rotate-1',
    },
];

const MOVIES = [
    {
        number: '01',
        title: '24',
        subtitle: 'Jack Bauer',
        note: 'made me trust absolutely nobody.',
        rotate: '-rotate-1',
    },
    {
        number: '02',
        title: 'Catch Me If You Can',
        subtitle: '',
        note: 'Frank was doing entirely too much.',
        rotate: 'rotate-1',
    },
    {
        number: '03',
        title: 'The Odyssey',
        subtitle: '',
        note: 'bro really said "let me take the scenic route home."',
        rotate: '-rotate-[0.5deg]',
    },
    {
        number: '04',
        title: 'The Prestige',
        subtitle: '',
        note: 'the definition of "wait... WHAT?"',
        rotate: 'rotate-1',
    },
    {
        number: '05',
        title: 'Spider-Man: Across the Spider-Verse',
        subtitle: '',
        note: 'the animation had no business going this hard.',
        rotate: '-rotate-1',
    },
];



export default function About() {
    const [showGame, setShowGame] = useState(false);
    return (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* =========================================HERO========================================= */}
            <section className="mb-20">
                <div className='flex justify-between'>
                    <p className=" font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">About / 01</p>
                    <Link to="/" className=" font-display text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4 hover:text-black">Back Home</Link>
                </div>

                <h1 className="
                    font-display
                    font-bold
                    text-4xl
                    md:text-6xl
                    tracking-tight
                    max-w-3xl
                ">
                    So, who am I when I'm not writing {`<div/>`}s?
                </h1>

                <div className="mt-7 max-w-2xl">

                    <p className="
                        font-display
                        text-base
                        md:text-lg
                        leading-relaxed
                        text-neutral-500
                    ">
                        I'm Oluwamayowa — a software engineering student
                        who likes building things, learning random stuff,
                        and getting unnecessarily invested in things that
                        have absolutely nothing to do with software.
                    </p>

                    <p className="
                        font-display
                        text-sm
                        leading-relaxed
                        text-neutral-400
                        mt-3
                    ">
                        This page is basically a collection of some of
                        those things.
                    </p>

                </div>

            </section>


            {/* =========================================
                TOP 5 TOPICS
            ========================================= */}

            <section className="mb-24">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className=" font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                            Things I'm into
                        </p>
                        <h2 className=" font-display font-bold text-3xl tracking-tight">
                            Top 5 topics.
                        </h2>
                    </div>
                    <span className=" hidden md:block font-display text-[11px] italic rotate-2 border-2 border-neutral-900 rounded-full px-3 py-1 shadow-[3px_3px_0px_0px_#171717]">
                        rabbit holes included
                    </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {TOPICS.map((topic, index) => (
                        <div
                            key={topic.number}
                            className={`
                                group
                                relative
                                min-h-[210px]
                                rounded-[24px]
                                border-2
                                border-neutral-900
                                bg-white
                                p-6
                                md:p-7
                                transition-all
                                duration-300
                                hover:rotate-0
                                hover:-translate-y-1
                                hover:shadow-[7px_7px_0px_0px_#171717]
                                ${topic.rotate}
                                ${index === 4 ? 'md:col-span-2' : ''}
                            `}
                        >

                            <div className=" flex items-start justify-between">
                                <span className=" font-mono text-[10px] text-neutral-400">
                                    {topic.number}
                                </span>
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                    className="
                                        text-neutral-400
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1"/>
                            </div>
                            <h3 className=" font-display font-bold text-2xl md:text-3xl mt-8 tracking-tight">
                                {topic.title}
                            </h3>
                            <p className="
                                font-display
                                text-sm
                                md:text-base
                                leading-relaxed
                                text-neutral-500
                                max-w-xl
                                mt-3
                            ">
                                {topic.text}
                            </p>


                            {/* little comic annotation */}
                            <span className="
                                absolute
                                bottom-5
                                right-6
                                font-display
                                text-[10px]
                                italic
                                text-neutral-300
                                opacity-0
                                translate-y-1
                                group-hover:opacity-100
                                group-hover:translate-y-0
                                transition-all
                                duration-300
                            ">
                                yeah, I can talk about this for hours.
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================================
                GOATS
            ========================================= */}

            <section className="mb-24">

                <div className="flex items-end justify-between mb-8">

                    <div>

                        <p className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                            mb-2
                        ">
                            The GOAT department
                        </p>

                        <h2 className="
                            font-display
                            font-bold
                            text-3xl
                            tracking-tight
                        ">
                            Top 5 goats.
                        </h2>

                    </div>

                    <span className="
                        hidden md:block
                        font-display
                        text-[11px]
                        italic
                        -rotate-2
                        text-neutral-400
                    ">
                        no particular ranking. don't fight me.
                    </span>

                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {GOATS.map((goat, index) => (

                        <div
                            key={goat.name}
                            className={`
                                group
                                relative
                                rounded-[24px]
                                border-2
                                border-neutral-900
                                bg-white
                                p-5
                                transition-all
                                duration-300
                                hover:rotate-0
                                hover:-translate-y-1
                                hover:shadow-[7px_7px_0px_0px_#171717]
                                ${goat.rotate}
                                ${index === 3 ? 'lg:ml-[16%]' : ''}
                            `}
                        >

                            {/* Number */}
                            <div className="
                                flex
                                items-center
                                justify-between
                                mb-4
                            ">

                                <span className="
                                    font-mono
                                    text-[10px]
                                    text-neutral-400
                                ">
                                    {goat.number}
                                </span>

                                <span className="
                                    font-display
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-neutral-300
                                ">
                                    GOAT
                                </span>

                            </div>


                            {/* IMAGE SLOT */}
                            <div className="
                                relative
                                w-full
                                aspect-square
                                rounded-2xl
                                border-2
                                border-neutral-900
                                bg-neutral-100
                                overflow-hidden
                                flex
                                items-center
                                justify-center
                            ">

                                {goat.image ? (
                                    <img
                                        src={goat.image}
                                        alt={goat.name}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />
                                ) : (
                                    <span className="
                                        font-display
                                        text-sm
                                        text-neutral-300
                                        italic
                                    ">
                                        image goes here
                                    </span>
                                )}

                            </div>


                            {/* Name */}
                            <h3 className="
                                font-display
                                font-bold
                                text-xl
                                mt-5
                            ">
                                {goat.name}
                            </h3>


                            {/* Comic comment */}
                            <p className="
                                font-display
                                text-xs
                                italic
                                text-neutral-400
                                mt-1
                            ">
                                "{goat.note}"
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================================
                MOVIES
            ========================================= */}

            <section className="mb-24">

                <div className="flex items-end justify-between mb-8">

                    <div>

                        <p className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-neutral-400
                            mb-2
                        ">
                            Things I've watched
                        </p>

                        <h2 className="
                            font-display
                            font-bold
                            text-3xl
                            tracking-tight
                        ">
                            Top 5 movies.
                        </h2>

                    </div>

                    <span className="
                        hidden md:block
                        font-display
                        text-[11px]
                        italic
                        rotate-2
                        text-neutral-400
                    ">
                        completely objective. obviously.
                    </span>

                </div>


                <div className="space-y-5">

                    {MOVIES.map((movie, index) => (

                        <div
                            key={movie.title}
                            className={`
                                group
                                relative
                                flex
                                items-center
                                gap-5
                                md:gap-7
                                rounded-[24px]
                                border-2
                                border-neutral-900
                                bg-white
                                px-5
                                py-5
                                md:px-7
                                transition-all
                                duration-300
                                hover:rotate-0
                                hover:-translate-y-1
                                hover:shadow-[7px_7px_0px_0px_#171717]
                                ${movie.rotate}
                            `}
                        >

                            {/* Number */}
                            <span className="
                                font-mono
                                text-xs
                                text-neutral-300
                                w-6
                                shrink-0
                            ">
                                {movie.number}
                            </span>


                            {/* Fake poster */}
                            <div className="
                                hidden sm:flex
                                shrink-0
                                w-14
                                h-16
                                rounded-xl
                                border-2
                                border-neutral-900
                                bg-neutral-100
                                items-center
                                justify-center
                                font-display
                                font-bold
                                text-xs
                                rotate-[-3deg]
                                group-hover:rotate-[3deg]
                                transition-transform
                                duration-300
                            ">
                                {movie.number}
                            </div>


                            {/* Movie */}
                            <div className="flex-1 min-w-0">

                                <h3 className="
                                    font-display
                                    font-bold
                                    text-lg
                                    md:text-xl
                                ">
                                    {movie.title}
                                </h3>

                                {movie.subtitle && (
                                    <p className="
                                        font-mono
                                        text-[10px]
                                        text-neutral-400
                                        mt-0.5
                                    ">
                                        {movie.subtitle}
                                    </p>
                                )}

                                <p className="
                                    font-display
                                    text-xs
                                    md:text-sm
                                    italic
                                    text-neutral-400
                                    mt-1
                                ">
                                    "{movie.note}"
                                </p>

                            </div>


                            {/* Arrow */}
                            <ArrowUpRight
                                size={19}
                                strokeWidth={2}
                                className="
                                    shrink-0
                                    text-neutral-300
                                    transition-all
                                    duration-300
                                    group-hover:text-neutral-900
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================================
                GAME
            ========================================= */}

            <section>

                <div className="
                    relative
                    rounded-[24px]
                    border-2
                    border-neutral-900
                    bg-neutral-900
                    text-white
                    p-7
                    md:p-9
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:shadow-[7px_7px_0px_0px_#171717]
                ">

                    <span className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-neutral-500
                    ">
                        side quest
                    </span>


                    <h2 className="
                        font-display
                        font-bold
                        text-2xl
                        md:text-3xl
                        mt-3
                    ">
                        Bored already?
                    </h2>


                    <p className="
                        font-display
                        text-sm
                        text-neutral-400
                        mt-2
                        max-w-md
                    ">
                        I put a tiny game somewhere around here.
                        You might as well find it.
                    </p>


                    <button
                        onClick={() => setShowGame(true)}
                        className="
                            mt-6
                            bg-white
                            text-neutral-900
                            border-2
                            border-white
                            rounded-xl
                            px-5
                            py-2.5
                            font-display
                            font-semibold
                            text-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[4px_4px_0px_0px_#737373]
                        "
                    >
                        Play the game →
                    </button>


                    <span className="
                        absolute
                        right-10
                        bottom-[-20px]
                        font-display
                        font-bold
                        text-[100px]
                        text-neutral-800
                        rotate-12
                        select-none
                        pointer-events-none
                    ">
                        ?
                    </span>

                </div>

            </section>
                {showGame && (
    <BugGame
        onClose={() => setShowGame(false)}
    />
)}
        </main>
    );
}