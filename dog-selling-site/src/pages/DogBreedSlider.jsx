import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DogBreedSlider.css';

const DogBreedSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add smooth scrolling animation on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);

    return () => {
      document.body.style.opacity = '';
      document.body.style.transition = '';
    };
  }, []);

  const handleNext = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };

  const handleBeagleClick = () => {
    navigate('/breed/beagle');
  };

  const handleGoldenRetrieverClick = () => {
    navigate('/breed/goldenretriever');
  };

  const handlePoodleClick = () => {
    navigate('/breed/poodle');
  };

  const handleLabradorClick = () => {
    navigate('/breed/labrador');
  };

  const handleGermanShepherdClick = () => {
    navigate('/breed/germanshepherd');
  };

  const handleSiberianHuskyClick = () => {
    navigate('/breed/siberianhusky');
  };
  
  const handleFrenchBullClick = () => {
    navigate('/breed/frenchbulldog');
  };

  const handleShihTzuClick = () => {
    navigate('/breed/shihtzu');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>

      <div>
        {/* Navigation Header */}
        <nav className='nav'>
          <a href="#" className="brand">
            <h1>
              <sup>Paws</sup>
              <b className="ampasend">&</b>
              <sub className="accent">Claws</sub>
            </h1>
          </a>
          <div className="nav-links">
            <button onClick={handleHomeClick} className="nav-link">
              <i className="fa-solid fa-arrow-left"></i>
              Back to home
            </button>
          </div>
        </nav>

        {/* Main Slider Content */}
        <div className="slider-wrapper">
          <div className="container">
            <div className="slide">
              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/BeagleFront2.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Beagle</div>
                  <div className="des">
                    "Beagles are friendly, curious, and energetic dogs known for their excellent sense of smell and gentle temperament."
                  </div>
                  <button onClick={handleBeagleClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/GoldenRetriverFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Golden Retriever</div>
                  <div className="des">
                    "Golden Retrievers are intelligent, loyal, and friendly dogs, perfect for families and known for their gentle nature."
                  </div>
                  <button onClick={handleGoldenRetrieverClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/siberianHuskyFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Siberian Husky</div>
                  <div className="des">
                    "Siberian Huskies are energetic, intelligent, and independent dogs, admired for their striking looks and endurance."
                  </div>
                  <button onClick={handleSiberianHuskyClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/labradorRetriverFront2.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Labrador Retriever</div>
                  <div className="des">
                    "Labrador Retrievers are friendly, outgoing, and eager-to-please dogs, making them one of the most popular family pets."
                  </div>
                  <button onClick={handleLabradorClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/germanShepherdFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">German Shepherd</div>
                  <div className="des">
                    "German Shepherds are loyal, courageous, and highly intelligent dogs, widely respected for their versatility and working abilities."
                  </div>
                  <button onClick={handleGermanShepherdClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/poodleFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Poodle</div>
                  <div className="des">
                    "Poodles are intelligent, elegant, and highly trainable dogs, known for their hypoallergenic coats and lively personalities."
                  </div>
                  <button onClick={handlePoodleClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/frenchBullDogFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">French Bulldog</div>
                  <div className="des">
                    "French Bulldogs are affectionate, playful, and easygoing companions known for their charming personalities and signature bat ears."
                  </div>
                  <button onClick={handleFrenchBullClick}>See More</button>
                </div>
              </div>

              <div
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/shihtzuFront1.jpg')`
                }}
              >
                <div className="content">
                  <div className="name">Shih Tzu</div>
                  <div className="des">
                    "Shih Tzus are affectionate, lively, and charming lap dogs, cherished for their luxurious coats and friendly demeanor."
                  </div>
                  <button onClick={handleShihTzuClick}>See More</button>
                </div>
              </div>
            </div>

            <div className="button">
              <button className="prev" onClick={handlePrev}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="next" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogBreedSlider;