// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './pages/HomePage';
// import DogBreedSlider from './pages/DogBreedSlider';
// import './App.css';
// import DogBreeds from './pages/DogBreeds';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/pets" element={<DogBreedSlider />} />
//            <Route path="/petViews" element={<DogBreeds />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Homepage from './pages/HomePage';
import DogBreedsSlider from './pages/DogBreedSlider';
import DogBreeds from './pages/DogBreeds';
import './App.css';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/LoginPage';
import RequirementsPage from './pages/RequirementsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignupPage from './pages/Signup';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pets" element={<DogBreedsSlider />} />
          {/* <Route path="/petviews" element={<DogBreedsSlider />} /> */}
          {/* Dynamic route for individual breed pages */}
          <Route 
            path="/breed/:breedName" 
            element={<DogBreedsWrapper />} 
          />
          <Route path='/contactus' element = {<ContactUs />} />
          <Route path='/login' element = {<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path='/requirements' element = {<RequirementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper component to handle navigation and breed parameter
const DogBreedsWrapper = () => {
  const { breedName } = useParams();
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateBack = () => {
    navigate('/pets'); // or navigate(-1) to go back to previous page
  };

  return (
    <DogBreeds 
      breedParam={breedName}
      onNavigateHome={handleNavigateHome}
      onNavigateBack={handleNavigateBack}
    />
  );
};

export default App;