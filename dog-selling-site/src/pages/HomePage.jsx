
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/MainQuotes';
import PetsSection from '../components/PetsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/footer';
import '../styles/HomePage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <PetsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Homepage;