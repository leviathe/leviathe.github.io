import React from 'react';
import config from '../data/config.json';

const Experience: React.FC = () => {
  return (
    <section className="py-32 px-6 border-b border-[#222]" id="experience">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-1 hidden md:block">
          <span className="text-[9px] font-mono text-muted uppercase vertical-lr tracking-[0.5em] py-4 border-l border-[#222]">SUBSYSTEM_02 // LOG</span>
        </div>
        <div className="md:col-span-11 space-y-20">
          {config.experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-6 relative">
              <div className="md:col-span-3">
                <span className={`text-[10px] font-mono px-2 py-1 ${exp.active ? 'text-brand bg-brand/10' : 'text-muted'}`}>
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{exp.role}</h3>
                  <div className="h-px flex-grow bg-[#222]"></div>
                </div>
                <p className="text-muted text-sm max-w-2xl leading-relaxed mb-4">{exp.description}</p>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex gap-4">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-mono text-muted uppercase border border-[#333] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
