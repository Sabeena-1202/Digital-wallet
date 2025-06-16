import React from 'react';
import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Pets', href: '#pets' }
  ];

  const additionalLinks = [
    { name: 'Requirements', href: '/requirements' },
    { name: 'Login', href: '/login' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', href: '/' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', href: '/' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: '/' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', href: '/' }
  ];

  const contactInfo = [
    {
      icon: 'fa-regular fa-envelope',
      text: 'pawsandclaws@gmail.com'
    },
    {
      icon: 'fa-solid fa-phone',
      text: '630-614-1096'
    }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      // For hash links, scroll to element
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For route links, use navigate
      navigate(href);
    }
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h2>Instant Access</h2>
          <div className="link-container">
            <div className="links">
              {navigationLinks.map((link, index) => (
                <button 
                  key={index} 
                  onClick={() => handleLinkClick(link.href)}
                  className="footer-link-button"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="links">
              {additionalLinks.map((link, index) => (
                <button 
                  key={index} 
                  onClick={() => handleLinkClick(link.href)}
                  className="footer-link-button"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
                
        <div className="footer-brand">
          <h1>
            <sup style={{ color: '#f3e2d4' }}>Paws</sup>
            <b className="ampasend">&</b>
            <sub style={{ color: '#f3e2d4' }}>Claws</sub>
          </h1>
          <p>A forever friend is waiting for you at the shelter. Buy and make a difference.</p>
                    
          <div className="socials">
            {socialLinks.map((social, index) => (
              <button 
                key={index} 
                onClick={() => handleLinkClick(social.href)}
                aria-label={social.name}
                className="social-button"
              >
                <i className={social.icon}></i>
              </button>
            ))}
          </div>
        </div>
                
        <div className="footer-contact">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-info-item">
              <i className={contact.icon}></i>
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
            
      <p className="copyright">
        All Rights Reserved to <b>Paws & Claws</b>
      </p>
    </footer>
  );
};

export default Footer;