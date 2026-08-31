import React, { useEffect, useRef, useState } from "react";

/* ── CONTACT CONFIG ───────────────────────────────────────────────────────
   Real values only. Add a social link here once you have a real URL —
   nothing else in this file needs to change.
   ───────────────────────────────────────────────────────────────────── */
const CONTACT = {
    email: "adityakshirsagar762060@gmail.com",
    phone: "+91 7620606131",
    phoneHref: "tel:+917620606131",
    // socials: [{ label: "GitHub", href: "https://github.com/..." }],
    socials: [],
};

/* ── STYLES ────────────────────────────────────────────────────────────
   Kept in one file on purpose — injected once via a <style> tag rendered
   by the component itself, no separate .css file to import or lose.
   ───────────────────────────────────────────────────────────────────── */
const contactStyles = `
.contact-section {
  --accent: #00e5ff;
  --accent-soft: rgba(0, 229, 255, 0.35);
  --surface: #050505;
  position: relative;
  background: var(--surface);
  overflow: clip;
}

/* Ambient atmosphere + fade into footer */
.contact-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.contact-atmosphere::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1100px;
  height: 1100px;
  transform: translate(-50%, -30%);
  background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, rgba(0, 229, 255, 0) 60%);
}

.contact-fade-out {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: linear-gradient(to bottom, rgba(5, 5, 5, 0), var(--surface));
  pointer-events: none;
}

.contact-grain {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.contact-hairline-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent);
  pointer-events: none;
}

/* Mouse-follow ambient light for the whole contact stage */
.contact-stage {
  --mx: 50%;
  --my: 40%;
  position: relative;
}

.contact-stage::before {
  content: "";
  position: absolute;
  inset: -10% -10% -10% -10%;
  background: radial-gradient(520px circle at var(--mx) var(--my), rgba(0, 229, 255, 0.06), transparent 60%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}

.contact-stage.is-active::before {
  opacity: 1;
}

/* Glass prism / orb signature visual */
.contact-orb-wrap {
  position: relative;
  pointer-events: none;
}

.contact-orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 9999px;
  background:
    radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.35), transparent 45%),
    radial-gradient(circle at 65% 70%, rgba(0, 229, 255, 0.25), transparent 55%),
    linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(0, 229, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(2px);
  box-shadow:
    0 0 80px -10px rgba(0, 229, 255, 0.25),
    inset 0 0 60px rgba(255, 255, 255, 0.04);
  animation: orb-float 9s ease-in-out infinite;
}

.contact-prism {
  position: absolute;
  width: 190px;
  height: 190px;
  top: 40%;
  left: 15%;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.14), rgba(0, 229, 255, 0.08) 45%, transparent 75%);
  clip-path: polygon(30% 0%, 100% 15%, 80% 100%, 5% 85%);
  mix-blend-mode: screen;
  animation: prism-float 11s ease-in-out infinite reverse;
}

@keyframes orb-float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-18px) translateX(8px); }
}

@keyframes prism-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(14px) rotate(3deg); }
}

/* Glass surfaces shared by info card / form */
.glass-panel {
  position: relative;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.012));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  transition: border-color 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}

.glass-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 40%);
  pointer-events: none;
}

/* Subtle 3D tilt on the form container only, paused while focused */
.tilt-panel {
  --rx: 0deg;
  --ry: 0deg;
  transform: perspective(1400px) rotateX(var(--rx)) rotateY(var(--ry));
  will-change: transform;
}

.tilt-panel.is-focused {
  --rx: 0deg;
  --ry: 0deg;
}

/* Floating contact info items */
.info-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.info-link:hover,
.info-link:focus-visible {
  border-color: var(--accent-soft);
  background: rgba(0, 229, 255, 0.05);
  transform: translateY(-2px);
}

.info-link .info-icon {
  transition: transform 0.35s ease;
}

.info-link:hover .info-icon,
.info-link:focus-visible .info-icon {
  transform: translateX(2px);
}

/* Status dot */
.status-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: var(--accent);
}

.status-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: var(--accent);
  opacity: 0.35;
  animation: status-pulse 2.4s ease-out infinite;
}

@keyframes status-pulse {
  0% { transform: scale(1); opacity: 0.35; }
  100% { transform: scale(2.4); opacity: 0; }
}

/* Inputs */
.field-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.field-input:hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.field-input:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.12);
}

.field-label {
  transition: color 0.3s ease;
}

.field-group:focus-within .field-label {
  color: var(--accent);
}

/* Submit button */
.submit-btn {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 229, 255, 0.35);
  background: linear-gradient(180deg, rgba(0, 229, 255, 0.14), rgba(0, 229, 255, 0.02));
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  border-color: var(--accent);
  box-shadow: 0 0 28px -6px var(--accent-soft);
  transform: translateY(-1px);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.submit-btn .arrow {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.submit-btn:hover:not(:disabled) .arrow {
  transform: translateX(4px);
}

/* Copy button feedback */
.copy-btn {
  transition: color 0.3s ease, border-color 0.3s ease;
}

/* Scroll reveal */
.reveal-item {
  opacity: 0;
  transform: translateY(26px);
  filter: blur(6px);
  transition:
    opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Mobile: quiet the motion, keep everything visible */
@media (max-width: 768px) {
  .tilt-panel {
    transform: none !important;
  }
  .contact-stage::before {
    display: none;
  }
  .contact-orb,
  .contact-prism {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-item {
    transition: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
  .tilt-panel {
    transition: none;
    transform: none !important;
  }
  .contact-orb,
  .contact-prism {
    animation: none;
  }
  .status-dot::after {
    animation: none;
    display: none;
  }
}
`;

/* Inline icons — no external icon CDN dependency */
function MailIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
        </svg>
    );
}

function PhoneIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 5c0-1.1.9-2 2-2h2.28a1 1 0 01.98.8l.7 3.5a1 1 0 01-.5 1.08L6.6 9.53a11.5 11.5 0 007.87 7.87l1.15-1.86a1 1 0 011.08-.5l3.5.7a1 1 0 01.8.98V19a2 2 0 01-2 2h-1C10.7 21 3 13.3 3 4V5z" />
        </svg>
    );
}

function CopyIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="9" y="9" width="11" height="11" rx="2" strokeWidth="1.6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 15V5a2 2 0 012-2h10" />
        </svg>
    );
}

function CheckIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );
}

function ArrowIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={`arrow ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

export default function Contact() {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const formPanelRef = useRef(null);
    const rafRef = useRef(null);

    const [copied, setCopied] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | ready
    const [formValues, setFormValues] = useState({ name: "", email: "", subject: "", message: "" });
    const [isFormFocused, setIsFormFocused] = useState(false);

    /* Scroll reveal */
    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll(".reveal-item");
        if (!items || items.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    /* Mouse-follow ambient light across the whole stage (desktop only) */
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (prefersReducedMotion || isCoarsePointer) return;

        const handleMove = (e) => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const rect = stage.getBoundingClientRect();
                const px = ((e.clientX - rect.left) / rect.width) * 100;
                const py = ((e.clientY - rect.top) / rect.height) * 100;
                stage.style.setProperty("--mx", `${px}%`);
                stage.style.setProperty("--my", `${py}%`);
            });
        };

        const activate = () => stage.classList.add("is-active");
        const deactivate = () => stage.classList.remove("is-active");

        stage.addEventListener("mousemove", handleMove);
        stage.addEventListener("mouseenter", activate);
        stage.addEventListener("mouseleave", deactivate);
        return () => {
            stage.removeEventListener("mousemove", handleMove);
            stage.removeEventListener("mouseenter", activate);
            stage.removeEventListener("mouseleave", deactivate);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    /* Subtle 3D tilt on the form panel — paused while a field is focused */
    useEffect(() => {
        const panel = formPanelRef.current;
        if (!panel) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (prefersReducedMotion || isCoarsePointer) return;

        const handleMove = (e) => {
            if (isFormFocused) return;
            const rect = panel.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            panel.style.setProperty("--ry", `${(px - 0.5) * 3.5}deg`);
            panel.style.setProperty("--rx", `${(0.5 - py) * 2.5}deg`);
        };

        const reset = () => {
            panel.style.setProperty("--rx", "0deg");
            panel.style.setProperty("--ry", "0deg");
        };

        panel.addEventListener("mousemove", handleMove);
        panel.addEventListener("mouseleave", reset);
        return () => {
            panel.removeEventListener("mousemove", handleMove);
            panel.removeEventListener("mouseleave", reset);
        };
    }, [isFormFocused]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API unavailable — fail silently, the email is still
            // visible and selectable as plain text.
        }
    };

    const handleChange = (field) => (e) =>
        setFormValues((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        /* ── BACKEND INTEGRATION POINT ─────────────────────────────────────
           This form is currently frontend-only — nothing is sent anywhere.
           Wire up Formspree, EmailJS, or a custom API route here, e.g.:
    
           await fetch("https://formspree.io/f/xxxxxx", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(formValues),
           });
        */
        await new Promise((resolve) => setTimeout(resolve, 900));

        setStatus("ready");
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contact" ref={sectionRef} className="contact-section py-24 md:py-32 px-6">
            <style>{contactStyles}</style>

            <div className="contact-atmosphere" aria-hidden="true">
                <div className="contact-hairline-grid" />
                <div className="contact-grain" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <header className="mb-16 md:mb-20 max-w-2xl">
                    <div className="reveal-item flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#00E5FF] mb-6">
                        <span className="h-px w-8 bg-[#00E5FF]/60" />
                        05 — Contact
                    </div>
                    <h2 className="reveal-item text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5">
                        Let's build
                        <br />
                        something meaningful.
                    </h2>
                    <p className="reveal-item text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                        Have a project, internship opportunity, or technical collaboration in mind?
                        I'd be glad to hear from you.
                    </p>
                </header>

                <div ref={stageRef} className="contact-stage grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: floating contact info */}
                    <div className="reveal-item lg:col-span-5 relative">
                        <div className="contact-orb-wrap absolute inset-0 hidden lg:block" aria-hidden="true">
                            <div className="contact-orb" style={{ top: "-40px", right: "-30px" }} />
                            <div className="contact-prism" />
                        </div>

                        <div className="glass-panel relative p-8 md:p-10 flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#9CA3AF]">
                                <span className="status-dot" />
                                Available for Opportunities
                            </div>

                            <p className="text-sm text-[#9CA3AF] leading-relaxed">
                                Open to internships, freelance work, and full-stack collaboration.
                            </p>

                            <div className="flex flex-col gap-3 mt-2">
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="info-link rounded-xl px-5 py-4"
                                >
                                    <MailIcon className="info-icon w-5 h-5 text-[#00E5FF] shrink-0" />
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF]">Email</span>
                                        <span className="text-sm text-white truncate">{CONTACT.email}</span>
                                    </div>
                                </a>

                                <a href={CONTACT.phoneHref} className="info-link rounded-xl px-5 py-4">
                                    <PhoneIcon className="info-icon w-5 h-5 text-[#00E5FF] shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF]">Phone</span>
                                        <span className="text-sm text-white">{CONTACT.phone}</span>
                                    </div>
                                </a>

                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="copy-btn self-start inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#00E5FF] mt-1 px-1"
                                    aria-live="polite"
                                >
                                    {copied ? <CheckIcon className="w-4 h-4 text-[#00E5FF]" /> : <CopyIcon />}
                                    {copied ? "Copied!" : "Copy Email"}
                                </button>
                            </div>

                            {CONTACT.socials.length > 0 && (
                                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10 mt-2">
                                    {CONTACT.socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors"
                                        >
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: contact form */}
                    <div className="reveal-item lg:col-span-7">
                        <form
                            ref={formPanelRef}
                            onSubmit={handleSubmit}
                            onFocus={() => setIsFormFocused(true)}
                            onBlur={(e) => {
                                if (!e.currentTarget.contains(e.relatedTarget)) setIsFormFocused(false);
                            }}
                            className={`glass-panel tilt-panel ${isFormFocused ? "is-focused" : ""} p-8 md:p-10 flex flex-col gap-5`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="field-group">
                                    <label htmlFor="contact-name" className="field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        value={formValues.name}
                                        onChange={handleChange("name")}
                                        className="field-input px-4 py-3 text-sm"
                                    />
                                </div>

                                <div className="field-group">
                                    <label htmlFor="contact-email" className="field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formValues.email}
                                        onChange={handleChange("email")}
                                        className="field-input px-4 py-3 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="contact-subject" className="field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="Project / Opportunity"
                                    value={formValues.subject}
                                    onChange={handleChange("subject")}
                                    className="field-input px-4 py-3 text-sm"
                                />
                            </div>

                            <div className="field-group">
                                <label htmlFor="contact-message" className="field-label block text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows="5"
                                    required
                                    placeholder="Tell me about your idea..."
                                    value={formValues.message}
                                    onChange={handleChange("message")}
                                    className="field-input px-4 py-3 text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="submit-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white mt-2"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                {status === "idle" && <ArrowIcon />}
                            </button>

                            <p className="text-xs text-[#9CA3AF] leading-relaxed" role="status" aria-live="polite">
                                {status === "ready"
                                    ? "Message ready — this form isn't connected to a backend yet, so please reach out directly by email or phone for now."
                                    : "Prefer a direct line? Use the email or phone above — they connect instantly."}
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-fade-out" aria-hidden="true" />
        </section>
    );
}