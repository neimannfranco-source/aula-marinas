"use client";

import React, { useEffect, useMemo, useState } from "react";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

type ModuleType = {
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

type ProgressMap = Record<string, boolean>;
type AnswersMap = Record<string, string>;

const BRAND = {
  bg: "#f5f1e8",
  card: "rgba(255,255,255,0.88)",
  text: "#243126",
  softText: "#5f6c62",
  primary: "#49634f",
  primaryDark: "#364b3a",
  accent: "#c9b38b",
  line: "rgba(73,99,79,0.14)",
  success: "#2c7a53",
  warning: "#9b6b31",
  shadow: "0 14px 40px rgba(36,49,38,0.10)",
};

const MODULES: ModuleType[] = [
  {
    id: "recepcao-primeira-impressao",
    title: "Recepción y primera impresión",
    level: "Básico",
    category: "Recepción",
    emoji: "🛎️",
    description:
      "Saludos formales, bienvenida, tratamiento profesional y apertura correcta de la atención al huésped brasileño.",
    objectives: [
      "Dar la bienvenida con seguridad y cortesía.",
      "Usar senhor/senhora correctamente.",
      "Solicitar reserva y documentos de forma profesional.",
    ],
    readingTitle: "Primer contacto en la recepción",
    reading: [
      "Es temprano por la tarde en el Hotel Marina Manzanos y una pareja brasileña llega a la recepción después de un viaje largo. El colaborador los recibe con una sonrisa, mantiene una postura profesional y utiliza un saludo claro y amable: ‘Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos’. Desde el primer momento, el tono debe transmitir hospitalidad, calma y confianza.",
      "Luego de la bienvenida inicial, el recepcionista confirma la reserva con naturalidad y cortesía. En portugués profesional, no se trata solo de traducir palabra por palabra, sino de construir frases completas, claras y elegantes: ‘O senhor tem uma reserva em seu nome?’ o ‘A senhora poderia me informar seu documento, por favor?’. El trato formal es fundamental porque comunica respeto y eleva la percepción de calidad del servicio.",
      "Durante esta etapa, también es importante explicar lo que se está haciendo. Por ejemplo: ‘Vou localizar sua reserva no sistema’, ‘Vou realizar seu check-in’ o ‘Só um momento, por favor’. Estas expresiones ayudan a acompañar al huésped lingüísticamente y reducen la ansiedad natural de la llegada. La buena atención no consiste únicamente en resolver rápido, sino en hacer que el huésped se sienta atendido en cada paso del proceso.",
      "En un hotel de alto nivel, la primera impresión tiene impacto directo en la experiencia general. Por eso, el colaborador debe evitar estructuras demasiado informales o traducciones literales del español. El objetivo es hablar un portugués simple, correcto, cordial y funcional, capaz de transmitir profesionalismo desde el primer minuto.",
    ],
    vocab: [
      { es: "buenas tardes", pt: "boa tarde" },
      { es: "bienvenidos", pt: "sejam bem-vindos" },
      { es: "reserva", pt: "reserva" },
      { es: "documento", pt: "documento" },
      { es: "pasaporte", pt: "passaporte" },
      { es: "recepción", pt: "recepção" },
      { es: "sistema", pt: "sistema" },
      { es: "un momento", pt: "um momento" },
      { es: "por favor", pt: "por favor" },
      { es: "check-in", pt: "check-in" },
    ],
    phrases: [
      {
        es: "Buenas tardes, bienvenidos al Hotel Marina Manzanos.",
        pt: "Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos.",
      },
      {
        es: "¿Tiene una reserva a su nombre?",
        pt: "O senhor tem uma reserva em seu nome?",
      },
      {
        es: "¿Podría mostrarme su documento, por favor?",
        pt: "A senhora poderia me mostrar seu documento, por favor?",
      },
      {
        es: "Voy a buscar su reserva en el sistema.",
        pt: "Vou localizar sua reserva no sistema.",
      },
      {
        es: "Un momento, por favor.",
        pt: "Só um momento, por favor.",
      },
    ],
    roleplayTitle: "Simulación: llegada de una pareja brasileña",
    roleplay: [
      "1. Salude formalmente a los huéspedes.",
      "2. Confirme si tienen una reserva.",
      "3. Solicite el documento de identidad o pasaporte.",
      "4. Explique que va a realizar el check-in en el sistema.",
      "5. Cierre con una frase cordial de acompañamiento.",
    ],
    quiz: [
      {
        question: "¿Cuál es la forma más profesional de dar la bienvenida?",
        options: [
          "Oi, tudo bem?",
          "Boa tarde, sejam bem-vindos ao hotel.",
          "E aí, vocês têm reserva?",
          "Chegaram agora?",
        ],
        answer: "Boa tarde, sejam bem-vindos ao hotel.",
        explanation: "Es la opción formal, cordial y apropiada para hotelería.",
      },
      {
        question: "¿Cómo se solicita un documento con cortesía?",
        options: [
          "Me dá seu documento.",
          "Documento agora.",
          "Poderia me mostrar seu documento, por favor?",
          "Tem identidade?",
        ],
        answer: "Poderia me mostrar seu documento, por favor?",
        explanation: "La estructura con ‘poderia’ y ‘por favor’ suena profesional y respetuosa.",
      },
      {
        question: "¿Cuál frase sirve para acompañar el proceso?",
        options: [
          "Vou localizar sua reserva no sistema.",
          "Espera aí.",
          "Tá demorando.",
          "Depois eu vejo.",
        ],
        answer: "Vou localizar sua reserva no sistema.",
        explanation: "Explica la acción y transmite seguridad al huésped.",
      },
    ],
    dictation:
      "Boa tarde, sejam bem-vindos ao Hotel Marina Manzanos. Vou localizar sua reserva no sistema e realizar seu check-in.",
  },
  {
    id: "interacao-orientacao-hospede",
    title: "Interacción y orientación al huésped",
    level: "Básico",
    category: "Atención",
    emoji: "🧭",
    description:
      "Preguntas abiertas, acompañamiento conversacional y explicación de servicios del hotel.",
    objectives: [
      "Hacer preguntas abiertas con tono profesional.",
      "Orientar al huésped dentro del hotel.",
      "Explicar servicios con claridad y naturalidad.",
    ],
    readingTitle: "Orientar con calidez y precisión",
    reading: [
      "Después del check-in, muchos huéspedes necesitan una explicación breve sobre los servicios del hotel. En esta etapa, el colaborador debe mantener un portugués claro, cordial y organizado. No basta con dar información aislada: es importante conducir la conversación con naturalidad, guiando al huésped paso a paso.",
      "Preguntas como ‘Em que posso ajudá-lo?’ o ‘Gostaria de conhecer os serviços do hotel?’ ayudan a abrir la interacción de forma profesional. Luego, el recepcionista puede explicar horarios, espacios comunes y opciones disponibles: desayuno, restaurante, spa, estacionamiento, wifi, piscina o excursiones. El huésped brasileño valora mucho la atención amable y la claridad en la comunicación.",
      "Además, es útil combinar información con recomendaciones. Por ejemplo: ‘O café da manhã é servido das 7 às 10’ y luego ‘Se o senhor desejar, também posso indicar passeios na região’. Este tipo de transición hace que la conversación no sea robótica, sino realmente hospitalaria. La orientación lingüística forma parte de la experiencia premium.",
      "Cuando un colaborador domina estas estructuras, no solo responde preguntas: acompaña, anticipa necesidades y fortalece la imagen del hotel. Hablar bien no es decorar frases, sino saber guiar al huésped con elegancia y seguridad.",
    ],
    vocab: [
      { es: "servicios", pt: "serviços" },
      { es: "desayuno", pt: "café da manhã" },
      { es: "horario", pt: "horário" },
      { es: "restaurante", pt: "restaurante" },
      { es: "wifi", pt: "wifi" },
      { es: "estacionamiento", pt: "estacionamento" },
      { es: "piscina", pt: "piscina" },
      { es: "excursión", pt: "passeio" },
      { es: "ayudar", pt: "ajudar" },
      { es: "indicar", pt: "indicar" },
    ],
    phrases: [
      {
        es: "¿En qué puedo ayudarlo?",
        pt: "Em que posso ajudá-lo?",
      },
      {
        es: "¿Le gustaría conocer los servicios del hotel?",
        pt: "Gostaria de conhecer os serviços do hotel?",
      },
      {
        es: "El desayuno se sirve de 7 a 10.",
        pt: "O café da manhã é servido das 7 às 10.",
      },
      {
        es: "También puedo recomendarle paseos por la región.",
        pt: "Também posso lhe indicar passeios pela região.",
      },
      {
        es: "El estacionamiento está incluido.",
        pt: "O estacionamento está incluído.",
      },
    ],
    roleplayTitle: "Simulación: explicar servicios del hotel",
    roleplay: [
      "1. Pregunte en qué puede ayudar.",
      "2. Ofrezca explicar los servicios principales.",
      "3. Informe el horario del desayuno.",
      "4. Mencione un servicio adicional incluido.",
      "5. Recomiende una actividad local.",
    ],
    quiz: [
      {
        question: "¿Cuál es una pregunta abierta y profesional?",
        options: [
          "Quer o quê?",
          "Em que posso ajudá-lo?",
          "Vai sair agora?",
          "Tá precisando?",
        ],
        answer: "Em que posso ajudá-lo?",
      },
      {
        question: "¿Cómo se informa correctamente un horario?",
        options: [
          "Café cedo.",
          "Tem café ali.",
          "O café da manhã é servido das 7 às 10.",
          "Café quando quiser.",
        ],
        answer: "O café da manhã é servido das 7 às 10.",
      },
      {
        question: "¿Qué frase agrega valor comercial a la atención?",
        options: [
          "Também posso lhe indicar passeios pela região.",
          "Não sei nada da cidade.",
          "Pergunte depois.",
          "Acho que tem alguma coisa por aí.",
        ],
        answer: "Também posso lhe indicar passeios pela região.",
      },
    ],
    dictation:
      "Em que posso ajudá-lo? O café da manhã é servido das 7 às 10 e também posso lhe indicar passeios pela região.",
  },
  {
    id: "checkin-registro-documental",
    title: "Check-in y registro documental técnico",
    level: "Básico / Intermedio",
    category: "Recepción",
    emoji: "📄",
    description:
      "Pago, firma, facturación, garantía y confirmación estructurada de datos.",
    objectives: [
      "Confirmar datos con precisión.",
      "Explicar pago, firma y garantía.",
      "Cerrar el proceso con claridad profesional.",
    ],
    readingTitle: "El check-in como proceso técnico y humano",
    reading: [
      "En el check-in no solo se recibe al huésped: también se formaliza la estadía. El colaborador debe explicar de manera ordenada el proceso de pago, la garantía solicitada, la firma de la documentación y la emisión de la factura. Cada paso debe ser comunicado con claridad para evitar dudas y transmitir confianza.",
      "Frases como ‘Vou confirmar seus dados’, ‘O pagamento pode ser realizado com cartão ou dinheiro’ y ‘Precisamos de uma garantia para a estadia’ permiten conducir el proceso con profesionalismo. También es importante verificar fechas, cantidad de huéspedes, tipo de alojamiento y datos de contacto antes de finalizar.",
      "La buena comunicación en esta fase reduce errores operativos y mejora la percepción de organización. El huésped debe sentir que el hotel trabaja con un estándar sólido, sin perder calidez en el trato.",
    ],
    vocab: [
      { es: "pago", pt: "pagamento" },
      { es: "firma", pt: "assinatura" },
      { es: "factura", pt: "fatura" },
      { es: "garantía", pt: "garantia" },
      { es: "tarjeta", pt: "cartão" },
      { es: "efectivo", pt: "dinheiro" },
      { es: "datos", pt: "dados" },
      { es: "estadía", pt: "estadia" },
      { es: "confirmar", pt: "confirmar" },
      { es: "finalizar", pt: "finalizar" },
    ],
    phrases: [
      { es: "Voy a confirmar sus datos.", pt: "Vou confirmar seus dados." },
      {
        es: "El pago puede realizarse con tarjeta o en efectivo.",
        pt: "O pagamento pode ser realizado com cartão ou dinheiro.",
      },
      {
        es: "Necesitamos una garantía para la estadía.",
        pt: "Precisamos de uma garantia para a estadia.",
      },
      {
        es: "Por favor, firme aquí.",
        pt: "Por favor, assine aqui.",
      },
      {
        es: "Su check-in ha sido finalizado correctamente.",
        pt: "Seu check-in foi finalizado com sucesso.",
      },
    ],
    roleplayTitle: "Simulación: proceso completo de registro",
    roleplay: [
      "1. Confirme nombre, fechas y tipo de reserva.",
      "2. Explique las opciones de pago.",
      "3. Solicite la garantía de la estadía.",
      "4. Pida la firma del formulario o comprobante.",
      "5. Cierre informando que el proceso fue finalizado.",
    ],
    quiz: [
      {
        question: "¿Cómo se expresa una explicación de pago profesional?",
        options: [
          "Paga agora.",
          "O pagamento pode ser realizado com cartão ou dinheiro.",
          "Você paga ali depois.",
          "Qualquer coisa serve.",
        ],
        answer: "O pagamento pode ser realizado com cartão ou dinheiro.",
      },
      {
        question: "¿Cuál es la frase correcta para pedir una firma?",
        options: [
          "Escreve aqui.",
          "Assine aí.",
          "Por favor, assine aqui.",
          "Tem que assinar.",
        ],
        answer: "Por favor, assine aqui.",
      },
      {
        question: "¿Qué frase comunica cierre del proceso?",
        options: [
          "Acabou.",
          "Seu check-in foi finalizado com sucesso.",
          "Tá tudo certo aí.",
          "Já era.",
        ],
        answer: "Seu check-in foi finalizado com sucesso.",
      },
    ],
    dictation:
      "Vou confirmar seus dados. O pagamento pode ser realizado com cartão ou dinheiro, e precisamos de uma garantia para a estadia.",
  },
  {
    id: "categorias-alojamento",
    title: "Descripción comercial de categorías de alojamiento",
    level: "Intermedio",
    category: "Ventas",
    emoji: "🏡",
    description:
      "Cabañas, lofts y suites: capacidad, distribución, equipamiento y diferenciación estratégica.",
    objectives: [
      "Describir alojamientos con vocabulario comercial elegante.",
      "Explicar capacidad, distribución y servicios.",
      "Destacar atributos diferenciales según perfil del huésped.",
    ],
    readingTitle: "Presentar cada categoría con valor real",
    reading: [
      "Cuando un huésped consulta por una categoría de alojamiento, el colaborador debe ir más allá de una lista de características. Es fundamental presentar el espacio de forma estratégica, conectando capacidad, distribución, confort y experiencia. En portugués, esta descripción debe sonar natural, refinada y comercial.",
      "Por ejemplo, una cabaña puede ser ideal para familias porque ofrece amplitud, varias áreas y mayor privacidad. Un loft, en cambio, puede ser presentado como una opción moderna, funcional y acogedora para parejas. Las suites pueden destacarse por su elegancia, sus vistas privilegiadas y sus detalles de confort superior, como banheira de hidromassagem, calefacción o amenities diferenciados.",
      "El colaborador debe saber comparar sin desvalorizar ninguna categoría. La clave está en asociar cada opción al perfil correcto del huésped. Así, la comunicación se vuelve más inteligente y orientada a la experiencia.",
    ],
    vocab: [
      { es: "cabaña", pt: "cabana" },
      { es: "loft", pt: "loft" },
      { es: "suite", pt: "suíte" },
      { es: "capacidad", pt: "capacidade" },
      { es: "distribución", pt: "distribuição" },
      { es: "equipamiento", pt: "estrutura" },
      { es: "calefacción", pt: "aquecimento" },
      { es: "hidromasaje", pt: "hidromassagem" },
      { es: "vista", pt: "vista" },
      { es: "privacidad", pt: "privacidade" },
    ],
    phrases: [
      {
        es: "La cabaña es ideal para familias por su amplitud y privacidad.",
        pt: "A cabana é ideal para famílias por sua amplitude e privacidade.",
      },
      {
        es: "El loft ofrece un estilo moderno y funcional.",
        pt: "O loft oferece um estilo moderno e funcional.",
      },
      {
        es: "La suite se destaca por su confort y su vista.",
        pt: "A suíte se destaca pelo conforto e pela vista.",
      },
      {
        es: "Esta categoría incluye calefacción y bañera de hidromasaje.",
        pt: "Esta categoria inclui aquecimento e banheira de hidromassagem.",
      },
      {
        es: "Puedo ayudarlo a elegir la opción más adecuada.",
        pt: "Posso ajudá-lo a escolher a opção mais adequada.",
      },
    ],
    roleplayTitle: "Simulación: recomendar un tipo de alojamiento",
    roleplay: [
      "1. Pregunte si viajan en pareja, familia o por estadía prolongada.",
      "2. Describa dos categorías diferentes.",
      "3. Destaque capacidad y distribución.",
      "4. Mencione un atributo diferencial de confort.",
      "5. Recomiende una opción final con elegancia.",
    ],
    quiz: [
      {
        question: "¿Qué frase suena más comercial y profesional?",
        options: [
          "A suíte se destaca pelo conforto e pela vista.",
          "Essa é melhor.",
          "Tem quarto grande.",
          "Acho que serve.",
        ],
        answer: "A suíte se destaca pelo conforto e pela vista.",
      },
      {
        question: "¿Cómo describir una cabaña para familias?",
        options: [
          "A cabana é ideal para famílias por sua amplitude e privacidade.",
          "Tem espaço.",
          "É grande só.",
          "Cabem todos aí.",
        ],
        answer: "A cabana é ideal para famílias por sua amplitude e privacidade.",
      },
      {
        question: "¿Qué expresión ayuda a orientar la decisión?",
        options: [
          "Posso ajudá-lo a escolher a opção mais adequada.",
          "Decide você.",
          "Não sei qual é melhor.",
          "Tanto faz.",
        ],
        answer: "Posso ajudá-lo a escolher a opção mais adequada.",
      },
    ],
  },
  {
    id: "comparacao-recomendacao",
    title: "Comparación y recomendación estratégica",
    level: "Intermedio",
    category: "Ventas",
    emoji: "✨",
    description:
      "Cómo orientar al huésped según perfil con lenguaje comercial elegante.",
    objectives: [
      "Comparar categorías sin desvalorizar opciones.",
      "Detectar necesidades del huésped.",
      "Sugerir la alternativa más conveniente.",
    ],
    readingTitle: "Recomendar con inteligencia comercial",
    reading: [
      "La recomendación estratégica no consiste en empujar una categoría más cara, sino en alinear la propuesta con el perfil del huésped. Para familias, pueden priorizarse espacio, funcionalidad y comodidad. Para parejas, suelen destacarse privacidad, vista y clima romántico. Para estadías prolongadas, conviene enfatizar practicidad, equipamiento y confort diario.",
      "En portugués profesional, conviene usar estructuras como ‘Para o perfil de vocês, eu recomendaria...’, ‘Se preferirem mais privacidade...’ o ‘Para uma estadia mais longa, esta categoria costuma ser a mais conveniente’. Estas fórmulas permiten sonar elegantes, seguros y cercanos al mismo tiempo.",
    ],
    vocab: [
      { es: "perfil", pt: "perfil" },
      { es: "pareja", pt: "casal" },
      { es: "familia", pt: "família" },
      { es: "estadía prolongada", pt: "estadia prolongada" },
      { es: "conveniente", pt: "conveniente" },
      { es: "recomendar", pt: "recomendar" },
      { es: "privacidad", pt: "privacidade" },
      { es: "comodidad", pt: "comodidade" },
    ],
    phrases: [
      {
        es: "Para su perfil, yo recomendaría esta categoría.",
        pt: "Para o perfil de vocês, eu recomendaria esta categoria.",
      },
      {
        es: "Si prefieren más privacidad, esta opción puede ser ideal.",
        pt: "Se preferirem mais privacidade, esta opção pode ser ideal.",
      },
      {
        es: "Para una estadía más larga, esta categoría suele ser la más conveniente.",
        pt: "Para uma estadia mais longa, esta categoria costuma ser a mais conveniente.",
      },
    ],
    roleplayTitle: "Simulación: orientar según perfil",
    roleplay: [
      "1. Identifique el perfil del huésped.",
      "2. Compare dos categorías con argumentos distintos.",
      "3. Destaque la opción más conveniente.",
      "4. Cierre con una recomendación clara y elegante.",
    ],
    quiz: [
      {
        question: "¿Cuál es la estructura más profesional para recomendar?",
        options: [
          "Para o perfil de vocês, eu recomendaria esta categoria.",
          "Peguem essa.",
          "Acho melhor essa aí.",
          "Essa dá na mesma.",
        ],
        answer: "Para o perfil de vocês, eu recomendaria esta categoria.",
      },
      {
        question: "¿Qué frase funciona para una estadía larga?",
        options: [
          "Para uma estadia mais longa, esta categoria costuma ser a mais conveniente.",
          "Fica aí bastante tempo então.",
          "Essa resolve.",
          "É o que tem.",
        ],
        answer: "Para uma estadia mais longa, esta categoria costuma ser a mais conveniente.",
      },
    ],
  },
  {
    id: "reclamos-inconvenientes",
    title: "Gestión formal de reclamos e inconvenientes",
    level: "Intermedio",
    category: "Atención",
    emoji: "🤝",
    description:
      "Disculpas profesionales, validación, propuesta de solución y seguimiento.",
    objectives: [
      "Pedir disculpas con lenguaje adecuado.",
      "Validar la situación sin confrontar.",
      "Proponer soluciones y seguimiento.",
    ],
    readingTitle: "Resolver con empatía y profesionalismo",
    reading: [
      "En hotelería, los reclamos forman parte de la operación. La diferencia está en cómo se gestionan. Un colaborador preparado no minimiza el problema ni responde de forma defensiva: escucha, valida la situación, pide disculpas con elegancia y comunica una solución concreta.",
      "En portugués, expresiones como ‘Lamentamos o inconveniente’, ‘Entendo perfeitamente sua situação’ y ‘Vamos verificar isso imediatamente’ ayudan a contener emocionalmente al huésped. Después, es clave explicar qué se hará y en cuánto tiempo, manteniendo siempre un tono profesional y sereno.",
    ],
    vocab: [
      { es: "inconveniente", pt: "inconveniente" },
      { es: "reclamo", pt: "reclamação" },
      { es: "lamentamos", pt: "lamentamos" },
      { es: "verificar", pt: "verificar" },
      { es: "solución", pt: "solução" },
      { es: "seguimiento", pt: "acompanhamento" },
    ],
    phrases: [
      {
        es: "Lamentamos el inconveniente.",
        pt: "Lamentamos o inconveniente.",
      },
      {
        es: "Entiendo perfectamente su situación.",
        pt: "Entendo perfeitamente sua situação.",
      },
      {
        es: "Vamos a verificar esto de inmediato.",
        pt: "Vamos verificar isso imediatamente.",
      },
      {
        es: "Le mantendremos informado.",
        pt: "Manteremos o senhor informado.",
      },
    ],
    roleplayTitle: "Simulación: reclamo por ruido o limpieza",
    roleplay: [
      "1. Escuche y valide el reclamo.",
      "2. Pida disculpas formalmente.",
      "3. Explique que va a verificar la situación.",
      "4. Proponga una solución o tiempo de respuesta.",
    ],
    quiz: [
      {
        question: "¿Qué frase valida correctamente al huésped?",
        options: [
          "Entendo perfeitamente sua situação.",
          "Não é tão grave.",
          "Isso acontece.",
          "Não podemos fazer nada.",
        ],
        answer: "Entendo perfeitamente sua situação.",
      },
      {
        question: "¿Qué frase muestra acción inmediata?",
        options: [
          "Vamos verificar isso imediatamente.",
          "Talvez depois.",
          "Quando der, vejo.",
          "Não sei.",
        ],
        answer: "Vamos verificar isso imediatamente.",
      },
    ],
  },
  {
    id: "modificacoes-reserva",
    title: "Modificaciones de reserva y disponibilidad",
    level: "Intermedio",
    category: "Reservas",
    emoji: "📅",
    description:
      "Cambios de fechas, extensiones, reducciones, upgrades y políticas aplicadas.",
    objectives: [
      "Gestionar cambios con claridad.",
      "Explicar disponibilidad y condiciones.",
      "Comunicar políticas con tono elegante.",
    ],
    readingTitle: "Cambios de reserva con claridad total",
    reading: [
      "Las modificaciones de reserva exigen precisión verbal y control del detalle. Cuando un huésped solicita cambiar fechas, extender la estadía o reducir noches, el colaborador debe confirmar la disponibilidad, revisar la tarifa aplicable y explicar las condiciones correspondientes sin generar confusión.",
      "En portugués, se recomienda organizar la comunicación en tres pasos: confirmar el pedido, verificar la disponibilidad y explicar el resultado. Frases como ‘Vou verificar a disponibilidade para as novas datas’ o ‘Esta alteração está sujeita à política da reserva’ ayudan a mantener una estructura clara y profesional.",
    ],
    vocab: [
      { es: "cambio", pt: "alteração" },
      { es: "disponibilidad", pt: "disponibilidade" },
      { es: "extensión", pt: "extensão" },
      { es: "reducción", pt: "redução" },
      { es: "upgrade", pt: "upgrade" },
      { es: "política", pt: "política" },
    ],
    phrases: [
      {
        es: "Voy a verificar la disponibilidad para las nuevas fechas.",
        pt: "Vou verificar a disponibilidade para as novas datas.",
      },
      {
        es: "Esta modificación está sujeta a la política de la reserva.",
        pt: "Esta alteração está sujeita à política da reserva.",
      },
      {
        es: "Podemos ofrecerle un upgrade sujeto a disponibilidad.",
        pt: "Podemos oferecer um upgrade sujeito à disponibilidade.",
      },
    ],
    roleplayTitle: "Simulación: cambio de fechas",
    roleplay: [
      "1. Confirme qué desea modificar el huésped.",
      "2. Informe que va a verificar disponibilidad.",
      "3. Explique si hay cambios de tarifa o política.",
      "4. Cierre con una alternativa viable.",
    ],
    quiz: [
      {
        question: "¿Qué frase informa una verificación correcta?",
        options: [
          "Vou verificar a disponibilidade para as novas datas.",
          "Talvez tenha.",
          "Depois falo.",
          "Não sei ainda.",
        ],
        answer: "Vou verificar a disponibilidade para as novas datas.",
      },
      {
        question: "¿Cómo se explica una condición formalmente?",
        options: [
          "Esta alteração está sujeita à política da reserva.",
          "Tem umas regras aí.",
          "Não depende de mim.",
          "É complicado.",
        ],
        answer: "Esta alteração está sujeita à política da reserva.",
      },
    ],
  },
  {
    id: "comunicacao-escrita",
    title: "Comunicación escrita profesional",
    level: "Intermedio",
    category: "Escritura",
    emoji: "✉️",
    description:
      "Correos formales, confirmaciones, respuestas a consultas y mensajes previos a la llegada.",
    objectives: [
      "Redactar mensajes formales en portugués.",
      "Confirmar información sin ambigüedades.",
      "Mantener tono cálido y corporativo.",
    ],
    readingTitle: "Escribir con precisión institucional",
    reading: [
      "La comunicación escrita del hotel debe transmitir organización, cordialidad y seguridad. Un correo de confirmación no solo informa: también representa la identidad del establecimiento. Por eso, cada mensaje debe tener estructura, claridad y tono profesional.",
      "En portugués, conviene abrir con un saludo formal, continuar con una confirmación objetiva y cerrar ofreciendo ayuda adicional. Por ejemplo: ‘Prezado senhor’, ‘Confirmamos sua reserva para as datas solicitadas’ y ‘Permanecemos à disposição para qualquer necessidade adicional’. Estas fórmulas son sobrias, claras y muy útiles en contextos hoteleros.",
    ],
    vocab: [
      { es: "correo", pt: "e-mail" },
      { es: "confirmación", pt: "confirmação" },
      { es: "consulta", pt: "consulta" },
      { es: "cancelación", pt: "cancelamento" },
      { es: "llegada", pt: "chegada" },
      { es: "disposición", pt: "disposição" },
    ],
    phrases: [
      {
        es: "Estimado señor:",
        pt: "Prezado senhor,",
      },
      {
        es: "Confirmamos su reserva para las fechas solicitadas.",
        pt: "Confirmamos sua reserva para as datas solicitadas.",
      },
      {
        es: "Quedamos a disposición para cualquier necesidad adicional.",
        pt: "Permanecemos à disposição para qualquer necessidade adicional.",
      },
      {
        es: "Adjuntamos la información correspondiente.",
        pt: "Encaminhamos em anexo as informações correspondentes.",
      },
    ],
    roleplayTitle: "Simulación: redactar un correo de confirmación",
    roleplay: [
      "1. Abra con un saludo formal.",
      "2. Confirme reserva o consulta.",
      "3. Agregue información relevante.",
      "4. Cierre con disponibilidad para ayudar.",
    ],
    quiz: [
      {
        question: "¿Cuál es una apertura formal correcta?",
        options: [
          "Prezado senhor,",
          "Oi, tudo bem?",
          "Fala!",
          "Boa,",
        ],
        answer: "Prezado senhor,",
      },
      {
        question: "¿Qué cierre mantiene tono institucional?",
        options: [
          "Permanecemos à disposição para qualquer necessidade adicional.",
          "Qualquer coisa, chama.",
          "Depois vemos.",
          "Abraço.",
        ],
        answer: "Permanecemos à disposição para qualquer necessidade adicional.",
      },
    ],
  },
  {
    id: "restaurante-gastronomia",
    title: "Bloque gastronómico completo",
    level: "Intermedio",
    category: "Gastronomía",
    emoji: "🍷",
    description:
      "Recepción en restaurante, toma de pedido, cocción, modificaciones y recomendación de vinos.",
    objectives: [
      "Recibir al huésped en el restaurante.",
      "Tomar pedidos de forma estructurada.",
      "Describir platos y recomendar vinos argentinos.",
    ],
    readingTitle: "Servicio gastronómico con lenguaje sensorial",
    reading: [
      "En el restaurante, el portugués debe combinar cortesía, claridad y una dimensión comercial más sensorial. No alcanza con preguntar qué desea el huésped: también es importante describir platos, aclarar puntos de cocción, registrar modificaciones y confirmar la orden de manera precisa.",
      "Frases como ‘Gostariam de ver a carta de vinhos?’, ‘Qual seria o ponto da carne?’ o ‘Vou confirmar seu pedido’ forman parte del lenguaje profesional del servicio. Cuando el colaborador domina estas expresiones, puede transformar la atención en una experiencia más refinada y memorable.",
    ],
    vocab: [
      { es: "mesa", pt: "mesa" },
      { es: "pedido", pt: "pedido" },
      { es: "cocción", pt: "ponto" },
      { es: "vino", pt: "vinho" },
      { es: "entrada", pt: "entrada" },
      { es: "plato principal", pt: "prato principal" },
      { es: "guarnición", pt: "acompanhamento" },
      { es: "confirmar", pt: "confirmar" },
    ],
    phrases: [
      {
        es: "Bienvenidos al restaurante. Su mesa está lista.",
        pt: "Sejam bem-vindos ao restaurante. Sua mesa está pronta.",
      },
      {
        es: "¿Les gustaría ver la carta de vinos?",
        pt: "Gostariam de ver a carta de vinhos?",
      },
      {
        es: "¿Cuál sería el punto de cocción de la carne?",
        pt: "Qual seria o ponto da carne?",
      },
      {
        es: "Voy a confirmar su pedido.",
        pt: "Vou confirmar seu pedido.",
      },
      {
        es: "Este vino argentino armoniza muy bien con ese plato.",
        pt: "Este vinho argentino harmoniza muito bem com esse prato.",
      },
    ],
    roleplayTitle: "Simulación: atención completa en restaurante",
    roleplay: [
      "1. Reciba a los huéspedes y asígneles una mesa.",
      "2. Ofrezca carta y vinos.",
      "3. Tome pedido y pregunte el punto de cocción.",
      "4. Confirme la orden.",
      "5. Sugiera un vino argentino.",
    ],
    quiz: [
      {
        question: "¿Cómo se ofrece la carta de vinos con elegancia?",
        options: [
          "Gostariam de ver a carta de vinhos?",
          "Quer vinho?",
          "Vai beber?",
          "Tem vinho ali.",
        ],
        answer: "Gostariam de ver a carta de vinhos?",
      },
      {
        question: "¿Qué frase confirma profesionalmente la orden?",
        options: [
          "Vou confirmar seu pedido.",
          "Anotei aí.",
          "Depois trago.",
          "Tá certo.",
        ],
        answer: "Vou confirmar seu pedido.",
      },
    ],
  },
  {
    id: "desayuno-buffet",
    title: "Desayuno buffet y servicio",
    level: "Básico / Intermedio",
    category: "Gastronomía",
    emoji: "🥐",
    description:
      "Organización del espacio, productos ofrecidos, restricciones alimentarias y reposición.",
    objectives: [
      "Explicar el funcionamiento del desayuno buffet.",
      "Mencionar productos y horarios.",
      "Responder sobre restricciones alimentarias.",
    ],
    readingTitle: "Explicar el desayuno con orden y cordialidad",
    reading: [
      "El desayuno buffet es un momento clave de contacto diario con el huésped. La explicación debe ser breve pero suficiente: horario, ubicación, dinámica del servicio y disponibilidad de productos especiales. En caso de restricciones alimentarias, el colaborador debe responder con claridad y buena disposición.",
      "Frases como ‘O café da manhã está servido neste salão’, ‘Temos opções sem glúten’ y ‘Vamos repor os produtos em alguns minutos’ son especialmente útiles en la operación diaria.",
    ],
    vocab: [
      { es: "buffet", pt: "buffet" },
      { es: "salón", pt: "salão" },
      { es: "productos", pt: "produtos" },
      { es: "sin gluten", pt: "sem glúten" },
      { es: "reposición", pt: "reposição" },
      { es: "restricción alimentaria", pt: "restrição alimentar" },
    ],
    phrases: [
      {
        es: "El desayuno se sirve en este salón.",
        pt: "O café da manhã é servido neste salão.",
      },
      {
        es: "Tenemos opciones sin gluten.",
        pt: "Temos opções sem glúten.",
      },
      {
        es: "Vamos a reponer los productos en algunos minutos.",
        pt: "Vamos repor os produtos em alguns minutos.",
      },
    ],
    roleplayTitle: "Simulación: explicación del buffet",
    roleplay: [
      "1. Explique dónde se sirve el desayuno.",
      "2. Indique el horario.",
      "3. Responda sobre una restricción alimentaria.",
      "4. Informe reposición de productos.",
    ],
    quiz: [
      {
        question: "¿Qué frase explica correctamente el lugar del desayuno?",
        options: [
          "O café da manhã é servido neste salão.",
          "O café é aí.",
          "Tem comida aqui.",
          "É nesse lugar.",
        ],
        answer: "O café da manhã é servido neste salão.",
      },
      {
        question: "¿Cómo responder sobre opciones especiales?",
        options: [
          "Temos opções sem glúten.",
          "Não sei.",
          "Talvez tenha.",
          "Procure ali.",
        ],
        answer: "Temos opções sem glúten.",
      },
    ],
  },
  {
    id: "excursiones-villa-angostura",
    title: "Excursiones y experiencias en Villa La Angostura",
    level: "Intermedio",
    category: "Turismo",
    emoji: "⛰️",
    description:
      "Bosque de Arrayanes, Cerro Bayo, paseos náuticos y experiencias regionales con enfoque turístico real.",
    objectives: [
      "Presentar atractivos de la zona en portugués.",
      "Recomendar actividades según interés del huésped.",
      "Usar un tono turístico y comercial a la vez.",
    ],
    readingTitle: "Recomendar experiencias memorables",
    reading: [
      "Villa La Angostura ofrece experiencias de naturaleza, gastronomía y aventura que pueden enriquecer significativamente la estadía del huésped. El colaborador del hotel debe poder describir estos atractivos con un portugués claro y atractivo, conectando cada paseo con el perfil del visitante.",
      "Entre las excursiones más destacadas se encuentran o Bosque de Arrayanes, os passeios náuticos pelo lago, o Cerro Bayo e diferentes circuitos panorâmicos da região. Para algunos huéspedes, el valor está en la contemplación; para otros, en la actividad física o en la experiencia gastronómica local. Saber recomendar bien es una extensión del servicio del hotel.",
    ],
    vocab: [
      { es: "excursión", pt: "excursão" },
      { es: "paseo náutico", pt: "passeio náutico" },
      { es: "sendero", pt: "trilha" },
      { es: "montaña", pt: "montanha" },
      { es: "lago", pt: "lago" },
      { es: "paisaje", pt: "paisagem" },
      { es: "experiencia", pt: "experiência" },
      { es: "región", pt: "região" },
    ],
    phrases: [
      {
        es: "Una de las excursiones más recomendadas es el Bosque de Arrayanes.",
        pt: "Uma das excursões mais recomendadas é o Bosque de Arrayanes.",
      },
      {
        es: "También podemos sugerir paseos náuticos por el lago.",
        pt: "Também podemos sugerir passeios náuticos pelo lago.",
      },
      {
        es: "Cerro Bayo es ideal para quienes buscan vistas y actividades al aire libre.",
        pt: "O Cerro Bayo é ideal para quem busca vistas e atividades ao ar livre.",
      },
      {
        es: "Puedo recomendarle la opción más adecuada según su perfil.",
        pt: "Posso lhe recomendar a opção mais adequada de acordo com seu perfil.",
      },
    ],
    roleplayTitle: "Simulación: recomendar una excursión",
    roleplay: [
      "1. Pregunte qué tipo de experiencia busca el huésped.",
      "2. Recomiende una excursión de naturaleza.",
      "3. Sugiera una alternativa náutica o panorámica.",
      "4. Oriente según el perfil del huésped.",
    ],
    quiz: [
      {
        question: "¿Cómo se recomienda una excursión destacada?",
        options: [
          "Uma das excursões mais recomendadas é o Bosque de Arrayanes.",
          "Tem um bosque aí.",
          "Pode ir naquele lugar.",
          "Não sei o nome.",
        ],
        answer: "Uma das excursões mais recomendadas é o Bosque de Arrayanes.",
      },
      {
        question: "¿Qué frase ayuda a personalizar la sugerencia?",
        options: [
          "Posso lhe recomendar a opção mais adequada de acordo com seu perfil.",
          "Escolhe qualquer uma.",
          "Tanto faz.",
          "Vai onde quiser.",
        ],
        answer: "Posso lhe recomendar a opção mais adequada de acordo com seu perfil.",
      },
    ],
  },
];

const QUICK_PHRASES = [
  { pt: "Seja bem-vindo.", es: "Bienvenido." },
  { pt: "Vou verificar isso agora mesmo.", es: "Voy a verificar eso ahora mismo." },
  { pt: "Gostaria de ajuda com as malas?", es: "¿Le gustaría ayuda con el equipaje?" },
  { pt: "O café da manhã está incluído.", es: "El desayuno está incluido." },
  { pt: "Permanecemos à disposição.", es: "Quedamos a disposición." },
  { pt: "Desejam conhecer nossas opções de hospedagem?", es: "¿Desean conocer nuestras opciones de alojamiento?" },
  { pt: "Lamentamos o inconveniente.", es: "Lamentamos el inconveniente." },
  { pt: "Posso recomendar um passeio na região.", es: "Puedo recomendar una excursión en la región." },
];

function shuffleWithSeed(items: string[], seedString: string) {
  const arr = [...items];
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) seed = (seed * 31 + seedString.charCodeAt(i)) >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statTitle}>{title}</div>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statSubtitle}>{subtitle}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span style={styles.chip}>{children}</span>;
}

export default function Page() {
  const [selectedId, setSelectedId] = useState(MODULES[0].id);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [showOnlyPending, setShowOnlyPending] = useState(false);
  const [search, setSearch] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [adminMessage, setAdminMessage] = useState("");
  const [copiedPhrase, setCopiedPhrase] = useState("");

  useEffect(() => {
    try {
      const p = localStorage.getItem("marina-manzanos-progress");
      const a = localStorage.getItem("marina-manzanos-answers");
      if (p) setProgress(JSON.parse(p));
      if (a) setAnswers(JSON.parse(a));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("marina-manzanos-progress", JSON.stringify(progress));
      localStorage.setItem("marina-manzanos-answers", JSON.stringify(answers));
    } catch {}
  }, [progress, answers]);

  const selectedModule = useMemo(
    () => MODULES.find((m) => m.id === selectedId) || MODULES[0],
    [selectedId]
  );

  const filteredModules = useMemo(() => {
    let list = MODULES.filter((m) => {
      const text = `${m.title} ${m.category} ${m.description} ${m.level}`.toLowerCase();
      return text.includes(search.toLowerCase());
    });

    if (showOnlyPending) list = list.filter((m) => !progress[m.id]);
    return list;
  }, [search, showOnlyPending, progress]);

  const completedCount = MODULES.filter((m) => progress[m.id]).length;
  const totalCount = MODULES.length;
  const completionPct = Math.round((completedCount / totalCount) * 100);

  const selectedQuiz = useMemo(() => {
    return selectedMo