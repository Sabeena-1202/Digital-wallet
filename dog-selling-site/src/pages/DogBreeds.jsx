import React, { useState, useEffect } from 'react';

const DogBreeds = ({ onNavigateHome, onNavigateBack, breedParam }) => {
  // Expanded dog data for multiple breeds
  const dogBreeds = {
    beagle: {
      title: "Beagle Dogs",
      description: "Friendly, curious, and energetic dogs known for their excellent sense of smell and gentle temperament. Perfect companions for families and active individuals.",
      dogs: [
        {
          id: 1,
          name: "Charlie",
          age: "2 months",
          gender: "male",
          weight: "15 lbs",
          color: "Tri-color",
          price: "$800",
          image: "../images/beagle-pup2.jpg",
          vaccinated: true,
          trained: false,
          category: "puppy"
        },
        {
          id: 2,
          name: "Bella",
          age: "6 months",
          gender: "female",
          weight: "22 lbs",
          color: "Lemon & White",
          price: "$950",
          image: "../images/6month-beagle.jpg",
          vaccinated: true,
          trained: true,
          category: "puppy"
        },
        {
          id: 3,
          name: "Max",
          age: "8 months",
          gender: "male",
          weight: "12 lbs",
          color: "Red & White",
          price: "$750",
          image: "../images/8month-beagle.jpg",
          vaccinated: true,
          trained: false,
          category: "puppy"
                    
        },
        {
        id: 4,
        name: "Luna",
        age: "1.5 years",
        gender: "female",
        weight: "25 lbs",
        color: "Tri-color",
        price: "$1100",
        image: "../images/1.5 yrs-beagle.jpg",
        vaccinated: true,
        trained: true,
        category: "young"
        },
        {
        id: 5,
        name: "Rocky",
        age: "2 years",
        gender: "male",
        weight: "28 lbs",
        color: "Brown & White",
        price: "$1000",
        image: "../images/2years-beagle.jpg",
        vaccinated: true,
        trained: true,
        category: "adult"
        },
        {
        id: 6,
        name: "Daisy",
        age: "3 years",
        gender: "female",
        weight: "18 lbs",
        color: "Lemon & White",
        price: "$850",
        image: "../images/3years-beagle.jpg",
        vaccinated: true,
        trained: false,
        category: "adult"
        }
        // ... more beagle dogs
      ]
    },
    labrador: {
      title: "Labrador Retrievers",
      description: "Loyal, outgoing, and active companions who have more than enough affection to go around for a family looking for a medium to large dog.",
      dogs: [
        {
          id: 101,
          name: "Buddy",
          age: "3 days",
          gender: "male",
          weight: "18 lbs",
          color: "Golden",
          price: "$1200",
          image: "../images/labrador-3days.jpeg",
          vaccinated: true,
          trained: false,
          category: "puppy"
        },
        {
          id: 102,
          name: "Molly",
          age: "1 week",
          gender: "female",
          weight: "55 lbs",
          color: "Chocolate",
          price: "$1400",
          image: "../images/labrador-1week.jpeg",
          vaccinated: true,
          trained: true,
          category: "puppy"
        },
        {
      id: 103,
      name: "Jack",
      age: "3 months",
      gender: "male",
      weight: "30 lbs",
      color: "Black",
      price: "$1000",
      image: "../images/labrador-3months.jpeg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 104,
      name: "Lily",
      age: "7 months",
      gender: "female",
      weight: "60 lbs",
      color: "Yellow",
      price: "$1450",
      image: "../images/labrador-7months.jpeg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 105,
      name: "Toby",
      age: "1 year",
      gender: "male",
      weight: "70 lbs",
      color: "Fox Red",
      price: "$1350",
      image: "../images/labrador-1yr.jpeg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 106,
      name: "Daisy",
      age: "2 years",
      gender: "female",
      weight: "35 lbs",
      color: "White",
      price: "$1250",
      image: "../images/labrador-2yrs.jpg",
      vaccinated: true,
      trained: true,
      category: "adult"
    }
        // ... more labrador dogs
      ]
    },
    goldenretriever: {
      title: "Golden Retrievers",
      description: "Intelligent, friendly, and devoted dogs that are serious workers at hunting and field work, as well as loving family companions.",
      dogs: [
        {
          id: 201,
          name: "Cooper",
          age: "3 week",
          gender: "male",
          weight: "25 lbs",
          color: "Golden",
          price: "$1500",
          image: "../images/goldenRetriever-3week.jpeg",
          vaccinated: true,
          trained: false,
          category: "puppy"
        },
        {
          id: 202,
          name: "Sadie",
          age: "2 years",
          gender: "female",
          weight: "60 lbs",
          color: "Light Golden",
          price: "$1300",
          image: "../images/goldenRetriever-2yr.jpeg",
          vaccinated: true,
          trained: true,
          category: "adult"
        },
        {
      id: 203,
      name: "Bailey",
      age: "5 months",
      gender: "female",
      weight: "30 lbs",
      color: "Cream",
      price: "$1350",
      image: "../images/goldenRetriver-pup5.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 204,
      name: "Leo",
      age: "3 years",
      gender: "male",
      weight: "70 lbs",
      color: "Dark Golden",
      price: "$1400",
      image: "../images/goldenRetriever-3yrs.jpg",
      vaccinated: true,
      trained: true,
      category: "adult"
    },
    {
      id: 205,
      name: "Ruby",
      age: "6 months",
      gender: "female",
      weight: "35 lbs",
      color: "Golden",
      price: "$1450",
      image: "../images/goldenRETRIVER-PUP4.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 206,
      name: "Finn",
      age: "1.5 years",
      gender: "male",
      weight: "65 lbs",
      color: "Light Golden",
      price: "$1250",
      image: "../images/goldenRetriever-1yr.jpg",
      vaccinated: true,
      trained: true,
      category: "young"
    }
        // ... more golden retriever dogs
      ]
    },
    poodle: {
      title: "Poodles",
      description: "Exceptional intelligence and trainability make Poodles highly adaptable and excellent family dogs. They come in three sizes but all are energetic and need regular exercise.",
      dogs: [
        {
          id: 301,
          name: "Princess",
          age: "5 months",
          gender: "female",
          weight: "12 lbs",
          color: "White",
          price: "$1100",
          image: "../images/poodle-5months.jpeg",
          vaccinated: true,
          trained: true,
          category: "puppy"
        },
        {
          id: 302,
          name: "Duke",
          age: "3 years",
          gender: "male",
          weight: "45 lbs",
          color: "Black",
          price: "$900",
          image: "../images/poodle-3yrs.jpg",
          vaccinated: true,
          trained: true,
          category: "adult"
        },
        {
      id: 303,
      name: "Chloe",
      age: "4 months",
      gender: "female",
      weight: "10 lbs",
      color: "Apricot",
      price: "$1000",
      image: "../images/poodle-4month.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 304,
      name: "Oliver",
      age: "2.5 years",
      gender: "male",
      weight: "50 lbs",
      color: "Silver",
      price: "$950",
      image: "../images/poodle-2.5yr.jpeg",
      vaccinated: true,
      trained: true,
      category: "adult"
    },
    {
      id: 305,
      name: "Lola",
      age: "1 year",
      gender: "female",
      weight: "18 lbs",
      color: "Cream",
      price: "$1050",
      image: "../images/poodle-1yr.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 306,
      name: "Milo",
      age: "2 week",
      gender: "male",
      weight: "15 lbs",
      color: "Brown",
      price: "$1150",
      image: "../images/poodle-2week.jpeg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    }
        // ... more poodle dogs
      ]
    },
germanshepherd: {
  title: "German Shepherds",
  description: "Loyal, courageous, and highly intelligent dogs, widely respected for their versatility and working abilities.",
  dogs: [
    {
      id: 401,
      name: "Rex",
      age: "3 weeks",
      gender: "male",
      weight: "35 lbs",
      color: "Black & Tan",
      price: "$1800",
      image: "../images/german-3week.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 402,
      name: "Luna",
      age: "1 month",
      gender: "female",
      weight: "65 lbs",
      color: "Sable",
      price: "$1600",
      image: "../images/german-1month.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 403,
      name: "Zeus",
      age: "2 months",
      gender: "male",
      weight: "30 lbs",
      color: "Black",
      price: "$1700",
      image: "../images/german-2months.png",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 404,
      name: "Nala",
      age: "5 months",
      gender: "female",
      weight: "70 lbs",
      color: "Bi-color",
      price: "$1650",
      image: "../images/german-5months.jpeg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 405,
      name: "Axel",
      age: "6 months",
      gender: "male",
      weight: "60 lbs",
      color: "Black & Red",
      price: "$1500",
      image: "../images/german-6months.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 406,
      name: "Zara",
      age: "8 months",
      gender: "female",
      weight: "40 lbs",
      color: "Tan",
      price: "$1550",
      image: "../images/german-8months.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    }
  ]
},

siberianhusky: {
  title: "Siberian Huskies",
  description: "Energetic, intelligent, and independent dogs, admired for their striking looks and endurance.",
  dogs: [
    {
      id: 501,
      name: "Storm",
      age: "4 months",
      gender: "male",
      weight: "20 lbs",
      color: "Gray & White",
      price: "$1400",
      image: "../images/husky-4month.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 502,
      name: "Nova",
      age: "2 months",
      gender: "female",
      weight: "50 lbs",
      color: "Black & White",
      price: "$1200",
      image: "../images/husky-2month.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 503,
      name: "Blaze",
      age: "3 week",
      gender: "male",
      weight: "25 lbs",
      color: "Red & White",
      price: "$1350",
      image: "../images/husky-3week.png",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 504,
      name: "Skye",
      age: "2 years",
      gender: "female",
      weight: "48 lbs",
      color: "Agouti",
      price: "$1250",
      image: "../images/husky-2yrs.jpeg",
      vaccinated: true,
      trained: true,
      category: "adult"
    },
    {
      id: 505,
      name: "Titan",
      age: "5 months",
      gender: "male",
      weight: "45 lbs",
      color: "Black & Gray",
      price: "$1300",
      image: "../images/husky-5months.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 506,
      name: "Luna",
      age: "1 week",
      gender: "female",
      weight: "28 lbs",
      color: "White",
      price: "$1450",
      image: "../images/husky-1week.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    }
  ]
},

frenchbulldog: {
  title: "French Bulldogs",
  description: "Affectionate, playful, and easygoing companions known for their charming personalities and signature bat ears.",
  dogs: [
    {
      id: 601,
      name: "Pierre",
      age: "4 days",
      gender: "male",
      weight: "8 lbs",
      color: "Fawn",
      price: "$2200",
      image: "../images/frenchBull-4days.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 602,
      name: "Coco",
      age: "5 days",
      gender: "female",
      weight: "22 lbs",
      color: "Brindle",
      price: "$2000",
      image: "../images/frenchBull-5days.jpeg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 603,
      name: "Louie",
      age: "1 month",
      gender: "male",
      weight: "10 lbs",
      color: "Cream",
      price: "$2100",
      image: "../images/frenchBull-1month.jpeg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 604,
      name: "Bella",
      age: "2 months",
      gender: "female",
      weight: "24 lbs",
      color: "Blue",
      price: "$2300",
      image: "../images/frenchBull-2months.jpeg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 605,
      name: "Marcel",
      age: "8 months",
      gender: "male",
      weight: "26 lbs",
      color: "Pied",
      price: "$2150",
      image: "../images/frenchBull-8months.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 606,
      name: "Daisy",
      age: "1 year",
      gender: "female",
      weight: "12 lbs",
      color: "Lilac",
      price: "$2250",
      image: "../images/frenchBull-1yr.jpeg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    }
  ]
},

shihtzu: {
  title: "Shih Tzus",
  description: "Affectionate, lively, and charming lap dogs, cherished for their luxurious coats and friendly demeanor.",
  dogs: [
    {
      id: 701,
      name: "Mochi",
      age: "2 week",
      gender: "female",
      weight: "6 lbs",
      color: "Gold & White",
      price: "$1300",
      image: "../images/shihTzu-pup5.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 702,
      name: "Biscuit",
      age: "2 weeks",
      gender: "male",
      weight: "14 lbs",
      color: "Black & White",
      price: "$1100",
      image: "../images/shihTzu-pup4.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 703,
      name: "Lily",
      age: "3 weeks",
      gender: "female",
      weight: "5 lbs",
      color: "Liver",
      price: "$1250",
      image: "../images/shihTzu-pup6.jpg",
      vaccinated: true,
      trained: false,
      category: "puppy"
    },
    {
      id: 704,
      name: "Oreo",
      age: "3 months",
      gender: "male",
      weight: "13 lbs",
      color: "White & Gray",
      price: "$1150",
      image: "../images/shihTzu-pup2.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 705,
      name: "Rosie",
      age: "1 year",
      gender: "female",
      weight: "11 lbs",
      color: "Red & White",
      price: "$1200",
      image: "../images/shihTzu-pup3.jpg",
      vaccinated: true,
      trained: true,
      category: "puppy"
    },
    {
      id: 706,
      name: "Teddy",
      age: "2.5 years",
      gender: "female",
      weight: "7 lbs",
      color: "Brindle",
      price: "$1275",
      image: "../images/ShihTzu-pup1.jpg",
      vaccinated: true,
      trained: false,
      category: "adult"
    }
  ]
}
  };

  const [currentBreed, setCurrentBreed] = useState('beagle');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [breedData, setBreedData] = useState(dogBreeds.beagle);

  // Helper function to parse age and convert to years
  const parseAgeToYears = (ageString) => {
    const ageStr = ageString.toLowerCase();
    
    if (ageStr.includes('day')) {
      const days = parseFloat(ageStr.match(/\d+/)[0]);
      return days / 365;
    } else if (ageStr.includes('week')) {
      const weeks = parseFloat(ageStr.match(/\d+/)[0]);
      return weeks / 52;
    } else if (ageStr.includes('month')) {
      const months = parseFloat(ageStr.match(/\d+/)[0]);
      return months / 12;
    } else if (ageStr.includes('year')) {
      const years = parseFloat(ageStr.match(/[\d.]+/)[0]);
      return years;
    }
    
    return 0;
  };

  // Helper function to categorize dogs by actual age
  const categorizeByAge = (ageInYears) => {
    if (ageInYears <= 1) {
      return 'puppy';
    } else if (ageInYears > 1 && ageInYears <= 2) {
      return 'young';
    } else {
      return 'adult';
    }
  };

  // Get breed from prop or use default
  useEffect(() => {
    if (breedParam && dogBreeds[breedParam]) {
      setCurrentBreed(breedParam);
      setBreedData(dogBreeds[breedParam]);
    } else {
      // Default to beagle if breed not found
      setCurrentBreed('beagle');
      setBreedData(dogBreeds.beagle);
    }
  }, [breedParam]);

  // Load and display dogs
  const loadDogs = () => {
    setLoading(true);
    
    setTimeout(() => {
      let dogs = breedData.dogs;

      if (currentFilter !== 'all') {
        dogs = breedData.dogs.filter(dog => {
          if (currentFilter === 'male' || currentFilter === 'female') {
            return dog.gender === currentFilter;
          } else {
            // For age-based filtering, use actual age calculation
            const ageInYears = parseAgeToYears(dog.age);
            const ageCategory = categorizeByAge(ageInYears);
            return ageCategory === currentFilter;
          }
        });
      }

      setFilteredDogs(dogs);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadDogs();
  }, [currentFilter, breedData]);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const takeMeHome = (dogId, event) => {
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-home"></i> Processing...';
    button.style.background = '#28a745';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`Thank you for choosing to take me home! We'll contact you soon to complete the process and arrange for you to bring your new companion home.`);
      button.innerHTML = '<i class="fas fa-check"></i> Contacted!';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#7D62B0';
        button.disabled = false;
      }, 3000);
    }, 2000);
  };

  const viewDetails = (dogId) => {
    const dog = breedData.dogs.find(d => d.id === dogId);
    
    alert(`${dog.name} Details:\n\nAge: ${dog.age}\nWeight: ${dog.weight}\nColor: ${dog.color}\nVaccinated: ${dog.vaccinated ? 'Yes' : 'No'}\nTrained: ${dog.trained ? 'Yes' : 'No'}\nPrice: ${dog.price}\n\nContact us for more information!`);
  };

  const DogCard = ({ dog, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    return (
      <div 
        className="dog-card" 
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {imageError ? (
          <div 
            className="dog-image"
            style={{
              background: 'linear-gradient(45deg, #7D62B0, #d5c8ef)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}
          >
            🐕
          </div>
        ) : (
          <img
            className={`dog-image ${!imageLoaded ? 'loading' : ''}`}
            src={dog.image}
            alt={dog.name}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        <div className="dog-info">
          <div className="dog-name">
            {dog.name}
            <span className={`gender-icon ${dog.gender}`}>
              <i className={`fas fa-${dog.gender === 'male' ? 'mars' : 'venus'}`}></i>
            </span>
          </div>
          <div className="dog-details">
            <div className="detail-item">
              <i className="fas fa-birthday-cake"></i>
              <span>{dog.age}</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-weight"></i>
              <span>{dog.weight}</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-palette"></i>
              <span>{dog.color}</span>
            </div>
            <div className="detail-item">
              <i className={`fas fa-${dog.vaccinated ? 'shield-alt' : 'exclamation-triangle'}`}></i>
              <span>{dog.vaccinated ? 'Vaccinated' : 'Not Vaccinated'}</span>
            </div>
          </div>
          <div className="price">{dog.price}</div>
          <div className="dog-actions">
            <button 
              className="btn-primary" 
              onClick={(e) => takeMeHome(dog.id, e)}
            >
              <i className="fas fa-home"></i> Take Me Home
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => viewDetails(dog.id)}
            >
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Nunito Sans", sans-serif;
        }

        body {
          font-size: 1rem;
          font-weight: 400;
          background: linear-gradient(135deg, #f3e2d4 0%, #e8d5c4 100%);
          min-height: 100vh;
        }

        /* Navigation */
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
          cursor: pointer;
        }

        .brand h1 {
          font-size: 32px;
          font-weight: 900;
          color: black;
        }

        .ampasend {
          color: indigo;
        }

        .accent {
          color: black;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #7D62B0;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }

        .back-btn:hover {
          background: #6B4F9F;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(125, 98, 176, 0.3);
        }

        /* Header Section */
        .breed-header {
          margin-top: 100px;
          padding: 60px 50px;
          text-align: center;
          background: linear-gradient(135deg, #d5c8ef 0%, #c8b8e8 100%);
          position: relative;
          overflow: hidden;
        }

        .breed-header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .breed-header h1 {
          font-size: 4rem;
          font-weight: 900;
          color: #333;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          animation: slideInFromTop 1s ease-out;
        }

        .breed-header p {
          font-size: 1.4rem;
          color: #555;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          animation: slideInFromBottom 1s ease-out 0.3s both;
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Filter Section */
        .filter-section {
          padding: 40px 50px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          background: white;
          border: 2px solid #7D62B0;
          color: #7D62B0;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #7D62B0;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .filter-btn:hover::before {
          left: 0;
        }

        .filter-btn:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(125, 98, 176, 0.3);
        }

        .filter-btn.active {
          background: #7D62B0;
          color: white;
        }

        /* Dogs Grid */
        .dogs-container {
          padding: 0 50px 100px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px,350px));
          gap: 30px;
          margin-top: 40px;
          justify-content: center; 
        }

        .dog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 0.6s ease forwards;
          position: relative;
        }

        .dog-card:nth-child(1) { animation-delay: 0.1s; }
        .dog-card:nth-child(2) { animation-delay: 0.2s; }
        .dog-card:nth-child(3) { animation-delay: 0.3s; }
        .dog-card:nth-child(4) { animation-delay: 0.4s; }
        .dog-card:nth-child(5) { animation-delay: 0.5s; }
        .dog-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .dog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #7D62B0, #d5c8ef);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .dog-card:hover::before {
          transform: scaleX(1);
        }

        .dog-image {
          height: 250px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
          display: block;
        }

        .dog-card:hover .dog-image {
          transform: scale(1.05);
        }

        .dog-image.loading {
          background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                      linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                      linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          animation: patternMove 1s linear infinite;
        }

        @keyframes patternMove {
          0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
          100% { background-position: 20px 20px, 20px 30px, 30px 10px, 10px 20px; }
        }

        .dog-info {
          padding: 25px;
        }

        .dog-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gender-icon {
          padding: 5px 8px;
          border-radius: 50%;
          font-size: 0.8rem;
        }

        .male {
          background: #e3f2fd;
          color: #1976d2;
        }

        .female {
          background: #fce4ec;
          color: #c2185b;
        }

        .dog-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 15px 0;
          font-size: 0.9rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
        }

        .detail-item i {
          color: #7D62B0;
          width: 16px;
        }

        .price {
          font-size: 1.8rem;
          font-weight: 900;
          color: #7D62B0;
          margin: 15px 0;
        }

        .dog-actions {
          display: flex;
          gap: 10px;
        }

        .btn-primary {
          flex: 1;
          padding: 12px;
          background: #7D62B0;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary:hover {
          background: #6B4F9F;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(125, 98, 176, 0.3);
        }

        .btn-secondary {
          padding: 12px 16px;
          background: #f3e2d4;
          color: #7D62B0;
          border: 2px solid #7D62B0;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #7D62B0;
          color: white;
          transform: translateY(-2px);
        }

        /* Loading Animation */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3e2d4;
          border-top: 5px solid #7D62B0;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: #666;
          grid-column: 1 / -1;
        }

        .no-results i {
          font-size: 4rem;
          color: #7D62B0;
          margin-bottom: 20px;
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .no-results p {
          font-size: 1.1rem;
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .dogs-container {
            padding: 0 20px 100px;
          }

          .dogs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .breed-header {
            padding: 40px 20px;
          }

          .breed-header h1 {
            font-size: 2.5rem;
          }

          .filter-section {
            padding: 20px;
          }

          nav {
            padding: 15px 20px;
          }
        }
      `}</style>
      
      <nav>
        <div 
          className="brand" 
          onClick={() => onNavigateHome && onNavigateHome()}
        >
          <h1><sup>Paws</sup><b className="ampasend">&</b><sub className="accent">Claws</sub></h1>
        </div>
        <button 
          className="back-btn" 
          onClick={() => onNavigateBack && onNavigateBack()}
        >
          <i className="fas fa-arrow-left"></i>
          Back to Breeds
        </button>
      </nav>

      <section className="breed-header">
        <h1>{breedData.title}</h1>
        <p>{breedData.description}</p>
      </section>

      <section className="filter-section">
        <button 
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All Dogs
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'puppy' ? 'active' : ''}`}
          onClick={() => handleFilterChange('puppy')}
        >
          Puppies (0-1 year)
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'young' ? 'active' : ''}`}
          onClick={() => handleFilterChange('young')}
        >
          Young (1-2 years)
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'adult' ? 'active' : ''}`}
          onClick={() => handleFilterChange('adult')}
        >
          Adult (2+ years)
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'male' ? 'active' : ''}`}
          onClick={() => handleFilterChange('male')}
        >
          Male
        </button>
        <button 
          className={`filter-btn ${currentFilter === 'female' ? 'active' : ''}`}
          onClick={() => handleFilterChange('female')}
        >
          Female
        </button>
      </section>

      <section className="dogs-container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="dogs-grid">
            {filteredDogs.length === 0 ? (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <h3>No Dogs Found</h3>
                <p>Try adjusting your filter to see more results.</p>
              </div>
            ) : (
              filteredDogs.map((dog, index) => (
                <DogCard key={dog.id} dog={dog} index={index} />
              ))
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default DogBreeds;