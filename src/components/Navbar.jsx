import React, { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const NAVBAR_STYLES = `
/* =========================================================
   Navbar.css — Liquid Glass system
   Tailwind still handles layout/utility; this file owns the
   glass surfaces, shine, and pointer-driven ambient light so
   those effects live in one maintainable place instead of
   being duplicated as inline styles everywhere.
   ========================================================= */

.glass-nav {
    --glow-x: 50%;
    --glow-y: 0%;
    --nav-bg: rgba(255, 255, 255, 0.035);
    --nav-border: rgba(255, 255, 255, 0.08);
    --nav-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
    background: var(--nav-bg);
    border: 1px solid var(--nav-border);
    box-shadow: var(--nav-shadow);
    -webkit-backdrop-filter: blur(14px) saturate(130%);
    backdrop-filter: blur(14px) saturate(130%);
    transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Fallback for browsers without backdrop-filter support */
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .glass-nav {
        background: rgba(8, 10, 12, 0.92);
    }
}

.glass-nav--scrolled {
    --nav-bg: rgba(10, 12, 14, 0.6);
    --nav-border: rgba(255, 255, 255, 0.1);
    --nav-shadow: 0 10px 32px rgba(0, 0, 0, 0.45);
}

/* Top hairline — the "edge catching light" reflection */
.glass-nav__edge {
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.22),
        transparent
    );
    pointer-events: none;
}

/* Ambient light that tracks the pointer via CSS vars, updated
   directly on the DOM — never through React state. Kept very
   faint: this is reflected light on glass, not a spotlight. */
.glass-nav__glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.045;
    background: radial-gradient(
        320px circle at var(--glow-x) var(--glow-y),
        #7fd8e8,
        transparent 70%
    );
    will-change: background;
}

@media (hover: none), (pointer: coarse) {
    .glass-nav__glow {
        display: none;
    }
}

/* ---------------------------------------------------------
   Nav links
   --------------------------------------------------------- */
.nav-link {
    position: relative;
    color: #9ca3af;
    transition: color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover,
.nav-link:focus-visible {
    color: #ffffff;
    transform: translate3d(0, -1px, 0);
}

.nav-link__pill {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
}

.nav-link:hover .nav-link__pill,
.nav-link:focus-visible .nav-link__pill {
    opacity: 1;
}

.nav-link__underline {
    position: absolute;
    left: 50%;
    bottom: -1px;
    height: 1px;
    width: 18px;
    transform: translate3d(-50%, 0, 0) scaleX(0);
    background: #ffffff;
    border-radius: 9999px;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        background 0.3s ease;
}

.nav-link:hover .nav-link__underline,
.nav-link:focus-visible .nav-link__underline {
    transform: translate3d(-50%, 0, 0) scaleX(1);
}

.nav-link--active {
    color: #ffffff;
}

.nav-link--active .nav-link__underline {
    transform: translate3d(-50%, 0, 0) scaleX(1);
    background: #7fd8e8;
}

/* ---------------------------------------------------------
   Hire Me — restrained liquid-glass CTA.
   Neutral glass is the material; cyan is a hairline accent
   only, never a fill.
   --------------------------------------------------------- */
.glass-btn {
    position: relative;
    overflow: hidden;
    color: #f5f7f7;
    background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 0.06),
        rgba(255, 255, 255, 0.02)
    );
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    will-change: transform;
}

.glass-btn:hover,
.glass-btn:focus-visible {
    border-color: rgba(127, 216, 232, 0.4);
    background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 0.09),
        rgba(255, 255, 255, 0.03)
    );
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14),
        0 0 10px rgba(127, 216, 232, 0.12);
}

.glass-btn:active {
    transform: scale(0.97) !important;
}

.glass-btn__shine {
    position: absolute;
    inset: -40% -20%;
    background: linear-gradient(
        115deg,
        transparent 40%,
        rgba(255, 255, 255, 0.16) 50%,
        transparent 60%
    );
    opacity: 0;
    transform: translate3d(-60%, 0, 0);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
        opacity 0.3s ease;
    pointer-events: none;
}

.glass-btn:hover .glass-btn__shine,
.glass-btn:focus-visible .glass-btn__shine {
    opacity: 1;
    transform: translate3d(60%, 0, 0);
}

/* ---------------------------------------------------------
   Mobile panel
   --------------------------------------------------------- */
.mobile-panel {
    background: rgba(10, 12, 14, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(20px) saturate(130%);
    backdrop-filter: blur(20px) saturate(130%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .mobile-panel {
        background: rgba(6, 8, 10, 0.96);
    }
}

.mobile-scrim {
    background: rgba(5, 5, 5, 0.7);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

/* ---------------------------------------------------------
   Motion & input-mode guards
   --------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
    .glass-nav,
    .glass-nav *,
    .nav-link,
    .nav-link *,
    .glass-btn,
    .glass-btn *,
    .mobile-panel,
    .mobile-panel * {
        transition-duration: 0.001ms !important;
        animation-duration: 0.001ms !important;
    }

    .glass-nav__glow {
        display: none;
    }
}
`;

const finePointerQuery = '(hover: hover) and (pointer: fine)';
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const supportsDesktopEffects = () =>
    typeof window !== 'undefined' &&
    window.matchMedia(finePointerQuery).matches &&
    !window.matchMedia(reducedMotionQuery).matches;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navRef = useRef(null);
    const hireRef = useRef(null);
    const panelRef = useRef(null);
    const mobileFirstLinkRef = useRef(null);
    const menuButtonRef = useRef(null);

    const scrolledRef = useRef(false);
    const scrollRafRef = useRef(null);

    const glowRafRef = useRef(null);
    const glowPointRef = useRef({ x: 0.5, y: 0 });
    const navBoundsRef = useRef(null);

    const hireRafRef = useRef(null);
    const hirePointerRef = useRef({ x: 0, y: 0 });
    const hireHoverRef = useRef(false);
    const hireBoundsRef = useRef(null);

    /* ---------------------------------------------------------
       Scroll state — passive listener, single RAF in flight,
       and a bail-out so we never call setState with a value
       that hasn't actually changed.
    --------------------------------------------------------- */
    useEffect(() => {
        const evaluate = () => {
            const isScrolled = window.scrollY > 24;
            if (isScrolled !== scrolledRef.current) {
                scrolledRef.current = isScrolled;
                setScrolled(isScrolled);
            }
            scrollRafRef.current = null;
        };

        const onScroll = () => {
            if (scrollRafRef.current === null) {
                scrollRafRef.current = window.requestAnimationFrame(evaluate);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        evaluate();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (scrollRafRef.current !== null) {
                window.cancelAnimationFrame(scrollRafRef.current);
                scrollRafRef.current = null;
            }
        };
    }, []);

    /* ---------------------------------------------------------
       Active section tracking — IntersectionObserver, in
       NAV_ITEMS order (Home, About, Projects, Skills, Contact).
    --------------------------------------------------------- */
    useEffect(() => {
        const sections = NAV_ITEMS
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (sections.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    /* ---------------------------------------------------------
       Mobile menu: lock body scroll, focus first item on open,
       restore on close/unmount.
    --------------------------------------------------------- */
    useEffect(() => {
        if (!mobileOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        mobileFirstLinkRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileOpen]);

    /* ---------------------------------------------------------
       Escape to close + simple focus trap while menu is open
    --------------------------------------------------------- */
    useEffect(() => {
        if (!mobileOpen) return undefined;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
                menuButtonRef.current?.focus();
                return;
            }

            if (e.key === 'Tab' && panelRef.current) {
                const focusable = panelRef.current.querySelectorAll(
                    'a[href], button:not([disabled])'
                );
                if (focusable.length === 0) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [mobileOpen]);

    /* ---------------------------------------------------------
       Ambient pointer-follow glow — desktop / fine-pointer only.
       Bounds are cached on enter (not re-read on every move),
       coordinates are written straight to CSS custom properties
       inside a single in-flight RAF; this never touches React
       state, so pointer movement causes zero re-renders.
    --------------------------------------------------------- */
    const flushGlow = useCallback(() => {
        if (navRef.current) {
            const { x, y } = glowPointRef.current;
            navRef.current.style.setProperty('--glow-x', `${x}%`);
            navRef.current.style.setProperty('--glow-y', `${y}%`);
        }
        glowRafRef.current = null;
    }, []);

    const handlePointerEnter = useCallback(() => {
        if (!navRef.current || !supportsDesktopEffects()) return;
        navBoundsRef.current = navRef.current.getBoundingClientRect();
    }, []);

    const handlePointerMove = useCallback(
        (e) => {
            if (!navRef.current || !supportsDesktopEffects()) return;
            const rect = navBoundsRef.current || navRef.current.getBoundingClientRect();
            glowPointRef.current = {
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            };
            if (glowRafRef.current === null) {
                glowRafRef.current = window.requestAnimationFrame(flushGlow);
            }
        },
        [flushGlow]
    );

    useEffect(
        () => () => {
            if (glowRafRef.current !== null) {
                window.cancelAnimationFrame(glowRafRef.current);
            }
        },
        []
    );

    /* ---------------------------------------------------------
       Magnetic Hire Me — desktop / fine-pointer only. Movement
       is capped to a very small range and combined with the
       hover scale into a single transform, applied via ref
       inside one in-flight RAF. No React state. Bounds are
       cached on enter rather than re-read every move.
    --------------------------------------------------------- */
    const MAX_X = 6;
    const MAX_Y = 5;

    const flushHire = useCallback(() => {
        if (hireRef.current) {
            const { x, y } = hirePointerRef.current;
            const scale = hireHoverRef.current ? 1.02 : 1;
            hireRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        }
        hireRafRef.current = null;
    }, []);

    const scheduleHireFlush = useCallback(() => {
        if (hireRafRef.current === null) {
            hireRafRef.current = window.requestAnimationFrame(flushHire);
        }
    }, [flushHire]);

    const handleHireEnter = useCallback(() => {
        if (!hireRef.current || !supportsDesktopEffects()) return;
        hireBoundsRef.current = hireRef.current.getBoundingClientRect();
        hireHoverRef.current = true;
        scheduleHireFlush();
    }, [scheduleHireFlush]);

    const handleHireMove = useCallback(
        (e) => {
            if (!hireRef.current || !supportsDesktopEffects()) return;
            const rect = hireBoundsRef.current || hireRef.current.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + rect.height / 2);
            hirePointerRef.current = {
                x: Math.max(-MAX_X, Math.min(MAX_X, relX * 0.14)),
                y: Math.max(-MAX_Y, Math.min(MAX_Y, relY * 0.22)),
            };
            scheduleHireFlush();
        },
        [scheduleHireFlush]
    );

    const handleHireLeave = useCallback(() => {
        hireHoverRef.current = false;
        hirePointerRef.current = { x: 0, y: 0 };
        scheduleHireFlush();
    }, [scheduleHireFlush]);

    useEffect(
        () => () => {
            if (hireRafRef.current !== null) {
                window.cancelAnimationFrame(hireRafRef.current);
            }
        },
        []
    );

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            <style>{NAVBAR_STYLES}</style>
            <nav
                ref={navRef}
                onMouseEnter={handlePointerEnter}
                onMouseMove={handlePointerMove}
                aria-label="Primary"
                className={[
                    'fixed left-1/2 z-50 -translate-x-1/2',
                    'w-[94%] md:w-[92%] max-w-6xl',
                    'transition-all duration-500 ease-out',
                    scrolled ? 'top-3' : 'top-5',
                ].join(' ')}
            >
                <div
                    className={[
                        'glass-nav',
                        scrolled ? 'glass-nav--scrolled' : '',
                        'rounded-2xl md:rounded-full',
                    ].join(' ')}
                >
                    <div className="glass-nav__glow" aria-hidden="true" />
                    <div className="glass-nav__edge" aria-hidden="true" />

                    <div
                        className={[
                            'relative flex items-center justify-between',
                            'px-4 sm:px-5 md:px-6 lg:px-7 transition-all duration-500 ease-out',
                            'gap-2 md:gap-3',
                            scrolled ? 'h-[54px]' : 'h-16',
                        ].join(' ')}
                    >
                        {/* Brand */}
                        <a
                            href="#home"
                            className="group relative flex flex-col leading-none shrink-0 outline-none"
                        >
                            <span className="flex items-baseline gap-[6px] text-[12px] sm:text-[13px] md:text-[14px] font-semibold tracking-[0.2em] text-white transition-all duration-300 group-hover:tracking-[0.24em] group-focus-visible:tracking-[0.24em]">
                                ADITYA
                                <span className="text-[#cdeef3] transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                                    KSHIRSAGAR
                                </span>
                            </span>
                            <span
                                aria-hidden="true"
                                className="mt-1 h-px w-0 bg-gradient-to-r from-white/70 to-transparent transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full"
                            />
                            <span className="absolute -inset-3 rounded-xl opacity-0 group-focus-visible:opacity-100 ring-1 ring-white/30 transition-opacity" />
                        </a>

                        {/* Desktop nav */}
                        <ul className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={[
                                                'nav-link',
                                                isActive ? 'nav-link--active' : '',
                                                'relative block px-3 lg:px-4 py-2 text-[11px] lg:text-[12px] font-medium tracking-[0.12em] uppercase',
                                                'rounded-full outline-none whitespace-nowrap',
                                                'focus-visible:ring-1 focus-visible:ring-white/40',
                                            ].join(' ')}
                                        >
                                            <span className="nav-link__pill" aria-hidden="true" />
                                            <span className="relative">{item.label}</span>
                                            <span className="nav-link__underline" aria-hidden="true" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Actions */}
                        <div className="hidden md:flex items-center shrink-0">
                            <a
                                ref={hireRef}
                                href="#contact"
                                onMouseEnter={handleHireEnter}
                                onMouseMove={handleHireMove}
                                onMouseLeave={handleHireLeave}
                                className="glass-btn rounded-full px-4 lg:px-5 py-2 text-[11px] lg:text-[12px] font-semibold tracking-[0.08em] uppercase outline-none focus-visible:ring-2 focus-visible:ring-white/40 whitespace-nowrap"
                            >
                                <span className="glass-btn__shine" aria-hidden="true" />
                                <span className="relative inline-flex items-center gap-1.5">
                                    Hire Me
                                    <span aria-hidden="true">→</span>
                                </span>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            ref={menuButtonRef}
                            type="button"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-nav-panel"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white/80 outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 md:hidden shrink-0"
                        >
                            <span className="relative block h-3.5 w-4">
                                <span
                                    className={[
                                        'absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ease-out',
                                        mobileOpen ? 'top-1/2 rotate-45' : '',
                                    ].join(' ')}
                                />
                                <span
                                    className={[
                                        'absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200',
                                        mobileOpen ? 'opacity-0' : 'opacity-100',
                                    ].join(' ')}
                                />
                                <span
                                    className={[
                                        'absolute left-0 bottom-0 h-px w-full bg-current transition-all duration-300 ease-out',
                                        mobileOpen ? 'bottom-1/2 -rotate-45' : '',
                                    ].join(' ')}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay menu */}
            <div
                id="mobile-nav-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={[
                    'fixed inset-0 z-40 md:hidden',
                    'transition-opacity duration-500 ease-out',
                    mobileOpen ? 'visible opacity-100' : 'invisible opacity-0',
                ].join(' ')}
            >
                <button
                    type="button"
                    aria-hidden="true"
                    tabIndex={-1}
                    onClick={closeMobile}
                    className="mobile-scrim absolute inset-0 h-full w-full cursor-default"
                />

                <div
                    ref={panelRef}
                    className={[
                        'mobile-panel absolute inset-x-4 top-20 rounded-3xl p-8',
                        'transition-all duration-500 ease-out',
                        mobileOpen
                            ? 'translate-y-0 scale-100 opacity-100'
                            : '-translate-y-3 scale-[0.98] opacity-0',
                    ].join(' ')}
                >
                    <ul className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item, i) => (
                            <li
                                key={item.id}
                                style={{
                                    transitionDelay: mobileOpen ? `${80 + i * 60}ms` : '0ms',
                                    opacity: mobileOpen ? 1 : 0,
                                    transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
                                    transition:
                                        'opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                                }}
                            >
                                <a
                                    ref={i === 0 ? mobileFirstLinkRef : undefined}
                                    href={`#${item.id}`}
                                    onClick={closeMobile}
                                    aria-current={activeSection === item.id ? 'true' : undefined}
                                    className={[
                                        'block rounded-xl px-3 py-3 text-lg font-medium tracking-wide outline-none transition-colors duration-300',
                                        'focus-visible:ring-1 focus-visible:ring-white/40',
                                        activeSection === item.id
                                            ? 'text-white'
                                            : 'text-[#9CA3AF] hover:text-white active:text-white',
                                    ].join(' ')}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6"
                        style={{
                            transitionDelay: mobileOpen ? '340ms' : '0ms',
                            opacity: mobileOpen ? 1 : 0,
                            transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
                            transition:
                                'opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                        }}
                    >
                        <a
                            href="#contact"
                            onClick={closeMobile}
                            className="glass-btn rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.08em] uppercase"
                        >
                            <span className="glass-btn__shine" aria-hidden="true" />
                            <span className="relative">Hire Me →</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
} 