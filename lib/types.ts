export type Student = {
  id: string;
  name: string;
  code: string;
};

export type TabType = "phrases" | "vocab" | "dialogue" | "quiz";

export type ProgressPosition = {
  moduleId: string;
  tab: TabType;
  phraseIndex: number;
  vocabIndex: number;
  dialogueIndex: number;
  quizIndex: number;
};

export type AppState = {
  students: Student[];
  currentStudentId: string | null;
  progress: Record<string, Record<string, boolean>>;
  dictations: Record<string, string>;
  lastPosition: Record<string, Record<string, ProgressPosition>>;
  lastVisitedModuleId: Record<string, string>;
};

export type LoadStatus = "loading" | "ready";

export type ModuleType = {
  id: string;
  title: string;
  category: string;
  emoji: string;
  phrases: { pt: string; es: string }[];
  vocab: { pt: string; es: string }[];
  dialogue?: {
  speaker: string;
  pt: string;
  es: string;
}[];
  quiz?: {
    question: string;
    options: string[];
    answer: string;
  }[];
};