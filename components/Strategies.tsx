import React from 'react';
import { Crosshair, ShieldAlert, Zap } from 'lucide-react';

const Strategies: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Adaptive Surrogate Modelling Strategies</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            QSAEA dynamically selects one of three strategies based on the search state to navigate the complex landscape of expensive constrained problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategy 1 */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-2 bg-orange-500 w-full"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy 1: Objectives Only</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Models only the objective functions, ignoring constraints.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong className="block text-orange-700 mb-1">When to use?</strong>
                Useful for quickly traversing infeasible regions to approach the Unconstrained Pareto Front (UPF).
              </div>
            </div>
          </div>

          {/* Strategy 2 */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-2 bg-blue-500 w-full"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Crosshair className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy 2: Obj + CV</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Models objectives and the aggregated Constraint Violation (CV).
              </p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong className="block text-blue-700 mb-1">When to use?</strong>
                Guides the population towards the feasible region while preserving solution quality. Balances global search.
              </div>
            </div>
          </div>

          {/* Strategy 3 */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="h-2 bg-teal-500 w-full"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy 3: Obj + Constraints</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Models objectives and each unsatisfied constraint individually.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong className="block text-teal-700 mb-1">When to use?</strong>
                Performs local search within the feasible region or near boundaries. High precision, higher cost.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;