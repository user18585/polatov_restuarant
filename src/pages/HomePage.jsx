import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import MenuPreview from '../components/MenuPreview';
import SpecialOffers from '../components/SpecialOffers';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-white text-2xl font-playfair font-bold">Polatov Restaurant</h2>
            <p className="text-secondary mt-2">Tayyorlanmoqda...</p>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <MenuPreview />
          <SpecialOffers />
          <Gallery />
          <Testimonials />
          <Reservation />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;