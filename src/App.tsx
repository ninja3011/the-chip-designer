import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SchematicGraphic } from './components/SchematicGraphic';
import { ProjectCard } from './components/ProjectCard';
import { Newsletter } from './components/Newsletter';
import { projectLogs, studyNotes } from './content/workbench';
import './App.css';

function App() {
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
              Tinkering with <span style={{ color: 'var(--accent)' }}>Silicon Design</span>.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Hey! I am **The Chip Designer**. I work in the industry doing RTL design and computer architecture, but I still approach hardware with the curiosity of a student. This site is my digital workbench—a logbook where I document my learning, log my SystemVerilog/RTL projects, and share my understanding of how AI is shaping the future of chip design.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-technical" id="hero-btn-instagram">
                View Instagram Profile
              </a>
              <a href="#projects" className="btn-technical-secondary" id="hero-btn-projects">
                Explore Workbench Logs
              </a>
            </div>
          </div>
          <div>
            <SchematicGraphic />
          </div>
        </section>

        <div className="technical-divider">METADATA_BOUNDS // WORKBENCH_LOGS</div>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div style={{ marginBottom: '32px' }}>
            <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              // SCHEMATICS_AND_SOURCE_CODE
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Active Workbench Logs</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              My ongoing hardware projects, CPU designs, and AI EDA experiments. Everything is open-source and in-progress.
            </p>
          </div>
          
          <div className="grid-columns-3">
            {projectLogs.map((project) => (
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

        <div className="technical-divider">METADATA_BOUNDS // STUDY_NOTES_&_RESOURCES</div>

        {/* MEDIA & STUDY SECTION */}
        <section id="media" className="grid-columns-2">
          {/* Column 1: Video Embed or Instagram Content Showcase */}
          <div className="blueprint-border" style={{ padding: '24px', backgroundColor: 'var(--bg-panel)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>
              // VIDEO_STREAM_EMBED
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Latest Tutorial Stream</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Sharing my understanding of logic design, pipelining, and computer architecture concepts. New streams added as I study and build.
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Lab Notes & Cheat Sheets</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {studyNotes.map((article, idx) => (
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
                    &gt; READ_LAB_NOTES
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
