import React from 'react';
import './HomePage.css';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import FeaturedActivities from './FeaturedActivities';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <main className="main-content">
        <HeroSection />
        <FeaturesSection />
        <FeaturedActivities />
      </main>
    </div>
  );
};

export default HomePage;
