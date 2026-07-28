export const SchematicGraphic = () => {
  return (
    <div className="blueprint-border" style={{ padding: '20px', backgroundColor: 'var(--bg-panel)', borderRadius: '4px', overflow: 'hidden' }}>
      <svg 
        viewBox="0 0 800 360" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* Style tag for micro-animations */}
        <style>
          {`
            @keyframes pulseTrace {
              0% { stroke-dashoffset: 24; opacity: 0.4; }
              50% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0.4; }
            }
            @keyframes blinkDot {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
            .schematic-trace {
              stroke: var(--accent);
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .schematic-trace-animated {
              stroke: var(--accent-secondary);
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 8 16;
              animation: pulseTrace 4s linear infinite;
            }
            .schematic-text {
              font-family: var(--mono);
              font-size: 10px;
              fill: var(--text-secondary);
            }
            .schematic-text-accent {
              font-family: var(--mono);
              font-size: 11px;
              font-weight: bold;
              fill: var(--accent);
            }
            .schematic-node {
              fill: var(--bg-panel);
              stroke: var(--border);
              stroke-width: 1.5;
            }
            .schematic-pin {
              fill: var(--border);
            }
            .led-dot {
              animation: blinkDot 2s ease-in-out infinite;
            }
          `}
        </style>

        {/* Blueprint background grid inside the SVG */}
        <defs>
          <pattern id="svg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--grid-line)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svg-grid)" />

        {/* Outer frame borders */}
        <rect x="5" y="5" width="790" height="350" stroke="var(--border-muted)" strokeWidth="1" strokeDasharray="5 5" />

        {/* LEFT COMPONENT: RISC-V CORE DIE */}
        <g transform="translate(40, 40)">
          <rect x="0" y="0" width="220" height="260" rx="4" className="schematic-node" stroke="var(--accent)" strokeWidth="2" />
          <rect x="10" y="10" width="200" height="240" fill="none" stroke="var(--border-muted)" strokeWidth="1" />
          
          {/* Pins around the die */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`pin-left-${i}`}>
              <rect x="-8" y={25 + i * 20} width="8" height="6" className="schematic-pin" />
              <rect x="220" y={25 + i * 20} width="8" height="6" className="schematic-pin" />
            </g>
          ))}
          
          {/* Internal Die Blocks */}
          <rect x="20" y="20" width="80" height="70" rx="2" className="schematic-node" />
          <text x="30" y="50" className="schematic-text-accent">ALU_BLOCK</text>
          <text x="30" y="65" className="schematic-text">32-BIT PIPELINE</text>

          <rect x="110" y="20" width="90" height="70" rx="2" className="schematic-node" />
          <text x="120" y="50" className="schematic-text-accent">REG_FILE</text>
          <text x="120" y="65" className="schematic-text">32x X-REGISTERS</text>

          <rect x="20" y="105" width="180" height="135" rx="2" className="schematic-node" />
          <text x="30" y="130" className="schematic-text-accent">INSTRUCTION_CACHE</text>
          {/* Schematic visual circuit decoration */}
          <line x1="30" y1="150" x2="190" y2="150" stroke="var(--border-muted)" strokeWidth="1" />
          <line x1="30" y1="170" x2="190" y2="170" stroke="var(--border-muted)" strokeWidth="1" />
          <line x1="30" y1="190" x2="190" y2="190" stroke="var(--border-muted)" strokeWidth="1" />
          <circle cx="50" cy="150" r="3" fill="var(--accent)" />
          <circle cx="90" cy="170" r="3" fill="var(--accent-secondary)" />
          <circle cx="150" cy="190" r="3" fill="var(--accent)" className="led-dot" />
          <text x="30" y="225" className="schematic-text">64 KB DIRECT-MAPPED</text>
        </g>

        {/* MIDDLE BUS SYSTEM & INTERCONNECTS */}
        {/* Horizontal main bus */}
        <line x1="260" y1="100" x2="520" y2="100" className="schematic-trace" />
        <line x1="260" y1="105" x2="520" y2="105" className="schematic-trace-animated" />
        <line x1="260" y1="200" x2="520" y2="200" className="schematic-trace" />
        
        {/* T-junctions */}
        <circle cx="340" cy="100" r="4" fill="var(--accent)" />
        <line x1="340" y1="100" x2="340" y2="140" className="schematic-trace" />
        
        <circle cx="440" cy="200" r="4" fill="var(--accent-secondary)" />
        <line x1="440" y1="200" x2="440" y2="170" className="schematic-trace" />

        {/* Oscilloscope Graphic */}
        <g transform="translate(300, 120)">
          <rect x="0" y="0" width="140" height="60" rx="2" className="schematic-node" />
          <path d="M 10 30 Q 30 10, 50 30 T 90 30 T 130 30" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <text x="10" y="15" className="schematic-text" style={{ fontSize: '8px' }}>CLK_FREQ: 100MHz</text>
        </g>

        {/* RIGHT COMPONENT: SRAM MEMORY ARRAY */}
        <g transform="translate(540, 40)">
          <rect x="0" y="0" width="220" height="260" rx="4" className="schematic-node" stroke="var(--accent-secondary)" strokeWidth="2" />
          <rect x="10" y="10" width="200" height="240" fill="none" stroke="var(--border-muted)" strokeWidth="1" />
          
          {/* Pins */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`pin-right-die-${i}`}>
              <rect x="-8" y={25 + i * 20} width="8" height="6" className="schematic-pin" />
              <rect x="220" y={25 + i * 20} width="8" height="6" className="schematic-pin" />
            </g>
          ))}
          
          {/* SRAM Grid structure */}
          <text x="20" y="30" className="schematic-text-accent">SRAM_ARRAY (512KB)</text>
          
          <g transform="translate(20, 50)">
            {Array.from({ length: 5 }).map((_, r) => 
              Array.from({ length: 6 }).map((_, c) => (
                <rect 
                  key={`cell-${r}-${c}`} 
                  x={c * 30} 
                  y={r * 30} 
                  width="22" 
                  height="22" 
                  rx="1" 
                  fill="var(--bg)" 
                  stroke="var(--border)" 
                  strokeWidth="1" 
                  className={r === 2 && c === 3 ? "led-dot" : ""}
                  style={r === 2 && c === 3 ? { fill: 'var(--accent-light)', stroke: 'var(--accent)' } : {}}
                />
              ))
            )}
          </g>
          
          <text x="20" y="225" className="schematic-text">DUAL-PORT MEMORY ACCESS</text>
          <text x="20" y="240" className="schematic-text">ADDR: 0x0000_0000 - 0x0007_FFFF</text>
        </g>

        {/* Text descriptions around the blueprint */}
        <text x="40" y="330" className="schematic-text">FIG 1.0: SOC BLOCK SCHEMATIC DIAGRAM</text>
        <text x="580" y="330" className="schematic-text" style={{ textAnchor: 'end' }}>SYS_VOLTAGE: 0.85V NOMINAL</text>
        <text x="760" y="330" className="schematic-text-accent" style={{ textAnchor: 'end' }}>[ PAGE 01 OF 04 ]</text>
      </svg>
    </div>
  );
};
