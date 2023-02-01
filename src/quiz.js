export const quiz = [
  {
    hints: [
      "É uma SIGLA",
      "É um tipo de memória",
      "É uma memória não-volátil.",
      "É apagada por luz ultra-violeta",
      "Em português,entende-se por: memória programável apagável somente de leitura"
    ],
    image: "/assets/EPROM.jpg",
    answer: "EPROM"
  },
  {
    hints: [
      "Emite os sinais de controle para os demais componentes do computador agirem e/ou realizarem alguma tarefa",
      "Seu principal componente é diretamente relacionado a uma fala de Godon Moore, conhecida como Lei de Moore",
      "Suas atividades podem ser divididas em dois grandes grupos: função processamento e função controle",
      "É um componente vital para o sistema de computação",
      "É o responsavel por qualquer operação realizada por um computador"
    ],
    image: "/assets/PROCESSADOR.jpg",
    answer: "PROCESSADOR"
  },
  {
    hints: [
      "É um tipo de memória não volátil",
      "É uma memória de acesso aleatório",
      "Seus dados são armazenados permanentemente ou semi-permanentemente",
      "Armazena dados que são usados repetidamente em instruções programadas como a inicialização e operação de um sistema.",
      "Seus dados podem ser lidos, mas não existe uma operação de escrita"
    ],
    image: "/assets/ROM.jpg",
    answer: "ROM"
  },
  {
    hints: [
      "É um tipo de memória volátil",
      "Todas as memórias desse tipo possuem a capacidade de leitura e escrita",
      "Todos seus endereços são acessados em tempos iguais e podem ser selecionados em qualquer ordem para uma operação de leitura ou escrita",
      "Quando um dado é escrito em determinado endereço, o dado armazenado anteriormente nesse endereço é substituído pela novo",
      "Armazena dados de curta duração"
    ],
    image: "/assets/RAM.webp",
    answer: "RAM"
  },
  {
    hints: [
      "É um tipo de memória volátil",
      "É uma memória pequena, mas de alta velocidade",
      "Armazena instruções ou dados usados recentemente da memória principal",
      "Seu primeiro nível geralmente é integrado ao chip do processador, tendo capacidade de armazenamento muito limitada (primária)",
      "Seu segundo nível é um chip separado ou um conjunto de chips externos ao processador, com capacidade maior que o primeiro (secundária)"
    ],
    image: "/assets/CACHE.jpg",
    answer: "CACHE"
  },
  {
    hints: [
      "É um tipo de memória",
      "É uma memória não-volátil",
      "Faz uso de fusíveis para armazenar bits",
      "Uma vez programada, não pode ser alterada",
      "São programadas pelo usuário de acordo com sua necessidade"
    ],
    image: "/assets/PROM.jpg",
    answer: "PROM"
  },
  {
    hints: [
      "É uma memória não-volátil",
      "É uma memória de leitura e escrita de alta capacidade de armazenamento de bits",
      "Podem ser usadas no lugar de drivers de disquetes ou discos rígidos de pequenas capacidades",
      "Possui as operações de programação, leitura e apagamento",
      "Possui versões compactas para laptops e câmeras digitais"
    ],
    image: "/assets/FLASH.jpg",
    answer: "FLASH"
  },
  {
    hints: [
      "É uma memória não-volátil",
      "É usado para armazenamento em massa interno",
      "Normalmente é usada como memória secundária",
      "Sua primeira versão para microcomputadores, foi lançada em 1976 pela Seagate",
      "Atualmente existem opções mais rápidas quanto a leitura e gravação de dados"
    ],
    image: "/assets/HD.jpg",
    answer: "HD"
  },
  {
    hints: [
      "É usado somente para o armazenamento e o deslocamento de dados recebidos de uma fonte externa",
      "Diferentemente de um contador, não possui uma sequência de estados específica, exceto em certas aplicações muito especializadas",
      "Pode ser empregado para manter temporariamente a próxima instrução a ser executada.",
      "Pode conter uma palavra a ser armazenada na memória ou enviada à unidade de E/S, ou é usada para receber uma palavra da memória ou de uma unidade de E/S.",
      "Se localizam no interior de um microprocessador, dentro da CPU",
    ],
    image: "/assets/REGISTRADOR.jpg",
    answer: "REGISTRADOR"
  },
  {
    hints:[
      "É uma sigla",
      "É responsável pelo controle das atividades de todos os componentes do computador, através da emissão de pulsos elétricos (sinais de controle)",
      "Pode ser separado em dois tipo, chamados de Hardwired e Microprogramada",
      "Se comporta como um decodificador e é implementada usando portas lógicas.",
      "Também utiliza uma microprograma e uma micro memoria dentro do processador ( contém micro-instruções dentro dele)",
    ],
    image: "/assets/UC.png",
    answer: "UC"
  },
  {
    hints: [
      "É o componente responsável por interligar os demais componentes",
      "No __________ de controle fluem sinais específicos da programação do sistema",
      "O __________ de endereços é utilizado pelo processor para indicar onde buscar um dado, ou onde gravá-lo",
      "Possuem diferentes tamanhos (em bits), variando de acordo com o modelo do processador, servindo de passagem para bits de informação (instruções ou dados)",
      "Fisicamente, é composto por múltiplas linhas que servem como 'vias'"
    ],
    image: "/assets/BARRAMENTO.jpg",
    answer: "BARRAMENTO"
  },
  {
    hints: [
      "Possui duas entradas de dados, ambas conectadas a uma saída pelo barramento interno de dados",
      "Recebe sinais de controle para determinar qual operação será efetuada",
      "Em processadores mais antigos, o barramento interligava esta a um registrador especial chamado de acumulador",
      "É um aglomerado de circuitos lógicos e componentes eletrônicos simples que, quando combinados efetuam determinadas operações",
      "É o dispositivo do computador que executa as operações matemáticas com os dados"
    ],
    image: "/assets/ULA.jpg",
    answer: "ULA"
  },
  {
    hints: [
      "Dispositivo que encaminha informações de diversas fontes para um único destino",
      "É composto de portas lógicas (principalmente AND)",
      "Possui várias linhas de entrada e apenas uma de saída",
      "A seleção da entrada é feita através de sinais de controle denominados variáveis de seleção",
      "É conhecido como seletor de dados",
    ],
    image: "/assets/MULTIPLEXADOR.webp",
    answer: "MULTIPLEXADOR"
  },
  {
    hints: [
      "É entendido como um dispositivo de controle",
      "Uma analogia: Funciona como o chefe de uma embarcação a remo, que a coordena para que a mesma siga na direção correta",
      "Sua base é um dispositivo gerador de pulsos (cristal de quartzo), cuja duração é chamada de ciclo",
      "É um dispositivo cuja função é sincronizar as milhões de mudanças de estado por segundo que ocorrem nos circuitos de um processador (e certos outros componentes)",
      "Sua frequência (mesmo que não exclusivamente) é um dos fatores que impactam no desempenho de um processador"
    ],
    image: "/assets/CLOCK.jpg",
    answer: "CLOCK"
  },
  {
    hints: [
      "Trata-se de um circuito eletrônico, logo, uma peça de hardware",
      "É o elemento básico e mais elementar de um sistema de computação",
      "Varios componentes do hardware são fábricados a partir da combinação de milhões desses, como o processador, memórias principais e cache, etc",
      "Há diversos tipos, cada uma capaz de implementar uma função especifica",
      "Um de seus tipos é o AND"
    ],
    image: "/assets/PORTAS_LOGICAS.jpg",
    answer: "PORTAS LÓGICAS"
  },
  {
    hints: [
      "São características dessa arquitetura: Pequeno conjunto de instruções, todas com largura fixa",
      "Execução otimizada de chamada de funçoes",
      "Menor quantidade de modos de endereçamento",
      "Uso elevado de pipelining",
      "Instruções são executadas de forma rápida (uma por clock)"
    ],
    image: "/assets/RISC.jpg",
    answer: "RISC"
  },
  {
    hints: [
      "São características dessa arquitetura: uso de microcódigo",
      "Construção de conjuntos com instruções complexas",
      "Criação de instruções de máquina semelhante à dos comandos de alto nível",
      "Instruções de tamanhos variados",
      "Pipeline práticamente impossível"
    ],
    image: "/assets/CISC.webp",
    answer: "CISC"
  },
  {
    hints: [
      "Usam tecnologia SRAM",
      "Tensão, consumo, velocidade, potência variam entre diferentes modelos e fabricantes",
      "Arquitetura pode ser denominada como fine graned ou coarse graned",
      "É formada por um bloco lógico configurável, interconexões e blocos de I/0",
      "São reprogramáveis"
      
    ],
    image: "/assets/FPG.jpg",
    answer: "FPGA"
  },
  {
    hints: [
      "É um circuito lógico",
      "Sua versão mais simples, é formada apenas com portas OR",
      "Em suas entradas, recebe um valor e o transforma em outro",
      "A conversão de símbolos conhecidos em desconhecidos é conhecida por codificação",
      "Tem papel inverso a um decodificador"
      
    ],
    image: "/assets/CODIFICADOR.jpg",
    answer: "Codificador"
  },
  {
    hints: [
      "A porta OU-EXCLUSIVO pode ser usada como uma versão básica desse circuito",
      "Compara as grandesas de dois números em binário para determinar a relação comparativa entre eles",
      "Pode ser expandido com portas AND",
      "Determina se dois números são iguais",
      "Além de números iguais, é possível ter saídas extras que indicam qual dos dois valores é maior"
      
    ],
    image: "/assets/COMPARADOR.jpg",
    answer: "Comparador"
  },
  {
    hints: [
      "É um circuito lógico",
      "São importantes em computadores e em outros tipos de sistemas digitais onde dados numéricos são processados",
      "Sua versão mais básica aceita dois bits em suas entradas e produz dois bits em suas saídas, um de soma e um de carry",
      "Dois ou mais podem ser combinados para operações mais complexas",
      "Suas operações são adições binárias"
      
    ],
    image: "/assets/SOMADOR.png",
    answer: "SOMADOR"
  },
  {
    hints: [
      "É um circuito digital",
      "A porta AND é usada como um de seus elementos básicos",
      "Sua entrada pode ser de N elementos, variando com a necessidade do programador",
      "Detecta a presença de uma combinação específica de bits em sua entrada",
      "Qualquer entrada diferente da esperada resultará em uma saída de nível baixo"
      
    ],
    image: "/assets/DECODIFICADOR.png",
    answer: "DECODIFICADOR"
  },
  {
    hints: [
      "É um circuito digital",
      "Decodificadores podem ser usados como esse circuito digital",
      "É conhecido como distribuidor de dados",
      "Recebe informações digitais a partir de uma linha e as redistribui à um determinado número de linhas de saída",
      "Inverte a função da multiplexação"
      
    ],
    image: "/assets/DEMULIPLEXADOR.png",
    answer: "DEMULTIPLEXADOR"
  },
  {
    hints: [
      "Compoẽ um circuito lógico sequêncial",
      "É possível se construir um registrador com esse tipo de circuito",
      "É o elemento básico utilizado para se armazenar informações em um sistema digital",
      "Pode armazernar um bit permanentemente, enquanto estiver energizado",
      "Além de armazenar, permite também a leitura desse valor binário"
      
    ],
    image: "/assets/",
    answer: "FLIP-FLOP"
  },
  {
    hints: [
      "É um registrador",
      "Seu incremento é realizado sempre pelo hardware",
      "O seu conteúdo é modificado tão logo quanto a instrução que vai ser executada seja buscada da memória para o processador",
      "É crucial para o processo de controle e sequenciamento da execução dos programas",
      "Registrador cuja função específica é a armazenar o endereço da próxima instrução a ser executada"
      
    ],
    image: "/assets/PROGRAM_COUNTER.jpg",
    answer: "Contador de instrução"
  },
  {
    hints: [
      "Dispositivo de armazenamento temporário",
      "É considerado biestável (dois estados estáveis)",
      "Possui uma realimentação regenerativa, na qual as saídas são conectadas de volta às entradas opostas",
      "Possui os tipos S-R, S-R controlado e D controlado",
      "São similares aos flip-flops"
      
    ],
    image: "/assets/LATCH.png",
    answer: "LATCH"
  },
  {
    hints: [
      "Circuito que pode ser usado como um monoestável ou um oscilador",
      "Um monoestável possui apenas um estado estável, produzindo um único pulso de resposta",
      "um oscilador oscila entre dois estados quase estáveis",
      "Uma aplicação seria na lógica de controle de um semáforo",
      "Outra aplicação seria a sequência de piscadas da seta de um automóvel"
      
    ],
    image: "/assets/TEMPORIZADOR.png",
    answer: "TEMPORIZADOR"
  },
  {
    hints: [
      "É um registrador",
      "Atua após um ciclo de leitura em busca de instruções",
      "Recebe a __________ via barramento externo de dados, barramento interno e RDM",
      "Em computadores robustos ele não armazena uma __________ completa, mas somente uma parte dela",
      "Tem a função de armazenar a instrução a ser executada pelo processador"
      
    ],
    image: "/assets/",
    answer: "registrador de instrução"
  },
  {
    hints: [
      "São componentes básicos de qualquer computador moderno",
      "Esses dispositivos podem atuar transmitindo quantidades infímas de dados, ou quantidades colossáis",
      "As transmissões feitas por esses podem ser inteligíveis para o ser humano ou apenas para a máquina",
      "Permitem a interação entre usuário e máquina",
      "São acoplados ao sistema de computação e interagem diretamente com o processador"
    ],
    image: "/assets/DISPOSITIVOS_E-S.jpg",
    answer: "PERIFÉRICOS"
  },

]
