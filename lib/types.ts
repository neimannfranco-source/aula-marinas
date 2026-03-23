export type Student = {
  id: string;
  name: string;
  code: string;
};

export type AppState = {
  students: Student[];
  currentStudentId: string | null;
  progress: Record<string, Record<string, boolean>>;
  dictations: Record<string, string>;
};

export type LoadStatus = "loading" | "ready";

export type ModuleType = {
  id: string;
  title: string;
  category: string;
  emoji: string;
  phrases: { pt: string; es: string }[];
  vocab: { pt: string; es: string }[];
  miniDialogues: {
    speaker: string;
    pt: string;
    es: string;
  }[];
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
};