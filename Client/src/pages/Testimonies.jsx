import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

const Testimonies = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Miracles & Testimonies</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Read inspiring stories of faith and answered prayers through Saint Devasahayam.
        </p>
      </div>

      <section className="testimonies-content" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', minHeight: '50vh' }}>
        
        {!showForm ? (
          <div className="glass-card text-center" style={{ padding: '4rem 2rem' }}>
            <MessageSquarePlus size={64} style={{ color: 'var(--secondary-color)', margin: '0 auto 1.5rem', opacity: '0.8' }} />
            <h2 style={{ color: '#fff', marginBottom: '10px' }}>Share Your Testimony</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Have you experienced a miracle or had a prayer answered? Share your story to inspire others.
            </p>
            <button 
              className="btn-primary" 
              onClick={() => setShowForm(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '12px 30px' }}
            >
              <MessageSquarePlus size={20} /> Share Testimony
            </button>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: '2rem' }}>
            {submitted ? (
              <div className="text-center" style={{ padding: '2rem' }}>
                <h2 style={{ color: 'var(--secondary-color)' }}>Thank You!</h2>
                <p style={{ color: 'var(--text-main)', marginTop: '1rem' }}>Your testimony has been submitted for review. God bless you!</p>
              </div>
            ) : (
              <>
                <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Submit Your Story</h2>
                <form onSubmit={handleSubmit} className="custom-form">
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <input type="text" placeholder="Title of your Testimony" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <textarea placeholder="Tell us your story..." rows="8" required></textarea>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>Submit Testimony</button>
                    <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}

      </section>
    </div>
  );
};

export default Testimonies;
