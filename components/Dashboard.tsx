import React, { useState } from 'react';
import { View, Language } from '../types';
import { askCoach } from '../services/geminiService';
import { UI_LABELS } from '../constants';
import { MessageSquare, ArrowRight, Activity, Flame } from 'lucide-react';

interface DashboardProps {
  setCurrentView: (view: View) => void;
  fastingHours: number;
  language: Language;
}

export const Dashboard: React.FC<DashboardProps> = ({ setCurrentView, fastingHours, language }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const t = UI_LABELS[language].dashboard;

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer(null);
    const response = await askCoach(question, language);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-carnivore-900 to-charcoal-900 p-6 rounded-2xl border border-charcoal-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2">{t.welcome}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.subtitle}</p>
          <button 
            onClick={() => setCurrentView('diet')}
            className="bg-carnivore-600 hover:bg-carnivore-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
          >
            {t.checkPlan} <ArrowRight size={16} />
          </button>
        </div>
        <div className="absolute right-[-20px] bottom-[-40px] opacity-10 text-white">
          <Flame size={150} />
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div 
          onClick={() => setCurrentView('fasting')}
          className="bg-charcoal-900 p-4 rounded-xl border border-charcoal-800 cursor-pointer hover:border-carnivore-700 transition-colors"
        >
          <div className="flex items-center gap-2 text-carnivore-400 mb-2">
            <Activity size={20} />
            <span className="font-semibold text-sm">{t.fastingStatus}</span>
          </div>
          <div className="text-2xl font-bold text-white">{fastingHours > 0 ? `${fastingHours.toFixed(1)}h` : t.notStarted}</div>
          <div className="text-xs text-gray-500">{t.currentFast}</div>
        </div>

        <div 
           onClick={() => setCurrentView('workouts')}
           className="bg-charcoal-900 p-4 rounded-xl border border-charcoal-800 cursor-pointer hover:border-carnivore-700 transition-colors"
        >
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Flame size={20} />
            <span className="font-semibold text-sm">{t.activeStreak}</span>
          </div>
          <div className="text-2xl font-bold text-white">3 {t.days}</div>
          <div className="text-xs text-gray-500">{t.keepMomentum}</div>
        </div>
      </div>

      {/* AI Coach Section */}
      <div className="bg-charcoal-900 p-6 rounded-xl border border-charcoal-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-carnivore-900/50 p-2 rounded-lg text-carnivore-400">
            <MessageSquare size={20} />
          </div>
          <h3 className="font-bold text-lg text-white">{t.askCoach}</h3>
        </div>
        
        <form onSubmit={handleAsk} className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t.askPlaceholder}
            className="w-full bg-charcoal-950 border border-charcoal-700 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-carnivore-500 focus:ring-1 focus:ring-carnivore-500 transition-all placeholder-gray-600"
          />
          <button 
            type="submit"
            disabled={loading || !question}
            className="absolute right-2 top-2 bottom-2 bg-charcoal-800 hover:bg-carnivore-600 text-gray-300 hover:text-white px-3 rounded-md transition-colors disabled:opacity-50"
          >
            {loading ? <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> : <ArrowRight size={18} />}
          </button>
        </form>

        {answer && (
          <div className="mt-4 p-4 bg-charcoal-950 rounded-lg border border-charcoal-800 text-sm text-gray-300 animate-fadeIn">
            <span className="text-carnivore-400 font-bold">{t.coachLabel}: </span>
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};
