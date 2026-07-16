import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulating newsletter signup
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('INVALID_INPUT: Check email syntax.');
      }
    }, 1200);
  };

  return (
    <section id="newsletter" className="blueprint-border" style={{ padding: '32px', backgroundColor: 'var(--bg-panel)', borderRadius: '4px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
          // SUBSCRIPTION_PORTAL_v1.0
        </div>
        <h2 style={{ marginBottom: '12px', fontSize: '1.75rem', fontWeight: 600 }}>
          Subscribe to the Datasheet
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
          Get VLSI design tutorials, project write-ups, hardware engineering career advice, and high-level semiconductor news directly in your inbox. No spam, just technical specs.
        </p>

        {status === 'success' ? (
          <div className="blueprint-border" style={{ padding: '20px', backgroundColor: 'var(--accent-light)', borderColor: 'var(--accent)' }}>
            <span className="mono-text" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '6px' }}>
              &gt; STATUS: 200 OK // SUBSCRIBER_REGISTERED
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Thank you for subscribing! Connection established. You'll receive the next newsletter issue shortly.
            </p>
            <button 
              className="btn-technical-secondary" 
              style={{ marginTop: '12px', padding: '6px 12px', fontSize: '0.75rem' }} 
              onClick={() => { setStatus('idle'); setEmail(''); }}
            >
              [ REGISTER_ANOTHER ]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' }}>
              <div style={{ flexGrow: 1, minWidth: '200px' }}>
                <label 
                  htmlFor="newsletter-email" 
                  className="mono-text" 
                  style={{ display: 'block', fontSize: '0.75rem', marginBottom: '6px', color: 'var(--text-muted)' }}
                >
                  INPUT_EMAIL_ADDR:
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="engineer@domain.com"
                  className="input-technical"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  required
                />
              </div>
              <button 
                id="newsletter-submit"
                type="submit" 
                className="btn-technical" 
                style={{ height: '42px', minWidth: '150px' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'PROCESSING...' : '[ SUBSCRIBE ]'}
              </button>
            </div>
            {status === 'error' && (
              <span className="mono-text" style={{ fontSize: '0.8rem', color: 'red', display: 'block' }}>
                &gt; ERROR: {errorMessage}
              </span>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
