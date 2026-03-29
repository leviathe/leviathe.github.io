import React from 'react';
import config from '../data/config.json';

const Skills: React.FC = () => {
  return (
    <section className="py-32 px-6 border-b border-[#222] bg-surface relative" id="skills">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-1 hidden md:block">
          <span className="text-[9px] font-mono text-muted uppercase vertical-lr tracking-[0.5em] py-4 border-l border-[#222]">SUBSYSTEM_03 // MATRIX</span>
        </div>
        <div className="md:col-span-11">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222] border border-[#222]">
            {config.skills.map(category => (
              <div key={category.id} className="bg-surface p-10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-brand"></div>
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">{category.title}</h3>
                  </div>
                  <span className="text-[8px] font-mono text-muted">{category.id}</span>
                </div>
                <ul className="space-y-6 font-mono text-[10px] text-muted uppercase tracking-wider">
                  {category.items.map(skill => (
                    <li key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>{skill.name}</span>
                        <span className={(skill as any).textWhite ? 'text-white' : 'text-brand'}>{skill.value}</span>
                      </div>
                      <div className="data-bar">
                        <div className="data-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
