import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Features from './components/Features';
import FreeOffers from './components/FreeOffers';
import FeatureGrid from './components/FeatureGrid';
import SocialMap from './components/SocialMap';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Custom AOS-style Scroll Animation Engine using Intersection Observer
    const animatedElements = document.querySelectorAll('.aos-init');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      // Sort visible elements by viewport position (top-to-bottom, left-to-right) for logical staggering
      visibleEntries.sort((a, b) => {
        const rectA = a.target.getBoundingClientRect();
        const rectB = b.target.getBoundingClientRect();
        return rectA.top - rectB.top || rectA.left - rectB.left;
      });

      visibleEntries.forEach((entry, index) => {
        const element = entry.target;
        setTimeout(() => {
          element.classList.add('aos-animate');
        }, index * 120); // 120ms stagger delay
        
        observer.unobserve(element);
      });
    }, observerOptions);

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="smooth-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Features />
        <FreeOffers />
        <FeatureGrid />
        <SocialMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
