import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/prayer-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Your prayer request has been submitted. We will keep you in our prayers.');
        setFormData({ name: '', email: '', request: '' });
      }
    } catch (err) {
      alert('Error submitting request. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Prayer Request</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Share your prayer intentions with us. We will remember you in our daily masses and prayers, seeking the intercession of Saint Devasahayam for your needs.
        </p>
      </div>

      <section className="booking-content" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Form Column */}
          <div className="booking-form-col glass-card">
            <h2 className="section-title text-left" style={{ fontSize: '1.8rem' }}>Submit Your Prayer Request</h2>
            <div className="title-separator" style={{ margin: '1rem 0 2rem 0', width: '40px' }}></div>
            
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com (Optional)" />
                <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '5px' }}>Optional - We'll keep you in our prayers</small>
              </div>
              <div className="form-group">
                <textarea 
                  name="request" 
                  value={formData.request} 
                  onChange={handleChange} 
                  placeholder="Share your prayer request... (e.g., for healing, family needs, guidance, thanksgiving)" 
                  rows="6" 
                  required
                ></textarea>
                <small style={{ color: 'var(--secondary-color)', display: 'block', marginTop: '5px', fontStyle: 'italic' }}>Your prayer request will be kept confidential</small>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', fontSize: '1.1rem' }}>Submit Prayer Request</button>
            </form>
          </div>

          {/* Info Column */}
          <div className="booking-info-col">
            <div className="glass-card mb-4" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '1.4rem' }}>Daily Prayer Times</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>Your intentions will be remembered during:</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Morning Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>6:00 AM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Morning Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>9:00 AM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Evening Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>6:00 PM</span>
              </div>
            </div>

            <div className="glass-card mb-4">
              <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>Prayer to Saint Devasahayam</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
                "O Saint Devasahayam, faithful witness to Christ, you embraced the Gospel with courage and died for your faith. Intercede for us before God, that we may grow in faith, hope, and love."
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Help us to be strong in times of trial and to always seek God's will in our lives. Through your powerful intercession, may our prayers be heard and our needs be met according to God's holy plan. Amen."
              </p>
            </div>

            <div className="glass-card mb-4">
              <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.2rem' }}>God's Promise</h3>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '10px', lineHeight: '1.6' }}>
                "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened."
              </p>
              <p style={{ color: '#fff', fontSize: '0.9rem', textAlign: 'right' }}>- Matthew 7:7-8</p>
            </div>

            <div className="glass-card">
              <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem' }}>Need to Talk?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '15px' }}>
                If you need spiritual guidance or wish to speak with a priest, please contact us:
              </p>
              <a href="tel:+918903760869" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                <Phone size={18} /> +91 89037 60869
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequest;
