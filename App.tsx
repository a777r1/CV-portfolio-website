
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="max-w-3xl">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">A Little Bit About Me</h2>
            <p className="text-2xl md:text-3xl font-medium leading-snug text-slate-300">
              I'm a final-year Computer Science student passionate about 
              <span className="text-white"> software development</span> and 
              <span className="text-white"> problem-solving</span>. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <AIChat />
    </div>
  );
};

export default App;
