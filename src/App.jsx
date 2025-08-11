import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import FeatureSection from './components/WhatIsWalytic';
import ChooseUs from './components/WhyChooseWalytic';
import FreePlan from './components/FreePlan';
import SendMessage from './components/SendMessage';
import { useRef, useEffect, useState } from 'react';

function HomePage() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const setHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Fixed Navbar wrapper (keeps your Navbar unchanged) */}
      <div ref={navRef} className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Content starts after navbar.
          Also expose --nav-height CSS variable so sections can offset themselves. */}
      <div style={{ marginTop: navHeight, ['--nav-height']: `${navHeight}px` }}>
        <Hero />
        <FeatureSection />
        <ChooseUs />
        <PricingSection />
        <ContactSection />
        <FaqSection />
        <Footer />
        <FreePlan />
        <SendMessage />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
