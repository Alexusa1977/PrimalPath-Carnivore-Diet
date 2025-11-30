import React, { useState, useEffect } from 'react';
import { FastingState, Language } from '../types';
import { UI_LABELS } from '../constants';
import { Play, Square, RotateCcw } from 'lucide-react';

interface FastingTimerProps {
  language: Language;
}

export const FastingTimer: React.FC<FastingTimerProps> = ({ language }) => {
  const [fastingState, setFastingState] = useState<FastingState>(() => {
     const saved = localStorage.getItem('fastingState');
     return saved ? JSON.parse(saved) : { isFasting: false, startTime: null, goalHours: 16 };
  });
  const [elapsed, setElapsed] = useState(0);
  const t = UI_LABELS[language].fasting;

  useEffect(() => {
    localStorage.setItem('fastingState', JSON.stringify(fastingState));
  }, [fastingState]);

  useEffect(() => {
    let interval: any;
    if (fastingState.isFasting && fastingState.startTime) {
      interval = setInterval(() => {
        setElapsed(Date.now() - fastingState.startTime!);
      }, 1000);
    } else {
      setElapsed(0);
    }
    return () => clearInterval(interval);
  }, [fastingState]);

  const toggleFast = () => {
    if (fastingState.isFasting) {
      setFastingState(prev => ({ ...prev, isFasting: false, startTime: null }));
    } else {
      setFastingState(prev => ({ ...prev, isFasting: true, startTime: Date.now() }));
    }
  };

  const reset = () => {
     setFastingState(prev => ({ ...prev, isFasting: false, startTime: null }));
     setElapsed(0);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)));
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = Math.min((elapsed / (fastingState.goalHours * 60 * 60 * 1000)) * 100, 100);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8 animate-fadeIn">
       <div className="text-center">
         <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
         <p className="text-gray-400">{t.subtitle}</p>
       </div>

       {/* Timer Circle */}
       <div className="relative w-64 h-64 flex items-center justify-center">
         <svg className="w-full h-full transform -rotate-90">
           <circle
             cx="128"
             cy="128"
             r="120"
             stroke="currentColor"
             strokeWidth="8"
             fill="transparent"
             className="text-charcoal-800"
           />
           <circle
             cx="128"
             cy="128"
             r="120"
             stroke="currentColor"
             strokeWidth="8"
             fill="transparent"
             strokeDasharray={2 * Math.PI * 120}
             strokeDashoffset={2 * Math.PI * 120 - (progress / 100) * 2 * Math.PI * 120}
             className={`${fastingState.isFasting ? 'text-carnivore-500' : 'text-gray-600'} transition-all duration-1000 ease-linear`}
             strokeLinecap="round"
           />
         </svg>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-mono font-bold text-white tracking-wider">
              {fastingState.isFasting ? formatTime(elapsed) : '00:00:00'}
            </span>
            <span className="text-sm text-gray-500 mt-2">
              {fastingState.isFasting ? t.fastingTime : t.ready}
            </span>
         </div>
       </div>

       {/* Controls */}
       <div className="flex gap-4">
         <button
           onClick={toggleFast}
           className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
             fastingState.isFasting 
               ? 'bg-charcoal-800 text-red-500 hover:bg-red-500/10' 
               : 'bg-carnivore-600 text-white hover:bg-carnivore-500 shadow-lg shadow-carnivore-600/30'
           }`}
         >
           {fastingState.isFasting ? <Square fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} className="ml-1"/>}
         </button>
         
         {fastingState.isFasting && (
            <button 
              onClick={reset}
              className="w-16 h-16 rounded-full bg-charcoal-800 text-gray-400 flex items-center justify-center hover:text-white hover:bg-charcoal-700 transition-colors"
            >
              <RotateCcw size={24} />
            </button>
         )}
       </div>

       {/* Goal Selector */}
       {!fastingState.isFasting && (
         <div className="bg-charcoal-900 p-4 rounded-xl border border-charcoal-800 w-full max-w-xs">
           <label className="text-sm text-gray-400 mb-2 block">{t.target}</label>
           <div className="flex justify-between gap-2">
              {[16, 18, 20, 24].map(h => (
                <button
                  key={h}
                  onClick={() => setFastingState(p => ({...p, goalHours: h}))}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold border ${
                    fastingState.goalHours === h 
                    ? 'border-carnivore-500 text-carnivore-500 bg-carnivore-500/10' 
                    : 'border-charcoal-700 text-gray-500 hover:border-gray-500'
                  }`}
                >
                  {h}h
                </button>
              ))}
           </div>
         </div>
       )}
    </div>
  );
};
