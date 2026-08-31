import React, { useEffect, useRef } from "react";

/* ── STYLES ────────────────────────────────────────────────────────────
   Kept in one file on purpose. Injected once via a <style> tag rendered
   by the component itself — no separate .css file to import or lose.
   All selectors are scoped under .projects-section so nothing leaks
   into the rest of the portfolio.
   ───────────────────────────────────────────────────────────────────── */
const PROJECTS_STYLES = `
.projects-section {
  --accent: #00e5ff;
  --accent-soft: rgba(0, 229, 255, 0.35);
  --violet: #6e6bff;
  --surface: #050505;
  position: relative;
  background: var(--surface);
  overflow: clip;
}

/* ---------------------------------------------------------------------
   Ambient atmosphere behind the whole section (static, no repaint loop)
   --------------------------------------------------------------------- */
.projects-section .projects-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.projects-section .projects-atmosphere::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  width: 1200px;
  height: 1200px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0, 229, 255, 0.07) 0%, rgba(0, 229, 255, 0) 60%);
}

.projects-section .projects-grain {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.projects-section .projects-hairline-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent);
  pointer-events: none;
}

/* ---------------------------------------------------------------------
   Header actions row (title + GitHub profile CTA)
   --------------------------------------------------------------------- */
.projects-section .projects-header-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.projects-section .github-profile-link {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .projects-section .github-profile-link {
    background: rgba(12, 13, 14, 0.92);
  }
}

.projects-section .github-profile-link:hover,
.projects-section .github-profile-link:focus-visible {
  border-color: var(--accent-soft);
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 12px 28px -14px rgba(0, 229, 255, 0.35);
}

/* ---------------------------------------------------------------------
   Panel — the 3D tilt surface (CSS-variable driven, no React re-render)
   --------------------------------------------------------------------- */
.projects-section .project-panel {
  --rx: 0deg;
  --ry: 0deg;
  --mx: 50%;
  --my: 50%;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1400px) rotateX(var(--rx)) rotateY(var(--ry)) translate3d(0, 0, 0);
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
  will-change: transform;
}

.projects-section .project-panel:hover,
.projects-section .project-panel:focus-within {
  box-shadow: 0 30px 60px -28px rgba(0, 0, 0, 0.75);
}

/* Glass surface */
.projects-section .project-glass {
  position: relative;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color 0.4s ease;
}

/* Inner top highlight — a hairline of light along the top edge of the glass */
.projects-section .project-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 30%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(1px)) {
  .projects-section .project-glass {
    background: linear-gradient(155deg, rgba(14, 16, 18, 0.94), rgba(10, 11, 12, 0.92));
  }
}

.projects-section .project-panel:hover .project-glass,
.projects-section .project-panel:focus-within .project-glass {
  border-color: rgba(0, 229, 255, 0.35);
}

/* Featured (hackathon) treatment — tasteful, not a different design language */
.projects-section .project-panel.is-featured .project-glass {
  border-color: rgba(0, 229, 255, 0.24);
  box-shadow: inset 0 0 0 1px rgba(0, 229, 255, 0.07);
}

.projects-section .project-panel.is-featured:hover .project-glass,
.projects-section .project-panel.is-featured:focus-within .project-glass {
  border-color: rgba(0, 229, 255, 0.6);
}

.projects-section .featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: rgba(0, 229, 255, 0.08);
  color: var(--accent);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  width: fit-content;
}

.projects-section .featured-badge .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

/* Light sweep that follows the cursor — CSS var only, no React state */
.projects-section .project-glass::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    380px circle at var(--mx) var(--my),
    rgba(0, 229, 255, 0.13),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.projects-section .project-panel:hover .project-glass::after,
.projects-section .project-panel:focus-within .project-glass::after {
  opacity: 1;
}

/* ---------------------------------------------------------------------
   Visual / artwork stage — prism + parallax
   --------------------------------------------------------------------- */
.projects-section .project-visual {
  position: relative;
  overflow: hidden;
  background: radial-gradient(120% 140% at 15% 0%, #0d1b1f 0%, #050505 55%);
}

.projects-section .project-visual img,
.projects-section .visual-fallback {
  transform: translateZ(0) scale(1.04);
  transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.projects-section .project-panel:hover .project-visual img,
.projects-section .project-panel:hover .visual-fallback {
  transform: scale(1.05);
}

.projects-section .visual-fallback {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(110, 107, 255, 0.08)),
    repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.04) 0 2px, transparent 2px 40px);
}

/* Prism shard — transform/opacity only, no filter animation */
.projects-section .prism-shard {
  position: absolute;
  width: 60%;
  height: 140%;
  top: -20%;
  right: -10%;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.12), rgba(0, 229, 255, 0.06) 40%, transparent 70%);
  clip-path: polygon(30% 0%, 100% 10%, 85% 100%, 10% 90%);
  transform: rotate(0deg) translateZ(30px);
  opacity: 0.85;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
  pointer-events: none;
  mix-blend-mode: screen;
}

.projects-section .project-panel:hover .prism-shard {
  transform: rotate(4deg) translateZ(30px) scale(1.03);
  opacity: 1;
}

/* Giant editorial index number */
.projects-section .project-index {
  position: absolute;
  bottom: -0.15em;
  right: 0.1em;
  font-size: clamp(6rem, 14vw, 11rem);
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.14);
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
}

/* Meta panel content lift */
.projects-section .project-meta > * {
  transform: translateZ(20px);
}

/* Tech pill */
.projects-section .tech-pill {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.projects-section .tech-pill:hover {
  border-color: var(--accent-soft);
  background: rgba(0, 229, 255, 0.06);
  color: var(--accent);
  transform: translateY(-1px);
}

/* Action links */
.projects-section .action-link {
  position: relative;
  overflow: hidden;
}

.projects-section .action-link .arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.projects-section .action-link:hover .arrow,
.projects-section .action-link:focus-visible .arrow {
  transform: translateX(5px);
}

.projects-section .action-link.primary {
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: linear-gradient(180deg, rgba(0, 229, 255, 0.12), rgba(0, 229, 255, 0.02));
}

.projects-section .action-link.primary:hover,
.projects-section .action-link.primary:focus-visible {
  border-color: var(--accent);
  box-shadow: 0 0 24px -4px var(--accent-soft);
}

.projects-section .action-link.repo,
.projects-section .action-link.secondary {
  transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.projects-section .action-link.repo:hover,
.projects-section .action-link.repo:focus-visible,
.projects-section .action-link.secondary:hover,
.projects-section .action-link.secondary:focus-visible {
  transform: translateY(-2px) scale(1.015);
}

.projects-section .action-link.disabled {
  opacity: 0.35;
  pointer-events: none;
}

.projects-section .action-link:focus-visible,
.projects-section .tech-pill:focus-visible,
.projects-section .github-profile-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* ---------------------------------------------------------------------
   Scroll reveal — opacity + transform only (GPU-friendly, reversible)
   --------------------------------------------------------------------- */
.projects-section .reveal-item {
  opacity: 0;
  transform: translate3d(0, 30px, 0) scale(0.985);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.projects-section .reveal-item.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

/* ---------------------------------------------------------------------
   Mobile / coarse pointer: quiet the 3D and cursor effects, keep content
   --------------------------------------------------------------------- */
@media (max-width: 768px), (hover: none), (pointer: coarse) {
  .projects-section .project-panel {
    transform: none !important;
  }
  .projects-section .prism-shard {
    display: none;
  }
  .projects-section .project-glass::after {
    display: none;
  }
  .projects-section .project-visual img,
  .projects-section .visual-fallback {
    transform: none !important;
  }
  .projects-section .project-glass {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .projects-section .github-profile-link:hover {
    transform: none;
  }
}

@media (max-width: 768px) {
  .projects-section .projects-grain {
    display: none;
  }
}

/* Small-phone safety net — no horizontal overflow, no clipped text */
@media (max-width: 380px) {
  .projects-section .project-index {
    font-size: clamp(4rem, 20vw, 7rem);
  }
  .projects-section .project-meta {
    padding: 1.75rem 1.5rem !important;
  }
}

/* ---------------------------------------------------------------------
   Reduced motion: show everything, skip the movement
   --------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .projects-section .reveal-item {
    transition: none;
    opacity: 1;
    transform: none;
  }
  .projects-section .project-panel {
    transition: none;
    transform: none !important;
  }
  .projects-section .project-visual img,
  .projects-section .visual-fallback,
  .projects-section .prism-shard,
  .projects-section .action-link .arrow,
  .projects-section .tech-pill,
  .projects-section .github-profile-link {
    transition: none !important;
    transform: none !important;
  }
}
`;

/**
 * ── GITHUB IDENTITY ──────────────────────────────────────────────────────
 * Single source of truth for the profile CTA. Update here only.
 */
const GITHUB_PROFILE_URL = "https://github.com/aditya-kshirsagar-x";

/**
 * ── PROJECT DATA ─────────────────────────────────────────────────────────
 * Add new projects here — nothing else in this file needs to change.
 *
 * • liveUrl / repoUrl: leave "" if it doesn't exist yet. Empty ones render
 *   a disabled "Source Pending" state instead of a dead link.
 * • backendUrl: optional secondary repository CTA (e.g. a project's
 *   separate backend service repo). Omit or leave "" if not applicable.
 * • image: path under /public/images/projects/. If the file 404s, a glass
 *   fallback panel renders automatically — the layout never breaks.
 * • highlights: 2–4 short, true statements about the build. Optional.
 * • featured: true adds a subtle "spotlight" treatment to the card.
 *
 * NOTE: the big editorial number on each card reflects its position in
 * this array (index + 1), not the `id` field — so reordering this array
 * always keeps the numbering correct.
 */
const projectList = [
    {
        id: 1,
        title: "TBG Smart Campus",
        type: "Web Application",
        description:
            "A digital campus interface built for T.B.G. Polytechnic — student-facing navigation, campus resources, and dashboard views in a modern, responsive layout.",
        image: "/images/projects/tbg-smart-campus.png",
        tags: ["React", "Vite", "Tailwind CSS"],
        liveUrl: "https://tbg-smart-campus.vercel.app",
        repoUrl: "https://github.com/aditya-kshirsagar-x/tbg-smart-campus",
        backendUrl: "https://github.com/aditya-kshirsagar-x/smart-campus-backend",
        highlights: [
            "Student-focused navigation",
            "Responsive dashboard views",
            "Built and deployed with Vite",
        ],
    },
    {
        id: 2,
        title: "Smart Hostel Management System — Hackathon: Logic Legends",
        type: "Hackathon Project",
        description:
            "A hostel/accommodation management platform — covering room allocation, hostel operations, and complaint & maintenance workflows for administrators — built and presented as the 'Logic Legends' hackathon submission, demonstrating rapid problem-solving and collaborative development under time constraints.",
        image: "/images/projects/smart-hostel.png",
        tags: ["React", "Rapid Prototyping", "Team Collaboration"],
        liveUrl: "https://umarbtec-coder.github.io/Hackathon-Logic_Legends",
        repoUrl: "https://github.com/umarbtec-coder/Hackathon-Logic_Legends",
        highlights: [
            "Room allocation workflow",
            "Complaint & maintenance tracking",
            "Built under hackathon time constraints",
        ],
        featured: true,
    },
    {
        id: 3,
        title: "Client-Server Chat Application",
        type: "Academic / Technical Project",
        description:
            "A client-server communication system demonstrating real-time messaging, multi-user handling, and socket-based networking architecture.",
        image: "/images/projects/client-server-chat.png",
        tags: ["Java", "Socket Programming", "Multithreading"],
        liveUrl: "",
        repoUrl: "https://github.com/aditya-kshirsagar-x/client-server-chat-application",
        highlights: [
            "Real-time multi-client messaging",
            "Custom server-client architecture",
            "Multithreaded connection handling",
        ],
    },
];

/* Inline icons — no remote icon service, nothing that can fail to load. */
function ArrowIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={`arrow ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function GithubIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
        </svg>
    );
}

function ProjectVisual({ project, displayNumber, isFirst }) {
    const imgRef = useRef(null);
    const fallbackRef = useRef(null);

    const handleError = () => {
        if (imgRef.current) imgRef.current.style.display = "none";
        if (fallbackRef.current) fallbackRef.current.style.display = "block";
    };

    return (
        <div className="project-visual aspect-[16/10] md:aspect-[16/9]">
            <img
                ref={imgRef}
                src={project.image}
                alt={`Representative artwork for ${project.title}`}
                loading={isFirst ? "eager" : "lazy"}
                decoding="async"
                onError={handleError}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div
                ref={fallbackRef}
                className="visual-fallback absolute inset-0"
                style={{ display: "none" }}
                aria-hidden="true"
            />
            <div className="prism-shard" aria-hidden="true" />
            <span className="project-index" aria-hidden="true">
                {String(displayNumber).padStart(2, "0")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        </div>
    );
}

/**
 * 3D tilt + cursor-light, implemented without touching React state.
 * Bounds are cached once on pointer-enter (not recomputed on every
 * mousemove), updates are written straight to CSS custom properties,
 * and everything runs inside a single, never-stacking RAF. This is the
 * "optimized pointer engine": one RAF at a time, latest event wins, no
 * layout thrashing, full cleanup on unmount.
 */
function usePremiumTilt(panelRef) {
    useEffect(() => {
        const el = panelRef.current;
        if (!el) return undefined;

        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const pointerQuery = window.matchMedia("(pointer: coarse), (hover: none)");
        if (motionQuery.matches || pointerQuery.matches) return undefined;

        let rect = null;
        let rafId = null;
        let pendingEvent = null;

        const applyFrame = () => {
            rafId = null;
            if (!pendingEvent || !rect) return;
            const px = (pendingEvent.clientX - rect.left) / rect.width;
            const py = (pendingEvent.clientY - rect.top) / rect.height;
            const clampedX = Math.min(Math.max(px, 0), 1);
            const clampedY = Math.min(Math.max(py, 0), 1);
            const ry = (clampedX - 0.5) * 6; // max ~6deg
            const rx = (0.5 - clampedY) * 5; // max ~5deg
            el.style.setProperty("--rx", `${rx}deg`);
            el.style.setProperty("--ry", `${ry}deg`);
            el.style.setProperty("--mx", `${clampedX * 100}%`);
            el.style.setProperty("--my", `${clampedY * 100}%`);
        };

        const handleEnter = () => {
            rect = el.getBoundingClientRect();
        };

        const handleMove = (e) => {
            pendingEvent = e;
            if (rafId == null) {
                rafId = requestAnimationFrame(applyFrame);
            }
        };

        const reset = () => {
            if (rafId != null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            pendingEvent = null;
            rect = null;
            el.style.setProperty("--rx", "0deg");
            el.style.setProperty("--ry", "0deg");
        };

        el.addEventListener("pointerenter", handleEnter, { passive: true });
        el.addEventListener("pointermove", handleMove, { passive: true });
        el.addEventListener("pointerleave", reset, { passive: true });

        return () => {
            el.removeEventListener("pointerenter", handleEnter);
            el.removeEventListener("pointermove", handleMove);
            el.removeEventListener("pointerleave", reset);
            if (rafId != null) cancelAnimationFrame(rafId);
        };
    }, [panelRef]);
}

function ProjectPanel({ project, displayNumber, isFirst, reversed }) {
    const panelRef = useRef(null);
    usePremiumTilt(panelRef);

    const hasLive = Boolean(project.liveUrl);
    const hasRepo = Boolean(project.repoUrl);
    const hasBackend = Boolean(project.backendUrl);

    return (
        <article
            ref={panelRef}
            className={`project-panel grid grid-cols-1 md:grid-cols-12 gap-0 ${project.featured ? "is-featured" : ""
                } ${reversed ? "md:[direction:rtl]" : ""}`}
        >
            <div
                className={`project-glass md:col-span-12 grid grid-cols-1 md:grid-cols-12 ${reversed ? "[direction:ltr]" : ""
                    }`}
            >
                <div className="md:col-span-7">
                    <ProjectVisual project={project} displayNumber={displayNumber} isFirst={isFirst} />
                </div>

                <div className="project-meta md:col-span-5 flex flex-col justify-center gap-5 p-8 md:p-10">
                    {project.featured && (
                        <span className="featured-badge">
                            <span className="dot" aria-hidden="true" />
                            Hackathon
                        </span>
                    )}

                    <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#9CA3AF]">
                        <span className="h-px w-6 bg-white/20" />
                        {project.type}
                    </div>

                    <h3 className="text-2xl md:text-[1.75rem] font-semibold text-white leading-snug">
                        {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#9CA3AF]">{project.description}</p>

                    {project.highlights?.length > 0 && (
                        <ul className="flex flex-col gap-1.5">
                            {project.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                                    <span className="mt-1 h-1 w-1 rounded-full bg-[#00E5FF]/70 shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}

                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tech-pill rounded-full px-3 py-1 text-[11px] text-[#9CA3AF]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <a
                            href={hasLive ? project.liveUrl : undefined}
                            target={hasLive ? "_blank" : undefined}
                            rel={hasLive ? "noopener noreferrer" : undefined}
                            aria-disabled={!hasLive}
                            tabIndex={hasLive ? 0 : -1}
                            className={`action-link primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white ${hasLive ? "" : "disabled"
                                }`}
                        >
                            Live Experience
                            <ArrowIcon />
                        </a>

                        <a
                            href={hasRepo ? project.repoUrl : undefined}
                            target={hasRepo ? "_blank" : undefined}
                            rel={hasRepo ? "noopener noreferrer" : undefined}
                            aria-disabled={!hasRepo}
                            tabIndex={hasRepo ? 0 : -1}
                            className={`action-link repo inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] hover:text-white hover:border-white/25 transition-colors ${hasRepo ? "" : "disabled"
                                }`}
                        >
                            <GithubIcon />
                            {hasRepo ? "View Repository" : "Source Pending"}
                            {hasRepo && <ArrowIcon />}
                        </a>

                        {hasBackend && (
                            <a
                                href={project.backendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-link secondary inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] hover:text-white hover:border-white/25 transition-colors"
                            >
                                <GithubIcon />
                                View Backend
                                <ArrowIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

/**
 * Reversible scroll reveal.
 * Uses a single IntersectionObserver for every card; toggles a class both
 * ways (no `unobserve`) so scrolling back up re-triggers the entrance
 * instead of leaving cards stuck. Stagger is derived from each item's
 * fixed position in the list, not from the batch of entries the observer
 * happens to report, so it stays consistent on fast/reverse scroll.
 */
function useReversibleReveal(containerRef) {
    useEffect(() => {
        const root = containerRef.current;
        if (!root) return undefined;

        const items = Array.from(root.querySelectorAll(".reveal-item"));
        if (items.length === 0) return undefined;

        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (motionQuery.matches) {
            items.forEach((item) => item.classList.add("is-visible"));
            return undefined;
        }

        items.forEach((item, i) => {
            item.dataset.revealIndex = String(i);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        const idx = Number(target.dataset.revealIndex || 0);
                        target.style.transitionDelay = `${Math.min(idx, 4) * 90}ms`;
                        target.classList.add("is-visible");
                    } else {
                        target.style.transitionDelay = "0ms";
                        target.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, [containerRef]);
}

export default function Projects() {
    const containerRef = useRef(null);
    useReversibleReveal(containerRef);

    return (
        <section id="projects" ref={containerRef} className="projects-section py-24 md:py-32 px-6">
            <style>{PROJECTS_STYLES}</style>
            <div className="projects-atmosphere" aria-hidden="true">
                <div className="projects-hairline-grid" />
                <div className="projects-grain" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <header className="mb-16 md:mb-24">
                    <div className="projects-header-row">
                        <div className="max-w-2xl">
                            <div className="reveal-item flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#00E5FF] mb-6">
                                <span className="h-px w-8 bg-[#00E5FF]/60" />
                                02 — Selected Work
                            </div>
                            <h2 className="reveal-item text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                                Projects that solve
                                <br />
                                real problems.
                            </h2>
                        </div>

                        <a
                            href={GITHUB_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-item github-profile-link inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white shrink-0"
                        >
                            <GithubIcon />
                            GitHub Profile
                            <ArrowIcon />
                        </a>
                    </div>
                </header>

                <div className="flex flex-col gap-8 md:gap-10">
                    {projectList.map((project, index) => (
                        <div className="reveal-item" key={project.id}>
                            <ProjectPanel
                                project={project}
                                displayNumber={index + 1}
                                isFirst={index === 0}
                                reversed={index % 2 === 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}