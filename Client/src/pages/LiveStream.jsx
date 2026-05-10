import React from 'react';
import { Tv, Bell, Share2 } from 'lucide-react';

const LiveStream = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Live Mass Stream - St. Devasahayam Shrine',
        text: 'Join us for live streaming of Holy Mass and special ceremonies.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Share URL: ' + window.location.href);
    }
  };

  const handleGetNotified = () => {
    window.open('https://www.youtube.com/@devasahayammountshrine5677?sub_confirmation=1', '_blank');
  };

  return (
    <div className="page-wrapper">
      <div className="page-header text-center animate-fade-in" style={{ paddingTop: '130px', paddingBottom: '30px' }}>
        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Live Mass Stream</h1>
        <p className="section-subtitle" style={{ color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Join us for live streaming of Holy Mass and special ceremonies from St.Devasahayam Martyrdom Place
        </p>
      </div>

      <section className="livestream-content" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Video Player Placeholder */}
        <div className="video-container glass-card text-center mb-5" style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.8)' }}>
          <Tv size={64} style={{ color: 'var(--text-muted)', margin: '0 auto 1rem' }} />
          <h2 style={{ color: 'var(--text-muted)' }}>No Live Stream Currently</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Check back during mass times or special events</p>
          <button 
            className="btn-primary" 
            onClick={handleGetNotified}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Bell size={18} /> Get Notified
          </button>
        </div>

        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Left Column */}
          <div>
            <div className="glass-card mb-4" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '15px', fontSize: '1.4rem' }}>Daily Mass Timings</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Morning Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>6:00 AM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Evening Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>6:00 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sunday Mass</span>
                <span style={{ color: 'var(--secondary-color)' }}>9:00 AM</span>
              </div>
            </div>

            <div className="glass-card mb-4">
              <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.4rem' }}>Special Events</h3>
              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Feast Day Celebration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>January 14th - Full Day Coverage</p>
              </div>
              <div className="timing-block" style={{ marginBottom: '15px' }}>
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Friday Adoration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Every Friday at 7:00 PM</p>
              </div>
              <div className="timing-block">
                <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px' }}>Holy Week Services</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Special extended coverage</p>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'linear-gradient(135deg, #7a1523 0%, #1a0a0a 100%)' }}>
              <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.4rem' }}>Visit Our YouTube Channel</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '20px' }}>
                Subscribe to our channel for notifications about upcoming streams and access to recorded masses
              </p>
              <a href="https://www.youtube.com/@devasahayammountshrine5677" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#7a1523', border: 'none' }}>
                <Tv size={18} /> Visit YouTube Channel
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card">
            <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Important Information</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> Live streaming is available during scheduled mass times</li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> For full YouTube features (live chat, super chat, reactions), click "Chat on YouTube" or "Full Features"</li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> Check our YouTube channel for recorded masses if you miss the live stream</li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> For special ceremonies and feast day celebrations, check our announcements</li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> You can participate in prayers and responses from wherever you are</li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> Feel free to leave your prayer intentions in the YouTube live chat</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--secondary-color)' }}>•</span> Use the share button to invite family and friends to join the live mass</li>
            </ul>
            <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <button 
                className="btn-secondary" 
                onClick={handleShare}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Share2 size={18} /> Share Live Stream
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LiveStream;
