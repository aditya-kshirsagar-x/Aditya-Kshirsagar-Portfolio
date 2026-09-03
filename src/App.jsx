import { useState } from 'react';

import UplinkLoader from './components/UplinkLoader';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinished = () => {
    setLoading(false);
  };

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-x-clip
        bg-[#050505]
        text-white
        antialiased
      "
      style={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* =====================================================
          PREMIUM GLOBAL BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Main Cyan Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-300px]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.035]
            blur-[140px]
          "
        />

        {/* Right Blue Glow */}
        <div
          className="
            absolute
            right-[-220px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[150px]
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            bottom-[-260px]
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.018]
            blur-[150px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.30)_100%)]
          "
        />
      </div>

      {/* =====================================================
          PRELOADER
      ====================================================== */}

      {loading && (
        <div className="fixed inset-0 z-[9999]">
          <UplinkLoader
            onFinished={handleLoaderFinished}
          />
        </div>
      )}

      {/* =====================================================
          MAIN WEBSITE
      ====================================================== */}

      <div className="relative z-10 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Home */}
          <Home />

          {/* About */}
          <About />

          {/* Projects */}
          <Projects />

          {/* Skills */}
          <Skills />

          {/* Contact */}
          <Contact />
        </main>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <footer
          className="
            border-t
            border-white/[0.06]
            bg-black/20
            px-6
            py-10
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            {/* Footer Brand */}
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  tracking-[0.18em]
                  text-white/85
                "
              >
                ADITYA KSHIRSAGAR
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  text-white/35
                "
              >
                MERN Stack Developer · Computer Engineering
              </p>
            </div>

            {/* Footer Copyright */}
            <p
              className="
                text-xs
                text-white/30
              "
            >
              © {new Date().getFullYear()} Aditya Kshirsagar.
              All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}