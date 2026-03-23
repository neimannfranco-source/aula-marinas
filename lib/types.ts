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