import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const presetAmounts = [100, 500, 1000, 2000, 5000, 10000];

const Donations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'General Donation',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setPresetAmount = (amt) => {
    setFormData({ ...formData, amount: amt });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) {
      alert("Please select or enter a valid donation amount.");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your generous donation request! We will contact you shortly with payment instructions.');
        setFormData({ name: '', email: '', phone: '', purpose: 'General Donation', amount: '' });
      }
    } catch (err) {
      alert('Error submitting request. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Make a Donation</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Your heartfelt donations help maintain the shrine, support charitable activities, and advance community services. Every contribution makes a difference in someone's life.
        </p>
      </div>

      <section className="booking-content" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Form Column */}
          <div className="booking-form-col glass-card">
            <h2 className="section-title text-left" style={{ fontSize: '1.8rem' }}>Donation Details</h2>
            <div className="title-separator" style={{ margin: '1rem 0 2rem 0', width: '40px' }}></div>
            
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 89037 60869" required />
              </div>
              <div className="form-group">
                <select name="purpose" value={formData.purpose} onChange={handleChange} required>
                  <option value="General Donation">General Donation</option>
                  <option value="Festival Celebration">Festival Celebration</option>
                  <option value="Shrine Renovation">Shrine Renovation</option>
                  <option value="Charitable Works">Charitable Works</option>
                </select>
              </div>
              
              <div className="form-group mt-4">
                <label style={{ display: 'block', marginBottom: '10px', color: 'var(--secondary-color)', fontFamily: 'var(--font-heading)' }}>Select Amount (₹)</label>
                <div className="amount-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '15px' }}>
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`amount-btn ${formData.amount == amt ? 'active' : ''}`}
                      onClick={() => setPresetAmount(amt)}
                      style={{
                        padding: '10px',
                        background: formData.amount == amt ? 'var(--secondary-color)' : 'rgba(0,0,0,0.5)',
                        color: formData.amount == amt ? '#000' : 'var(--text-main)',
                        border: `1px solid ${formData.amount == amt ? 'var(--secondary-color)' : 'var(--border-subtle)'}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s'
                      }}
                    >
                      {amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input 
                  type="number" 
                  name="amount" 
                  value={formData.amount} 
                  onChange={handleChange} 
                  placeholder="Custom Amount" 
                  min="1" 
                  style={{ background: 'rgba(0,0,0,0.7)' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', fontSize: '1.1rem' }}>Proceed to Donation</button>
            </form>
          </div>

          {/* Info Column */}
          <div className="booking-info-col">
            <div className="glass-card mb-4" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>How Your Donation Helps</h3>
              
              <div className="timing-block" style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>General Donation</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>General support for shrine maintenance and all activities</p>
              </div>
              
              <div className="timing-block" style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Festival Celebration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Support for special festival events and worship</p>
              </div>

              <div className="timing-block" style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Shrine Renovation</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Help maintain and improve shrine facilities</p>
              </div>

              <div className="timing-block" style={{ marginBottom: '5px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Charitable Works</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Support for charitable activities and community services</p>
              </div>
            </div>

            <div className="glass-card mb-4">
              <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem' }}>Tax Benefits</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Donations to religious institutions may be eligible for tax benefits under applicable tax laws. Please consult your tax advisor for details.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem' }}>Need Help?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '10px' }}>
                Contact us for questions about donations or payment methods.
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

export default Donations;
