import React from 'react';
import { PAPER_TITLE, AUTHORS, ABSTRACT_SUMMARY } from '../constants';
import { FileText, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white border-b border-slate-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <FileText size={16} />
              <span>IEEE Transactions on Evolutionary Computation (2025)</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 font-serif">
              {PAPER_TITLE}
            </h1>
            <div className="flex items-start space-x-3 text-slate-600 mb-8">
              <Users className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                {AUTHORS.join(', ')}
              </p>
            </div>
            <div className="prose prose-lg text-slate-600">
              <p className="italic border-l-4 border-indigo-500 pl-4 bg-slate-50 py-4 pr-4 rounded-r-lg">
                "{ABSTRACT_SUMMARY}"
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-md bg-slate-900 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Key Innovation: QSAEA</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                <span>Uses <strong className="text-blue-200">Double Q-Learning</strong> to adaptively switch surrogate strategies.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                <span>Dynamically balances <strong className="text-purple-200">convergence</strong> and <strong className="text-purple-200">feasibility</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                <span>Outperforms state-of-the-art on <strong className="text-teal-200">33 benchmarks</strong> and 5 real-world problems.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;