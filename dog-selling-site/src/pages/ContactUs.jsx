import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Add smooth scrolling animation on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleHomeClick = () =>{
    navigate('/');
  }

  const handleSubmit = () => {
    // Simple validation
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputFocus = (e) => {
    e.target.parentElement.style.transform = 'scale(1.02)';
  };

  const handleInputBlur = (e) => {
    e.target.parentElement.style.transform = 'scale(1)';
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: linear-gradient(135deg, #f3e2d4 0%, #e8d3c4 100%);
          font-family: "Nunito Sans", sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Navigation Header */
        nav {
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: black;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 50px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease-out;
        }

        .brand {
          text-decoration: none;
          transition: all ease-in-out 0.3s;
        }

        .brand h1 {
          font-size: 32px;
          font-weight: 900;
          color: black;
        }

        .ampasend {
          color: #7D62B0;
        }

        .accent {
          color: black;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          background: #7D62B0;
          padding: 12px 24px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .nav-link:hover {
          background: #6B4FA0;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(125, 98, 176, 0.3);
        }

        /* Main Content */
        .main-content {
          padding: 120px 50px 50px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease;
        }

        .page-header h1 {
          font-size: 48px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 900;
        }

        .page-header p {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Contact Container */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Contact Form */
        .contact-form {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          animation: slideInLeft 0.8s ease;
        }

        .contact-form h2 {
          font-size: 32px;
          color: #333;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 15px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #7D62B0;
          box-shadow: 0 0 0 3px rgba(125, 98, 176, 0.1);
          transform: translateY(-2px);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 25px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          width: fit-content;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(125, 98, 176, 0.3);
          background: linear-gradient(135deg, #6B4FA0, #8B6DB7);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Contact Info */
        .contact-info {
          animation: slideInRight 0.8s ease;
        }

        .contact-info h2 {
          font-size: 32px;
          color: #333;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          margin-bottom: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
        }

        .info-text h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .info-text p {
          color: #666;
          font-size: 16px;
          line-height: 1.5;
        }

        /* Pet Adoption CTA */
        .adoption-cta {
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          color: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          margin-top: 40px;
          animation: fadeInUp 1s ease;
        }

        .adoption-cta h3 {
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .adoption-cta p {
          font-size: 16px;
          margin-bottom: 25px;
          opacity: 0.9;
        }

        .cta-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cta-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .main-content {
            padding: 120px 30px 50px;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .main-content {
            padding: 100px 20px 30px;
          }
          
          .page-header h1 {
            font-size: 36px;
          }
          
          .contact-form,
          .info-card,
          .adoption-cta {
            padding: 25px;
          }
          
          .contact-form h2,
          .contact-info h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div>
        {/* Navigation Header */}
        <nav>
          <a href="#" className="brand">
            <h1><sup>Paws</sup><b className="ampasend">&</b><sub className="accent">Claws</sub></h1>
          </a>
          <div className="nav-links">
            <div 
              className="nav-link"
              onClick={handleHomeClick}
            >
              <i className="fa-solid fa-arrow-left"></i>
              Back to Home
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          {/* Page Header */}
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Whether you're looking to buy a furry friend, have questions about our services, or just want to say hello, we're here to help.</p>
          </div>

          {/* Contact Container */}
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <div>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">Select the breed *</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="adoption">Beagle</option>
                    <option value="volunteer">Golden Retriever</option>
                    <option value="donation">Labrador Retriever</option>
                    <option value="general">Siberian Husky</option>
                    <option value="support">Poodle</option>
                    <option value="support">Shih Tzu</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us more about your inquiry..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                  ></textarea>
                </div>
                
                <button type="button" className="submit-btn" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="info-text">
                    <h3>Visit Our Shelter</h3>
                    <p>PawsAndClaws</p><p>123 Paws Street<br />Coimbatore<br />Open: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM</p>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="info-text">
                    <h3>Call Us</h3>
                    <p>Main: 630-614-1096<br />Emergency: (555) 456-7890<br />Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="info-text">
                    <h3>Email Us</h3>
                    <p>General: pawsandclaws@gmail.com<br />Queries: queriest@pawsandclaws.com<br />We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="info-text">
                    <h3>Follow Our Journey</h3>
                    <p>@PawsAndClaws on social media<br />Daily updates on our furry friends<br />Success stories and adoption news</p>
                  </div>
                </div>
              </div>
              
              {/* Pet Adoption CTA */}
              <div className="adoption-cta">
                <h3>Ready to Find Your New Best Friend?</h3>
                <p>Browse our available pets and find the perfect companion waiting for you!</p>
                <a href="#" className="cta-btn">
                  <i className="fa-solid fa-paw"></i>
                  View Available Pets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;