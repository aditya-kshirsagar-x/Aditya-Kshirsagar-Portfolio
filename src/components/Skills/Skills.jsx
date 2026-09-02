import React, { useEffect, useMemo, useRef, useState } from 'react';
import './skills.css';
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
// renders when a link is present, so nothing here is ever a dead href.
const PROJECTS = [
    {
        id: 'client-server-chat',
        title: 'Client-Server Chat Application',
        summary:
            'A real-time messaging application built on a multithreaded client-server model, handling concurrent connections over a socket-based network layer.',
        stack: ['Java', 'Client-Server Architecture', 'Networking', 'Multithreading', 'Real-time Communication'],
        image: '/images/projects/client-server-chat.png',
        link: '',
        featured: true,
    },
    {
        id: 'smart-campus',
        title: 'Smart Student Campus Dashboard',
        summary:
            'A campus information dashboard built with React and Vite, presenting student data through a responsive interface.',
        stack: ['React', 'JavaScript', 'Responsive UI', 'Dashboard Architecture', 'Vite'],
        image: '/images/projects/smart-campus.png',
        link: '',
    },
    {
        id: 'smart-hostel',
        title: 'Smart Hostel Management System',
        summary:
            'A full-stack management system for hostel operations, pairing a React interface with a database-backed dashboard.',
        stack: ['React', 'Full-Stack Architecture', 'Database', 'Management Dashboard'],
        image: '/images/projects/smart-hostel.png',
        link: '',
    },
    {
        id: 'portfolio-elearning',
        title: 'Portfolio / E-Learning Platform',
        summary:
            'A content-driven platform structured around courses, built with React and responsive design principles.',
        stack: ['React', 'JavaScript', 'Responsive Design', 'Course & Content Architecture'],
        image: '/images/projects/portfolio.png',
        link: '',
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
    const ref = useSurfaceInteraction({ tilt: true, maxTilt: 5, disabled: interactionsDisabled });

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

function ProjectCard({ project, index, interactionsDisabled }) {
    const ref = useSurfaceInteraction({ tilt: true, maxTilt: 2.5, disabled: interactionsDisabled });

    return (
        <article
            ref={ref}
            className={`project-card group${project.featured ? ' project-card-featured' : ''}`}
            style={{ transitionDelay: `${index * 90}ms` }}
        >
            <div className="project-media">
                <ProjectImage image={project.image} alt={`Screenshot of the ${project.title} interface`} />
                <div className="project-media-overlay" aria-hidden="true" />
            </div>

            <div className="project-body">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-stack" role="list">
                    {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                        View project <span className="project-link-arrow" aria-hidden="true">→</span>
                    </a>
                ) : (
                    <span className="project-link project-link-disabled">
                        Case study coming soon
                    </span>
                )}
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
        </section>
    );
}