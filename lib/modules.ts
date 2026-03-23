import type { ModuleType } from "./types";

export const MODULES: ModuleType[] = [
  {
    id: "saudacoes",
    title: "Saludos",
    category: "Recepción",
    emoji: "🛎️",
    phrases: [
      { pt: "Bom dia", es: "Buenos días" },
      { pt: "Boa tarde", es: "Buenas tardes" },
      { pt: "Boa noite", es: "Buenas noches" }
    ],
    vocab: [
      { pt: "hóspede", es: "huésped" },
      { pt: "recepção", es: "recepción" },
      { pt: "reserva", es: "reserva" }
    ],
    miniDialogues: [
      {
        speaker: "Hóspede",
        pt: "Bom dia",
        es: "Buenos días"
      },
      {
        speaker: "Colaborador",
        pt: "Bom dia, bem-vindo ao hotel",
        es: "Buenos días, bienvenido al hotel"
      }
    ],
    quiz: [
      {
        question: "¿Cómo se dice 'Buenas tardes'?",
        options: ["Bom dia", "Boa tarde", "Boa noite"],
        answer: "Boa tarde"
      }
    ]
  }
];