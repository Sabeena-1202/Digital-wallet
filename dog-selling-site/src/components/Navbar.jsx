import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (err) {
      console.error('Error parsing user data from localStorage', err);
    }
  }
}, []);


  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleNavClick = () => {
    setIsMenuActive(false);
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
    handleNavClick();
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contactus');
    handleNavClick();
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate('/profile');
    handleNavClick();
  };

  const getProfileInitial = (email) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <a href="/" className="brand" onClick={(e) => handleLinkClick(e, '/')}>
        <h1>
          <sup>Paws</sup>
          <b className="ampasend">&</b>
          <sub className="accent">Claws</sub>
        </h1>
      </a>

      <div className="right-section">
        <div className={`menu ${isMenuActive ? 'active' : ''}`}>
          <div className="btn">
            <i className="fa-solid fa-xmark close-btn" onClick={toggleMenu}></i>
          </div>

          <a href="/" onClick={(e) => handleLinkClick(e, '/')}>Home</a>
          <a href="#pets" onClick={(e) => handleLinkClick(e, '#pets')}>Pets</a>
          <a href="/requirements" onClick={(e) => handleLinkClick(e, '/requirements')}>Requirements</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>

          {user ? (
            <div className="profile-container">
              <div
                className="profile-icon"
                onClick={handleProfileClick}
                title={user.email}
              >
                {getProfileInitial(user.email)}
              </div>
            </div>
          ) : (
            <a href="/login" onClick={(e) => handleLinkClick(e, '/login')}>Login</a>
          )}
        </div>

        <button className="btn-1" onClick={handleContactClick}>
          <h2>Contact Us</h2>
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>

        <div className="btn">
          <i className="fa-solid fa-bars menu-btn" onClick={toggleMenu}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
