import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Background from './components/Background';
import Navigation from './components/Navigation';
import SlideControls from './components/SlideControls';
import AIChatbot from './components/AIChatbot';

// Import sections
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Theory from './components/Theory';
import Application from './components/Application';
import Solution from './components/Solution';
import Conclusion from './components/Conclusion';

const slides = [
  { id: 'hero', Component: Hero },
  { id: 'intro', Component: Introduction },
  { id: 'theory', Component: Theory },
  { id: 'app', Component: Application },
  { id: 'solution', Component: Solution },
  { id: 'conclusion', Component: Conclusion }
];

export default function App() {
  const [viewMode, setViewMode] = useState('scroll'); // 'scroll' or 'slide'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Set active section on scroll
  useEffect(() => {
    if (viewMode === 'slide') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const slide of slides) {
        const element = document.getElementById(slide.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(slide.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Track slide transition direction
  const handleSetCurrentSlide = (newIndex) => {
    if (newIndex > currentSlide) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentSlide(newIndex);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Keyboard and arrow keys navigation logic inside SlideControls, 
  // but let's toggle body overflow depending on viewMode
  useEffect(() => {
    if (viewMode === 'slide') {
      document.body.style.overflow = 'hidden';
      // Align slide index when changing view modes
      const activeIdx = slides.findIndex((s) => s.id === activeSection);
      if (activeIdx !== -1) {
        setCurrentSlide(activeIdx);
      }
    } else {
      document.body.style.overflow = 'auto';
      // Align scroll position when leaving slide mode
      setTimeout(() => {
        scrollToSection(slides[currentSlide].id);
      }, 100);
    }
  }, [viewMode]);

  // Animation variants for slide transition
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const ActiveComponent = slides[currentSlide].Component;

  return (
    <div className="relative min-h-screen text-[#F5F5F7] antialiased">
      {/* Dynamic Background Particle System */}
      <Background />

      {/* Global Header Navigation */}
      <Navigation
        viewMode={viewMode}
        setViewMode={setViewMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentSlide={currentSlide}
        setCurrentSlide={handleSetCurrentSlide}
      />

      {/* Content Rendering depending on viewMode */}
      <div className={`${viewMode === 'slide' ? 'relative w-full h-screen overflow-hidden' : 'relative w-full'}`}>
        {viewMode === 'scroll' ? (
          // SCROLL MODE - Render all sections sequentially
          <div className="w-full">
            <Hero setViewMode={setViewMode} scrollToSection={scrollToSection} setCurrentSlide={handleSetCurrentSlide} />
            <Introduction />
            <Theory />
            <Application />
            <Solution />
            <Conclusion setViewMode={setViewMode} setCurrentSlide={handleSetCurrentSlide} />
          </div>
        ) : (
          // SLIDE MODE - Render slide with framer-motion transitions
          <div className="w-full h-full flex justify-center items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0 flex justify-center items-center"
              >
                {/* Specific active slide component rendering */}
                <div className="w-full h-full overflow-y-auto px-4 md:px-0">
                  <ActiveComponent 
                    setViewMode={setViewMode} 
                    scrollToSection={scrollToSection} 
                    setCurrentSlide={handleSetCurrentSlide} 
                    currentSlide={currentSlide} 
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Slide Navigation Controls */}
      {viewMode === 'slide' && (
        <SlideControls
          currentSlide={currentSlide}
          setCurrentSlide={handleSetCurrentSlide}
          totalSlides={slides.length}
        />
      )}

      {/* Floating Academic AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
