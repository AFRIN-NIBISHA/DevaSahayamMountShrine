import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page notranslate">
      <div className="about-hero" style={{ background: `url('/shrine_hero.png') no-repeat center center/cover`, backgroundAttachment: 'fixed' }}>
        <div className="hero-overlay" style={{ background: 'var(--hero-overlay)', position: 'absolute', inset: 0 }}></div>
        <div className="hero-content text-center animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title" style={{ fontSize: '4.5rem', textShadow: '0 4px 30px rgba(0,0,0,0.9)', letterSpacing: '4px' }}>{t('about.hero_title')}</h1>
          <div className="title-separator" style={{ margin: '1.5rem auto' }}></div>
          <p className="hero-subtitle" style={{ fontSize: '1.6rem', color: 'var(--secondary-color)', fontWeight: '600', letterSpacing: '1px' }}>
            {t('about.hero_subtitle')}
          </p>
        </div>
      </div>

      <section className="about-content">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <h2 className="section-title text-left" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>{t('about.faith_courage_title')}</h2>
            <div className="title-separator" style={{ margin: '1.5rem 0 2.5rem 0' }}></div>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', opacity: 0.9 }}>{t('about.faith_courage_p1')}</p>
            <p className="mt-4" style={{ fontSize: '1.15rem', color: 'var(--text-main)', opacity: 0.9 }}>{t('about.faith_courage_p2')}</p>
          </div>
          <div className="about-intro-images">
            <div className="statue-image-card">
              <img src="/saint_devasahayam.png" alt="Saint Devasahayam Statue" />
            </div>
            <div className="statue-image-card">
              <img src="/our_lady_sorrows.png" alt="Our Lady of Sorrows Statue" />
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', fontSize: '1.6rem', marginBottom: '1.5rem'}}>{t('about.early_life_title')}</h3>
            <p style={{ fontSize: '1.05rem' }}>{t('about.early_life_p1')}</p>
            <p className="mt-3" style={{ fontSize: '1.05rem' }}>{t('about.early_life_p2')}</p>
            <p className="mt-3" style={{ fontSize: '1.05rem' }}>{t('about.early_life_p3')}</p>
          </div>
          
          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', fontSize: '1.6rem', marginBottom: '1.5rem'}}>{t('about.turning_point_title')}</h3>
            <p style={{ fontSize: '1.05rem' }}>{t('about.turning_point_p1')}</p>
            <p className="mt-3" style={{ fontSize: '1.05rem' }}>{t('about.turning_point_p2')}</p>
            <p className="mt-3" style={{ fontSize: '1.05rem' }}>{t('about.turning_point_p3')}</p>
          </div>
        </div>

        <div className="timeline-section" style={{ marginTop: '6rem' }}>
          <h2 className="section-title">{t('about.timeline_title')}</h2>
          <div className="title-separator"></div>
          <div className="timeline-grid glass-card">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="timeline-item">
                <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t(`about.timeline_${num}_date`)}</div>
                <div style={{ color: 'var(--text-main)', opacity: 0.9 }}>{t(`about.timeline_${num}_text`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ marginTop: '6rem', padding: '4rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title text-center">{t('about.persecution_title')}</h2>
            <div className="title-separator"></div>
            <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>{t('about.persecution_p1')}</p>
            <p className="mt-4" style={{ fontSize: '1.1rem', textAlign: 'center' }}>{t('about.persecution_p2')}</p>
            <p className="mt-4" style={{ fontSize: '1.1rem', textAlign: 'center' }}>{t('about.persecution_p3')}</p>
            <div style={{ position: 'relative', marginTop: '4rem', padding: '2rem', background: 'rgba(156, 123, 22, 0.05)', borderRadius: '8px' }}>
              <blockquote className="quote" style={{ border: 'none', textAlign: 'center', padding: '0', fontSize: '1.4rem' }}>
                "{t('about.persecution_quote')}"
              </blockquote>
            </div>
          </div>
        </div>

        <div className="about-grid" style={{ marginTop: '6rem' }}>
          <div className="glass-card">
            <h2 className="section-title text-left" style={{ fontSize: '2rem' }}>{t('about.sacred_places_title')}</h2>
            <div className="title-separator" style={{ margin: '1rem 0 2rem 0' }}></div>
            <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.cathedral_title')}</h3>
            <p>{t('about.cathedral_desc')}</p>
          </div>
          
          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', fontSize: '1.8rem', marginTop: '3.5rem', marginBottom: '1.5rem'}}>{t('about.legacy_title')}</h3>
            <p>{t('about.legacy_desc')}</p>
          </div>
        </div>

        <div className="shrine-info glass-card" style={{ marginTop: '6rem', borderTop: '4px solid var(--secondary-color)', padding: '5rem 3rem' }}>
          <h2 className="section-title text-center">{t('about.shrine_about_title')}</h2>
          <div className="title-separator"></div>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div className="text-center">
              <h3 style={{color: 'var(--secondary-color)', fontSize: '1.8rem', marginBottom: '1.5rem'}}>{t('about.vision_title')}</h3>
              <p style={{ fontSize: '1.1rem' }}>{t('about.vision_text')}</p>
            </div>
            <div className="text-center">
              <h3 style={{color: 'var(--secondary-color)', fontSize: '1.8rem', marginBottom: '1.5rem'}}>{t('about.mission_title')}</h3>
              <p style={{ fontSize: '1.1rem' }}>{t('about.mission_text')}</p>
            </div>
          </div>
          
          <div className="mt-5 pt-5 text-center" style={{ borderTop: '1px solid var(--border-subtle)' }}>
             <p style={{fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
              © 2026 {t('nav.shrine_title')} • {t('about.hero_subtitle')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
