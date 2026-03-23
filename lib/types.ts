export type VocabItem = { es: string; pt: string };
export type QuizQuestion = { question: string; options: string[]; answer: string };
export type ModuleType = {
  id: string;
  title: string;
  level: string;
  category: string;
  emoji: string;
  description: string;
  readingTitle: string;
  reading: string[];
  vocab: VocabItem[];
  quiz: QuizQuestion[];
  dictation: string;
};

export type Student = { id: string; name: string; code: string };
export type ModuleProgress = {
  completed: boolean;
  score: number;
  total: number;
  attempts: number;
};
export type DictationResult = {
  exact: boolean;
  score: number;
  written: string;
  expected: string;
  updatedAt: string;
};
export type AppState = {
  students: Student[];
  currentStudentId: string | null;
  progress: Record<string, Record<string, ModuleProgress>>;
  dictations: Record<string, Record<string, DictationResult>>;
};
export type LoadStatus = "loading" | "ready" | "error";
export type ActiveSection = "reading" | "quiz" | "dictation" | "vocab";
export type TeacherTab = "students" | "progress" | "dictations";

