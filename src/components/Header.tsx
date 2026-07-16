import React from 'react';

export const Header: React.FC = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return (
    <header className="blueprint-corners" style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Top technical metadata line */}
      <div className="technical-header-meta">
        <div>SYS_LOC: SILICON_VALLEY // COMPILER: VITE_RXT</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>DATE: {currentDate}</span>
          <span>STATUS: <span style={{ color: 'var(--accent)', fontWeight: 600 }}>ONLINE</span></span>
        </div>
      </div>
      
      {/* Main header block */}
      <div className="flex-between" style={{ padding: '20px 40px', flexWrap: 'wrap', gap: '20px' }}>
        <a href="/" className="mono-text" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
          &#91;&nbsp;<span style={{ color: 'var(--accent)' }}>THE_CHIP_DESIGNER</span>&nbsp;&#93;
        </a>
        
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#about" className="mono-text" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            [01] About
          </a>
          <a href="#projects" className="mono-text" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            [02] Projects
          </a>
          <a href="#media" className="mono-text" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            [03] Media
          </a>
          <a href="#newsletter" className="mono-text" style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            [04] Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
};
