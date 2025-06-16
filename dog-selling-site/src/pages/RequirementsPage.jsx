import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequirementsPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('buyer');

  useEffect(() => {
    // Add smooth scrolling animation on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  const handleHomeClick = () =>{
    navigate('/');
  }

  const buyerRequirements = [
    {
      icon: 'fa-solid fa-id-card',
      title: 'Valid ID & Age Verification',
      description: 'Must be 18 years or older with valid government-issued ID',
      details: ['Driver\'s license or passport required', 'Proof of age (18+ years)', 'Current address verification', 'Contact information verification']
    },
    {
      icon: 'fa-solid fa-home',
      title: 'Stable Housing Situation',
      description: 'Own or rent a pet-friendly home with adequate space',
      details: ['Landlord permission if renting', 'Adequate space for dog breed/size', 'Secure yard or safe environment', 'Housing stability proof']
    },
    {
      icon: 'fa-solid fa-wallet',
      title: 'Financial Capability',
      description: 'Demonstrate ability to afford purchase price and ongoing expenses',
      details: ['Proof of income or financial stability', 'Budget for food, healthcare, supplies', 'Emergency veterinary fund', 'Understanding of lifetime costs']
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Family Agreement',
      description: 'All household members must agree to dog purchase',
      details: ['No allergies in household', 'Everyone committed to dog care', 'Children understand responsibilities', 'Lifestyle compatibility confirmed']
    },
    {
      icon: 'fa-solid fa-user-doctor',
      title: 'Veterinary Plan',
      description: 'Established plan for ongoing veterinary care',
      details: ['Local veterinarian identified', 'Understanding of vaccination needs', 'Health insurance or care budget', 'Emergency vet contact ready']
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Time & Commitment',
      description: 'Available time for training, exercise, and companionship',
      details: ['Daily exercise commitment', 'Training and socialization time', 'Long-term commitment (10-15+ years)', 'Schedule allows for dog care']
    }
  ];

  const purchaseRequirements = [
    {
      icon: 'fa-solid fa-money-bill-wave',
      title: 'Payment Terms',
      description: 'Full payment required before dog pickup',
      details: ['Cash, card, or bank transfer accepted', 'Deposit required to hold dog', 'No installment payment plans', 'Receipt provided for all payments']
    },
    {
      icon: 'fa-solid fa-file-contract',
      title: 'Purchase Agreement',
      description: 'Signed contract with terms and conditions',
      details: ['Health guarantee details', 'Return policy terms', 'Breeding rights specifications', 'Care requirements agreement']
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Health Documentation',
      description: 'Complete health records and certifications provided',
      details: ['Current vaccination records', 'Health certificate from veterinarian', 'Genetic testing results (if applicable)', 'Deworming and parasite treatment records']
    },
    {
      icon: 'fa-solid fa-calendar-check',
      title: 'Pickup Requirements',
      description: 'Scheduled pickup within agreed timeframe',
      details: ['Advance appointment required', 'Bring appropriate carrier/transport', 'Valid ID required at pickup', 'Final payment due at pickup']
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Pre-Purchase Meeting',
      description: 'Meet the dog and complete final evaluation',
      details: ['Schedule meet-and-greet session', 'Ask questions about the dog', 'Ensure good personality match', 'Final approval from both parties']
    }
  ];

  const preparationRequirements = [
    {
      icon: 'fa-solid fa-house-circle-check',
      title: 'Home Preparation',
      description: 'Dog-proof your home before pickup',
      details: ['Remove hazardous items', 'Secure fencing if applicable', 'Designate sleeping/eating areas', 'Install baby gates if needed']
    },
    {
      icon: 'fa-solid fa-shopping-basket',
      title: 'Essential Supplies',
      description: 'Purchase necessary supplies before dog arrival',
      details: ['High-quality dog food', 'Food and water bowls', 'Comfortable bed/crate', 'Collar, leash, and ID tags', 'Toys and chew items']
    },
    {
      icon: 'fa-solid fa-calendar-plus',
      title: 'Veterinary Setup',
      description: 'Schedule initial vet appointment',
      details: ['Book wellness exam within 72 hours', 'Transfer health records', 'Discuss vaccination schedule', 'Set up ongoing care plan']
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Training Preparation',
      description: 'Plan for training and socialization',
      details: ['Research training methods', 'Consider puppy/dog classes', 'Prepare household rules', 'Plan socialization activities']
    }
  ];

  const careRequirements = [
    {
      icon: 'fa-solid fa-utensils',
      title: 'Proper Nutrition',
      description: 'High-quality food appropriate for age and breed',
      details: ['Premium dog food brands', 'Age and size-appropriate portions', 'Fresh water always available', 'Avoid harmful human foods']
    },
    {
      icon: 'fa-solid fa-dumbbell',
      title: 'Regular Exercise',
      description: 'Daily physical activity and mental stimulation',
      details: ['Minimum 30-60 minutes daily', 'Breed-specific exercise needs', 'Mental enrichment activities', 'Weather-appropriate activities']
    },
    {
      icon: 'fa-solid fa-scissors',
      title: 'Grooming & Hygiene',
      description: 'Regular grooming and health maintenance',
      details: ['Regular brushing and bathing', 'Nail trimming every 2-3 weeks', 'Dental care routine', 'Ear cleaning and inspection']
    },
    {
      icon: 'fa-solid fa-stethoscope',
      title: 'Healthcare Commitment',
      description: 'Ongoing veterinary care and health monitoring',
      details: ['Annual wellness exams', 'Keep vaccinations current', 'Monthly parasite prevention', 'Monitor for health changes']
    }
  ];

  const getRequirements = () => {
    switch(selectedTab) {
      case 'buyer': return buyerRequirements;
      case 'purchase': return purchaseRequirements;
      case 'preparation': return preparationRequirements;
      case 'care': return careRequirements;
      default: return buyerRequirements;
    }
  };

  const getTabTitle = () => {
    switch(selectedTab) {
      case 'buyer': return 'Buyer Qualification Requirements';
      case 'purchase': return 'Purchase Process Requirements';
      case 'preparation': return 'Home Preparation Requirements';
      case 'care': return 'Ongoing Care Requirements';
      default: return 'Buyer Qualification Requirements';
    }
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
          background: linear-gradient(135deg, #f3e2d4 0%, #e8d5c4 100%);
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
          color:indigo;
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
          color: #333;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          padding: 12px 0;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #7D62B0;
        }

        .nav-link.active {
          color: #7D62B0;
        }

        .nav-link.back-home {
          background: #7D62B0;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
        }

        .nav-link.back-home:hover {
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
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Tab Navigation */
        .tab-navigation {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
          animation: slideInUp 0.8s ease;
        }

        .tab-nav {
          display: flex;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          flex-wrap: wrap;
          gap: 5px;
        }

        .tab-btn {
          padding: 15px 25px;
          border: none;
          background: transparent;
          color: #666;
          font-weight: 600;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(125, 98, 176, 0.3);
        }

        .tab-btn:hover:not(.active) {
          color: #7D62B0;
          background: rgba(125, 98, 176, 0.1);
        }

        /* Requirements Grid */
        .requirements-container {
          animation: fadeInUp 1s ease;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title h2 {
          font-size: 32px;
          color: #333;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .section-title p {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .requirements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .requirement-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .requirement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          flex-shrink: 0;
        }

        .card-title h3 {
          font-size: 22px;
          color: #333;
          margin-bottom: 5px;
          font-weight: 700;
        }

        .card-title p {
          color: #666;
          font-size: 16px;
          line-height: 1.4;
        }

        .card-details {
          margin-top: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          padding: 8px 0;
        }

        .detail-item:last-child {
          margin-bottom: 0;
        }

        .detail-icon {
          width: 8px;
          height: 8px;
          background: #7D62B0;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .detail-text {
          color: #555;
          font-size: 15px;
          line-height: 1.4;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #7D62B0, #9B7FC7);
          color: white;
          padding: 50px;
          border-radius: 25px;
          text-align: center;
          margin-top: 60px;
          animation: fadeInUp 1.2s ease;
        }

        .cta-section h2 {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .cta-section p {
          font-size: 18px;
          margin-bottom: 35px;
          opacity: 0.95;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .cta-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-btn.primary {
          background: white;
          color: #7D62B0;
          border-color: white;
        }

        .cta-btn.primary:hover {
          background: #f8f8f8;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .requirements-grid {
            grid-template-columns: 1fr;
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
          
          .tab-nav {
            flex-direction: column;
            width: 100%;
          }
          
          .tab-btn {
            text-align: center;
            justify-content: center;
          }
          
          .requirements-grid {
            grid-template-columns: 1fr;
          }
          
          .requirement-card {
            padding: 25px;
          }
          
          .cta-section {
            padding: 35px 25px;
          }
          
          .cta-section h2 {
            font-size: 28px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
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
            <div className="nav-link back-home" onClick={handleHomeClick}>
              <i className="fa-solid fa-arrow-left"></i> Back to Home
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          {/* Page Header */}
          <div className="page-header">
            <h1>Dog Purchase Requirements</h1>
            <p>We want to ensure every dog finds the perfect forever home. Please review our requirements carefully to make sure you're fully prepared for the wonderful journey of dog ownership.</p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <div className="tab-nav">
              <button 
                className={`tab-btn ${selectedTab === 'buyer' ? 'active' : ''}`}
                onClick={() => setSelectedTab('buyer')}
              >
                <i className="fa-solid fa-user-check"></i> Buyer Requirements
              </button>
              <button 
                className={`tab-btn ${selectedTab === 'purchase' ? 'active' : ''}`}
                onClick={() => setSelectedTab('purchase')}
              >
                <i className="fa-solid fa-shopping-cart"></i> Purchase Process
              </button>
              <button 
                className={`tab-btn ${selectedTab === 'preparation' ? 'active' : ''}`}
                onClick={() => setSelectedTab('preparation')}
              >
                <i className="fa-solid fa-house-circle-check"></i> Home Preparation
              </button>
              <button 
                className={`tab-btn ${selectedTab === 'care' ? 'active' : ''}`}
                onClick={() => setSelectedTab('care')}
              >
                <i className="fa-solid fa-heart"></i> Ongoing Care
              </button>
            </div>
          </div>

          {/* Requirements Container */}
          <div className="requirements-container">
            <div className="section-title">
              <h2>{getTabTitle()}</h2>
              <p>
                {selectedTab === 'buyer' && 'Essential qualifications and preparations needed before purchasing a dog from us.'}
                {selectedTab === 'purchase' && 'Steps and documentation required to complete your dog purchase.'}
                {selectedTab === 'preparation' && 'Important preparations to make your home ready for your new dog.'}
                {selectedTab === 'care' && 'Ongoing responsibilities to ensure your dog lives a happy, healthy life.'}
              </p>
            </div>
            
            <div className="requirements-grid">
              {getRequirements().map((requirement, index) => (
                <div key={index} className="requirement-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className={requirement.icon}></i>
                    </div>
                    <div className="card-title">
                      <h3>{requirement.title}</h3>
                      <p>{requirement.description}</p>
                    </div>
                  </div>
                  <div className="card-details">
                    {requirement.details.map((detail, idx) => (
                      <div key={idx} className="detail-item">
                        <div className="detail-icon"></div>
                        <div className="detail-text">{detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Ready to Find Your Perfect Dog?</h2>
            <p>If you meet all the requirements and are ready to provide a loving home, we'd love to help you find your perfect companion!</p>
            <div className="cta-buttons">
              <div className="cta-btn primary" onClick={() => navigate('/pets')}>
                <i className="fa-solid fa-search"></i>
                Browse Available Dogs
              </div>
              <div className="cta-btn" onClick={() => navigate('/contact')}>
                <i className="fa-solid fa-comments"></i>
                Ask Questions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementsPage;