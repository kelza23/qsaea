import React from 'react';
import Hero from './components/Hero';
import Strategies from './components/Strategies';
import InteractiveFlow from './components/InteractiveFlow';
import DoubleQLearning from './components/DoubleQLearning';
import ResultsChart from './components/ResultsChart';
import RealWorldApps from './components/RealWorldApps';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           <div className="font-bold text-xl font-serif text-slate-900">QSAEA</div>
           <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
              <button onClick={() => scrollToSection('strategies')} className="hover:text-indigo-600 transition-colors">Strategies</button>
              <button onClick={() => scrollToSection('workflow')} className="hover:text-indigo-600 transition-colors">Workflow</button>
              <button onClick={() => scrollToSection('results')} className="hover:text-indigo-600 transition-colors">Results</button>
              <button onClick={() => scrollToSection('applications')} className="hover:text-indigo-600 transition-colors">Applications</button>
           </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        <div id="strategies">
          <Strategies />
        </div>

        <div id="workflow">
          <InteractiveFlow />
        </div>

        <DoubleQLearning />

        <div id="results">
          <ResultsChart />
        </div>

        <div id="applications">
          <RealWorldApps />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;