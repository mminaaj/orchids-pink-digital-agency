"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FFF5F7]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E91E8C] to-[#FF6FB5] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Bloom Studio
            </span>
          </Link>
          <a
            href="https://wa.me/381600319696"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-[#E91E8C] to-[#FF6FB5] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-pink-300/40 transition-all duration-300"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#FFE4EE] rounded-full text-[#E91E8C] text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Portfolio
            </h1>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Coming soon! We&apos;re curating our best work to showcase here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 text-center border border-pink-200"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFE4EE] to-[#FFF5F7] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#E91E8C]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Portfolio Under Construction
            </h2>
            <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
              We&apos;re working on putting together our best projects. Check back soon to see our creative work!
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#E91E8C] to-[#FF6FB5] text-white rounded-full font-medium hover:shadow-xl hover:shadow-pink-300/40 transition-all duration-300"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-10 border-t border-pink-200 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E91E8C] to-[#FF6FB5] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Bloom Studio
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-pink-300" />
            <span className="text-sm text-[#6B6B6B]">
              bloom.digitalstudi0.@gmail.com
            </span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            © 2024 Bloom Studio. Crafted with love.
          </p>
        </div>
      </footer>
    </div>
  );
}
