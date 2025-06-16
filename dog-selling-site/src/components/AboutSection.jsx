import React from 'react';
import '../styles/AboutSection.css';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  const stats = [
    {
      id: 1,
      number: '1000+',
      label: 'Happy Customers'
    },
    {
      id: 2,
      number: '100%',
      label: 'Customer Satisfaction'
    },
    {
      id: 3,
      number: '5 Star',
      label: 'Trusted by Dog Lovers'
    }
  ];

  const handleGetStarted = () => {
    // Navigate to pets section page
    navigate('/pets')
   
  };

  return (
    <section className="about" id="about">
      <div className="about-contents">
        <div className="mission-vision">
          <h1>About Us</h1>
          
          <h2>Our Mission</h2>
          <p>
            At Paws & Claws, our mission is to connect families with healthy, well-bred dogs 
            from trusted breeders. We are dedicated to ensuring the highest standards of care, 
            health, and ethical breeding practices. Our goal is to make the journey of finding 
            your perfect canine companion safe, transparent, and joyful.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            We envision a future where every dog lover can find their ideal pet with confidence 
            and peace of mind. By partnering with responsible breeders and offering exceptional 
            customer support, we aim to set the standard for ethical and trustworthy dog sales worldwide.
          </p>
        </div>
        
        <div className="about-info">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="about-info-items">
                <h5>{stat.number}</h5>
                <h6>{stat.label}</h6>
              </div>
              {index < stats.length - 1 && <hr className="about-info-divider" />}
            </React.Fragment>
          ))}
        </div>
        
        <button className="btn-2" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      
      <img src="/images/cockerSpaniel-pup1.jpg" alt="Cocker Spaniel Puppy" />
    </section>
  );
};

export default AboutSection;