export type View = 'dashboard' | 'diet' | 'fasting' | 'workouts' | 'progress';
export type Language = 'en' | 'es' | 'pt';

export enum DietLevel {
  LION = 'LION',
  STANDARD = 'STANDARD',
  RELAXED = 'RELAXED'
}

export interface Meal {
  name: string;
  description: string;
  calories?: number;
  ingredients: string[];
}

export interface DayPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Exercise {
  name: string;
  reps: string;
  sets: number;
  description: string;
}

export interface WorkoutRoutine {
  level: Difficulty;
  title: string;
  exercises: Exercise[];
  duration: string;
}

export interface WeightLog {
  date: string;
  weight: number;
}

export interface FastingState {
  isFasting: boolean;
  startTime: number | null; // Timestamp
  goalHours: number;
}
