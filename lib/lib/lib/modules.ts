import type { ModuleType } from "./types";

export const MODULES: ModuleType[] = [
  // ══ MÓDULO 1 ══
  {
    id: "recepcao-boas-vindas",
    title: "Recepção e primeiras impressões",
    level: "Básico",
    category: "Recepção",
    emoji: "🏨",
    description:
      "Saudações formais, tratamento profissional, confirmação de reserva e primeiros contatos com o hóspede.",
    readingTitle: "A chegada que define a estadia",
    reading: [
      "A recepção é o primeiro contato que o hóspede tem com o hotel. Em Marinas Alto Manzano, esse momento é considerado fundamental: a primeira impressão é decisiva para que o hóspede se sinta bem-vindo e seguro. O profissional de recepção deve transmitir calor humano, atenção e profissionalismo desde o instante em que o hóspede cruza a porta.",
      "As saudações formais seguem uma estrutura clara. Ao receber um hóspede, o recepcionista utiliza o tratamento 'senhor' ou 'senhora', acompanhado do sobrenome quando disponível: 'Bom dia, senhor García, seja muito bem-vindo ao Marinas Alto Manzano.' Esse uso do tratamento formal demonstra respeito e cria um ambiente de confiança desde o início.",
      "A confirmação da reserva é um passo obrigatório no processo de recepção. O recepcionista deve verificar os dados com precisão: nome do titular, datas de entrada e saída, tipo de unidade reservada e número de hóspedes. Frases como 'Permita-me confirmar os dados da sua reserva, senhor García' ou 'O senhor tem reserva para três noites em nosso Loft, com entrada hoje e saída na quinta-feira, correto?' são exemplos de comunicação profissional e organizada.",
      "Durante o processo de recepção, é essencial também informar ao hóspede sobre os serviços disponíveis na propriedade: o restaurante, as atividades náuticas, o acesso à praia com deck e pier próprios, e a localização estratégica a apenas sete quilômetros do centro de Villa La Angostura. Essa orientação inicial evita dúvidas posteriores e melhora significativamente a experiência do hóspede.",
      "O recepcionista deve manter a postura, o tom de voz e o vocabulário adequados em todo momento. Expressões como 'Com prazer', 'Às suas ordens', 'Estou à sua disposição' e 'Qualquer coisa que precisar, pode nos chamar' são parte do vocabulário profissional esperado nesse ambiente.",
    ],
    vocab: [
      { es: "Bienvenido/a", pt: "Bem-vindo/a" },
      { es: "Reserva confirmada", pt: "Reserva confirmada" },
      { es: "Señor / Señora", pt: "Senhor / Senhora" },
      { es: "¿En qué puedo ayudarle?", pt: "Em que posso ajudá-lo/a?" },
      { es: "A su disposición", pt: "À sua disposição" },
      { es: "Fecha de entrada / salida", pt: "Data de entrada / saída" },
      { es: "Titular de la reserva", pt: "Titular da reserva" },
      { es: "Con mucho gusto", pt: "Com muito prazer" },
    ],
    quiz: [
      {
        question:
          "Qual é a frase mais adequada para receber um hóspede na chegada?",
        options: [
          "Oi, o que você quer?",
          "Bom dia, senhor, seja muito bem-vindo ao Marinas Alto Manzano.",
          "Pode esperar um momento.",
          "Seu quarto ainda não está pronto.",
        ],
        answer: "Bom dia, senhor, seja muito bem-vindo ao Marinas Alto Manzano.",
      },
      {
        question:
          "Como se deve confirmar os dados de uma reserva de forma profissional?",
        options: [
          "Perguntando o nome sem mais detalhes.",
          "Dizendo apenas 'Temos sua reserva, pode ir para o quarto.'",
          "Verificando nome, datas, tipo de unidade e número de hóspedes com o titular.",
          "Pedindo que o hóspede preencha um formulário sem explicação.",
        ],
        answer:
          "Verificando nome, datas, tipo de unidade e número de hóspedes com o titular.",
      },
      {
        question:
          "Qual tratamento formal deve ser utilizado ao se dirigir a um hóspede adulto?",
        options: ["Você", "Tu", "Senhor ou Senhora", "Amigo"],
        answer: "Senhor ou Senhora",
      },
      {
        question:
          "Por que é importante informar sobre os serviços do hotel durante a recepção?",
        options: [
          "Para cobrar taxas adicionais.",
          "Para evitar dúvidas posteriores e melhorar a experiência do hóspede.",
          "Para que o hóspede não pergunte nada.",
          "Porque é obrigatório por lei.",
        ],
        answer:
          "Para evitar dúvidas posteriores e melhorar a experiência do hóspede.",
      },
      {
        question:
          "Qual das expressões abaixo NÃO é adequada em um contexto de recepção profissional?",
        options: [
          "Às suas ordens.",
          "Estou à sua disposição.",
          "Que bagunça, não achei sua reserva.",
          "Com prazer, senhor.",
        ],
        answer: "Que bagunça, não achei sua reserva.",
      },
      {
        question:
          "A que distância do centro de Villa La Angostura está o Marinas Alto Manzano?",
        options: [
          "2 quilômetros",
          "15 quilômetros",
          "7 quilômetros",
          "30 quilômetros",
        ],
        answer: "7 quilômetros",
      },
      {
        question:
          "Qual é a estrutura correta de uma saudação formal ao receber o senhor García?",
        options: [
          "García, chegou finalmente!",
          "Oi García, tudo bem?",
          "Bom dia, senhor García, seja muito bem-vindo.",
          "Ei, você é García?",
        ],
        answer: "Bom dia, senhor García, seja muito bem-vindo.",
      },
      {
        question:
          "O que significa 'titular da reserva' no contexto hoteleiro?",
        options: [
          "O funcionário que registrou a reserva.",
          "A pessoa em cujo nome a reserva foi feita.",
          "O hóspede que chegou primeiro.",
          "O gerente responsável pela unidade.",
        ],
        answer: "A pessoa em cujo nome a reserva foi feita.",
      },
    ],
    dictation:
      "Bom dia, senhor, seja muito bem-vindo ao Marinas Alto Manzano. Permita-me confirmar os dados da sua reserva.",
  },

  // ══ MÓDULO 2 ══
  {
    id: "checkin-documentacao",
    title: "Check-in e registro documental",
    level: "Intermédio",
    category: "Check-in",
    emoji: "📋",
    description:
      "Processo completo de check-in: documentação, pagamento, garantias e confirmação estruturada de dados.",
    readingTitle: "O check-in que organiza tudo",
    reading: [
      "O processo de check-in é um dos momentos mais técnicos da recepção hoteleira. Vai além da simples entrega das chaves: envolve a verificação e o registro de documentos de identidade, a coleta de um método de garantia para possíveis consumos adicionais, a explicação das condições da estadia e a confirmação de todos os dados antes de conduzir o hóspede à unidade.",
      "A solicitação de documentação deve ser feita de forma natural e respeitosa. Frases como 'Poderia me apresentar um documento de identidade, por favor, senhor García?' ou 'Para formalizar o seu registro, precisamos de um documento com foto e de uma forma de garantia, que pode ser cartão de crédito ou débito.' São exemplos de comunicação clara e sem atritos.",
      "O registro no sistema é um passo crítico. O recepcionista insere os dados do hóspede com atenção: nome completo, número do documento, data de nascimento, endereço, telefone de contato e e-mail. Ao final, é importante confirmar verbalmente: 'Confirmo então: senhor García, documento número XYZ, entrada hoje dia 15 e saída dia 18, três noites na Suíte Lago. Está correto?'",
      "A garantia financeira é uma prática padrão em hotéis de categoria. O recepcionista deve explicar com naturalidade: 'Para cobrir possíveis consumos no restaurante ou serviços adicionais durante a estadia, precisamos registrar um cartão de crédito ou débito como garantia. O valor será bloqueado temporariamente e liberado no momento do check-out, caso não haja consumos.' Essa explicação evita mal-entendidos e gera confiança.",
      "Ao concluir o check-in, o recepcionista deve entregar as chaves ou o cartão de acesso, informar sobre os horários do café da manhã, confirmar o número de telefone da recepção para emergências e, quando possível, acompanhar ou indicar com precisão o caminho até a unidade.",
    ],
    vocab: [
      { es: "Documento de identidad", pt: "Documento de identidade" },
      { es: "Garantía / Depósito", pt: "Garantia / Depósito" },
      { es: "Tarjeta de crédito / débito", pt: "Cartão de crédito / débito" },
      { es: "Registro en el sistema", pt: "Registro no sistema" },
      { es: "Firma", pt: "Assinatura" },
      { es: "Facturación", pt: "Faturamento" },
      { es: "Llave / Tarjeta de acceso", pt: "Chave / Cartão de acesso" },
      { es: "Consumos adicionales", pt: "Consumos adicionais" },
    ],
    quiz: [
      {
        question:
          "Como solicitar um documento de identidade de forma profissional?",
        options: [
          "Dá seu documento aí.",
          "Poderia me apresentar um documento de identidade, por favor, senhor?",
          "Preciso do seu RG, obrigatório.",
          "Sem documento não tem quarto.",
        ],
        answer:
          "Poderia me apresentar um documento de identidade, por favor, senhor?",
      },
      {
        question: "Para que serve a garantia financeira no check-in?",
        options: [
          "Para cobrar antecipadamente toda a estadia.",
          "Para cobrir possíveis consumos adicionais durante a estadia.",
          "Para punir o hóspede em caso de danos.",
          "Para pagar o salário dos funcionários.",
        ],
        answer: "Para cobrir possíveis consumos adicionais durante a estadia.",
      },
      {
        question:
          "Qual informação NÃO precisa ser registrada no sistema durante o check-in?",
        options: [
          "Nome completo do hóspede.",
          "Data de nascimento.",
          "Cor favorita do hóspede.",
          "Telefone de contato.",
        ],
        answer: "Cor favorita do hóspede.",
      },
      {
        question:
          "O que deve ser confirmado verbalmente ao final do registro?",
        options: [
          "Apenas o número do quarto.",
          "Nome, documento, datas e tipo de unidade.",
          "Somente o valor da diária.",
          "O nome do funcionário que fez o atendimento.",
        ],
        answer: "Nome, documento, datas e tipo de unidade.",
      },
      {
        question:
          "Quando o valor bloqueado como garantia é liberado para o hóspede?",
        options: [
          "No momento do check-in.",
          "No momento do check-out, caso não haja consumos.",
          "Após 30 dias.",
          "Nunca é liberado.",
        ],
        answer: "No momento do check-out, caso não haja consumos.",
      },
      {
        question: "Qual informação deve ser fornecida ao entregar as chaves?",
        options: [
          "Apenas a senha do Wi-Fi.",
          "Horários do café da manhã e telefone da recepção.",
          "O cardápio completo do restaurante.",
          "O número de cartão de crédito do hóspede.",
        ],
        answer: "Horários do café da manhã e telefone da recepção.",
      },
      {
        question:
          "Qual é o objetivo da confirmação verbal dos dados ao final do check-in?",
        options: [
          "Fazer o hóspede repetir tudo que disse.",
          "Evitar erros no registro e garantir que o hóspede esteja ciente dos dados.",
          "Demorar mais o processo.",
          "Verificar se o hóspede está prestando atenção.",
        ],
        answer:
          "Evitar erros no registro e garantir que o hóspede esteja ciente dos dados.",
      },
      {
        question:
          "Como explicar a garantia de cartão de crédito de forma que não gere mal-entendido?",
        options: [
          "Dizendo que o valor será cobrado imediatamente.",
          "Explicando que o valor será bloqueado temporariamente e liberado no check-out.",
          "Afirmando que é uma cobrança extra obrigatória.",
          "Pedindo sem nenhuma explicação adicional.",
        ],
        answer:
          "Explicando que o valor será bloqueado temporariamente e liberado no check-out.",
      },
    ],
    dictation:
      "Para formalizar o seu registro, precisamos de um documento com foto e de uma forma de garantia, como cartão de crédito ou débito.",
  },

  // ══ MÓDULO 3 ══
  {
    id: "categorias-alojamento",
    title: "Categorias de alojamento",
    level: "Intermédio",
    category: "Alojamento",
    emoji: "🏡",
    description:
      "Descrição comercial de Cabanas, Loft e Suítes: capacidade, equipamentos, diferenciais e vistas.",
    readingTitle: "Cada unidade conta uma história",
    reading: [
      "O Marinas Alto Manzano oferece três categorias de alojamento, cada uma com características únicas que atendem diferentes perfis de hóspedes. Conhecer em profundidade cada categoria é essencial para o recepcionista, pois permite orientar o hóspede com precisão e segurança, além de potencializar a experiência de estadia.",
      "As Suítes estão localizadas na hostería principal, distribuídas em três níveis. Cada suíte possui grandes janelas tanto no dormitório quanto no banheiro, proporcionando uma vista deslumbrante do Lago Nahuel Huapi. A cama é queen size com sommier de alta qualidade. O banheiro conta com hidroterapia circular para duas pessoas e box de ducha separado. Todos os ambientes têm aquecimento central por radiadores, TV LCD com videocabo, Wi-Fi liberado, telefone com DDI e cofre de segurança.",
      "O Loft é uma unidade espetacular distribuída em três desníveis, com vista privilegiada para o lago e amplos espaços harmoniosamente integrados para duas a quatro pessoas. Possui estar com divãs que funcionam como cama adicional para o terceiro e quarto hóspede, lareira a lenha, cozinha e sala de jantar totalmente equipadas com fogão elétrico, cafeteira, micro-ondas, geladeira e louças completas para quatro pessoas. O dormitório tem cama king size com sommier e teto envidraçado. O banheiro possui hidromassagem octogonal para duas pessoas também com teto de vidro. Ar-condicionado quente/frio, cofre, TV LCD e deck externo com espreguiçadeiras completam a unidade.",
      "As Cabanas têm capacidade para quatro a seis pessoas e são construídas em estilo rústico em três pavimentos, com vista privilegiada de todos os ambientes. A entrada é feita por uma câmara fria que isola do clima externo, seguida de um hall intermediário com banheiro completo. No andar térreo há estar com divãs, lareira a lenha, cozinha e sala de jantar equipadas para seis pessoas, TV LCD, telefone com DDI e Wi-Fi. No andar superior, dois quartos confortáveis com sommier e o banheiro principal com hidromassagem individual. Deck privativo com churrasqueira, espreguiçadeiras, mesa e cadeiras completam a experiência.",
      "A diferenciação estratégica entre as categorias é fundamental para orientar o hóspede. Suítes são ideais para casais que buscam romanticismo e vista. O Loft é perfeito para casais ou famílias pequenas que valorizam espaço integrado e design. As Cabanas são a escolha certa para grupos maiores ou famílias que querem privacidade e comodidade em uma estrutura completa.",
    ],
    vocab: [
      { es: "Cabaña / Loft / Suite", pt: "Cabana / Loft / Suíte" },
      { es: "Vista al lago", pt: "Vista para o lago" },
      { es: "Hidromasaje / Jacuzzi", pt: "Hidromassagem / Jacuzzi" },
      { es: "Chimenea a leña", pt: "Lareira a lenha" },
      { es: "Calefacción central", pt: "Aquecimento central" },
      { es: "Techo vidriado", pt: "Teto envidraçado" },
      { es: "Deck con parrilla", pt: "Deck com churrasqueira" },
      { es: "Capacidad para X personas", pt: "Capacidade para X pessoas" },
    ],
    quiz: [
      {
        question: "Qual é a capacidade das Cabanas do Marinas Alto Manzano?",
        options: [
          "2 a 4 pessoas",
          "4 a 6 pessoas",
          "6 a 8 pessoas",
          "Apenas 2 pessoas",
        ],
        answer: "4 a 6 pessoas",
      },
      {
        question: "O que diferencia o banheiro do Loft?",
        options: [
          "Tem banheira simples.",
          "Tem hidromassagem octogonal para duas pessoas com teto de vidro.",
          "Não tem chuveiro.",
          "Tem hidroterapia circular igual à Suíte.",
        ],
        answer: "Tem hidromassagem octogonal para duas pessoas com teto de vidro.",
      },
      {
        question: "Para qual perfil de hóspede as Suítes são mais indicadas?",
        options: [
          "Famílias com muitas crianças.",
          "Grupos de amigos.",
          "Casais que buscam romanticismo e vista para o lago.",
          "Hóspedes que precisam de churrasqueira.",
        ],
        answer: "Casais que buscam romanticismo e vista para o lago.",
      },
      {
        question: "Qual unidade possui deck privativo com churrasqueira?",
        options: ["Suíte", "Loft", "Cabana", "Todas as unidades"],
        answer: "Cabana",
      },
      {
        question:
          "Qual é a característica que TODAS as unidades têm em comum?",
        options: [
          "Lareira a lenha.",
          "Vista privilegiada para o Lago Nahuel Huapi.",
          "Hidromassagem.",
          "Deck externo.",
        ],
        answer: "Vista privilegiada para o Lago Nahuel Huapi.",
      },
      {
        question: "O Loft tem capacidade para quantas pessoas?",
        options: [
          "Apenas 2 pessoas.",
          "2 a 4 pessoas.",
          "4 a 6 pessoas.",
          "Máximo 8 pessoas.",
        ],
        answer: "2 a 4 pessoas.",
      },
      {
        question:
          "Qual característica construtiva isola a Cabana do frio externo?",
        options: [
          "O teto envidraçado.",
          "O aquecimento central.",
          "A câmara fria na entrada.",
          "As janelas duplas.",
        ],
        answer: "A câmara fria na entrada.",
      },
      {
        question: "Qual unidade é ideal para uma família que valoriza espaços integrados e design moderno?",
        options: ["Suíte", "Loft", "Cabana", "Todas são iguais"],
        answer: "Loft",
      },
    ],
    dictation:
      "O Loft possui vista espetacular para o lago, cozinha equipada, lareira a lenha e hidromassagem octogonal com teto de vidro.",
  },

  // ══ MÓDULO 4 ══
  {
    id: "comparacao-recomendacao",
    title: "Comparação e recomendação estratégica",
    level: "Avançado",
    category: "Alojamento",
    emoji: "🎯",
    description:
      "Como orientar o hóspede na escolha da unidade ideal usando linguagem comercial elegante.",
    readingTitle: "A arte de recomendar com precisão",
    reading: [
      "Recomendar a unidade certa para cada hóspede é uma habilidade que combina escuta ativa, conhecimento do produto e linguagem comercial. Não se trata de vender a unidade mais cara, mas de identificar o perfil e as necessidades do hóspede para oferecer a experiência que melhor se adapta a ele.",
      "A escuta ativa é o primeiro passo. O recepcionista deve fazer perguntas abertas para entender o perfil do grupo: 'O senhor está viajando em casal ou com família?' ou 'É uma viagem de lua de mel, celebração especial ou lazer em geral?' Essas informações permitem direcionar a recomendação com precisão.",
      "Para casais em lua de mel ou celebrações especiais, a Suíte é a recomendação mais adequada. A linguagem deve ser evocativa: 'As nossas Suítes foram pensadas para momentos únicos: a vista do lago a partir da cama, a hidroterapia para dois ao entardecer e o silêncio da Patagônia criam uma experiência verdadeiramente inesquecível.'",
      "Para casais ou famílias pequenas que buscam maior espaço e privacidade com conforto de lar, o Loft é a opção ideal: 'O Loft é uma experiência de design: três desníveis harmonizados com lareira, cozinha gourmet equipada e uma hidromassagem octogonal sob o teto de vidro estrelado. É a escolha de quem quer se sentir em casa com o luxo de um hotel.'",
      "Para grupos maiores ou famílias com crianças, as Cabanas oferecem a solução completa: 'As nossas Cabanas foram projetadas para que nenhum detalhe falte: dois quartos no andar superior para os adultos, divãs no estar para as crianças, churrasqueira privativa no deck e a mesma vista privilegiada para o lago Nahuel Huapi que encanta todos os hóspedes de Marinas.'",
    ],
    vocab: [
      { es: "Perfil del huésped", pt: "Perfil do hóspede" },
      { es: "Luna de miel", pt: "Lua de mel" },
      { es: "Estancia prolongada", pt: "Estadia prolongada" },
      { es: "Experiencia única", pt: "Experiência única" },
      { es: "Diseño integrado", pt: "Design integrado" },
      { es: "Privacidad y comodidad", pt: "Privacidade e conforto" },
      { es: "¿Viaja solo o acompañado?", pt: "O senhor viaja sozinho ou acompanhado?" },
      { es: "Le recomendaría", pt: "Eu recomendaria ao senhor" },
    ],
    quiz: [
      {
        question:
          "Qual é o primeiro passo para recomendar a unidade correta ao hóspede?",
        options: [
          "Mostrar todas as unidades disponíveis.",
          "Fazer perguntas abertas para entender o perfil e as necessidades do hóspede.",
          "Recomendar sempre a unidade mais cara.",
          "Esperar que o hóspede escolha sozinho.",
        ],
        answer:
          "Fazer perguntas abertas para entender o perfil e as necessidades do hóspede.",
      },
      {
        question:
          "Qual unidade é mais recomendada para um casal em lua de mel?",
        options: ["Cabana", "Loft", "Suíte", "Qualquer uma"],
        answer: "Suíte",
      },
      {
        question:
          "Que tipo de linguagem deve ser usada ao recomendar as unidades?",
        options: [
          "Técnica e burocrática.",
          "Informal e descontraída.",
          "Evocativa e comercial, destacando experiências.",
          "Apenas com preços e capacidades.",
        ],
        answer: "Evocativa e comercial, destacando experiências.",
      },
      {
        question:
          "Para uma família com crianças e necessidade de espaço, qual é a melhor recomendação?",
        options: ["Suíte", "Loft", "Cabana", "Qualquer unidade serve"],
        answer: "Cabana",
      },
      {
        question: "O que significa 'escuta ativa' no contexto de atendimento?",
        options: [
          "Ouvir música durante o atendimento.",
          "Prestar atenção total ao hóspede para entender suas necessidades.",
          "Deixar o hóspede falar sem responder.",
          "Usar fone de ouvido durante o trabalho.",
        ],
        answer:
          "Prestar atenção total ao hóspede para entender suas necessidades.",
      },
      {
        question: "Qual pergunta aberta ajuda a identificar o perfil do grupo?",
        options: [
          "Você tem dinheiro?",
          "O senhor está viajando em casal ou com família?",
          "Quantas malas o senhor trouxe?",
          "O senhor já ficou aqui antes?",
        ],
        answer: "O senhor está viajando em casal ou com família?",
      },
      {
        question:
          "Por que NÃO se deve recomendar sempre a unidade mais cara?",
        options: [
          "Porque as mais caras são piores.",
          "Porque o objetivo é identificar a experiência que melhor se adapta ao hóspede.",
          "Porque o hotel não quer lucrar.",
          "Porque todas as unidades têm o mesmo preço.",
        ],
        answer:
          "Porque o objetivo é identificar a experiência que melhor se adapta ao hóspede.",
      },
      {
        question:
          "Qual é a frase correta para fazer uma recomendação formal ao hóspede?",
        options: [
          "Esse quarto é bom para você.",
          "Eu recomendaria ao senhor o nosso Loft, que oferece...",
          "Vai nesse, é o melhor.",
          "Tanto faz qual você escolher.",
        ],
        answer: "Eu recomendaria ao senhor o nosso Loft, que oferece...",
      },
    ],
    dictation:
      "As nossas Suítes foram pensadas para momentos únicos: a vista do lago, a hidroterapia para dois e o silêncio da Patagônia criam uma experiência verdadeiramente inesquecível.",
  },

  // ══ MÓDULO 5 ══
  {
    id: "gestao-reclamacoes",
    title: "Gestão de reclamações",
    level: "Avançado",
    category: "Reclamos",
    emoji: "🤝",
    description:
      "Como receber, validar e resolver reclamações de hóspedes com profissionalismo e empatia.",
    readingTitle: "Uma reclamação bem gerida fideliza o hóspede",
    reading: [
      "Receber uma reclamação de hóspede é uma oportunidade, não uma ameaça. O profissional que lida com reclamações de forma empática, ágil e resolutiva demonstra maturidade e comprometimento com a qualidade do serviço. Na hotelaria de alto padrão, a forma como se resolve um problema pode ser mais memorável do que o problema em si.",
      "O primeiro passo é escutar sem interromper. Deixar o hóspede expressar sua insatisfação por completo transmite respeito e diminui a tensão. Expressões como 'Por favor, conte-me o que aconteceu, senhor García' ou 'Lamento muito o ocorrido, estou aqui para resolver' criam um ambiente de escuta ativa e empatia genuína.",
      "A validação linguística é essencial: reconhecer que a experiência do hóspede foi negativa, mesmo que o problema não tenha sido causado diretamente pelo hotel. Frases como 'Compreendo perfeitamente a sua insatisfação' ou 'O senhor tem toda a razão em nos comunicar isso' validam a experiência sem criar conflito.",
      "Após escutar e validar, o profissional deve propor uma solução concreta e rápida: 'Vou verificar imediatamente e providenciar a troca de unidade, senhor García' ou 'Posso oferecer o seguinte: faremos a manutenção agora mesmo, e enquanto isso preparamos uma bebida de cortesia no restaurante.' A solução deve ser comunicada de forma clara e com prazo definido.",
      "O acompanhamento posterior é o diferencial de excelência: retornar ao hóspede para confirmar que o problema foi resolvido e perguntar se tudo está ao seu gosto. Essa atitude transforma uma experiência negativa em fidelização.",
    ],
    vocab: [
      { es: "Disculpe las molestias", pt: "Pedimos desculpas pelo inconveniente" },
      { es: "Entiendo su situación", pt: "Compreendo a sua situação" },
      { es: "Vamos a solucionarlo", pt: "Vamos resolver isso" },
      { es: "Le propongo lo siguiente", pt: "Proponho ao senhor o seguinte" },
      { es: "Cortesía del hotel", pt: "Cortesia do hotel" },
      { es: "Daremos seguimiento", pt: "Faremos o acompanhamento" },
      { es: "Cambio de habitación", pt: "Troca de unidade" },
      { es: "Lamentamos el inconveniente", pt: "Lamentamos o ocorrido" },
    ],
    quiz: [
      {
        question:
          "Qual é a atitude correta ao receber uma reclamação de um hóspede?",
        options: [
          "Interrompê-lo e se defender imediatamente.",
          "Escutar sem interromper e demonstrar empatia.",
          "Ignorar e dizer que não é responsabilidade do hotel.",
          "Pedir para falar com o gerente imediatamente.",
        ],
        answer: "Escutar sem interromper e demonstrar empatia.",
      },
      {
        question: "O que significa 'validação linguística' em atendimento?",
        options: [
          "Corrigir o idioma do hóspede.",
          "Reconhecer que a experiência negativa do hóspede é válida.",
          "Verificar se o hóspede fala português.",
          "Pedir ao hóspede que escreva a reclamação.",
        ],
        answer:
          "Reconhecer que a experiência negativa do hóspede é válida.",
      },
      {
        question:
          "Qual frase demonstra empatia adequada ao receber uma reclamação?",
        options: [
          "Isso não é problema nosso.",
          "O senhor está exagerando.",
          "Compreendo perfeitamente a sua insatisfação.",
          "Sempre tem alguém reclamando.",
        ],
        answer: "Compreendo perfeitamente a sua insatisfação.",
      },
      {
        question:
          "Por que uma solução proposta deve ter prazo definido?",
        options: [
          "Para fazer o hóspede esperar mais.",
          "Para que o hóspede saiba quando o problema será resolvido e não fique ansioso.",
          "Por obrigação legal.",
          "Porque o gerente exige.",
        ],
        answer:
          "Para que o hóspede saiba quando o problema será resolvido e não fique ansioso.",
      },
      {
        question: "O que é uma 'cortesia do hotel'?",
        options: [
          "Uma taxa adicional cobrada.",
          "Um benefício oferecido gratuitamente como gesto de boa vontade.",
          "Um desconto na próxima estadia.",
          "Uma multa por reclamação.",
        ],
        answer: "Um benefício oferecido gratuitamente como gesto de boa vontade.",
      },
      {
        question:
          "Por que o acompanhamento posterior é considerado um diferencial de excelência?",
        options: [
          "Porque é obrigatório por lei.",
          "Porque confirma que o problema foi resolvido e demonstra cuidado genuíno.",
          "Porque aumenta a conta do hóspede.",
          "Porque o hóspede sempre reclama de novo.",
        ],
        answer:
          "Porque confirma que o problema foi resolvido e demonstra cuidado genuíno.",
      },
      {
        question:
          "O que pode acontecer quando uma reclamação é bem gerida?",
        options: [
          "O hóspede nunca mais volta.",
          "A experiência negativa pode se transformar em fidelização.",
          "O hotel perde dinheiro.",
          "Nada muda para o hóspede.",
        ],
        answer: "A experiência negativa pode se transformar em fidelização.",
      },
      {
        question: "Qual é a primeira frase mais adequada ao ouvir uma reclamação?",
        options: [
          "Isso nunca aconteceu antes.",
          "Por favor, conte-me o que aconteceu, senhor.",
          "Não é possível que isso tenha ocorrido.",
          "Fale com o gerente.",
        ],
        answer: "Por favor, conte-me o que aconteceu, senhor.",
      },
    ],
    dictation:
      "Compreendo perfeitamente a sua insatisfação. Vamos resolver isso imediatamente e faremos o acompanhamento para garantir que tudo esteja ao seu gosto.",
  },

  // ══ MÓDULO 6 ══
  {
    id: "modificacoes-reserva",
    title: "Modificações de reserva",
    level: "Intermédio",
    category: "Reservas",
    emoji: "📅",
    description:
      "Mudanças de datas, extensões, reduções, upgrade, downgrade e comunicação de condições.",
    readingTitle: "Flexibilidade com clareza",
    reading: [
      "A modificação de reservas é uma situação frequente na hotelaria. O hóspede pode precisar estender ou reduzir a estadia, mudar de unidade ou alterar datas por motivos pessoais ou imprevistos. O profissional de recepção deve lidar com essas solicitações com flexibilidade, clareza e atenção às políticas do hotel.",
      "Ao receber uma solicitação de modificação, o primeiro passo é verificar a disponibilidade com discrição: 'Vou verificar a disponibilidade para as novas datas, senhor García. Um momento, por favor.' A consulta ao sistema de reservas deve ser feita com calma e precisão para evitar erros de comunicação.",
      "Para extensões de estadia: 'Tenho o prazer de confirmar que temos disponibilidade para estender sua estadia até sábado, senhor García. A diária para os dias adicionais será de X reais, mantendo as mesmas condições da sua reserva atual.' A comunicação do valor adicional deve ser feita de forma natural, sem constrangimento.",
      "Para reduções de estadia ou cancelamentos parciais, é necessário informar claramente as políticas do hotel: 'Em relação à modificação, nossa política prevê que alterações com menos de 48 horas de antecedência podem gerar uma taxa correspondente a uma diária. Gostaria de verificar se há exceções aplicáveis à sua situação?'",
      "O upgrade e o downgrade de unidade são situações que exigem tato especial. Para um upgrade: 'Temos uma boa notícia, senhor García: temos disponibilidade no nosso Loft e, considerando sua fidelidade, gostaríamos de oferecer um upgrade sem custo adicional.' Para um downgrade por pedido do hóspede: 'Claro, sem problema. Vamos ajustar sua reserva e realizar o reembolso correspondente à diferença de valores.'",
    ],
    vocab: [
      { es: "Extensión de estancia", pt: "Extensão de estadia" },
      { es: "Reducción / Cancelación parcial", pt: "Redução / Cancelamento parcial" },
      { es: "Cambio de fechas", pt: "Mudança de datas" },
      { es: "Upgrade / Downgrade", pt: "Upgrade / Downgrade" },
      { es: "Disponibilidad", pt: "Disponibilidade" },
      { es: "Política de cancelación", pt: "Política de cancelamento" },
      { es: "Diferencia de valores", pt: "Diferença de valores" },
      { es: "Confirmación por escrito", pt: "Confirmação por escrito" },
    ],
    quiz: [
      {
        question:
          "Qual é o primeiro passo ao receber uma solicitação de modificação de reserva?",
        options: [
          "Dizer que não é possível modificar.",
          "Verificar a disponibilidade com discrição.",
          "Cobrar uma taxa imediatamente.",
          "Chamar o gerente.",
        ],
        answer: "Verificar a disponibilidade com discrição.",
      },
      {
        question: "O que significa 'upgrade' no contexto hoteleiro?",
        options: [
          "Redução para uma unidade menor.",
          "Mudança para uma unidade de categoria superior.",
          "Extensão da estadia.",
          "Cancelamento da reserva.",
        ],
        answer: "Mudança para uma unidade de categoria superior.",
      },
      {
        question:
          "Quando informar ao hóspede sobre taxas por modificação tardia?",
        options: [
          "Nunca, o hóspede não precisa saber.",
          "Somente após cobrar.",
          "De forma clara antes de confirmar a modificação.",
          "Apenas por e-mail.",
        ],
        answer: "De forma clara antes de confirmar a modificação.",
      },
      {
        question:
          "Como deve ser comunicado o valor adicional em uma extensão de estadia?",
        options: [
          "De forma constrangedora e formal.",
          "De forma natural e clara, sem constrangimento.",
          "Somente na fatura final.",
          "Através de um bilhete na unidade.",
        ],
        answer: "De forma natural e clara, sem constrangimento.",
      },
      {
        question:
          "O que deve acontecer quando o hóspede solicita um downgrade?",
        options: [
          "Negar a solicitação.",
          "Ajustar a reserva e realizar o reembolso da diferença.",
          "Cobrar taxa adicional.",
          "Ignorar o pedido.",
        ],
        answer: "Ajustar a reserva e realizar o reembolso da diferença.",
      },
      {
        question:
          "Qual frase é adequada para verificar disponibilidade de forma profissional?",
        options: [
          "Espera aí que vou ver.",
          "Não sei se tem.",
          "Vou verificar a disponibilidade para as novas datas. Um momento, por favor.",
          "Provavelmente não tem.",
        ],
        answer:
          "Vou verificar a disponibilidade para as novas datas. Um momento, por favor.",
      },
      {
        question:
          "O que é importante mencionar ao oferecer um upgrade sem custo?",
        options: [
          "Que o hotel está com prejuízo.",
          "A fidelidade do hóspede como motivo do gesto.",
          "Que outras unidades estão piores.",
          "Que o upgrade só vale para hoje.",
        ],
        answer: "A fidelidade do hóspede como motivo do gesto.",
      },
      {
        question: "Qual é o prazo típico para modificações sem taxa mencionado no texto?",
        options: [
          "24 horas",
          "72 horas",
          "48 horas",
          "Uma semana",
        ],
        answer: "48 horas",
      },
    ],
    dictation:
      "Tenho o prazer de confirmar a disponibilidade para as novas datas. A diária adicional será mantida nas mesmas condições da sua reserva atual.",
  },

  // ══ MÓDULO 7 ══
  {
    id: "comunicacao-escrita",
    title: "Comunicação escrita profissional",
    level: "Avançado",
    category: "Comunicação",
    emoji: "✉️",
    description:
      "Redação de e-mails formais: confirmações, respostas a consultas, cancelamentos e pré-chegada.",
    readingTitle: "O e-mail que representa o hotel",
    reading: [
      "A comunicação escrita é a extensão da voz do hotel no mundo digital. Um e-mail bem redigido transmite profissionalismo, atenção ao detalhe e cuidado com o hóspede antes mesmo da chegada. Um e-mail mal estruturado pode gerar dúvidas, insegurança e até cancelamentos.",
      "A estrutura de um e-mail profissional hoteleiro segue uma lógica clara: saudação formal com nome do hóspede, corpo do e-mail organizado em parágrafos curtos e objetivos, e encerramento com assinatura completa incluindo nome, cargo, telefone e endereço do hotel.",
      "O e-mail de confirmação de reserva deve incluir todos os detalhes relevantes: datas de entrada e saída, tipo de unidade, número de hóspedes, valor da diária, política de cancelamento e orientações de acesso ao hotel. Exemplo de abertura: 'Prezado Senhor García, é com grande prazer que confirmamos a sua reserva no Marinas Alto Manzano.'",
      "O e-mail de pré-chegada é uma ferramenta poderosa de hospitalidade proativa. Enviado dois a três dias antes da chegada, deve incluir: horário do check-in, informações sobre como chegar ao hotel (situado na Ruta 40, km 2108.5, Puerto Manzano), sugestões de atividades na região e qualquer pedido especial previamente solicitado pelo hóspede.",
      "Para respostas a consultas, a agilidade é fundamental. O hóspede que pergunta por disponibilidade, preços ou serviços espera uma resposta dentro de poucas horas. A resposta deve ser completa, clara e terminar com um convite à ação: 'Aguardamos a confirmação da sua reserva e estamos à disposição para qualquer dúvida adicional.'",
    ],
    vocab: [
      { es: "Estimado/a señor/señora", pt: "Prezado/a senhor/senhora" },
      { es: "Adjunto encontrará", pt: "Em anexo, o senhor encontrará" },
      { es: "Ante cualquier duda", pt: "Em caso de qualquer dúvida" },
      { es: "Quedo a su disposición", pt: "Fico à sua disposição" },
      { es: "Confirmamos su reserva", pt: "Confirmamos a sua reserva" },
      { es: "Política de cancelación", pt: "Política de cancelamento" },
      { es: "Instrucciones de acceso", pt: "Instruções de acesso" },
      { es: "Atentamente", pt: "Atenciosamente" },
    ],
    quiz: [
      {
        question:
          "Qual é a estrutura correta de um e-mail profissional hoteleiro?",
        options: [
          "Apenas o conteúdo principal sem saudação.",
          "Saudação formal, corpo organizado em parágrafos e assinatura completa.",
          "Início com o preço e sem assinatura.",
          "Texto corrido sem parágrafos.",
        ],
        answer: "Saudação formal, corpo organizado em parágrafos e assinatura completa.",
      },
      {
        question: "Qual é o objetivo principal do e-mail de pré-chegada?",
        options: [
          "Cobrar antecipadamente a estadia.",
          "Antecipar necessidades e proporcionar uma experiência de hospitalidade proativa.",
          "Confirmar que o hóspede não cancelou.",
          "Informar sobre mudanças no cardápio.",
        ],
        answer:
          "Antecipar necessidades e proporcionar uma experiência de hospitalidade proativa.",
      },
      {
        question:
          "Quantos dias antes da chegada deve ser enviado o e-mail de pré-chegada?",
        options: ["Uma semana", "No dia da chegada", "Dois a três dias antes", "Um mês antes"],
        answer: "Dois a três dias antes",
      },
      {
        question:
          "O que deve constar obrigatoriamente no e-mail de confirmação de reserva?",
        options: [
          "Apenas o nome do hóspede.",
          "Datas, tipo de unidade, valor e política de cancelamento.",
          "Somente o preço total.",
          "Apenas as instruções de chegada.",
        ],
        answer: "Datas, tipo de unidade, valor e política de cancelamento.",
      },
      {
        question:
          "Qual frase é adequada para encerrar um e-mail de resposta a consulta?",
        options: [
          "Tchau.",
          "Aguardamos a confirmação e estamos à disposição para qualquer dúvida.",
          "Não temos mais informações.",
          "Responda rápido.",
        ],
        answer:
          "Aguardamos a confirmação e estamos à disposição para qualquer dúvida.",
      },
      {
        question:
          "Por que a agilidade na resposta a consultas é fundamental?",
        options: [
          "Para cobrar mais rápido.",
          "Porque o hóspede pode decidir reservar em outro hotel se não receber resposta rápida.",
          "Por obrigação legal.",
          "Para impressionar o gerente.",
        ],
        answer:
          "Porque o hóspede pode decidir reservar em outro hotel se não receber resposta rápida.",
      },
      {
        question: "O endereço do Marinas Alto Manzano é:",
        options: [
          "Centro de Villa La Angostura s/n",
          "Ruta 40, km 2108.5, Puerto Manzano",
          "Avenida Nahuel Huapi 100, Bariloche",
          "Cerro Bayo s/n",
        ],
        answer: "Ruta 40, km 2108.5, Puerto Manzano",
      },
      {
        question: "Qual é a forma correta de iniciar um e-mail formal a um hóspede?",
        options: [
          "Oi García!",
          "Prezado Senhor García,",
          "Olá, tudo bem?",
          "Ei, sua reserva foi confirmada.",
        ],
        answer: "Prezado Senhor García,",
      },
    ],
    dictation:
      "Prezado Senhor García, é com grande prazer que confirmamos a sua reserva no Marinas Alto Manzano. Ficamos à sua disposição para qualquer dúvida.",
  },

  // ══ MÓDULO 8 ══
  {
    id: "restaurante-atendimento",
    title: "Restaurante e atendimento gastronômico",
    level: "Intermédio",
    category: "Restaurante",
    emoji: "🍽️",
    description:
      "Recepção no restaurante, atribuição de mesa, pedido estruturado e pontos de cozimento.",
    readingTitle: "O jantar começa com a chegada",
    reading: [
      "O atendimento no restaurante do Marinas Alto Manzano é uma extensão da experiência de hospitalidade do hotel. Em temporada de verão, o restaurante oferece uma proposta gastronômica de excelência à beira do lago, com a mesma atenção ao detalhe que caracteriza todas as áreas do complexo.",
      "A recepção no restaurante começa com uma saudação calorosa e a verificação da reserva: 'Boa noite, senhor García, temos sua mesa reservada com vista para o lago. Por favor, me acompanhe.' Quando não há reserva prévia, o maître verifica a disponibilidade com discrição: 'Vou verificar a disponibilidade de mesas no momento. Um segundo, por favor.'",
      "A tomada de pedido deve ser estruturada e atenta. O garçom apresenta as opções do dia com conhecimento e entusiasmo: 'O prato do dia é um cordeiro patagônico ao forno com legumes grelhados e molho de ervas da Patagônia.' Ao anotar o pedido, deve-se confirmar cada item: 'Para o senhor, então: entrada de ceviche, prato principal o salmão grelhado ao ponto. Está correto?'",
      "Os pontos de cozimento são um aspecto técnico importante. Em português: mal passado (inglês), ao ponto com mais sangue, ao ponto, ao ponto mais passado e bem passado. O garçom deve perguntar com naturalidade: 'Como o senhor prefere a sua carne? Ao ponto, bem passada?'",
      "Modificações no pedido devem ser acolhidas com gentileza: 'Claro, podemos preparar sem o molho e com a guarnição do senhor à parte. Não há problema algum.' A comunicação com a cozinha deve ser precisa para garantir que as preferências do hóspede sejam atendidas.",
    ],
    vocab: [
      { es: "Mesa reservada", pt: "Mesa reservada" },
      { es: "Punto de cocción", pt: "Ponto de cozimento" },
      { es: "Carta / Menú del día", pt: "Cardápio / Prato do dia" },
      { es: "Vuelta y vuelta / Poco hecho", pt: "Mal passado" },
      { es: "Al punto", pt: "Ao ponto" },
      { es: "Bien cocido", pt: "Bem passado" },
      { es: "Sin el aderezo", pt: "Sem o molho" },
      { es: "La cuenta, por favor", pt: "A conta, por favor" },
    ],
    quiz: [
      {
        question:
          "Como verificar a reserva no restaurante de forma profissional?",
        options: [
          "Perguntar 'Você tem reserva?'",
          "Confirmar o nome e conduzir à mesa com frase de boas-vindas.",
          "Pedir que o hóspede espere sem explicação.",
          "Verificar apenas o número da mesa.",
        ],
        answer: "Confirmar o nome e conduzir à mesa com frase de boas-vindas.",
      },
      {
        question: "Como se diz 'mal passado' em espanhol hoteleiro?",
        options: ["Bien cocido", "Al punto", "Vuelta y vuelta / Poco hecho", "Con sangre extra"],
        answer: "Vuelta y vuelta / Poco hecho",
      },
      {
        question: "O que deve fazer o garçom ao anotar o pedido?",
        options: [
          "Escrever sem confirmar.",
          "Confirmar cada item com o hóspede antes de enviar à cozinha.",
          "Memorizar sem anotar.",
          "Anotar apenas o prato principal.",
        ],
        answer: "Confirmar cada item com o hóspede antes de enviar à cozinha.",
      },
      {
        question:
          "Como acolher uma modificação no pedido (ex: sem molho)?",
        options: [
          "Dizer que não é possível.",
          "Aceitar com gentileza e confirmar a modificação.",
          "Cobrar taxa extra.",
          "Ignorar o pedido.",
        ],
        answer: "Aceitar com gentileza e confirmar a modificação.",
      },
      {
        question: "Quando o Marinas Alto Manzano opera o restaurante?",
        options: [
          "O ano todo",
          "Apenas no inverno",
          "Em temporada de verão",
          "Apenas finais de semana",
        ],
        answer: "Em temporada de verão",
      },
      {
        question:
          "Como perguntar o ponto de cozimento da carne de forma profissional?",
        options: [
          "Quer a carne crua ou queimada?",
          "Como o senhor prefere a sua carne: ao ponto, mal passada ou bem passada?",
          "Quanto tempo quer a carne no forno?",
          "Vai querer carne?",
        ],
        answer:
          "Como o senhor prefere a sua carne: ao ponto, mal passada ou bem passada?",
      },
      {
        question:
          "O que significa 'proposta gastronômica de excelência' no contexto do restaurante?",
        options: [
          "Comida rápida e barata.",
          "Serviço e culinária de alto padrão com atenção a cada detalhe.",
          "Buffet livre sem serviço.",
          "Apenas opções vegetarianas.",
        ],
        answer:
          "Serviço e culinária de alto padrão com atenção a cada detalhe.",
      },
      {
        question:
          "Qual é o prato mencionado como exemplo do dia no texto?",
        options: [
          "Salmão defumado",
          "Cordeiro patagônico ao forno com legumes grelhados",
          "Asado de tira",
          "Trucha do Lago",
        ],
        answer: "Cordeiro patagônico ao forno com legumes grelhados",
      },
    ],
    dictation:
      "Boa noite, senhor, temos sua mesa reservada com vista para o lago. Como o senhor prefere a sua carne: ao ponto ou bem passada?",
  },

  // ══ MÓDULO 9 ══
  {
    id: "cafe-da-manha",
    title: "Café da manhã buffet e serviço",
    level: "Básico",
    category: "Desayuno",
    emoji: "☕",
    description:
      "Organização do buffet, produtos oferecidos, restrições alimentares e explicação formal do serviço.",
    readingTitle: "O primeiro momento do dia",
    reading: [
      "O café da manhã é considerado por muitos hóspedes o momento mais importante da estadia. Uma boa experiência no café da manhã cria um começo positivo para o dia e reforça a percepção de qualidade do hotel. O profissional responsável pelo café da manhã deve conhecer todos os produtos oferecidos, respeitar as restrições alimentares dos hóspedes e manter o ambiente organizado e acolhedor.",
      "A organização do buffet deve ser impecável: produtos bem identificados com etiquetas claras, alimentos frescos e repostos regularmente, utensílios limpos e dispostos de forma acessível. A descrição dos itens deve estar disponível em espanhol e inglês, e preferencialmente em português para os hóspedes brasileiros.",
      "O horário do café da manhã deve ser informado no check-in e reforçado via mensagem ou bilhete na unidade: 'O café da manhã é servido das 8h às 11h no salão principal, com produtos frescos da região.' O profissional deve estar preparado para responder dúvidas sobre os produtos e sugerir combinações.",
      "As restrições alimentares são uma responsabilidade séria. O profissional deve perguntar com naturalidade: 'O senhor tem alguma restrição alimentar ou preferência especial que devemos levar em consideração?' E ao responder uma solicitação específica: 'Para hóspedes celíacos, temos pão sem glúten disponível. Para intolerantes à lactose, oferecemos leite de aveia e manteiga vegetal.'",
      "A reposição do buffet deve ser feita com discrição e rapidez. Ao repor itens na presença dos hóspedes, o profissional deve avisar brevemente: 'Com licença, vou repor o suco de laranja fresco.' Essa comunicação evita situações desconfortáveis e mantém o profissionalismo do serviço.",
    ],
    vocab: [
      { es: "Bufé de desayuno", pt: "Buffet de café da manhã" },
      { es: "Restricción alimentaria", pt: "Restrição alimentar" },
      { es: "Sin gluten / Sin lactosa", pt: "Sem glúten / Sem lactose" },
      { es: "Productos frescos de la región", pt: "Produtos frescos da região" },
      { es: "Reposición", pt: "Reposição" },
      { es: "Horario del desayuno", pt: "Horário do café da manhã" },
      { es: "Con permiso", pt: "Com licença" },
      { es: "¿Tiene alguna preferencia especial?", pt: "O senhor tem alguma preferência especial?" },
    ],
    quiz: [
      {
        question:
          "Por que o café da manhã é considerado o momento mais importante da estadia por muitos hóspedes?",
        options: [
          "Porque é a refeição mais cara.",
          "Porque cria um começo positivo para o dia e reforça a percepção de qualidade do hotel.",
          "Porque é o único momento com serviço incluído.",
          "Porque o gerente sempre está presente.",
        ],
        answer:
          "Porque cria um começo positivo para o dia e reforça a percepção de qualidade do hotel.",
      },
      {
        question:
          "Qual é a forma correta de perguntar sobre restrições alimentares?",
        options: [
          "O senhor come de tudo?",
          "O senhor tem alguma restrição alimentar ou preferência especial?",
          "O senhor é vegetariano?",
          "Tem alergia a alguma coisa grave?",
        ],
        answer: "O senhor tem alguma restrição alimentar ou preferência especial?",
      },
      {
        question:
          "O que deve ser oferecido a um hóspede intolerante à lactose?",
        options: [
          "Apenas água.",
          "Leite de aveia e manteiga vegetal.",
          "Iogurte normal.",
          "Nada de especial.",
        ],
        answer: "Leite de aveia e manteiga vegetal.",
      },
      {
        question: "Qual é o horário de café da manhã mencionado no texto?",
        options: ["7h às 10h", "8h às 11h", "9h às 12h", "6h às 9h"],
        answer: "8h às 11h",
      },
      {
        question:
          "Como deve ser feita a reposição do buffet na presença dos hóspedes?",
        options: [
          "Rapidamente sem avisar.",
          "Com um aviso breve e discreto.",
          "Apenas quando o salão está vazio.",
          "Pedindo que os hóspedes se afastem.",
        ],
        answer: "Com um aviso breve e discreto.",
      },
      {
        question:
          "O que deve estar identificado no buffet para os hóspedes brasileiros?",
        options: [
          "Apenas os preços.",
          "Descrição dos itens em espanhol e, preferencialmente, em português.",
          "Somente as calorias.",
          "O nome dos fornecedores.",
        ],
        answer:
          "Descrição dos itens em espanhol e, preferencialmente, em português.",
      },
      {
        question:
          "Qual frase é adequada ao repor o suco na presença dos hóspedes?",
        options: [
          "Só um segundo.",
          "Com licença, vou repor o suco de laranja fresco.",
          "Saiam por favor.",
          "Não olhem aqui.",
        ],
        answer: "Com licença, vou repor o suco de laranja fresco.",
      },
      {
        question: "Quando deve ser informado o horário do café da manhã ao hóspede?",
        options: [
          "Apenas na manhã do dia.",
          "No check-in e reforçado via mensagem ou bilhete na unidade.",
          "Apenas se perguntado.",
          "Nunca, o hóspede deve descobrir sozinho.",
        ],
        answer: "No check-in e reforçado via mensagem ou bilhete na unidade.",
      },
    ],
    dictation:
      "O café da manhã é servido das oito às onze horas. O senhor tem alguma restrição alimentar ou preferência especial que devemos levar em consideração?",
  },

  // ══ MÓDULO 10 ══
  {
    id: "vinhos-harmonizacao",
    title: "Vinhos argentinos e harmonização",
    level: "Avançado",
    category: "Gastronomía",
    emoji: "🍷",
    description:
      "Vocabulário enológico, recomendação de vinhos argentinos e harmonização com pratos regionais.",
    readingTitle: "A Patagônia também está no copo",
    reading: [
      "A Argentina é reconhecida mundialmente pela qualidade dos seus vinhos. A Patagônia, onde está localizado o Marinas Alto Manzano, possui condições climáticas excepcionais para a produção de uvas de alta qualidade: solo rochoso, amplitude térmica elevada e abundância de luz solar. O profissional que trabalha no restaurante deve ter conhecimentos básicos de enologia para recomendar vinhos com segurança e elegância.",
      "As principais uvas argentinas que o profissional deve conhecer são: Malbec, a uva emblemática do país, que produz vinhos encorpados, frutados e com taninos macios; Torrontés, uva branca aromática típica do noroeste argentino, com notas florais e frutadas; Cabernet Sauvignon, que produz vinhos mais tânicos e estruturados; e Pinot Noir, que prospera especialmente no clima frio da Patagônia.",
      "A harmonização de vinhos com os pratos regionais é uma arte que o garçom deve dominar. Para cordeiro patagônico, a escolha clássica é um Malbec de Mendoza ou um Pinot Noir patagônico, que complementam as notas defumadas e a textura da carne. Para trucha do lago, um Torrontés ou um Chardonnay fresco são opções elegantes. Para fondue ou queijos locais, um Cabernet Franc ou espumante nacional são excelentes escolhas.",
      "A linguagem da recomendação deve ser acessível e convidativa: 'Para acompanhar o seu cordeiro patagônico, eu recomendaria um Malbec da vinícola Achaval Ferrer de Mendoza. É um vinho encorpado, com notas de ameixa e especiarias, que realça perfeitamente os sabores da carne.' O profissional deve adaptar o nível de detalhamento ao interesse do hóspede.",
      "Ao servir o vinho, o protocolo básico inclui: mostrar o rótulo ao hóspede antes de abrir; abrir a garrafa com elegância; oferecer uma pequena dose para degustação ao titular da mesa; e servir as demais taças apenas após a aprovação. A temperatura de serviço também deve ser observada: tintos em torno de 16-18°C e brancos entre 8-12°C.",
    ],
    vocab: [
      { es: "Maridaje / Armonía con el vino", pt: "Harmonização com vinho" },
      { es: "Uva Malbec / Torrontés", pt: "Uva Malbec / Torrontés" },
      { es: "Vino tinto / blanco / espumante", pt: "Vinho tinto / branco / espumante" },
      { es: "Taninos / Acidez / Cuerpo", pt: "Taninos / Acidez / Corpo" },
      { es: "Temperatura de servicio", pt: "Temperatura de serviço" },
      { es: "Notas de ciruela / especias", pt: "Notas de ameixa / especiarias" },
      { es: "Etiqueta / Añada", pt: "Rótulo / Safra" },
      { es: "Le recomendaría este vino", pt: "Eu recomendaria este vinho ao senhor" },
    ],
    quiz: [
      {
        question:
          "Qual é a uva emblemática da Argentina?",
        options: ["Torrontés", "Cabernet Sauvignon", "Malbec", "Pinot Noir"],
        answer: "Malbec",
      },
      {
        question:
          "Qual vinho combina melhor com cordeiro patagônico?",
        options: [
          "Torrontés",
          "Chardonnay",
          "Malbec ou Pinot Noir patagônico",
          "Espumante",
        ],
        answer: "Malbec ou Pinot Noir patagônico",
      },
      {
        question:
          "Qual é a temperatura ideal de serviço para vinhos tintos?",
        options: [
          "4-6°C",
          "8-12°C",
          "16-18°C",
          "22-24°C",
        ],
        answer: "16-18°C",
      },
      {
        question:
          "O que deve fazer o garçom antes de abrir a garrafa de vinho?",
        options: [
          "Abrir sem avisar.",
          "Mostrar o rótulo ao hóspede.",
          "Verificar o preço.",
          "Perguntar se o hóspede sabe o nome do vinho.",
        ],
        answer: "Mostrar o rótulo ao hóspede.",
      },
      {
        question: "Como é descrito o Torrontés no texto?",
        options: [
          "Encorpado e tânico.",
          "Branco aromático com notas florais e frutadas.",
          "Semelhante ao Malbec em estrutura.",
          "Ideal para carnes vermelhas.",
        ],
        answer: "Branco aromático com notas florais e frutadas.",
      },
      {
        question:
          "Para trucha do lago, qual é a recomendação de vinho mencionada?",
        options: [
          "Malbec de Mendoza",
          "Pinot Noir patagônico",
          "Torrontés ou Chardonnay fresco",
          "Cabernet Sauvignon",
        ],
        answer: "Torrontés ou Chardonnay fresco",
      },
      {
        question:
          "Como adaptar a linguagem da recomendação de vinhos ao hóspede?",
        options: [
          "Sempre usar termos técnicos avançados.",
          "Adaptar o nível de detalhamento ao interesse demonstrado pelo hóspede.",
          "Recomendar sempre o mais caro.",
          "Não fazer recomendações para não errar.",
        ],
        answer: "Adaptar o nível de detalhamento ao interesse demonstrado pelo hóspede.",
      },
      {
        question: "Por que a Patagônia tem condições ideais para a viticultura?",
        options: [
          "Porque tem muito calor e chuva.",
          "Pelo solo rochoso, amplitude térmica elevada e abundância de luz solar.",
          "Por estar no deserto.",
          "Pelo clima úmido e nublado.",
        ],
        answer: "Pelo solo rochoso, amplitude térmica elevada e abundância de luz solar.",
      },
    ],
    dictation:
      "Para acompanhar o cordeiro patagônico, eu recomendaria um Malbec de Mendoza: encorpado, com notas de ameixa e especiarias, que realça perfeitamente os sabores da carne.",
  },

  // ══ MÓDULO 11 ══
  {
    id: "excursoes-villa-angostura",
    title: "Excursões em Villa La Angostura",
    level: "Intermédio",
    category: "Excursiones",
    emoji: "🌲",
    description:
      "Vocabulário turístico real para apresentar e recomendar as excursões da região.",
    readingTitle: "A Patagônia ao redor de Marinas",
    reading: [
      "Villa La Angostura é um dos destinos turísticos mais encantadores da Patagônia argentina. O Marinas Alto Manzano está estrategicamente localizado a sete quilômetros do centro da cidade e a três quilômetros do acesso ao centro de esqui Cerro Bayo, o que permite aos hóspedes explorar a região com facilidade e comodidade.",
      "O Bosque de Arrayanes é uma das atrações naturais mais únicas do mundo. Localizado na Punta Quetrihué, no interior do Parque Nacional Los Arrayanes, este bosque de mirtáceas de cor canela e troncos frios ao toque é considerado uma das poucas formações arbóreas deste tipo no planeta. O acesso é feito de barco a partir de Villa La Angostura ou por uma trilha de aproximadamente doze quilômetros. O profissional deve saber descrever: 'O Bosque de Arrayanes é uma experiência única no mundo. Os troncos cor de canela criam um ambiente de conto de fadas que encanta todos os visitantes.'",
      "O Circuito Chico é um dos passeios mais icônicos da região do Lago Nahuel Huapi. O circuito percorre aproximadamente sessenta e cinco quilômetros por paisagens de tirar o fôlego: lagos, montanhas nevadas, praias de água cristalina e vilas encantadoras. Os passeios náuticos no Lago Nahuel Huapi são outra experiência imperdível: de catamarã, lancha ou caiaque, o hóspede pode explorar as ilhas e as costas do maior lago da Patagônia.",
      "O Cerro Bayo é o centro de esqui mais próximo do hotel, a apenas três quilômetros. Em temporada de inverno, oferece pistas para todos os níveis, de iniciante a avançado. O hotel pode auxiliar na reserva de equipamentos e aulas de esqui. No verão, o Cerro Bayo transforma-se em um destino de trekking, mountain bike e tirolesa com vistas panorâmicas incomparáveis.",
      "Atividades regionais complementares incluem: pesca esportiva com guia, rafting no Rio Correntoso, visitas aos produtores locais de chocolate e cerveja artesanal, e passeios a cavalo pela Cordilheira dos Andes. O profissional deve estar preparado para recomendar essas atividades com entusiasmo e precisão: 'Posso auxiliar o senhor na reserva de qualquer uma dessas atividades. Qual tipo de experiência prefere: aventura, natureza, gastronomia ou relaxamento?'",
    ],
    vocab: [
      { es: "Bosque de Arrayanes", pt: "Bosque de Arrayanes" },
      { es: "Circuito Chico", pt: "Circuito Chico" },
      { es: "Paseo náutico", pt: "Passeio náutico" },
      { es: "Centro de esquí", pt: "Centro de esqui" },
      { es: "Pesca deportiva", pt: "Pesca esportiva" },
      { es: "Senderismo / Trekking", pt: "Trilha / Trekking" },
      { es: "Parque Nacional", pt: "Parque Nacional" },
      { es: "Actividades de aventura", pt: "Atividades de aventura" },
    ],
    quiz: [
      {
        question:
          "A que distância do hotel está o centro de esqui Cerro Bayo?",
        options: [
          "7 quilômetros",
          "15 quilômetros",
          "3 quilômetros",
          "30 quilômetros",
        ],
        answer: "3 quilômetros",
      },
      {
        question:
          "Qual é a característica mais marcante do Bosque de Arrayanes?",
        options: [
          "Suas flores coloridas.",
          "Seus troncos cor de canela frios ao toque.",
          "Sua altitude elevada.",
          "Sua localização no centro de Villa La Angostura.",
        ],
        answer: "Seus troncos cor de canela frios ao toque.",
      },
      {
        question: "Quantos quilômetros percorre o Circuito Chico?",
        options: [
          "Aproximadamente 30 km",
          "Aproximadamente 65 km",
          "Aproximadamente 100 km",
          "Aproximadamente 15 km",
        ],
        answer: "Aproximadamente 65 km",
      },
      {
        question:
          "Como o Cerro Bayo se transforma no verão?",
        options: [
          "Fecha completamente.",
          "Torna-se um destino de trekking, mountain bike e tirolesa.",
          "Abre apenas para esqui aquático.",
          "Transforma-se em um parque temático.",
        ],
        answer: "Torna-se um destino de trekking, mountain bike e tirolesa.",
      },
      {
        question:
          "Como chegar ao Bosque de Arrayanes a partir de Villa La Angostura?",
        options: [
          "Apenas de carro.",
          "De barco ou por trilha de aproximadamente doze quilômetros.",
          "De helicóptero.",
          "Apenas caminhando.",
        ],
        answer: "De barco ou por trilha de aproximadamente doze quilômetros.",
      },
      {
        question:
          "Qual atividade é mencionada no Rio Correntoso?",
        options: [
          "Passeio de catamarã",
          "Rafting",
          "Pesca esportiva",
          "Natação",
        ],
        answer: "Rafting",
      },
      {
        question:
          "Qual é a pergunta ideal para recomendar atividades ao hóspede?",
        options: [
          "O senhor quer fazer algo hoje?",
          "Qual tipo de experiência prefere: aventura, natureza, gastronomia ou relaxamento?",
          "Vamos ao Cerro Bayo?",
          "O senhor já conhece tudo aqui?",
        ],
        answer:
          "Qual tipo de experiência prefere: aventura, natureza, gastronomia ou relaxamento?",
      },
      {
        question:
          "O Bosque de Arrayanes está localizado em qual área protegida?",
        options: [
          "Reserva de Biosfera Andino-Norpatagônica",
          "Parque Nacional Los Arrayanes",
          "Reserva Natural Lago Nahuel Huapi",
          "Parque Nacional Nahuel Huapi",
        ],
        answer: "Parque Nacional Los Arrayanes",
      },
    ],
    dictation:
      "O Bosque de Arrayanes é uma experiência única no mundo. Posso auxiliar o senhor na reserva de passeios náuticos, trekking no Cerro Bayo ou pesca esportiva.",
  },
];

