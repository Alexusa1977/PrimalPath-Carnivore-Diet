import { DietLevel, Difficulty, WorkoutRoutine, DayPlan, Language } from './types';

export const UI_LABELS = {
  en: {
    nav: { home: 'Home', diet: 'Diet', fasting: 'Fasting', fitness: 'Fitness', track: 'Track' },
    dashboard: {
      welcome: 'Welcome, Carnivore.',
      subtitle: 'You are on the path to primal health. Stay consistent.',
      checkPlan: "Check Today's Plan",
      fastingStatus: 'Fasting Status',
      notStarted: 'Not Started',
      currentFast: 'Current fast duration',
      activeStreak: 'Active Streak',
      keepMomentum: 'Keep the momentum',
      askCoach: 'Ask the Coach',
      askPlaceholder: 'Ex: Is coffee allowed in Level 1?',
      coachLabel: 'Coach',
      days: 'Days'
    },
    diet: {
      guidelines: 'Guidelines',
      mealPlan: 'Meal Plan',
      allowedFoods: 'Allowed Foods',
      avoid: 'Avoid',
      fastingProtocol: 'Fasting Protocol',
      generate: 'Generate alternative with AI',
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      dinner: 'Dinner'
    },
    fasting: {
      title: 'Intermittent Fasting',
      subtitle: 'Heal your gut, boost autophagy.',
      fastingTime: 'Fasting Time',
      ready: 'Ready to start?',
      target: 'Target Goal (Hours)'
    },
    workouts: {
      duration: 'Duration',
      needMotivation: 'Need a motivation boost?',
      getTip: 'Get Coach Tip',
      generating: 'Generating...',
      coachTip: 'Coach Tip',
      clear: 'Clear'
    },
    progress: {
      title: 'Weight Progression',
      logEntry: 'Log Entry',
      placeholder: 'Current weight (lbs/kg)',
      add: 'Add'
    },
    disclaimer: {
      title: 'Medical Disclaimer',
      body: 'This application is for informational purposes only and does not constitute medical advice. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Any diet or exercise program should be initiated with medical recommendation and evaluation. By using this application, you acknowledge that you understand this and use the app at your own risk.'
    }
  },
  es: {
    nav: { home: 'Inicio', diet: 'Dieta', fasting: 'Ayuno', fitness: 'Ejercicios', track: 'Progreso' },
    dashboard: {
      welcome: 'Bienvenido, Carnívoro.',
      subtitle: 'Estás en el camino hacia la salud primitiva. Mantén la constancia.',
      checkPlan: "Ver Plan de Hoy",
      fastingStatus: 'Estado del Ayuno',
      notStarted: 'No Iniciado',
      currentFast: 'Duración actual',
      activeStreak: 'Racha Activa',
      keepMomentum: 'Mantén el impulso',
      askCoach: 'Pregunta al Entrenador',
      askPlaceholder: 'Ej: ¿Se permite café en el Nivel 1?',
      coachLabel: 'Entrenador',
      days: 'Días'
    },
    diet: {
      guidelines: 'Guía',
      mealPlan: 'Plan de Comidas',
      allowedFoods: 'Alimentos Permitidos',
      avoid: 'Evitar',
      fastingProtocol: 'Protocolo de Ayuno',
      generate: 'Generar alternativa con IA',
      breakfast: 'Desayuno',
      lunch: 'Almuerzo',
      dinner: 'Cena'
    },
    fasting: {
      title: 'Ayuno Intermitente',
      subtitle: 'Sana tu intestino, potencia la autofagia.',
      fastingTime: 'Tiempo de Ayuno',
      ready: '¿Listo para empezar?',
      target: 'Meta Objetivo (Horas)'
    },
    workouts: {
      duration: 'Duración',
      needMotivation: '¿Necesitas motivación?',
      getTip: 'Consejo del Entrenador',
      generating: 'Generando...',
      coachTip: 'Consejo',
      clear: 'Limpiar'
    },
    progress: {
      title: 'Progreso de Peso',
      logEntry: 'Registrar Entrada',
      placeholder: 'Peso actual (lbs/kg)',
      add: 'Añadir'
    },
    disclaimer: {
      title: 'Aviso Médico Legal',
      body: 'Esta aplicación es solo para fines informativos y no constituye consejo médico. El contenido no pretende sustituir el consejo, diagnóstico o tratamiento médico profesional. Cualquier dieta o programa de ejercicio debe iniciarse con recomendación y evaluación médica. Al usar esta aplicación, usted reconoce que entiende esto y la usa bajo su propio riesgo.'
    }
  },
  pt: {
    nav: { home: 'Início', diet: 'Dieta', fasting: 'Jejum', fitness: 'Treinos', track: 'Progresso' },
    dashboard: {
      welcome: 'Bem-vindo, Carnívoro.',
      subtitle: 'Você está no caminho da saúde primitiva. Mantenha a constância.',
      checkPlan: "Ver Plano de Hoje",
      fastingStatus: 'Status do Jejum',
      notStarted: 'Não Iniciado',
      currentFast: 'Duração atual',
      activeStreak: 'Sequência Ativa',
      keepMomentum: 'Mantenha o ritmo',
      askCoach: 'Pergunte ao Treinador',
      askPlaceholder: 'Ex: Café é permitido no Nível 1?',
      coachLabel: 'Treinador',
      days: 'Dias'
    },
    diet: {
      guidelines: 'Diretrizes',
      mealPlan: 'Plano de Refeições',
      allowedFoods: 'Alimentos Permitidos',
      avoid: 'Evitar',
      fastingProtocol: 'Protocolo de Jejum',
      generate: 'Gerar alternativa com IA',
      breakfast: 'Café da Manhã',
      lunch: 'Almoço',
      dinner: 'Jantar'
    },
    fasting: {
      title: 'Jejum Intermitente',
      subtitle: 'Cure seu intestino, aumente a autofagia.',
      fastingTime: 'Tempo de Jejum',
      ready: 'Pronto para começar?',
      target: 'Meta Alvo (Horas)'
    },
    workouts: {
      duration: 'Duração',
      needMotivation: 'Precisa de motivação?',
      getTip: 'Dica do Treinador',
      generating: 'Gerando...',
      coachTip: 'Dica',
      clear: 'Limpar'
    },
    progress: {
      title: 'Progresso de Peso',
      logEntry: 'Registrar Entrada',
      placeholder: 'Peso atual (lbs/kg)',
      add: 'Adicionar'
    },
    disclaimer: {
      title: 'Aviso Médico Legal',
      body: 'Este aplicativo é apenas para fins informativos e não constitui aconselhamento médico. O conteúdo não se destina a substituir o conselho, diagnóstico ou tratamento médico profissional. Qualquer dieta ou programa de exercícios deve ser iniciado com recomendação e avaliação médica. Ao usar este aplicativo, você reconhece que entende isso e o usa por sua própria conta e risco.'
    }
  }
};

export const getDietLevels = (lang: Language) => {
  const content = {
    en: {
      lionTitle: 'Level 1: The Lion Diet',
      lionDesc: 'The ultimate elimination diet. Good for healing gut issues and severe autoimmune conditions.',
      lionAllowed: ['Ruminant meat (Beef, Lamb, Bison)', 'Salt', 'Water'],
      lionAvoid: ['Everything else (Plant foods, dairy, eggs, poultry, pork, spices)'],
      lionFasting: 'Recommended: 16:8 or OMAD (One Meal A Day)',
      
      stdTitle: 'Level 2: Standard Carnivore',
      stdDesc: 'The most common approach. Provides variety while keeping toxins low.',
      stdAllowed: ['All meats (Beef, Pork, Chicken, Fish)', 'Eggs', 'Animal Fats (Butter, Tallow, Lard)', 'Salt', 'Water'],
      stdAvoid: ['Plant foods, seed oils, sugar, artificial sweeteners'],
      stdFasting: 'Recommended: 16:8',
      
      relTitle: 'Level 3: Relaxed Carnivore',
      relDesc: 'More flexible, suitable for maintenance or metabolic flexibility.',
      relAllowed: ['All meats & eggs', 'Dairy (Cheese, Heavy Cream, Yogurt)', 'Spices & Seasonings', 'Coffee/Tea', 'Small amounts of fruit/honey (optional for metabolic flexibility)'],
      relAvoid: ['Grains, legumes, seed oils, processed sugar'],
      relFasting: 'Flexible: 12:12 to 16:8',
    },
    es: {
      lionTitle: 'Nivel 1: Dieta León',
      lionDesc: 'La dieta de eliminación definitiva. Buena para sanar el intestino y condiciones autoinmunes severas.',
      lionAllowed: ['Carne de rumiantes (Res, Cordero, Bisonte)', 'Sal', 'Agua'],
      lionAvoid: ['Todo lo demás (Plantas, lácteos, huevos, aves, cerdo, especias)'],
      lionFasting: 'Recomendado: 16:8 o OMAD (Una Comida Al Día)',
      
      stdTitle: 'Nivel 2: Carnívoro Estándar',
      stdDesc: 'El enfoque más común. Ofrece variedad manteniendo bajas las toxinas.',
      stdAllowed: ['Todas las carnes (Res, Cerdo, Pollo, Pescado)', 'Huevos', 'Grasas animales (Mantequilla, Sebo, Manteca)', 'Sal', 'Agua'],
      stdAvoid: ['Alimentos vegetales, aceites de semillas, azúcar, edulcorantes artificiales'],
      stdFasting: 'Recomendado: 16:8',
      
      relTitle: 'Nivel 3: Carnívoro Relajado',
      relDesc: 'Más flexible, adecuado para mantenimiento o flexibilidad metabólica.',
      relAllowed: ['Todas las carnes y huevos', 'Lácteos (Queso, Crema, Yogur)', 'Especias y Condimentos', 'Café/Té', 'Pequeñas cantidades de fruta/miel (opcional)'],
      relAvoid: ['Granos, legumbres, aceites de semillas, azúcar procesada'],
      relFasting: 'Flexible: 12:12 a 16:8',
    },
    pt: {
      lionTitle: 'Nível 1: Dieta do Leão',
      lionDesc: 'A dieta de eliminação definitiva. Ótima para curar o intestino e condições autoimunes graves.',
      lionAllowed: ['Carne de ruminantes (Boi, Cordeiro, Bisão)', 'Sal', 'Água'],
      lionAvoid: ['Todo o resto (Plantas, laticínios, ovos, aves, porco, especiarias)'],
      lionFasting: 'Recomendado: 16:8 ou OMAD (Uma Refeição Ao Dia)',
      
      stdTitle: 'Nível 2: Carnívoro Padrão',
      stdDesc: 'A abordagem mais comum. Oferece variedade mantendo as toxinas baixas.',
      stdAllowed: ['Todas as carnes (Boi, Porco, Frango, Peixe)', 'Ovos', 'Gorduras animais (Manteiga, Sebo, Banha)', 'Sal', 'Água'],
      stdAvoid: ['Alimentos vegetais, óleos de sementes, açúcar, adoçantes artificiais'],
      stdFasting: 'Recomendado: 16:8',
      
      relTitle: 'Nível 3: Carnívoro Relaxado',
      relDesc: 'Mais flexível, adequado para manutenção ou flexibilidade metabólica.',
      relAllowed: ['Todas as carnes e ovos', 'Laticínios (Queijo, Creme de Leite, Iogurte)', 'Especiarias', 'Café/Chá', 'Pequenas quantidades de fruta/mel (opcional)'],
      relAvoid: ['Grãos, leguminosas, óleos de sementes, açúcar processado'],
      relFasting: 'Flexível: 12:12 a 16:8',
    }
  };

  const t = content[lang];

  return [
    {
      id: DietLevel.LION,
      title: t.lionTitle,
      description: t.lionDesc,
      allowed: t.lionAllowed,
      avoid: t.lionAvoid,
      fasting: t.lionFasting,
    },
    {
      id: DietLevel.STANDARD,
      title: t.stdTitle,
      description: t.stdDesc,
      allowed: t.stdAllowed,
      avoid: t.stdAvoid,
      fasting: t.stdFasting,
    },
    {
      id: DietLevel.RELAXED,
      title: t.relTitle,
      description: t.relDesc,
      allowed: t.relAllowed,
      avoid: t.relAvoid,
      fasting: t.relFasting,
    }
  ];
};

export const getSampleMeals = (lang: Language): Record<DietLevel, DayPlan> => {
  if (lang === 'es') {
    return {
      [DietLevel.LION]: {
        breakfast: { name: 'Ribeye Salado', description: 'Un bistec graso cocinado en sebo.', ingredients: ['Bistec Ribeye', 'Sal', 'Sebo'] },
        lunch: { name: 'Bol de Carne Molida', description: 'Carne molida 80/20 con sal.', ingredients: ['Carne Molida', 'Sal'] },
        dinner: { name: 'Chuletas de Cordero', description: 'Chuletas de cordero a la parrilla.', ingredients: ['Chuletas de cordero', 'Sal'] }
      },
      [DietLevel.STANDARD]: {
        breakfast: { name: 'Tocino y Huevos', description: 'Clásicos básicos.', ingredients: ['4 Huevos', '4 Tiras de Tocino', 'Mantequilla'] },
        lunch: { name: 'Muslos de Pollo', description: 'Muslos crujientes con piel.', ingredients: ['Muslos de Pollo', 'Sal', 'Mantequilla'] },
        dinner: { name: 'Panceta Asada', description: 'Panceta de cerdo asada a fuego lento.', ingredients: ['Panceta', 'Sal'] }
      },
      [DietLevel.RELAXED]: {
        breakfast: { name: 'Tortilla de Queso', description: 'Huevos con queso cheddar.', ingredients: ['3 Huevos', 'Queso Cheddar', 'Crema'] },
        lunch: { name: 'Hamburguesa con Queso', description: 'Sin pan, extra queso.', ingredients: ['Carne de Res', 'Queso Suizo', 'Pepinillo'] },
        dinner: { name: 'Salmón a la Mantequilla', description: 'Salmón a la plancha.', ingredients: ['Filete de Salmón', 'Mantequilla', 'Limón', 'Eneldo'] }
      }
    };
  }
  if (lang === 'pt') {
    return {
      [DietLevel.LION]: {
        breakfast: { name: 'Ribeye Salgado', description: 'Um bife gordo cozido em sebo.', ingredients: ['Bife Ribeye', 'Sal', 'Sebo'] },
        lunch: { name: 'Tigela de Carne Moída', description: 'Carne moída 80/20 com sal.', ingredients: ['Carne Moída', 'Sal'] },
        dinner: { name: 'Costeletas de Cordeiro', description: 'Costeletas de cordeiro grelhadas.', ingredients: ['Costeletas de Cordeiro', 'Sal'] }
      },
      [DietLevel.STANDARD]: {
        breakfast: { name: 'Bacon e Ovos', description: 'Clássicos básicos.', ingredients: ['4 Ovos', '4 Tiras de Bacon', 'Manteiga'] },
        lunch: { name: 'Coxas de Frango', description: 'Coxas crocantes com pele.', ingredients: ['Coxas de Frango', 'Sal', 'Manteiga'] },
        dinner: { name: 'Barriga de Porco Assada', description: 'Barriga de porco assada lentamente.', ingredients: ['Barriga de Porco', 'Sal'] }
      },
      [DietLevel.RELAXED]: {
        breakfast: { name: 'Omelete de Queijo', description: 'Ovos com queijo cheddar.', ingredients: ['3 Ovos', 'Queijo Cheddar', 'Creme de Leite'] },
        lunch: { name: 'Hambúrguer com Queijo', description: 'Sem pão, queijo extra.', ingredients: ['Hambúrguer', 'Queijo Suíço', 'Picles'] },
        dinner: { name: 'Salmão na Manteiga', description: 'Salmão grelhado.', ingredients: ['Filé de Salmão', 'Manteiga', 'Limão', 'Endro'] }
      }
    };
  }
  // Default EN
  return {
    [DietLevel.LION]: {
      breakfast: { name: 'Salted Ribeye', description: 'A fatty steak cooked in tallow.', ingredients: ['Ribeye steak', 'Salt', 'Tallow'] },
      lunch: { name: 'Ground Beef Bowl', description: '80/20 Ground beef with salt.', ingredients: ['Ground Beef', 'Salt'] },
      dinner: { name: 'Lamb Chops', description: 'Grilled lamb chops.', ingredients: ['Lamb chops', 'Salt'] }
    },
    [DietLevel.STANDARD]: {
      breakfast: { name: 'Bacon & Eggs', description: 'Classic staples.', ingredients: ['4 Eggs', '4 Bacon Strips', 'Butter'] },
      lunch: { name: 'Chicken Thighs', description: 'Skin-on crispy chicken thighs.', ingredients: ['Chicken Thighs', 'Salt', 'Butter'] },
      dinner: { name: 'Pork Belly Roast', description: 'Slow roasted pork belly.', ingredients: ['Pork Belly', 'Salt'] }
    },
    [DietLevel.RELAXED]: {
      breakfast: { name: 'Cheesy Omelette', description: 'Eggs with cheddar.', ingredients: ['3 Eggs', 'Cheddar Cheese', 'Heavy Cream'] },
      lunch: { name: 'Burger Patty with Cheese', description: 'No bun, extra cheese.', ingredients: ['Beef Patty', 'Swiss Cheese', 'Pickle (optional)'] },
      dinner: { name: 'Salmon with Lemon Butter', description: 'Pan seared salmon.', ingredients: ['Salmon fillet', 'Butter', 'Lemon juice', 'Dill'] }
    }
  };
};

export const getWorkouts = (lang: Language): Record<Difficulty, WorkoutRoutine> => {
  if (lang === 'es') {
    return {
      [Difficulty.BEGINNER]: {
        level: Difficulty.BEGINNER,
        title: 'Rutina Principiante',
        duration: '15-20 min',
        exercises: [
          { name: 'Sentadillas', sets: 3, reps: '10-12', description: 'Pies al ancho de hombros, pecho arriba.' },
          { name: 'Flexiones de rodilla', sets: 3, reps: '8-10', description: 'Núcleo firme, baja el pecho al suelo.' },
          { name: 'Puente de Glúteos', sets: 3, reps: '12-15', description: 'Acuéstate, eleva caderas al techo.' },
          { name: 'Plancha', sets: 3, reps: '20-30 seg', description: 'Mantén línea recta de cabeza a talones.' }
        ]
      },
      [Difficulty.INTERMEDIATE]: {
        level: Difficulty.INTERMEDIATE,
        title: 'Rutina Intermedia',
        duration: '25-30 min',
        exercises: [
          { name: 'Sentadillas al aire', sets: 4, reps: '15-20', description: 'Profundidad total, subida explosiva.' },
          { name: 'Flexiones Estándar', sets: 4, reps: '10-15', description: 'Codos en ángulo de 45 grados.' },
          { name: 'Zancadas', sets: 3, reps: '10 cada pierna', description: 'Paso adelante, baja rodilla trasera.' },
          { name: 'Escaladores', sets: 3, reps: '30 seg', description: 'Lleva rodillas al pecho rápidamente.' },
          { name: 'Burpees', sets: 3, reps: '8-10', description: 'Sentadilla, patada atrás, flexión, salto.' }
        ]
      },
      [Difficulty.ADVANCED]: {
        level: Difficulty.ADVANCED,
        title: 'Rutina Avanzada',
        duration: '40-45 min',
        exercises: [
          { name: 'Sentadillas con Salto', sets: 5, reps: '15-20', description: 'Salto explosivo arriba.' },
          { name: 'Flexiones Diamante', sets: 4, reps: '12-15', description: 'Manos juntas bajo el pecho.' },
          { name: 'Sentadilla Búlgara', sets: 4, reps: '10 cada pierna', description: 'Pie trasero elevado en silla.' },
          { name: 'Plancha a Flexión', sets: 4, reps: '10', description: 'De codos a manos y volver.' },
          { name: 'Parada de Manos (Pared)', sets: 3, reps: '30-45 seg', description: 'Patea contra pared, núcleo firme.' }
        ]
      }
    };
  }
  if (lang === 'pt') {
    return {
      [Difficulty.BEGINNER]: {
        level: Difficulty.BEGINNER,
        title: 'Rotina Iniciante',
        duration: '15-20 min',
        exercises: [
          { name: 'Agachamentos', sets: 3, reps: '10-12', description: 'Pés na largura dos ombros, peito para cima.' },
          { name: 'Flexões de Joelho', sets: 3, reps: '8-10', description: 'Abdômen firme, desça o peito ao chão.' },
          { name: 'Ponte de Glúteos', sets: 3, reps: '12-15', description: 'Deite-se, levante os quadris.' },
          { name: 'Prancha', sets: 3, reps: '20-30 seg', description: 'Mantenha linha reta da cabeça aos calcanhares.' }
        ]
      },
      [Difficulty.INTERMEDIATE]: {
        level: Difficulty.INTERMEDIATE,
        title: 'Rotina Intermediária',
        duration: '25-30 min',
        exercises: [
          { name: 'Agachamentos Livres', sets: 4, reps: '15-20', description: 'Profundidade total, subida explosiva.' },
          { name: 'Flexões Padrão', sets: 4, reps: '10-15', description: 'Cotovelos em ângulo de 45 graus.' },
          { name: 'Afundos', sets: 3, reps: '10 cada perna', description: 'Passo à frente, baixe o joelho de trás.' },
          { name: 'Alpinistas', sets: 3, reps: '30 seg', description: 'Leve joelhos ao peito rapidamente.' },
          { name: 'Burpees', sets: 3, reps: '8-10', description: 'Agachamento, chute para trás, flexão, salto.' }
        ]
      },
      [Difficulty.ADVANCED]: {
        level: Difficulty.ADVANCED,
        title: 'Rotina Avançada',
        duration: '40-45 min',
        exercises: [
          { name: 'Agachamentos com Salto', sets: 5, reps: '15-20', description: 'Salto explosivo no topo.' },
          { name: 'Flexões Diamante', sets: 4, reps: '12-15', description: 'Mãos juntas sob o peito.' },
          { name: 'Agachamento Búlgaro', sets: 4, reps: '10 cada perna', description: 'Pé traseiro elevado em uma cadeira.' },
          { name: 'Prancha para Flexão', sets: 4, reps: '10', description: 'Vá dos cotovelos para as mãos e volte.' },
          { name: 'Parada de Mão (Parede)', sets: 3, reps: '30-45 seg', description: 'Chute contra a parede, núcleo firme.' }
        ]
      }
    };
  }
  // Default EN
  return {
    [Difficulty.BEGINNER]: {
      level: Difficulty.BEGINNER,
      title: 'Beginner Routine',
      duration: '15-20 min',
      exercises: [
        { name: 'Bodyweight Squats', sets: 3, reps: '10-12', description: 'Keep feet shoulder-width apart, chest up.' },
        { name: 'Knee Push-ups', sets: 3, reps: '8-10', description: 'Keep core tight, lower chest to floor.' },
        { name: 'Glute Bridges', sets: 3, reps: '12-15', description: 'Lye on back, lift hips towards ceiling.' },
        { name: 'Plank', sets: 3, reps: '20-30 sec', description: 'Hold straight line from head to heels/knees.' }
      ]
    },
    [Difficulty.INTERMEDIATE]: {
      level: Difficulty.INTERMEDIATE,
      title: 'Intermediate Routine',
      duration: '25-30 min',
      exercises: [
        { name: 'Air Squats', sets: 4, reps: '15-20', description: 'Full depth, explosive up.' },
        { name: 'Standard Push-ups', sets: 4, reps: '10-15', description: 'Elbows at 45 degree angle.' },
        { name: 'Lunges', sets: 3, reps: '10 each leg', description: 'Step forward, lower back knee to ground.' },
        { name: 'Mountain Climbers', sets: 3, reps: '30 sec', description: 'Drive knees to chest rapidly.' },
        { name: 'Burpees', sets: 3, reps: '8-10', description: 'Squat, kick back, push up, jump.' }
      ]
    },
    [Difficulty.ADVANCED]: {
      level: Difficulty.ADVANCED,
      title: 'Advanced Routine',
      duration: '40-45 min',
      exercises: [
        { name: 'Jump Squats', sets: 5, reps: '15-20', description: 'Explosive jump at the top.' },
        { name: 'Diamond Push-ups', sets: 4, reps: '12-15', description: 'Hands close together under chest.' },
        { name: 'Bulgarian Split Squats', sets: 4, reps: '10 each leg', description: 'Rear foot elevated on a chair/couch.' },
        { name: 'Plank to Push-up', sets: 4, reps: '10', description: 'Go from elbows to hands and back.' },
        { name: 'Handstand Hold (Wall)', sets: 3, reps: '30-45 sec', description: 'Kick up against a wall, hold tight core.' }
      ]
    }
  };
};