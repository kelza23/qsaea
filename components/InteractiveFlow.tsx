import React, { useState } from 'react';
import { FLOW_STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

const InteractiveFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(FLOW_STEPS[0].id);

  const activeStepData = FLOW_STEPS.find(s => s.id === activeStep) || FLOW_STEPS[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-serif">The QSAEA Workflow</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps List */}
          <div className="lg:w-1/3 space-y-4">
            {FLOW_STEPS.map((step, index) => (
              <div key={step.id} className="relative">
                {index !== FLOW_STEPS.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-slate-200 -z-10 h-16"></div>
                )}
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    activeStep === step.id
                      ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-105'
                      : 'border-transparent bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeStep === step.id ? 'bg-indigo-500 text-white' : 'bg-white text-slate-400'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${activeStep === step.id ? 'text-indigo-900' : 'text-slate-600'}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{step.description}</p>
                  </div>
                  {activeStep === step.id && (
                    <ChevronRight className="ml-auto text-indigo-500 w-5 h-5" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:w-2/3">
            <div className="h-full bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
               {/* Decorative background blobs */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
               
               <div className="relative z-10">
                 <div className="inline-block p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                    {activeStepData.icon}
                 </div>
                 <h3 className="text-3xl font-bold mb-4">{activeStepData.title}</h3>
                 <p className="text-xl text-indigo-200 mb-8 font-light">
                   {activeStepData.description}
                 </p>
                 <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                   <p className="text-slate-300 leading-relaxed">
                     {activeStepData.details}
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFlow;