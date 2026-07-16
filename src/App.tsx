import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SchematicGraphic } from './components/SchematicGraphic';
import { ProjectCard } from './components/ProjectCard';
import { Newsletter } from './components/Newsletter';
import './App.css';

function App() {
  const projectsData = [
    {
      id: 'PRJ-01',
      category: 'VLSI_DESIGN',
      title: 'RISC-V RV32I CPU Core',
      description: 'A single-cycle 32-bit RISC-V processor core designed in Verilog HDL. Implements the complete RV32I base integer instruction set, synthesized for a 130nm open-source PDK.',
      tags: ['Verilog', 'RISC-V', 'OpenLane', 'Sky130'],
      githubUrl: 'https://github.com',
      docUrl: '#read-specs'
    },
    {
      id: 'PRJ-02',
      category: 'PCB_DESIGN',
      title: 'High-Speed FPGA Development Board',
      description: 'A 6-layer impedance-controlled PCB designed in Altium. Features an Artix-7 FPGA, DDR3 memory interface, Gigabit Ethernet, and custom power delivery network (PDN) simulation.',
      tags: ['Altium', 'PCB Layout', 'FPGA', 'PDN-Simulation'],
      githubUrl: 'https://github.com',
      docUrl: '#read-specs'
    },
    {
      id: 'PRJ-03',
      category: 'LOGIC_DESIGN',
      title: 'Transistor-Level 8-Bit ALU',
      description: 'A physical design of an 8-bit Arithmetic Logic Unit using CMOS technology. Validated cell layouts, simulated delays using SPICE models, and performed LVS (Layout vs Schematic) checks.',
      tags: ['SPICE', 'CMOS', 'VLSI Physical Design', 'LVS'],
      githubUrl: 'https://github.com',
      docUrl: '#read-specs'
    }
  ];

  const articlesData = [
    {
      title: 'How to Crack a Physical Design Engineer Interview',
      focus: 'CAREER_ADVICE',
      desc: 'An in-depth guide on essential VLSI interview questions, layout principles, timing closure, and semiconductor fundamentals.',
      link: '#read-article'
    },
    {
      title: 'Verilog Best Practices for Synthesis and Verification',
      focus: 'TUTORIALS',
      desc: 'Avoiding latch generation, implementing clean synchronous resets, and writing testbenches that cover corner cases.',
      link: '#read-article'
    },
    {
      title: 'The Road to Sub-2nm: GAA-FET and High-NA EUV Lithography',
      focus: 'NEWS_ANALYSIS',
      desc: 'A technical analysis of the architectural shifts in transitors as TSMC, Intel, and Samsung push beyond FinFET technology.',
      link: '#read-article'
    }
  ];

  return (
    <>
      {/* 1. Technical Header */}
      <Header />

      {/* 2. Main technical container */}
      <main className="technical-container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* HERO SECTION */}
        <section id="about" className="grid-columns-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px' }}>
              // INIT_SYSTEM_DISPLAY
            </div>
            <h1 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '20px', fontWeight: 700 }}>
              Engineering the Future of <span style={{ color: 'var(--accent)' }}>Silicon Design</span>.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Welcome. I am **The Chip Designer**, a hardware systems and VLSI engineer sharing high-impact educational content. Here you will find low-level circuit design tutorials, high-speed PCB layouts, Verilog/VHDL source code, and advice for navigating a career in the semiconductor industry.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-technical" id="hero-btn-instagram">
                View Instagram Profile
              </a>
              <a href="#projects" className="btn-technical-secondary" id="hero-btn-projects">
                Explore Projects
              </a>
            </div>
          </div>
          <div>
            <SchematicGraphic />
          </div>
        </section>

        <div className="technical-divider">METADATA_BOUNDS // PROJECT_PORTFOLIO</div>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div style={{ marginBottom: '32px' }}>
            <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              // SCHEMATICS_AND_SOURCE_CODE
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Active Engineering Projects</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Browse functional designs, HDL code bases, and circuit simulations. All files are open-source.
            </p>
          </div>
          
          <div className="grid-columns-3">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                docUrl={project.docUrl}
              />
            ))}
          </div>
        </section>

        <div className="technical-divider">METADATA_BOUNDS // MEDIA_&_RESOURCES</div>

        {/* MEDIA & CAREER SECTION */}
        <section id="media" className="grid-columns-2">
          {/* Column 1: Video Embed or Instagram Content Showcase */}
          <div className="blueprint-border" style={{ padding: '24px', backgroundColor: 'var(--bg-panel)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>
              // VIDEO_STREAM_EMBED
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Latest Tutorial Stream</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Watch a quick rundown of semiconductor logic gate design and transistor physical layouts. New tutorials uploaded weekly.
            </p>
            
            {/* Aspect ratio container for simulated video */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: '#000' }}>
              <iframe
                id="youtube-player"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Semiconductor Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex-between">
              <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>STREAM_SRC: YOUTUBE_API</span>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                &gt; GO_TO_CHANNEL
              </a>
            </div>
          </div>

          {/* Column 2: Career Advice & Tech News Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
              // ARTICLE_REGISTRY
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Career & Chip News</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {articlesData.map((article, idx) => (
                <div 
                  key={idx} 
                  className="blueprint-border" 
                  style={{ padding: '16px', backgroundColor: 'var(--bg-panel)', display: 'flex', flexDirection: 'column', gap: '6px' }}
                >
                  <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    TYPE: {article.focus}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{article.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{article.desc}</p>
                  <a 
                    href={article.link} 
                    className="mono-text" 
                    style={{ fontSize: '0.75rem', marginTop: '4px', fontWeight: 600, display: 'inline-block' }}
                  >
                    &gt; READ_SPECIFICATION_SHEET
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="technical-divider">METADATA_BOUNDS // NEWSLETTER_PORTAL</div>

        {/* NEWSLETTER SIGNUP */}
        <Newsletter />

      </main>

      {/* 3. Technical Footer */}
      <Footer />
    </>
  );
}

export default App;
