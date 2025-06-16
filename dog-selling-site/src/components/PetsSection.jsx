import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PetsSection.css';

const PetsSection = () => {
  const navigate = useNavigate();

  const pets = [
    {
      id: 1,
      name: 'Beagle',
      image: '/images/beagle-pup1.jpg',
      alt: 'beagleImg'
    },
    {
      id: 2,
      name: 'Golden Retriever',
      image: '/images/goldenRetriver-pup5.jpg',
      alt: 'goldenRetrieverImg'
    },
    {
      id: 3,
      name: 'Siberian Husky',
      image: '/images/husky-pup1.jpg',
      alt: 'huskyImg'
    }
  ];

  const handleExploreMore = () => {
    // Navigate to pets section page using React Router
    navigate('/pets');
  };

  return (
    <section className="pets" id="pets">
      <div className="pets-headlines">
        <i className="fa-solid fa-paw"></i>
        <h1>Discover Your Spirit Companions</h1>
      </div>
      
      <div className="pets-collection">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-items">
            <img src={pet.image} alt={pet.alt} />
            <h3>{pet.name}</h3>
          </div>
        ))}
      </div>
      
      <button className="btn-3 btn-pets" onClick={handleExploreMore}>
        <p>Explore Further</p>
        <i className="fa-solid fa-arrow-right-long"></i>
      </button>
    </section>
  );
};

export default PetsSection;