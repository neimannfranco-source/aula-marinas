import type { ModuleType } from "./types";

export const MODULES: ModuleType[] = [
  {
    id: "recepcao-boas-vindas",
    title: "Recepción y bienvenida",
    category: "Recepción",
    emoji: "🏨",
    phrases: [
      { pt: "Bom dia, bem-vindo ao hotel", es: "Buenos días, bienvenido al hotel" },
      { pt: "É um prazer recebê-lo", es: "Es un placer recibirlo" },
      { pt: "Como posso ajudar?", es: "¿Cómo puedo ayudar?" },
      { pt: "Tudo bem?", es: "¿Todo bien?" }
    ],
    vocab: [
      { pt: "hóspede", es: "huésped" },
      { pt: "recepção", es: "recepción" },
      { pt: "reserva", es: "reserva" },
      { pt: "quarto", es: "habitación" }
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
        question: "¿Cómo se dice 'Buenos días'?",
        options: ["Boa noite", "Bom dia", "Boa tarde"],
        answer: "Bom dia"
      }
    ]
  }
];