import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { DietPlan } from './components/DietPlan';
import { FastingTimer } from './components/FastingTimer';
import { Workouts } from './components/Workouts';
import { Progress } from './components/Progress';
import { View, Language } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [language, setLanguage] = useState<Language>('en');

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

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView} language={language} setLanguage={setLanguage}>
      {renderView()}
    </Layout>
  );
}

export default App;