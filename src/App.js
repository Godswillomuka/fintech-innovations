import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import IndustrialServices from './components/IndustrialServices';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* 1. The Glassmorphism Navigation */}
      <Header />

      <main>
        {/* 2. The Massive Hero Section */}
        <Hero />

        {/* 3. about us*/}
        <About />

        {/* 4. The Capability Grid */}
        <IndustrialServices />

        {/* 5. The Portfolio Showcase */}
        <Portfolio />

        {/* 6. The Dark Contact Portal */}
        <Contact />
      </main>

      {/* 7. The Massive Footer */}
      <Footer />
      
    </div>
  );
}

export default App;