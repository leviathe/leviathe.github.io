import React from 'react';
import config from '../data/config.json';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" id="hero">
      {/* Schematic Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
          <path className="schematic-line" d="M0,200 L1000,200 M200,0 L200,1000 M800,0 L800,1000 M0,800 L1000,800" fill="none" strokeWidth="1"></path>
          <circle className="schematic-line" cx="500" cy="500" fill="none" r="300" strokeWidth="1"></circle>
          <circle cx="500" cy="500" fill="#ff5833" r="5"></circle>
          <text fill="white" fontFamily="monospace" fontSize="8" x="210" y="190">{config.hero.coordRef}</text>
          <text fill="white" fontFamily="monospace" fontSize="8" x="810" y="790">{config.hero.sectorRadar}</text>
        </svg>
      </div>
      <div className="text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#333] mb-8">
          <span className="w-1.5 h-1.5 bg-brand animate-pulse"></span>
          <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase">{config.hero.systemLoadedText}</span>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none mb-8 select-none">
          {config.hero.titleLine1}<br /><span className="text-brand">{config.hero.titleLine2}</span>
        </h1>
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] md:text-xs font-mono text-muted uppercase tracking-[0.4em] max-w-lg leading-relaxed">
            {config.hero.subtitle1}<br />
            <span className="text-white">{config.hero.subtitle2}</span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <span className="text-[9px] font-mono text-brand/50 uppercase tracking-widest">NAVIGATE_DOWN</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
