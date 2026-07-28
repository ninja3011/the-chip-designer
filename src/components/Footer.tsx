export const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-panel)' }}>
      {/* Upper footer grid */}
      <div className="grid-columns-3" style={{ padding: '40px', gap: '32px' }}>
        <div>
          <h4 className="mono-text" style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent)' }}>
            // LOGBOOK_MISSION
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Documenting experiments in RTL design, CPU hardware architecture, and the intersection of machine learning with silicon design.
          </p>
        </div>
        
        <div>
          <h4 className="mono-text" style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent)' }}>
            // CHANNELS_ONLINE
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mono-text">
                &gt; Instagram Profile
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mono-text">
                &gt; YouTube Tutorials
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mono-text">
                &gt; GitHub Repositories
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="mono-text" style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent)' }}>
            // WORKSPACE_SPECIFICATIONS
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem', fontFamily: 'var(--mono)', color: 'var(--text-muted)' }}>
            <div>KNOWLEDGE: EXPANDING</div>
            <div>TINKER_MODE: ACTIVE</div>
            <div>VLSI_EXP: 3_YEARS</div>
            <div>DESK_TEMP: 23°C</div>
            <div>HDL: SYSTEMVERILOG</div>
            <div>FIRMWARE: OPEN_SOURCE</div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright & status line */}
      <div className="technical-header-meta" style={{ borderBottom: 'none', borderTop: '1px solid var(--border)' }}>
        <div>&copy; {new Date().getFullYear()} thechipdesigner.com. All rights reserved.</div>
        <div>DESIGNED_BY: THE_CHIP_DESIGNER // V_1.0</div>
      </div>
    </footer>
  );
};
