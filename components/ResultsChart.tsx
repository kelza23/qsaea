import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';
import { Trophy } from 'lucide-react';

const ResultsChart: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Performance Comparison</h2>
            <p className="text-slate-600 mt-2">Comparison of Mean IGD values (Lower is Better) on select benchmark problems.</p>
        </div>
        
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={PERFORMANCE_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="algorithm" 
                tick={{fill: '#64748b', fontSize: 12}} 
                interval={0} 
                angle={-45} 
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{fill: '#64748b', fontSize: 12}} label={{ value: 'IGD (Lower is better)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                itemStyle={{ color: '#cbd5e1' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="CF1" fill="#3b82f6" name="CF1 Problem" radius={[4, 4, 0, 0]} />
              <Bar dataKey="MW1" fill="#8b5cf6" name="MW1 Problem" radius={[4, 4, 0, 0]} />
              <Bar dataKey="DAS_CMOP1" fill="#14b8a6" name="DAS-CMOP1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-start">
            <Trophy className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-blue-900 mb-1">Superior Performance</h4>
                <p className="text-blue-800 text-sm">
                    QSAEA achieved the lowest IGD scores in <strong>25 out of 33</strong> benchmark problems compared to 7 state-of-the-art competitors. The dynamic strategy selection allows it to avoid local optima (seen in DAS-CMOP1) and handle complex constraint landscapes better than fixed-strategy methods.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsChart;