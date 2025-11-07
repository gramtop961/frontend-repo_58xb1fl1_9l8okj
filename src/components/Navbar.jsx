import React from 'react';
import { Rocket, Download, Shield, Mail } from 'lucide-react';

const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleScroll('top')}
            className="group inline-flex items-center gap-2 text-white"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-300 ring-1 ring-cyan-400/20">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold tracking-wide">NovaDroid</span>
          </button>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <button onClick={() => handleScroll('features')} className="inline-flex items-center gap-1 hover:text-white">
              <Shield className="h-4 w-4" /> Features
            </button>
            <button onClick={() => handleScroll('downloads')} className="inline-flex items-center gap-1 hover:text-white">
              <Download className="h-4 w-4" /> Downloads
            </button>
            <button onClick={() => handleScroll('contact')} className="inline-flex items-center gap-1 hover:text-white">
              <Mail className="h-4 w-4" /> Contact
            </button>
          </nav>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </header>
  );
};

export default Navbar;
