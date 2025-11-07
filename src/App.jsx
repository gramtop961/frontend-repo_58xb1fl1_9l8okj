import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Contact from './components/Contact';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-black font-inter">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Downloads />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} NovaDroid • Built with love for Android power users
      </footer>
    </div>
  );
}

export default App;
