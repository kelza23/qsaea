import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 mb-2 font-serif">
          Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation
        </p>
        <p className="text-slate-400 text-sm">
          Visualized based on the <a href="https://doi.org/10.1109/TEVC.2025.3635778" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">2025 IEEE TEVC paper</a> by Cai et al.
        </p>
      </div>
    </footer>
  );
};

export default Footer;