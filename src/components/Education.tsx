import React from 'react';
import config from '../data/config.json';

const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-accent text-black relative overflow-hidden" id="formation">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg height="100%" width="100%">
          <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
            <circle cx="20" cy="20" fill="black" r="1"></circle>
          </pattern>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 relative">
        <div className="md:col-span-1 hidden md:block">
          <span className="text-[9px] font-mono text-muted uppercase vertical-lr tracking-[0.5em] py-4 border-l border-black/20">SUBSYSTEM_04 // ACADEMIA</span>
        </div>
        <div className="md:col-span-11">
          <div className="grid md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {config.education.map((edu, index) => (
              <div key={index} className="bg-white p-12 relative group">
                <div className="absolute top-4 right-4 knob scale-50 opacity-20"></div>
                <span className="text-[8px] font-mono text-muted uppercase block mb-6 tracking-widest">{edu.certLevel}</span>
                <h3 className="text-2xl font-bold mb-3 tracking-tighter uppercase">{edu.degree}</h3>
                <p className="font-mono text-[10px] uppercase text-muted mb-8 tracking-widest">{edu.institution}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${edu.highlightColor}`}></div>
                  <div className="text-[9px] font-mono font-bold uppercase tracking-widest">{edu.highlight}</div>
                </div>
                <div className="absolute bottom-4 right-4 text-[8px] font-mono text-black/20">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
