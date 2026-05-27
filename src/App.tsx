import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheEvent from './components/TheEvent';
import EvidenceSection from './components/EvidenceSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      
      <TheEvent />
      <EvidenceSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
