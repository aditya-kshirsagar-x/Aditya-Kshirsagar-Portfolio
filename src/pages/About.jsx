import React, { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/profile.jpeg';

const STACK = ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Git', 'GitHub'];

const SOCIALS = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/aditya-kshirsagar-x',
    aria: 'Visit Aditya Kshirsagar on GitHub',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/aditya____kshirsagar_?igsi=d3piY2dseXlyaQ==',
    aria: 'Visit Aditya Kshirsagar on Instagram',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-kshirsagar-a8169b428',
    aria: 'Visit Aditya Kshirsagar on LinkedIn',
  },
];

/* ============================================================
   Inline styles — scoped entirely to .about-section so this
   single file has zero effect on the rest of the page.
   ============================================================ */
const ABOUT_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=JetBrains+Mono:wght@400;500&display=swap');

.about-section {
  --about-bg: #050505;
  --about-text: #f5f5f5;
  --about-muted: #9ca3af;
  --about-accent: #00e5ff;
  --about-accent-dim: rgba(0, 229, 255, 0.14);
  --about-glass: rgba(255, 255, 255, 0.035);
  --about-glass-strong: rgba(255, 255, 255, 0.06);
  --about-border: rgba(255, 255, 255, 0.09);
  --about-border-hover: rgba(0, 229, 255, 0.35);

  --ambient-x: 50%;
  --ambient-y: 30%;

  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: var(--about-bg);
  color: var(--about-text);
  padding: clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 5vw, 3rem);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  /* new stacking context established above avoids paints from
     bleeding into the rest of the page during scroll animation */
}

.about-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  contain: strict;
}

.about-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 75%);
}

.about-grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  /* static image, painted once — no per-frame recompute */
}

.about-ambient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    480px circle at var(--ambient-x) var(--ambient-y),
    rgba(0, 229, 255, 0.06),
    transparent 70%
  );
  will-change: background;
}

.about-container {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

.about-header {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--about-accent);
  padding-bottom: 1.25rem;
}

.about-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: clamp(2.3rem, 6vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -0.01em;
  color: var(--about-text);
  margin: 0 0 1.25rem;
}

.about-heading .line {
  display: block;
  overflow: hidden;
}

.about-heading .word {
  display: inline-block;
  transform: translateY(110%);
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--wd, 0) * 70ms);
  will-change: transform, opacity;
}

.is-visible .about-heading .word {
  transform: translateY(0);
  opacity: 1;
}

.about-subtitle {
  max-width: 34rem;
  color: var(--about-muted);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.6;
}

.about-main {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.about-story p {
  color: var(--about-muted);
  font-size: clamp(0.95rem, 1.1vw, 1.02rem);
  line-height: 1.75;
  margin: 0 0 1.15rem;
}

.about-story strong {
  color: var(--about-text);
  font-weight: 600;
}

.about-stack {
  margin-top: 2rem;
}

.stack-label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--about-muted);
  margin-bottom: 0.9rem;
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: var(--about-text);
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .pill {
    background: rgba(10, 11, 12, 0.9);
  }
}

@media (hover: hover) and (pointer: fine) {
  .pill:hover {
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    color: var(--about-accent);
    transform: translateY(-2px);
  }
}

.about-visual {
  display: flex;
  justify-content: center;
}

.glass-profile {
  --rx: 0deg;
  --ry: 0deg;
  --mx: 50%;
  --my: 50%;

  position: relative;
  width: 100%;
  max-width: 320px;
  padding: 1.5rem 1.5rem 1.75rem;
  border-radius: 28px;
  border: 1px solid var(--about-border);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 30px 60px -20px rgba(0, 0, 0, 0.7);
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease;
  will-change: transform;
}

@supports not (backdrop-filter: blur(1px)) {
  .glass-profile {
    background: rgba(12, 13, 14, 0.94);
  }
}

@media (hover: hover) and (pointer: fine) {
  .glass-profile:hover {
    border-color: var(--about-border-hover);
  }
}

.glass-profile-sheen {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    180px circle at var(--mx) var(--my),
    rgba(255, 255, 255, 0.12),
    transparent 60%
  );
  pointer-events: none;
}

.glass-profile-photo {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: grayscale(0.15) contrast(1.05);
  transform: scale(1);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (hover: hover) and (pointer: fine) {
  .glass-profile:hover .glass-profile-photo img {
    transform: scale(1.03);
  }
}

.glass-profile-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 35%);
  pointer-events: none;
}

.glass-profile-caption {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 1.1rem;
  text-align: center;
}

.glass-name {
  font-family: 'Fraunces', serif;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.glass-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--about-accent);
  position: relative;
  padding-top: 0.55rem;
  margin-top: 0.25rem;
}

.glass-role::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 1px;
  background: var(--about-accent);
  opacity: 0.5;
}

/* ---------------------------------------------------------------------
   Social profile row — compact glass buttons, digital-business-card feel
   --------------------------------------------------------------------- */
.social-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--about-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
}

@supports not (backdrop-filter: blur(1px)) {
  .social-link {
    background: rgba(10, 11, 12, 0.9);
  }
}

.social-link svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (hover: hover) and (pointer: fine) {
  .social-link:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    color: var(--about-text);
  }

  .social-link:hover svg {
    transform: translateY(-1px);
  }
}

.social-link:focus-visible {
  outline: 2px solid var(--about-accent);
  outline-offset: 3px;
}

.about-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.meta-card {
  --rx: 0deg;
  --ry: 0deg;

  position: relative;
  padding: 1.6rem 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--about-border);
  background: var(--about-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(0) scale(1);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
  outline-offset: 4px;
  will-change: transform;
}

@supports not (backdrop-filter: blur(1px)) {
  .meta-card {
    background: rgba(12, 13, 14, 0.92);
  }
}

@media (hover: hover) and (pointer: fine) {
  .meta-card:hover {
    transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01);
    border-color: var(--about-border-hover);
    background: var(--about-glass-strong);
    box-shadow: 0 20px 40px -24px rgba(0, 229, 255, 0.25);
  }
}

.meta-card:focus-visible {
  transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-4px) scale(1.01);
  border-color: var(--about-border-hover);
  outline: 2px solid var(--about-accent);
}

.meta-card--accent {
  border-color: rgba(0, 229, 255, 0.25);
  background: linear-gradient(160deg, var(--about-accent-dim), transparent 70%);
}

.meta-kicker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}

.meta-kicker {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--about-muted);
}

/* Title row that hosts an inline status LED directly beside the text */
.meta-title--status {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

/* Status LED — a quiet, professional "active" indicator, CSS-only pulse */
.status-led {
  --led-color: #ff4d4f;

  position: relative;
  width: 7px;
  height: 7px;
  min-width: 7px;
  border-radius: 50%;
  background: var(--led-color);
  box-shadow: 0 0 5px 0.5px rgba(255, 77, 79, 0.65);
  flex-shrink: 0;
}

.status-led::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid var(--led-color);
  opacity: 0.5;
  animation: status-pulse 2.4s ease-in-out infinite;
}

@keyframes status-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(0.85);
    opacity: 0;
  }
}

.meta-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--about-text);
  margin: 0 0 0.3rem;
  line-height: 1.3;
}

.meta-detail {
  font-size: 0.85rem;
  color: var(--about-muted);
  margin: 0;
}

.stagger {
  opacity: 0;
  transform: translate3d(0, 24px, 0) scale(0.98);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--d, 0) * 90ms);
  will-change: transform, opacity;
}

.is-visible .stagger {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
}

/* Low-power / touch devices: cut heavy blur and mouse-only effects */
@media (pointer: coarse), (hover: none) {
  .glass-profile,
  .meta-card,
  .pill,
  .social-link {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .glass-profile,
  .meta-card {
    transform: none !important;
  }

  .glass-profile:hover .glass-profile-photo img {
    transform: none !important;
  }
}

@media (max-width: 900px) {
  .about-main {
    grid-template-columns: 1fr;
  }

  .about-visual {
    order: -1;
  }

  .glass-profile {
    max-width: 260px;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .about-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 380px) {
  .about-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .social-link {
    font-size: 0.62rem;
    padding: 0.45rem 0.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stagger,
  .about-heading .word,
  .glass-profile,
  .meta-card,
  .pill,
  .social-link,
  .glass-profile-photo img {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }

  .status-led::after {
    animation: none !important;
    opacity: 0 !important;
  }
}
`;

/* Inline icons — no remote icon service, no extra dependency. */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23H8.5V8.25z" />
    </svg>
  );
}

function SocialIcon({ name, ...props }) {
  if (name === 'github') return <GithubIcon {...props} />;
  if (name === 'instagram') return <InstagramIcon {...props} />;
  if (name === 'linkedin') return <LinkedinIcon {...props} />;
  return null;
}

/**
 * Attaches a subtle pointer-reactive tilt + glass highlight to a card.
 * Pure CSS-variable writes on the DOM node — no React state, no re-renders,
 * no per-move layout reads, and everything batched through one rAF tick.
 * Disabled entirely on touch/coarse-pointer and reduced-motion devices.
 */
function useTilt(maxDeg = 6) {
  const ref = useRef(null);
  const enabledRef = useRef(true);
  const rectRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(null);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse), (hover: none)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    enabledRef.current = !coarse && !reduced;
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const applyTilt = () => {
    rafRef.current = null;
    const el = ref.current;
    if (!el) return;
    const { x, y } = pointerRef.current;
    const rotateY = (x - 0.5) * maxDeg * 2;
    const rotateX = (0.5 - y) * maxDeg * 2;
    el.style.setProperty('--rx', `${rotateX}deg`);
    el.style.setProperty('--ry', `${rotateY}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };

  const onMouseEnter = () => {
    if (!enabledRef.current) return;
    const el = ref.current;
    if (el) rectRef.current = el.getBoundingClientRect();
  };

  const onMouseMove = (e) => {
    if (!enabledRef.current) return;
    const rect = rectRef.current;
    if (!rect) return;
    pointerRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(applyTilt);
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return { ref, onMouseEnter, onMouseMove, onMouseLeave };
}

/**
 * Reveals children with a staggered fade-up as the section crosses the
 * viewport, and smoothly reverses when it scrolls back out — in either
 * direction. State only toggles a class; no per-frame updates.
 */
function useInView(threshold = 0.15, rootMargin = '-8% 0px -10% 0px') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

export default function About() {
  const sectionRef = useRef(null);
  const { ref: revealRef, inView } = useInView(0.15);
  const profileTilt = useTilt(6);
  const expTilt = useTilt(4);
  const eduTilt = useTilt(4);
  const recTilt = useTilt(4);

  // Ambient cursor-follow light — desktop only, throttled via rAF, CSS vars only.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(pointer: coarse), (hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--ambient-x', `${x}%`);
        section.style.setProperty('--ambient-y', `${y}%`);
        frame = null;
      });
    };

    section.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      section.removeEventListener('mousemove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="about"
      ref={(node) => {
        sectionRef.current = node;
        revealRef.current = node;
      }}
      className={`about-section ${inView ? 'is-visible' : ''}`}
      aria-labelledby="about-heading"
    >
      <style>{ABOUT_STYLES}</style>

      <div className="about-backdrop" aria-hidden="true">
        <div className="about-grain" />
        <div className="about-grid" />
        <div className="about-ambient" />
      </div>

      <div className="about-container">
        {/* ---------- Header ---------- */}
        <header className="about-header stagger" style={{ '--d': '0' }}>
          <span className="about-eyebrow">01 — About</span>
          <h2 id="about-heading" className="about-heading">
            <span className="line">
              {'The person'.split(' ').map((w, i) => (
                <span className="word" key={i} style={{ '--wd': i }}>
                  {w}
                </span>
              ))}
            </span>
            <span className="line">
              {'behind the code'.split(' ').map((w, i) => (
                <span className="word" key={i} style={{ '--wd': i + 2 }}>
                  {w}
                </span>
              ))}
            </span>
          </h2>
          <p className="about-subtitle">
            Developer focused on building thoughtful, scalable digital experiences.
          </p>
        </header>

        {/* ---------- Main composition ---------- */}
        <div className="about-main">
          <div className="about-story stagger" style={{ '--d': '1' }}>
            <p>
              Aditya Kshirsagar is a Computer Engineering diploma graduate with a
              focused specialization in MERN stack development. His work sits at the
              intersection of clean architecture and considered interface design —
              building full-stack applications that are as maintainable on the server
              as they are pleasant to use on screen.
            </p>
            <p>
              That foundation was tested and sharpened at{' '}
              <strong>Mountreach Solution Private Limited</strong>, where hands-on
              experience with production codebases turned classroom fundamentals into
              practical engineering instinct — writing React interfaces, building
              Node and Express services, and shaping MongoDB data layers for real
              users.
            </p>
            <p>
              The approach stays consistent regardless of the problem: understand the
              system before touching the code, favor clarity over cleverness, and
              keep learning as the stack evolves.
            </p>

            <div className="about-stack" role="list" aria-label="Core technologies">
              <span className="stack-label">Core stack</span>
              <div className="stack-pills">
                {STACK.map((tech) => (
                  <span className="pill" role="listitem" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual stagger" style={{ '--d': '2' }}>
            <div
              className="glass-profile"
              ref={profileTilt.ref}
              onMouseEnter={profileTilt.onMouseEnter}
              onMouseMove={profileTilt.onMouseMove}
              onMouseLeave={profileTilt.onMouseLeave}
            >
              <div className="glass-profile-sheen" aria-hidden="true" />
              <div className="glass-profile-photo">
                <img
                  src={profileImage}
                  alt="Portrait of Aditya Kshirsagar"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="glass-profile-caption">
                <span className="glass-name">Aditya Kshirsagar</span>
                <span className="glass-role">MERN Stack Developer</span>
              </div>

              <nav className="social-row" aria-label="Social profiles">
                {SOCIALS.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={s.aria}
                  >
                    <SocialIcon name={s.key} />
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* ---------- Meta strip: Experience / Education / Recognition ---------- */}
        <div className="about-meta">
          <article
            className="meta-card stagger"
            style={{ '--d': '3' }}
            ref={expTilt.ref}
            onMouseEnter={expTilt.onMouseEnter}
            onMouseMove={expTilt.onMouseMove}
            onMouseLeave={expTilt.onMouseLeave}
            tabIndex={0}
          >
            <div className="meta-kicker-row">
              <span className="meta-kicker">Experience</span>
            </div>
            <h3 className="meta-title">Mountreach Solution Pvt. Ltd.</h3>
            <p className="meta-detail">MERN Stack Developer</p>
          </article>

          <article
            className="meta-card stagger"
            style={{ '--d': '4' }}
            ref={eduTilt.ref}
            onMouseEnter={eduTilt.onMouseEnter}
            onMouseMove={eduTilt.onMouseMove}
            onMouseLeave={eduTilt.onMouseLeave}
            tabIndex={0}
          >
            <div className="meta-kicker-row">
              <span className="meta-kicker">Education</span>
            </div>
            <h3 className="meta-title">Diploma, Computer Engineering</h3>
            <p className="meta-detail">Polytechnic</p>
          </article>

          <article
            className="meta-card meta-card--accent stagger"
            style={{ '--d': '5' }}
            ref={recTilt.ref}
            onMouseEnter={recTilt.onMouseEnter}
            onMouseMove={recTilt.onMouseMove}
            onMouseLeave={recTilt.onMouseLeave}
            tabIndex={0}
          >
            <div className="meta-kicker-row">
              <span className="meta-kicker">Recognition</span>
            </div>
            <h3 className="meta-title meta-title--status">
              <span className="status-led" aria-hidden="true" />
              Intern of the Month
            </h3>
            <p className="meta-detail">Mountreach Solution Pvt. Ltd.</p>
          </article>
        </div>
      </div>
    </section>
  );
}