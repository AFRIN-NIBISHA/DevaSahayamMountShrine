import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page notranslate">
      <div className="about-hero" style={{ background: `url('/shrine_hero.png') no-repeat center center/cover` }}>
        <div className="hero-overlay" style={{ background: 'var(--hero-overlay)' }}></div>
        <div className="hero-content text-center animate-fade-in" style={{ paddingTop: '240px' }}>
          <h1 className="hero-title" style={{ fontSize: '4rem', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>{t('about.hero_title')}</h1>
          <div className="title-separator" style={{ margin: '1rem auto' }}></div>
          <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: 'var(--secondary-color)', fontWeight: '600' }}>
            {t('about.hero_subtitle')}
          </p>
        </div>
      </div>

      <section className="about-content">
        <div className="about-intro-grid">
          <div className="about-intro-text">
            <h2 className="section-title text-left">{t('about.faith_courage_title')}</h2>
            <div className="title-separator" style={{ margin: '1rem 0 2rem 0' }}></div>
            <p style={{ fontSize: '1.15rem' }}>{t('about.faith_courage_p1')}</p>
            <p className="mt-3" style={{ fontSize: '1.15rem' }}>{t('about.faith_courage_p2')}</p>
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
            <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.early_life_title')}</h3>
            <p>{t('about.early_life_p1')}</p>
            <p className="mt-3">{t('about.early_life_p2')}</p>
            <p className="mt-3">{t('about.early_life_p3')}</p>
          </div>
          
          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.turning_point_title')}</h3>
            <p>{t('about.turning_point_p1')}</p>
            <p className="mt-3">{t('about.turning_point_p2')}</p>
            <p className="mt-3">{t('about.turning_point_p3')}</p>
          </div>
        </div>

        <div className="timeline-section mt-5">
          <h2 className="section-title">{t('about.timeline_title')}</h2>
          <div className="title-separator"></div>
          <div className="timeline-grid glass-card">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="timeline-item">
                <strong>{t(`about.timeline_${num}_date`)}:</strong> {t(`about.timeline_${num}_text`)}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card mt-5">
          <h2 className="section-title text-left">{t('about.persecution_title')}</h2>
          <div className="title-separator" style={{ margin: '1rem 0 2rem 0' }}></div>
          <p>{t('about.persecution_p1')}</p>
          <p className="mt-3">{t('about.persecution_p2')}</p>
          <p className="mt-3">{t('about.persecution_p3')}</p>
          <blockquote className="quote mt-4">
            {t('about.persecution_quote')}
          </blockquote>
        </div>

        <div className="glass-card mt-5">
          <h2 className="section-title text-left">{t('about.sacred_places_title')}</h2>
          <div className="title-separator" style={{ margin: '1rem 0 2rem 0' }}></div>
          <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.cathedral_title')}</h3>
          <p>{t('about.cathedral_desc')}</p>
        </div>

        <div className="about-grid mt-5">
          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.journey_title')}</h3>
            <p>{t('about.journey_desc')}</p>
          </div>

          <div className="glass-card">
            <h3 style={{color: 'var(--secondary-color)', marginBottom: '1rem'}}>{t('about.legacy_title')}</h3>
            <p>{t('about.legacy_desc')}</p>
          </div>
        </div>

        <div className="shrine-info mt-5 glass-card" style={{ borderTop: '4px solid var(--secondary-color)' }}>
          <h2 className="section-title text-center">{t('about.shrine_about_title')}</h2>
          <div className="title-separator"></div>
          <div className="text-center mb-4">
            <h3 style={{color: 'var(--secondary-color)'}}>{t('about.vision_title')}</h3>
            <p>{t('about.vision_text')}</p>
            <h3 className="mt-4" style={{color: 'var(--secondary-color)'}}>{t('about.mission_title')}</h3>
            <p>{t('about.mission_text')}</p>
          </div>
          
          <p className="text-center mt-5" style={{fontStyle: 'italic', color: 'var(--text-muted)'}}>
            © 2026 {t('nav.shrine_title')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
