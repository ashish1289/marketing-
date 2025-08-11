
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import FeatureSection from './components/WhatIsWalytic'
import ChooseUs from './components/WhyChooseWalytic'
import FreePlan from './components/FreePlan'
import SendMessage from './components/SendMessage'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <FeatureSection />
      <ChooseUs />
      <PricingSection />
      <ContactSection />
      <FaqSection />
      <Footer />    
      <FreePlan/>
      <SendMessage/>

    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     
    </Routes>
  );
}

export default App
