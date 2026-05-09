import React from 'react';
import { MapPin, Phone, Mail, Clock, Plane, Train, Car, Bus, Globe, Tv, Camera } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Contact Us</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Visit us, call us, or reach out for any inquiries. We're here to serve you.
        </p>
      </div>

      <section className="contact-content" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Contact Cards Grid */}
        <div className="quick-links-grid" style={{ marginBottom: '4rem' }}>
          <div className="glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem' }}>
              <MapPin size={32} className="gold-icon" />
            </div>
            <h3 style={{ marginBottom: '15px' }}>Address</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
              Devasahayam Mount Church,<br/>
              Devasahayam Mount, Aralvaimozhi,<br/>
              Kanyakumari District,<br/>
              Tamil Nadu 629302, India
            </p>
            <a href="#" className="btn-secondary" style={{ marginTop: 'auto' }}>Get Directions</a>
          </div>

          <div className="glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem' }}>
              <Phone size={32} className="gold-icon" />
            </div>
            <h3 style={{ marginBottom: '15px' }}>Phone</h3>
            <a href="tel:+918903760869" style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '10px' }}>
              +91 89037 60869
            </a>
            <p style={{ color: 'var(--text-muted)' }}>Available: 8:00 AM - 8:00 PM</p>
          </div>

          <div className="glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem' }}>
              <Mail size={32} className="gold-icon" />
            </div>
            <h3 style={{ marginBottom: '15px' }}>Email</h3>
            <a href="mailto:devasahayammountshrine@gmail.com" style={{ color: 'var(--text-main)', wordBreak: 'break-all', marginBottom: '10px' }}>
              devasahayammountshrine@gmail.com
            </a>
            <p style={{ color: 'var(--text-muted)' }}>We'll respond within 24 hours</p>
          </div>
        </div>

        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Left Column */}
          <div>
            <div className="glass-card mb-4" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Clock size={24} className="gold-icon" style={{ margin: 0 }} />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Office & Shrine Timings</h3>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Monday - Saturday</h4>
                <p style={{ color: 'var(--secondary-color)' }}>5:00 AM - 9:00 PM</p>
              </div>
              
              <div style={{ marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>Sunday</h4>
                <p style={{ color: 'var(--secondary-color)' }}>5:00 AM - 10:00 PM</p>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '10px' }}>Mass Timings:</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '5px' }}>6:00 AM, 9:00 AM, 6:00 PM (Daily)</p>
                <p style={{ color: 'var(--text-muted)' }}>Additional evening mass at 7:30 PM</p>
              </div>
            </div>

            <div className="glass-card text-center">
              <h3 style={{ marginBottom: '20px' }}>Connect With Us</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-icon">
                  <Globe size={24} />
                </a>
                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-icon">
                  <Tv size={24} />
                </a>
                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="social-icon">
                  <Camera size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card">
            <h3 style={{ color: '#fff', marginBottom: '25px', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>How to Reach Us</h3>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <div style={{ background: 'rgba(122,21,35,0.2)', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
                <Plane size={24} className="gold-icon" style={{ margin: 0 }} />
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>By Air</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Trivandrum International Airport (approximately 50 km). Taxis and buses available from airport.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <div style={{ background: 'rgba(122,21,35,0.2)', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
                <Train size={24} className="gold-icon" style={{ margin: 0 }} />
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>By Train</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Nagercoil Junction (approximately 15 km). Local transportation readily available.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
              <div style={{ background: 'rgba(122,21,35,0.2)', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
                <Car size={24} className="gold-icon" style={{ margin: 0 }} />
              </div>
              <div>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>By Road</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  Well-connected by state and private buses. Private vehicles and taxis can easily reach the shrine.
                </p>
              </div>
            </div>

            <div className="text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px' }}>
              <button className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Bus size={18} /> Bus Timings
              </button>
            </div>
          </div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .social-icon:hover {
          background: var(--secondary-color) !important;
          color: #000;
          transform: translateY(-3px);
        }
      `}} />
    </div>
  );
};

export default Contact;
