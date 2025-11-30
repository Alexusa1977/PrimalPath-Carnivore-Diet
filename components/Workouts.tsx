import React, { useState } from 'react';
import { getWorkouts, UI_LABELS } from '../constants';
import { Difficulty, Language } from '../types';
import { generateWorkoutTip } from '../services/geminiService';
import { Dumbbell, Clock, Info, Sparkles } from 'lucide-react';

interface WorkoutsProps {
  language: Language;
}

export const Workouts: React.FC<WorkoutsProps> = ({ language }) => {
  const [level, setLevel] = useState<Difficulty>(Difficulty.BEGINNER);
  const [tip, setTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);

  const workouts = getWorkouts(language);
  const routine = workouts[level];
  const t = UI_LABELS[language].workouts;

  const getTip = async () => {
    setLoadingTip(true);
    const result = await generateWorkoutTip(level, 'consistency and form', language);
    setTip(result);
    setLoadingTip(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Level Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-charcoal-900 p-1 rounded-xl">
        {Object.values(Difficulty).map((d) => (
          <button
            key={d}
            onClick={() => { setLevel(d); setTip(null); }}
            className={`py-2 text-sm font-bold rounded-lg transition-all ${
              level === d 
                ? 'bg-charcoal-800 text-white shadow-sm' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {workouts[d].level}
          </button>
        ))}
      </div>

      {/* Routine Card */}
      <div className="bg-charcoal-900 rounded-xl border border-charcoal-800 overflow-hidden">
        <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-900 p-6 border-b border-charcoal-800 flex justify-between items-center">
           <div>
             <h2 className="text-xl font-bold text-white mb-1">{routine.title}</h2>
             <div className="flex items-center gap-2 text-carnivore-400 text-sm">
               <Clock size={16} />
               <span>{routine.duration}</span>
             </div>
           </div>
           <Dumbbell size={32} className="text-charcoal-700" />
        </div>

        <div className="p-6 space-y-4">
          {routine.exercises.map((ex, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="w-8 h-8 rounded-full bg-carnivore-900/50 text-carnivore-500 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 group-hover:bg-carnivore-600 group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold text-white">{ex.name}</h3>
                  <span className="text-xs font-mono text-carnivore-400 bg-carnivore-900/20 px-2 py-0.5 rounded border border-carnivore-900/50">
                    {ex.sets} x {ex.reps}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tip Section */}
      <div className="bg-charcoal-950 border border-dashed border-charcoal-700 rounded-xl p-4">
        {!tip ? (
           <div className="flex items-center justify-between">
             <div className="flex items-center gap-2 text-gray-400">
               <Sparkles size={18} />
               <span className="text-sm">{t.needMotivation}</span>
             </div>
             <button 
               onClick={getTip}
               disabled={loadingTip}
               className="text-xs bg-charcoal-800 hover:bg-charcoal-700 text-white px-3 py-1.5 rounded transition-colors"
             >
               {loadingTip ? t.generating : t.getTip}
             </button>
           </div>
        ) : (
          <div className="animate-fadeIn">
            <h4 className="text-carnivore-400 font-bold text-sm mb-2 flex items-center gap-2">
              <Info size={16} /> {t.coachTip}:
            </h4>
            <p className="text-gray-300 text-sm italic">"{tip}"</p>
            <button 
              onClick={() => setTip(null)} 
              className="text-xs text-gray-600 mt-2 hover:text-gray-400"
            >
              {t.clear}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
