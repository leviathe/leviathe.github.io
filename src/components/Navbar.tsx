import React, { useState } from 'react';
import config from '../data/config.json';

const Navbar: React.FC = () => {
  const [powerOn, setPowerOn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-brand"></div>
            <div className="w-2 h-2 bg-[#333]"></div>
            <div className="w-2 h-2 bg-[#333]"></div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">{config.navbar.unit}</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[9px] font-mono uppercase tracking-[0.25em] text-muted">
          {config.navbar.menu.map(item => (
            <a key={item.number} className="hover:text-brand transition-colors flex items-center gap-2" href={item.href}>
              <span className="text-brand/50">{item.number}</span> {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div 
             className="toggle-switch" 
             style={{ justifyContent: powerOn ? 'flex-end' : 'flex-start' }}
             onClick={() => setPowerOn(!powerOn)}
          ></div>
          <span className="text-[9px] font-mono text-muted uppercase">PWR</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
