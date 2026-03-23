import type { ModuleType } from "./types";

export const MODULES: ModuleType[] = [
  id: "saudações",
  title: "Saludos",
  category: "Recepción",
  emoji: "🛎️",
  phrases: [
    { pt: "Bom dia", es: "Buenos días" },
    { pt: "Boa tarde", es: "Buenas tardes" },
    { pt: "Boa noite", es: "Buenas noches" },
    { pt: "Bem-vindo ao hotel", es: "Bienvenido al hotel" },
    { pt: "Como está?", es: "¿Cómo está?" },
    { pt: "É um prazer recebê-lo", es: "Es un placer recibirlo" },
    { pt: "Tudo bem?", es: "¿Todo bien?" },
    { pt: "Como posso ajudar?", es: "¿Cómo puedo ayudar?" }
  ],
  vocab: [
    { pt: "hotel", es: "hotel" },
    { pt: "hóspede", es: "huésped" },
    { pt: "recepção", es: "recepción" },
    { pt: "reserva", es: "reserva" },
    { pt: "chave", es: "llave" },
    { pt: "quarto", es: "habitación" },
    { pt: "serviço", es: "servicio" },
    { pt: "entrada", es: "entrada" }
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
{
  id: "reserva",
  title: "Reserva",
  category: "Recepción",
  emoji: "📋",
  phrases: [
    { pt: "O senhor tem uma reserva?", es: "¿Tiene una reserva?" },
    { pt: "Em nome de quem?", es: "¿A nombre de quién?" },
    { pt: "Vou verificar", es: "Voy a verificar" },
    { pt: "Aqui está sua reserva", es: "Aquí está su reserva" },
    { pt: "Está tudo correto", es: "Está todo correcto" },
    { pt: "Para quantas noites?", es: "¿Para cuántas noches?" },
    { pt: "Quantas pessoas?", es: "¿Cuántas personas?" },
    { pt: "Perfeito", es: "Perfecto" }
  ],
  vocab: [
    { pt: "noite", es: "noche" },
    { pt: "pessoa", es: "persona" },
    { pt: "nome", es: "nombre" },
    { pt: "dados", es: "datos" },
    { pt: "confirmação", es: "confirmación" },
    { pt: "entrada", es: "check-in" },
    { pt: "saída", es: "check-out" },
    { pt: "hotel", es: "hotel" }
  ],
  miniDialogues: [
    {
      speaker: "Hóspede",
      pt: "Tenho uma reserva",
      es: "Tengo una reserva"
    },
    {
      speaker: "Colaborador",
      pt: "Perfeito, vou verificar",
      es: "Perfecto, voy a verificar"
    }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'Voy a verificar'?",
      options: ["Vou sair", "Vou verificar", "Vou pagar"],
      answer: "Vou verificar"
    }
  ]
}
{
  id: "documento",
  title: "Documento",
  category: "Recepción",
  emoji: "🪪",
  phrases: [
    { pt: "Pode me mostrar seu documento?", es: "¿Puede mostrarme su documento?" },
    { pt: "Preciso do seu passaporte", es: "Necesito su pasaporte" },
    { pt: "Só um momento", es: "Un momento" },
    { pt: "Obrigado", es: "Gracias" },
    { pt: "Está tudo certo", es: "Está todo bien" },
    { pt: "Vou fazer o registro", es: "Voy a hacer el registro" },
    { pt: "Assine aqui", es: "Firme aquí" },
    { pt: "Perfeito", es: "Perfecto" }
  ],
  vocab: [
    { pt: "documento", es: "documento" },
    { pt: "passaporte", es: "pasaporte" },
    { pt: "registro", es: "registro" },
    { pt: "assinatura", es: "firma" },
    { pt: "dados", es: "datos" },
    { pt: "sistema", es: "sistema" },
    { pt: "recepção", es: "recepción" },
    { pt: "check-in", es: "check-in" }
  ],
  miniDialogues: [
    {
      speaker: "Colaborador",
      pt: "Pode me mostrar seu documento?",
      es: "¿Puede mostrarme su documento?"
    },
    {
      speaker: "Hóspede",
      pt: "Claro",
      es: "Claro"
    }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'documento'?",
      options: ["papel", "documento", "arquivo"],
      answer: "documento"
    }
  ]
}
{
  id: "cabanas",
  title: "Cabañas",
  category: "Habitaciones",
  emoji: "🏡",
  phrases: [
    { pt: "A cabana tem capacidade para 6 pessoas", es: "La cabaña tiene capacidad para 6 personas" },
    { pt: "Está distribuída em três andares", es: "Está distribuida en tres plantas" },
    { pt: "Possui cozinha equipada", es: "Tiene cocina equipada" },
    { pt: "Conta com calefação central", es: "Cuenta con calefacción central" },
    { pt: "Possui lareira a lenha", es: "Tiene hogar a leña" },
    { pt: "Tem deck com churrasqueira", es: "Tiene deck con parrilla" },
    { pt: "Tem Wi-Fi", es: "Tiene WiFi" },
    { pt: "A limpeza é diária", es: "La limpieza es diaria" }
  ],
  vocab: [
    { pt: "cabana", es: "cabaña" },
    { pt: "cozinha", es: "cocina" },
    { pt: "churrasqueira", es: "parrilla" },
    { pt: "lenha", es: "leña" },
    { pt: "calefação", es: "calefacción" },
    { pt: "andar", es: "planta/piso" },
    { pt: "quarto", es: "habitación" },
    { pt: "banheiro", es: "baño" }
  ],
  miniDialogues: [
    {
      speaker: "Hóspede",
      pt: "A cabana tem cozinha?",
      es: "¿La cabaña tiene cocina?"
    },
    {
      speaker: "Colaborador",
      pt: "Sim, totalmente equipada",
      es: "Sí, totalmente equipada"
    }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'parrilla'?",
      options: ["forno", "churrasqueira", "fogão"],
      answer: "churrasqueira"
    }
  ]
}
{
  id: "loft",
  title: "Loft",
  category: "Habitaciones",
  emoji: "🛌",
  phrases: [
    { pt: "O loft tem vista para o lago", es: "El loft tiene vista al lago" },
    { pt: "Tem cama king size", es: "Tiene cama king size" },
    { pt: "Possui hidromassagem", es: "Tiene hidromasaje" },
    { pt: "Tem ar condicionado", es: "Tiene aire acondicionado" },
    { pt: "Tem cozinha equipada", es: "Tiene cocina equipada" },
    { pt: "É ideal para casais", es: "Es ideal para parejas" },
    { pt: "Tem deck privativo", es: "Tiene deck privado" },
    { pt: "Muito confortável", es: "Muy cómodo" }
  ],
  vocab: [
    { pt: "loft", es: "loft" },
    { pt: "vista", es: "vista" },
    { pt: "lago", es: "lago" },
    { pt: "cama", es: "cama" },
    { pt: "hidromassagem", es: "hidromasaje" },
    { pt: "ar", es: "aire" },
    { pt: "casal", es: "pareja" },
    { pt: "conforto", es: "confort" }
  ],
  miniDialogues: [
    {
      speaker: "Colaborador",
      pt: "O loft tem vista incrível",
      es: "El loft tiene vista increíble"
    },
    {
      speaker: "Hóspede",
      pt: "Perfeito",
      es: "Perfecto"
    }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'vista al lago'?",
      options: ["vista para o lago", "vista do quarto", "vista geral"],
      answer: "vista para o lago"
    }
  ]
}
{
  id: "suite_deluxe",
  title: "Suite Deluxe",
  category: "Habitaciones",
  emoji: "🛏️",
  phrases: [
    { pt: "A suíte deluxe fica na parte superior", es: "La suite deluxe está en la parte superior" },
    { pt: "Tem vista para o lago", es: "Tiene vista al lago" },
    { pt: "Possui hidromassagem", es: "Tiene hidromasaje" },
    { pt: "Tem cama queen", es: "Tiene cama queen" },
    { pt: "É muito confortável", es: "Es muy cómoda" },
    { pt: "Tem frigobar", es: "Tiene frigobar" },
    { pt: "Inclui Wi-Fi", es: "Incluye WiFi" },
    { pt: "É ideal para descanso", es: "Es ideal para descansar" }
  ],
  vocab: [
    { pt: "suíte", es: "suite" },
    { pt: "vista", es: "vista" },
    { pt: "lago", es: "lago" },
    { pt: "cama", es: "cama" },
    { pt: "banheiro", es: "baño" },
    { pt: "hidromassagem", es: "hidromasaje" },
    { pt: "conforto", es: "confort" },
    { pt: "frigobar", es: "frigobar" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "A suíte tem vista para o lago", es: "La suite tiene vista al lago" },
    { speaker: "Hóspede", pt: "Perfeito", es: "Perfecto" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'suite'?",
      options: ["quarto", "suíte", "cama"],
      answer: "suíte"
    }
  ]
}
{
  id: "desayuno",
  title: "Desayuno",
  category: "Gastronomía",
  emoji: "☕",
  phrases: [
    { pt: "O café da manhã está incluído", es: "El desayuno está incluido" },
    { pt: "É servido das 7 às 10", es: "Se sirve de 7 a 10" },
    { pt: "É buffet", es: "Es buffet" },
    { pt: "Tem café, chá e sucos", es: "Tiene café, té y jugos" },
    { pt: "Também frutas e pães", es: "También frutas y panes" },
    { pt: "Fica no restaurante", es: "Está en el restaurante" },
    { pt: "Pode ir quando quiser", es: "Puede ir cuando quiera" },
    { pt: "Bom apetite", es: "Buen provecho" }
  ],
  vocab: [
    { pt: "café", es: "café" },
    { pt: "manhã", es: "mañana" },
    { pt: "suco", es: "jugo" },
    { pt: "fruta", es: "fruta" },
    { pt: "pão", es: "pan" },
    { pt: "leite", es: "leche" },
    { pt: "chá", es: "té" },
    { pt: "buffet", es: "buffet" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "O café está incluído?", es: "¿El desayuno está incluido?" },
    { speaker: "Colaborador", pt: "Sim, está incluído", es: "Sí, está incluido" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'desayuno'?",
      options: ["jantar", "café da manhã", "almoço"],
      answer: "café da manhã"
    }
  ]
}
{
  id: "wifi",
  title: "WiFi",
  category: "Servicios",
  emoji: "📶",
  phrases: [
    { pt: "O Wi-Fi é gratuito", es: "El WiFi es gratuito" },
    { pt: "Funciona em todo o hotel", es: "Funciona en todo el hotel" },
    { pt: "A senha é esta", es: "La contraseña es esta" },
    { pt: "Se precisar, avise", es: "Si necesita, avise" },
    { pt: "Pode usar livremente", es: "Puede usarlo libremente" },
    { pt: "É rápido", es: "Es rápido" },
    { pt: "Está incluído", es: "Está incluido" },
    { pt: "Qualquer dúvida me avise", es: "Cualquier duda avíseme" }
  ],
  vocab: [
    { pt: "senha", es: "contraseña" },
    { pt: "internet", es: "internet" },
    { pt: "rede", es: "red" },
    { pt: "sinal", es: "señal" },
    { pt: "acesso", es: "acceso" },
    { pt: "conexão", es: "conexión" },
    { pt: "rápido", es: "rápido" },
    { pt: "grátis", es: "gratis" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Qual é a senha?", es: "¿Cuál es la contraseña?" },
    { speaker: "Colaborador", pt: "A senha é esta", es: "La contraseña es esta" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'contraseña'?",
      options: ["senha", "rede", "wifi"],
      answer: "senha"
    }
  ]
}
{
  id: "ubicacion",
  title: "Ubicación",
  category: "Información",
  emoji: "📍",
  phrases: [
    { pt: "Estamos em Puerto Manzano", es: "Estamos en Puerto Manzano" },
    { pt: "A 7 km do centro", es: "A 7 km del centro" },
    { pt: "Perto do lago", es: "Cerca del lago" },
    { pt: "A vista é incrível", es: "La vista es increíble" },
    { pt: "É uma zona tranquila", es: "Es una zona tranquila" },
    { pt: "Tem acesso fácil", es: "Tiene acceso fácil" },
    { pt: "É seguro", es: "Es seguro" },
    { pt: "Muito bonito", es: "Muy lindo" }
  ],
  vocab: [
    { pt: "centro", es: "centro" },
    { pt: "lago", es: "lago" },
    { pt: "zona", es: "zona" },
    { pt: "tranquilo", es: "tranquilo" },
    { pt: "acesso", es: "acceso" },
    { pt: "rua", es: "calle" },
    { pt: "cidade", es: "ciudad" },
    { pt: "localização", es: "ubicación" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "É longe do centro?", es: "¿Está lejos del centro?" },
    { speaker: "Colaborador", pt: "Apenas 7 km", es: "Solo 7 km" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'centro'?",
      options: ["zona", "centro", "bairro"],
      answer: "centro"
    }
  ]
}
{
  id: "transfer",
  title: "Transfer",
  category: "Servicios",
  emoji: "🚐",
  phrases: [
    { pt: "Oferecemos transfer", es: "Ofrecemos transfer" },
    { pt: "Podemos organizar", es: "Podemos organizar" },
    { pt: "É com custo adicional", es: "Es con costo adicional" },
    { pt: "Para o aeroporto", es: "Al aeropuerto" },
    { pt: "Para o centro", es: "Al centro" },
    { pt: "Horário combinado", es: "Horario acordado" },
    { pt: "Precisa reservar antes", es: "Debe reservar antes" },
    { pt: "Quer que eu reserve?", es: "¿Quiere que lo reserve?" }
  ],
  vocab: [
    { pt: "transfer", es: "transfer" },
    { pt: "aeroporto", es: "aeropuerto" },
    { pt: "reserva", es: "reserva" },
    { pt: "horário", es: "horario" },
    { pt: "carro", es: "auto" },
    { pt: "motorista", es: "chofer" },
    { pt: "viagem", es: "viaje" },
    { pt: "serviço", es: "servicio" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Quer transfer?", es: "¿Quiere transfer?" },
    { speaker: "Hóspede", pt: "Sim", es: "Sí" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'aeropuerto'?",
      options: ["rodoviária", "aeroporto", "terminal"],
      answer: "aeroporto"
    }
  ]
}
{
  id: "suite_standard",
  title: "Suite Standard",
  category: "Habitaciones",
  emoji: "🛏️",
  phrases: [
    { pt: "A suíte standard fica no nível inferior", es: "La suite standard está en el nivel inferior" },
    { pt: "Tem vista para o lago", es: "Tiene vista al lago" },
    { pt: "Possui cama queen size", es: "Tiene cama queen size" },
    { pt: "O banheiro tem hidromassagem", es: "El baño tiene hidromasaje" },
    { pt: "Também tem box de ducha", es: "También tiene box de ducha" },
    { pt: "Inclui Wi-Fi", es: "Incluye WiFi" },
    { pt: "Tem TV com canais", es: "Tiene TV con canales" },
    { pt: "É uma opção muito confortável", es: "Es una opción muy cómoda" }
  ],
  vocab: [
    { pt: "nível inferior", es: "nivel inferior" },
    { pt: "suíte", es: "suite" },
    { pt: "vista", es: "vista" },
    { pt: "banheiro", es: "baño" },
    { pt: "ducha", es: "ducha" },
    { pt: "hidromassagem", es: "hidromasaje" },
    { pt: "televisão", es: "televisión" },
    { pt: "confortável", es: "cómoda" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A suíte standard tem hidromassagem?", es: "¿La suite standard tiene hidromasaje?" },
    { speaker: "Colaborador", pt: "Sim, no banheiro", es: "Sí, en el baño" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'nivel inferior'?",
      options: ["nível superior", "nível inferior", "andar alto"],
      answer: "nível inferior"
    }
  ]
},
{
  id: "checkin_inicial",
  title: "Check-in inicial",
  category: "Recepción",
  emoji: "🧾",
  phrases: [
    { pt: "Vamos fazer seu check-in", es: "Vamos a hacer su check-in" },
    { pt: "Preciso confirmar alguns dados", es: "Necesito confirmar algunos datos" },
    { pt: "Sua reserva é para hoje", es: "Su reserva es para hoy" },
    { pt: "A estadia é de duas noites", es: "La estadía es de dos noches" },
    { pt: "O quarto já está disponível", es: "La habitación ya está disponible" },
    { pt: "Vou entregar a chave", es: "Voy a entregar la llave" },
    { pt: "Se precisar de ajuda, avise", es: "Si necesita ayuda, avise" },
    { pt: "Desejo uma excelente estadia", es: "Le deseo una excelente estadía" }
  ],
  vocab: [
    { pt: "check-in", es: "check-in" },
    { pt: "estadia", es: "estadía" },
    { pt: "dados", es: "datos" },
    { pt: "disponível", es: "disponible" },
    { pt: "chave", es: "llave" },
    { pt: "ajuda", es: "ayuda" },
    { pt: "hoje", es: "hoy" },
    { pt: "noite", es: "noche" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Vamos fazer seu check-in", es: "Vamos a hacer su check-in" },
    { speaker: "Hóspede", pt: "Perfeito", es: "Perfecto" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'estadía'?",
      options: ["reserva", "estadia", "entrada"],
      answer: "estadia"
    }
  ]
},
{
  id: "explicacao_hotel",
  title: "Explicación del hotel",
  category: "Información",
  emoji: "🏨",
  phrases: [
    { pt: "Somos um complexo com cabanas, loft e suítes", es: "Somos un complejo con cabañas, loft y suites" },
    { pt: "Todas as unidades têm vista para o lago", es: "Todas las unidades tienen vista al lago" },
    { pt: "Estamos a 7 km do centro", es: "Estamos a 7 km del centro" },
    { pt: "Estamos perto do Cerro Bayo", es: "Estamos cerca del Cerro Bayo" },
    { pt: "Oferecemos atendimento personalizado", es: "Ofrecemos atención personalizada" },
    { pt: "O ambiente é familiar e acolhedor", es: "El ambiente es familiar y acogedor" },
    { pt: "Aqui o hóspede pode descansar", es: "Aquí el huésped puede descansar" },
    { pt: "É um lugar muito especial", es: "Es un lugar muy especial" }
  ],
  vocab: [
    { pt: "complexo", es: "complejo" },
    { pt: "cabana", es: "cabaña" },
    { pt: "suíte", es: "suite" },
    { pt: "vista", es: "vista" },
    { pt: "lago", es: "lago" },
    { pt: "centro", es: "centro" },
    { pt: "acolhedor", es: "acogedor" },
    { pt: "descansar", es: "descansar" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "O hotel fica perto do centro?", es: "¿El hotel queda cerca del centro?" },
    { speaker: "Colaborador", pt: "Estamos a 7 km", es: "Estamos a 7 km" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'acogedor'?",
      options: ["acolhedor", "barulhento", "frio"],
      answer: "acolhedor"
    }
  ]
},
{
  id: "horarios_servicos",
  title: "Horarios y servicios",
  category: "Servicios",
  emoji: "⏰",
  phrases: [
    { pt: "O check-out é até as 10 da manhã", es: "El check-out es hasta las 10 de la mañana" },
    { pt: "A recepção está à disposição", es: "La recepción está a disposición" },
    { pt: "O café é servido pela manhã", es: "El desayuno se sirve por la mañana" },
    { pt: "A limpeza é diária", es: "La limpieza es diaria" },
    { pt: "A reposição de lenha é diária", es: "La reposición de leña es diaria" },
    { pt: "O estacionamento é descoberto", es: "El estacionamiento es descubierto" },
    { pt: "O Wi-Fi é livre", es: "El WiFi es libre" },
    { pt: "Se precisar de algo, avise", es: "Si necesita algo, avise" }
  ],
  vocab: [
    { pt: "horário", es: "horario" },
    { pt: "manhã", es: "mañana" },
    { pt: "limpeza", es: "limpieza" },
    { pt: "lenha", es: "leña" },
    { pt: "estacionamento", es: "estacionamiento" },
    { pt: "recepção", es: "recepción" },
    { pt: "serviço", es: "servicio" },
    { pt: "disposição", es: "disposición" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Até que horas é o check-out?", es: "¿Hasta qué hora es el check-out?" },
    { speaker: "Colaborador", pt: "Até as 10 da manhã", es: "Hasta las 10 de la mañana" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'limpieza'?",
      options: ["limpeza", "lavagem", "ordem"],
      answer: "limpeza"
    }
  ]
},
{
  id: "cabana_8_pessoas",
  title: "Cabaña hasta 8 personas",
  category: "Habitaciones",
  emoji: "🏘️",
  phrases: [
    { pt: "Esta cabana acomoda até 8 pessoas", es: "Esta cabaña aloja hasta 8 personas" },
    { pt: "Tem uma suíte extra", es: "Tiene una suite extra" },
    { pt: "Há um toilette na entrada", es: "Hay un toilette en la entrada" },
    { pt: "A sala tem divãs-cama", es: "La sala tiene divanes-cama" },
    { pt: "No andar superior há dois quartos", es: "En la planta superior hay dos habitaciones" },
    { pt: "A hidromassagem tem vista para o lago", es: "El hidromasaje tiene vista al lago" },
    { pt: "É ideal para famílias grandes", es: "Es ideal para familias grandes" },
    { pt: "Também tem limpeza diária", es: "También tiene limpieza diaria" }
  ],
  vocab: [
    { pt: "até", es: "hasta" },
    { pt: "suíte extra", es: "suite extra" },
    { pt: "toilette", es: "toilette" },
    { pt: "sala", es: "sala" },
    { pt: "divã", es: "diván" },
    { pt: "quarto", es: "habitación" },
    { pt: "família", es: "familia" },
    { pt: "grande", es: "grande" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A cabana é para quantas pessoas?", es: "¿La cabaña es para cuántas personas?" },
    { speaker: "Colaborador", pt: "Até 8 pessoas", es: "Hasta 8 personas" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'familia grande'?",
      options: ["família grande", "grupo curto", "casal pequeno"],
      answer: "família grande"
    }
  ]
},
{
  id: "cozinha_equipada",
  title: "Cocina equipada",
  category: "Habitaciones",
  emoji: "🍳",
  phrases: [
    { pt: "A cozinha está totalmente equipada", es: "La cocina está totalmente equipada" },
    { pt: "Tem forno elétrico", es: "Tiene horno eléctrico" },
    { pt: "Tem micro-ondas", es: "Tiene microondas" },
    { pt: "Tem cafeteira elétrica", es: "Tiene cafetera eléctrica" },
    { pt: "Também tem chaleira elétrica", es: "También tiene jarra eléctrica" },
    { pt: "Há geladeira e louça completa", es: "Hay heladera y vajilla completa" },
    { pt: "Está pronta para uso", es: "Está lista para usar" },
    { pt: "É muito prática para famílias", es: "Es muy práctica para familias" }
  ],
  vocab: [
    { pt: "cozinha", es: "cocina" },
    { pt: "forno", es: "horno" },
    { pt: "micro-ondas", es: "microondas" },
    { pt: "cafeteira", es: "cafetera" },
    { pt: "chaleira", es: "jarra eléctrica" },
    { pt: "geladeira", es: "heladera" },
    { pt: "louça", es: "vajilla" },
    { pt: "uso", es: "uso" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A cabana tem micro-ondas?", es: "¿La cabaña tiene microondas?" },
    { speaker: "Colaborador", pt: "Sim, a cozinha é completa", es: "Sí, la cocina es completa" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'heladera'?",
      options: ["geladeira", "fogão", "pia"],
      answer: "geladeira"
    }
  ]
},
{
  id: "calefacao_lareira",
  title: "Calefacción y hogar a leña",
  category: "Habitaciones",
  emoji: "🔥",
  phrases: [
    { pt: "A unidade tem calefação central", es: "La unidad tiene calefacción central" },
    { pt: "Funciona em todos os ambientes", es: "Funciona en todos los ambientes" },
    { pt: "Também há lareira a lenha", es: "También hay hogar a leña" },
    { pt: "A lenha é reposta todos os dias", es: "La leña se repone todos los días" },
    { pt: "É ideal para o inverno", es: "Es ideal para el invierno" },
    { pt: "Mantém o ambiente quente", es: "Mantiene el ambiente cálido" },
    { pt: "Se precisar de mais lenha, avise", es: "Si necesita más leña, avise" },
    { pt: "É muito aconchegante", es: "Es muy acogedor" }
  ],
  vocab: [
    { pt: "calefação", es: "calefacción" },
    { pt: "central", es: "central" },
    { pt: "ambiente", es: "ambiente" },
    { pt: "lareira", es: "hogar" },
    { pt: "lenha", es: "leña" },
    { pt: "inverno", es: "invierno" },
    { pt: "quente", es: "cálido" },
    { pt: "aconchegante", es: "acogedor" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Tem lareira?", es: "¿Tiene hogar a leña?" },
    { speaker: "Colaborador", pt: "Sim, e a lenha é reposta diariamente", es: "Sí, y la leña se repone diariamente" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'leña'?",
      options: ["madeira", "lenha", "fogo"],
      answer: "lenha"
    }
  ]
},
{
  id: "limpeza_servicos",
  title: "Limpieza y servicios",
  category: "Servicios",
  emoji: "🧹",
  phrases: [
    { pt: "O serviço de limpeza é diário", es: "El servicio de limpieza es diario" },
    { pt: "Também há reposição de toalhas", es: "También hay reposición de toallas" },
    { pt: "A lenha é reposta todos os dias", es: "La leña se repone todos los días" },
    { pt: "Se precisar de algo extra, avise", es: "Si necesita algo extra, avise" },
    { pt: "Podemos ajudar com amenidades", es: "Podemos ayudar con amenities" },
    { pt: "Queremos que sua estadia seja confortável", es: "Queremos que su estadía sea cómoda" },
    { pt: "Estamos à disposição", es: "Estamos a disposición" },
    { pt: "Com muito prazer", es: "Con mucho gusto" }
  ],
  vocab: [
    { pt: "limpeza", es: "limpieza" },
    { pt: "toalha", es: "toalla" },
    { pt: "amenidades", es: "amenities" },
    { pt: "diário", es: "diario" },
    { pt: "extra", es: "extra" },
    { pt: "confortável", es: "cómoda" },
    { pt: "ajudar", es: "ayudar" },
    { pt: "prazer", es: "gusto" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A limpeza é todos os dias?", es: "¿La limpieza es todos los días?" },
    { speaker: "Colaborador", pt: "Sim, diariamente", es: "Sí, diariamente" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'toalla'?",
      options: ["sabão", "toalha", "cobertor"],
      answer: "toalha"
    }
  ]
},
{
  id: "hidromassagem_conforto",
  title: "Hidromasaje y confort",
  category: "Habitaciones",
  emoji: "🫧",
  phrases: [
    { pt: "A unidade tem hidromassagem", es: "La unidad tiene hidromasaje" },
    { pt: "É ideal para relaxar", es: "Es ideal para relajarse" },
    { pt: "O banheiro é espaçoso", es: "El baño es espacioso" },
    { pt: "Há muito conforto", es: "Hay mucho confort" },
    { pt: "É uma experiência especial", es: "Es una experiencia especial" },
    { pt: "Muitos hóspedes gostam muito", es: "A muchos huéspedes les gusta mucho" },
    { pt: "É perfeita para casais", es: "Es perfecta para parejas" },
    { pt: "Também tem vista linda", es: "También tiene vista linda" }
  ],
  vocab: [
    { pt: "hidromassagem", es: "hidromasaje" },
    { pt: "relaxar", es: "relajarse" },
    { pt: "banheiro", es: "baño" },
    { pt: "espaçoso", es: "espacioso" },
    { pt: "conforto", es: "confort" },
    { pt: "experiência", es: "experiencia" },
    { pt: "casal", es: "pareja" },
    { pt: "vista", es: "vista" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A suíte tem hidromassagem para duas pessoas?", es: "¿La suite tiene hidromasaje para dos personas?" },
    { speaker: "Colaborador", pt: "Sim, e é muito confortável", es: "Sí, y es muy cómoda" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'relajarse'?",
      options: ["descansar", "relaxar", "lavar"],
      answer: "relaxar"
    }
  ]
},
{
  id: "vista_lago",
  title: "Vista al lago",
  category: "Habitaciones",
  emoji: "🌊",
  phrases: [
    { pt: "Todas as unidades têm vista para o lago", es: "Todas las unidades tienen vista al lago" },
    { pt: "A vista é panorâmica", es: "La vista es panorámica" },
    { pt: "É possível ver o Nahuel Huapi", es: "Es posible ver el Nahuel Huapi" },
    { pt: "A paisagem é maravilhosa", es: "El paisaje es maravilloso" },
    { pt: "Muitos hóspedes escolhem por isso", es: "Muchos huéspedes eligen por eso" },
    { pt: "É uma das melhores vistas da região", es: "Es una de las mejores vistas de la zona" },
    { pt: "Do quarto a vista é incrível", es: "Desde la habitación la vista es increíble" },
    { pt: "Também do banheiro", es: "También desde el baño" }
  ],
  vocab: [
    { pt: "vista", es: "vista" },
    { pt: "lago", es: "lago" },
    { pt: "paisagem", es: "paisaje" },
    { pt: "maravilhosa", es: "maravilloso" },
    { pt: "região", es: "región" },
    { pt: "quarto", es: "habitación" },
    { pt: "banheiro", es: "baño" },
    { pt: "panorâmica", es: "panorámica" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "O quarto tem vista para o lago?", es: "¿La habitación tiene vista al lago?" },
    { speaker: "Colaborador", pt: "Sim, todas as unidades têm", es: "Sí, todas las unidades tienen" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'paisaje'?",
      options: ["vista", "paisagem", "natureza"],
      answer: "paisagem"
    }
  ]
}
{
  id: "restaurante_tasca",
  title: "Restaurante La Tasca",
  category: "Gastronomía",
  emoji: "🍽️",
  phrases: [
    { pt: "O restaurante se chama La Tasca", es: "El restaurante se llama La Tasca" },
    { pt: "Aqui é servido o café da manhã", es: "Aquí se sirve el desayuno" },
    { pt: "Também há opções para jantar", es: "También hay opciones para cenar" },
    { pt: "É um ambiente acolhedor", es: "Es un ambiente acogedor" },
    { pt: "Fica dentro do hotel", es: "Está dentro del hotel" },
    { pt: "É muito conveniente", es: "Es muy conveniente" },
    { pt: "Tem boa qualidade", es: "Tiene buena calidad" },
    { pt: "Recomendamos muito", es: "Lo recomendamos mucho" }
  ],
  vocab: [
    { pt: "restaurante", es: "restaurante" },
    { pt: "jantar", es: "cena" },
    { pt: "café", es: "desayuno" },
    { pt: "ambiente", es: "ambiente" },
    { pt: "hotel", es: "hotel" },
    { pt: "comida", es: "comida" },
    { pt: "qualidade", es: "calidad" },
    { pt: "recomendar", es: "recomendar" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Há restaurante no hotel?", es: "¿Hay restaurante en el hotel?" },
    { speaker: "Colaborador", pt: "Sim, o La Tasca", es: "Sí, La Tasca" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'cena'?",
      options: ["almoço", "jantar", "café"],
      answer: "jantar"
    }
  ]
},
{
  id: "restaurante_praia",
  title: "Restaurante de playa",
  category: "Gastronomía",
  emoji: "🏖️",
  phrases: [
    { pt: "Temos um restaurante na praia", es: "Tenemos un restaurante en la playa" },
    { pt: "Funciona no verão", es: "Funciona en verano" },
    { pt: "Fica junto ao lago", es: "Está junto al lago" },
    { pt: "A vista é incrível", es: "La vista es increíble" },
    { pt: "É um serviço terceirizado", es: "Es un servicio tercerizado" },
    { pt: "Hóspedes têm benefícios", es: "Los huéspedes tienen beneficios" },
    { pt: "Vale muito a pena", es: "Vale mucho la pena" },
    { pt: "Podemos indicar", es: "Podemos recomendar" }
  ],
  vocab: [
    { pt: "praia", es: "playa" },
    { pt: "verão", es: "verano" },
    { pt: "lago", es: "lago" },
    { pt: "benefício", es: "beneficio" },
    { pt: "serviço", es: "servicio" },
    { pt: "vista", es: "vista" },
    { pt: "indicar", es: "recomendar" },
    { pt: "externo", es: "externo" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "No verão recomendamos o restaurante de praia", es: "En verano recomendamos el restaurante de playa" },
    { speaker: "Hóspede", pt: "Perfeito", es: "Perfecto" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'verano'?",
      options: ["inverno", "verão", "outono"],
      answer: "verão"
    }
  ]
},
{
  id: "recomendacoes_gastronomia",
  title: "Recomendaciones gastronómicas",
  category: "Gastronomía",
  emoji: "🍷",
  phrases: [
    { pt: "Posso recomendar um restaurante", es: "Puedo recomendar un restaurante" },
    { pt: "Há opções perto daqui", es: "Hay opciones cerca de aquí" },
    { pt: "Tem comida regional", es: "Tiene comida regional" },
    { pt: "Também internacional", es: "También internacional" },
    { pt: "É muito bem avaliado", es: "Está muy bien valorado" },
    { pt: "Fica a poucos minutos", es: "Está a pocos minutos" },
    { pt: "Posso fazer reserva", es: "Puedo hacer reserva" },
    { pt: "Quer alguma recomendação?", es: "¿Quiere alguna recomendación?" }
  ],
  vocab: [
    { pt: "recomendação", es: "recomendación" },
    { pt: "comida", es: "comida" },
    { pt: "regional", es: "regional" },
    { pt: "internacional", es: "internacional" },
    { pt: "perto", es: "cerca" },
    { pt: "reserva", es: "reserva" },
    { pt: "restaurante", es: "restaurante" },
    { pt: "opção", es: "opción" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Pode recomendar um lugar?", es: "¿Puede recomendar un lugar?" },
    { speaker: "Colaborador", pt: "Claro, tenho várias opções", es: "Claro, tengo varias opciones" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'cerca'?",
      options: ["longe", "perto", "fora"],
      answer: "perto"
    }
  ]
},
{
  id: "dietas",
  title: "Dietas y preferencias",
  category: "Gastronomía",
  emoji: "🥗",
  phrases: [
    { pt: "Tem alguma restrição alimentar?", es: "¿Tiene alguna restricción alimentaria?" },
    { pt: "Podemos adaptar", es: "Podemos adaptar" },
    { pt: "Há opções vegetarianas", es: "Hay opciones vegetarianas" },
    { pt: "Também sem glúten", es: "También sin gluten" },
    { pt: "Sem lactose", es: "Sin lactosa" },
    { pt: "Vamos tentar ajudar", es: "Vamos a intentar ayudar" },
    { pt: "Avise com antecedência", es: "Avise con anticipación" },
    { pt: "Faremos o possível", es: "Haremos lo posible" }
  ],
  vocab: [
    { pt: "restrição", es: "restricción" },
    { pt: "vegetariano", es: "vegetariano" },
    { pt: "glúten", es: "gluten" },
    { pt: "lactose", es: "lactosa" },
    { pt: "comida", es: "comida" },
    { pt: "adaptar", es: "adaptar" },
    { pt: "ajudar", es: "ayudar" },
    { pt: "opção", es: "opción" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Tem alguma restrição?", es: "¿Tiene alguna restricción?" },
    { speaker: "Hóspede", pt: "Sou vegetariano", es: "Soy vegetariano" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'sin gluten'?",
      options: ["sem glúten", "sem leite", "sem açúcar"],
      answer: "sem glúten"
    }
  ]
},
{
  id: "indicacoes",
  title: "Dar indicaciones",
  category: "Servicios",
  emoji: "🧭",
  phrases: [
    { pt: "Fica à direita", es: "Está a la derecha" },
    { pt: "Depois à esquerda", es: "Luego a la izquierda" },
    { pt: "Siga reto", es: "Siga derecho" },
    { pt: "É perto daqui", es: "Está cerca de aquí" },
    { pt: "Pode ir caminhando", es: "Puede ir caminando" },
    { pt: "Também pode ir de carro", es: "También puede ir en auto" },
    { pt: "É fácil de encontrar", es: "Es fácil de encontrar" },
    { pt: "Se precisar, explico melhor", es: "Si necesita, explico mejor" }
  ],
  vocab: [
    { pt: "direita", es: "derecha" },
    { pt: "esquerda", es: "izquierda" },
    { pt: "reto", es: "recto" },
    { pt: "perto", es: "cerca" },
    { pt: "carro", es: "auto" },
    { pt: "caminhar", es: "caminar" },
    { pt: "rua", es: "calle" },
    { pt: "mapa", es: "mapa" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Onde fica o restaurante?", es: "¿Dónde queda el restaurante?" },
    { speaker: "Colaborador", pt: "À direita e depois reto", es: "A la derecha y luego recto" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'izquierda'?",
      options: ["direita", "esquerda", "frente"],
      answer: "esquerda"
    }
  ]
}
{
  id: "excursiones_general",
  title: "Excursiones",
  category: "Experiencia",
  emoji: "🗺️",
  phrases: [
    { pt: "Podemos organizar excursões", es: "Podemos organizar excursiones" },
    { pt: "Há várias opções", es: "Hay varias opciones" },
    { pt: "Depende do clima", es: "Depende del clima" },
    { pt: "São muito bonitas", es: "Son muy lindas" },
    { pt: "Incluem transporte", es: "Incluyen transporte" },
    { pt: "Recomendamos muito", es: "Las recomendamos mucho" },
    { pt: "Quer que eu reserve?", es: "¿Quiere que reserve?" },
    { pt: "É uma experiência incrível", es: "Es una experiencia increíble" }
  ],
  vocab: [
    { pt: "excursão", es: "excursión" },
    { pt: "clima", es: "clima" },
    { pt: "opção", es: "opción" },
    { pt: "transporte", es: "transporte" },
    { pt: "reserva", es: "reserva" },
    { pt: "atividade", es: "actividad" },
    { pt: "natureza", es: "naturaleza" },
    { pt: "passeio", es: "paseo" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Quer fazer alguma excursão?", es: "¿Quiere hacer alguna excursión?" },
    { speaker: "Hóspede", pt: "Sim, quais recomenda?", es: "Sí, ¿cuáles recomienda?" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'excursión'?",
      options: ["passeio", "excursão", "viagem"],
      answer: "excursão"
    }
  ]
},
{
  id: "cerro_bayo",
  title: "Cerro Bayo",
  category: "Experiencia",
  emoji: "⛷️",
  phrases: [
    { pt: "O Cerro Bayo fica a 3 km", es: "El Cerro Bayo está a 3 km" },
    { pt: "É ideal para esquiar", es: "Es ideal para esquiar" },
    { pt: "Também para snowboard", es: "También para snowboard" },
    { pt: "Tem pistas para todos os níveis", es: "Tiene pistas para todos los niveles" },
    { pt: "Podemos organizar transporte", es: "Podemos organizar transporte" },
    { pt: "É muito bonito no inverno", es: "Es muy lindo en invierno" },
    { pt: "Vale muito a pena", es: "Vale mucho la pena" },
    { pt: "Quer ir amanhã?", es: "¿Quiere ir mañana?" }
  ],
  vocab: [
    { pt: "esqui", es: "esquí" },
    { pt: "neve", es: "nieve" },
    { pt: "montanha", es: "montaña" },
    { pt: "inverno", es: "invierno" },
    { pt: "pista", es: "pista" },
    { pt: "nível", es: "nivel" },
    { pt: "snowboard", es: "snowboard" },
    { pt: "transporte", es: "transporte" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "É longe o Cerro Bayo?", es: "¿Está lejos el Cerro Bayo?" },
    { speaker: "Colaborador", pt: "Apenas 3 km", es: "Solo 3 km" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'nieve'?",
      options: ["neve", "chuva", "vento"],
      answer: "neve"
    }
  ]
},
{
  id: "lago_passeios",
  title: "Paseos en lago",
  category: "Experiencia",
  emoji: "🚤",
  phrases: [
    { pt: "Há passeios de barco", es: "Hay paseos en barco" },
    { pt: "No lago Nahuel Huapi", es: "En el lago Nahuel Huapi" },
    { pt: "São muito tranquilos", es: "Son muy tranquilos" },
    { pt: "A vista é incrível", es: "La vista es increíble" },
    { pt: "Duram algumas horas", es: "Duran algunas horas" },
    { pt: "Incluem guia", es: "Incluyen guía" },
    { pt: "Podemos reservar", es: "Podemos reservar" },
    { pt: "É muito recomendado", es: "Es muy recomendado" }
  ],
  vocab: [
    { pt: "barco", es: "barco" },
    { pt: "lago", es: "lago" },
    { pt: "guia", es: "guía" },
    { pt: "passeio", es: "paseo" },
    { pt: "água", es: "agua" },
    { pt: "natureza", es: "naturaleza" },
    { pt: "tranquilo", es: "tranquilo" },
    { pt: "horas", es: "horas" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Recomendamos passeio de barco", es: "Recomendamos paseo en barco" },
    { speaker: "Hóspede", pt: "Parece ótimo", es: "Parece excelente" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'barco'?",
      options: ["barco", "navio", "canoa"],
      answer: "barco"
    }
  ]
},
{
  id: "trekking",
  title: "Trekking",
  category: "Experiencia",
  emoji: "🥾",
  phrases: [
    { pt: "Há trilhas para caminhar", es: "Hay senderos para caminar" },
    { pt: "São muito bonitas", es: "Son muy lindas" },
    { pt: "Algumas são fáceis", es: "Algunas son fáciles" },
    { pt: "Outras mais exigentes", es: "Otras más exigentes" },
    { pt: "É importante usar calçado adequado", es: "Es importante usar calzado adecuado" },
    { pt: "Levar água", es: "Llevar agua" },
    { pt: "Podemos indicar trilhas", es: "Podemos recomendar senderos" },
    { pt: "É uma ótima experiência", es: "Es una gran experiencia" }
  ],
  vocab: [
    { pt: "trilha", es: "sendero" },
    { pt: "caminhar", es: "caminar" },
    { pt: "calçado", es: "calzado" },
    { pt: "água", es: "agua" },
    { pt: "natureza", es: "naturaleza" },
    { pt: "fácil", es: "fácil" },
    { pt: "difícil", es: "difícil" },
    { pt: "montanha", es: "montaña" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Há trilhas perto?", es: "¿Hay senderos cerca?" },
    { speaker: "Colaborador", pt: "Sim, várias opções", es: "Sí, varias opciones" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'sendero'?",
      options: ["trilha", "rua", "estrada"],
      answer: "trilha"
    }
  ]
},
{
  id: "atividades_hotel",
  title: "Actividades del hotel",
  category: "Experiencia",
  emoji: "🏨",
  phrases: [
    { pt: "Pode relaxar no hotel", es: "Puede relajarse en el hotel" },
    { pt: "Aproveitar a vista", es: "Disfrutar la vista" },
    { pt: "Usar o deck", es: "Usar el deck" },
    { pt: "Fazer churrasco", es: "Hacer parrilla" },
    { pt: "Descansar junto ao lago", es: "Descansar junto al lago" },
    { pt: "Ler um livro", es: "Leer un libro" },
    { pt: "Desconectar", es: "Desconectarse" },
    { pt: "É um lugar para relaxar", es: "Es un lugar para relajarse" }
  ],
  vocab: [
    { pt: "relaxar", es: "relajarse" },
    { pt: "vista", es: "vista" },
    { pt: "deck", es: "deck" },
    { pt: "churrasco", es: "parrilla" },
    { pt: "lago", es: "lago" },
    { pt: "descansar", es: "descansar" },
    { pt: "livro", es: "libro" },
    { pt: "tranquilo", es: "tranquilo" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Aqui é ideal para relaxar", es: "Aquí es ideal para relajarse" },
    { speaker: "Hóspede", pt: "Sim, é lindo", es: "Sí, es hermoso" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'relajarse'?",
      options: ["trabalhar", "relaxar", "correr"],
      answer: "relaxar"
    }
  ]
}
{
  id: "problema_wifi",
  title: "Problema con el WiFi",
  category: "Problemas",
  emoji: "📶",
  phrases: [
    { pt: "O Wi-Fi não está funcionando?", es: "¿El WiFi no está funcionando?" },
    { pt: "Vou verificar agora", es: "Voy a verificar ahora" },
    { pt: "Pode tentar novamente, por favor?", es: "¿Puede intentar nuevamente, por favor?" },
    { pt: "Vou reiniciar o sistema", es: "Voy a reiniciar el sistema" },
    { pt: "Em alguns minutos deve voltar", es: "En algunos minutos debería volver" },
    { pt: "Se continuar sem sinal, me avise", es: "Si sigue sin señal, avíseme" },
    { pt: "Peço desculpas pelo inconveniente", es: "Le pido disculpas por el inconveniente" },
    { pt: "Vamos resolver isso", es: "Vamos a resolver esto" }
  ],
  vocab: [
    { pt: "sinal", es: "señal" },
    { pt: "senha", es: "contraseña" },
    { pt: "sistema", es: "sistema" },
    { pt: "reiniciar", es: "reiniciar" },
    { pt: "conexão", es: "conexión" },
    { pt: "internet", es: "internet" },
    { pt: "funcionar", es: "funcionar" },
    { pt: "inconveniente", es: "inconveniente" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "O Wi-Fi não funciona no meu quarto", es: "El WiFi no funciona en mi habitación" },
    { speaker: "Colaborador", pt: "Vou verificar agora mesmo", es: "Voy a verificar ahora mismo" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'reiniciar'?",
      options: ["reiniciar", "desligar", "entrar"],
      answer: "reiniciar"
    }
  ]
},
{
  id: "problema_agua_quente",
  title: "Problema con agua caliente",
  category: "Problemas",
  emoji: "🚿",
  phrases: [
    { pt: "Não tem água quente?", es: "¿No hay agua caliente?" },
    { pt: "Vou avisar a manutenção", es: "Voy a avisar a mantenimiento" },
    { pt: "Vamos verificar imediatamente", es: "Vamos a verificar inmediatamente" },
    { pt: "Peço desculpas pelo transtorno", es: "Le pido disculpas por la molestia" },
    { pt: "Pode levar alguns minutos", es: "Puede tardar algunos minutos" },
    { pt: "Aviso assim que estiver resolvido", es: "Le aviso en cuanto esté resuelto" },
    { pt: "Quer que eu envie alguém agora?", es: "¿Quiere que envíe a alguien ahora?" },
    { pt: "Vamos fazer o possível", es: "Vamos a hacer lo posible" }
  ],
  vocab: [
    { pt: "água quente", es: "agua caliente" },
    { pt: "manutenção", es: "mantenimiento" },
    { pt: "transtorno", es: "molestia" },
    { pt: "resolver", es: "resolver" },
    { pt: "verificar", es: "verificar" },
    { pt: "imediatamente", es: "inmediatamente" },
    { pt: "banheiro", es: "baño" },
    { pt: "ducha", es: "ducha" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Não sai água quente", es: "No sale agua caliente" },
    { speaker: "Colaborador", pt: "Vou avisar a manutenção agora", es: "Voy a avisar a mantenimiento ahora" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'agua caliente'?",
      options: ["água fria", "água quente", "água limpa"],
      answer: "água quente"
    }
  ]
},
{
  id: "problema_chave",
  title: "Problema con la llave",
  category: "Problemas",
  emoji: "🔑",
  phrases: [
    { pt: "A chave não funciona?", es: "¿La llave no funciona?" },
    { pt: "Vou trocar por outra", es: "Voy a cambiarla por otra" },
    { pt: "Só um momento, por favor", es: "Un momento, por favor" },
    { pt: "Vou verificar a fechadura", es: "Voy a verificar la cerradura" },
    { pt: "Pode me acompanhar?", es: "¿Puede acompañarme?" },
    { pt: "Se preferir, enviamos alguém", es: "Si prefiere, enviamos a alguien" },
    { pt: "Já estou resolvendo", es: "Ya lo estoy resolviendo" },
    { pt: "Desculpe o inconveniente", es: "Disculpe el inconveniente" }
  ],
  vocab: [
    { pt: "chave", es: "llave" },
    { pt: "fechadura", es: "cerradura" },
    { pt: "trocar", es: "cambiar" },
    { pt: "porta", es: "puerta" },
    { pt: "abrir", es: "abrir" },
    { pt: "fechar", es: "cerrar" },
    { pt: "acompanhar", es: "acompañar" },
    { pt: "resolver", es: "resolver" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "A chave não abre a porta", es: "La llave no abre la puerta" },
    { speaker: "Colaborador", pt: "Vou trocar por outra agora", es: "Voy a cambiarla por otra ahora" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'cerradura'?",
      options: ["janela", "fechadura", "maçaneta"],
      answer: "fechadura"
    }
  ]
},
{
  id: "pedido_toalhas",
  title: "Pedido de toallas y amenities",
  category: "Problemas",
  emoji: "🧺",
  phrases: [
    { pt: "Precisa de mais toalhas?", es: "¿Necesita más toallas?" },
    { pt: "Podemos enviar agora", es: "Podemos enviarlas ahora" },
    { pt: "Também sabonete e shampoo", es: "También jabón y shampoo" },
    { pt: "Mais travesseiros também?", es: "¿Más almohadas también?" },
    { pt: "Vou solicitar ao setor", es: "Voy a solicitarlo al sector" },
    { pt: "Chega em alguns minutos", es: "Llega en algunos minutos" },
    { pt: "Com muito prazer", es: "Con mucho gusto" },
    { pt: "Mais alguma coisa?", es: "¿Algo más?" }
  ],
  vocab: [
    { pt: "toalha", es: "toalla" },
    { pt: "sabonete", es: "jabón" },
    { pt: "shampoo", es: "shampoo" },
    { pt: "travesseiro", es: "almohada" },
    { pt: "cobertor", es: "manta" },
    { pt: "amenidades", es: "amenities" },
    { pt: "enviar", es: "enviar" },
    { pt: "solicitar", es: "solicitar" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Preciso de mais toalhas", es: "Necesito más toallas" },
    { speaker: "Colaborador", pt: "Claro, vamos enviar agora", es: "Claro, vamos a enviarlas ahora" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'almohada'?",
      options: ["travesseiro", "toalha", "cama"],
      answer: "travesseiro"
    }
  ]
},
{
  id: "barulho",
  title: "Ruido o molestias",
  category: "Problemas",
  emoji: "🔇",
  phrases: [
    { pt: "Há muito barulho?", es: "¿Hay mucho ruido?" },
    { pt: "Vou verificar imediatamente", es: "Voy a verificar inmediatamente" },
    { pt: "Pedimos desculpas", es: "Pedimos disculpas" },
    { pt: "Vamos tentar resolver", es: "Vamos a intentar resolverlo" },
    { pt: "Quer mudar de quarto?", es: "¿Quiere cambiar de habitación?" },
    { pt: "Depende da disponibilidade", es: "Depende de la disponibilidad" },
    { pt: "Quer que eu veja uma alternativa?", es: "¿Quiere que vea una alternativa?" },
    { pt: "Vamos ajudá-lo", es: "Vamos a ayudarlo" }
  ],
  vocab: [
    { pt: "barulho", es: "ruido" },
    { pt: "silêncio", es: "silencio" },
    { pt: "quarto", es: "habitación" },
    { pt: "mudar", es: "cambiar" },
    { pt: "disponibilidade", es: "disponibilidad" },
    { pt: "alternativa", es: "alternativa" },
    { pt: "moléstia", es: "molestia" },
    { pt: "resolver", es: "resolver" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Há muito barulho à noite", es: "Hay mucho ruido por la noche" },
    { speaker: "Colaborador", pt: "Vou verificar imediatamente", es: "Voy a verificar inmediatamente" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'ruido'?",
      options: ["barulho", "som", "música"],
      answer: "barulho"
    }
  ]
},
{
  id: "atencao_criancas_familia",
  title: "Atención a familias con niños",
  category: "Familias",
  emoji: "👨‍👩‍👧‍👦",
  phrases: [
    { pt: "É uma ótima opção para famílias", es: "Es una excelente opción para familias" },
    { pt: "Tem espaço para todos", es: "Tiene espacio para todos" },
    { pt: "As cabanas são muito práticas", es: "Las cabañas son muy prácticas" },
    { pt: "A cozinha ajuda bastante", es: "La cocina ayuda mucho" },
    { pt: "Podemos preparar tudo para sua chegada", es: "Podemos preparar todo para su llegada" },
    { pt: "Quer berço para o bebê?", es: "¿Quiere cuna para el bebé?" },
    { pt: "Também podemos orientar passeios em família", es: "También podemos orientar paseos en familia" },
    { pt: "Queremos que todos estejam confortáveis", es: "Queremos que todos estén cómodos" }
  ],
  vocab: [
    { pt: "família", es: "familia" },
    { pt: "criança", es: "niño" },
    { pt: "bebê", es: "bebé" },
    { pt: "berço", es: "cuna" },
    { pt: "espaço", es: "espacio" },
    { pt: "cozinha", es: "cocina" },
    { pt: "confortável", es: "cómodo" },
    { pt: "passeio", es: "paseo" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Viajam com crianças?", es: "¿Viajan con niños?" },
    { speaker: "Hóspede", pt: "Sim, com duas", es: "Sí, con dos" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'cuna'?",
      options: ["berço", "cama", "sofá"],
      answer: "berço"
    }
  ]
},
{
  id: "casais_romantico",
  title: "Atención a parejas",
  category: "Ventas",
  emoji: "❤️",
  phrases: [
    { pt: "O loft é ideal para casais", es: "El loft es ideal para parejas" },
    { pt: "A suíte deluxe também", es: "La suite deluxe también" },
    { pt: "Tem hidromassagem para dois", es: "Tiene hidromasaje para dos" },
    { pt: "A vista é muito romântica", es: "La vista es muy romántica" },
    { pt: "É perfeito para descansar", es: "Es perfecto para descansar" },
    { pt: "Muitos casais escolhem esta opção", es: "Muchas parejas eligen esta opción" },
    { pt: "Quer uma sugestão especial?", es: "¿Quiere una sugerencia especial?" },
    { pt: "É uma experiência inesquecível", es: "Es una experiencia inolvidable" }
  ],
  vocab: [
    { pt: "casal", es: "pareja" },
    { pt: "romântico", es: "romántico" },
    { pt: "especial", es: "especial" },
    { pt: "hidromassagem", es: "hidromasaje" },
    { pt: "descansar", es: "descansar" },
    { pt: "vista", es: "vista" },
    { pt: "sugestão", es: "sugerencia" },
    { pt: "inesquecível", es: "inolvidable" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Queremos algo romântico", es: "Queremos algo romántico" },
    { speaker: "Colaborador", pt: "Recomendo o loft ou a suíte deluxe", es: "Recomiendo el loft o la suite deluxe" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'romántico'?",
      options: ["romântico", "bonito", "tranquilo"],
      answer: "romântico"
    }
  ]
},
{
  id: "estacionamento",
  title: "Estacionamiento",
  category: "Servicios",
  emoji: "🚗",
  phrases: [
    { pt: "O estacionamento é descoberto", es: "El estacionamiento es descubierto" },
    { pt: "Fica perto da unidade", es: "Está cerca de la unidad" },
    { pt: "É gratuito para hóspedes", es: "Es gratuito para huéspedes" },
    { pt: "Pode estacionar aqui", es: "Puede estacionar aquí" },
    { pt: "Se precisar de ajuda, avise", es: "Si necesita ayuda, avise" },
    { pt: "Tem espaço suficiente", es: "Hay espacio suficiente" },
    { pt: "É de fácil acesso", es: "Es de fácil acceso" },
    { pt: "Bem-vindo", es: "Bienvenido" }
  ],
  vocab: [
    { pt: "estacionamento", es: "estacionamiento" },
    { pt: "carro", es: "auto" },
    { pt: "gratuito", es: "gratuito" },
    { pt: "acesso", es: "acceso" },
    { pt: "vaga", es: "espacio" },
    { pt: "perto", es: "cerca" },
    { pt: "ajuda", es: "ayuda" },
    { pt: "entrada", es: "entrada" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Onde posso estacionar?", es: "¿Dónde puedo estacionar?" },
    { speaker: "Colaborador", pt: "Perto da sua unidade", es: "Cerca de su unidad" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'gratuito'?",
      options: ["gratuito", "caro", "reservado"],
      answer: "gratuito"
    }
  ]
},
{
  id: "check_out_basico",
  title: "Check-out básico",
  category: "Recepción",
  emoji: "🧳",
  phrases: [
    { pt: "Vai fazer o check-out agora?", es: "¿Va a hacer el check-out ahora?" },
    { pt: "Espero que tenha gostado da estadia", es: "Espero que haya disfrutado la estadía" },
    { pt: "Vou verificar a conta", es: "Voy a verificar la cuenta" },
    { pt: "Está tudo em ordem", es: "Está todo en orden" },
    { pt: "Pode deixar a chave aqui", es: "Puede dejar la llave aquí" },
    { pt: "Muito obrigado pela visita", es: "Muchas gracias por la visita" },
    { pt: "Esperamos vê-lo novamente", es: "Esperamos verlo nuevamente" },
    { pt: "Boa viagem", es: "Buen viaje" }
  ],
  vocab: [
    { pt: "check-out", es: "check-out" },
    { pt: "conta", es: "cuenta" },
    { pt: "chave", es: "llave" },
    { pt: "visita", es: "visita" },
    { pt: "viagem", es: "viaje" },
    { pt: "ordem", es: "orden" },
    { pt: "agora", es: "ahora" },
    { pt: "novamente", es: "nuevamente" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Vai fazer o check-out agora?", es: "¿Va a hacer el check-out ahora?" },
    { speaker: "Hóspede", pt: "Sim", es: "Sí" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'cuenta'?",
      options: ["fatura", "conta", "registro"],
      answer: "conta"
    }
  ]
},
{
  id: "pagamento_basico",
  title: "Pago básico",
  category: "Recepción",
  emoji: "💳",
  phrases: [
    { pt: "Pode pagar com cartão", es: "Puede pagar con tarjeta" },
    { pt: "Também aceitamos dinheiro", es: "También aceptamos efectivo" },
    { pt: "Vou emitir o comprovante", es: "Voy a emitir el comprobante" },
    { pt: "Só um momento", es: "Un momento" },
    { pt: "O pagamento foi aprovado", es: "El pago fue aprobado" },
    { pt: "Aqui está seu comprovante", es: "Aquí está su comprobante" },
    { pt: "Muito obrigado", es: "Muchas gracias" },
    { pt: "Tenha uma ótima viagem", es: "Que tenga un excelente viaje" }
  ],
  vocab: [
    { pt: "cartão", es: "tarjeta" },
    { pt: "dinheiro", es: "efectivo" },
    { pt: "pagamento", es: "pago" },
    { pt: "comprovante", es: "comprobante" },
    { pt: "aprovar", es: "aprobar" },
    { pt: "emitir", es: "emitir" },
    { pt: "valor", es: "importe" },
    { pt: "caixa", es: "caja" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Posso pagar com cartão?", es: "¿Puedo pagar con tarjeta?" },
    { speaker: "Colaborador", pt: "Sim, claro", es: "Sí, claro" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'efectivo'?",
      options: ["dinheiro", "cartão", "troco"],
      answer: "dinheiro"
    }
  ]
}
{
  id: "facturacion",
  title: "Facturación",
  category: "Recepción",
  emoji: "🧾",
  phrases: [
    { pt: "Precisa de fatura?", es: "¿Necesita factura?" },
    { pt: "Podemos emitir agora", es: "Podemos emitirla ahora" },
    { pt: "Preciso dos seus dados", es: "Necesito sus datos" },
    { pt: "Nome e CPF ou CNPJ", es: "Nombre y documento fiscal" },
    { pt: "Será enviada por e-mail", es: "Será enviada por email" },
    { pt: "Também pode ser impressa", es: "También puede ser impresa" },
    { pt: "Está tudo correto?", es: "¿Está todo correcto?" },
    { pt: "Aqui está sua fatura", es: "Aquí está su factura" }
  ],
  vocab: [
    { pt: "fatura", es: "factura" },
    { pt: "dados", es: "datos" },
    { pt: "email", es: "email" },
    { pt: "impressa", es: "impresa" },
    { pt: "nome", es: "nombre" },
    { pt: "documento", es: "documento" },
    { pt: "emitir", es: "emitir" },
    { pt: "correto", es: "correcto" }
  ],
  miniDialogues: [
    { speaker: "Hóspede", pt: "Preciso de fatura", es: "Necesito factura" },
    { speaker: "Colaborador", pt: "Claro, vamos emitir agora", es: "Claro, vamos a emitirla ahora" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'factura'?",
      options: ["recibo", "fatura", "nota"],
      answer: "fatura"
    }
  ]
},
{
  id: "atencao_personalizada",
  title: "Atención personalizada",
  category: "Premium",
  emoji: "⭐",
  phrases: [
    { pt: "Queremos oferecer a melhor experiência", es: "Queremos ofrecer la mejor experiencia" },
    { pt: "Estamos à sua disposição", es: "Estamos a su disposición" },
    { pt: "Se precisar de algo, é só avisar", es: "Si necesita algo, solo avise" },
    { pt: "Podemos ajudar com tudo", es: "Podemos ayudar con todo" },
    { pt: "É um prazer atendê-lo", es: "Es un placer atenderlo" },
    { pt: "Sua satisfação é importante", es: "Su satisfacción es importante" },
    { pt: "Estamos aqui para você", es: "Estamos aquí para usted" },
    { pt: "Conte conosco", es: "Cuente con nosotros" }
  ],
  vocab: [
    { pt: "experiência", es: "experiencia" },
    { pt: "disposição", es: "disposición" },
    { pt: "ajudar", es: "ayudar" },
    { pt: "prazer", es: "placer" },
    { pt: "satisfação", es: "satisfacción" },
    { pt: "importante", es: "importante" },
    { pt: "cliente", es: "cliente" },
    { pt: "serviço", es: "servicio" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Estamos à sua disposição", es: "Estamos a su disposición" },
    { speaker: "Hóspede", pt: "Muito obrigado", es: "Muchas gracias" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'placer'?",
      options: ["prazer", "gosto", "alegria"],
      answer: "prazer"
    }
  ]
},
{
  id: "recomendacao_personalizada",
  title: "Recomendación personalizada",
  category: "Ventas",
  emoji: "🎯",
  phrases: [
    { pt: "Posso recomendar algo especial", es: "Puedo recomendar algo especial" },
    { pt: "Depende do que você procura", es: "Depende de lo que busca" },
    { pt: "Para relaxar ou aventura?", es: "¿Para relajarse o aventura?" },
    { pt: "Temos várias opções", es: "Tenemos varias opciones" },
    { pt: "Posso adaptar para você", es: "Puedo adaptarlo para usted" },
    { pt: "É uma sugestão personalizada", es: "Es una sugerencia personalizada" },
    { pt: "Quer que eu organize?", es: "¿Quiere que lo organice?" },
    { pt: "Vai gostar muito", es: "Le va a gustar mucho" }
  ],
  vocab: [
    { pt: "sugestão", es: "sugerencia" },
    { pt: "especial", es: "especial" },
    { pt: "relaxar", es: "relajarse" },
    { pt: "aventura", es: "aventura" },
    { pt: "adaptar", es: "adaptar" },
    { pt: "organizar", es: "organizar" },
    { pt: "opção", es: "opción" },
    { pt: "gostar", es: "gustar" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Posso recomendar algo especial?", es: "¿Puedo recomendar algo especial?" },
    { speaker: "Hóspede", pt: "Sim, por favor", es: "Sí, por favor" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'aventura'?",
      options: ["descanso", "aventura", "viagem"],
      answer: "aventura"
    }
  ]
},
{
  id: "resolucao_problemas",
  title: "Resolución de problemas",
  category: "Premium",
  emoji: "🛠️",
  phrases: [
    { pt: "Vamos resolver isso imediatamente", es: "Vamos a resolver esto inmediatamente" },
    { pt: "Peço desculpas pelo ocorrido", es: "Le pido disculpas por lo ocurrido" },
    { pt: "Estamos cuidando disso", es: "Estamos ocupándonos de esto" },
    { pt: "Agradecemos sua compreensão", es: "Agradecemos su comprensión" },
    { pt: "Queremos melhorar sua experiência", es: "Queremos mejorar su experiencia" },
    { pt: "Pode contar conosco", es: "Puede contar con nosotros" },
    { pt: "Faremos o possível", es: "Haremos lo posible" },
    { pt: "Vamos acompanhar o caso", es: "Vamos a hacer seguimiento" }
  ],
  vocab: [
    { pt: "resolver", es: "resolver" },
    { pt: "problema", es: "problema" },
    { pt: "imediatamente", es: "inmediatamente" },
    { pt: "compreensão", es: "comprensión" },
    { pt: "melhorar", es: "mejorar" },
    { pt: "experiência", es: "experiencia" },
    { pt: "caso", es: "caso" },
    { pt: "acompanhar", es: "seguir" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Vamos resolver agora mesmo", es: "Vamos a resolver ahora mismo" },
    { speaker: "Hóspede", pt: "Obrigado", es: "Gracias" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'problema'?",
      options: ["erro", "problema", "falha"],
      answer: "problema"
    }
  ]
},
{
  id: "despedida_premium",
  title: "Despedida premium",
  category: "Recepción",
  emoji: "👋",
  phrases: [
    { pt: "Foi um prazer recebê-lo", es: "Fue un placer recibirlo" },
    { pt: "Esperamos vê-lo novamente", es: "Esperamos verlo nuevamente" },
    { pt: "Tenha uma ótima viagem", es: "Que tenga un excelente viaje" },
    { pt: "Volte sempre", es: "Vuelva siempre" },
    { pt: "Obrigado pela preferência", es: "Gracias por su preferencia" },
    { pt: "Até a próxima", es: "Hasta la próxima" },
    { pt: "Desejamos tudo de bom", es: "Le deseamos todo lo mejor" },
    { pt: "Foi uma alegria recebê-lo", es: "Fue una alegría recibirlo" }
  ],
  vocab: [
    { pt: "prazer", es: "placer" },
    { pt: "viagem", es: "viaje" },
    { pt: "voltar", es: "volver" },
    { pt: "preferência", es: "preferencia" },
    { pt: "próxima", es: "próxima" },
    { pt: "alegria", es: "alegría" },
    { pt: "receber", es: "recibir" },
    { pt: "cliente", es: "cliente" }
  ],
  miniDialogues: [
    { speaker: "Colaborador", pt: "Foi um prazer recebê-lo", es: "Fue un placer recibirlo" },
    { speaker: "Hóspede", pt: "Igualmente", es: "Igualmente" }
  ],
  quiz: [
    {
      question: "¿Cómo se dice 'volver'?",
      options: ["ir", "voltar", "ficar"],
      answer: "voltar"
    }
  ]
}
