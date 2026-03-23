export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export type ModuleType = {
  id: string;
  title: string;
  level: string;
  category: string;
  emoji: string;
  description: string;
  objectives: string[];
  readingTitle: string;
  reading: string[];
  vocab: { es: string; pt: string }[];
  phrases: { es: string; pt: string }[];
  roleplayTitle: string;
  roleplay: string[];
  quiz: QuizQuestion[];
  dictation?: string;
};

export const MODULES: ModuleType[] = [
  {
    id: "recepcao-primeira-impressao",
    title: "Recepción y primera impresión",
    level: "Básico",
    category: "Recepción",
    emoji: "🛎️",
    description:
      "Saludos formales, bienvenida y confirmación de reserva.",
    objectives: [
      "Dar la bienvenida con cortesía.",
      "Solicitar documentos con profesionalismo.",
    ],
    readingTitle: "Primer contacto en la recepción",
    reading: [
      "Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos.",
      "Vou localizar sua reserva no sistema.",
    ],
    vocab: [
      { es: "bienvenidos", pt: "sejam bem-vindos" },
      { es: "reserva", pt: "reserva" },
    ],
    phrases: [
      {
        es: "Buenas tardes, bienvenidos al hotel.",
        pt: "Boa tarde, sejam bem-vindos ao hotel.",
      },
    ],
    roleplayTitle: "Llegada de huéspedes",
    roleplay: [
      "Saludar",
      "Confirmar reserva",
      "Pedir documentos",
    ],
    quiz: [
      {
        question: "¿Cómo se dice ‘bienvenidos’?",
        options: ["sejam bem-vindos", "boa noite", "obrigado"],
        answer: "sejam bem-vindos",
      },
    ],
    dictation: "Boa tarde, sejam bem-vindos ao hotel.",
  },
];