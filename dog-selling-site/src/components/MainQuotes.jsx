import React from 'react';
import '../styles/mainQuotes.css';
import { useNavigate } from 'react-router-dom';

const MainQuotes = () => {
  const navigate = useNavigate();
  const handleTakeMeHome = () => {
    // Navigate to pets section page
    navigate('/pets');
  };

  const handleContactClick = () =>{
      navigate('/contactus');
  };


  return (
    <section className="mainQuotes-section">
      <div className="curved-background">
        <img src="/images/uuu-removebg.png" alt="Dog" />
      </div>
      
      <section className="contentPage">
        <div className="quotes">
          <h1>Every journey begins with pretty paws and a brave heart</h1>
          <p>A forever friend is waiting for you at the shelter. Buy and make a difference.</p>
          
          <div className="contentPage-buttons">
            <button className="btn-2" onClick={handleTakeMeHome}>
              Take me home!
            </button>
            <button className="btn-3 btn-transparent" onClick={handleContactClick}>
              Reach Out to Us
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainQuotes;