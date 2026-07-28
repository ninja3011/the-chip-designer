interface ProjectCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  docUrl?: string;
}

export const ProjectCard = ({
  id,
  category,
  title,
  description,
  tags,
  githubUrl,
  docUrl
}: ProjectCardProps) => {
  return (
    <article className="card-technical">
      <div className="card-label">
        <span>ID: {id}</span>
        <span>// {category}</span>
      </div>
      <h3 className="card-title" style={{ fontFamily: 'var(--sans)', fontSize: '1.2rem', margin: '8px 0' }}>
        {title}
      </h3>
      <p className="card-desc" style={{ marginBottom: '16px', fontSize: '0.9rem', lineHeight: '1.4' }}>
        {description}
      </p>
      
      {/* Project tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {tags.map((tag) => (
          <span key={tag} className="badge-technical">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Links styled like technical instructions */}
      <div className="flex-between" style={{ borderTop: '1px solid var(--border-muted)', paddingTop: '12px', marginTop: 'auto', gap: '10px' }}>
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mono-text"
            style={{ fontSize: '0.75rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            &lt; FETCH_REPO &gt;
          </a>
        )}
        {docUrl && (
          <a 
            href={docUrl} 
            className="mono-text"
            style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            &lt; READ_SPECS &gt;
          </a>
        )}
      </div>
    </article>
  );
};
