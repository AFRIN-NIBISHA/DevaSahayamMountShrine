import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3 className="footer-title">Our Lady Of Sorrows Shrine</h3>
          <p>{t('footer.desc')}</p>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">{t('footer.contact')}</h3>
          <p><MapPin size={20} className="inline-icon" /> <span>Mount Devasahayam, Pilgrimage Road,<br/>Tamil Nadu, India</span></p>
          <p><Phone size={20} className="inline-icon" /> <span>+91 89037 60869</span></p>
          <p><Mail size={20} className="inline-icon" /> <span>info@devasahayammountshrine.com</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
