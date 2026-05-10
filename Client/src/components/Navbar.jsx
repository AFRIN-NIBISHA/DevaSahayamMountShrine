import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="logo-container">
          <Link to="/">
            <h1 className="site-title">{t('nav.shrine_title')}</h1>
          </Link>
        </div>
        
        <div className="header-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink>
          <NavLink to="/mass-booking" onClick={() => setIsMenuOpen(false)}>{t('nav.mass_booking')}</NavLink>
          <NavLink to="/donations" onClick={() => setIsMenuOpen(false)}>{t('nav.donations')}</NavLink>
          <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>{t('nav.gallery')}</NavLink>
          <NavLink to="/livestream" onClick={() => setIsMenuOpen(false)}>{t('nav.livestream')}</NavLink>
          <NavLink to="/testimonies" onClick={() => setIsMenuOpen(false)}>{t('nav.testimonies')}</NavLink>
          <NavLink to="/prayer-request" onClick={() => setIsMenuOpen(false)}>{t('nav.prayer_request')}</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</NavLink>
          <select 
            className="nav-lang-select" 
            onChange={handleLanguageChange}
            defaultValue="en"
          >
            <option value="en">ENG</option>
            <option value="ta">தமிழ்</option>
            <option value="ml">മലയാളം</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
