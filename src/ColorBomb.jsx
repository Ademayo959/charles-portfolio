import { useState } from 'react';
import { Link } from 'react-router-dom';
import colorbomb from './assets/colorbomb.jpeg'
export default function ColorBomb() {
    const [exploded, setExploded] = useState(false);

    return (
        <main
            className={`
                min-h-screen
                overflow-hidden
                px-4
                py-8
                md:px-8
                md:py-12
                transition-colors
                duration-1000
                ${exploded ? 'bg-[#090909]' : 'bg-neutral-950'}
            `}
        >

            {/* Colour explosion */}
            <div
                className={`
                    pointer-events-none
                    fixed
                    inset-0
                    z-0
                    overflow-hidden
                    transition-opacity
                    duration-700
                    ${exploded ? 'opacity-100' : 'opacity-0'}
                `}
            >
                <div className="
                    absolute
                    -top-40
                    -left-40
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-fuchsia-500
                    blur-[80px]
                    opacity-70
                " />

                <div className="
                    absolute
                    top-1/3
                    -right-40
                    w-[550px]
                    h-[550px]
                    rounded-full
                    bg-cyan-400
                    blur-[100px]
                    opacity-60
                " />

                <div className="
                    absolute
                    -bottom-60
                    left-1/3
                    w-[600px]
                    h-[600px]
                    rounded-full
                    bg-yellow-400
                    blur-[100px]
                    opacity-60
                " />

                <div className="
                    absolute
                    top-1/2
                    left-1/2
                    w-[450px]
                    h-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-red-500
                    blur-[120px]
                    opacity-50
                " />
            </div>


            {/* Main card */}
            <section
                className={`
                    relative
                    z-10
                    max-w-6xl
                    mx-auto
                    min-h-[calc(100vh-4rem)]
                    rounded-[28px]
                    border-[3px]
                    border-white
                    overflow-hidden
                    transition-all
                    duration-700

                    ${exploded
                        ? `
                            bg-black
                            rotate-[0.5deg]
                            shadow-[14px_14px_0px_0px_#ffffff]
                        `
                        : `
                            bg-neutral-100
                            rotate-[-1deg]
                            shadow-[14px_14px_0px_0px_#ffffff]
                        `
                    }
                `}
            >

                {/* Top bar */}
                <div
                    className={`
                        relative
                        z-20
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        md:px-8
                        border-b-2
                        ${exploded
                            ? 'border-white/30 text-white'
                            : 'border-neutral-900 text-neutral-900'
                        }
                    `}
                >

                    <span className="font-mono text-[10px] tracking-widest uppercase">
                        Experiment 01
                    </span>

                    <span className="
                        border
                        px-3
                        py-1
                        font-mono
                        text-[9px]
                        uppercase
                    ">
                        Design Lab
                    </span>

                </div>


                {/* Content */}
                <div className="
                    relative
                    min-h-[calc(100vh-9rem)]
                    flex
                    items-center
                ">

                    {/* BEFORE STATE */}
                    {!exploded && (
                        <div className="
                            relative
                            z-10
                            w-full
                            px-6
                            py-12
                            md:px-16
                            lg:px-24
                        ">

                            <span className="
                                inline-block
                                border-2
                                border-neutral-900
                                px-3
                                py-1
                                font-mono
                                text-[10px]
                                uppercase
                                tracking-widest
                                rotate-[-2deg]
                            ">
                                warning
                            </span>


                            <h1 className="
                                font-display
                                font-black
                                text-[clamp(4rem,12vw,9rem)]
                                leading-[0.8]
                                tracking-[-0.07em]
                                uppercase
                                mt-6
                            ">
                                Color
                                <br />
                                Bomb.
                            </h1>


                            <div className="
                                mt-8
                                max-w-md
                                font-display
                                text-base
                                md:text-lg
                                leading-relaxed
                            ">
                                <p>
                                    Everything on this site is black,
                                    white and a little bit of grey.
                                </p>

                                <p className="mt-2">
                                    That's getting boring.
                                </p>
                            </div>


                            {/* Button */}
                            <button
                                onClick={() => setExploded(true)}
                                className="
                                    group
                                    relative
                                    mt-10
                                    border-2
                                    border-neutral-900
                                    bg-white
                                    px-7
                                    py-4
                                    font-display
                                    font-bold
                                    text-sm
                                    uppercase
                                    tracking-wide
                                    transition-all
                                    duration-200
                                    hover:-translate-y-1
                                    hover:-translate-x-1
                                    hover:shadow-[7px_7px_0px_0px_#171717]
                                "
                            >
                                Click to see something cool
                                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </button>


                            {/* Comic annotation */}
                            <div className="
                                absolute
                                left-[52%]
                                bottom-16
                                hidden
                                md:block
                                rotate-[4deg]
                                font-display
                                text-xs
                                italic
                            ">
                                go on, I dare you.
                                <div className="
                                    mt-2
                                    text-2xl
                                    rotate-[-10deg]
                                ">
                                    ↗
                                </div>
                            </div>

                        </div>
                    )}


                    {/* AFTER STATE */}
                    {exploded && (
                        <div className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                        ">

                            {/* Comic colour splashes */}
                            <div className="
                                absolute
                                w-[120%]
                                h-[60%]
                                rotate-[-8deg]
                                bg-fuchsia-500
                                opacity-80
                            " />

                            <div className="
                                absolute
                                w-[120%]
                                h-[35%]
                                rotate-[18deg]
                                bg-cyan-400
                                opacity-70
                            " />

                            <div className="
                                absolute
                                w-[100%]
                                h-[25%]
                                rotate-[-25deg]
                                bg-yellow-300
                                opacity-80
                            " />


                            {/* Artwork */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                {/* 
                                    Put your Miles/Gwen artwork here.
                                    See the note below.
                                */}
                                <img
                                    src={colorbomb}
                                    alt="Color bomb artwork"
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
                                        mix-blend-multiply
                                        transition-all
                                        duration-1000
                                    "
                                />


                                {/* Overlay text */}
                                <div className="
                                    absolute
                                    z-20
                                    left-6
                                    top-8
                                    md:left-12
                                    md:top-12
                                    max-w-sm
                                ">

                                    <h2 className="
                                        font-display
                                        font-black
                                        text-5xl
                                        md:text-7xl
                                        leading-[0.8]
                                        uppercase
                                        text-white
                                        tracking-[-0.05em]
                                        drop-shadow-[4px_4px_0px_#000]
                                    ">
                                        COLOR
                                        <br />
                                        BOMB
                                    </h2>


                                    <div className="
                                        inline-block
                                        mt-6
                                        bg-white
                                        border-2
                                        border-black
                                        px-3
                                        py-2
                                        rotate-[-2deg]
                                        font-mono
                                        font-bold
                                        text-sm
                                        text-black
                                    ">
                                        MISSION ACCOMPLISHED.
                                    </div>


                                    <p className="
                                        mt-4
                                        inline-block
                                        bg-white
                                        border-2
                                        border-black
                                        px-3
                                        py-2
                                        font-display
                                        text-sm
                                        font-bold
                                        text-black
                                        rotate-[1deg]
                                    ">
                                        Looks better, right?
                                    </p>

                                </div>


                                {/* Back button */}
                                <button
                                    onClick={() => setExploded(false)}
                                    className="
                                        absolute
                                        z-30
                                        bottom-8
                                        left-6
                                        md:left-12
                                        bg-white
                                        border-2
                                        border-black
                                        px-4
                                        py-2
                                        font-mono
                                        text-xs
                                        font-bold
                                        text-black
                                        transition-all
                                        hover:-translate-y-1
                                        hover:shadow-[4px_4px_0px_0px_#000]
                                    "
                                >
                                    ← Back to reality
                                </button>

                            </div>

                        </div>
                    )}

                </div>


                {/* Bottom bar */}
                <div
                    className={`
                        relative
                        z-20
                        flex
                        items-center
                        justify-between
                        px-5
                        py-3
                        border-t-2
                        font-mono
                        text-[9px]
                        uppercase
                        ${exploded
                            ? 'border-white/30 text-white'
                            : 'border-neutral-900 text-neutral-900'
                        }
                    `}
                >
                    <span>Handle with caution</span>
                    <span className="hidden md:block">
                        May cause joy
                    </span>
                    <span>v1.0</span>
                </div>

            </section>


            {/* Footer joke */}
            <p
                className={`
                    relative
                    z-10
                    text-center
                    mt-8
                    font-display
                    text-xs
                    italic
                    transition-colors
                    duration-500
                    ${exploded ? 'text-white' : 'text-neutral-400'}
                `}
            >
                seriously, you clicked it.
            </p>

        </main>
    );
}