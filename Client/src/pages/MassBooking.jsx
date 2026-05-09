import React, { useState } from 'react';

const MassBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '6:00 AM',
    intentionType: 'Thanksgiving',
    intentionDetails: '',
    days: 1
  });

  const pricePerMass = 150;
  const totalAmount = pricePerMass * formData.days;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/mass-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, totalAmount })
      });
      if (response.ok) {
        alert('Your Mass Booking request has been submitted successfully! Check your email for payment instructions.');
        setFormData({ name: '', email: '', phone: '', date: '', time: '6:00 AM', intentionType: 'Thanksgiving', intentionDetails: '', days: 1 });
      }
    } catch (err) {
      alert('Error submitting request. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Book a Holy Mass</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)' }}>
          Offer a Holy Mass for your intentions, loved ones, or in memory of departed souls. Please fill out the form below to submit your mass booking request.
        </p>
      </div>

      <section className="booking-content" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Form Column */}
          <div className="booking-form-col glass-card">
            <h2 className="section-title text-left" style={{ fontSize: '1.8rem' }}>Booking Details</h2>
            <div className="title-separator" style={{ margin: '1rem 0 2rem 0', width: '40px' }}></div>
            
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" required />
              </div>
              <div className="form-group">
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <select name="time" value={formData.time} onChange={handleChange} required>
                  <option value="5:00 AM">5:00 AM (Sunday)</option>
                  <option value="6:00 AM">6:00 AM (Mon - Sat)</option>
                  <option value="7:00 AM">7:00 AM (Sunday)</option>
                  <option value="10:30 AM">10:30 AM (Fri - Sat)</option>
                  <option value="11:00 AM">11:00 AM (Fri - Sat)</option>
                  <option value="12:00 PM">12:00 PM (Sunday)</option>
                  <option value="5:30 PM">5:30 PM (Sunday)</option>
                  <option value="6:30 PM">6:30 PM (Mon - Sat)</option>
                </select>
              </div>
              <div className="form-group">
                <select name="intentionType" value={formData.intentionType} onChange={handleChange} required>
                  <option value="Thanksgiving">Thanksgiving</option>
                  <option value="Repose of Soul">Repose of Soul</option>
                  <option value="Special Intention">Special Intention</option>
                  <option value="Birthday Blessings">Birthday Blessings</option>
                  <option value="Wedding Anniversary">Wedding Anniversary</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="intentionDetails" value={formData.intentionDetails} onChange={handleChange} placeholder="Enter intention details" rows="3" required></textarea>
              </div>
              
              <div className="form-group days-group" style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '5px', border: '1px solid var(--border-subtle)' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Book the same mass intention for multiple consecutive days starting from your selected date.
                </label>
                <input type="number" name="days" value={formData.days} onChange={handleChange} min="1" max="30" />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem' }}>Submit Booking Request</button>
            </form>
          </div>

          {/* Info Column */}
          <div className="booking-info-col">
            <div className="glass-card mb-4" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <h3 style={{ color: 'var(--secondary-color)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px', marginBottom: '15px' }}>Mass Booking Amount</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Price per mass:</span>
                <span>₹{pricePerMass}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Number of days:</span>
                <span>{formData.days}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary-color)', borderTop: '1px solid var(--border-subtle)', paddingTop: '15px' }}>
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '15px', textAlign: 'center' }}>
                Payment instructions will be sent after approval
              </p>
            </div>

            <div className="glass-card mb-4">
              <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.2rem' }}>Important Notes</h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '8px' }}>• Bookings are subject to availability</li>
                <li style={{ marginBottom: '8px' }}>• You will receive confirmation via email</li>
                <li style={{ marginBottom: '8px' }}>• Please arrive 15 minutes before mass time</li>
                <li>• Contact us for special arrangements</li>
              </ul>
            </div>

            <div className="glass-card">
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Mass Timings</h3>
              
              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Daily Mass</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monday - Thursday<br/>Morning: 6:00 am | Evening: 6:30 pm</p>
              </div>
              
              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Friday Mass</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Morning: 6:00 am Mass<br/>Morning: 10:30 am Novena for St.Devasahayam<br/>Morning: 11:00 am Mass (following Novena)<br/>Evening: 6:30 pm Mass</p>
              </div>

              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Saturday Mass</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Morning: 6:00 am Mass<br/>Morning: 10:30 am Novena for Our Lady of Sorrows<br/>Morning: 11:00 am Mass (following Novena)</p>
              </div>

              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Sunday Mass</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Morning: 5:00 am & 7:00 am<br/>Afternoon: 12:00 pm (Pilgrimages)<br/>Evening: 5:30 pm Mass</p>
              </div>

              <h3 style={{ color: 'var(--secondary-color)', marginTop: '25px', marginBottom: '15px', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Special Days</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px' }}>Special Days are held at the Shrine on various dates each month, ensuring all visitors have the opportunity to participate.</p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '8px' }}>• 13th of month - Prison Mass at 7:00 pm</li>
                <li style={{ marginBottom: '8px' }}>• 14th of month - Mass 6:30 pm, Malaivalam 7:00 pm</li>
                <li style={{ marginBottom: '8px' }}>• 15th of month - Our Lady of Sorrows Mass at 6:30 pm</li>
                <li style={{ marginBottom: '8px' }}>• 1st Tuesday - St Antony's Grotto Mass 7:00 pm</li>
                <li style={{ marginBottom: '8px' }}>• 1st Wednesday - Old Church Mass 7:00 pm</li>
                <li style={{ marginBottom: '8px' }}>• 1st Friday - St.Devasahayam Square Mass 7:00 pm</li>
                <li>• 1st Saturday - Our Lady of Sorrows Mass 6:30 pm & chariot procession</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MassBooking;
