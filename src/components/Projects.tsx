import React from 'react';
import config from '../data/config.json';

const getImageUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 border-t border-[#222]" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-20 border-b border-[#222] pb-6">
          <div className="flex items-center gap-6">
            <h2 className="text-[10px] font-mono tracking-[0.4em] text-muted uppercase font-bold">SUBSYSTEM_05 // DEPLOYMENTS</h2>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-brand"></div>
              <div className="w-1 h-1 bg-brand"></div>
              <div className="w-1 h-1 bg-brand"></div>
            </div>
          </div>
          <span className="text-[9px] font-mono text-brand uppercase tracking-widest animate-pulse">READING_STORAGE_DISK_B</span>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {config.projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="aspect-video bg-[#111] border border-[#222] mb-8 overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-10"></div>
                <img alt={`Project ${index + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src={getImageUrl(project.image)} />
                <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 border border-[#333] flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand"></div>
                  <span className="text-[8px] font-mono">ID: {project.id}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 border border-[#333]">
                  <span className="text-[8px] font-mono uppercase">VER: {project.version}</span>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tighter uppercase">{project.title}</h3>
                  <p className="text-muted text-xs mb-6 max-w-sm leading-relaxed">{project.description}</p>
                  <div className="flex gap-6">
                    <a className="text-[9px] font-mono text-brand border-b border-brand pb-0.5 hover:text-white hover:border-white transition-colors" href={project.link}>{project.linkText}</a>
                    <span className="text-[9px] font-mono text-muted uppercase tracking-tighter">TECH: {project.tech}</span>
                  </div>
                </div>
                <span className="text-[12px] font-mono text-muted opacity-20">{project.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
