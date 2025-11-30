import React from 'react';
import { View, Language } from '../types';
import { UI_LABELS } from '../constants';
import { LayoutDashboard, Utensils, Timer, Dumbbell, TrendingUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setCurrentView: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const NavItem = ({ view, label, icon: Icon, current, onClick }: any) => (
  <button
    onClick={() => onClick(view)}
    className={`flex flex-col items-center justify-center p-2 w-full transition-colors duration-200 ${
      current === view 
        ? 'text-carnivore-500 border-t-2 border-carnivore-500 bg-charcoal-900' 
        : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    <Icon size={24} />
    <span className="text-xs mt-1 font-medium">{label}</span>
  </button>
);

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setCurrentView, language, setLanguage }) => {
  const t = UI_LABELS[language].nav;

  return (
    <div className="min-h-screen bg-charcoal-950 text-gray-100 flex flex-col font-sans">
      <header className="bg-charcoal-900 border-b border-charcoal-800 p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-carnivore-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              Primal<span className="text-carnivore-500">Path</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex bg-charcoal-800 rounded-lg p-1">
              {(['en', 'es', 'pt'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                    language === lang 
                      ? 'bg-carnivore-600 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          {children}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-charcoal-950 border-t border-charcoal-800 pb-safe z-40">
        <div className="max-w-4xl mx-auto flex justify-around">
          <NavItem view="dashboard" label={t.home} icon={LayoutDashboard} current={currentView} onClick={setCurrentView} />
          <NavItem view="diet" label={t.diet} icon={Utensils} current={currentView} onClick={setCurrentView} />
          <NavItem view="fasting" label={t.fasting} icon={Timer} current={currentView} onClick={setCurrentView} />
          <NavItem view="workouts" label={t.fitness} icon={Dumbbell} current={currentView} onClick={setCurrentView} />
          <NavItem view="progress" label={t.track} icon={TrendingUp} current={currentView} onClick={setCurrentView} />
        </div>
      </nav>
    </div>
  );
};