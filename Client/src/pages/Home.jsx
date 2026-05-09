import React from 'react';
import { Calendar, Heart, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ManagementTeam = [
  { nameKey: 'm1_name', titleKey: 'm1_title', descKey: 'm1_desc', image: '/bishop.png' },
  { nameKey: 'm2_name', titleKey: 'm2_title', descKey: 'm2_desc', image: '/rector.png' },
  { nameKey: 'm3_name', titleKey: 'm3_title', descKey: 'm3_desc', image: '/priest_winner.png' },
  { nameKey: 'm4_name', titleKey: 'm4_title', descKey: 'm4_desc', image: '/priest_roy.png' },
  { nameKey: 'm5_name', titleKey: 'm5_title', descKey: 'm5_desc', image: '/priest_pravin.png' },
  { nameKey: 'm6_name', titleKey: 'm6_title', descKey: 'm6_desc', image: '/michael_raj.png' },
  { nameKey: 'm7_name', titleKey: 'm7_title', descKey: 'm7_desc', image: '/kilbert.png' },
  { nameKey: 'm8_name', titleKey: 'm8_title', descKey: 'm8_desc', image: '/theeba_albert.png' },
  { nameKey: 'm9_name', titleKey: 'm9_title', descKey: 'm9_desc', image: '/sahaya_rani.png' }
];

const Accommodation = [
  { titleKey: 'r1_title', descKey: 'r1_desc', image: '/room_pilgrim.png' },
  { titleKey: 'r2_title', descKey: 'r2_desc', image: '/room_family.png' },
  { titleKey: 'r3_title', descKey: 'r3_desc', image: '/room_group.png' },
  { titleKey: 'r4_title', descKey: 'r4_desc', image: '/room_affordable.png' }
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section notranslate">
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in">
          <h2 className="hero-subtitle">{t('home.eyebrow')}</h2>
          <h1 className="hero-title">{t('home.title')}</h1>
          <div className="title-separator"></div>
          <p className="hero-text delay-1 animate-fade-in">
            {t('home.subtitle')}
          </p>
          <div className="delay-2 animate-fade-in">
            <Link to="/about" className="btn-primary hero-btn">{t('home.explore')} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
      {/* About Section with Images */}
      <section className="home-about-section">
        <div className="home-about-grid">
          <div className="home-about-text">
            <h2 className="section-title text-left" style={{ marginBottom: '1.5rem' }}>{t('home.eyebrow')}</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              {t('home.subtitle')}
            </p>
            <Link to="/about" className="btn-secondary">{t('home.explore')}</Link>
          </div>
          <div className="home-about-images">
            <div className="statue-image-card">
              <img src="/saint_devasahayam.png" alt="Saint Devasahayam Statue" />
            </div>
            <div className="statue-image-card">
              <img src="/our_lady_sorrows.png" alt="Our Lady of Sorrows Statue" />
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Services */}
      <section id="services" className="quick-links-section">
        <h2 className="section-title">{t('home.spiritual_services')}</h2>
        <p className="section-subtitle">Engage in devotion and seek blessings</p>
        <div className="title-separator"></div>
        
        <div className="quick-links-grid">
          <div className="quick-link-card glass-card">
            <div className="icon-wrapper">
              <Calendar className="icon gold-icon" size={36} />
            </div>
            <h3>{t('home.mass_title')}</h3>
            <p>{t('home.mass_desc')}</p>
            <Link to="/mass-booking" className="btn-secondary mt-4" style={{ display: 'inline-block' }}>{t('home.book_now')}</Link>
          </div>
          <div id="donations" className="quick-link-card glass-card">
            <div className="icon-wrapper">
              <Heart className="icon gold-icon" size={36} />
            </div>
            <h3>{t('home.donate_title')}</h3>
            <p>{t('home.donate_desc')}</p>
            <Link to="/donations" className="btn-secondary mt-4" style={{ display: 'inline-block' }}>{t('home.donate')}</Link>
          </div>
          <div id="prayer" className="quick-link-card glass-card">
            <div className="icon-wrapper">
              <MessageSquare className="icon gold-icon" size={36} />
            </div>
            <h3>{t('home.prayer_title')}</h3>
            <p>{t('home.prayer_desc')}</p>
            <Link to="/prayer-request" className="btn-secondary mt-4" style={{ display: 'inline-block' }}>{t('home.submit_request')}</Link>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="management" className="management-section">
        <h2 className="section-title">{t('home.management_title')}</h2>
        <p className="section-subtitle">{t('home.management_sub')}</p>
        <div className="title-separator"></div>

        <div className="management-grid">
          {ManagementTeam.map((member, index) => (
            <div key={index} className="management-card glass-card">
              <div className="member-avatar-wrapper">
                <div 
                  className="member-avatar" 
                  style={member.image ? { 
                    backgroundImage: `url(${member.image})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {}}
                ></div>
              </div>
              <h3 className="member-name">{t(`management.${member.nameKey}`)}</h3>
              <h4 className="member-title">{t(`management.${member.titleKey}`)}</h4>
              <p className="member-desc">{t(`management.${member.descKey}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="accommodation-section">
        <h2 className="section-title">{t('home.accom_title')}</h2>
        <p className="section-subtitle">{t('home.accom_sub')}</p>
        <div className="title-separator"></div>

        <div className="accommodation-grid">
          {Accommodation.map((room, index) => (
            <div key={index} className="room-card glass-card">
              <div className="room-image-wrapper">
                <img src={room.image} alt={t(`accommodation.${room.titleKey}`)} className="room-image" />
              </div>
              <h3 style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-heading)', marginTop: '1rem' }}>{t(`accommodation.${room.titleKey}`)}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t(`accommodation.${room.descKey}`)}</p>
            </div>
          ))}
        </div>

        <div className="contact-box glass-card delay-1 animate-fade-in">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{t('accommodation.enquiry_title')}</h3>
          <p style={{ color: 'var(--text-muted)' }}>{t('accommodation.enquiry_sub')}</p>
          <a href={`tel:${t('accommodation.phone').replace(/\s/g, '')}`} className="contact-number">
            <Phone size={24} />
            {t('accommodation.phone')}
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
