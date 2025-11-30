import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeightLog, Language } from '../types';
import { UI_LABELS } from '../constants';
import { Plus, Trash2 } from 'lucide-react';

interface ProgressProps {
  language: Language;
}

export const Progress: React.FC<ProgressProps> = ({ language }) => {
  const [logs, setLogs] = useState<WeightLog[]>(() => {
    const saved = localStorage.getItem('weightLogs');
    return saved ? JSON.parse(saved) : [
      { date: '2023-10-01', weight: 200 },
      { date: '2023-10-08', weight: 198 },
      { date: '2023-10-15', weight: 195 },
    ];
  });
  const [newWeight, setNewWeight] = useState('');
  const t = UI_LABELS[language].progress;

  useEffect(() => {
    localStorage.setItem('weightLogs', JSON.stringify(logs));
  }, [logs]);

  const addLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWeight) return;
    const today = new Date().toISOString().split('T')[0];
    setLogs([...logs, { date: today, weight: parseFloat(newWeight) }]);
    setNewWeight('');
  };

  const deleteLog = (index: number) => {
    const newLogs = [...logs];
    newLogs.splice(index, 1);
    setLogs(newLogs);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-charcoal-900 p-6 rounded-xl border border-charcoal-800">
        <h2 className="text-xl font-bold text-white mb-6">{t.title}</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={logs}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickMargin={10} />
              <YAxis stroke="#9ca3af" fontSize={12} domain={['auto', 'auto']} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                itemStyle={{ color: '#ef4444' }}
              />
              <Line 
                type="monotone" 
                dataKey="weight" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', r: 4 }}
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-charcoal-900 p-6 rounded-xl border border-charcoal-800">
        <h3 className="font-bold text-white mb-4">{t.logEntry}</h3>
        <form onSubmit={addLog} className="flex gap-2 mb-6">
          <input 
            type="number" 
            step="0.1"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 bg-charcoal-950 border border-charcoal-700 text-white rounded-lg px-4 focus:outline-none focus:border-carnivore-500"
          />
          <button 
            type="submit"
            className="bg-carnivore-600 hover:bg-carnivore-500 text-white px-4 py-2 rounded-lg font-bold transition-colors"
          >
            <Plus size={20} />
          </button>
        </form>

        <div className="space-y-2 max-h-48 overflow-y-auto">
          {logs.slice().reverse().map((log, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 bg-charcoal-950 rounded border border-charcoal-800">
              <span className="text-gray-400 text-sm">{log.date}</span>
              <div className="flex items-center gap-4">
                <span className="text-white font-bold">{log.weight}</span>
                <button 
                  onClick={() => deleteLog(logs.length - 1 - idx)}
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
