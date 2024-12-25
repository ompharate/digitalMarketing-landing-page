import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Potential from './components/Potential';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuotePopup from './components/QuotePopup';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      if (!isQuoteOpen && !hasShownExitIntent) {
        setIsQuoteOpen(true);
      }
    }, 30000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !isQuoteOpen && 
        !hasShownExitIntent
      ) {
        setIsQuoteOpen(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isQuoteOpen, hasShownExitIntent]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Potential />
      <Contact />
      <Footer />
      <QuotePopup 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </div>
  );
}

export default App;