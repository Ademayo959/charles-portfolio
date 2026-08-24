import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        name: 'VoteLive',
        desc: 'Student election & polling platform, adopted for a real departmental election.',
        tags: ['React', 'Firebase'],
        link: 'https://votelive.click',
        featured: true,
        note: 'actually used ↗',
        notePosition: 'left',
    },
    {
        name: 'Reekol',
        desc: 'Upload, rate, and find course PDFs and tutorials — the good ones rise.',
        tags: ['MERN'],
        link: 'https://reekol.vercel.app',
        note: 'for students, by students',
        notePosition: 'right',
    },
    {
        name: 'FUTAevents',
        desc: 'Campus event discovery platform for FUTA students.',
        tags: ['React', 'PWA'],
        link: 'https://futaevents.vercel.app',
        note: "what's happening on campus?",
        notePosition: 'left',
    },
    {
        name: 'Cascade.js',
        desc: 'A lightweight JavaScript form-validation library.',
        tags: ['npm', 'JavaScript'],
        link: 'https://cascadejs.netlify.app',
        note: 'less boilerplate pls',
        notePosition: 'right',
    },
];

const TOP_SONGS = [
    {
        rank: 1,
        title: 'Want For Nothing',
        artist: 'Cameron Whitecomb',
        plays: 275,
        note: 'yeah… I may have overplayed this one',
    },
    {
        rank: 2,
        title: 'Full 180',
        artist: 'Luminati Sons',
        plays: 17,
        note: 'peakkkkkkk',
    },
    {
        rank: 3,
        title: 'TUTUTU',
        artist: 'Orynkhan',
        plays: 12,
        note: 'don’t ask me why',
    },
    {
        rank: 4,
        title: 'Man I Need',
        artist: 'Olivia Dean',
        plays: 12,
        note: 'it had a good run',
    },
    {
        rank: 5,
        title: 'White Keys',
        artist: 'Dominic Fike',
        plays: 8,
        note: 'rookie numbers',
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16" id="work">
            <h2 className="font-display font-semibold text-xl mb-8">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((p, i) => (
                    <div
                        key={p.name}
                        className={`relative ${p.featured ? 'md:col-span-2' : ''
                            }`}
                    >

                        {/* =========================
                            COMIC NOTE
                        ========================= */}
                        <span
                            className={`
                                hidden md:block
                                absolute
                                z-20
                                -top-5
                                ${p.notePosition === 'left'
                                    ? 'left-10 rotate-[-4deg]'
                                    : 'right-10 rotate-[3deg]'
                                }
                                bg-white
                                border-2 border-neutral-900
                                px-3 py-1.5
                                rounded-full
                                font-display
                                font-semibold
                                text-[11px]
                                text-neutral-900
                                shadow-[3px_3px_0px_0px_#171717]
                                transition-all duration-300
                                group-hover:translate-y-[-3px]
                            `}
                        >
                            {p.note}
                        </span>


                        {/* =========================
                            VOTELIVE TWEET
                        ========================= */}
                        {p.name === 'VoteLive' && (
                            <div className="hidden md:block absolute -right-20 top-140 z-30 group">

                                <div className="translate-x-full -rotate-3 transition-transform duration-500 group-hover:translate-x-0">

                                    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg w-100">

                                        <div className="flex items-start gap-2">

                                            {/* Avatar */}
                                            <div className="h-10 w-10 shrink-0 rounded-full bg-gray-400" />

                                            <div className="min-w-0 flex-1">

                                                {/* Header */}
                                                <div className="flex items-center gap-1 text-sm">
                                                    <span className="font-bold">
                                                        namesurname
                                                    </span>

                                                    <span className="text-blue-500">
                                                        ✓
                                                    </span>

                                                    <span className="text-gray-500">
                                                        @namesurname
                                                    </span>

                                                    <span className="text-gray-400">
                                                        ·
                                                    </span>

                                                    <span className="text-gray-400">
                                                        13 Dec
                                                    </span>
                                                </div>

                                                {/* Tweet */}
                                                <p className="mt-1 text-xs leading-relaxed text-gray-900">
                                                    Just so you know, VoteLive was actually
                                                    used for our department association
                                                    election. 😭 What started as a project
                                                    to experiment with real-time voting
                                                    ended up being used for an actual
                                                    election. Still kinda crazy seeing
                                                    something I built actually get used.
                                                </p>


                                                {/* Actions */}
                                                <div className="mt-4 flex items-center justify-between text-gray-500">

                                                    <span className="flex items-center gap-2">
                                                        <span>♡</span>
                                                        <span>13</span>
                                                    </span>

                                                    <span className="flex items-center gap-2">
                                                        <span>↻</span>
                                                        <span>36</span>
                                                    </span>

                                                    <span className="flex items-center gap-2">
                                                        <span>♡</span>
                                                        <span>38</span>
                                                    </span>

                                                    <span>↗</span>

                                                </div>

                                            </div>

                                            <span className="text-gray-500">
                                                •••
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        )}


                        {/* =========================
                            PROJECT CARD
                        ========================= */}
                        <a
                            href={p.link}
                            className={`
                                group relative block
                                overflow-visible
                                rounded-[24px]
                                border-2 border-neutral-900
                                p-6 md:p-7
                                min-h-[230px]
                                transition-all duration-300

                                hover:-translate-y-1
                                hover:rotate-0
                                hover:shadow-[6px_7px_0px_0px_#171717]
                                active:-translate-y-1
                                active:rotate-0
                                active:shadow-[6px_7px_0px_0px_#171717]

                                ${i === 1
                                    ? '-rotate-1'
                                    : i === 2
                                        ? 'rotate-1'
                                        : '-rotate-[0.5deg]'
                                }

                                ${p.featured
                                    ? 'bg-neutral-900 text-white min-h-[260px]'
                                    : 'bg-white text-neutral-900'
                                }
                            `}
                        >

                            {/* =========================
                                TOP ROW
                            ========================= */}
                            <div className="flex items-start justify-between">

                                {/* Number */}
                                <span
                                    className={`
                                        font-mono
                                        text-[11px]
                                        border-2
                                        rounded-full
                                        w-8 h-8
                                        flex items-center justify-center
                                        transition-transform duration-300
                                        group-hover:rotate-[-8deg]

                                        ${p.featured
                                            ? 'border-white/30 text-neutral-400'
                                            : 'border-neutral-900 text-neutral-500'
                                        }
                                    `}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span>


                                {/* Arrow */}
                                <ArrowUpRight
                                    size={21}
                                    strokeWidth={2}
                                    className={`
                                        transition-all duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1

                                        ${p.featured
                                            ? 'text-neutral-400'
                                            : 'text-neutral-500'
                                        }
                                    `}
                                />

                            </div>


                            {/* =========================
                                PROJECT NAME
                            ========================= */}
                            <h3
                                className={`
                                    font-display
                                    font-bold
                                    tracking-tight
                                    mt-7

                                    ${p.featured
                                        ? 'text-3xl md:text-4xl'
                                        : 'text-2xl'
                                    }
                                `}
                            >
                                {p.name}
                            </h3>


                            {/* =========================
                                DESCRIPTION
                            ========================= */}
                            <p
                                className={`
                                    font-display
                                    text-sm
                                    leading-relaxed
                                    mt-3
                                    max-w-xl

                                    ${p.featured
                                        ? 'text-neutral-300'
                                        : 'text-neutral-500'
                                    }
                                `}
                            >
                                {p.desc}
                            </p>


                            {/* =========================
                                BOTTOM
                            ========================= */}
                            <div className="flex items-end justify-between mt-8">

                                {/* Tags */}
                                <div className="flex gap-2 flex-wrap">

                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className={`
                                                font-mono
                                                text-[10px]
                                                px-3 py-1.5
                                                rounded-full
                                                border

                                                ${p.featured
                                                    ? 'border-white/20 bg-white/10 text-neutral-300'
                                                    : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                                                }
                                            `}
                                        >
                                            {t}
                                        </span>
                                    ))}

                                </div>


                                {/* Hover text */}
                                <span className={`
                                        hidden md:block
                                        font-display
                                        text-[11px]
                                        italic
                                        opacity-0
                                        translate-x-2
                                        group-hover:opacity-100
                                        group-hover:translate-x-0
                                        transition-all duration-300

                                        ${p.featured
                                        ? 'text-neutral-400'
                                        : 'text-neutral-400'
                                    }
                                    `}
                                >
                                    check it out →
                                </span>

                            </div>

                        </a>

                    </div>
                ))}
                {/* ========================= DSA SIDE QUEST========================= */}

                <div className="mt-0 relative group">

                    {/* Comic annotation */}
                    <span
                        className="
            hidden md:block
            absolute
            -top-5
            right-12
            z-10
            bg-white
            border-2 border-neutral-900
            rounded-full
            px-4 py-1.5
            font-display
            font-semibold
            text-[11px]
            rotate-2
            shadow-[3px_3px_0px_0px_#171717]
            transition-transform duration-300
            group-hover:-rotate-2
        "
                    >
                        character development →
                    </span>


                    <div
                        className="
            relative
            overflow-hidden
            rounded-[24px]
            border-2 border-neutral-900
            bg-neutral-900
            text-white
            p-7 md:p-9

            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[7px_7px_0px_0px_#171717]
        "
                    >

                        {/* Number */}
                        <span
                            className="
                absolute
                top-7
                right-7
                font-mono
                text-[11px]
                text-neutral-500
            "
                        >
                            05
                        </span>


                        {/* Main content */}
                        <div className="max-w-2xl">

                            <p
                                className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-neutral-500
                    mb-4
                "
                            >
                                side quest
                            </p>


                            <h3
                                className="
                    font-display
                    font-bold
                    text-3xl md:text-4xl
                    tracking-tight
                "
                            >
                                DSA
                            </h3>


                            <p
                                className="
                    font-display
                    font-semibold
                    text-lg md:text-xl
                    text-neutral-300
                    mt-3
                "
                            >
                                currently a noob.
                            </p>


                            <p
                                className="
                    font-display
                    text-sm
                    leading-relaxed
                    text-neutral-400
                    mt-3
                    max-w-lg
                "
                            >
                                I'm trying to get better at data structures
                                and algorithms. One problem at a time.
                                Unfortunately.
                            </p>


                            {/* Bottom */}
                            <div className="flex items-center gap-4 mt-7">

                                <a
                                    href="https://leetcode.com/u/ademayo/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                        inline-flex
                        items-center
                        gap-2
                        bg-white
                        text-neutral-900
                        border-2 border-white
                        rounded-xl
                        px-4 py-2.5
                        font-display
                        font-semibold
                        text-sm

                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[4px_4px_0px_0px_#737373]
                    "
                                >
                                    see my progress
                                    <span>↗</span>
                                </a>


                                <span
                                    className="
                        hidden sm:block
                        font-display
                        text-[11px]
                        italic
                        text-neutral-500
                        rotate-[-2deg]
                    "
                                >
                                    we're getting there...
                                </span>

                            </div>

                        </div>


                        {/* Decorative comic marks */}
                        <span
                            className="
                absolute
                bottom-7
                right-10
                text-neutral-700
                font-display
                text-6xl
                font-bold
                rotate-[-8deg]
                select-none
                pointer-events-none
            "
                        >
                            ?
                        </span>

                        <span
                            className="
                absolute
                bottom-10
                right-24
                text-neutral-700
                font-display
                text-3xl
                font-bold
                rotate-12
                select-none
                pointer-events-none
            "
                        >
                            ?
                        </span>

                    </div>

                </div>
            </div>


            {/* =========================
                TOP SONGS + CONTACT
            ========================= */}
            <div className="max-w-6xl mx-auto py-14 mt-4"  >

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Top Songs */}
                    <div className="relative">

                        {/* Little comic heading */}
                        <div className="flex items-end justify-between mb-6">

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                                    currently occupying my brain
                                </p>

                                <h3 className="font-display font-bold text-2xl tracking-tight">
                                    Top 5 rn.
                                </h3>
                            </div>
                            <span className=" hidden md:block font-display text-[11px] italic -rotate-3 border-2 border-neutral-900 rounded-full px-3 py-1 shadow-[2px_2px_0px_0px_#171717]">
                                unfortunately.
                            </span>
                        </div>
                        {/* Songs */}
                        <div className="space-y-3">
                            {TOP_SONGS.map((s, i) => (
                                <div
                                    key={s.rank}
                                    className={`
                    group
                    relative
                    flex items-center gap-4
                    rounded-2xl
                    border-2 border-neutral-900
                    px-4 py-3
                    bg-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0px_0px_#171717]
                    active:-translate-y-1
                    active:shadow-[4px_4px_0px_0px_#171717]
                    ${i % 2 === 0
                                            ? 'hover:rotate-[-1deg]'
                                            : 'hover:rotate-[1deg]'
                                        }
                `} >

                                    {/* Rank */}
                                    <span className=" font-mono text-xs text-neutral-400 w-5">
                                        {String(s.rank).padStart(2, '0')}
                                    </span>
                                    {/* Fake album artwork */}
                                    <div
                                        className={` shrink-0 w-11 h-11 rounded-xl border-2 border-neutral-900 flex items-center justify-center font-display font-bold text-sm rotate-[-3deg] group-hover:rotate-[3deg] transition-transform duration-300
                        ${i === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'}
                    `}>
                                        {i === 0 ? '01' : '♪'}
                                    </div>
                                    {/* Song information */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className=" font-display font-semibold text-sm truncate">
                                                {s.title}
                                            </p>
                                            {i === 0 && (
                                                <span className=" hidden sm:inline-block font-mono text-[8px] uppercase border border-neutral-300 rounded-full px-2 py-0.5 text-neutral-400">
                                                    on repeat
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-neutral-400 mt-0.5">
                                            {s.artist}
                                        </p>
                                    </div>
                                    {/* Plays */}
                                    <div className="text-right shrink-0">
                                        <p className="font-mono text-xs font-semibold">{s.plays}</p>
                                        <p className=" font-mono text-[9px] text-neutral-400">plays </p>
                                    </div>
                                    {/* Comic note */}
                                    <div className=" left-14 -top-7 absolute z-10 pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                                        <span className=" relative block bg-white border-2 border-neutral-900 rounded-xl px-3 py-1.5 font-display font-semibold text-[10px] shadow-[3px_3px_0px_0px_#171717] whitespace-nowrap">
                                            {s.note}
                                            {/* little comic notch */}
                                            <span className=" absolute -bottom-[6px] left-5 w-3 h-3 bg-white border-r-2 border-b-2 border-neutral-900 rotate-45" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Bottom joke */}
                        <div className="mt-5 flex items-center gap-2">
                            <span className="font-mono text-[9px] text-neutral-300">
                                AUG 17 — AUG 23
                            </span>
                            <span className="text-neutral-300">/</span>
                            <span className=" font-display text-[10px] italic text-neutral-400">
                                no, I don't know why it has 275 plays either.
                            </span>
                        </div>
                    </div>
                    {/* Contact */}
                    <div id="contact">
                        <h2 className="font-display font-semibold text-xl mb-2">
                            Get in touch
                        </h2>

                        <p className="text-sm text-neutral-400 mb-5">
                            got something to say? shoot me a message.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const form = e.currentTarget;

                                const name = form.name.value;
                                const email = form.email.value;
                                const message = form.message.value;

                                const subject = `Hey Mayowa — ${name}`;

                                const body = `Hey Mayowa,

${message}

---
From: ${name}
Email: ${email}`;

                                const gmailUrl =
                                    `https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                                window.open(gmailUrl, '_blank');
                            }}
                            className="space-y-3 max-w-md"
                        >

                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="
                w-full
                border-2 border-neutral-200
                rounded-xl
                px-4 py-3
                text-sm
                font-display
                outline-none
                transition
                focus:border-neutral-900
                placeholder:text-neutral-400
            "
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="
                w-full
                border-2 border-neutral-200
                rounded-xl
                px-4 py-3
                text-sm
                font-display
                outline-none
                transition
                focus:border-neutral-900
                placeholder:text-neutral-400
            "
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="What's on your mind?"
                                rows={4}
                                required
                                className="
                w-full
                border-2 border-neutral-200
                rounded-xl
                px-4 py-3
                text-sm
                font-display
                outline-none
                resize-none
                transition
                focus:border-neutral-900
                placeholder:text-neutral-400
            "
                            />
                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                font-display
                font-semibold
                text-sm
                bg-neutral-900
                text-white
                px-5 py-3
                rounded-xl
                border-2 border-neutral-900
                transition-all
                hover:-translate-y-1
                hover:shadow-[4px_4px_0px_0px_#d4d4d4]
                active:translate-y-0
                active:shadow-none
            "
                            >
                                Send it →
                            </button>
                        </form>
                        {/* Social links */}
                        <div className="flex gap-4 text-sm mt-6">
                            <a
                                href="https://github.com/Ademayo959"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 hover:text-neutral-500"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/build_pixels"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 hover:text-neutral-500"
                            >
                                X
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adeleye-mayowa-75a937359/"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 hover:text-neutral-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}