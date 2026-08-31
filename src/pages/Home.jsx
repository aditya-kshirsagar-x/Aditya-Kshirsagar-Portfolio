import React, { useState, useEffect, useRef } from 'react';
import HomeImage from '../assets/Home.jpeg';

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);
    const portraitRef = useRef(null);
    const containerRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (window.innerWidth < 768) return;

            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (!rect) return;

                const x = (e.clientX - rect.left - rect.width / 2) * 0.02;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.02;

                setMousePosition({ x, y });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between"
            style={{
                background: 'linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #051015 100%)',
            }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse 120% 80% at 50% 40%, rgba(0, 229, 255, 0.08), transparent 60%)',
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(30, 144, 255, 0.05), transparent 50%)',
                    }}
                />

                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundSize: '400px 400px',
                    }}
                />

                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-500/6 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-indigo-500/4 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-12">
                <div
                    className={`mb-6 md:mb-8 transform transition-all duration-900 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div
                        className="backdrop-blur-xl bg-gradient-to-r from-white/8 to-white/3 border border-white/15 hover:border-white/25 rounded-full px-5 py-2.5 text-center cursor-default transition-all duration-500 hover:from-white/12 hover:to-white/6"
                        style={{
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2)',
                        }}
                    >
                        <span className="text-xs md:text-sm text-white/70 tracking-widest uppercase font-light">
                            Available for Work
                        </span>
                    </div>
                </div>

                <div
                    className={`text-center mb-8 md:mb-10 transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h1
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight uppercase"
                        style={{
                            letterSpacing: '0.04em',
                            textShadow: '0 2px 20px rgba(255, 255, 255, 0.15)',
                        }}
                    >
                        ADITYA DASHARATH KSHIRSAGAR
                    </h1>
                    <div className="mx-auto w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-3 opacity-80" />
                </div>

                <div
                    className={`mb-10 md:mb-12 transform transition-all duration-1100 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                >
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-6 md:px-8 py-3 rounded-lg">
                        <p className="text-sm md:text-base text-white/80 font-light tracking-wide">
                            MERN Stack Developer
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12 items-center justify-center mb-10 md:mb-12">
                    <div
                        className={`flex flex-col gap-6 transform transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        <div
                            className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden"
                            style={{
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)',
                                transform: `translateY(${mousePosition.y * 0.8}px) translateX(${mousePosition.x * 0.4}px)`,
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0" />

                            <div className="relative z-10">
                                <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">Tech Stack</p>
                                <p className="text-sm md:text-base text-white/95 font-medium leading-relaxed">React • Node.js • Express • MongoDB</p>
                                <p className="text-xs text-white/40 mt-2">MERN Full Stack</p>
                            </div>
                        </div>

                        <div
                            className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden"
                            style={{
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)',
                                transform: `translateY(${mousePosition.y * 0.6}px) translateX(${mousePosition.x * 0.35}px)`,
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0" />

                            <div className="relative z-10">
                                <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">Experience</p>
                                <p className="text-sm md:text-base text-white/95 font-medium">Mountreach Solution Pvt. Ltd.</p>
                                <p className="text-xs text-white/60 mt-2">MERN Stack Developer</p>
                                <div className="mt-3 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-cyan-400/60 rounded-full"></span>
                                    <p className="text-xs text-white/50">Intern of the Month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex justify-center order-first lg:order-none transform transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                        onMouseEnter={() => setIsHoveringPortrait(true)}
                        onMouseLeave={() => setIsHoveringPortrait(false)}
                    >
                        <div
                            ref={portraitRef}
                            className="relative group"
                            style={{
                                perspective: '1200px',
                                transform: `perspective(1200px) rotateX(${mousePosition.y * 8}deg) rotateY(${-mousePosition.x * 8}deg) ${isHoveringPortrait ? 'scale(1.02)' : 'scale(1)'
                                    }`,
                                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                                willChange: 'transform',
                            }}
                        >
                            <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96">
                                <div
                                    className="relative w-full h-full bg-[#0a0a0a] rounded-3xl border border-white/20 hover:border-cyan-400/50 transition-colors duration-500 overflow-hidden"
                                    style={{
                                        boxShadow: '0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)',
                                    }}
                                >
                                    <img
                                        src={HomeImage}
                                        alt="Aditya Kshirsagar - MERN Stack Developer"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute top-3 left-3 w-2 h-3 border-l-2 border-t-2 border-white/30 rounded-tl group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none" />
                                    <div className="absolute top-3 right-3 w-2 h-3 border-r-2 border-t-2 border-white/30 rounded-tr group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none" />
                                    <div className="absolute bottom-3 left-3 w-2 h-3 border-l-2 border-b-2 border-white/30 rounded-bl group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none" />
                                    <div className="absolute bottom-3 right-3 w-2 h-3 border-r-2 border-b-2 border-white/30 rounded-br group-hover:border-cyan-400/70 transition-colors duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex flex-col gap-6 transform transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                            }`}
                    >
                        <div
                            className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden"
                            style={{
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)',
                                transform: `translateY(${mousePosition.y * 0.8}px) translateX(${-mousePosition.x * 0.4}px)`,
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0" />

                            <div className="relative z-10">
                                <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">Recognition</p>
                                <p className="text-sm md:text-base text-white/95 font-medium">Intern of the Month</p>
                                <p className="text-xs text-white/60 mt-2">Mountreach Solution Pvt. Ltd.</p>
                                <div className="mt-3 flex gap-2">
                                    <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-400/40 rounded-full text-xs text-cyan-300">Excellence</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/3 border border-white/15 hover:border-cyan-400/40 rounded-2xl p-6 md:p-7 transition-all duration-500 overflow-hidden"
                            style={{
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)',
                                transform: `translateY(${mousePosition.y * 0.6}px) translateX(${-mousePosition.x * 0.35}px)`,
                            }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0" />

                            <div className="relative z-10">
                                <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">Focus Areas</p>
                                <p className="text-sm md:text-base text-white/95 font-medium">Full-Stack Development</p>
                                <p className="text-xs text-white/60 mt-2">Smart Web Applications & UI/UX</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`text-center mb-8 max-w-2xl px-4 transform transition-all duration-1100 delay-800 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                        I craft modern, scalable web experiences using the MERN stack. Passionate about performance, user experience, and clean, maintainable code architecture.
                    </p>
                </div>

                <div
                    className={`mt-auto pt-4 transform transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-white/50 tracking-widest uppercase font-light">Scroll to explore</p>
                        <div className="flex flex-col gap-1 items-center">
                            <div className="w-px h-6 bg-gradient-to-b from-white/50 to-transparent" />
                            <div className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        a:focus-visible {
          outline: 2px solid rgba(0, 229, 255, 0.9);
          outline-offset: 3px;
          border-radius: 0.75rem;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background-color: rgba(0, 229, 255, 0.2);
          color: white;
        }
      `}</style>
        </section>
    );
}