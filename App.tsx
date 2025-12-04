import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Brand from './components/Brand';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import SocialWidget from './components/SocialWidget';

const App: React.FC = () => {
  return (
    // Replaced overflow-x-hidden with overflow-clip in some contexts or kept it on body only, 
    // but typically overflow-x-hidden on the main wrapper is fine for sticky unless height is fixed.
    // Ensure min-h-screen is present.
    <div className="min-h-screen bg-background text-primary font-sans relative selection:bg-accent selection:text-white">
      <div className="noise-bg"></div>
      
      {/* Ambient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] animate-blob pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-teal-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none z-0" />

      <Cursor />
      <Navbar />
      <SocialWidget />
      
      {/* Main content wrapper */}
      <main className="relative z-10 md:pl-28 w-full overflow-x-clip">
        <Hero />
        <Stats />
        <Brand />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;