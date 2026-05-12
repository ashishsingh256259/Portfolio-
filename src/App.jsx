import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalSection from './components/TerminalSection';
import GithubSection from './components/GithubSection';
import Explorations from './components/Explorations';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Challenges from './components/Challenges';
function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-accent-cyan/30">
      <Navbar />
      
      <main>
        <Hero />
        <TerminalSection />
        <About />
        <Projects />
        <GithubSection />
        <Skills />
        <Explorations />
        <Challenges />
        <Journey />
        <CurrentlyBuilding />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
