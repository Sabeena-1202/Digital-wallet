import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DogBreedSlider.css';

const DogBreedSlider = () => {
    const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const dogBreeds = [
    {
      name: "Beagle",
      description: "Beagles are friendly, curious, and energetic dogs known for their excellent sense of smell and gentle temperament.",
      image: "/images/BeagleFront2.jpg"
    },
    {
      name: "Golden Retriever",
      description: "Golden Retrievers are intelligent, loyal, and friendly dogs, perfect for families and known for their gentle nature.",
      image: "/images/GoldenRetriverFront1.jpg"
    },
    {
      name: "Siberian Husky",
      description: "Siberian Huskies are energetic, intelligent, and independent dogs, admired for their striking looks and endurance.",
      image: "/images/siberianHuskyFront1.jpg"
    },
    {
      name: "Labrador Retriever",
      description: "Labrador Retrievers are friendly, outgoing, and eager-to-please dogs, making them one of the most popular family pets.",
      image: "/images/labradorRetriverFront2.jpg"
    },
    {
      name: "German Shepherd",
      description: "German Shepherds are loyal, courageous, and highly intelligent dogs, widely respected for their versatility and working abilities.",
      image: "/images/germanShepherdFront1.jpg"
    },
    {
      name: "Poodle",
      description: "Poodles are intelligent, elegant, and highly trainable dogs, known for their hypoallergenic coats and lively personalities.",
      image: "/images/poodleFront1.jpg"
    },
    {
      name: "French Bulldog",
      description: "French Bulldogs are affectionate, playful, and easygoing companions known for their charming personalities and signature bat ears.",
      image: "/images/frenchBullDogFront1.jpg"
    },
    {
      name: "Shih Tzu",
      description: "Shih Tzus are affectionate, lively, and charming lap dogs, cherished for their luxurious coats and friendly demeanor.",
      image: "/images/shihtzuFront1.jpg"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // This mimics your original JavaScript logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dogBreeds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dogBreeds.length) % dogBreeds.length);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  const handleSeeMore = (breed) => {
    alert(`Learn more about ${breed.name}!\n\n${breed.description}`);
  };

  // Get the ordered array based on current slide (mimics DOM manipulation)
  const getOrderedBreeds = () => {
    const ordered = [];
    for (let i = 0; i < dogBreeds.length; i++) {
      const index = (currentSlide + i) % dogBreeds.length;
      ordered.push(dogBreeds[index]);
    }
    return ordered;
  };

  const orderedBreeds = getOrderedBreeds();

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>

      {/* Navigation Header */}
      <nav className="nav">
        <a href="#" className="brand">
          <h1>
            <sup>Paws</sup>
            <b className="ampersand">&</b>
            <sub className="accent">Claws</sub>
          </h1>
        </a>
        <div className="nav-links">
          <button className="nav-link" onClick={handleBackHome}>
            ← Back to home
          </button>
        </div>
      </nav>

      {/* Main Slider Content */}
      <div className="slider-wrapper">
        <div className="container">
          <div className="slide">
            {orderedBreeds.map((breed, index) => (
              <div 
                key={`${breed.name}-${currentSlide}-${index}`}
                className="item"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${breed.image})`
                }}
              >
                <div className="content">
                  <div className="name">{breed.name}</div>
                  <div className="description">"{breed.description}"</div>
                  <button 
                    className="see-more-btn"
                    onClick={() => handleSeeMore(breed)}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="controls">
            <button className="control-btn" onClick={prevSlide}>
              ←
            </button>
            <button className="control-btn" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogBreedSlider;