import { Link } from 'react-router-dom';

const STORIES = [
    {
        category: 'TECHNOLOGY',
        title: 'STUDENT DEVELOPER BUILDS ANYWAY',
        text: 'Software engineering student continues his questionable habit of turning ideas into actual software instead of simply relaxing. Sources confirm that the behaviour is ongoing.',
        note: 'Scientists are still investigating.',
    },
    {
        category: 'LOCAL NEWS',
        title: 'VOTELIVE ACTUALLY GOT USED',
        text: 'What started as a project to experiment with real-time voting ended up being used for an actual departmental association election.',
        note: 'Okay, this one was actually pretty cool.',
    },
    {
        category: 'EDUCATION',
        title: 'DSA HAS ENTERED THE CHAT',
        text: 'After discovering that building websites does not automatically make someone good at algorithms, Mayowa has decided to take DSA seriously.',
        note: 'Current status: getting humbled daily.',
    },
    {
        category: 'CAMPUS',
        title: '200-LEVEL STUDENT STILL BUILDING',
        text: 'Despite the lectures, assignments and general university chaos, development activity appears to have continued.',
        note: 'No further comment from the suspect.',
    },
];

const INTERESTS = [
    {
        title: 'HISTORY',
        text: 'Humans have been doing some ridiculous things for thousands of years.',
    },
    {
        title: 'TECH',
        text: 'Obviously.',
    },
    {
        title: 'SILICON VALLEY / YC',
        text: 'People trying to build the next big thing is strangely fascinating.',
    },
    {
        title: 'TRAVELLING',
        text: 'Seeing the world seems like a good idea.',
    },
    {
        title: 'SPACE',
        text: "Because apparently building things on Earth wasn't enough.",
    },
];

const GOATS = [
    'Steve Jobs',
    'Jesus',
    'Mark Zuckerberg',
    'Robert Herjavec',
    'Vusi Thembekwayo',
];

const MOVIES = [
    '24 — Jack Bauer',
    'Catch Me If You Can',
    'The Odyssey',
    'The Prestige',
    'Spider-Man: Across the Spider-Verse',
];

export default function News() {
    return (
        <main className="newspaper-page">

            {/* BACKGROUND */}

            <div className="newspaper-sheet">

                {/* PAPER TEXTURE */}
                <div className="paper-noise" />
                <div className="paper-fold paper-fold-one" />
                <div className="paper-fold paper-fold-two" />


                <div className="newspaper-content">

                    {/* =========================================
                        TOP BAR
                    ========================================== */}

                    <div className="newspaper-topbar">
                        <span>VOL. 01 — NO. 001</span>

                        <span className="hidden md:block">
                            LAGOS, NIGERIA
                        </span>

                        <span>AUGUST 2026</span>
                    </div>


                    {/* =========================================
                        MASTHEAD
                    ========================================== */}

                    <header className="masthead">

                        <div className="masthead-small">
                            THE INDEPENDENT STUDENT PUBLICATION
                        </div>

                        <h1 className="masthead-title">
                            THE MAYOWA
                        </h1>

                        <h1 className="masthead-title masthead-title-bottom">
                            TIMES
                        </h1>

                        <div className="masthead-bottom">

                            <span>
                                BUILDING • LEARNING • EXISTING
                            </span>

                            <span>
                                SPECIAL EDITION
                            </span>

                            <Link to="/">
                                RETURN TO PORTFOLIO →
                            </Link>

                        </div>

                    </header>


                    {/* =========================================
                        LEAD STORY
                    ========================================== */}

                    <section className="lead-story">

                        <article className="lead-article">

                            <div className="article-kicker">
                                SPECIAL REPORT
                            </div>

                            <h2>
                                BUILDING
                                <br />
                                ANYWAY.
                            </h2>

                            <div className="article-meta">
                                BY THE EDITOR • LAGOS BUREAU
                            </div>

                            <p className="lead-copy">
                                A software engineering student at FUTA is
                                currently attempting to turn ideas into useful
                                software while simultaneously trying to become
                                less terrible at DSA.
                            </p>

                            <div className="article-columns">

                                <p>
                                    The student, who appears to spend a
                                    questionable amount of time thinking about
                                    software, has been building projects aimed
                                    at solving problems around him.
                                </p>

                                <p>
                                    Recent work includes a voting platform,
                                    campus event tools and a course-material
                                    sharing platform. More projects are
                                    reportedly under construction.
                                </p>

                            </div>

                        </article>


                        {/* PHOTO PLACEHOLDER */}

                        <aside className="lead-photo">

                            <div className="photo-frame">

                                <div className="photo-placeholder">
                                    <span>
                                        PHOTO
                                    </span>

                                    <small>
                                        MISSING
                                    </small>
                                </div>

                            </div>

                            <p className="photo-caption">
                                <strong>FIG. 01 —</strong> The subject was
                                apparently too busy building something to
                                provide a proper photograph.
                            </p>

                        </aside>

                    </section>


                    {/* =========================================
                        NEWS GRID
                    ========================================== */}

                    <section className="news-grid">

                        {STORIES.map((story, index) => (

                            <article
                                key={story.title}
                                className="news-column"
                            >

                                <div className="news-column-header">

                                    <span>
                                        {story.category}
                                    </span>

                                    <span>
                                        0{index + 1}
                                    </span>

                                </div>

                                <h3>
                                    {story.title}
                                </h3>

                                <p>
                                    {story.text}
                                </p>

                                <p className="story-note">
                                    {story.note}
                                </p>

                            </article>

                        ))}

                    </section>


                    {/* =========================================
                        SMALL NEWS STRIP
                    ========================================== */}

                    <section className="news-strip">

                        <div>
                            <strong>BREAKING:</strong>
                            Another project has entered development.
                        </div>

                        <div>
                            <strong>WEATHER:</strong>
                            90% chance of opening VS Code.
                        </div>

                        <div>
                            <strong>MARKETS:</strong>
                            Motivation remains volatile.
                        </div>

                    </section>


                    {/* =========================================
                        INTERESTS
                    ========================================== */}

                    <section className="section-block">

                        <div className="section-heading">

                            <h2>
                                THE THINGS
                                <br />
                                DEPARTMENT
                            </h2>

                            <span>
                                INTERESTS & DISTRACTIONS
                            </span>

                        </div>


                        <div className="interests-grid">

                            {INTERESTS.map((interest, index) => (

                                <article
                                    key={interest.title}
                                    className="interest-item"
                                >

                                    <div className="interest-number">
                                        0{index + 1}
                                    </div>

                                    <h3>
                                        {interest.title}
                                    </h3>

                                    <p>
                                        {interest.text}
                                    </p>

                                </article>

                            ))}

                        </div>

                    </section>


                    {/* =========================================
                        GOATS + MOVIES
                    ========================================== */}

                    <section className="bottom-grid">

                        {/* GOATS */}

                        <article className="bottom-section">

                            <div className="mini-label">
                                OPINION
                            </div>

                            <h2>
                                THE
                                <br />
                                GOAT FILES
                            </h2>

                            <p className="section-intro">
                                A completely unbiased and scientifically
                                rigorous ranking.
                            </p>

                            <div className="rank-list">

                                {GOATS.map((goat, index) => (

                                    <div
                                        key={goat}
                                        className="rank-item"
                                    >

                                        <span>
                                            0{index + 1}
                                        </span>

                                        <strong>
                                            {goat}
                                        </strong>

                                    </div>

                                ))}

                            </div>

                            <p className="tiny-note">
                                *The editorial board accepts no criticism
                                regarding this list.
                            </p>

                        </article>


                        {/* MOVIES */}

                        <article className="bottom-section">

                            <div className="mini-label">
                                ENTERTAINMENT
                            </div>

                            <h2>
                                CINEMA
                                <br />
                                DESK
                            </h2>

                            <p className="section-intro">
                                Films that have survived repeated viewing.
                            </p>

                            <div className="movie-list">

                                {MOVIES.map((movie, index) => (

                                    <div
                                        key={movie}
                                        className="movie-item"
                                    >

                                        <span>
                                            {index + 1}
                                        </span>

                                        <strong>
                                            {movie}
                                        </strong>

                                    </div>

                                ))}

                            </div>

                            <div className="editor-note">

                                <span>
                                    EDITOR'S NOTE
                                </span>

                                <p>
                                    Yes, Spider-Verse made the list.
                                    Obviously.
                                </p>

                            </div>

                        </article>

                    </section>


                    {/* =========================================
                        CLASSIFIEDS
                    ========================================== */}

                    <section className="classifieds">

                        <div className="classified-title">
                            CLASSIFIEDS
                        </div>

                        <div className="classified-grid">

                            <div>
                                <h3>
                                    DEVELOPER WANTED
                                </h3>

                                <p>
                                    Must enjoy building things and
                                    questioning life choices.
                                </p>
                            </div>

                            <div>
                                <h3>
                                    BUGS FOR SALE
                                </h3>

                                <p>
                                    Freshly produced. Several varieties
                                    available.
                                </p>
                            </div>

                            <div>
                                <h3>
                                    DSA TUTOR NEEDED
                                </h3>

                                <p>
                                    Applicant must be significantly better
                                    than the student.
                                </p>
                            </div>

                            <div>
                                <h3>
                                    IDEAS WANTED
                                </h3>

                                <p>
                                    Good ideas preferred. Terrible ideas
                                    also considered.
                                </p>
                            </div>

                        </div>

                    </section>


                    {/* =========================================
                        FOOTER
                    ========================================== */}

                    <footer className="newspaper-footer">

                        <h2>
                            STILL BUILDING.
                        </h2>

                        <p>
                            END OF EDITION • THANKS FOR READING
                        </p>

                        <Link to="/">
                            ← RETURN TO PORTFOLIO
                        </Link>

                    </footer>

                </div>
            </div>

        </main>
    );
}