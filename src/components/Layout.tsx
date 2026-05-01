
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Hammer, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-blue-500/20 selection:text-blue-300">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 glass shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white transition-transform group-hover:scale-110">
                  T
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  ToolMarket
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:items-center md:gap-8">
              <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-white">Home</Link>
              <a href="#categories" className="text-sm font-medium text-zinc-400 hover:text-white">Explore</a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-zinc-400 outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-white/5 bg-zinc-900 md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                <Link to="/" className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <a href="#categories" className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>All Tools</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Header Ad Slot */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <AdSlot label="Advertisement - Leaderboard (728x90)" />
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-[10px] font-bold text-white">T</div>
                <span className="text-xl font-bold text-white">ToolMarket</span>
              </div>
              <p className="max-w-md text-sm text-zinc-500 leading-relaxed">
                The world's most comprehensive collection of free AI text generators. 
                Built for creators, by creators. No login, no payments, just tools that work.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Popular Tools</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link to="/instagram-caption-generator" className="hover:text-white">IG Captions</Link></li>
                <li><Link to="/hashtag-generator" className="hover:text-white">Hashtags</Link></li>
                <li><Link to="/password-generator" className="hover:text-white">Pass Generator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Links</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-8 text-center text-[11px] text-zinc-500">
            &copy; 2026 ToolMarket. All rights reserved. Free SEO-optimized text generation.
          </div>
        </div>
      </footer>
    </div>
  );
};

export const AdSlot: React.FC<{ label: string, className?: string }> = ({ label, className }) => (
  <div className={`flex items-center justify-center rounded-xl border border-dashed border-zinc-800 ad-slot-bg py-8 text-center ${className}`}>
    <div className="space-y-1">
      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Ad Space</span>
      <p className="text-[10px] uppercase tracking-widest text-zinc-700">{label}</p>
    </div>
  </div>
);
