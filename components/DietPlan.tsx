import React, { useState } from 'react';
import { DietLevel, DayPlan, Language } from '../types';
import { getDietLevels, getSampleMeals, UI_LABELS } from '../constants';
import { generateMealIdea } from '../services/geminiService';
import { ChevronRight, ChefHat, Sparkles } from 'lucide-react';

interface DietPlanProps {
  language: Language;
}

export const DietPlan: React.FC<DietPlanProps> = ({ language }) => {
  const [selectedLevel, setSelectedLevel] = useState<DietLevel>(DietLevel.STANDARD);
  const [activeTab, setActiveTab] = useState<'overview' | 'menu'>('overview');
  const [loadingMeal, setLoadingMeal] = useState(false);
  const [generatedMeal, setGeneratedMeal] = useState<string | null>(null);

  const dietLevels = getDietLevels(language);
  const currentLevelInfo = dietLevels.find(l => l.id === selectedLevel)!;
  const currentMenu = getSampleMeals(language)[selectedLevel];
  const t = UI_LABELS[language].diet;

  const handleGenerate = async (type: string) => {
    setLoadingMeal(true);
    const suggestion = await generateMealIdea(selectedLevel, type, language);
    setGeneratedMeal(suggestion);
    setLoadingMeal(false);
  };

  return (
    <div className="space-y-6">
      {/* Level Selector */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
        {dietLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedLevel === level.id
                ? 'bg-carnivore-600 text-white shadow-lg shadow-carnivore-900/20'
                : 'bg-charcoal-900 text-gray-400 hover:bg-charcoal-800'
            }`}
          >
            {level.title.split(':')[1] ? level.title.split(':')[1].trim() : level.title}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-charcoal-800">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${
            activeTab === 'overview' ? 'text-carnivore-500 border-b-2 border-carnivore-500' : 'text-gray-500'
          }`}
        >
          {t.guidelines}
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${
            activeTab === 'menu' ? 'text-carnivore-500 border-b-2 border-carnivore-500' : 'text-gray-500'
          }`}
        >
          {t.mealPlan}
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="bg-charcoal-900 rounded-xl p-6 border border-charcoal-800 animate-fadeIn space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{currentLevelInfo.title}</h3>
            <p className="text-gray-400">{currentLevelInfo.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-charcoal-950/50 p-4 rounded-lg border border-green-900/30">
              <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                {t.allowedFoods}
              </h4>
              <ul className="space-y-2">
                {currentLevelInfo.allowed.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-charcoal-950/50 p-4 rounded-lg border border-red-900/30">
              <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                {t.avoid}
              </h4>
              <ul className="space-y-2">
                {currentLevelInfo.avoid.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-900/30">
             <h4 className="text-blue-400 font-bold mb-1 text-sm">{t.fastingProtocol}</h4>
             <p className="text-gray-300 text-sm">{currentLevelInfo.fasting}</p>
          </div>
        </div>
      )}

      {activeTab === 'menu' && (
        <div className="space-y-4 animate-fadeIn">
          {['breakfast', 'lunch', 'dinner'].map((type) => {
             const meal = currentMenu[type as keyof DayPlan];
             const mealLabel = t[type as keyof typeof t] || type;
             
             return (
               <div key={type} className="bg-charcoal-900 p-5 rounded-xl border border-charcoal-800">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="text-carnivore-400 text-sm font-bold uppercase tracking-wider">{mealLabel}</h4>
                   {meal.calories && <span className="text-xs text-gray-500 bg-charcoal-950 px-2 py-1 rounded">~{meal.calories} kcal</span>}
                 </div>
                 <h3 className="text-lg font-bold text-white mb-1">{meal.name}</h3>
                 <p className="text-gray-400 text-sm mb-3">{meal.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {meal.ingredients.map((ing, i) => (
                     <span key={i} className="text-xs bg-charcoal-800 text-gray-300 px-2 py-1 rounded border border-charcoal-700">
                       {ing}
                     </span>
                   ))}
                 </div>
                 <div className="mt-4 pt-4 border-t border-charcoal-800">
                    <button 
                      onClick={() => handleGenerate(mealLabel)}
                      className="text-xs text-carnivore-400 flex items-center gap-1 hover:text-carnivore-300 transition-colors"
                    >
                      <Sparkles size={14} /> {t.generate}
                    </button>
                 </div>
               </div>
             );
          })}
          
          {/* Modal or Popover for Generated Meal */}
          {generatedMeal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <div className="bg-charcoal-900 p-6 rounded-2xl max-w-md w-full border border-charcoal-700 shadow-2xl relative">
                <button 
                  onClick={() => setGeneratedMeal(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
                <div className="flex items-center gap-2 text-carnivore-500 mb-4">
                    <ChefHat size={24} />
                    <h3 className="text-xl font-bold">Chef Gemini Suggests</h3>
                </div>
                <div className="prose prose-invert prose-sm max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-300">
                  {generatedMeal}
                </div>
              </div>
            </div>
          )}

          {loadingMeal && (
             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
               <div className="animate-spin h-8 w-8 border-4 border-carnivore-500 border-t-transparent rounded-full" />
             </div>
          )}
        </div>
      )}
    </div>
  );
};
