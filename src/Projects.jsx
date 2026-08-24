const PROJECTS = [
    {
        name: 'VoteLive',
        desc: 'Student election & polling platform, adopted for a real departmental election.',
        tags: ['React', 'Firebase'],
        link: 'https://votelive.click',
    },
    {
        name: 'Reekol',
        desc: 'Upload, rate, and find course PDFs and tutorials — the good ones rise.',
        tags: ['MERN'],
        link: '#',
    },
    {
        name: 'Cascade.js',
        desc: 'A lightweight JavaScript form-validation library.',
        tags: ['npm', 'JavaScript'],
        link: '#',
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16" id="work">
            <h2 className="font-display font-semibold text-xl mb-8">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {PROJECTS.map((p) => (
                    <div key={p.name} className="relative">
                        {/* Hanging note, pinned to VoteLive only */}
                        {p.name === 'VoteLive' && (
                            <div className="hidden md:block absolute -right-122 -top-60 z-10 group">

    <div className="
        translate-x-full -rotate-3
        transition-transform duration-500
        group-hover:translate-x-0
    ">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg w-100">
            
            <div className="flex items-start gap-2">

                {/* Avatar */}
                <div className="h-10 w-10 shrink-0 rounded-full bg-gray-400" />

                <div className="min-w-0 flex-1">

                    {/* Header */}
                    <div className="flex items-center gap-1 text-sm">
                        <span className="font-bold">namesurname</span>
                        <span className="text-blue-500">✓</span>
                        <span className="text-gray-500">@namesurname</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-400">13 Dec</span>
                    </div>

                    {/* Tweet */}
                    <p className="mt-1 text-xs leading-relaxed text-gray-900">
                        Just so you know, VoteLive was actually used for our
                        department association election. 😭 What started as
                        a project to experiment with real-time voting ended
                        up being used for an actual election. Still kinda
                        crazy seeing something I built actually get used.
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

                <span className="text-gray-500">•••</span>
            </div>

        </div>
    </div>
</div>
                        )}

                        <div className="border border-neutral-200 rounded-2xl p-6 h-full">
                            <p className="font-medium">{p.name}</p>
                            <p className="text-sm text-neutral-400 mt-2">{p.desc}</p>
                            <div className="flex gap-2 mt-4">
                                {p.tags.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a href={p.link} className="inline-block mt-4 text-sm underline underline-offset-4">
                                View →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}