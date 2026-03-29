import React from 'react';
import config from '../data/config.json';

const Profile: React.FC = () => {
  return (
    <section className="py-32 px-6 border-y border-[#222] bg-surface relative" id="about">
      <div className="max-w-7xl mx-auto relative grid md:grid-cols-12 gap-12 items-start">
        <div className="absolute -top-32 right-0 p-4 opacity-10 pointer-events-none">
          <svg height="200" viewBox="0 0 100 100" width="200">
            <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M10,60 Q30,20 50,60 T90,60" fill="none" stroke="#ff5833" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="md:col-span-1 hidden md:block">
          <span className="text-[9px] font-mono text-muted uppercase vertical-lr tracking-[0.5em] py-4 border-l border-[#222]">SUBSYSTEM_01 // PROFILE</span>
        </div>
        <div className="md:col-span-6">
          <div className="module-header mb-8">
            <h2 className="text-4xl font-bold tracking-tight">
              {config.profile.headline.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== config.profile.headline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-12 max-w-lg font-medium">
            {config.profile.description}
          </p>
          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-px bg-[#222] border border-[#222]">
            <div className="bg-surface p-5">
              <span className="text-[8px] font-mono text-brand uppercase block mb-3 tracking-tighter">NODE_LOC</span>
              <span className="text-[11px] font-mono uppercase tracking-widest">{config.profile.specs.nodeLoc}</span>
            </div>
            <div className="bg-surface p-5">
              <span className="text-[8px] font-mono text-brand uppercase block mb-3 tracking-tighter">OS_STATUS</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand">{config.profile.specs.osStatus}</span>
            </div>
            <div className="bg-surface p-5">
              <span className="text-[8px] font-mono text-brand uppercase block mb-3 tracking-tighter">FIRMWARE_V</span>
              <span className="text-[11px] font-mono uppercase tracking-widest">{config.profile.specs.firmwareV}</span>
            </div>
            <div className="bg-surface p-5">
              <span className="text-[8px] font-mono text-brand uppercase block mb-3 tracking-tighter">CORE_LOAD</span>
              <span className="text-[11px] font-mono uppercase tracking-widest">{config.profile.specs.coreLoad}</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute -top-4 -left-4 text-[8px] font-mono text-muted uppercase">SCAN_AREA: 001</div>
          <div className="w-full aspect-[4/5] border border-[#222] bg-panel p-4 relative group">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
            <div className="relative w-full h-full">
              <div className="relative w-full h-full border border-[#333] overflow-hidden">
                <img alt="Profile" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-700" src={config.profile.imageUrl} />
                {/* AI Mask Overlay */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-10 transition-opacity">
                  <svg className="w-full h-full text-brand" viewBox="0 0 100 100">
                    <rect fill="none" height="60" stroke="currentColor" strokeWidth="0.2" width="60" x="20" y="20"></rect>
                    <line stroke="currentColor" strokeWidth="0.1" x1="0" x2="100" y1="50" y2="50"></line>
                    <line stroke="currentColor" strokeWidth="0.1" x1="50" x2="50" y1="0" y2="100"></line>
                  </svg>
                </div>
              </div>
              {/* Corner Details */}
              <div className="absolute -top-1 -left-1 knob scale-75"></div>
              <div className="absolute -top-1 -right-1 knob scale-75"></div>
              <div className="absolute -bottom-1 -left-1 knob scale-75"></div>
              <div className="absolute -bottom-1 -right-1 knob scale-75"></div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center text-[8px] font-mono text-muted">
            <span>RES: {config.profile.resolution}</span>
            <span className="text-brand">{config.profile.facialId}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
