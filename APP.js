// ==========================================
// 1. DADOS DAS RAÇAS (Textos Integrais)
// ==========================================
const dadosRacas = {
    "Humano": {
        desc: "A raça mais populosa da atualidade, comanda a maior parte do território mundial e o atual governo é humano. Fora isso não tem segredo, você é um humano comum.",
        maxP: 500, maxA: 2.0,
        obrigV: [
            { nome: "Espécie social", desc: "Começa com um aliado a mais" }, 
            { nome: "Panelinha", desc: "em território humano, sua lábia funciona bem mais com eles, suas interações sociais recebem 20% de vantagem para com humanos, inclusive sua barganha." }
        ],
        obrigD: [
            { nome: "Passado de opressão", desc: "Seus testes sociais com criaturas de outras raças sofrem 25% de desvantagem." }, 
            { nome: "Macaco pelado", desc: "Você sofre com condições termais, recebendo elas em um nível acima do normal." }
        ],
        opcionais: [
            { nome: "As melhores escolas", desc: "Como humano você tem acesso fácil ao melhor ensino, seus projetos e a qualidade máxima deles é um nível acima do normal." },
            { nome: "Especial", desc: "certas tribos humanas possuem traços de aparência diferentes, um terceiro olho, braços longos, pernas longas, com essa vantagem você pode dizer a mudança de aparência base que deseja e ter um ser humano diferenciado, você pode escolher uma perícia no qual essa modificação corporal ajuda e ganhar 10% de vantagem nela." },
            { nome: "Urbano", desc: "Possui a perícia camuflagem mesmo sem a ter quando em território urbano e tem 50% de vantagem na mesma quando a possuir e estiver no perímetro urbano." }
        ]
    },
    "Mink": {
        desc: "Seres humanoides com muitas características derivadas de animais mamíferos, como macacos, tigres e cervos.",
        maxP: 500, maxA: 2.0,
        obrigV: [
            { nome: "Casaco quentinho", desc: "Reduzem qualquer condição que esteja neles por causa de gelo/frio em 1 nível." }, 
            { nome: "Ferramenta biológica", desc: "garras, mandíbulas, caudas, você possui alguma ferramenta que sua biologia te dá para te ajudar, ataques usando essas ferramente tem 5% do poder geral como letalidade extra pra cada 5000 de poder geral." }
        ],
        obrigD: [
            { nome: "Sulong", desc: "Você se transforma na forma sulong se olhar diretamente para a lua, isso te fortalece, curando temporariamente 50% do seu hp, mas você perde o controle e morre no fim da transformação." }, 
            { nome: "Preconceito", desc: "reduz seus testes sociais em 30% com humanos." }
        ],
        opcionais: [
            { nome: "Controle", desc: "Você não perde o controle na forma sulong e nem morre no fim de seu uso." },
            { nome: "Electro", desc: "Você é capaz de usar seus pêlos para captar energia estática, podem liberar altas descargas elétricas nos ataques de toque, Ataques de eletro causam 1 atordoamento a mais e a condição de atordoamento pode ir um nível acima do normal." },
            { nome: "Atlético", desc: "Seu corpo animalesco te dá uma velocidade de corrida e nado mais rápida em 15km/h pra cada 5000 em poder geral." }
        ]
    },
    "Homem-Peixe": {
        desc: "Homens peixes são seres humanóides com características de animais aquáticos. Vivem em geral no fundo do oceano e são uma das raças que mais sofrem na mão dos humanos.",
        maxP: 4000, maxA: 7.0,
        obrigV: [
            { nome: "Nadador", desc: "Velocidade de nado aumentada em 35 km/h pra cada 5000 de poder geral." }, 
            { nome: "Ferramenta biológica", desc: "garras, mandíbulas, caudas, você possui alguma ferramenta que sua biologia te dá para te ajudar, ataques usando essas ferramentas tem 5% do poder geral em letalidade para cada 5000 de poder geral." }
        ],
        obrigD: [
            { nome: "Dois tritão numa moto", desc: "Você não pode entrar pro governo ou pra marinha normalmente e seus testes sociais contra pessoas desses grupos são reduzidos em 50%." }, 
            { nome: "Invocando uma Karen", desc: "Enquanto em território humano, sempre vai aparecer alguém pra te culpar de qualquer coisa que ocorra e seus testes sociais para provar sua inocência ou até para apaziguar a situação são reduzidos em 20%." }
        ],
        opcionais: [
            { nome: "Corpo Grande", desc: "Aumenta sua altura máxima em cinco metros, seu peso máximo em 4 toneladas e seu escalonamento de hp em 10% e seu dano é aumentado em 5% para cada 5000 de Poder Geral." },
            { nome: "Água mãe", desc: "Sua ligação com a água te permite manipular ela com as próprias mãos de forma bem fácil e a utilizar para ataques, recebendo 5% vantagem no teste de acerto com a mesma." },
            { nome: "Brutalidade", desc: "Aumenta o escalonamento do seu poder de carga em 50% pra cada 5000 de poder geral." }
        ]
    },
    "Anão": {
        desc: "Seres humanoides de tamanho diminuto.",
        maxP: 5, maxA: 0.9,
        obrigV: [
            { nome: "O tamanho não conta", desc: "Reduz sua altura máxima à 90cm e te dá 5% de vantagem em testes de esquiva contra seres maiores que você." }, 
            { nome: "Quão maior eles são", desc: "Possui a perícia camuflagem mesmo sem a ter quando se escondendo de outras raças maiores, recebe 50% de vantagem quando a possuir." }
        ],
        obrigD: [
            { nome: "Manlet", desc: "Reduz sua altura máxima em 1,8 m, seu peso mínimo em 19,5 kg e o máximo em 495 kg. Testes sociais com mulheres são reduzidos em 10%." }, 
            { nome: "Inocente", desc: "Sua raça é mais inocente que o normal, testes sociais contra você são aumentados em 25% fora de combate." }
        ],
        opcionais: [
            { nome: "Fofura", desc: "Suas interações sociais não intimidantes recebem 20% de vantagem." },
            { nome: "Ligeirinho", desc: "Sua velocidade de corrida é aumentada em 30 km/h pra cada 5000 de poder geral." },
            { nome: "Fadas", desc: "Seus testes de acrobáticos recebem 10% de vantagem contra seres de raças maiores." }
        ]
    },
    "Gigante": {
        desc: "Basicamente e em resumo, são seres humanos MUITO maiores que o normal.",
        maxP: 40000, maxA: 13.0,
        obrigV: [
            { nome: "O tamanho conta sim", desc: "Aumenta seu tamanho máximo em 13 m e seu peso máximo em 40 toneladas. Recupera-se 50 de estamina extra por turno." }, 
            { nome: "Brutalidade", desc: "Aumenta o escalonamento do seu poder de carga em 50% pra cada 5000 de poder geral." }
        ],
        obrigD: [
            { nome: "Cuidado onde pisa", desc: "Andar por áreas MUITO populosas é quase impossível sem quebrar nada tendo 10% de desvantagem em ações que exijam andar nessas áreas." }, 
            { nome: "Vai esconder onde?", desc: "Testes de furtividade e camuflagem recebem 20% de desvantagem." }
        ],
        opcionais: [
            { nome: "Nação guerreira", desc: "armaduras te garantem 50% mais armadura do que o normal." },
            { nome: "Yeti", desc: "Você tem um corpo muito peludo, reduzindo condições afligidas em você por gelo/frio em 1 nível." },
            { nome: "Birl", desc: "Aumenta o escalonamento do seu poder de carga em 100% pra cada 5000 de poder geral." }
        ]
    },
    "Oni": {
        desc: "Seres enormes em tamanho, com feições que muitos confundem com demônios e possuindo chifres.",
        maxP: 200000, maxA: 48.0,
        obrigV: [
            { nome: "OHH se conta", desc: "Aumenta seu tamanho máximo em 48 m e seu peso máximo em 200 toneladas. Assim como seu escalonamento de HP em 20% pra cada 5000 de poder geral." }, 
            { nome: "Brutalidade", desc: "Aumenta o escalonamento do seu poder de carga em 50% pra cada 5000 de poder geral." }
        ],
        obrigD: [
            { nome: "MUITO cuidado onde pisa", desc: "Andar por áreas MUITO e MEDIANAMENTE populosas é quase impossível sem quebrar nada tendo 10% de desvantagem em ações que exijam andar nessas áreas." }, 
            { nome: "Ah, vai esconder sim", desc: "Seus testes de furtividade e camuflagem recebem 25% de desvantagem." }
        ],
        opcionais: [
            { nome: "Pele grossa", desc: "5% do poder geral como armadura para cada 5000 de poder geral." },
            { nome: "Assustador", desc: "Seus testes sociais de intimidação recebem 25% de vantagem contra seres menores que você." },
            { nome: "Guindaste", desc: "Aumenta o escalonamento do seu poder de carga em 100% pra cada 5000 de poder geral." }
        ]
    },
    "Celestial": {
        desc: "Muito parecidos com humanos, mas são originários das ilhas do céu e possuem pequenas asas.",
        maxP: 500, maxA: 2.0,
        obrigV: [
            { nome: "Asas pequenas", desc: "Possui um par de asas pequenas, não podem voar, mas podem planar, elas podem ser asas de qualquer ave ou animal voador de sua preferência. Recebem 5% de vantagem em testes que envolvam planar ou voar com asas como principal necessidade." }, 
            { nome: "Herança celestial", desc: "Começa o jogo com três dials pequenos à sua escolha." }
        ],
        obrigD: [
            { nome: "Asas molhadas", desc: "velocidade de nado reduzida em 50%." }, 
            { nome: "Quase humano", desc: "Raças não humanas e não celestiais podem desconfiar de você, recebendo uma redução de 20% em testes sociais nesses casos." }
        ],
        opcionais: [
            { nome: "Ciência dos céus", desc: "projetos com dials tem sua qualidade e qualidade máxima aumentados em 1." },
            { nome: "Anjo guardião", desc: "Testes sociais em que não se tem desvantagem, se ganha 20% de vantagem." },
            { nome: "Combate aéreo", desc: "Testes de defesa no ar recebem 10% de vantagem." }
        ]
    },
    "Lunariano": {
        desc: "Uma antiga e rara raça, que vivia onde hoje é mary geoise.",
        maxP: 500, maxA: 2.0,
        obrigV: [
            { nome: "Chama de Lunária", desc: "Pode liberar e manipular levemente chamas de seu corpo para o ataque, podendo causar queimadura em suas técnicas. Suas chamas causam 1 nivel de queimado a mais que o normal, tendo como nível máximo um nivel a mais também." }, 
            { nome: "Asas Lunarianas", desc: "Possui um grande par de asas, que te permite voar livremente, essas asas podem ser baseadas em qualquer animal voador e te garantem 30km/h de velocidade de voo por 5000 de poder geral." }
        ],
        obrigD: [
            { nome: "Não molhe meu barato", desc: "Com as asas encharcadas todas suas vantagens raciais lunarianas são perdidas." }, 
            { nome: "Espécie rara", desc: "Alvo de caça de caçadores de recompensa, assim como de pesquisa, você sempre é almejado como alvo de caça para ser estudado ou colecionado." }
        ],
        opcionais: [
            { nome: "Tocha corporal", desc: "Pode gastar 1 de VDA para acender uma chama em sua cabeça, nuca e ombros para se curar num valor igual a 10% do seu poder corporal." },
            { nome: "Criado para durar", desc: "Quando se cura de qualquer forma, reduz condições danificantes em 1 nível." },
            { nome: "Fornalha celestial", desc: "Causa 5% mais dano de fogo em alvos sofrendo de queimadura para cada 5000 de poder geral." }
        ]
    }
};

// ==========================================
// 2. BANCO COMPLETO DE VANTAGENS E DESVANTAGENS
// ==========================================
const bancoTraits = [
    // --- VANTAGENS (1 PONTO) ---
    { id: "v_acele", nome: "Aceleração", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Sendo extremamente treinado em corridas explosivas, você pode gastar ${10*n} stamina para aumentar sua velocidade em ${100*n}% na sua próxima ação de movimentação.` },
    { id: "v_sentidos", nome: "Sentidos aguçados", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: true, promptMsg: "Qual sentido? (Ex: Visão, Audição, Haki)", desc: (n) => `Você possui algum sentido muito bem treinado ou melhorado. Testes de detecção com esse sentido são aumentados em ${10*n}%.` },
    { id: "v_ap_inofensiva", nome: "Aparência inofensiva", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Você parece fofinho, fraco ou muito calmo. Fora de combate você ganha ${10*n}% de poder social para situações não intimidantes.` },
    { id: "v_ap_intimidadora", nome: "Aparência intimidadora", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Você parece perigoso, amedrontador e pavio curto. Fora de combate você ganha ${10*n}% de poder social para situações intimidantes.` },
    { id: "v_ninja", nome: "Como um ninja", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Você sabe como evitar combates desnecessários de forma ágil, seus testes de furtividade quando fora de combate são aumentados em ${20*n}%.` },
    { id: "v_atraente", nome: "Atraente", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Você é considerado belo pelos outros. É capaz de despertar interesses românticos ou ser tratado mais favoravelmente, recebendo assim +${20*n}% em testes de sedução fora de combate.` },
    { id: "v_corajoso", nome: "Corajoso", tipo: "vantagem", custoBase: -1, max: 5, reqEspec: false, desc: (n) => `Você tem uma coragem distinta e não se deixa abalar diante de grandes desafios. Você ganha +${20*n}% contra testes de intimidação fora de combate.` },
    { id: "v_sangue_frio", nome: "Sangue-frio", tipo: "vantagem", custoBase: -1, max: 3, reqEspec: false, desc: (n) => `Você é uma pessoa calma que não tem o seu humor alterado por ameaças. Reduz condições não físicas aplicadas a você por testes sociais em ${n} nível(is).` },
    { id: "v_sono_leve", nome: "Sono leve", tipo: "vantagem", custoBase: -1, max: 1, reqEspec: false, desc: (n) => `Você é capaz de despertar com o menor barulho. Enquanto dormindo, ao invés de não conseguir detectar as coisas ao redor, você se torna capaz de detectar normalmente usando audição.` },
    
    // --- VANTAGENS (2 PONTOS) ---
    { id: "v_heranca", nome: "Herança genética", tipo: "vantagem", custoBase: -2, max: 2, reqEspec: false, desc: (n) => `Sua família tem uma herança genética forte, você pode pegar mais uma vantagem opcional de raça.` },
    { id: "v_bem_coberto", nome: "Bem coberto", tipo: "vantagem", custoBase: -2, max: 5, reqEspec: false, desc: (n) => `Você usa muito bem sua própria armadura. Enquanto usando armadura, ganha 50 de armadura extra por item de armadura. (Total: ${50*n} extra).` },
    { id: "v_ataque_surpresa", nome: "Ataque surpresa", tipo: "vantagem", custoBase: -2, max: 5, reqEspec: false, desc: (n) => `Você aprendeu a atacar enquanto escondido. Atacar sem ser percebido antes do golpe aplica ${20*n}% mais dano.` },
    { id: "v_mata_moscas", nome: "Mata-moscas", tipo: "vantagem", custoBase: -2, max: 5, reqEspec: false, desc: (n) => `Você treinou para matar seres menores que você. Causa ${10*n}% mais dano em oponentes menores que você.` },
    { id: "v_mata_gigantes", nome: "Mata-gigantes", tipo: "vantagem", custoBase: -2, max: 5, reqEspec: false, desc: (n) => `Você treinou para matar seres maiores que você. Causa ${10*n}% mais dano em oponentes maiores que você.` },
    { id: "v_rei_massas", nome: "Rei das massas", tipo: "vantagem", custoBase: -2, max: 5, reqEspec: false, desc: (n) => `Você atrai o povo para sua causa. Ganha +${5*n} seguidores.` },

    // --- VANTAGENS (3 PONTOS) ---
    { id: "v_treino_barbaro", nome: "Treino bárbaro", tipo: "vantagem", custoBase: -3, max: 1, reqEspec: false, desc: (n) => `Você treinou sua luta sem armaduras. Quando sem nenhuma vestimenta na parte de cima do corpo, você é considerado usando armadura. Ganha 15% do poder corporal de armadura nesses casos.` },
    { id: "v_evolucao", nome: "Evolução", tipo: "vantagem", custoBase: -3, max: 3, reqEspec: false, desc: (n) => `Você possui alguma modificação corporal não muito bruta que o ajuda, membros extras e etc.` },
    { id: "v_pique_abelha", nome: "Pique como uma abelha", tipo: "vantagem", custoBase: -3, max: 3, reqEspec: false, desc: (n) => `Ganha ${n} VDA extra.` },
    { id: "v_aguente_firme", nome: "Aguente firme", tipo: "vantagem", custoBase: -3, max: 3, reqEspec: false, desc: (n) => `Você pode gastar 1 VDA quando receber um dano para aguentar as pontas, recebendo 10% do seu poder geral como armadura durante esse momento.` },
    { id: "v_ruina_tita", nome: "Ruína do titã", tipo: "vantagem", custoBase: -3, max: 3, reqEspec: false, desc: (n) => `Seus ataques básicos e técnicas causam dano extra igual a 3% da vida atual do alvo.` },
    { id: "v_esmaga_moscas", nome: "Esmaga-moscas", tipo: "vantagem", custoBase: -3, max: 3, reqEspec: false, desc: (n) => `Você pode gastar todo o seu VDA como VDAs extras para usar uma técnica de dano, aumentando o dano dela em 200%.` },
    { id: "v_negociador", nome: "Negociador", tipo: "vantagem", custoBase: -3, max: 1, reqEspec: false, desc: (n) => `Ignora redutores de efeitos sociais fora de combate.` },
    { id: "v_tita", nome: "Titã", tipo: "vantagem", custoBase: -3, max: 1, reqEspec: false, desc: (n) => `Aumenta seu escalonamento de HP em +40%.` },

    // --- DESVANTAGENS (1 PONTO) ---
    { id: "d_analfabeto", nome: "Analfabeto", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você nunca recebeu educação formal, assim sendo, é incapaz de ler e escrever.` },
    { id: "d_avarento", nome: "Avarento", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você odeia gastar dinheiro e sempre faz tudo o possível para economizar. Acaba comprando produtos e serviços de qualidade duvidosa.` },
    { id: "d_bisbilhoteiro", nome: "Bisbilhoteiro", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você é extremamente curioso, se jogando sobre qualquer mistério que aparecer e não relaxando até desvendá-lo.` },
    { id: "d_compulsivo", nome: "Compulsivo", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: true, promptMsg: "Qual a sua mania/ritual?", desc: (n) => `Você tem uma mania, hábito ou ritual simples que precisa executar ao menos uma vez a cada 20 posts.` },
    { id: "d_desengoncado", nome: "Desengonçado", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você possui pouco controle sobre o próprio corpo, deixar objetos caírem, esbarrões e quedas são acontecimentos frequentes.` },
    { id: "d_desorientado", nome: "Desorientado", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você possui um péssimo senso de direção, se perdendo com frequência e sendo incapaz de seguir as instruções mais simples.` },
    { id: "d_distraido", nome: "Distraído", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você tem dificuldades para realizar tarefas que exijam concentração e disciplina, perdendo facilmente sua atenção.` },
    { id: "d_perfeccionista", nome: "Perfeccionista", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você não pode ver nada fora de seu devido lugar, qualquer coisa que pareça afetar a harmonia ou a ordem lhe causam profundo incômodo.` },
    { id: "d_altruista", nome: "Altruísta", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você constantemente coloca a vontade, os desejos e a segurança das outras pessoas sobre a sua.` },
    { id: "d_ambicao", nome: "Ambição", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: true, promptMsg: "Qual é a sua grande ambição?", desc: (n) => `Você tem uma meta ou objetivo de vida claro e não mede esforços para alcançá-lo.` },
    { id: "d_apegado", nome: "Apegado", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: true, promptMsg: "Apegado a quê ou quem?", desc: (n) => `Você ama algo ou alguém, não medindo esforços para proteger e recuperar o alvo de seu apego emocional.` },
    { id: "d_atormentado", nome: "Atormentado", tipo: "desvantagem", custoBase: 1, max: 1, reqEspec: false, desc: (n) => `Você escuta vozes de coisas, entidades ou pessoas dentro de sua cabeça, sendo constantemente provocado e atormentado por conta disso.` },

    // --- DESVANTAGENS (2 PONTOS) ---
    { id: "d_mutacao", nome: "Mutação", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: true, promptMsg: "Qual é a mutação?", desc: (n) => `Você possui uma mutação genética que te torna feio, estranho ou te atrapalha de alguma forma.` },
    { id: "d_gago", nome: "Gago", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é gago, tendo assim certa dificuldade para se comunicar. Sendo assim perde 20% em qualquer teste social.` },
    { id: "d_mal_humorado", nome: "Mal-humorado", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: false, desc: (n) => `Você é naturalmente ranzinza, se irritando facilmente. Você tem desvantagem de ${20*n}% em testes sociais e intelectuais enquanto com raiva.` },
    { id: "d_sentido_ruim", nome: "Sentido ruim", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: true, promptMsg: "Qual sentido é ruim?", desc: (n) => `Um de seus sentidos é ruim. Você recebe ${20*n}% de reduction em testes de detecção com esse sentido.` },
    { id: "d_cleptomaniaco", nome: "Cleptomaníaco", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é viciado em roubar, não importa se você precisa ou não do objeto. Deve roubar um item sempre que uma oportunidade surgir.` },
    { id: "d_covarde", nome: "Covarde", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: false, desc: (n) => `Você é amedrontado facilmente. Recebe desvantagem de ${20*n}% em testes de amedrontamento contra você.` },
    { id: "d_devasso", nome: "Devasso", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: false, desc: (n) => `Você é viciado na arte do flerte. Recebe desvantagem de ${20*n}% em testes de sedução contra você.` },
    { id: "d_diligente", nome: "Diligente", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: true, promptMsg: "Qual a missão ou dever sagrado?", desc: (n) => `Você dedica sua vida para cumprir uma missão ou dever que acredita ser sagrado.` },
    { id: "d_ganancioso", nome: "Ganancioso", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: false, desc: (n) => `Você ama o dinheiro mais que qualquer coisa nesse mundo. -${20*n}% em testes sociais de vendas.` },
    { id: "d_heroico", nome: "Heroico", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você tem o hábito de ajudar os indefesos, corrigir injustiças e sempre cumprir com as suas promessas.` },
    { id: "d_histerico", nome: "Histérico", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você apresenta emoções exageradas e inconstantes.` },
    { id: "d_honesto", nome: "Honesto", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de trapacear e roubar, além disso, sempre obedece as leis e costumes locais.` },
    { id: "d_impulsivo", nome: "Impulsivo", tipo: "desvantagem", custoBase: 2, max: 5, reqEspec: false, desc: (n) => `Você não pensa antes de agir, comprando brigas e ignorando o bom-senso. Recebe desvantagem de ${20*n}% em testes onde tentam te incitar à violência.` },
    { id: "d_indisciplinado", nome: "Indisciplinado", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você não faz e não segue planos nem hierarquias, agindo à sua própria maneira. Fator dificultante ao lidar com superiores.` },
    { id: "d_intolerancia", nome: "Intolerância racial", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: true, promptMsg: "Ódio contra qual raça?", desc: (n) => `Você tem um grande ódio, raiva ou rancor contra uma raça determinada.` },
    { id: "d_invejoso", nome: "Invejoso", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você cobiça tudo aquilo que as pessoas ao seu redor têm, mesmo que sejam seus aliados. Não mede esforços para conseguir o que eles têm.` },
    { id: "d_justo", nome: "Justo", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você sempre age de maneira honrada em combate, sendo incapaz de realizar golpes baixos ou táticas sujas.` },
    { id: "d_megalomaniaco", nome: "Megalomaníaco", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você acredita ser o melhor em tudo que faz. Com senso de realidade distorcido, pode ser desagradável e colocar-se em perigo.` },
    { id: "d_mentiroso", nome: "Mentiroso compulsivo", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de dizer a verdade, mesmo quando quer. Sempre exagera ou distorce os fatos.` },
    { id: "d_misandria", nome: "Misandria", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você tem aversão contra homens, sofrendo um desconforto ao ser obrigado a interagir naturalmente com eles.` },
    { id: "d_misericordioso", nome: "Misericordioso", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de matar e sempre concede perdão aos seus inimigos.` },
    { id: "d_misoginia", nome: "Misoginia", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você tem aversão contra mulheres, sofrendo um desconforto ao ser obrigado a interagir naturalmente com elas.` },
    { id: "d_narcisista", nome: "Narcisista", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Seu tópico favorito é você mesmo. Conversar com você geralmente não é agradável para os outros.` },
    { id: "d_obcecado", nome: "Obcecado", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: true, promptMsg: "Obcecado por o quê?", desc: (n) => `Você é completamente obcecado por um objeto ou atividade específica.` },
    { id: "d_obediente", nome: "Obediente", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você nunca desobedece os seus superiores. Ordens são absolutas e devem ser seguidas a qualquer custo.` },
    { id: "d_orgulhoso", nome: "Orgulhoso", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você é extremamente orgulhoso, preferindo a morte que sofrer a vergonha de uma derrota num duelo justo.` },
    { id: "d_sadista", nome: "Sadista", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você sente a necessidade de infligir dor aos outros e sente prazer com isso. É desnecessariamente cruel.` },
    { id: "d_teimoso", nome: "Teimoso", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Quando você acredita em algo, nada pode convencê-lo do contrário, mesmo com provas claras.` },
    { id: "d_timido", nome: "Tímido", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você tem dificuldades de iniciar interações sociais e odeia estar sob os holofotes.` },
    { id: "d_vaidoso", nome: "Vaidoso", tipo: "desvantagem", custoBase: 2, max: 1, reqEspec: false, desc: (n) => `Você sente a necessidade de estar sempre limpo e bem arrumado, não suportando ficar sujo ou desgrenhado.` },

    // --- DESVANTAGENS (3 PONTOS) ---
    { id: "d_sincero", nome: "Sincero", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de mentir, simplesmente não faz parte da sua natureza. Sempre diz a verdade.` },
    { id: "d_sonambulo", nome: "Sonâmbulo", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você se move durante o sono. Toda vez que dorme, não faz ideia de onde vai acordar.` },
    { id: "d_mudo", nome: "Mudo", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de se comunicar oralmente, tendo que recorrer a outros métodos.` },
    { id: "d_cavalheiro", nome: "Cavalheiro / Sororidade", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você é incapaz de agredir, lutar ou usar força contra mulheres.` },
    { id: "d_ingenuo", nome: "Ingênuo", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: false, desc: (n) => `Você tende a sempre confiar e acreditar nas pessoas. Recebe -${20*n}% em testes de lábia e similares.` },
    { id: "d_narcolepsia", nome: "Narcolepsia", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você dorme em quase qualquer hora fora de combate. Pode pegar no sono e ficar vulnerável.` },
    { id: "d_suicida", nome: "Suicida", tipo: "desvantagem", custoBase: 3, max: 1, reqEspec: false, desc: (n) => `Você não valoriza sua própria vida.` },
    { id: "d_demente", nome: "Demente", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: false, desc: (n) => `Você tem um intelecto desprivilegiado. Recebe -${20*n}% em testes intelectuais.` },
    { id: "d_sedentario", nome: "Sedentário", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: false, desc: (n) => `Você está fora de forma. Recebe desvantagem de ${20*n}% em testes acrobáticos.` },
    { id: "d_corpo_fragil", nome: "Corpo frágil", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: false, desc: (n) => `Seu corpo é bem fraco em muitas questões. Recebe desvantagens de ${20*n}% em testes corporais.` },
    { id: "d_presenca_ruim", nome: "Presença desagradável", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: false, desc: (n) => `Você se destaca negativamente dos outros (feio, fedido, etc). Seus testes sociais são reduzidos em ${20*n}%.` },
    { id: "d_dependente", nome: "Dependente", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: true, promptMsg: "Dependente do quê?", desc: (n) => `Viciado em uma substância. Caso falte, sofre abstinência e exaustão. O prazo para usar a droga é de ${20 - 5*(n-1)} posts.` },
    { id: "d_fobias", nome: "Fobias", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: true, promptMsg: "Fobia de quê?", desc: (n) => `Medo irracional. Perto do gatilho recebe condição medo nível 1, e desvantagem de ${20*n}% contra você.` },
    { id: "d_alergias", nome: "Alergias", tipo: "desvantagem", custoBase: 3, max: 5, reqEspec: true, promptMsg: "Alergia a quê?", desc: (n) => `Grave alergia. Testes contra você com a coisa te afetando têm desvantagem de ${20*n}%.` }
];

// ==========================================
// 3. REGRAS DE CONFLITOS LÓGICOS
// ==========================================
const conflitosTraits = [
    ["v_ap_inofensiva", "v_ap_intimidadora"],
    ["v_corajoso", "d_covarde"],
    ["d_indisciplinado", "d_obediente"],
    ["d_honesto", "d_mentiroso"],
    ["d_honesto", "d_cleptomaniaco"],
    ["d_sincero", "d_mentiroso"],
    ["d_misericordioso", "d_sadista"]
];

const conflitosRaciais = [
    ["Asas pequenas", "Asas Lunarianas"],
    ["O tamanho não conta", "O tamanho conta sim"],
    ["O tamanho não conta", "OHH se conta"]
];

// ==========================================
// 4. OFÍCIOS E EDCS (BASES)
// ==========================================
const oficiosBase = {
    "Medico": { 
        bbcode: `[b]Nome:[/b] Médico\n[b]Ranking:[/b] Base - Comum\n[b]Descrição:[/b] Sabe curar feridas e doenças utilizando produtos médicos.\n[b]Perícias base:[/b] *Conhecimentos(Primeiros Socorros): Sabendo usar o kit de primeiros socorros, pode usar 1 VDA de seu post para estancar feridas de alguém, lhe curando em 10% do poder intelectual do médico.`,
        reqHab: { cat: "Conhecimentos", nome: "Primeiros Socorros" }
    },
    "Carpinteiro": { 
        bbcode: `[b]Nome:[/b] Carpinteiro\n[b]Ranking:[/b] Base - Comum\n[b]Descrição:[/b] Sabe cuidar de barcos e os manter bem cuidados.\n[b]Perícias base:[/b] *Conhecimento(Manutenção de barcos): Os conhecimentos em manutenção do carpinteiro, mantém o barco em forma muito superior do que sem ele. Após um post fazendo manutenção preventiva no barco, o mesmo ganha 500 de armadura extra.`,
        reqHab: { cat: "Conhecimentos", nome: "Manutenção de barcos" }
    },
    "Cozinheiro": { 
        bbcode: `[b]Nome:[/b] Cozinheiro\n[b]Ranking:[/b] Base - Comum\n[b]Descrição:[/b] Sabe transformar ingredientes em pratos deliciosos e pode criar comidas simples em projetos.\n[b]Perícias base:[/b] *Conhecimentos(culinária): Seus pratos deliciosos melhoram seus colegas. Após comer sua comida as pessoas passam oito horas in game com +100 armadura e letalidade.`,
        reqHab: { cat: "Conhecimentos", nome: "Culinária" }
    },
    "Ferreiro": { 
        bbcode: `[b]Nome:[/b] Ferreiro\n[b]Ranking:[/b] Base - Comum\n[b]Descrição:[/b] Sabe criar armas base utilizando metais e uma forja.\n[b]Perícias base:[/b] *Conhecimento(forja):Um ferreiro sabe limpar e fazer manutenção da arma melhor que ninguém, quando você cuida da arma de alguém, você ganha letalidade na arma igual ao valor de dano extra.`,
        reqHab: { cat: "Conhecimentos", nome: "Forja" }
    },
    "Navegador": { 
        bbcode: `[b]Nome:[/b] Navegador\n[b]Ranking:[/b] Base - Comum\n[b]Descrição:[/b] Especialista em traçar rotas, ler mapas e entender as correntes e climas marinhos.\n[b]Perícias base:[/b] *Conhecimento(Navegação): Sabendo achar o melhor caminho aumenta a velocidade do meio de transporte atual em 20 km/h.`,
        reqHab: { cat: "Conhecimentos", nome: "Navegação" }
    }
};

let lastOficioReq = null;

function carregarOficio() {
    const selecionado = document.getElementById("oficioBase").value;
    const txtArea = document.getElementById("txtOficio");

    if (lastOficioReq) {
        const idx = userPericias.findIndex(p => p.nome.toLowerCase() === lastOficioReq.nome.toLowerCase() && p.categoria === lastOficioReq.cat && p.isAutoOficio);
        if (idx !== -1) {
            userPericias.splice(idx, 1);
        }
        lastOficioReq = null;
    }

    if(selecionado && oficiosBase[selecionado]) {
        txtArea.value = oficiosBase[selecionado].bbcode;
        const req = oficiosBase[selecionado].reqHab;
        
        const temPericia = userPericias.find(p => p.nome.toLowerCase() === req.nome.toLowerCase() && p.categoria === req.cat);
        if (!temPericia) {
            userPericias.push({ nome: req.nome, isFixa: false, categoria: req.cat, isAutoOficio: true });
            lastOficioReq = req;
        }
    } else {
        txtArea.value = "";
    }
    atualizarGatilhosGerais();
    renderPericias();
}

const edcsBase = {
    "Barbaro": { weapon: "Machado Comum (Qualidade 1)", bb: `[b]Nome:[/b] Bárbaro\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] Utiliza de UM machados, clavas ou martelos para golpes poderosos.\n[b]Velocidade do golpe:[/b] Lento\n[b]Atributo do golpe:[/b] Corporal\n[b]Aditivos:[/b] N/A` },
    "Espadachim": { weapon: "Espada Comum (Qualidade 1)", bb: `[b]Nome:[/b] Espadachim\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] Utiliza UMA espada para causar golpes precisos.\n[b]Velocidade do golpe:[/b] Médio\n[b]Atributo do golpe:[/b] Acrobático\n[b]Aditivos:[/b] N/A` },
    "Atirador": { weapon: "Arma de Fogo Comum (Qualidade 1)", bb: `[b]Nome:[/b] Atirador\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] Utiliza de UMA arma de fogo para dar tiros a distância.\n[b]Velocidade do golpe:[/b] Rápido\n[b]Atributo do golpe:[/b] Intelectual\n[b]Aditivos:[/b] N/A` },
    "Arqueiro": { weapon: "Arco Comum (Qualidade 1)", bb: `[b]Nome:[/b] Arqueiro\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] Utiliza de UM arco para disparar flechas.\n[b]Velocidade do golpe:[/b] Médio\n[b]Atributo do golpe:[/b] Acrobático\n[b]Aditivos:[/b] N/A` },
    "Trombadinha": { weapon: "Faca Comum (Qualidade 1)", bb: `[b]Nome:[/b] Trombadinha\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] Utiliza de UMA faca ou adaga para dar golpes cortantes.\n[b]Velocidade do golpe:[/b] Rápido\n[b]Atributo do golpe:[/b] Acrobático\n[b]Aditivos:[/b] N/A` },
    "Ceifador": { weapon: "Foice Comum (Qualidade 1)", bb: `[b]Nome:[/b] Ceifador\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] utiliza de uma foice para golpes cortantes.\n[b]Velocidade do golpe:[/b] Lento\n[b]Atributo do golpe:[/b] Acrobático\n[b]Aditivos:[/b] N/A` },
    "Combatente": { weapon: "Bastão Comum (Qualidade 1)", bb: `[b]Nome:[/b] Combatente\n[b]Tipo:[/b] Padrão\n[b]Nível do EDC:[/b] Comum\n[b]Descrição:[/b] utiliza de bastões longos para golpes precisos.\n[b]Velocidade do golpe:[/b] Rápido\n[b]Atributo do golpe:[/b] Corporal\n[b]Aditivos:[/b] N/A` }
};

function carregarEdc() {
    const selecionado = document.getElementById("edcBase").value;
    const txtArea = document.getElementById("txtEdc");
    if(selecionado && edcsBase[selecionado]) {
        txtArea.value = edcsBase[selecionado].bb;
    } else {
        txtArea.value = "";
    }
}

// ==========================================
// 5. SISTEMA DE HABILIDADES
// ==========================================
const aditivosInfinitos = [
    {id: 'exp', nome: 'Explosivo', mult: 20, isQuad: true, txt: 'de dano aumentado para os usos desta habilidade'},
    {id: 'inev', nome: 'Inevitável', mult: 10, isQuad: true, txt: 'de vantagem para usos desta habilidade'},
    {id: 'sng', nome: 'Sangue grosso', mult: 40, isQuad: true, txt: 'no cálculo de HP'},
    {id: 'mat', nome: 'Matador', mult: 30, isQuad: true, txt: 'do poder geral como letalidade'},
    {id: 'imp', nome: 'Imparável', mult: 20, isQuad: true, txt: 'do poder geral como armadura'},
    {id: 'dur', nome: 'Durável', mult: 20, isQuad: true, txt: 'de dano reduzido para usos desta habilidade'}
];

const skillsDb = {
    haki: { 
        nome: "Haki", 
        titleMaster: "Mestre em Haki", 
        requiresExtra: false, 
        bonusTxt: (n) => `• +${20*n}% de escalonamento no cálculo de HP.\n\n• +${1*n} metro(s) no alcance de dano sem tocar do Haoshoku (caso venha a possuir).`, 
        baseHtml: `[center][b]Base:[/b][/center]\n\n[b]Kenbunshoku:[/b] O usuário de haki possui uma área de 1% de seu poder geral, onde ele percebe as coisas como um sexto sentido, inimigos nessa área que não possuem haki, sofrem 20% de desvantagem em acertar o usuário de haki.\n\n[b]Busoushoku:[/b] O usuário de haki pode cobrir uma parte de seu corpo por vez (cabeça, uma perna, um braço, tronco posterior, tronco anterior) cobrindo também qualquer item nesse local. Coisas cobertas pelo Busoushoku podem acertar logias e ignorar mudanças corporais de akuma para acertarem o corpo original do alvo. Adicionalmente, qualquer ataque feito com esses membros/itens causa 20% mais dano e tem 20% do poder geral como letalidade extra por VDA usado no ataque. Danos recebidos na área do armamento também encaram um dano reduzido de 40% e 40% do poder geral como armadura.\n\n[b]Aura da vontade:[/b] Seu haki do armamento se manifesta como uma aura de “raios” negros, contando como um elemento manipulável para você, te permitindo criar técnicas onde usa e arremessa isso nos ataques. Técnicas assim ganham as vantagens do seu busoushoku.\n\n[b]Protegido:[/b] Qualquer ataque físico contra seus membros protegidos por busoushoku, aplica 1 nível de condition a menos.`, 
        masterHtml: `[center][b]Mestre em haki:[/b][/center]\n\n[b]Melhorias:[/b]\n* Seu kenbunshoku agora prevê um pouco do futuro, inimigos sem mestre do haki na área do seu Kenbunshoku tem 20% de desvantagem em teste pra te acertar e inimigos sem haki tem 30% de desvantagem.\n* Seu busoushoku agora pode cobrir todo seu corpo à vontade e dobra seus valores.\n* Aura dá vontade agora também aplica os efeitos de Ryou e Haoshoku avançado se assim você quiser.\n* Protegido reduz três níveis ao invés de um.\n\n[center][b]Ganha:[/b][/center]\n\n[b]Haoshoku:[/b] O usuário pode liberar seu haki do rei na mesma área que seu kenbunshoku afeta, todos os inimigos na área com menos de 80% do poder geral do usuário tomam 10 niveis de amedrontado e caso tenham menos de 60% do poder geral, desmaiam com o HP em 0. Um uso por aventura.\n\n[b]Ryou:[/b] Seu busoushoku é aplicado dentro dos alvos, os danificando por dentro, ao usar isso num golpe, o golpe escalará 20% mais e causará 50% mais dano.\n\n[b]Haoshoku avançado:[/b] Agora você pode aplicar seu haki do rei no ataque, isso faz com que seu ataque faça contato a 30 cm do alvo, ou seja, o ataque causa dano sem relar no alvo visualmente. Adicionalmente, esses ataques causam 15% da vida atual do alvo como dano extra IRREDUTÍVEL, assim como 10% do seu dano com o haoshoku se torna irredutível.` 
    },
    meitou: { 
        nome: "Meitou", 
        titleMaster: "Mestre em Meitou", 
        requiresExtra: false, 
        bonusTxt: (n) => `• +${5*n} no limite da condição de sangramento.\n\n• +${1*n} elemento/cor para sua aura.`, 
        baseHtml: `[center][b]Base:[/b][/center]\n\n[b]Obra de um mestre:[/b] Todo ataque com a meitou escala 50% mais em seu dano, possui 50% do seu poder geral como Letalidade extra e aplica 1 nível de sangramento.\n\n[b]Fio de kairouseki:[/b] A parte de sua arma que acerta o oponente é feita de kairouseki, sendo capaz de atacar logias e caso usado para encostar em um akuma de forma constante, reduzirá o poder geral do mesmo em 20% enquanto em contato.\n\n[b]Ventania:[/b] Usuários de meitou podem utilizar vento em suas técnicas e EDCs caso estes permitam o uso da meitou.\n\n[b]Aura:[/b] As armas são feitas de forma a possuírem uma aura colorida que se assemelha a um elemento, por exemplo uma aura vermelha que parece fogo, mas obviamente não é, mas se tem a sensação de calor, ou uma aura amarela que parece eletricidade, mas não é, porém ainda se sente o choque. Essa aura pode ser usada em técnicas e EDCs que permitam e podem aplicar condições coerentes.`, 
        masterHtml: `[center][b]Mestre em meitou:[/b][/center]\n\n[b]Melhorias:[/b]\n* Obra de um mestre agora escala com 70% o dano extra e aplica dois níveis de sangramento.\n* Ventania faz seus ataques de vento terem o dobro de letalidade.\n* Aura elemental faz seus ataques de aura aplicarem o dobro de condições.\n\n[center][b]Ganha:[/b][/center]\n\n[b]Como manteiga:[/b] Ataques com a meitou causam 40% de dano aumentado por VDA usado no ataque.\n\n[b]Hemorragia:[/b] Inimigos sangrando tomam o dobro de dano da condição de sangramento e perdem 10% de seu poder geral.` 
    },
    rokushiki: { 
        nome: "Rokushiki", 
        titleMaster: "Mestre em Rokushiki", 
        requiresExtra: false, 
        bonusTxt: (n) => `• +${5*n}% de vantagem usando poderes rokushiki.\n\n• +${30*n}km/h de velocidade de corrida.`, 
        baseHtml: `[center][b]Nível base:[/b][/center]\n\n[b]Corpo treinado:[/b] Seu cálculo de HP aumenta em 80% e carga aumenta em 200% de escalonamento.\n\n[b]Incansável:[/b] Sua recuperação de Stamina por post aumenta em 30.\n\n[b]Shigan:[/b] Você pode usar os dedos para fazer um ataque que perfura como uma bala, gasta 1 VDA, escala com 20% do seu atributo, possui 50% de dano aumentado e 100% letalidade.\n\n[b]Rankyaku:[/b] Chutando o ar, ataque de lâmina de ar por 20m. 1 VDA, 20% escala, 100% dano aumentado e 50% letalidade.\n\n[b]Tekkai:[/b] Corpo rígido. 20% do poder como armadura. Pode gastar X VDA para multiplicar defesas e reduzir condições.\n\n[b]Soru:[/b] Gasta 1 VDA para aumentar velocidade em 100 Km/h, imperceptível aos olhos comuns.\n\n[b]Geppou:[/b] Chutar o ar para voar ou não cair.\n\n[b]Kami-e:[/b] Gasta X VDA para ganhar 20% vantagem na esquiva.` , 
        masterHtml: `[center][b]Mestre em Rokushiki:[/b][/center]\n\n[b]Melhorias:[/b]\n* Corpo treinado aumenta para 160% (HP) e 300% (Carga).\n* Incansável aumenta para 100.\n* Shigan e Rankyaku livremente usados.\n* Soru aumenta para 200 km/h.\n* Tekkai sobe para 40% base.\n* Pode usar Kami-e andando metade da velocidade.\n* Pode usar Soru no Geppou.\n* Kami-e deixa rastro para +20% vantagem no contra ataque.\n\n[center][b]Ganha:[/b][/center]\n\n[b]Tekkai Go:[/b] Golpe caindo do ar.\n\n[b]Rokuogan:[/b] Onda de choque sem redução de defesa (dano verdadeiro).\n\n[b]Seimei kikan:[/b] Controle total corporal (cabelos, unhas, alterar atributos por 5 posts).` 
    },
    ciborgue: { 
        nome: "Ciborgue", 
        titleMaster: "Ciborgue Masterizado", 
        requiresExtra: false, 
        bonusTxt: (n) => `• +${10*n}% de armadura e letalidade no troca de modos.\n\n• +${1*n} melhoria(s) cibernética(s).`, 
        baseHtml: `[center][b]Base:[/b][/center]\n\n[b]Combustível:[/b] 1000 de combustível. Pode usar no lugar de stamina, recarrega apenas abastecendo.\n\n[b]Corpo metálico:[/b] Carga, velocidade e HP +30%.\n\n[b]Melhorias cibernéticas:[/b] Ganha 5 melhorias para utilidades extras e alterar atributos de perícias.\n\n[b]Armas Leves:[/b] 3 armas leves (1 VDA, 30% escala, 15% letalidade, aplica 1 nível de condição).\n\n[b]Armas médias:[/b] 2 armas médias (2 VDA, 50% escala, 30% letalidade, aplica 3 níveis de condição).\n\n[b]Armas grandes:[/b] 1 arma grande (3 VDA, 70% escala, 45% letalidade, aplica 5 níveis de condição).\n\n[b]Troca de modos:[/b] Trocar entre defensivo (30% armadura, 20% dano reduzido) e ofensivo (30% letalidade, 20% dano aumentado).\n\n[b]Olhos biônicos:[/b] Visão noturna.\n\n[b]Resistência metálica:[/b] Cura um nível da condição mais forte por post.`, 
        masterHtml: `[center][b]Mestre Ciborgue:[/b][/center]\n\n[b]Melhorias:[/b]\n* Corpo metálico: +50%.\n* MAIS 5 melhorias, 3 armas leves, 2 médias, 1 grande (Letalidade Bônus dobrada para todas).\n* Troca de modos escala 50%.\n* Resistência metálica cura 3 níveis ao invés de 1.\n\n[center][b]Ganha:[/b][/center]\n\n[b]Assistência:[/b] Drone assistente voando 1km acima de você.\n\n[b]Modo protótipo de guerra:[/b] Formas extremas ligadas aos modos (não pode trocar enquanto ativo, mas ganha 20% no escalonamento).\n\n[b]Peças sobressalentes:[/b] Curar 30% HP e reparar peças danificadas (5 vezes por aventura).\n\n[b]Laser orbital:[/b] 1 vez por aventura, ataque de laser devastador.\n\n[b]Teleguiados:[/b] Mísseis que nunca erram e perseguem o alvo até serem destruídos.` 
    },
    akuma: { 
        nome: "Akuma no Mi", 
        titleMaster: "Despertada", 
        requiresExtra: true, 
        bonusTxt: (n, tipo) => {
            if(tipo === "Logia") return `• +${1*n}% de dano aumentado por nível da sua condição principal da fruta no alvo.\n\n• +${5*n}% de alcance nos usos da fruta por nível de maestria.`;
            if(tipo === "Paramecia") return `• +${5*n}% de vantagem usando os poderes da akuma.\n\n• +${5*n}% de alcance nos usos da mesma por nível de maestria.`;
            return `• +${5*n}% de escalonamento no seu efeito de tipo zoan (herbívoro, carnívoro, ancestral ou mítico).\n\n• +${30*n}% de aumento de carga.`;
        }, 
        baseHtml: ``, 
        masterHtml: `` 
    }
};

let userSkills = {
    haki: { base: false, master: false, inf: 0, aditivos: {} },
    meitou: { base: false, master: false, inf: 0, aditivos: {} },
    rokushiki: { base: false, master: false, inf: 0, aditivos: {} },
    ciborgue: { base: false, master: false, inf: 0, aditivos: {} },
    akuma: { base: false, master: false, inf: 0, aditivos: {}, akumaName: "", akumaType: "Paramecia", bbcode: "" }
};

let totalPtsHab = 1;
let usedPtsHab = 0;
let lockedPtsHab = 0;

// ==========================================
// 6. SISTEMA DE PERÍCIAS
// ==========================================
const periciasFixasLista = ['Animais', 'Armadilhas', 'Atletismo', 'Avaliar', 'Camuflagem', 'Corrida', 'Escapismo', 'Escudo', 'Etiqueta', 'Falsificação', 'Fechaduras', 'Furtar', 'Furtividade', 'Montaria', 'Natação', 'Pesquisa', 'Procura', 'Sobrevivência'];
let userPericias = [];
let slotsPericiaLimite = 2;

function carregarSelectPericiasFixas() {
    const sel = document.getElementById('selPericiaFixa');
    if(!sel) return;
    sel.innerHTML = periciasFixasLista.map(p => `<option value="${p}">${p}</option>`).join('');
}
carregarSelectPericiasFixas();

function adicionarPericiaFixa() {
    const sel = document.getElementById('selPericiaFixa').value;
    if(!sel) return;
    if(userPericias.find(p => p.nome === sel && p.isFixa)) return alert("Você já possui esta perícia fixa!");
    userPericias.push({ nome: sel, isFixa: true, isAutoOficio: false });
    atualizarGatilhosGerais();
    renderPericias();
}

function adicionarPericiasEmBloco() {
    const cat = document.getElementById('selCategoriaRamificada').value;
    const txt = document.getElementById('txtPericiasRamificadas').value;
    if(!txt.trim()) return;

    const linhas = txt.split('\n').map(l => l.trim()).filter(l => l !== '');
    linhas.forEach(l => {
        if(!userPericias.find(p => p.nome.toLowerCase() === l.toLowerCase() && p.categoria === cat)) {
            userPericias.push({ nome: l, isFixa: false, categoria: cat, isAutoOficio: false });
        }
    });
    document.getElementById('txtPericiasRamificadas').value = "";
    atualizarGatilhosGerais();
    renderPericias();
}

function removerPericia(nome, cat) {
    // FIX: Para perícias fixas a categoria é enviada como '' (string vazia) no onclick.
    // Usamos `(p.categoria || "")` para garantir que o undefined de isFixa se iguale a "".
    const idx = userPericias.findIndex(p => p.nome === nome && (p.categoria || "") === cat);
    if(idx !== -1) {
        userPericias.splice(idx, 1);
        atualizarGatilhosGerais();
        renderPericias();
    }
}

function renderPericias() {
    const container = document.getElementById('listaPericiasTags');
    if(!container) return;
    container.innerHTML = "";

    const countEl = document.getElementById('countPericiasUsadas');
    if(countEl) countEl.innerText = userPericias.length;

    const grouped = { Fixas: [] };
    userPericias.forEach(p => {
        if(p.isFixa) {
            grouped.Fixas.push(p);
        } else {
            if(!grouped[p.categoria]) grouped[p.categoria] = [];
            grouped[p.categoria].push(p);
        }
    });

    for(let cat in grouped) {
        if(grouped[cat].length === 0) continue;
        
        let blocoHTML = `<div class="cat-pericia-bloco">
            <div class="cat-pericia-titulo">${cat} (${grouped[cat].length})</div>
            <div class="cat-pericia-tags">`;
        
        grouped[cat].forEach(p => {
            let classeAuto = p.isAutoOficio ? "auto" : "";
            let nomeEscapado = p.nome.replace(/'/g, "\\'");
            let catEscapada = (p.categoria || "").replace(/'/g, "\\'");
            
            blocoHTML += `
                <span class="tag-pericia ${classeAuto}">
                    ${p.nome} 
                    <span class="tag-remove" onclick="removerPericia('${nomeEscapado}', '${catEscapada}')">X</span>
                </span>
            `;
        });
        
        blocoHTML += `</div></div>`;
        container.innerHTML += blocoHTML;
    }
}

// ==========================================
// 7. GATILHOS E NOTAS MATEMÁTICAS
// ==========================================
let traitsSelecionados = [];
let tracosRaciaisConfirmados = [];
let saldoPontos = 0;

function atualizarGatilhosGerais() {
    const poder = parseInt(document.getElementById('poder').value) || 0;
    const isPlayer = document.getElementById('tipoPersonagem').value === "player";
    const intAttr = parseInt(document.getElementById('intelectual').value) || 0;

    const chkNovato = document.getElementById('chkNovato');
    const chkHabilidoso = document.getElementById('chkHabilidoso');
    const areaNovato = document.getElementById('areaNovato');
    const areaHabilidoso = document.getElementById('areaHabilidoso');
    const alertaBloqueio = document.getElementById('alertaBloqueioHab');

    // Trava de Habilidade do Novato
    if (isPlayer) {
        if (areaNovato) areaNovato.style.display = "block";
        if (chkNovato && chkNovato.checked) {
            if (areaHabilidoso) areaHabilidoso.style.display = "block";
            lockedPtsHab = (chkHabilidoso && !chkHabilidoso.checked) ? 1 : 0;
        } else {
            if (areaHabilidoso) areaHabilidoso.style.display = "none";
            lockedPtsHab = 0;
        }
    } else {
        if (areaNovato) areaNovato.style.display = "none";
        lockedPtsHab = 0;
    }

    if (alertaBloqueio) {
        alertaBloqueio.style.display = lockedPtsHab > 0 ? "block" : "none";
    }

    // Calcula Pontos de Habilidade Totais
    totalPtsHab = (isPlayer ? 1 : 0) + Math.floor(poder / 8000);
    renderizarHabilidades();
    
    // Atualiza Slots e Perícias
    const pontosIntelectual = Math.floor((poder * intAttr) / 100);
    slotsPericiaLimite = (isPlayer ? 2 : 0) + Math.floor(pontosIntelectual / 500);
    const slotsOficio = (isPlayer ? 2 : 0) + Math.floor(pontosIntelectual / 4000);
    
    const elSlots = document.getElementById('slotsPericiaTotal');
    if (elSlots) elSlots.innerText = slotsPericiaLimite;
    
    const elLivres = document.getElementById('slotsPericiaLivres');
    if (elLivres) elLivres.innerText = Math.max(0, slotsPericiaLimite - userPericias.length);
    
    const elOficio = document.getElementById('slotsOficioText');
    if (elOficio) elOficio.innerText = slotsOficio;
}

function calcularGastoHabilidades() {
    let gasto = 0;
    for(let k in userSkills) {
        if(userSkills[k].base) gasto += 1;
        if(userSkills[k].master) gasto += 2;
        gasto += userSkills[k].inf;
    }
    return gasto;
}

function handleSkillChange(key, type, val) {
    if(type === 'base') {
        userSkills[key].base = val;
        if(!val) { userSkills[key].master = false; userSkills[key].inf = 0; }
    } else if(type === 'master') {
        userSkills[key].master = val;
        if(!val) { userSkills[key].inf = 0; }
    } else if(type === 'inf') {
        if(val > 0) userSkills[key].inf++;
        else if(val < 0 && userSkills[key].inf > 0) {
            userSkills[key].inf--;
            let sumAdit = Object.values(userSkills[key].aditivos).reduce((a,b)=>a+b, 0);
            while(sumAdit > userSkills[key].inf) {
                for(let ad in userSkills[key].aditivos) {
                    if(userSkills[key].aditivos[ad] > 0) { userSkills[key].aditivos[ad]--; sumAdit--; break; }
                }
            }
        }
    } else if(type === 'aditivo') {
        const adId = val.id;
        const delta = val.delta;
        let sumAdit = Object.values(userSkills[key].aditivos).reduce((a,b)=>a+b, 0);
        if(delta > 0 && sumAdit < userSkills[key].inf) {
            userSkills[key].aditivos[adId] = (userSkills[key].aditivos[adId] || 0) + 1;
        } else if(delta < 0 && userSkills[key].aditivos[adId] > 0) {
            userSkills[key].aditivos[adId]--;
        }
    }
    renderizarHabilidades();
}

function renderizarHabilidades() {
    usedPtsHab = calcularGastoHabilidades();
    const livres = totalPtsHab - usedPtsHab - lockedPtsHab;
    const painel = document.getElementById('ptsHab');
    
    if(painel) {
        painel.innerText = `${livres} / ${totalPtsHab}`;
        painel.style.color = livres >= 0 ? "#f39c12" : "#e74c3c";
    }

    const container = document.getElementById('containerHabilidades');
    if(!container) return;
    container.innerHTML = "";

    for(let k in skillsDb) {
        const sk = skillsDb[k];
        const usr = userSkills[k];

        let extraHtml = "";
        if(k === "akuma" && usr.base) {
            extraHtml = `
                <div class="akuma-box">
                    <input type="text" placeholder="Nome da Akuma no Mi" value="${usr.akumaName}" onchange="userSkills.akuma.akumaName=this.value" style="margin-bottom:5px;">
                    <select onchange="userSkills.akuma.akumaType=this.value" style="margin-bottom:5px;">
                        <option value="Paramecia" ${usr.akumaType==='Paramecia'?'selected':''}>Paramecia</option>
                        <option value="Logia" ${usr.akumaType==='Logia'?'selected':''}>Logia</option>
                        <option value="Zoan" ${usr.akumaType==='Zoan'?'selected':''}>Zoan</option>
                    </select>
                    <textarea placeholder="Cole o BBCode completo da Akuma aqui..." rows="4" onchange="userSkills.akuma.bbcode=this.value">${usr.bbcode}</textarea>
                </div>
            `;
        }

        let aditivosHtml = "";
        if(usr.inf > 0) {
            let ptsLivre = usr.inf - Object.values(usr.aditivos).reduce((a,b)=>a+b, 0);
            let adList = aditivosInfinitos.map(ad => {
                let val = usr.aditivos[ad.id] || 0;
                return `
                    <div class="aditivo-item">
                        <span>${ad.nome}</span>
                        <div>
                            <button type="button" class="btn-nivel" onclick="handleSkillChange('${k}', 'aditivo', {id:'${ad.id}', delta:-1})">-</button>
                            <span class="nivel-display">${val}</span>
                            <button type="button" class="btn-nivel" onclick="handleSkillChange('${k}', 'aditivo', {id:'${ad.id}', delta:1})">+</button>
                        </div>
                    </div>
                `;
            }).join('');
            aditivosHtml = `
                <div style="margin-top:10px; border-top:1px solid #444; padding-top:10px;">
                    <strong style="color:#f1c40f;">Distribua os ${usr.inf} Níveis de Maestria (${ptsLivre} livres):</strong>
                    <div class="aditivos-grid">${adList}</div>
                </div>
            `;
        }

        let html = `
            <div class="hab-card">
                <div class="hab-header">
                    <h3>${sk.nome}</h3>
                    <div class="hab-controls">
                        <label><input type="checkbox" class="check-hab" ${usr.base ? 'checked' : ''} onchange="handleSkillChange('${k}', 'base', this.checked)"> Adquirir Base (1)</label>
                        ${usr.base ? `<label><input type="checkbox" class="check-hab" ${usr.master ? 'checked' : ''} onchange="handleSkillChange('${k}', 'master', this.checked)"> Masterizar (+2)</label>` : ''}
                        ${usr.master ? `
                            <div style="display:flex; align-items:center; background:#000; padding:2px; border-radius:3px;">
                                <button type="button" class="btn-nivel" onclick="handleSkillChange('${k}', 'inf', -1)">-</button>
                                <span class="nivel-display" style="color:#f39c12;">+${usr.inf}</span>
                                <button type="button" class="btn-nivel" onclick="handleSkillChange('${k}', 'inf', 1)">+</button>
                            </div>
                        ` : ''}
                    </div>
                </div>
                ${extraHtml}
                ${aditivosHtml}
            </div>
        `;
        container.innerHTML += html;
    }
}

function abrirConfiguracaoRacial() {
    const raca = document.getElementById('raca').value;
    const modal = document.getElementById('modalRaca');
    const corpo = document.getElementById('modalCorpo');
    corpo.innerHTML = "";
    modal.style.display = "block";

    if (raca === "Mestiço") {
        corpo.innerHTML = `
            <div class="modal-grupo">
                <label>Pai (Metade A):</label>
                <select id="m_pai" onchange="verificarMestico()">${gerarOpcoesPaiMae()}</select>
                <label>Mãe (Metade B):</label>
                <select id="m_mae" onchange="verificarMestico()">${gerarOpcoesPaiMae()}</select>
                <div id="erroMestico" style="color: #e74c3c; font-weight: bold; margin-top: 10px; display: none; text-align:center;">As raças não podem ser iguais!</div>
            </div>
            <div id="opcoesMestico"></div>
        `;
        document.getElementById('m_mae').selectedIndex = 1; 
        verificarMestico();
    } else {
        const d = dadosRacas[raca];
        document.getElementById('btnConfirmarRaca').disabled = false;
        corpo.innerHTML = `
            <div class="modal-grupo">
                <h3>Opcionais (Escolha até 1 - Ou + com Herança Genética)</h3>
                ${d.opcionais.map(op => `<label><input type="checkbox" class="op-raca" value="${op.nome}" data-desc="${op.desc}"> <strong>${op.nome}</strong><small>${op.desc}</small></label>`).join('')}
            </div>
        `;
    }
}

function verificarMestico() {
    const pai = document.getElementById('m_pai').value;
    const mae = document.getElementById('m_mae').value;
    const erro = document.getElementById('erroMestico');
    const container = document.getElementById('opcoesMestico');
    const btn = document.getElementById('btnConfirmarRaca');

    if (pai === mae) {
        erro.style.display = "block"; container.innerHTML = ""; btn.disabled = true;
    } else {
        erro.style.display = "none"; btn.disabled = false; renderOpcoesMestico();
    }
}

function renderOpcoesMestico() {
    const pai = document.getElementById('m_pai').value;
    const mae = document.getElementById('m_mae').value;
    const container = document.getElementById('opcoesMestico');
    container.innerHTML = `
        <div class="modal-grupo">
            <h3>Vantagem Obrigatória (Escolha 1 de cada)</h3>
            ${dadosRacas[pai].obrigV.map(v => `<label><input type="radio" name="v_pai" value="${v.nome}" checked> ${v.nome}</label>`).join('')}
            ${dadosRacas[mae].obrigV.map(v => `<label><input type="radio" name="v_mae" value="${v.nome}" checked> ${v.nome}</label>`).join('')}
        </div>
        <div class="modal-grupo">
            <h3>Desvantagem Obrigatória (Escolha 1 de cada)</h3>
            ${dadosRacas[pai].obrigD.map(d => `<label><input type="radio" name="d_pai" value="${d.nome}" checked> ${d.nome}</label>`).join('')}
            ${dadosRacas[mae].obrigD.map(d => `<label><input type="radio" name="d_mae" value="${d.nome}" checked> ${d.nome}</label>`).join('')}
        </div>
        <div class="modal-grupo">
            <h3>Opcionais</h3>
            ${dadosRacas[pai].opcionais.map(op => `<label><input type="checkbox" class="op-raca" value="${op.nome}" data-desc="${op.desc}" data-origem="${pai}"> ${op.nome}</label>`).join('')}
            ${dadosRacas[mae].opcionais.map(op => `<label><input type="checkbox" class="op-raca" value="${op.nome}" data-desc="${op.desc}" data-origem="${mae}"> ${op.nome}</label>`).join('')}
        </div>
    `;
}

function gerarOpcoesPaiMae() { return Object.keys(dadosRacas).filter(r => r !== "Mestiço").map(r => `<option value="${r}">${r}</option>`).join(''); }
function fecharModalRaca() { document.getElementById('modalRaca').style.display = "none"; }

function confirmarTracosRaciais() {
    const raca = document.getElementById('raca').value;
    tracosRaciaisConfirmados = [];
    const selecionadasOpcionais = Array.from(document.querySelectorAll('.op-raca:checked'));
    if (selecionadasOpcionais.length > 3) return alert("Máximo 3 opcionais.");

    if (raca === "Mestiço") {
        const vP = document.querySelector('input[name="v_pai"]:checked').value;
        const vM = document.querySelector('input[name="v_mae"]:checked').value;
        
        for (let par of conflitosRaciais) {
            if (par.includes(vP) && par.includes(vM)) {
                return alert(`Erro de Biologia: Um mestiço não pode ter "${vP}" e "${vM}" ao mesmo tempo.`);
            }
        }

        if (selecionadasOpcionais.length === 2) {
            const origem1 = selecionadasOpcionais[0].dataset.origem;
            const origem2 = selecionadasOpcionais[1].dataset.origem;
            if (origem1 === origem2) return alert(`Erro: Uma opcional deve ser do Pai e a outra da Mãe.`);
        }
        if (selecionadasOpcionais.length === 3) {
            const origens = selecionadasOpcionais.map(op => op.dataset.origem);
            const pai = document.getElementById('m_pai').value;
            const mae = document.getElementById('m_mae').value;
            if (!origens.includes(pai) || !origens.includes(mae)) return alert(`Erro: Com 3 opcionais, pegue pelo menos uma de cada lado!`);
        }

        const dP = document.querySelector('input[name="d_pai"]:checked').value;
        const dM = document.querySelector('input[name="d_mae"]:checked').value;
        const pai = document.getElementById('m_pai').value;
        const mae = document.getElementById('m_mae').value;
        const findV = (r, n) => dadosRacas[r].obrigV.find(x => x.nome === n);
        const findD = (r, n) => dadosRacas[r].obrigD.find(x => x.nome === n);
        tracosRaciaisConfirmados.push({...findV(pai, vP), r: "V"}, {...findV(mae, vM), r: "V"}, {...findD(pai, dP), r: "D"}, {...findD(mae, dM), r: "D"});
    } else {
        const d = dadosRacas[raca];
        tracosRaciaisConfirmados = [...d.obrigV.map(x => ({...x, r: "V"})), ...d.obrigD.map(x => ({...x, r: "D"}))];
    }

    selecionadasOpcionais.forEach(c => tracosRaciaisConfirmados.push({ nome: c.value, desc: c.dataset.desc, r: "V" }));
    const indexHg = traitsSelecionados.findIndex(t => t.id === "v_heranca");
    if (indexHg !== -1) traitsSelecionados.splice(indexHg, 1);
    const extras = selecionadasOpcionais.length - 1;
    if (extras > 0) {
        const hgTrait = bancoTraits.find(t => t.id === "v_heranca");
        traitsSelecionados.push({...hgTrait, nivel: extras, especificacao: null, geradorDesc: hgTrait.desc});
    }

    fecharModalRaca(); renderizarTraits();
}

function validarLimitesFisicos() {
    const raca = document.getElementById('raca').value;
    let peso = parseFloat(document.getElementById('peso').value) || 0;
    let altura = parseFloat(document.getElementById('altura').value) || 0;
    let maxP, maxA;
    if (raca === "Mestiço") {
        let pai = document.getElementById('m_pai')?.value || "Humano";
        let mae = document.getElementById('m_mae')?.value || "Humano";
        let maxPaiP = dadosRacas[pai].maxP;
        let maxMaeP = dadosRacas[mae].maxP;
        let maxPaiA = dadosRacas[pai].maxA;
        let maxMaeA = dadosRacas[mae].maxA;

        maxP = (maxPaiP === maxMaeP) ? maxPaiP : Math.max(maxPaiP, maxMaeP) / 2;
        maxA = (maxPaiA === maxMaeA) ? maxPaiA : Math.max(maxPaiA, maxMaeA) / 2;
    } else { 
        maxP = dadosRacas[raca].maxP; 
        maxA = dadosRacas[raca].maxA; 
    }
    
    const stP = document.getElementById('statusPeso');
    if(stP) {
        stP.innerText = `Máx: ${maxP}kg`;
        stP.className = peso > maxP ? 'status-alerta' : 'status-valido';
    }
    const stA = document.getElementById('statusAltura');
    if(stA) {
        stA.innerText = `Máx: ${maxA}m`;
        stA.className = altura > maxA ? 'status-alerta' : 'status-valido';
    }
}

function resetarRaca() {
    tracosRaciaisConfirmados = [];
    const raca = document.getElementById('raca').value;
    const descEl = document.getElementById('descRaca');
    if (descEl) descEl.innerText = dadosRacas[raca]?.desc || "";
    validarLimitesFisicos(); renderizarTraits();
}

function renderizarTraits() {
    ["listaVantagens1", "listaVantagens2", "listaVantagens3", "listaDesvantagens1", "listaDesvantagens2", "listaDesvantagens3", "listaSelecionados"].forEach(id => {
        let e = document.getElementById(id); if(e) e.innerHTML = "";
    });
    saldoPontos = 0;

    tracosRaciaisConfirmados.forEach(t => {
        let div = document.createElement('div'); div.className = "trait-item racial";
        div.innerHTML = `<span><strong>(RACIAL) ${t.nome}</strong></span> <span>0</span>`;
        div.onmouseover = () => { const info = document.getElementById('infoTrait'); if (info) info.innerText = t.desc; };
        const listaS = document.getElementById('listaSelecionados');
        if (listaS) listaS.appendChild(div);
    });

    bancoTraits.forEach(t => {
        if (t.id === "v_heranca") return;
        let div = document.createElement('div'); div.className = "trait-card";
        div.innerHTML = `<span>${t.nome}</span> <span class="badge-custo">${Math.abs(t.custoBase)}</span>`;
        div.onclick = () => adicionarTrait(t);
        div.onmouseover = () => { const info = document.getElementById('infoTrait'); if (info) info.innerText = typeof t.desc === 'function' ? t.desc(1) : t.desc; };
        
        let targetId = t.tipo === 'vantagem' ? `listaVantagens${Math.abs(t.custoBase)}` : `listaDesvantagens${Math.abs(t.custoBase)}`;
        const targetLista = document.getElementById(targetId);
        if (targetLista) targetLista.appendChild(div);
    });

    traitsSelecionados.forEach((s, i) => {
        let total = s.custoBase * s.nivel; saldoPontos += total;
        let div = document.createElement('div'); div.className = "trait-item";
        let nm = `<strong>${s.nome}</strong>`;
        if (s.id === "v_heranca") nm += " <span style='color:#3498db;'>(Auto)</span>";
        if (s.especificacao) nm += ` <br><i style="color:#aaa; font-size:0.85em;">(${s.especificacao})</i>`;
        
        let ctrls = (s.id !== "v_heranca" && s.max > 1) ? `<div class="controles-nivel"><button type="button" class="btn-nivel" onclick="alterarNivelTrait(${i}, -1)">-</button><span class="nivel-display">Nv ${s.nivel}</span><button type="button" class="btn-nivel" onclick="alterarNivelTrait(${i}, 1)">+</button></div>` : `<span class="nivel-display">Nv ${s.nivel}</span>`;
        let btn = (s.id !== "v_heranca") ? `<button type="button" class="btn-remover-trait" onclick="removerTraitTotal(${i})">X</button>` : "";
        
        div.innerHTML = `<div style="flex-grow:1;">${nm}<div style="font-size:0.8em; color:#f39c12; margin-top:3px;">Custo: ${total>0?'+'+total:total}</div></div><div style="display:flex; align-items:center; gap:5px;">${ctrls}${btn}</div>`;
        div.onmouseover = () => { const info = document.getElementById('infoTrait'); if (info) info.innerText = typeof s.geradorDesc === 'function' ? s.geradorDesc(s.nivel) : s.desc(s.nivel); };
        const listaS = document.getElementById('listaSelecionados');
        if (listaS) listaS.appendChild(div);
    });

    let p = document.getElementById('saldoPontos');
    if(p) { p.innerText = saldoPontos; p.style.color = saldoPontos < 0 ? '#e74c3c' : '#2ecc71'; }
}

function adicionarTrait(t) {
    for (let par of conflitosTraits) {
        if (par.includes(t.id)) {
            const outroId = par.find(id => id !== t.id);
            if (traitsSelecionados.some(s => s.id === outroId)) {
                const nomeConflito = bancoTraits.find(x => x.id === outroId).nome;
                return alert(`Conflito Lógico: Você não pode selecionar "${t.nome}" se já possui a característica "${nomeConflito}". Elas são opostas!`);
            }
        }
    }

    let espec = null; if (t.reqEspec) { espec = prompt(t.promptMsg); if(!espec) return; }
    let ex = traitsSelecionados.find(s => s.id === t.id && s.especificacao === espec);
    if (ex) { if(ex.nivel < t.max) ex.nivel++; else alert(`Nível máximo atingido!`); }
    else traitsSelecionados.push({id: t.id, nome: t.nome, tipo: t.tipo, custoBase: t.custoBase, max: t.max, especificacao: espec, nivel: 1, geradorDesc: t.desc});
    renderizarTraits();
}

function alterarNivelTrait(index, delta) {
    let t = traitsSelecionados[index];
    if (delta > 0 && t.nivel < t.max) t.nivel++; else if (delta < 0 && t.nivel > 1) t.nivel--;
    renderizarTraits();
}
function removerTraitTotal(index) { traitsSelecionados.splice(index, 1); renderizarTraits(); }

// --- CÁLCULO DE BÔNUS GERAIS ---
function calcularBonusAtributos() {
    const poder = Math.floor(parseInt(document.getElementById('poder').value) || 0);
    const corporal = parseInt(document.getElementById('corporal').value) || 0;
    const ptsCorpo = Math.floor((poder * corporal) / 100);
    
    // HP
    let baseHP = Math.floor(ptsCorpo / 4000) * 20; 
    let origemHP = `(${baseHP}% Atributo Corporal`;
    
    if (traitsSelecionados.some(t => t.id === 'v_tita')) { baseHP += 40; origemHP += ` + 40% Vantagem Titã`; }
    if (userSkills.rokushiki.base) { let val = userSkills.rokushiki.master ? 160 : 80; baseHP += val; origemHP += ` + ${val}% Rokushiki`; }
    if (userSkills.ciborgue.base) { let val = userSkills.ciborgue.master ? 50 : 30; baseHP += val; origemHP += ` + ${val}% Ciborgue`; }
    if (userSkills.haki.base && userSkills.haki.inf > 0) { let val = 20 * userSkills.haki.inf; baseHP += val; origemHP += ` + ${val}% Maestria Haki`; }

    let mult5k = Math.floor(poder / 5000);
    const temRacial = (nome) => tracosRaciaisConfirmados.some(t => t.nome === nome);
    if (temRacial("OHH se conta")) { let val = 20 * mult5k; baseHP += val; origemHP += ` + ${val}% Vantagem Oni`; }
    if (temRacial("Corpo Grande")) { let val = 10 * mult5k; baseHP += val; origemHP += ` + ${val}% Vantagem Tritão`; }
    origemHP += `)`;

    // CARGA
    let baseCarga = Math.floor(poder / 10000) * 10; 
    let origemCarga = `(${baseCarga}% Poder Geral`;

    if (userSkills.rokushiki.base) { let val = userSkills.rokushiki.master ? 300 : 200; baseCarga += val; origemCarga += ` + ${val}% Rokushiki`; }
    if (userSkills.ciborgue.base) { let val = userSkills.ciborgue.master ? 50 : 30; baseCarga += val; origemCarga += ` + ${val}% Ciborgue`; }
    if (userSkills.akuma.base && userSkills.akuma.akumaType === "Zoan" && userSkills.akuma.inf > 0) { let val = 30 * userSkills.akuma.inf; baseCarga += val; origemCarga += ` + ${val}% Maestria Zoan`; }

    if (temRacial("Brutalidade")) { let val = 50 * mult5k; baseCarga += val; origemCarga += ` + ${val}% Brutalidade`; }
    if (temRacial("Birl") || temRacial("Guindaste")) { let val = 100 * mult5k; baseCarga += val; origemCarga += ` + ${val}% Birl/Guindaste`; }
    origemCarga += `)`;

    return { hp: baseHP, hpO: origemHP, cg: baseCarga, cgO: origemCarga };
}

atualizarGatilhosGerais();
resetarRaca();

document.querySelectorAll('.attr-input').forEach(input => {
    input.addEventListener('change', validarAtributos);
});

function validarAtributos() {
    const corporal = parseInt(document.getElementById('corporal').value) || 0;
    const acrobatico = parseInt(document.getElementById('acrobatico').value) || 0;
    const social = parseInt(document.getElementById('social').value) || 0;
    const intelectual = parseInt(document.getElementById('intelectual').value) || 0;
    const soma = corporal + acrobatico + social + intelectual;
    const status = document.getElementById('statusSoma');
    
    if(status) {
        status.innerText = `Soma: ${soma}%`;
        status.className = soma === 100 ? 'status-ok' : 'status-erro';
    }
    
    atualizarGatilhosGerais(); 
    return soma === 100;
}

// --- GERAÇÃO FINAL DO CÓDIGO ---
function gerarFicha() {
    if (!validarAtributos()) return alert("A soma dos atributos precisa ser exatamente 100%.");
    
    const poder = Math.floor(parseInt(document.getElementById('poder').value) || 0);
    const isPlayer = document.getElementById('tipoPersonagem').value === "player";
    const intAttr = parseInt(document.getElementById('intelectual').value) || 0;
    const acroAttr = parseInt(document.getElementById('acrobatico').value) || 0;
    const socAttr = parseInt(document.getElementById('social').value) || 0;
    const ptsInt = Math.floor((poder * intAttr) / 100);
    const ptsAcro = Math.floor((poder * acroAttr) / 100);
    const ptsSoc = Math.floor((poder * socAttr) / 100);

    if (totalPtsHab - usedPtsHab - lockedPtsHab < 0) return alert("Você gastou mais Pontos de Habilidade do que possui livre no momento!");
    if (saldoPontos < 0) return alert("Saldo de traços negativo! Balanceie as Vantagens e Desvantagens.");
    if (userPericias.length > slotsPericiaLimite) return alert(`Você usou ${userPericias.length} perícias, mas só tem ${slotsPericiaLimite} slots disponíveis!`);

    const bonusG = calcularBonusAtributos();
    const temRacial = (nome) => tracosRaciaisConfirmados.some(t => t.nome === nome);

    // Montar Vantagens / Desvantagens
    let vText = "";
    let dText = "";

    const groupV = { Rac: [], 1: [], 2: [], 3: [] };
    const groupD = { Rac: [], 1: [], 2: [], 3: [] };

    let totalVPts = 0;
    let totalDPts = 0;

    tracosRaciaisConfirmados.forEach(x => {
        if(x.r === "V") groupV.Rac.push(`${x.nome}: ${x.desc} (Obrigatoria)`);
        else groupD.Rac.push(`${x.nome}: ${x.desc} (Obrigatoria)`);
    });

    traitsSelecionados.forEach(t => {
        let desc = t.geradorDesc ? t.geradorDesc(t.nivel) : t.desc(t.nivel);
        let pts = Math.abs(t.custoBase * t.nivel);
        let linha = `${t.nome} ${t.nivel}: ${desc} ${t.especificacao ? '- [i]'+t.especificacao+'[/i]' : ''} (${pts} Pontos)`;
        
        let c = Math.abs(t.custoBase);
        if (t.tipo === "vantagem") { groupV[c].push(linha); totalVPts += pts; }
        else { groupD[c].push(linha); totalDPts += pts; }
    });

    if(groupV.Rac.length > 0) vText += `[spoiler="Raciais"]\n${groupV.Rac.join('\n\n')}\n[/spoiler]\n\n`;
    [1,2,3].forEach(c => { if(groupV[c].length > 0) vText += `[spoiler="${c} Ponto - Total ${groupV[c].length * c} Pontos"]\n${groupV[c].join('\n\n')}\n[/spoiler]\n\n`; });
    if(totalVPts > 0) vText += `[u][b]TOTAL ${totalVPts} Pontos[/b][/u]`;

    if(groupD.Rac.length > 0) dText += `[spoiler="Raciais"]\n${groupD.Rac.join('\n\n')}\n[/spoiler]\n\n`;
    [1,2,3].forEach(c => { if(groupD[c].length > 0) dText += `[spoiler="${c} Ponto - Total ${groupD[c].length * c} Pontos"]\n${groupD[c].join('\n\n')}\n[/spoiler]\n\n`; });
    if(totalDPts > 0) dText += `[u][b]TOTAL ${totalDPts} Pontos[/b][/u]`;

    // Montar Habilidades
    let habText = "";
    for(let k in userSkills) {
        let usr = userSkills[k]; let sk = skillsDb[k];
        if(!usr.base) continue;

        let nameDisplay = sk.nome;
        let spoilerTitle = sk.nome;

        if(k === "akuma") {
            nameDisplay = usr.akumaName || "Akuma no Mi";
            spoilerTitle = usr.master ? `${nameDisplay} Despertada` : nameDisplay;
            if(usr.inf > 0) spoilerTitle += ` +${usr.inf}`;
        } else {
            spoilerTitle = usr.master ? sk.titleMaster : sk.nome;
            if(usr.inf > 0) spoilerTitle += ` +${usr.inf}`;
        }

        let adTitles = [];
        for(let ad in usr.aditivos) {
            if(usr.aditivos[ad] > 0) {
                let nomeAd = aditivosInfinitos.find(x => x.id === ad).nome;
                adTitles.push(`${nomeAd} ${usr.aditivos[ad]}`);
            }
        }
        if(adTitles.length > 0) spoilerTitle += ` (${adTitles.join(', ')})`;

        let block = `[center][spoiler="${spoilerTitle}"]\n[left]\n[center][b]${nameDisplay}[/b][/center]\n\n`;

        if(usr.inf > 0) {
            block += `[center][b]Efeitos da Maestria Infinita Nível ${usr.inf}:[/b][/center]\n\n`;
            block += sk.bonusTxt(usr.inf, usr.akumaType) + "\n\n";

            for(let ad in usr.aditivos) {
                let lvl = usr.aditivos[ad];
                if(lvl > 0) {
                    let obj = aditivosInfinitos.find(x => x.id === ad);
                    let multTotal = obj.mult * lvl * usr.inf; 
                    block += `• [b]${obj.nome} ${lvl}:[/b] +${multTotal}% ${obj.txt}.\n\n`;
                }
            }
            block += `~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`;
        }

        if(k === "akuma") block += usr.bbcode + "\n\n";
        else {
            block += sk.baseHtml + "\n\n";
            if(usr.master) block += `~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n` + sk.masterHtml + "\n\n";
        }
        
        block += `[/left]\n[/spoiler][/center]\n\n`;
        habText += block;
    }

    // FORMATAÇÃO DAS PERÍCIAS
    let periciasText = "";
    const grouped = { fixas: [], ramificadas: {} };
    userPericias.forEach(p => {
        if(p.isFixa) grouped.fixas.push(p.nome);
        else {
            if(!grouped.ramificadas[p.categoria]) grouped.ramificadas[p.categoria] = [];
            grouped.ramificadas[p.categoria].push(p.nome);
        }
    });

    if(grouped.fixas.length > 0) {
        periciasText += `[b]Perícias Fixas:[/b]\n${grouped.fixas.map(x => `• ${x}`).join('\n')}\n\n`;
    }

    for(let cat in grouped.ramificadas) {
        let arr = grouped.ramificadas[cat];
        periciasText += `[spoiler="${cat}"]\n\n${arr.join('\n')}\n\nTotal = ${arr.length}[/spoiler]\n\n`;
    }

    // Cálculos de Notas Finais
    let notasArr = [];
    
    let sobra = slotsPericiaLimite - userPericias.length;
    if (sobra > 0) notasArr.push(`[b]Slots de Perícia Livres:[/b] ${sobra} de ${slotsPericiaLimite} (${isPlayer?'2 Iniciais + ':''}${Math.floor(ptsInt / 500)} de Intelectual)`);

    let projSlots = 1 + Math.floor(ptsInt / 1500); 
    let projQual = 1 + Math.floor(ptsInt / 5000);
    if (temRacial("As melhores escolas")) projQual++;
    notasArr.push(`[b]Slots de Projetos:[/b] ${projSlots} (1 Inicial + ${Math.floor(ptsInt / 1500)} de Intelectual)`);
    notasArr.push(`[b]Qualidade de Projetos:[/b] ${projQual} (${ptsInt} / 5000)`);

    if(isPlayer) {
        let baseNpc = 1;
        if (temRacial("Espécie social")) baseNpc++;
        let bonusNpc = Math.floor(ptsSoc / 4000);
        let totalNpc = baseNpc + bonusNpc;
        notasArr.push(`[b]NPCs Aliados (Slots):[/b] ${totalNpc} (${baseNpc} Iniciais + ${bonusNpc} de Social)`);

        let seguidores = 5;
        let reiMassas = traitsSelecionados.find(t => t.id === "v_rei_massas");
        if (reiMassas) seguidores += reiMassas.nivel * 5;
        let bSeguidores = Math.floor(ptsSoc / 500) * 3;
        notasArr.push(`[b]Seguidores:[/b] ${seguidores + bSeguidores} (${seguidores} Iniciais + ${bSeguidores} de Social)`);
    }

    let baseVDA = isPlayer ? 3 : 3; 
    let acroVDA = Math.floor(ptsAcro / 4000);
    let extraVDA = 0;
    let piqueAbelha = traitsSelecionados.find(t => t.id === "v_pique_abelha");
    if (piqueAbelha) extraVDA += piqueAbelha.nivel;
    let totalVDA = baseVDA + acroVDA + extraVDA;
    notasArr.push(`[b]VDA Total:[/b] ${totalVDA} (${baseVDA} Iniciais + ${extraVDA} Vantagem + ${acroVDA} de Acrobático)`);

    let speedAcro = Math.floor(ptsAcro / 500) * 5; 
    let runSpeed = 10 + speedAcro;
    let swimSpeed = 5 + speedAcro;
    let flySpeed = 0;

    let mult5k = Math.floor(poder / 5000);
    if (userPericias.some(p => p.nome.toLowerCase() === "corrida")) runSpeed += 20;
    if (userPericias.some(p => p.nome.toLowerCase() === "natação")) swimSpeed += 20;
    if (temRacial("Atlético")) { runSpeed += 15 * mult5k; swimSpeed += 15 * mult5k; }
    if (temRacial("Ligeirinho")) runSpeed += 30 * mult5k;
    if (temRacial("Nadador")) swimSpeed += 35 * mult5k;
    if (temRacial("Asas Lunarianas")) flySpeed += 30 * mult5k;
    if (userSkills.rokushiki.base) runSpeed += userSkills.rokushiki.master ? 200 : 100;
    
    if (userSkills.ciborgue.base) {
        let cibMult = userSkills.ciborgue.master ? 1.5 : 1.3;
        runSpeed = Math.floor(runSpeed * cibMult);
        swimSpeed = Math.floor(swimSpeed * cibMult);
        if(flySpeed > 0) flySpeed = Math.floor(flySpeed * cibMult);
    }

    notasArr.push(`[b]Velocidade de Corrida (Estimada):[/b] ~${runSpeed} km/h (Base + Perícias + ${speedAcro} de Acrobático)`);
    notasArr.push(`[b]Velocidade de Nado (Estimada):[/b] ~${swimSpeed} km/h (Base + Perícias + ${speedAcro} de Acrobático)`);
    if (flySpeed > 0) notasArr.push(`[b]Velocidade de Voo (Estimada):[/b] ~${flySpeed} km/h`);

    if (bonusG.hp > 0) notasArr.push(`[b]Bônus de HP Atual:[/b] +${bonusG.hp} ${bonusG.hpO}`);
    if (bonusG.cg > 0) notasArr.push(`[b]Bônus de Carga Atual:[/b] +${bonusG.cg} ${bonusG.cgO}`);

    let notasFinal = notasArr.join('\n');

    let oficioTexto = document.getElementById('txtOficio').value.trim();
    if(!oficioTexto) oficioTexto = "Nenhum Ofício no momento.";
    
    let edcSel = document.getElementById('edcBase').value;
    let edcTexto = document.getElementById('txtEdc').value.trim();
    if(!edcTexto) edcTexto = "edc";
    else if(edcSel) edcTexto = `[spoiler="${edcSel}"]\n${edcTexto}\n[/spoiler]`;

    let inventarioArma = edcSel ? edcsBase[edcSel].weapon : "Inventário";
    let grupoTexto = document.getElementById('grupo') ? document.getElementById('grupo').value : "Pirata";

    // FORMATANDO OS BLOCOS SEM PULOS DE LINHA ONDE SOLICITADO:
    const imgBlock = `<imagemTopo>${document.getElementById('imgTopo').value || "URL_AQUI"}</imagemTopo>\n<imagemPequena>${document.getElementById('imgPequena').value || "URL_AQUI"}</imagemPequena>\n<imagemFinal>${document.getElementById('imgFinal').value || "URL_AQUI"}</imagemFinal>`;

    const basicoBlock = `<jogador>${document.getElementById('jogador').value || "Jogador"}</jogador>\n<nome>${document.getElementById('nome').value || "Personagem"}</nome>\n<idade>${document.getElementById('idade').value || "Idade"}</idade>\n<peso>${document.getElementById('peso').value || "0"} kg</peso>\n<altura>${document.getElementById('altura').value || "0"} m</altura>\n<especie>${document.getElementById('raca').value}</especie>\n<nacionalidade>${document.getElementById('nacionalidade').value || "Desconhecida"}</nacionalidade>\n<local>${document.getElementById('local').value || "Mar Aberto"}</local>\n<vilania>0</vilania>\n<heroismo>0</heroismo>\n<grupo>${grupoTexto}</grupo>\n<recompensa>0 B$</recompensa>`;

    const attrBlock = `<poder>${poder}</poder>\n<corporal>${document.getElementById('corporal').value}</corporal>\n<acrobatico>${document.getElementById('acrobatico').value}</acrobatico>\n<social>${document.getElementById('social').value}</social>\n<intelectual>${document.getElementById('intelectual').value}</intelectual>\n<bonusHP>${bonusG.hp}</bonusHP>\n<bonusCarga>${bonusG.cg}</bonusCarga>`;

    const output = `<div class="fichaData" style="display: none;">\n\n${imgBlock}\n\n${basicoBlock}\n\n${attrBlock}\n\n<edc>\n\n${edcTexto}\n\n</edc>\n\n<habilidades>\n\n${habText || "Nenhuma habilidade"}</habilidades>\n\n<vantagens>\n\n${vText || "• Nenhuma vantagem selecionada"}\n</vantagens>\n\n<desvantagens>\n\n${dText || "• Nenhuma desvantagem selecionada"}\n</desvantagens>\n\n<pericias>\n\n${periciasText || "Nenhuma perícia"}</pericias>\n\n<oficio>\n\n${oficioTexto}\n\n</oficio>\n\n<inventario>${inventarioArma}</inventario>\n\n<projetos>Projetos</projetos>\n\n<tecnicas>Técnicas</tecnicas>\n\n<aparencia>\n\n${document.getElementById('aparencia').value || "Aparência"}\n\n</aparencia>\n\n<historia>\n\n${document.getElementById('historia').value || "História"}\n\n</historia>\n\n<personalidade>\n\n${document.getElementById('personalidade').value || "Personalidade"}\n\n</personalidade>\n\n<notas>\n[spoiler="Ganhos do Personagem"]\n${notasFinal}\n[/spoiler]\n</notas>\n\n</div>`;

    document.getElementById('output').value = output;
}

function copiarCodigo() {
    const copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("Código copiado com sucesso!");
}