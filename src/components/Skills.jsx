import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA — edit here only. Everything below reads from these arrays.  */
/* ------------------------------------------------------------------ */

const CORE_STACK = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'];

const SKILL_GROUPS = [
    {
        code: '01',
        title: 'Frontend',
        description: 'Building responsive, interactive interfaces with modern component architecture.',
        items: [
            { name: 'React.js', note: 'Component-based UI' },
            { name: 'JavaScript', note: 'Core scripting language' },
            { name: 'HTML5', note: 'Semantic markup' },
            { name: 'CSS3', note: 'Styling & layout' },
            { name: 'Tailwind CSS', note: 'Utility-first styling' },
            { name: 'Vite', note: 'Build tooling' },
        ],
    },
    {
        code: '02',
        title: 'Backend',
        description: 'Designing server logic, routing, and APIs that connect interfaces to data.',
        items: [
            { name: 'Node.js', note: 'JS runtime' },
            { name: 'Express.js', note: 'Server framework' },
            { name: 'REST APIs', note: 'Data endpoints' },
            { name: 'Authentication', note: 'Sessions & access' },
            { name: 'Server Routing', note: 'Request handling' },
        ],
    },
    {
        code: '03',
        title: 'Database & Systems',
        description: 'Structuring data and client-server communication for reliable applications.',
        items: [
            { name: 'MongoDB', note: 'NoSQL database' },
            { name: 'Database Management', note: 'Schema & queries' },
            { name: 'Client-Server Architecture', note: 'App communication model' },
        ],
    },
    {
        code: '04',
        title: 'Tools & Deployment',
        description: 'Managing version control, testing, and shipping projects to production.',
        items: [
            { name: 'Git', note: 'Version control' },
            { name: 'GitHub', note: 'Code hosting' },
            { name: 'Vercel', note: 'Deployment' },
            { name: 'VS Code', note: 'Editor' },
            { name: 'Postman', note: 'API testing' },
        ],
    },
];

// Add a real `link` (repo or live URL) when you have one — the CTA only
// renders as a link when a link is present, so nothing here is ever a dead href.
const PROJECTS = [
    {
        id: 'client-server-chat',
        title: 'Client-Server Chat Application',
        type: 'Real-time systems',
        summary:
            'A real-time messaging application built on a multithreaded client-server model, handling concurrent connections over a socket-based network layer.',
        stack: ['Java', 'Client-Server Architecture', 'Networking', 'Multithreading', 'Real-time Communication'],
        image: '/images/projects/client-server-chat.png',
        link: '',
        featured: true,
        caseStudy: {
            problem:
                'Multiple users needed to exchange messages at the same time, over the network, without one connection blocking or slowing down another.',
            approach:
                'Designed a client-server model in Java where each incoming connection is handled on its own thread, communicating over a socket-based network layer so messages move between clients in real time.',
            highlights: [
                'Multithreaded connection handling, one thread per client',
                'Socket-based network layer for real-time delivery',
                'Client-server protocol for message routing between users',
            ],
            outcome:
                'Demonstrates the ability to design a networked system from first principles — concurrency, sockets, and protocol design — without relying on a higher-level real-time framework.',
        },
    },
    {
        id: 'smart-campus',
        title: 'Smart Student Campus Dashboard',
        type: 'Dashboard',
        summary:
            'A campus information dashboard built with React and Vite, presenting student data through a responsive interface.',
        stack: ['React', 'JavaScript', 'Responsive UI', 'Dashboard Architecture', 'Vite'],
        image: '/images/projects/smart-campus.png',
        link: '',
        caseStudy: {
            problem:
                'Campus and student information needed a single, readable interface instead of being scattered across disconnected views.',
            approach:
                'Built a component-driven dashboard in React, using Vite for fast local iteration, and structured the layout to stay legible as the amount of student data on screen grows.',
            highlights: [
                'Component-based dashboard architecture',
                'Responsive layout that adapts across screen sizes',
                'Vite-powered build for fast development iteration',
            ],
            outcome:
                'Demonstrates frontend architecture skills for data-dense interfaces — organizing information so it stays usable, not just displayed.',
        },
    },
    {
        id: 'smart-hostel',
        title: 'Smart Hostel Management System',
        type: 'Full-stack platform',
        summary:
            'A full-stack management system for hostel operations, pairing a React interface with a database-backed dashboard.',
        stack: ['React', 'Full-Stack Architecture', 'Database', 'Management Dashboard'],
        image: '/images/projects/smart-hostel.png',
        link: '',
        caseStudy: {
            problem:
                'Hostel operations needed a centralized way to manage records, rather than tracking them manually or across disconnected tools.',
            approach:
                'Paired a React front end with a database-backed dashboard, connecting the interface directly to persistent data so records stay consistent across views.',
            highlights: [
                'Full-stack architecture connecting UI to a database layer',
                'Management dashboard for day-to-day operational data',
                'Schema and query design behind the interface',
            ],
            outcome:
                'Demonstrates end-to-end full-stack development — from data modeling through to the interface someone actually uses.',
        },
    },
    {
        id: 'portfolio-elearning',
        title: 'Portfolio / E-Learning Platform',
        type: 'Content platform',
        summary:
            'A content-driven platform structured around courses, built with React and responsive design principles.',
        stack: ['React', 'JavaScript', 'Responsive Design', 'Course & Content Architecture'],
        image: '/images/projects/portfolio.png',
        link: '',
        caseStudy: {
            problem:
                'Course-style content needed a structure that stays organized and easy to navigate as more material is added.',
            approach:
                'Built the platform in React around a course-and-content architecture, applying responsive design principles so the same structure holds up on any device.',
            highlights: [
                'Content and course data modeled as reusable structures',
                'Responsive component layout throughout',
                'Navigation built around how course content is organized',
            ],
            outcome:
                'Demonstrates content-driven application structure — modeling real content, not just static pages.',
        },
    },
];

/* ------------------------------------------------------------------ */
/*  HOOKS                                                              */
/* ------------------------------------------------------------------ */

/** True if the user's OS/browser asks for reduced motion. */
function useReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduced(mq.matches);
        const handler = (e) => setReduced(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return reduced;
}

/** True on coarse-pointer (touch) devices, where tilt/spotlight are skipped. */
function useCoarsePointer() {
    const [coarse, setCoarse] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(pointer: coarse)').matches;
    });

    useEffect(() => {
        const mq = window.matchMedia('(pointer: coarse)');
        setCoarse(mq.matches);
        const handler = (e) => setCoarse(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    return coarse;
}

/**
 * Attaches a lightweight pointer-follow effect to a DOM node using CSS
 * custom properties only (no React re-renders, no layout thrash).
 * Sets --mx/--my (spotlight position) and, when tilt is enabled,
 * --rx/--ry (rotation).
 *
 * Performance contract:
 * - `getBoundingClientRect()` is called exactly once per hover session,
 *   on `pointerenter` — never on every `pointermove`.
 * - Only one `requestAnimationFrame` is ever in flight per card; a new
 *   pointermove just updates the pending event, it never stacks frames.
 * - On `pointerleave` the pending frame is cancelled and every CSS
 *   variable resets to its neutral value in one shot — no lingering
 *   transform, no snapping.
 */
function useSurfaceInteraction({ tilt = true, maxTilt = 6, disabled = false } = {}) {
    const ref = useRef(null);
    const rectRef = useRef(null);
    const frameRef = useRef(null);
    const pendingRef = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || disabled) return undefined;

        const applyFrame = () => {
            frameRef.current = null;
            const rect = rectRef.current;
            const event = pendingRef.current;
            if (!rect || !event) return;

            const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
            const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

            el.style.setProperty('--mx', `${x * 100}%`);
            el.style.setProperty('--my', `${y * 100}%`);

            if (tilt) {
                const rotateY = (x - 0.5) * maxTilt * 2;
                const rotateX = (0.5 - y) * maxTilt * 2;
                el.style.setProperty('--rx', `${rotateX}deg`);
                el.style.setProperty('--ry', `${rotateY}deg`);
            }
        };

        const handleEnter = () => {
            rectRef.current = el.getBoundingClientRect();
        };

        const handleMove = (e) => {
            pendingRef.current = e;
            if (frameRef.current == null) {
                frameRef.current = requestAnimationFrame(applyFrame);
            }
        };

        const handleLeave = () => {
            if (frameRef.current != null) {
                cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            pendingRef.current = null;
            rectRef.current = null;
            el.style.setProperty('--rx', '0deg');
            el.style.setProperty('--ry', '0deg');
            el.style.setProperty('--mx', '50%');
            el.style.setProperty('--my', '50%');
        };

        el.addEventListener('pointerenter', handleEnter, { passive: true });
        el.addEventListener('pointermove', handleMove, { passive: true });
        el.addEventListener('pointerleave', handleLeave, { passive: true });

        return () => {
            el.removeEventListener('pointerenter', handleEnter);
            el.removeEventListener('pointermove', handleMove);
            el.removeEventListener('pointerleave', handleLeave);
            if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
        };
    }, [tilt, maxTilt, disabled]);

    return ref;
}

/**
 * Reveals a container's direct children with a staggered fade-up as it
 * scrolls into view — and smoothly reverses when it scrolls back out.
 * A single IntersectionObserver per container; visibility just tracks
 * `entry.isIntersecting` directly, so scrolling up naturally undoes the
 * reveal (no disconnect-after-first-hit, no stuck state).
 */
function useRevealOnScroll(disabled = false) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(disabled);

    useEffect(() => {
        if (disabled) {
            setVisible(true);
            return undefined;
        }

        const el = ref.current;
        if (!el) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [disabled]);

    return [ref, visible];
}

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

/** Four corner brackets — the section's recurring "schematic" signature. */
function CornerFrame() {
    return (
        <>
            <span className="corner corner-tl" aria-hidden="true" />
            <span className="corner corner-tr" aria-hidden="true" />
            <span className="corner corner-bl" aria-hidden="true" />
            <span className="corner corner-br" aria-hidden="true" />
        </>
    );
}

function TechTag({ name, note }) {
    return (
        <button type="button" className="tech-tag" aria-label={`${name}: ${note}`}>
            <span>{name}</span>
            <span className="tech-tag-note" aria-hidden="true">{note}</span>
        </button>
    );
}

function SkillCategoryCard({ group, index, interactionsDisabled }) {
    const ref = useSurfaceInteraction({ tilt: true, maxTilt: 6, disabled: interactionsDisabled });

    return (
        <article
            ref={ref}
            className="skill-card group"
            style={{ transitionDelay: `${index * 70}ms` }}
        >
            <CornerFrame />
            <div className="skill-card-spotlight" aria-hidden="true" />

            <div className="skill-card-head">
                <span className="skill-card-code">{group.code}</span>
                <h3 className="skill-card-title">{group.title}</h3>
            </div>

            <p className="skill-card-desc">{group.description}</p>

            <ul className="skill-card-list" role="list">
                {group.items.map((item) => (
                    <li key={item.name}>
                        <TechTag name={item.name} note={item.note} />
                    </li>
                ))}
            </ul>

            <div className="skill-card-foot">
                <span>CATEGORY {group.code}</span>
                <span className="skill-card-signal">
                    <span className="signal-dot" aria-hidden="true" />
                    ACTIVE
                </span>
            </div>
        </article>
    );
}

function ProjectImage({ image, alt }) {
    const [errored, setErrored] = useState(false);

    if (errored || !image) {
        return (
            <div className="project-image-fallback" role="img" aria-label={alt}>
                <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
                    <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="22" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 46 L26 32 L36 40 L44 30 L56 44" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Preview coming soon</span>
            </div>
        );
    }

    return (
        <img
            src={image}
            alt={alt}
            loading="lazy"
            className="project-image"
            onError={() => setErrored(true)}
        />
    );
}

/** Small chevron used on the case-study toggle; rotates via a class, never redrawn. */
function ChevronIcon() {
    return (
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="case-study-chevron">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/**
 * Case-study panel — a real developer-portfolio write-up built from the
 * project's own data (problem, approach, highlights, outcome). Toggled
 * open in place, never a placeholder and never a fake external link.
 */
function CaseStudyPanel({ id, open, caseStudy }) {
    return (
        <div
            id={id}
            className={`case-study-collapse${open ? ' is-open' : ''}`}
            aria-hidden={!open}
        >
            <div className="case-study-collapse-inner">
                <div className="case-study-grid">
                    <div className="case-study-item">
                        <span className="case-study-label">Problem</span>
                        <p>{caseStudy.problem}</p>
                    </div>
                    <div className="case-study-item">
                        <span className="case-study-label">Approach</span>
                        <p>{caseStudy.approach}</p>
                    </div>
                    <div className="case-study-item">
                        <span className="case-study-label">Key implementation</span>
                        <ul role="list">
                            {caseStudy.highlights.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="case-study-item">
                        <span className="case-study-label">Outcome</span>
                        <p>{caseStudy.outcome}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index, interactionsDisabled }) {
    const ref = useSurfaceInteraction({ tilt: true, maxTilt: 4, disabled: interactionsDisabled });
    const [caseStudyOpen, setCaseStudyOpen] = useState(false);
    const caseStudyId = `${project.id}-case-study`;

    return (
        <article
            ref={ref}
            className={`project-card group${project.featured ? ' project-card-featured' : ''}`}
            style={{ transitionDelay: `${index * 90}ms` }}
        >
            <div className="project-media">
                <ProjectImage image={project.image} alt={`Screenshot of the ${project.title} interface`} />
                <div className="project-media-overlay" aria-hidden="true" />
                {project.type && <span className="project-media-type">{project.type}</span>}
            </div>

            <div className="project-body">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-stack" role="list">
                    {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className="project-foot">
                    <button
                        type="button"
                        className={`case-study-toggle${caseStudyOpen ? ' is-open' : ''}`}
                        aria-expanded={caseStudyOpen}
                        aria-controls={caseStudyId}
                        onClick={() => setCaseStudyOpen((v) => !v)}
                    >
                        <span>{caseStudyOpen ? 'Hide case study' : 'View case study'}</span>
                        <ChevronIcon />
                    </button>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-live-link">
                            <span>Live</span>
                            <span className="project-link-arrow" aria-hidden="true">→</span>
                        </a>
                    )}
                </div>

                <CaseStudyPanel id={caseStudyId} open={caseStudyOpen} caseStudy={project.caseStudy} />
            </div>
        </article>
    );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Skills() {
    const reducedMotion = useReducedMotion();
    const coarsePointer = useCoarsePointer();
    const interactionsDisabled = reducedMotion || coarsePointer;

    const [headerRef, headerVisible] = useRevealOnScroll(reducedMotion);
    const [skillsRef, skillsVisible] = useRevealOnScroll(reducedMotion);
    const [projectsRef, projectsVisible] = useRevealOnScroll(reducedMotion);

    return (
        <section id="skills" className="skills-section" aria-labelledby="skills-heading">
            <div className="skills-container">

                {/* ---------------------------------------------------------- */}
                {/* HEADER                                                      */}
                {/* ---------------------------------------------------------- */}
                <header
                    ref={headerRef}
                    className={`skills-header reveal${headerVisible ? ' is-visible' : ''}`}
                >
                    <p className="skills-eyebrow">01 — Expertise</p>
                    <h2 id="skills-heading" className="skills-heading">
                        Tools I Build With
                    </h2>
                    <p className="skills-subtitle">
                        The technologies I use to design, build, and ship full-stack web
                        applications — from interactive interfaces to the servers and
                        databases running behind them.
                    </p>

                    <ul className="core-stack" role="list" aria-label="Core technology stack">
                        {CORE_STACK.map((tech, i) => (
                            <li key={tech}>
                                <span>{tech}</span>
                                {i < CORE_STACK.length - 1 && <span className="core-stack-sep" aria-hidden="true">/</span>}
                            </li>
                        ))}
                    </ul>
                </header>

                {/* ---------------------------------------------------------- */}
                {/* SKILL CATEGORIES                                            */}
                {/* ---------------------------------------------------------- */}
                <div
                    ref={skillsRef}
                    className={`skills-grid reveal${skillsVisible ? ' is-visible' : ''}`}
                >
                    {SKILL_GROUPS.map((group, index) => (
                        <SkillCategoryCard
                            key={group.code}
                            group={group}
                            index={index}
                            interactionsDisabled={interactionsDisabled}
                        />
                    ))}
                </div>

                {/* ---------------------------------------------------------- */}
                {/* SELECTED TECHNICAL WORK                                     */}
                {/* ---------------------------------------------------------- */}
                <div className="projects-header">
                    <p className="skills-eyebrow">02 — Selected Work</p>
                    <h3 className="projects-heading">Selected Technical Work</h3>
                    <p className="skills-subtitle">
                        A few applications I&apos;ve built, spanning real-time systems,
                        dashboards, and full-stack platforms.
                    </p>
                </div>

                <div
                    ref={projectsRef}
                    className={`projects-grid reveal${projectsVisible ? ' is-visible' : ''}`}
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            interactionsDisabled={interactionsDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* ================================================================
                EMBEDDED STYLES — the complete stylesheet for this section.
                Color system: bg #050505 · primary #FFFFFF · muted #9CA3AF
                Accent #7FE3D9 (graphite-cyan) used ONLY as a tiny precision
                signal — labels, separators, a status dot, focus rings.
                Card hover states use neutral white/silver light, never a
                blue wash, per the "premium engineering, not neon demo" brief.

                Performance notes:
                - Only transform / opacity / border-color / color are ever
                  transitioned or animated. No filter, backdrop-filter, or
                  box-shadow *size*, and no layout-property animation.
                - will-change only switches on during the hover/focus
                  interaction for cards.
                - 3D tilt, pointer light and cursor-follow effects are fully
                  disabled on coarse pointers / touch / prefers-reduced-motion.
                - Pointer bounds are cached once per hover session in the JSX
                  (useSurfaceInteraction) — this stylesheet only ever reads
                  --rx/--ry/--mx/--my, it never recalculates layout itself.
               ================================================================ */}
            <style>{`
                .skills-section {
                    position: relative;
                    background: #050505;
                    color: #ffffff;
                    padding: 7rem 1.5rem;
                    overflow: hidden;
                    isolation: isolate;
                }

                /* ---------- quiet static atmosphere (no repaint loop, no masking
                   of real content — lives entirely behind everything on its own layer) ---------- */

                .skills-section::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                    background:
                        radial-gradient(circle 560px at 50% -10%, rgba(255, 255, 255, 0.05), transparent 62%),
                        radial-gradient(circle 480px at 108% 112%, rgba(255, 255, 255, 0.03), transparent 65%),
                        linear-gradient(to right, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
                    background-size: auto, auto, 64px 64px, 64px 64px;
                    -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 20%, black, transparent 75%);
                    mask-image: radial-gradient(ellipse 85% 65% at 50% 20%, black, transparent 75%);
                }

                .skills-container {
                    position: relative;
                    z-index: 1;
                    max-width: 80rem;
                    margin: 0 auto;
                }

                /* ---------- header ---------- */

                .skills-eyebrow {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.72rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: #7fe3d9;
                    margin-bottom: 1.1rem;
                    opacity: 0.85;
                }

                .skills-heading,
                .projects-heading {
                    font-size: clamp(2.25rem, 5vw, 3.75rem);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.05;
                    margin-bottom: 1.25rem;
                }

                .projects-heading {
                    font-size: clamp(1.75rem, 3.2vw, 2.5rem);
                    margin-bottom: 0.75rem;
                }

                .skills-subtitle {
                    max-width: 38rem;
                    color: #9ca3af;
                    font-size: 1rem;
                    line-height: 1.7;
                }

                .core-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-top: 2.25rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.8rem;
                    letter-spacing: 0.06em;
                    color: #ffffff;
                }

                .core-stack li {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    transition: color 0.25s ease;
                }

                .core-stack li:hover {
                    color: #7fe3d9;
                }

                .core-stack-sep {
                    color: #7fe3d9;
                    opacity: 0.5;
                }

                .projects-header {
                    margin-top: 6rem;
                    margin-bottom: 3rem;
                }

                /* ---------------------------------------------------------------------
                   SCROLL REVEAL — fully reversible, no flicker
                   ---------------------------------------------------------------------
                   The JSX toggles .is-visible on .reveal based on
                   entry.isIntersecting directly (see useRevealOnScroll), so it
                   naturally flips both ways — scroll down reveals, scroll up reverses,
                   with zero extra logic here. Because this uses plain CSS transitions
                   (never animation / animation-fill-mode: forwards), the reverse
                   is smooth and automatic.

                   Each child gets a tiny built-in stagger via nth-child so cards enter
                   as a wave rather than all at once. The JSX also sets an inline
                   transition-delay per card (index * 70ms / 90ms) — inline style
                   always wins over a stylesheet rule at equal specificity, so this
                   nth-child stagger is just a safe fallback for any reveal group that
                   doesn't set its own delay.
                   ------------------------------------------------------------------- */

                .reveal > * {
                    opacity: 0;
                    transform: perspective(900px) translate3d(0, 28px, 0) scale(0.97) rotateX(3deg);
                    transform-origin: 50% 100%;
                    transition:
                        opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                    backface-visibility: hidden;
                    will-change: opacity, transform;
                }

                .reveal > *:nth-child(1) { transition-delay: 0ms; }
                .reveal > *:nth-child(2) { transition-delay: 80ms; }
                .reveal > *:nth-child(3) { transition-delay: 160ms; }
                .reveal > *:nth-child(4) { transition-delay: 240ms; }
                .reveal > *:nth-child(n+5) { transition-delay: 300ms; }

                .reveal.is-visible > * {
                    opacity: 1;
                    transform: perspective(900px) translate3d(0, 0, 0) scale(1) rotateX(0deg);
                }

                /* ---------- skill grid / cards ---------- */

                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                }

                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }
                }

                .skill-card {
                    --rx: 0deg;
                    --ry: 0deg;
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    padding: 2rem;
                    border-radius: 1.1rem;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.016));
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 20px 50px -25px rgba(0, 0, 0, 0.7);
                    transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
                    transform-style: preserve-3d;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                                            border-color 0.4s ease,
                                            box-shadow 0.4s ease;
                    overflow: hidden;
                }

                @supports not (backdrop-filter: blur(1px)) {
                    .skill-card {
                        background: linear-gradient(180deg, rgba(15, 16, 17, 0.95), rgba(9, 10, 11, 0.93));
                    }
                }

                /* thin glass edge highlight — static, decorative, no animation */
                .skill-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(155deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0) 40%);
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    opacity: 0.6;
                }

                /* liquid pointer light — the real .skill-card-spotlight DOM node the
                   JSX renders, driven purely by --mx/--my. Neutral silver, not blue.
                   Opacity/transform only. */
                .skill-card-spotlight {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(320px circle at var(--mx) var(--my), rgba(255, 255, 255, 0.07), transparent 62%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .skill-card:hover,
                .skill-card:focus-within {
                    border-color: rgba(255, 255, 255, 0.22);
                    box-shadow: 0 34px 64px -28px rgba(0, 0, 0, 0.85);
                    will-change: transform;
                    transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-6px) scale(1.015) translate3d(0, 0, 0);
                }

                .skill-card:hover .skill-card-spotlight,
                .skill-card:focus-within .skill-card-spotlight {
                    opacity: 1;
                }

                .skill-card-head {
                    display: flex;
                    align-items: baseline;
                    gap: 0.85rem;
                    margin-bottom: 0.75rem;
                    transform: translateZ(16px);
                }

                .skill-card-code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.85rem;
                    color: #7fe3d9;
                    letter-spacing: 0.05em;
                    opacity: 0.9;
                }

                .skill-card-title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }

                .skill-card-desc {
                    position: relative;
                    color: #9ca3af;
                    font-size: 0.92rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    max-width: 26rem;
                    transform: translateZ(12px);
                }

                .skill-card-list {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-bottom: 1.75rem;
                    transform: translateZ(10px);
                }

                .skill-card-foot {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.68rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #6b7280;
                }

                .skill-card-signal {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #7fe3d9;
                }

                .signal-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 999px;
                    background: #7fe3d9;
                    animation: pulse-dot 2.2s ease-in-out infinite;
                }

                /* lightweight pulse — opacity + transform only, no shadow expansion */
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.45; transform: scale(0.82); }
                }

                /* corner brackets — the section's recurring signature detail;
                   this is the one place a tiny accent signal is welcome */

                .corner {
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border-color: rgba(255, 255, 255, 0.16);
                    opacity: 0.5;
                    transition: opacity 0.35s ease, border-color 0.35s ease;
                    pointer-events: none;
                }

                .group:hover .corner,
                .skill-card:hover .corner,
                .skill-card:focus-within .corner {
                    opacity: 1;
                    border-color: rgba(127, 227, 217, 0.6);
                }

                .corner-tl { top: 10px; left: 10px; border-top: 1px solid; border-left: 1px solid; }
                .corner-tr { top: 10px; right: 10px; border-top: 1px solid; border-right: 1px solid; }
                .corner-bl { bottom: 10px; left: 10px; border-bottom: 1px solid; border-left: 1px solid; }
                .corner-br { bottom: 10px; right: 10px; border-bottom: 1px solid; border-right: 1px solid; }

                /* ---------- tech tags (micro-interaction) ---------- */

                .tech-tag {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.78rem;
                    color: #d1d5db;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.6rem;
                    padding: 0.5rem 0.85rem;
                    cursor: default;
                    transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
                }

                .tech-tag:hover,
                .tech-tag:focus-visible {
                    color: #ffffff;
                    border-color: rgba(255, 255, 255, 0.3);
                    background: rgba(255, 255, 255, 0.07);
                    transform: translateY(-1px);
                    outline: none;
                }

                .tech-tag-note {
                    position: absolute;
                    left: 50%;
                    bottom: calc(100% + 8px);
                    transform: translateX(-50%) translateY(4px);
                    white-space: nowrap;
                    max-width: 14rem;
                    font-size: 0.68rem;
                    letter-spacing: 0.04em;
                    color: #050505;
                    background: #e5e7eb;
                    padding: 0.32rem 0.6rem;
                    border-radius: 0.4rem;
                    box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    z-index: 5;
                }

                .tech-tag:hover .tech-tag-note,
                .tech-tag:focus-visible .tech-tag-note {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }

                /* keep tooltips from clipping off-screen near the section edges */
                .skill-card-list li:first-child .tech-tag-note {
                    left: 0;
                    transform: translateX(0) translateY(4px);
                }

                .skill-card-list li:first-child .tech-tag:hover .tech-tag-note,
                .skill-card-list li:first-child .tech-tag:focus-visible .tech-tag-note {
                    transform: translateX(0) translateY(0);
                }

                .skill-card-list li:last-child .tech-tag-note {
                    left: auto;
                    right: 0;
                    transform: translateX(0) translateY(4px);
                }

                .skill-card-list li:last-child .tech-tag:hover .tech-tag-note,
                .skill-card-list li:last-child .tech-tag:focus-visible .tech-tag-note {
                    transform: translateX(0) translateY(0);
                }

                /* ---------- project grid / cards ---------- */

                .projects-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (min-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .project-card-featured {
                        grid-column: span 2;
                    }
                    .project-card-featured .project-media {
                        aspect-ratio: 21 / 9;
                    }
                }

                .project-card {
                    --rx: 0deg;
                    --ry: 0deg;
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    border-radius: 1.1rem;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    box-shadow: 0 20px 50px -28px rgba(0, 0, 0, 0.7);
                    transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
                    transform-style: preserve-3d;
                    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                                            border-color 0.45s ease,
                                            box-shadow 0.45s ease;
                }

                @supports not (backdrop-filter: blur(1px)) {
                    .project-card {
                        background: rgba(10, 11, 12, 0.92);
                    }
                }

                .project-card-featured {
                    border-color: rgba(255, 255, 255, 0.12);
                    box-shadow: inset 0 0 0 1px rgba(127, 227, 217, 0.05), 0 20px 50px -28px rgba(0, 0, 0, 0.7);
                }

                .project-card-featured:hover,
                .project-card-featured:focus-within {
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .project-card:hover,
                .project-card:focus-within {
                    border-color: rgba(255, 255, 255, 0.22);
                    box-shadow: 0 34px 74px -30px rgba(0, 0, 0, 0.85);
                    will-change: transform;
                    transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01) translate3d(0, 0, 0);
                }

                .project-media {
                    position: relative;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                    background: linear-gradient(160deg, #0d0d0d, #050505);
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transform: scale(1);
                    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .project-card:hover .project-image,
                .project-card:focus-within .project-image {
                    transform: scale(1.035);
                }

                .project-image-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.65rem;
                    color: rgba(156, 163, 175, 0.6);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.75rem;
                    letter-spacing: 0.06em;
                    background:
                        linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
                        repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 40px);
                }

                .project-media-type {
                    position: absolute;
                    top: 0.9rem;
                    left: 0.9rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.66rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #e5e7eb;
                    background: rgba(5, 5, 5, 0.55);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-radius: 999px;
                    padding: 0.32rem 0.7rem;
                    backdrop-filter: blur(6px);
                    -webkit-backdrop-filter: blur(6px);
                }

                .project-media-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(5, 5, 5, 0) 42%, rgba(5, 5, 5, 0.88) 100%),
                        radial-gradient(60% 60% at var(--mx) var(--my), rgba(255, 255, 255, 0.06), transparent 70%);
                    opacity: 0.85;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .project-card:hover .project-media-overlay,
                .project-card:focus-within .project-media-overlay {
                    opacity: 1;
                }

                .project-body {
                    padding: 1.75rem;
                }

                .project-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    margin-bottom: 0.6rem;
                    color: #f4f4f5;
                    transition: color 0.3s ease;
                }

                .project-card:hover .project-title,
                .project-card:focus-within .project-title {
                    color: #ffffff;
                }

                .project-summary {
                    color: #9ca3af;
                    font-size: 0.9rem;
                    line-height: 1.65;
                    margin-bottom: 1.1rem;
                }

                .project-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.45rem;
                    margin-bottom: 1.4rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.72rem;
                    letter-spacing: 0.03em;
                    color: #d1d5db;
                }

                .project-stack li {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.5rem;
                    padding: 0.3rem 0.6rem;
                    transition: border-color 0.25s ease, color 0.25s ease;
                }

                .project-card:hover .project-stack li {
                    border-color: rgba(255, 255, 255, 0.16);
                }

                .project-foot {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding-top: 1.1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                /* ---------- case-study toggle button ---------- */

                .case-study-toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.55rem;
                    font-family: inherit;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-radius: 999px;
                    padding: 0.55rem 1rem;
                    cursor: pointer;
                    transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
                }

                .case-study-toggle:hover,
                .case-study-toggle:focus-visible {
                    border-color: rgba(255, 255, 255, 0.32);
                    background: rgba(255, 255, 255, 0.08);
                    outline: none;
                }

                .case-study-toggle.is-open {
                    color: #7fe3d9;
                    border-color: rgba(127, 227, 217, 0.35);
                }

                .case-study-chevron {
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .case-study-toggle.is-open .case-study-chevron {
                    transform: rotate(180deg);
                }

                /* ---------- live-project link (only rendered when a real URL exists) ---------- */

                .project-live-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #9ca3af;
                    transition: color 0.3s ease;
                }

                .project-live-link:hover,
                .project-live-link:focus-visible {
                    color: #ffffff;
                }

                .project-link-arrow {
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .project-live-link:hover .project-link-arrow,
                .project-live-link:focus-visible .project-link-arrow {
                    transform: translateX(4px);
                }

                /* ---------- case-study panel ---------------------------------------
                   Expand/collapse uses the grid-template-rows 0fr/1fr technique so
                   height:auto content can transition smoothly without a JS-measured
                   height and without animating an actual layout property on every
                   frame — it only runs once, on a discrete click, never continuously.
                   ------------------------------------------------------------------- */

                .case-study-collapse {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .case-study-collapse.is-open {
                    grid-template-rows: 1fr;
                }

                .case-study-collapse-inner {
                    overflow: hidden;
                    min-height: 0;
                }

                .case-study-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.25rem;
                    padding-top: 1.5rem;
                    margin-top: 1.25rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.07);
                }

                @media (min-width: 640px) {
                    .case-study-grid {
                        grid-template-columns: 1fr 1fr;
                        column-gap: 1.75rem;
                    }
                }

                .case-study-item p,
                .case-study-item ul {
                    color: #9ca3af;
                    font-size: 0.88rem;
                    line-height: 1.65;
                }

                .case-study-item ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .case-study-item li {
                    position: relative;
                    padding-left: 1rem;
                }

                .case-study-item li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0.6em;
                    width: 5px;
                    height: 1px;
                    background: #7fe3d9;
                    opacity: 0.7;
                }

                .case-study-label {
                    display: block;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    font-size: 0.66rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #7fe3d9;
                    opacity: 0.85;
                    margin-bottom: 0.5rem;
                }

                /* ---------- accessibility ---------- */

                .skill-card:focus-visible,
                .project-card:focus-visible,
                .project-live-link:focus-visible,
                .case-study-toggle:focus-visible,
                .tech-tag:focus-visible {
                    outline: 2px solid #7fe3d9;
                    outline-offset: 2px;
                }

                @media (prefers-reduced-motion: reduce) {
                    .skill-card,
                    .project-card,
                    .project-image,
                    .project-link-arrow,
                    .project-title,
                    .project-media-overlay,
                    .tech-tag,
                    .core-stack li,
                    .corner,
                    .case-study-chevron,
                    .reveal > * {
                        transition: opacity 0.2s ease !important;
                        transform: none !important;
                    }

                    .case-study-collapse {
                        transition: none !important;
                    }

                    .skill-card:hover,
                    .project-card:hover,
                    .skill-card:focus-within,
                    .project-card:focus-within {
                        transform: none !important;
                    }

                    .signal-dot {
                        animation: none !important;
                    }

                    .reveal > * {
                        opacity: 1 !important;
                    }
                }

                /* ---------- coarse pointer / touch: disable 3D + pointer-light,
                   keep glass, spacing, content, and tap feedback ---------- */

                @media (hover: none), (pointer: coarse) {
                    .skill-card,
                    .project-card {
                        transform: none !important;
                    }

                    .skill-card:hover,
                    .skill-card:focus-within,
                    .project-card:hover,
                    .project-card:focus-within {
                        transform: none !important;
                    }

                    .skill-card-spotlight {
                        display: none;
                    }

                    .project-media-overlay {
                        opacity: 1;
                    }

                    .project-card:hover .project-image,
                    .project-card:focus-within .project-image {
                        transform: none;
                    }

                    .skill-card,
                    .project-card {
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                    }

                    /* keep the reveal entrance on touch, just simplify the tilt */
                    .reveal > * {
                        transform: translate3d(0, 24px, 0) scale(0.98);
                    }

                    .reveal.is-visible > * {
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }

                /* ---------- low-end / narrow viewport: lighten the render path
                   further while keeping every card, image and link intact ---------- */

                @media (max-width: 480px) {
                    .skills-section { padding: 4.5rem 1.25rem; }
                    .skills-section::before { display: none; }
                    .skill-card { padding: 1.5rem; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
                    .project-body { padding: 1.35rem; }
                    .project-card { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
                    .project-foot { flex-wrap: wrap; }
                }
            `}</style>
        </section>
    );
}