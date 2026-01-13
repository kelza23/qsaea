import React from 'react';
import { BrainCircuit } from 'lucide-react';

const DoubleQLearning: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="inline-flex items-center space-x-2 text-indigo-600 font-semibold mb-4">
                <BrainCircuit className="w-6 h-6" />
                <span>The Core Engine</span>
             </div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Double Q-Learning Mechanism</h2>
             <p className="text-slate-600 text-lg mb-6 leading-relaxed">
               Standard Q-learning can suffer from overestimation bias. QSAEA employs <strong>Double Q-Learning</strong>, maintaining two separate Q-tables (Q1 and Q2) to decouple action selection from evaluation.
             </p>
             <div className="space-y-4">
                <div className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4 flex-shrink-0">1</div>
                   <p className="text-slate-700">The agent observes the state <strong>st</strong> derived from population correlation.</p>
                </div>
                <div className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4 flex-shrink-0">2</div>
                   <p className="text-slate-700">Selects action <strong>at</strong> (strategy) using an &epsilon;-greedy policy based on sum(Q1, Q2).</p>
                </div>
                <div className="flex items-start">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4 flex-shrink-0">3</div>
                   <p className="text-slate-700">Updates only one table randomly to reduce maximization bias.</p>
                </div>
             </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
             <div className="font-mono text-sm bg-slate-900 text-slate-300 p-6 rounded-lg overflow-x-auto">
               <p className="text-green-400 mb-2">// Double Q-Learning Update Rule</p>
               <p className="mb-4">
                 If update Q1:<br/>
                 <span className="text-purple-400">a*</span> = argmax Q1(next_state, a)<br/>
                 <span className="text-yellow-300">Q1</span>(s, a) &#8592; Q1(s, a) + &alpha; * [<br/>
                 &nbsp;&nbsp;Reward + &gamma; * <span className="text-yellow-300">Q2</span>(next_state, <span className="text-purple-400">a*</span>) - Q1(s, a)<br/>
                 ]
               </p>
               <p className="text-slate-500 text-xs italic">
                 * By using Q2 to evaluate the value of the action chosen by Q1, we reduce positive bias.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubleQLearning;