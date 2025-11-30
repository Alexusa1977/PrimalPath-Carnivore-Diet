import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { DietPlan } from './components/DietPlan';
import { FastingTimer } from './components/FastingTimer';
import { Workouts } from './components/Workouts';
import { Progress } from './components/Progress';
import { View, Language } from './types';
import { UI_LABELS } from './constants';
import { ShieldAlert } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [language, setLanguage] = useState<Language>('en');
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState<boolean>(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('primalpath_consent');
    if (hasConsented === 'true') {
      setAcceptedDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('primalpath_consent', 'true');
    setAcceptedDisclaimer(true);
  };

  // Helper to get fasting hours (would normally share state via context or simple props lift)
  // For visual consistency on dashboard only
  const getFastingHours = () => {
    const saved = localStorage.getItem('fastingState');
    if(saved) {
      const state = JSON.parse(saved);
      if(state.isFasting && state.startTime) {
        return (Date.now() - state.startTime) / (1000 * 60 * 60);
      }
    }
    return 0;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} fastingHours={getFastingHours()} language={language} />;
      case 'diet':
        return <DietPlan language={language} />;
      case 'fasting':
        return <FastingTimer language={language} />;
      case 'workouts':
        return <Workouts language={language} />;
      case 'progress':
        return <Progress language={language} />;
      default:
        return <Dashboard setCurrentView={setCurrentView} fastingHours={0} language={language} />;
    }
  };

  if (!acceptedDisclaimer) {
    const t = UI_LABELS[language].disclaimer;
    return (
      <div className="min-h-screen bg-charcoal-950 flex flex-col items-center justify-center p-6 relative">
         <div className="absolute top-6 right-6 flex gap-2">
            {(['en', 'es', 'pt'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                  language === lang 
                    ? 'bg-carnivore-600 text-white' 
                    : 'bg-charcoal-800 text-gray-400 hover:text-white'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
         </div>
         <div className="bg-charcoal-900 border border-charcoal-800 p-8 rounded-2xl max-w-md w-full shadow-2xl flex flex-col items-center text-center animate-fadeIn">
            <div className="bg-carnivore-900/30 p-4 rounded-full text-carnivore-500 mb-6">
              <ShieldAlert size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              {t.body}
            </p>
            <button
              onClick={handleAcceptDisclaimer}
              className="w-full bg-carnivore-600 hover:bg-carnivore-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-carnivore-900/20"
            >
              {t.button}
            </button>
         </div>
      </div>
    );
  }

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView} language={language} setLanguage={setLanguage}>
      {renderView()}
    </Layout>
  );
}

export default App;