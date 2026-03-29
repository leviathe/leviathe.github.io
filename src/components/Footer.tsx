import React from 'react';
import config from '../data/config.json';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-[#222] bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-end">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-muted uppercase mb-2">OS_HEARTBEAT</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-tighter font-bold">SYSTEM_ONLINE</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-muted uppercase mb-2">LINK_PROTOCOL</span>
                <span className="text-[10px] font-mono uppercase tracking-tighter font-bold">V.SSL_ACTIVE</span>
              </div>
            </div>
            <div className="flex gap-6">
              {config.footer.links.map((link, idx) => (
                <a key={idx} className="text-[9px] font-mono text-muted hover:text-brand uppercase tracking-widest transition-colors" href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-8 h-1 bg-[#222]"></div>
              <div className="w-8 h-1 bg-[#222]"></div>
              <div className="w-8 h-1 bg-brand"></div>
            </div>
            <p className="text-[9px] font-mono text-muted uppercase tracking-[0.2em] text-center">
              Designed &amp; Engineered by<br />
              <span className="text-white">{config.footer.designedBy}</span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[8px] font-mono text-muted">{config.footer.copyright}</span>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-brand">ENCRYPTION: {config.footer.encryption}</span>
              <div className="w-2 h-2 border border-brand/50"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
