import React from 'react';
import './App.css';

// Import your new industrial components
import Header from './components/Header';
import Hero from './components/Hero';
import IndustrialServices from './components/IndustrialServices';
import About from './components/About';
import ContactPortal from './components/ContactPortal';

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

        {/* 5. The Dark Contact Portal */}
        <ContactPortal />
      </main>

      <footer style={{ background: '#0a1128', color: 'white', padding: '20px', textAlign: 'center', fontSize: '12px' }}>
        <p>© 2026 Fintech Print Innovations | Premium Industrial Branding</p>
      </footer>
    </div>
  );
}

export default App;