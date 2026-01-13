import React from 'react';
import { REAL_WORLD_PROBLEMS } from '../constants';
import { Cog, Car, Box, Anchor, Activity } from 'lucide-react';

const RealWorldApps: React.FC = () => {
  const getIcon = (name: string) => {
      if (name.includes('Speed')) return <Activity className="w-8 h-8 text-white" />;
      if (name.includes('Car')) return <Car className="w-8 h-8 text-white" />;
      if (name.includes('Gear')) return <Cog className="w-8 h-8 text-white" />;
      if (name.includes('Spring')) return <SettingsIcon className="w-8 h-8 text-white" />; // Custom placeholder logic
      if (name.includes('Bulk')) return <Anchor className="w-8 h-8 text-white" />;
      return <Box className="w-8 h-8 text-white" />;
  };

  // Helper because lucide doesn't export SettingsIcon by that name, using a generic one
  const SettingsIcon = ({className}:{className:string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  )

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Real-World Applications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                The algorithm was validated on five complex mechanical design problems, demonstrating robustness in high-stakes engineering scenarios.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_WORLD_PROBLEMS.map((problem, idx) => (
                <div key={problem.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors duration-300">
                    <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg mr-4 ${idx % 2 === 0 ? 'bg-indigo-600' : 'bg-purple-600'}`}>
                            {getIcon(problem.name)}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{problem.name}</h3>
                            <span className="text-xs text-slate-400 font-mono">{problem.id}</span>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm mb-6 h-12">
                        {problem.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-700/50 p-2 rounded">
                            <span className="block font-bold text-white text-lg">{problem.objectives}</span>
                            <span className="text-slate-500">Objs</span>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded">
                            <span className="block font-bold text-white text-lg">{problem.variables}</span>
                            <span className="text-slate-500">Vars</span>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded">
                            <span className="block font-bold text-white text-lg">{problem.constraints}</span>
                            <span className="text-slate-500">Constrs</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldApps;