import { useEffect, useState } from 'react';

export default function BugGame({ onClose }) {
    const GAME_TIME = 10;

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(GAME_TIME);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const [bug, setBug] = useState({
        x: 50,
        y: 50,
    });

    // Move the bug to a random position
    const moveBug = () => {
        setBug({
            x: Math.floor(Math.random() * 80) + 5,
            y: Math.floor(Math.random() * 70) + 10,
        });
    };

    // Start game
    const startGame = () => {
        setScore(0);
        setTime(GAME_TIME);
        setGameOver(false);
        setGameStarted(true);
        moveBug();
    };

    // Timer
    useEffect(() => {
        if (!gameStarted || gameOver) return;

        if (time <= 0) {
            setGameOver(true);
            setGameStarted(false);
            return;
        }

        const timer = setTimeout(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [time, gameStarted, gameOver]);

    // Catch bug
    const catchBug = () => {
        setScore((prev) => prev + 1);
        moveBug();
    };

    return (
        <div
            className=" fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}>
            <div className=" relative w-full max-w-xl bg-white border-2 border-neutral-900 rounded-[24px] shadow-[10px_10px_0px_0px_#171717] overflow-hidden rotate-[-1deg]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className=" absolute top-4 right-4 z-10 w-8 h-8 rounded-full border-2 border-neutral-900 bg-white font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#171717]">
                    ×
                </button>
                {/* Header */}
                <div className="p-6 pb-4">

                    <p className=" font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                        side quest
                    </p>
                    <div className=" flex items-end justify-between gap-4 mt-2">
                        <div>
                            <h2 className=" font-display font-bold text-2xl md:text-3xl">
                                Catch the Bugs 🐛
                            </h2>
                            <p className=" font-display text-xs text-neutral-400 mt-1">
                                because apparently fixing them wasn't enough.
                            </p>
                        </div>
                        {/* Score */}
                        <div className=" shrink-0 text-right">
                            <p className=" font-mono text-[9px] uppercase text-neutral-400">bugs caught</p>
                            <p className=" font-display font-bold text-xl">{score}</p>
                        </div>
                    </div>
                </div>
                {/* Game area */}
                <div
                    className=" relative mx-6 mb-6 h-[320px] md:h-[350px] rounded-2xl border-2 border-neutral-900 bg-neutral-50 overflow-hidden">
                    {/* Grid decoration */}
                    <div
                        className=" absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                    {/* Timer */}
                    <div className=" absolute top-4 left-4 z-10 bg-white border-2 border-neutral-900 rounded-full px-3 py-1 font-mono text-xs shadow-[2px_2px_0px_0px_#171717]">
                        00:{String(time).padStart(2, '0')}
                    </div>
                    {/* Start screen */}
                    {!gameStarted && !gameOver && (
                        <div className=" absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <div className="text-5xl mb-4">
                                🐛
                            </div>
                            <h3 className=" font-display font-bold text-xl">
                                Your code has bugs.
                            </h3>
                            <p className=" font-display text-sm text-neutral-400 mt-1 max-w-xs">
                                You have 20 seconds to catch
                                as many as possible.
                            </p>
                            <button onClick={startGame} className=" mt-5 bg-neutral-900 text-white border-2 border-neutral-900 rounded-xl px-5 py-2.5 font-display font-semibold text-sm transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#a3a3a3]">
                                Start hunting →
                            </button>
                        </div>
                    )}
                    {/* Bug */}
                    {gameStarted && !gameOver && (
                        <button
                            onClick={catchBug}
                            aria-label="Catch bug"
                            className=" absolute z-20 text-3xl md:text-4xl cursor-crosshair transition-all duration-150 hover:scale-125 active:scale-90 select-none
                            "
                            style={{
                                left: `${bug.x}%`,
                                top: `${bug.y}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            🐛
                        </button>
                    )}
                    {/* Game over */}
                    {gameOver && (
                        <div className=" absolute inset-0 flex flex-col items-center justify-center text-center bg-white/90 p-6">
                            <div className="text-5xl mb-3">
                                {score >= 15 ? '🏆' : score >= 8 ? '😎' : '💀'}
                            </div>
                            <p className=" font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                                final score
                            </p>
                            <h3 className=" font-display font-bold text-4xl mt-1">
                                {score}
                            </h3>
                            <p className=" font-display text-sm text-neutral-400 mt-2 max-w-xs">
                                {score >= 15
                                    ? 'Okay, you might actually be good at this.'
                                    : score >= 8
                                        ? 'Not bad. The bugs are slightly concerned.'
                                        : 'The bugs have won. Unfortunately.'}
                            </p>
                            <button
                                onClick={startGame}
                                className="
                                    mt-5
                                    bg-neutral-900
                                    text-white
                                    border-2 border-neutral-900
                                    rounded-xl
                                    px-5
                                    py-2.5
                                    font-display
                                    font-semibold
                                    text-sm
                                    transition-all
                                    hover:-translate-y-1
                                    hover:shadow-[4px_4px_0px_0px_#a3a3a3]
                                ">
                                Again →
                            </button>

                        </div>
                    )}

                </div>


                {/* Footer */}
                <div className=" px-6 pb-5 flex items-center justify-between">
                    <span className=" font-display text-[10px] italic text-neutral-300">
                        no bugs were harmed in the making of this game.
                    </span>
                    <span className=" font-mono text-[9px] text-neutral-300">
                        v1.0
                    </span>
                </div>
            </div>
        </div>
    );
}