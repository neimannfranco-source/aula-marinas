"use client";

import { useMemo, useState } from "react";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type ModuleType = {
  id: string;
  title: string;
  level: string;
  category: string;
  description: string;
  readingTitle: string;
  reading: string[];
  vocab: { es: string; pt: string }[];
  phrases: string[];
  roleplay: string;
  quiz: QuizQuestion[];
  dictation?: string;
};

const MODULES: ModuleType[] = [
  {
    id: "recepcion-primera-impresion",
    title: "Recepción y primera impresión",
    level: "Básico",
    category: "Recepción",
    description:
      "Saludos profesionales, bienvenida, confirmación de reserva y primera interacción con el huésped brasileño.",
    readingTitle: "Llegada de una pareja al hotel",
    reading: [
      "Son las tres de la tarde y una pareja brasileña llega al Hotel Marina Manzanos después de un viaje largo desde Bariloche. La recepcionista sonríe, se pone de pie y los saluda con cordialidad. Habla despacio, con claridad y usa frases simples en portugués para generar confianza desde el primer momento.",
      "“Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos. Como foi a viagem?” pregunta con tono amable. Los huéspedes sonríen y responden que están cansados, pero felices de haber llegado. La recepcionista continúa: “O senhor tem uma reserva em seu nome?” Mientras verifica la información en el sistema, mantiene una actitud profesional y tranquila.",
      "Después de confirmar la reserva, solicita la documentación de ambos pasajeros, explica que el check-in tardará solo unos minutos y ofrece ayuda con el equipaje. También aprovecha para informar el horario del desayuno y la conexión de wifi. Esta primera impresión transmite organización, hospitalidad y seguridad.",
    ],
    vocab: [
      { es: "bienvenidos", pt: "bem-vindos" },
      { es: "reserva", pt: "reserva" },
      { es: "documentación", pt: "documentação" },
      { es: "pasaporte", pt: "passaporte" },
      { es: "equipaje", pt: "bagagem" },
      { es: "recepción", pt: "recepção" },
      { es: "llave", pt: "chave" },
      { es: "desayuno", pt: "café da manhã" },
      { es: "hospedaje", pt: "hospedagem" },
      { es: "estadía", pt: "estadia" },
    ],
    phrases: [
      "Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos.",
      "O senhor tem uma reserva em seu nome?",
      "Posso ver seus documentos, por favor?",
      "O check-in será concluído em alguns minutos.",
      "O café da manhã é servido das 7h às 10h30.",
      "Se precisarem de ajuda com a bagagem, estou à disposição.",
    ],
    roleplay:
      "Una pareja brasileña llega al hotel. Debes saludar, confirmar la reserva, pedir los documentos y explicar el horario del desayuno.",
    quiz: [
      {
        question: "¿Cómo dirías “Bienvenidos al hotel” en portugués?",
        options: [
          "Bem-vindos ao hotel",
          "Boas-vindas do hotel",
          "Cheguem ao hotel",
          "Entram no hotel",
        ],
        answer: "Bem-vindos ao hotel",
      },
      {
        question: "¿Qué frase es correcta para pedir documentos?",
        options: [
          "Posso ver seus documentos, por favor?",
          "Você quer documentos agora?",
          "Dá seus papéis para mim",
          "Mostra a mala, por favor",
        ],
        answer: "Posso ver seus documentos, por favor?",
      },
      {
        question: "¿Cómo se dice “desayuno”?",
        options: ["Café da manhã", "Almoço", "Jantar", "Sobremesa"],
        answer: "Café da manhã",
      },
    ],
    dictation:
      "Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos. O café da manhã é servido das 7h às 10h30.",
  },
  {
    id: "restaurante-desayuno-buffet",
    title: "Restaurante y desayuno buffet",
    level: "Básico–Intermedio",
    category: "Gastronomía",
    description:
      "Atención cordial en el restaurante, explicación del buffet, bebidas y necesidades del huésped.",
    readingTitle: "Atención en el desayuno",
    reading: [
      "A la mañana siguiente, una familia brasileña entra al restaurante del hotel. Una colaboradora se acerca con una sonrisa y los acompaña hasta una mesa junto a la ventana. El objetivo es que el huésped se sienta orientado, cómodo y bien atendido desde el inicio del servicio.",
      "La colaboradora explica en portugués: “O café da manhã é servido em estilo buffet. Hoje temos pães, frutas, bolos, ovos mexidos, iogurte, cereais e opções sem glúten.” Luego pregunta si desean café, leche o jugo natural. La familia agradece la claridad y hace algunas preguntas sobre los productos regionales.",
      "Durante el servicio, el personal observa discretamente si falta algo en la mesa, si es necesario retirar vajilla o si algún huésped necesita información adicional. Una comunicación simple, natural y educada mejora mucho la experiencia general del restaurante.",
    ],
    vocab: [
      { es: "restaurante", pt: "restaurante" },
      { es: "desayuno buffet", pt: "café da manhã buffet" },
      { es: "jugo", pt: "suco" },
      { es: "pan", pt: "pão" },
      { es: "frutas", pt: "frutas" },
      { es: "huevos revueltos", pt: "ovos mexidos" },
      { es: "mesa", pt: "mesa" },
      { es: "taza", pt: "xícara" },
      { es: "sin gluten", pt: "sem glúten" },
      { es: "servicio", pt: "atendimento" },
    ],
    phrases: [
      "Bom dia, podem me acompanhar, por favor?",
      "O café da manhã é servido em estilo buffet.",
      "Hoje temos opções doces e salgadas.",
      "Gostariam de café, leite ou suco natural?",
      "Temos algumas opções sem glúten.",
      "Se precisarem de alguma coisa, estou à disposição.",
    ],
    roleplay:
      "Recibes a una familia en el restaurante. Debes guiarlos a la mesa, explicar el desayuno buffet y ofrecer bebidas.",
    quiz: [
      {
        question: "¿Cómo se dice “jugo natural”?",
        options: [
          "Suco natural",
          "Leite natural",
          "Bebida fresca",
          "Água doce",
        ],
        answer: "Suco natural",
      },
      {
        question: "¿Qué frase es la mejor para explicar el buffet?",
        options: [
          "O café da manhã é servido em estilo buffet.",
          "O buffet está comendo agora.",
          "Vocês fazem o buffet.",
          "O café da manhã termina a mesa.",
        ],
        answer: "O café da manhã é servido em estilo buffet.",
      },
      {
        question: "¿Cómo ofreces ayuda de forma profesional?",
        options: [
          "Se precisarem de alguma coisa, estou à disposição.",
          "Falem rápido comigo.",
          "Esperem aí.",
          "Depois eu volto, talvez.",
        ],
        answer: "Se precisarem de alguma coisa, estou à disposição.",
      },
    ],
    dictation:
      "Bom dia. O café da manhã é servido em estilo buffet e temos opções sem glúten.",
  },
];

export default function Home() {
  const [activeModuleId, setActiveModuleId] = useState<string>(MODULES[0].id);
  const [completed, setCompleted] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const activeModule =
    MODULES.find((module) => module.id === activeModuleId) ?? MODULES[0];

  const progress = useMemo(() => {
    return Math.round((completed.length / MODULES.length) * 100);
  }, [completed]);

  function toggleComplete(moduleId: string) {
    setCompleted((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  }

  function handleAnswer(questionKey: string, value: string) {
    setQuizAnswers((prev) => ({ ...prev, [questionKey]: value }));
  }

  function simulateAudio(moduleId: string) {
    setPlayingAudio(moduleId);
    window.setTimeout(() => {
      setPlayingAudio((current) => (current === moduleId ? null : current));
    }, 1800);
  }

  const score = activeModule.quiz.reduce((acc, question, index) => {
    const key = `${activeModule.id}-${index}`;
    return quizAnswers[key] === question.answer ? acc + 1 : acc;
  }, 0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f6f3eb 0%, #eef3ed 45%, #e6efe8 100%)",
        color: "#243126",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: 24 }}>
        <header
          style={{
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(80,100,80,0.12)",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 12px 30px rgba(40,60,40,0.08)",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: "#617261",
                  fontWeight: 700,
                }}
              >
                Hotel Marina Manzanos
              </p>
              <h1 style={{ margin: "8px 0 10px", fontSize: 34, lineHeight: 1.1 }}>
                Portugués para atención al huésped brasileño
              </h1>
              <p style={{ margin: 0, maxWidth: 820, color: "#506050", fontSize: 16 }}>
                Plataforma de capacitación interna con enfoque en hotelería,
                hospitalidad, comunicación profesional y situaciones reales de servicio.
              </p>
            </div>

            <div
              style={{
                minWidth: 260,
                background: "#f8fbf7",
                borderRadius: 20,
                padding: 18,
                border: "1px solid rgba(80,100,80,0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                <span>Progreso general</span>
                <span>{progress}%</span>
              </div>
              <div
                style={{
                  height: 10,
                  background: "#d9e5d8",
                  borderRadius: 999,
                  overflow: "hidden",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#6f8f6b",
                    borderRadius: 999,
                  }}
                />
              </div>
              <p style={{ margin: 0, color: "#5d6d5d", fontSize: 14 }}>
                {completed.length} de {MODULES.length} módulos completados
              </p>
            </div>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 24,
          }}
        >
          <aside
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(80,100,80,0.12)",
              borderRadius: 24,
              padding: 18,
              boxShadow: "0 12px 30px rgba(40,60,40,0.08)",
              height: "fit-content",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: 20 }}>Módulos</h2>

            <div style={{ display: "grid", gap: 12 }}>
              {MODULES.map((module) => {
                const isActive = module.id === activeModule.id;
                const isDone = completed.includes(module.id);

                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModuleId(module.id)}
                    style={{
                      textAlign: "left",
                      width: "100%",
                      borderRadius: 18,
                      padding: 16,
                      border: isActive
                        ? "1px solid #6f8f6b"
                        : "1px solid rgba(80,100,80,0.12)",
                      background: isActive ? "#edf5eb" : "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 8,
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <strong style={{ fontSize: 15 }}>{module.title}</strong>
                      <span
                        style={{
                          fontSize: 12,
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: isDone ? "#dcefd8" : "#efe9d9",
                          color: "#4c5c4a",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isDone ? "Completo" : module.level}
                      </span>
                    </div>
                    <div style={{ fontSize: 13, color: "#607060" }}>
                      {module.category}
                    </div>
                    <p style={{ margin: "8px 0 0", fontSize: 14, color: "#526252" }}>
                      {module.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div
              style={{
                marginTop: 18,
                padding: 16,
                borderRadius: 18,
                background: "#f7f3e8",
                border: "1px solid rgba(120,100,70,0.12)",
              }}
            >
              <strong style={{ display: "block", marginBottom: 8 }}>
                Biblioteca rápida
              </strong>
              <p style={{ margin: 0, fontSize: 14, color: "#645c4c" }}>
                Frases listas para check-in, restaurante, reservas y atención
                personalizada.
              </p>
            </div>
          </aside>

          <section
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(80,100,80,0.12)",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 12px 30px rgba(40,60,40,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#607060",
                    fontWeight: 700,
                  }}
                >
                  {activeModule.category}
                </p>
                <h2 style={{ margin: "6px 0 8px", fontSize: 28 }}>
                  {activeModule.title}
                </h2>
                <p style={{ margin: 0, color: "#5b6b5b", maxWidth: 760 }}>
                  {activeModule.description}
                </p>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  onClick={() => simulateAudio(activeModule.id)}
                  style={buttonStyle("#eef4ed", "#334433")}
                >
                  {playingAudio === activeModule.id ? "Reproduciendo..." : "▶ Audio"}
                </button>
                <button
                  onClick={() => toggleComplete(activeModule.id)}
                  style={buttonStyle(
                    completed.includes(activeModule.id) ? "#dcefd8" : "#f6efe0",
                    "#334433"
                  )}
                >
                  {completed.includes(activeModule.id)
                    ? "✓ Completado"
                    : "Marcar como completado"}
                </button>
              </div>
            </div>

            <Card title={activeModule.readingTitle}>
              {activeModule.reading.map((paragraph, index) => (
                <p
                  key={index}
                  style={{ marginTop: index === 0 ? 0 : 14, lineHeight: 1.7, color: "#324232" }}
                >
                  {paragraph}
                </p>
              ))}
            </Card>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
                marginTop: 18,
              }}
            >
              <Card title="Vocabulario clave">
                <div style={{ display: "grid", gap: 10 }}>
                  {activeModule.vocab.map((item) => (
                    <div
                      key={`${item.es}-${item.pt}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        paddingBottom: 8,
                        borderBottom: "1px solid rgba(80,100,80,0.08)",
                      }}
                    >
                      <span>{item.es}</span>
                      <strong>{item.pt}</strong>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Frases útiles">
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                  {activeModule.phrases.map((phrase) => (
                    <li key={phrase}>{phrase}</li>
                  ))}
                </ul>
              </Card>
            </div>

            <div style={{ marginTop: 18 }}>
              <Card title="Simulación / roleplay">
                <p style={{ margin: 0, lineHeight: 1.7 }}>{activeModule.roleplay}</p>
              </Card>
            </div>

            <div style={{ marginTop: 18 }}>
              <Card title="Quiz interactivo">
                <div style={{ display: "grid", gap: 18 }}>
                  {activeModule.quiz.map((question, index) => {
                    const key = `${activeModule.id}-${index}`;
                    const selected = quizAnswers[key];
                    const reveal = showResults[activeModule.id];

                    return (
                      <div
                        key={key}
                        style={{
                          padding: 16,
                          borderRadius: 18,
                          background: "#fbfcfa",
                          border: "1px solid rgba(80,100,80,0.10)",
                        }}
                      >
                        <strong style={{ display: "block", marginBottom: 12 }}>
                          {index + 1}. {question.question}
                        </strong>

                        <div style={{ display: "grid", gap: 10 }}>
                          {question.options.map((option) => {
                            const isSelected = selected === option;
                            const isCorrect = question.answer === option;

                            let background = "#ffffff";
                            if (reveal && isCorrect) background = "#dcefd8";
                            if (reveal && isSelected && !isCorrect) background = "#f7dddd";
                            if (!reveal && isSelected) background = "#eef4ed";

                            return (
                              <label
                                key={option}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  padding: 12,
                                  borderRadius: 14,
                                  border: "1px solid rgba(80,100,80,0.10)",
                                  background,
                                  cursor: "pointer",
                                }}
                              >
                                <input
                                  type="radio"
                                  name={key}
                                  value={option}
                                  checked={selected === option}
                                  onChange={() => handleAnswer(key, option)}
                                />
                                <span>{option}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <button
                    onClick={() =>
                      setShowResults((prev) => ({ ...prev, [activeModule.id]: true }))
                    }
                    style={buttonStyle("#6f8f6b", "#ffffff")}
                  >
                    Corregir respuestas
                  </button>
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: 14,
                      background: "#f3f6f1",
                      border: "1px solid rgba(80,100,80,0.10)",
                      fontWeight: 700,
                    }}
                  >
                    Puntaje: {score}/{activeModule.quiz.length}
                  </div>
                </div>
              </Card>
            </div>

            {activeModule.dictation ? (
              <div style={{ marginTop: 18 }}>
                <Card title="Dictado">
                  <p style={{ marginTop: 0, color: "#5b6b5b" }}>
                    Escuchá y escribí esta frase:
                  </p>
                  <div
                    style={{
                      padding: 16,
                      borderRadius: 16,
                      background: "#f8f5eb",
                      border: "1px solid rgba(120,100,70,0.12)",
                      lineHeight: 1.7,
                    }}
                  >
                    {activeModule.dictation}
                  </div>
                </Card>
              </div>
            ) : null}
          </section>
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        background: "#ffffff",
        borderRadius: 22,
        padding: 20,
        border: "1px solid rgba(80,100,80,0.10)",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 14, fontSize: 20 }}>{title}</h3>
      {children}
    </section>
  );
}

function buttonStyle(background: string, color: string): React.CSSProperties {
  return {
    border: "none",
    background,
    color,
    borderRadius: 14,
    padding: "12px 16px",
    fontWeight: 700,
    cursor: "pointer",
  };
}