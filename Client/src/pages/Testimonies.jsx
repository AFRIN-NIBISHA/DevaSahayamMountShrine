import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

const Testimonies = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Miracles & Testimonies</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Read inspiring stories of faith and answered prayers through Saint Devasahayam.
        </p>
      </div>

      <section className="testimonies-content" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh' }}>
        
        <div className="glass-card text-center" style={{ padding: '4rem 2rem' }}>
          <MessageSquarePlus size={64} style={{ color: 'var(--secondary-color)', margin: '0 auto 1.5rem', opacity: '0.8' }} />
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>Share Your Testimony</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            No testimonies yet. Be the first to share!
          </p>
          <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '12px 30px' }}>
            <MessageSquarePlus size={20} /> Share Testimony
          </button>
        </div>

      </section>
    </div>
  );
};

export default Testimonies;
