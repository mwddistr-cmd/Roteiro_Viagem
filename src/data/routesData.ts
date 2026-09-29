import { MotorcycleRoute } from '../types/route';

export const MOTORCYCLE_ROUTES: MotorcycleRoute[] = [
  // ==========================================
  // 1. BATE E VOLTA - CAMPOS DO JORDÃO (SP)
  // ==========================================
  {
    id: 'bate-e-volta-campos-do-jordao',
    name: 'Bate e Volta Mantiqueira: Curvas de Campos do Jordão',
    category: 'bate-e-volta',
    categoryLabel: 'Bate e Volta',
    daysCount: 1,
    totalKm: 368,
    totalDurationHours: '5h 45min pilotagem',
    origin: 'São Paulo, SP (Marginal Tietê)',
    destination: 'Campos do Jordão, SP (Vila Capivari)',
    image: '/src/assets/images/route_campos_jordao_1790629307087.jpg',
    shortDescription: 'O bate e volta clássico dos motociclistas paulistas com curvas perfeitas na SP-123, paradas gastronômicas e mirantes de tirar o fôlego.',
    fullDescription: 'Roteiro de 1 dia planejado milimetricamente para motociclistas de estrada. O trajeto sobe a exuberante Serra da Mantiqueira com asfalto impecável, inclui paradas estratégicas a cada ~60km para hidratação e calibragem, almoço na famosa Vila Capivari e descida da serra com luz dourada da tarde.',
    priceBrl: 49.90,
    difficulty: 'Iniciante',
    asphaltCondition: 'Excelente',
    bestSeason: 'Março a Outubro (outono/inverno tem menos chuvas e ar fresco)',
    highlights: [
      'Subida sinuosa da Rodovia Floriano Rodrigues Pinheiro (SP-123)',
      'Mirante do Vale do Paraíba com vista panorâmica',
      'Foto clássica no Portal de Campos do Jordão com as motos',
      'Almoço no coração de Capivari (Baden Baden / Churrascaria)',
      'Paradas programadas na ida e volta em postos com gasolina de alta octanagem'
    ],
    equipmentChecklist: [
      'Jaqueta com forro térmico (Campos pode ter 10°C a menos que SP)',
      'Luvas de meia-estação ou impermeáveis',
      'Calibrador manual de pressão ou parada no posto antes da serra',
      'Kit de reparo rápido de pneu sem câmara com aplicador CO2',
      'Flanela de microfibra para limpar viseira após insetos na Ayrton Senna'
    ],
    risks: [
      {
        id: 'cv-risk-1',
        title: 'Neblina e Umidade nas Curvas da SP-123',
        level: 'atencao',
        threat: 'A Mantiqueira retém muita umidade. Mesmo em dias ensolarados em SP, os trechos sombreados da subida podem estar com asfalto úmido e musgo nas bordas.',
        mitigation: 'Diminua o ângulo de inclinação nas curvas fechadas, pilote em marcha suave e use a linha limpa dos rastros de pneus dos carros.',
        recommendedGear: 'Viseira cristal anti-fog / pinlock instalado'
      },
      {
        id: 'cv-risk-2',
        title: 'Trânsito de Turistas e Ônibus em Horários de Pico',
        level: 'alerta',
        threat: 'Entre 11h e 13h na subida e 16h e 18h na descida, há comboios lentos de ônibus de excursão que podem criar pontos cegos em ultrapassagens.',
        mitigation: 'Respeite a faixa contínua da serra. Use as faixas duplas de subida com ultrapassagem segura sem colar na traseira de veículos pesados.'
      },
      {
        id: 'cv-risk-3',
        title: 'Queda Brusca de Temperatura ao Entardecer',
        level: 'alerta',
        threat: 'No retorno, a temperatura na descida da serra cai rapidamente após as 16h30, gerando fadiga muscular e tremores.',
        mitigation: 'Coloque o forro corta-vento ou capa antes de sair de Capivari, mantendo a temperatura corporal estável.'
      }
    ],
    googleMapsFullUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sao+Paulo+SP&destination=Sao+Paulo+SP&waypoints=Posto+Graal+56+Rodovia+Ayrton+Senna|Mirante+SP-123+Santo+Antonio+do+Pinhal|Portal+de+Campos+do+Jordao|Vila+Capivari+Campos+do+Jordao|Mirante+Vista+Chinesa+Campos+do+Jordao|Frango+Assado+Carvalho+Pinto+Cacapava&travelmode=driving',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Ida e Volta: São Paulo - Serra da Mantiqueira - Campos do Jordão - Retorno',
        startLocation: 'São Paulo (SP)',
        endLocation: 'São Paulo (SP)',
        totalDayKm: 368,
        totalDayDuration: '5h 45min',
        summary: 'Dia completo com partida matutina às 07:30, paradas de combustível e hidratação a cada 60-80 km, subida de serra, almoço em Capivari e descida tranquila.',
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Sao+Paulo+SP&destination=Sao+Paulo+SP&waypoints=Posto+Graal+56+Rodovia+Ayrton+Senna|Mirante+SP-123+Santo+Antonio+do+Pinhal|Portal+de+Campos+do+Jordao|Vila+Capivari+Campos+do+Jordao|Mirante+Vista+Chinesa+Campos+do+Jordao|Frango+Assado+Carvalho+Pinto+Cacapava&travelmode=driving',
        stops: [
          // IDA
          {
            id: 'cj-s1',
            type: 'gasolina',
            title: 'Parada 1 (Ida): Posto Graal 56 (Ayrton Senna km 56)',
            subtitle: 'Reabastecimento matinal, calibragem e café dos pilotos',
            kmFromStart: 56,
            legKm: 56,
            legDurationMinutes: 45,
            estimatedTimeArrival: '08:15',
            description: 'Primeira parada tática de alinhamento do comboio. Posto modelo com gasolina aditivada e Podium, calibrador digital de alta precisão e café da manhã express.',
            motocycleTip: 'Calibre os pneus ainda frios antes da serra (mantenha 36 PSI traseiro / 32 PSI dianteiro para carga solo com bagagem leve).',
            googleMapsPlaceQuery: 'Graal 56 Ayrton Senna Guararema SP',
            amenities: ['Gasolina Podium', 'Calibrador Digital', 'Lanchonete 24h', 'Estacionamento Motos']
          },
          {
            id: 'cj-s2',
            type: 'foto',
            title: 'Parada 2 (Ida): Mirante da Serra / Trevo SP-123 (Santo Antônio do Pinhal)',
            subtitle: 'Descanso de braço e foto panorâmica das montanhas',
            kmFromStart: 132,
            legKm: 76,
            legDurationMinutes: 65,
            estimatedTimeArrival: '09:35',
            description: 'Recuo seguro na rodovia Floriano Rodrigues Pinheiro com deck de madeira e vista deslumbrante de todo o vale. Ponto tradicional de encontro de motociclistas aos finais de semana.',
            motocycleTip: 'Pare a moto sempre engatada na primeira marcha e com a roda dianteira apontada para o declive para não correr risco no cavalete.',
            googleMapsPlaceQuery: 'Mirante SP-123 Floriano Rodrigues Pinheiro Santo Antonio do Pinhal',
            amenities: ['Ponto de Foto', 'Água de Coco', 'Sanitários']
          },
          {
            id: 'cj-s3',
            type: 'turismo',
            title: 'Parada 3 (Ida): Portal Monumental de Campos do Jordão',
            subtitle: 'Parada clássica de boas-vindas e registro de foto com as motos',
            kmFromStart: 168,
            legKm: 36,
            legDurationMinutes: 35,
            estimatedTimeArrival: '10:30',
            description: 'Arquitetura alpina em enxaimel. Há bolsão lateral exclusivo para motociclistas estacionarem com segurança e tirarem fotos com as araucárias.',
            motocycleTip: 'Evite parar na faixa de tráfego. Utilize a pista lateral do bolsão turístico sinalizado.',
            googleMapsPlaceQuery: 'Portal de Campos do Jordao SP',
            amenities: ['Centro de Informações Turísticas', 'Área Gramada', 'Wi-Fi Público']
          },
          {
            id: 'cj-s4',
            type: 'almoco',
            title: 'Parada 4 (Meio do Dia): Almoço & Turismo na Vila Capivari',
            subtitle: 'Almoço bávaro/serrano, descanso prolongado e passeio a pé',
            kmFromStart: 184,
            legKm: 16,
            legDurationMinutes: 20,
            estimatedTimeArrival: '11:15 - 13:45',
            description: 'O epicentro gastronômico da cidade. Parada recomendada de 2h30 para almoçar truta grelhada com pinhão ou fondue, relaxar a musculatura e tomar um bom café expresso artesanal.',
            motocycleTip: 'Estacione nos bolsões pagos de motocicletas no calçadão central. Guarde capacetes e jaquetas nos guarda-volumes dos restaurantes ou nos baús da moto.',
            googleMapsPlaceQuery: 'Cervejaria Baden Baden Vila Capivari Campos do Jordao',
            amenities: ['Restaurantes Temáticos', 'Caixas Eletrônicos', 'Banheiros de Primeira Linha', 'Lojas de Couro']
          },
          // VOLTA
          {
            id: 'cj-s5',
            type: 'foto',
            title: 'Parada 5 (Início da Volta): Mirante Vista Chinesa (Belvedere)',
            subtitle: 'Foto de despedida e descanso antes de iniciar o trecho de descida',
            kmFromStart: 198,
            legKm: 14,
            legDurationMinutes: 25,
            estimatedTimeArrival: '14:20',
            description: 'Mirante na descida da SP-123 com horizonte infinito do Vale do Paraíba. Parada de 20 minutos para foto com luz da tarde.',
            motocycleTip: 'Atenção aos carros que entram e saem sem sinalizar. Mantenha os faróis acesos e reduza a marcha.',
            googleMapsPlaceQuery: 'Belvedere Vista Chinesa Campos do Jordao SP',
            amenities: ['Deck Panorâmico', 'Artesanato Local', 'Venda de Milho e Café']
          },
          {
            id: 'cj-s6',
            type: 'gasolina',
            title: 'Parada 6 (Volta): Posto Frango Assado (Carvalho Pinto km 94 - Caçapava)',
            subtitle: 'Abastecimento da volta, café da tarde, hidratação e lanche',
            kmFromStart: 284,
            legKm: 86,
            legDurationMinutes: 65,
            estimatedTimeArrival: '15:45',
            description: 'Posto bandeira com ampla área coberta para motos. Parada essencial para abastecer antes de entrar no tráfego metropolitano de São Paulo e alongar pernas e braços.',
            motocycleTip: 'Beba pelo menos 500ml de água. O vento constante desidrata sem que o motociclista perceba.',
            googleMapsPlaceQuery: 'Frango Assado Carvalho Pinto Cacapava SP',
            amenities: ['Gasolina Podium e V-Power', 'Padaria & Confeitaria', 'Espaço Motociclista', 'Calibrador']
          },
          {
            id: 'cj-s7',
            type: 'descanso',
            title: 'Parada 7 (Volta): Posto Campeão Ayrton Senna (Guarulhos)',
            subtitle: 'Encerramento seguro do comboio e despedida antes de dispersar em SP',
            kmFromStart: 368,
            legKm: 84,
            legDurationMinutes: 65,
            estimatedTimeArrival: '17:15',
            description: 'Última parada para alinhar a chegada, verificar motos, despedir do grupo e conferir as fotos antes de pegar as marginais.',
            motocycleTip: 'Verifique se toda a bagagem amarrada nas costas ou elásticos segue firme para a entrada urbana.',
            googleMapsPlaceQuery: 'Posto Ayrton Senna Guarulhos SP',
            amenities: ['Conveniência 24h', 'Caixa 24 Horas', 'Farmácia Próxima']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 2. BATE E FICA - URUBICI & SERRA CATARINENSE (SC)
  // ==========================================
  {
    id: 'bate-e-fica-urubici',
    name: 'Bate e Fica Serra Catarinense: Cânions & Serpentes de Asfalto em Urubici',
    category: 'bate-e-fica',
    categoryLabel: 'Bate e Fica',
    daysCount: 3,
    totalKm: 875,
    totalDurationHours: '14h 30min de pilotagem total',
    origin: 'Florianópolis, SC (ou Balneário Camboriú)',
    destination: 'Urubici & Serra do Rio do Rastro, SC',
    image: '/src/assets/images/route_urubici_serra_1790629315842.jpg',
    shortDescription: 'Uma das rotas mais espetaculares do planeta: a mística Serra do Rio do Rastro com 284 curvas, cânions gigantescos e hospedagem aconchegante em Urubici.',
    fullDescription: 'Roteiro de 3 dias no coração da Serra Geral de Santa Catarina. Desenhado para motociclistas que querem curtir curvas alpinas, a fenda monumental da Serra do Corvo Branco e a vista do Morro da Igreja (o ponto habitado mais frio do Brasil), com hotéis boutique e gastronomia serrana todas as noites.',
    priceBrl: 89.90,
    difficulty: 'Intermediário',
    asphaltCondition: 'Bom com trechos de serra',
    bestSeason: 'Março a Novembro (inverno com sensação térmica europeia, outono com céu azul)',
    highlights: [
      'Subida da mítica Serra do Rio do Rastro (SC-390) com iluminação noturna',
      'Mirante do Cânion da Ronda e Mirante de Bom Jardim da Serra',
      'Morro da Igreja (1.822 m) com vista frontal para a Pedra Furada',
      'Passagem pela garganta rochosa da Serra do Corvo Branco (SC-370)',
      'Hospedagem em pousada serrana com lareira e garagem coberta para motos'
    ],
    equipmentChecklist: [
      'Segunda pele térmica completa (calça e camisa) + balaclava',
      'Jaqueta e calça com membrana impermeável (Gore-Tex ou similar)',
      'Luva de inverno com grip impermeável',
      'Capa de chuva extra resistente (o clima na serra muda em 15 minutos)',
      'Lubrificante de corrente em spray (a umidade da serra lava a transmissão)'
    ],
    risks: [
      {
        id: 'ur-risk-1',
        title: 'Cerração Densa / "Viração" na Serra do Rio do Rastro',
        level: 'critico',
        threat: 'Nuvens vindas do oceano sobem a escarpa da serra em menos de 10 minutos, reduzindo a visibilidade a menos de 5 metros.',
        mitigation: 'Acenda faróis de milha auxiliares, aumente a distância do veículo da frente para pelo menos 50 metros e guie-se pela faixa branca lateral contínua da direita.',
        recommendedGear: 'Luzes de LED auxiliares com filtro amarelo'
      },
      {
        id: 'ur-risk-2',
        title: 'Asfalto Úmido com Concreto Escorregadio nas Cotovelos da SC-390',
        level: 'alerta',
        threat: 'As curvas mais fechadas são pavimentadas com lajes de concreto ranhurado. Em dias frios ou com orvalho matinal, a aderência reduz drasticamente.',
        mitigation: 'Evite frenagens bruscas com a moto inclinada. Faça toda a frenagem em linha reta antes de apontar para o cotovelo e acelere de forma progressiva.'
      },
      {
        id: 'ur-risk-3',
        title: 'Presença de Gado e Cavalos Soltos na Pista (Região de São Joaquim/Urubici)',
        level: 'atencao',
        threat: 'Nas rodovias estaduais secundárias serranas não há cercamento contínuo em algumas fazendas.',
        mitigation: 'Limite a velocidade a 70 km/h em trechos rurais com curvas cegas e fique atento a reflexos nos acostamentos.'
      }
    ],
    googleMapsFullUrl: 'https://www.google.com/maps/dir/?api=1&origin=Florianopolis+SC&destination=Florianopolis+SC&waypoints=Lauro+Muller+SC|Mirante+da+Serra+do+Rio+do+Rastro|Bom+Jardim+da+Serra+SC|Urubici+SC|Morro+da+Igreja+Urubici|Mirante+Serra+do+Corvo+Branco|Termas+do+Gravatal+SC&travelmode=driving',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Dia 1: Litoral - Subida da Serra do Rio do Rastro - Urubici',
        startLocation: 'Florianópolis (SC)',
        endLocation: 'Urubici (SC)',
        totalDayKm: 278,
        totalDayDuration: '5h 15min',
        summary: 'Saída pela BR-101 Sul, entrada em Tubarão em direção a Lauro Müller, escalada épica da Serra do Rio do Rastro com paradas para foto e chegada em Urubici no final da tarde.',
        hotelSuggestion: {
          name: 'Pousada Serra do Sol & Chalés Urubici',
          description: 'Pousada de montanha especializada em motociclistas. Garagem coberta e fechada para até 15 motos, secador de luvas/botas, lareira individual e café colonial artesanal.',
          hasSecureMotoParking: true,
          location: 'Rodovia SC-110, km 385, Urubici - SC',
          priceRange: 'R$ 380 - R$ 550 / diária'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Florianopolis+SC&destination=Pousada+Serra+do+Sol+Urubici&waypoints=Tubarao+SC|Lauro+Muller+SC|Mirante+da+Serra+do+Rio+do+Rastro|Bom+Jardim+da+Serra+SC&travelmode=driving',
        stops: [
          {
            id: 'ur-d1-s1',
            type: 'gasolina',
            title: 'Parada 1: Posto Ipiranga Rota do Mar (Tubarão - BR-101 km 335)',
            subtitle: 'Combustível, calibragem e briefing do comboio antes de pegar a serra',
            kmFromStart: 125,
            legKm: 125,
            legDurationMinutes: 85,
            estimatedTimeArrival: '09:25',
            description: 'Parada estratégica no entroncamento para a SC-390. Encha o tanque até a boca, pois postos com combustível premium são raros no topo da serra.',
            motocycleTip: 'Aproveite para colocar a primeira camada corta-vento: a temperatura cairá cerca de 8°C a 12°C nos próximos 50 km.',
            googleMapsPlaceQuery: 'Posto Ipiranga Tubarao BR101 SC',
            amenities: ['Gasolina Ipimax', 'Banheiros com Ducha', 'Conveniência AmPm', 'Espaço Café']
          },
          {
            id: 'ur-d1-s2',
            type: 'descanso',
            title: 'Parada 2: Monumento dos Mineiros (Lauro Müller - Base da Serra)',
            subtitle: 'Alongamento muscular e hidratação antes das 284 curvas',
            kmFromStart: 182,
            legKm: 57,
            legDurationMinutes: 50,
            estimatedTimeArrival: '10:45',
            description: 'Última cidade antes da subida da montanha. Momento ideal para relaxar pulsos, antebraços e verificar a fixação das malas laterais.',
            motocycleTip: 'Engate marchas baixas na subida (2ª e 3ª marcha) para ter freio motor pronto a qualquer instante.',
            googleMapsPlaceQuery: 'Praca dos Mineiros Lauro Muller SC',
            amenities: ['Ponto de Água', 'Sombra com Bancos', 'Artesanato Local']
          },
          {
            id: 'ur-d1-s3',
            type: 'foto',
            title: 'Parada 3: Mirante da Serra do Rio do Rastro (Cânion a 1.421m)',
            subtitle: 'O mirante mais famoso do motociclismo brasileiro',
            kmFromStart: 206,
            legKm: 24,
            legDurationMinutes: 45,
            estimatedTimeArrival: '11:45',
            description: 'No topo da escarpa, uma vista inacreditável de toda a rodovia serpentina esculpida no abismo rochoso. Estacionamento estruturado e presença de quatis silvestres.',
            motocycleTip: 'Cuidado ao estacionar no mirante com vento forte de rajada: incline a moto contra o sentido da ventania para não tombar.',
            googleMapsPlaceQuery: 'Mirante da Serra do Rio do Rastro Bom Jardim da Serra SC',
            amenities: ['Deck Panorâmico de Vidro', 'Cafeteria', 'Loja de Souvenirs', 'Banheiros Aquecidos']
          },
          {
            id: 'ur-d1-s4',
            type: 'almoco',
            title: 'Parada 4: Restaurante & Churrascaria Cascata (Bom Jardim da Serra)',
            subtitle: 'Almoço típico tropeiro com costela assada no fogo de chão e pinhão',
            kmFromStart: 218,
            legKm: 12,
            legDurationMinutes: 20,
            estimatedTimeArrival: '12:30 - 14:00',
            description: 'Comida serrana reconfortante após a adrenalina da subida da serra. Restaurante com ampla acolhida para mototuristas.',
            motocycleTip: 'Almoce sem pressa. A digestão em altitude exige um repouso antes de seguir para a rodovia de altitude.',
            googleMapsPlaceQuery: 'Churrascaria Cascata Bom Jardim da Serra SC',
            amenities: ['Buffet Campeiro', 'Estacionamento Próprio', 'Café Tropeiro de Cortesia']
          },
          {
            id: 'ur-d1-s5',
            type: 'gasolina',
            title: 'Parada 5: Posto Shell Portal Serrano (Bom Jardim da Serra)',
            subtitle: 'Reabastecimento de segurança para o trecho de planalto até Urubici',
            kmFromStart: 222,
            legKm: 4,
            legDurationMinutes: 10,
            estimatedTimeArrival: '14:15',
            description: 'Garante tanque cheio para as estradas vicinais de Urubici que não possuem postos noturnos.',
            motocycleTip: 'Limpe o visor do capacete: a altitude e os pinhais atraem pequenas resinas que grudam na viseira.',
            googleMapsPlaceQuery: 'Posto Shell Bom Jardim da Serra SC',
            amenities: ['Gasolina V-Power', 'Loja Select']
          },
          {
            id: 'ur-d1-s6',
            type: 'hotel',
            title: 'Parada 6 (Fim do Dia): Check-in Pousada Serra do Sol em Urubici',
            subtitle: 'Acomodação, lareira acesa, guarda segura das motos e descanso merecido',
            kmFromStart: 278,
            legKm: 56,
            legDurationMinutes: 60,
            estimatedTimeArrival: '15:45',
            description: 'Chegada em Urubici pela rodovia SC-110 cercada de pomares de maçã. Pousada com estrutura pensada para secar roupas de motociclistas e guardar capacetes com carinho.',
            motocycleTip: 'Guarde a moto na garagem coberta e pulverize lubrificante na corrente ainda morna da rodagem.',
            googleMapsPlaceQuery: 'Pousada Serra do Sol Urubici SC',
            amenities: ['Garagem Coberta Fechada', 'Lareira nos Quartos', 'Chá de Maçã e Canela de Boas-Vindas', 'Wi-Fi Fibra']
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Dia 2: Circuito dos Cânions: Morro da Igreja, Pedra Furada e Serra do Corvo Branco',
        startLocation: 'Urubici (SC)',
        endLocation: 'Urubici (SC)',
        totalDayKm: 148,
        totalDayDuration: '4h 30min',
        summary: 'Dia focado nas maiores atrações naturais do Brasil: subida controlada ao Morro da Igreja (1.822m), cascata Véu de Noiva, almoço de trutas locais e o corte na rocha da Serra do Corvo Branco.',
        hotelSuggestion: {
          name: 'Pousada Serra do Sol & Chalés Urubici (Segunda Noite)',
          description: 'Permanência na mesma base hoteleira para viajar leve sem bagagem nas motos durante as curvas do circuito.',
          hasSecureMotoParking: true,
          location: 'Urubici - SC',
          priceRange: 'Incluso no pacote de 3 dias'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Urubici+SC&destination=Urubici+SC&waypoints=Morro+da+Igreja+Urubici|Cascata+Veu+de+Noiva+Urubici|Restaurante+Chateau+du+Valle|Mirante+Serra+do+Corvo+Branco&travelmode=driving',
        stops: [
          {
            id: 'ur-d2-s1',
            type: 'gasolina',
            title: 'Parada 1: Posto Petrobras Urubici Centro',
            subtitle: 'Verificação matinal de pressão dos pneus e combustível fresco',
            kmFromStart: 0,
            legKm: 0,
            legDurationMinutes: 0,
            estimatedTimeArrival: '08:30',
            description: 'Ponto de partida do dia. Verifique nível de óleo e pressão dos pneus com o ar frio da manhã.',
            motocycleTip: 'Hoje pilote sem os baús pesados (deixe na pousada) para aproveitar a agilidade máxima da moto nas curvas!',
            googleMapsPlaceQuery: 'Posto Petrobras Centro Urubici SC',
            amenities: ['Gasolina Grid', 'Calibrador', 'Loja de Conveniência']
          },
          {
            id: 'ur-d2-s2',
            type: 'turismo',
            title: 'Parada 2: Morro da Igreja & Pedra Furada (1.822 metros de altitude)',
            subtitle: 'O cume mais alto da serra com vista espetacular para a escultura de rocha natural',
            kmFromStart: 32,
            legKm: 32,
            legDurationMinutes: 45,
            estimatedTimeArrival: '09:30',
            description: 'Área do Parque Nacional de São Joaquim monitorada pela Aeronáutica (CINDACTA II). É o local onde foi registrada a menor temperatura do Brasil (-17,8°C sensação térmica).',
            motocycleTip: 'A subida asfaltada é estreita e íngreme com curvas de 180°. Mantenha marcha reduzida e buzine levemente antes de curvas cegas.',
            googleMapsPlaceQuery: 'Morro da Igreja Urubici SC',
            amenities: ['Guarita com Controle ICMBio', 'Mirante da Pedra Furada', 'Estacionamento Asfaltado']
          },
          {
            id: 'ur-d2-s3',
            type: 'foto',
            title: 'Parada 3: Cascata Véu de Noiva',
            subtitle: 'Queda de 62 metros emoldurada por xaxins gigantes e mata atlântica serrana',
            kmFromStart: 48,
            legKm: 16,
            legDurationMinutes: 25,
            estimatedTimeArrival: '11:00',
            description: 'Ponto turístico agradável no caminho de volta do Morro da Igreja. Conta com tirolesa, passarela de madeira e espaço de repouso.',
            motocycleTip: 'O acesso tem 400 metros de cascalho compactado de fácil trânsito para motos de qualquer cilindrada.',
            googleMapsPlaceQuery: 'Cascata Veu de Noiva Urubici SC',
            amenities: ['Café da Cascata', 'Banheiros Limpos', 'Lojinha de Artesanato']
          },
          {
            id: 'ur-d2-s4',
            type: 'almoco',
            title: 'Parada 4: Restaurante Château du Valle',
            subtitle: 'Almoço gastronômico serrano: trutas frescas da serra com amêndoas e risoto de pinhão',
            kmFromStart: 66,
            legKm: 18,
            legDurationMinutes: 30,
            estimatedTimeArrival: '12:15 - 13:45',
            description: 'Um dos restaurantes mais elogiados da Serra Catarinense, ambiente alpino com vista para as colinas de Urubici.',
            motocycleTip: 'Estacionamento plano com brita grossa: use a pastilha de apoio de descanso lateral (sidestand puck) para o pézinho da moto não afundar.',
            googleMapsPlaceQuery: 'Chateau du Valle Urubici SC',
            amenities: ['Carta de Vinhos Serranos', 'Ambiente Aquecido', 'Estacionamento Próprio']
          },
          {
            id: 'ur-d2-s5',
            type: 'turismo',
            title: 'Parada 5: Mirante da Serra do Corvo Branco (Garganta de Pedra da SC-370)',
            subtitle: 'O maior corte em rocha arenito do Brasil com paredões de 90 metros',
            kmFromStart: 98,
            legKm: 32,
            legDurationMinutes: 45,
            estimatedTimeArrival: '14:45',
            description: 'A impressionante fenda esculpida na pedra há décadas pelos pioneiros. A rodovia passa exatamente no meio do corte vertical.',
            motocycleTip: 'A descida do Corvo Branco é sinuosa. Fique no mirante superior para fotos incríveis sem forçar o freio em declive.',
            googleMapsPlaceQuery: 'Mirante Serra do Corvo Branco Urubici SC',
            amenities: ['Deck Panorâmico', 'Venda de Café e Maçã Seca', 'Guia Local']
          },
          {
            id: 'ur-d2-s6',
            type: 'hotel',
            title: 'Parada 6: Retorno à Pousada Serra do Sol em Urubici',
            subtitle: 'Jantar serrano de fondue no centro de Urubici e noite tranquila',
            kmFromStart: 148,
            legKm: 50,
            legDurationMinutes: 55,
            estimatedTimeArrival: '16:45',
            description: 'Encerramento do dia com relaxamento na banheira de hidromassagem ou na beira da lareira, preparando-se para o retorno do dia seguinte.',
            motocycleTip: 'Cheque a pressão dos pneus para o trajeto de retorno de amanhã com a moto carregada.',
            googleMapsPlaceQuery: 'Pousada Serra do Sol Urubici SC',
            amenities: ['Garagem Coberta', 'Lareira', 'Wi-Fi']
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: 'Dia 3: Urubici - Serra da Serpente (SC-370) - Gravatal - Litoral (Retorno)',
        startLocation: 'Urubici (SC)',
        endLocation: 'Florianópolis (SC)',
        totalDayKm: 249,
        totalDayDuration: '4h 40min',
        summary: 'Retorno com descida alternativa por estradas sinuosas, parada para banho térmico ou almoço de peixes em Gravatal e volta pela BR-101 duplicada.',
        hotelSuggestion: {
          name: 'Retorno ao Ponto de Origem',
          description: 'Chegada confortável em casa no final da tarde do domingo sem cansaço excessivo.',
          hasSecureMotoParking: true,
          location: 'Florianópolis / Região',
          priceRange: 'Fim do Roteiro'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Pousada+Serra+do+Sol+Urubici&destination=Florianopolis+SC&waypoints=Braco+do+Norte+SC|Gravatal+Termas+SC|Imbituba+SC&travelmode=driving',
        stops: [
          {
            id: 'ur-d3-s1',
            type: 'gasolina',
            title: 'Parada 1: Posto Rodovia SC-110 Urubici',
            subtitle: 'Encher o tanque e despedida da cidade serrana',
            kmFromStart: 0,
            legKm: 0,
            legDurationMinutes: 0,
            estimatedTimeArrival: '09:00',
            description: 'Partida após café da manhã reforçado com pão caseiro de batata-doce e queijo serrano curado.',
            motocycleTip: 'Aperte todas as fitas expansoras dos alforjes antes de arrancar na rodovia.',
            googleMapsPlaceQuery: 'Posto Petrobras SC110 Urubici SC',
            amenities: ['Gasolina Aditivada', 'Conveniência']
          },
          {
            id: 'ur-d3-s2',
            type: 'descanso',
            title: 'Parada 2: Vale de Braço do Norte & Rio Fortuna',
            subtitle: 'Transição da serra para as colinas verdes de pastagem',
            kmFromStart: 85,
            legKm: 85,
            legDurationMinutes: 75,
            estimatedTimeArrival: '10:25',
            description: 'Parada rápida para hidratação e esticar as pernas após a descida de serra com curvas contínuas.',
            motocycleTip: 'Aqui a temperatura começa a subir novamente; remova a forração grossa de lã se sentir calor.',
            googleMapsPlaceQuery: 'Praca Central Braco do Norte SC',
            amenities: ['Café Colonial', 'Banheiros', 'Sombra']
          },
          {
            id: 'ur-d3-s3',
            type: 'almoco',
            title: 'Parada 3: Termas de Gravatal - Restaurante Mirante das Águas',
            subtitle: 'Almoço de culinária alemã e italiana colonial com peixe de água doce',
            kmFromStart: 122,
            legKm: 37,
            legDurationMinutes: 35,
            estimatedTimeArrival: '11:45 - 13:15',
            description: 'Estância hidromineral famosa pelas águas termais a 37°C. Excelente parada para recarregar as energias.',
            motocycleTip: 'Excelente local para comprar mel silvestre de bracatinga típico da região serrana.',
            googleMapsPlaceQuery: 'Gravatal Termas SC Restaurante',
            amenities: ['Buffet Variado', 'Estacionamento Seguro', 'Ar-Condicionado']
          },
          {
            id: 'ur-d3-s4',
            type: 'gasolina',
            title: 'Parada 4: Posto Petrobras Imbituba (BR-101 km 279)',
            subtitle: 'Combustível final e lanche rápido antes da entrada na grande Florianópolis',
            kmFromStart: 182,
            legKm: 60,
            legDurationMinutes: 45,
            estimatedTimeArrival: '14:20',
            description: 'Posto amplo na autoestrada com faixa exclusiva e calibrador de pneus.',
            motocycleTip: 'Atenção aos ventos laterais fortes na travessia da Lagoa de Imaruí / Ponte de Laguna.',
            googleMapsPlaceQuery: 'Posto Petrobras Imbituba BR101 SC',
            amenities: ['Gasolina Grid', 'Lanchonete', 'Calibrador']
          },
          {
            id: 'ur-d3-s5',
            type: 'descanso',
            title: 'Parada 5: Chegada em Florianópolis (Ponte Hercílio Luz)',
            subtitle: 'Foto de celebração do Tour concluído com sucesso',
            kmFromStart: 249,
            legKm: 67,
            legDurationMinutes: 55,
            estimatedTimeArrival: '15:45',
            description: 'Chegada ao Parque da Luz com vista panorâmica da histórica Ponte Hercílio Luz. Fim inesquecível da jornada de 3 dias.',
            motocycleTip: 'Comemore com cautela e lave a moto no dia seguinte para remover fuligens de rodovia.',
            googleMapsPlaceQuery: 'Parque da Luz Ponte Hercilio Luz Florianopolis SC',
            amenities: ['Ponto Turístico Histórico', 'Estacionamento', 'Mirante da Baía']
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. TOUR - DESERTO DO ATACAMA (BRASIL -> ARGENTINA -> CHILE)
  // ==========================================
  {
    id: 'tour-deserto-do-atacama',
    name: 'Tour Transcontinental: Cordilheira dos Andes & Deserto do Atacama',
    category: 'tour',
    categoryLabel: 'Tour',
    daysCount: 12,
    totalKm: 5820,
    totalDurationHours: '68h de pilotagem ao longo de 12 etapas',
    origin: 'Foz do Iguaçu, PR (Brasil)',
    destination: 'San Pedro de Atacama & Antofagasta, Chile',
    image: '/src/assets/images/route_atacama_desert_1790629326106.jpg',
    shortDescription: 'O lendário Tour transandino: Chaco argentino, Ruta 52, a monumental subida da Cuesta de Lipán, Salar de Uyuni/Grandes e o Paso de Jama a 4.800m.',
    fullDescription: 'O Santo Graal do mototurismo sul-americano. Um Tour meticulosamente planejado atravessando três países (Brasil, Argentina e Chile). O roteiro respeita rigorosamente a aclimatação de altitude, possui paradas de combustível a cada 100-140 km no Chaco e prevê a estratégia crítica de autonomia para a travessia de 280 km sem postos no altiplano andino do Paso de Jama.',
    priceBrl: 189.90,
    difficulty: 'Tour Extremo',
    asphaltCondition: 'Misto (asfalto e rípio)',
    bestSeason: 'Outubro a Dezembro e Março a Maio (evita o "Inverno Altiplânico" que causa chuvas no deserto em janeiro/fevereiro e nevascas de inverno em julho)',
    highlights: [
      'Travessia da estepe do Chaco argentino e Província de Salta',
      'Curvas épicas da Cuesta de Lipán subindo de 2.200m para 4.170m',
      'Atravessamento do infinito Salar de Salinas Grandes',
      'Travessia do Paso de Jama a 4.820 metros de altitude máxima',
      'Monjes de la Pacana e formações de pedra vulcânica no meio do deserto',
      'San Pedro de Atacama: Vale da Lua, Geysers del Tatio e Lagunas Altiplânicas',
      'Monumento "La Mano del Desierto" na Ruta 5 Panamericana'
    ],
    equipmentChecklist: [
      'Galão homologado de combustível (5 a 10 litros) com bico flexível',
      'Documento de Identidade (RG recente < 10 anos) ou Passaporte válido',
      'Seguro Internacional Carta Verde (Argentina) e SOAPEX (Chile)',
      'Documento da moto (CRLV) no nome do piloto ou procuração consularizada',
      'Oxímetro portátil de dedo + pastilhas de Diamox / Sorojchi Pills',
      'Compressor portátil de 12V e 2 kits de reparo de pneu sem câmara com cola fresca',
      'Protetor solar FPS 70+ e colírio lubrificante (umidade do ar cai para 5%)',
      'Traje técnico 4 estações com forro térmico espesso para -10°C e ventilação para +35°C'
    ],
    risks: [
      {
        id: 'at-risk-1',
        title: 'Mal da Altitude (Soroche / Hipóxia no Paso de Jama a 4.820m)',
        level: 'critico',
        threat: 'A falta de oxigênio em altitudes acima de 4.000m causa dor de cabeça intensa, náuseas, tontura e perda de reflexos ao pilotar a moto.',
        mitigation: 'Obrigatoriamente durma a noite anterior em Purmamarca ou Susques para aclimatar. Tome 3 a 4 litros de água por dia. Não ingira bebidas alcoólicas na véspera e masque folhas de coca ou tome chá de coca tradicional.',
        recommendedGear: 'Oxímetro de pulso e garrafinha de oxigênio portátil (vendida em farmácias de Salta e Susques)'
      },
      {
        id: 'at-risk-2',
        title: 'Pane Seca por Falta de Postos na Ruta 27 CH (280 km sem combustível)',
        level: 'critico',
        threat: 'Entre Susques (Argentina) e San Pedro de Atacama (Chile), não existe nenhum posto público de combustível comercial por mais de 280 km.',
        mitigation: 'Obrigatório reabastecer até a boca em Susques e completar no posto da aduana no Paso de Jama se houver combustível. Leve galão de reserva de 5L a 10L testado e sem vazamentos.',
        recommendedGear: 'Galão tipo Rotopax ou Givi homologado fixado com travas'
      },
      {
        id: 'at-risk-3',
        title: 'Vento Branco e Rajadas Laterais Violentas (Vientos Cruzados > 90 km/h)',
        level: 'alerta',
        threat: 'No altiplano e nas salinas, rajadas súbitas de vento lateral empurram a moto para a pista contrária ou acostamento sem aviso prévio.',
        mitigation: 'Incline a moto suavemente contra o vento, trave os joelhos no tanque, reduza a velocidade para 70-80 km/h e evite ultrapassar caminhões cegos.'
      },
      {
        id: 'at-risk-4',
        title: 'Variação Térmica Extrema (-8°C de manhã para +34°C à tarde)',
        level: 'atencao',
        threat: 'Pode haver formação de "gelo negro" (black ice) invisível sobre o asfalto nas primeiras horas da manhã no topo dos Andes.',
        mitigation: 'Nunca inicie a travessia do Paso de Jama antes das 08:30 da manhã, esperando o sol descongelar a pista.'
      }
    ],
    googleMapsFullUrl: 'https://www.google.com/maps/dir/?api=1&origin=Foz+do+Iguacu+PR&destination=Mano+del+Desierto+Antofagasta+Chile&waypoints=Corrientes+Argentina|Presidencia+Roque+Saenz+Pena|Joaquin+V+Gonzalez+Salta|Purmamarca+Jujuy|Paso+de+Jama+Border|San+Pedro+de+Atacama+Chile&travelmode=driving',
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Etapa 1: Foz do Iguaçu (BR) - Puerto Iguazú - Corrientes (ARG)',
        startLocation: 'Foz do Iguaçu (PR, Brasil)',
        endLocation: 'Corrientes (Argentina)',
        totalDayKm: 638,
        totalDayDuration: '7h 30min',
        summary: 'Travessia da Ponte Tancredo Neves, trâmites de aduana Argentina (migraciones e AFIP) e descida pela Ruta Nacional 12 margeando o Rio Paraná.',
        hotelSuggestion: {
          name: 'Hotel Turismo Corrientes Costanera',
          description: 'Hotel tradicional na beira da orla do Rio Paraná com estacionamento privativo e fechado para motocicletas e restaurante de carnes nobres argentinas.',
          hasSecureMotoParking: true,
          location: 'Costanera General San Martín, Corrientes',
          priceRange: 'US$ 60 - US$ 85 / diária'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Foz+do+Iguacu+PR&destination=Hotel+Turismo+Corrientes&waypoints=Aduana+Puerto+Iguazu|YPF+Eldorado+Misiones|YPF+Posadas+Costanera|YPF+Ituzaingo+Corrientes&travelmode=driving',
        stops: [
          {
            id: 'at-d1-s1',
            type: 'turismo',
            title: 'Parada 1: Aduana Internacional Puerto Iguazú (Fronteira BR/ARG)',
            subtitle: 'Trâmites migratórios, carimbo no passaporte e seguro Carta Verde',
            kmFromStart: 18,
            legKm: 18,
            legDurationMinutes: 30,
            estimatedTimeArrival: '07:30',
            description: 'Apresentação de RG recente, CNH, documento do veículo e apólice da Carta Verde impressa. Estacione na baía designada para motos.',
            motocycleTip: 'Mantenha todos os documentos em um porta-documentos estanque à prova d’água acessível no bolso do peito da jaqueta.',
            googleMapsPlaceQuery: 'Paso Fronterizo Puerto Iguazu Misiones',
            amenities: ['Casa de Câmbio', 'Cabines de Imigração', 'Banheiros Públicos']
          },
          {
            id: 'at-d1-s2',
            type: 'gasolina',
            title: 'Parada 2: YPF Eldorado (Ruta 12 km 1540)',
            subtitle: 'Primeiro abastecimento em pesos argentinos e calibragem',
            kmFromStart: 115,
            legKm: 97,
            legDurationMinutes: 75,
            estimatedTimeArrival: '09:15',
            description: 'Posto YPF modelo com combustível Infinia (98 octanas) e loja Full. Excelente para o primeiro café com medialunas.',
            motocycleTip: 'Sempre peça gasolina Infinia nas estações YPF da Argentina para evitar resíduos de etanol nos bicos injetores.',
            googleMapsPlaceQuery: 'YPF Eldorado Misiones Ruta 12',
            amenities: ['Gasolina Infinia', 'Loja Full YPF', 'Caixa Eletrônico', 'Calibrador']
          },
          {
            id: 'at-d1-s3',
            type: 'descanso',
            title: 'Parada 3: Mirante do Rio Paraná em San Ignacio',
            subtitle: 'Descanso sob as árvores e hidratação nas Missões Jesuíticas',
            kmFromStart: 235,
            legKm: 120,
            legDurationMinutes: 80,
            estimatedTimeArrival: '11:00',
            description: 'Região histórica das reduções jesuíticas guaranis. Parada para relaxar ombros e beber água gelada.',
            motocycleTip: 'Neste trecho há radares fotográficos fixos na entrada das vilas. Respeite rigidamente os 60 km/h indicados.',
            googleMapsPlaceQuery: 'San Ignacio Misiones Argentina',
            amenities: ['Sombra', 'Quiosques de Frutas', 'Água Mineral']
          },
          {
            id: 'at-d1-s4',
            type: 'almoco',
            title: 'Parada 4: YPF Full & Restaurante Posadas Costanera',
            subtitle: 'Almoço com bife de chorizo argentino e descanso de 1 hora',
            kmFromStart: 300,
            legKm: 65,
            legDurationMinutes: 50,
            estimatedTimeArrival: '12:15 - 13:30',
            description: 'Capital da província de Misiones. Posto moderno na orla com vista para o Paraguai na margem oposta.',
            motocycleTip: 'Coma refeições ricas em proteínas magras e evite excesso de carboidratos pesados para não dar sono na rodovia reta.',
            googleMapsPlaceQuery: 'YPF Costanera Posadas Misiones',
            amenities: ['Restaurante Climatizado', 'Wi-Fi Rápido', 'Estacionamento com Câmeras']
          },
          {
            id: 'at-d1-s5',
            type: 'gasolina',
            title: 'Parada 5: YPF Ituzaingó (Corrientes - Ruta 12 km 1250)',
            subtitle: 'Reabastecimento e hidratação obrigatória na entrada dos esteros',
            kmFromStart: 425,
            legKm: 125,
            legDurationMinutes: 85,
            estimatedTimeArrival: '15:15',
            description: 'Ponto de apoio vital na transição do relevo de terra vermelha para as planícies úmidas de Corrientes.',
            motocycleTip: 'Atenção aos animais na beira da pista (capivaras e bovinos soltos nas pastagens laterais).',
            googleMapsPlaceQuery: 'YPF Ituzaingo Corrientes Ruta 12',
            amenities: ['Gasolina Infinia', 'Loja de Conveniência']
          },
          {
            id: 'at-d1-s6',
            type: 'gasolina',
            title: 'Parada 6: YPF Itatí (Entroncamento Basílica de Itatí)',
            subtitle: 'Última parada de combustível do dia e esticada de pernas',
            kmFromStart: 560,
            legKm: 135,
            legDurationMinutes: 90,
            estimatedTimeArrival: '17:00',
            description: 'Parada rápida para conferir correntes e chegar a Corrientes com a moto já abastecida para a manhã seguinte.',
            motocycleTip: 'Aproveite para comprar água mineral em garrafa de 2 litros para o hotel.',
            googleMapsPlaceQuery: 'YPF Itati Corrientes Ruta 12',
            amenities: ['Loja de Conveniência', 'Banheiros']
          },
          {
            id: 'at-d1-s7',
            type: 'hotel',
            title: 'Parada 7: Check-in Hotel Turismo Corrientes Costanera',
            subtitle: 'Fim da 1ª etapa: banho quente, guarda das motos e jantar no porto',
            kmFromStart: 638,
            legKm: 78,
            legDurationMinutes: 55,
            estimatedTimeArrival: '18:15',
            description: 'Chegada na acolhedora capital correntina. Hotel com pátio interno fechado para motocicletas e segurança 24 horas.',
            motocycleTip: 'Conecte baterias de intercomunicadores e câmeras de ação para recarregar durante a noite.',
            googleMapsPlaceQuery: 'Hotel Turismo Corrientes Costanera',
            amenities: ['Estacionamento Privado Fechado', 'Piscina', 'Restaurante Típico Parrilla', 'Wi-Fi']
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: 'Etapa 2: Corrientes - Travessia do Grande Chaco - Presidencia Roque Sáenz Peña - Salta',
        startLocation: 'Corrientes (ARG)',
        endLocation: 'Salta Capital (ARG - Base dos Andes)',
        totalDayKm: 780,
        totalDayDuration: '8h 45min',
        summary: 'A lendária reta do Chaco argentino pela Ruta Nacional 16. Desafio de resistência em planície árida até avistar os primeiros contrafortes da Cordilheira em Salta La Linda.',
        hotelSuggestion: {
          name: 'Hotel Alejandro I - Salta',
          description: 'Hotel 5 estrelas no centro de Salta com estacionamento subterrâneo vigiado para motos de alta cilindrada e spa para relaxamento da musculatura.',
          hasSecureMotoParking: true,
          location: 'Balcarce 252, Salta Capital',
          priceRange: 'US$ 90 - US$ 130 / diária'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Corrientes+Costanera&destination=Hotel+Alejandro+I+Salta&waypoints=Resistencia+Chaco|YPF+Presidencia+Roque+Saenz+Pena|YPF+Pampa+del+Infierno|YPF+Joaquin+V+Gonzalez|General+Guemes+Salta&travelmode=driving',
        stops: [
          {
            id: 'at-d2-s1',
            type: 'foto',
            title: 'Parada 1: Ponte General Manuel Belgrano (Rio Paraná)',
            subtitle: 'Foto sobre a gigantesca ponte estaiada unindo Corrientes e Chaco',
            kmFromStart: 12,
            legKm: 12,
            legDurationMinutes: 20,
            estimatedTimeArrival: '07:45',
            description: 'Uma das pontes mais imponentes da América do Sul sobre o colossal Rio Paraná. Cruzamento emocionante ao nascer do sol.',
            motocycleTip: 'Mantenha velocidade constante nas juntas de dilatação de ferro da ponte.',
            googleMapsPlaceQuery: 'Puente General Manuel Belgrano Corrientes Resistencia',
            amenities: ['Ponto de Vista Monumental']
          },
          {
            id: 'at-d2-s2',
            type: 'gasolina',
            title: 'Parada 2: YPF Presidencia Roque Sáenz Peña (Ruta 16 km 175)',
            subtitle: 'Abastecimento obrigatório antes do trecho desértico do Chaco profundo',
            kmFromStart: 185,
            legKm: 173,
            legDurationMinutes: 105,
            estimatedTimeArrival: '09:40',
            description: 'Maior polo urbano do interior do Chaco. Parada para esticar pernas e abastecer os tanques.',
            motocycleTip: 'Abasteça 100% de todos os tanques. Os próximos postos no Chaco podem ter filas de caminhões.',
            googleMapsPlaceQuery: 'YPF Roque Saenz Pena Chaco Ruta 16',
            amenities: ['Gasolina Infinia', 'Loja Full', 'Calibrador de Pneus']
          },
          {
            id: 'at-d2-s3',
            type: 'descanso',
            title: 'Parada 3: Pampa del Infierno (Ruta 16 km 260)',
            subtitle: 'Parada de hidratação sob sol do meio-dia no coração da estepe chaquenha',
            kmFromStart: 310,
            legKm: 125,
            legDurationMinutes: 80,
            estimatedTimeArrival: '11:15',
            description: 'Nome célebre por suas altas temperaturas no verão. Parada rápida de 15 minutos para água com sais minerais e isotônicos.',
            motocycleTip: 'Use colete refrescante ou umedeça a camisa sob a jaqueta para combater a desidratação do ar quente.',
            googleMapsPlaceQuery: 'Pampa del Infierno Chaco Argentina',
            amenities: ['Posto de Abastecimento', 'Sombra com Ar-Condicionado']
          },
          {
            id: 'at-d2-s4',
            type: 'almoco',
            title: 'Parada 4: YPF Monte Quemado - Almoço & Descanso',
            subtitle: 'Parada no divórcio das províncias Chaco e Santiago del Estero',
            kmFromStart: 425,
            legKm: 115,
            legDurationMinutes: 75,
            estimatedTimeArrival: '12:45 - 13:50',
            description: 'Refeição reforçada, descanso nas poltronas da loja e abastecimento dos tanques.',
            motocycleTip: 'Não viaje sem conferir se as tampas dos tanques e do galão reserva estão travadas com segurança.',
            googleMapsPlaceQuery: 'YPF Monte Quemado Santiago del Estero',
            amenities: ['Restaurante', 'Banheiros Limpos', 'Gelo e Bebidas']
          },
          {
            id: 'at-d2-s5',
            type: 'gasolina',
            title: 'Parada 5: YPF Joaquín V. González (Província de Salta)',
            subtitle: 'Primeira visão das montanhas andinas no horizonte e combustível',
            kmFromStart: 565,
            legKm: 140,
            legDurationMinutes: 90,
            estimatedTimeArrival: '15:35',
            description: 'A paisagem plana e monótona do Chaco dá lugar às primeiras ondulações de montanhas verdes (Yungas).',
            motocycleTip: 'O relevo começa a ganhar curvas deliciosas. Redobre a atenção com tratores agrícolas na pista.',
            googleMapsPlaceQuery: 'YPF Joaquin V Gonzalez Salta',
            amenities: ['Gasolina Infinia', 'Loja Full', 'Artesanato de Salta']
          },
          {
            id: 'at-d2-s6',
            type: 'descanso',
            title: 'Parada 6: General Güemes (Entroncamento Ruta 9 / Ruta 34)',
            subtitle: 'Último descanso rápido antes da subida urbana para Salta Capital',
            kmFromStart: 720,
            legKm: 155,
            legDurationMinutes: 95,
            estimatedTimeArrival: '17:30',
            description: 'Entroncamento rodoviário crucial onde se acessa a autopista de quatro faixas para Salta.',
            motocycleTip: 'Coloque a forração corta-vento leve: Salta fica a 1.200 metros de altitude e as noites são frescas.',
            googleMapsPlaceQuery: 'General Guemes Salta Argentina',
            amenities: ['Postos de Gasolina', 'Banca de Empanadas Salteñas']
          },
          {
            id: 'at-d2-s7',
            type: 'hotel',
            title: 'Parada 7: Check-in Hotel Alejandro I em Salta Capital',
            subtitle: 'Chegada em "Salta La Linda", base cultural aos pés dos Andes',
            kmFromStart: 780,
            legKm: 60,
            legDurationMinutes: 45,
            estimatedTimeArrival: '18:40',
            description: 'Noite memorável na Praça 9 de Julho com as famosas empanadas salteñas no forno de barro e vinho Torrontés de Cafayate.',
            motocycleTip: 'Aproveite para comprar na farmácia central pastilhas contra altitude (Sorojchi Pills) e folhas de coca para a aclimatação.',
            googleMapsPlaceQuery: 'Hotel Alejandro I Salta Balcarce',
            amenities: ['Garagem Coberta com Manobrista', 'Spa e Sauna', 'Restaurante Internacional', 'Wi-Fi']
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: 'Etapa 3: Salta - Jujuy - Cuesta de Lipán (4.170m) - Salinas Grandes - Purmamarca (Aclimatação)',
        startLocation: 'Salta Capital (ARG)',
        endLocation: 'Purmamarca / Quebrada de Humahuaca (ARG)',
        totalDayKm: 260,
        totalDayDuration: '5h 15min',
        summary: 'Dia sagrado para a aclimatação biológica: escalada das inacreditáveis curvas em caracol da Cuesta de Lipán até 4.170m, travessia do espelho branco das Salinas Grandes e pernoite no vilarejo andino de Purmamarca aos pés da montanha das 7 Cores.',
        hotelSuggestion: {
          name: 'Hotel La Comarca - Purmamarca',
          description: 'Hotel boutique em estilo de adobe andino integrado às falésias coloridas. Garagem privativa, atendimento acolhedor e chá de coca quente disponível 24h na recepção.',
          hasSecureMotoParking: true,
          location: 'Ruta Nacional 52 km 3.8, Purmamarca, Jujuy',
          priceRange: 'US$ 95 - US$ 140 / diária'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Hotel+Alejandro+I+Salta&destination=Hotel+La+Comarca+Purmamarca&waypoints=San+Salvador+de+Jujuy|Volcan+Jujuy|Cuesta+de+Lipan+Mirador|Salinas+Grandes+Jujuy|Purmamarca+Cerro+Siete+Colores&travelmode=driving',
        stops: [
          {
            id: 'at-d3-s1',
            type: 'gasolina',
            title: 'Parada 1: Posto Shell San Salvador de Jujuy (Acesso Norte)',
            subtitle: 'Encher o tanque antes da subida da Quebrada de Humahuaca',
            kmFromStart: 110,
            legKm: 110,
            legDurationMinutes: 75,
            estimatedTimeArrival: '09:15',
            description: 'Capital de Jujuy. Ponto de transição do clima subtropical para o altiplano árido.',
            motocycleTip: 'Calibre os pneus: o asfalto da Ruta 52 é muito aderente e perfeito para curvas de inclinação.',
            googleMapsPlaceQuery: 'Shell San Salvador de Jujuy Ruta 9',
            amenities: ['Gasolina V-Power', 'Loja Shell Select', 'Banheiros']
          },
          {
            id: 'at-d3-s2',
            type: 'descanso',
            title: 'Parada 2: Vilarejo de Volcán & Tumbaya',
            subtitle: 'Primeira parada de aclimatação a 2.100m de altitude',
            kmFromStart: 152,
            legKm: 42,
            legDurationMinutes: 40,
            estimatedTimeArrival: '10:15',
            description: 'Começo das montanhas de tonalidades terrosas, vermelhas e roxas. Beba água e respire profundamente.',
            motocycleTip: 'Mastigue as primeiras folhas de coca ou tome chá de coca para oxigenação sanguínea.',
            googleMapsPlaceQuery: 'Tumbaya Jujuy Argentina Ruta 9',
            amenities: ['Feira de Ervas Nativas', 'Sombra', 'Chá de Coca Fresco']
          },
          {
            id: 'at-d3-s3',
            type: 'foto',
            title: 'Parada 3: Mirador Abra de Potrerillos - Cuesta de Lipán (4.170m)',
            subtitle: 'O ápice da Cuesta de Lipán: uma obra-prima da engenharia rodoviária',
            kmFromStart: 198,
            legKm: 46,
            legDurationMinutes: 60,
            estimatedTimeArrival: '11:45',
            description: 'Asfalto impecável desenhando curvas perfeitas como um autódromo de montanha. No topo da Abra de Potrerillos a 4.170m há o totem de altitude onde todos os motociclistas colam seus adesivos.',
            motocycleTip: 'Movimente-se devagar no mirante. O ar rarefeito cansa com facilidade. Tire fotos sem movimentos bruscos.',
            googleMapsPlaceQuery: 'Abra de Potrerillos Cuesta de Lipan Jujuy',
            amenities: ['Monumento Marco de Altitude 4.170m', 'Venda de Mantas de Lhama']
          },
          {
            id: 'at-d3-s4',
            type: 'turismo',
            title: 'Parada 4: Salinas Grandes (O Grande Deserto de Sal Branco)',
            subtitle: 'Entrada na imensidão branca do salar e fotos das motos no espelho de sal',
            kmFromStart: 232,
            legKm: 34,
            legDurationMinutes: 35,
            estimatedTimeArrival: '12:45',
            description: 'Mais de 212 km² de crosta de sal cintilante a 3.450 metros de altitude. Há guias locais que autorizam fotos com as motos nos "ojos de sal" e na estátua feita de blocos de sal.',
            motocycleTip: 'Use óculos escuros com filtro UV classe 4: a reverberação da luz solar no sal branco cega a visão desprotegida.',
            googleMapsPlaceQuery: 'Salinas Grandes Jujuy Argentina Ruta 52',
            amenities: ['Restaurante de Sal', 'Ponto Fotográfico Turístico', 'Estacionamento Seguro']
          },
          {
            id: 'at-d3-s5',
            type: 'almoco',
            title: 'Parada 5: Restaurante El Parador de Salinas Grandes',
            subtitle: 'Almoço rústico andino com bife de lhama grelhado e batatas andinas coloridas',
            kmFromStart: 235,
            legKm: 3,
            legDurationMinutes: 10,
            estimatedTimeArrival: '13:15 - 14:30',
            description: 'Refeição típica no meio da imensidão branca antes de descer para pernoitar em Purmamarca.',
            motocycleTip: 'Beba muita água mineral e evite refrigerantes açucarados que desidratam em altitude.',
            googleMapsPlaceQuery: 'Parador Salinas Grandes Jujuy',
            amenities: ['Comida Típica Andina', 'Banheiros de Sal']
          },
          {
            id: 'at-d3-s6',
            type: 'hotel',
            title: 'Parada 6: Check-in Hotel La Comarca em Purmamarca (Cerro de los 7 Colores)',
            subtitle: 'Descanso de ouro a 2.300m para aclimatação corporal antes da travessia dos Andes',
            kmFromStart: 260,
            legKm: 25,
            legDurationMinutes: 40,
            estimatedTimeArrival: '15:45',
            description: 'Pernoite obrigatório. Purmamarca fica a 2.300m, altitude perfeita para o corpo produzir glóbulos vermelhos antes de encarar os 4.800m de amanhã.',
            motocycleTip: 'Caminhe suavemente pelas ruelas de Purmamarca, jante cedo e durma pelo menos 8 horas para a grande travessia andina.',
            googleMapsPlaceQuery: 'Hotel La Comarca Purmamarca Jujuy',
            amenities: ['Pátio Fechado para Motos', 'Jardins com Cactos Cardones', 'Chá de Coca Livre', 'Lareira']
          }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: 'Etapa 4: Purmamarca - Susques - Paso de Jama (4.820m) - San Pedro de Atacama (CHILE)',
        startLocation: 'Purmamarca (ARG)',
        endLocation: 'San Pedro de Atacama (Chile)',
        totalDayKm: 420,
        totalDayDuration: '7h 15min',
        summary: 'O grande dia do Tour: a travessia da Cordilheira dos Andes. Partida com tanque cheio em Susques, passagem pela aduana binacional no Paso de Jama, travessia dos lagos congelados a 4.820m e descida cinematográfica de 40 km vendo o Vulcão Licancabur até San Pedro de Atacama.',
        hotelSuggestion: {
          name: 'Hotel Cumbres San Pedro de Atacama',
          description: 'Refúgio de luxo no deserto com arquitetura orgânica de terra e madeira. Estacionamento fechado vigiado, 3 piscinas termais relaxantes e restaurante com cozinha altiplânica moderna.',
          hasSecureMotoParking: true,
          location: 'Avenida Las Torres 26, San Pedro de Atacama, Chile',
          priceRange: 'US$ 180 - US$ 250 / diária'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=Purmamarca+Jujuy&destination=Hotel+Cumbres+San+Pedro+de+Atacama&waypoints=YPF+Susques+Jujuy|Paso+de+Jama+Border|Monjes+de+la+Pacana|Mirador+Volcan+Licancabur|Aduana+San+Pedro+de+Atacama&travelmode=driving',
        stops: [
          {
            id: 'at-d4-s1',
            type: 'gasolina',
            title: 'Parada 1: Posto YPF Susques (Último posto da Argentina)',
            subtitle: 'Encher o tanque e o galão reserva até a borda (início do trecho crítico de 280 km)',
            kmFromStart: 135,
            legKm: 135,
            legDurationMinutes: 110,
            estimatedTimeArrival: '09:30',
            description: 'Povoado andino a 3.675 metros de altitude. Este é o último posto com garantia total de combustível antes de entrar no território chileno.',
            motocycleTip: 'ABASTEÇA TUDO: moto e galão de reserva. Não confie que haverá combustível na aduana do Paso de Jama.',
            googleMapsPlaceQuery: 'YPF Susques Jujuy Argentina Ruta 52',
            amenities: ['Gasolina Infinia e Súper', 'Banheiros Rústicos', 'Mercadinho Local']
          },
          {
            id: 'at-d4-s2',
            type: 'descanso',
            title: 'Parada 2: Paso de Jama (Aduana Integrada Argentina / Chile - 4.200m)',
            subtitle: 'Trâmites de saída da Argentina e entrada no Chile (SAG, PDI e Aduanas)',
            kmFromStart: 255,
            legKm: 120,
            legDurationMinutes: 95,
            estimatedTimeArrival: '11:45',
            description: 'Complexo fronteiriço moderno em plena cordilheira. Atenção: a alfândega chilena (SAG) proíbe rigorosamente entrada de maçãs, laranjas, salames, queijos ou sementes.',
            motocycleTip: 'Coma ou descarte qualquer fruta fresca ou sanduíche de presunto antes de passar pelo raio-x do SAG chileno.',
            googleMapsPlaceQuery: 'Paso Fronterizo Jama Aduana Argentina Chile',
            amenities: ['Edifício Integrado Climatizado', 'Restaurante / Lanchonete', 'Banheiros Aquecidos', 'Posto YPF Jama (quando abastecido)']
          },
          {
            id: 'at-d4-s3',
            type: 'almoco',
            title: 'Parada 3: Restaurante de Montanha Paso de Jama',
            subtitle: 'Almoço quente com sopa andina de legumes para aquecer o corpo',
            kmFromStart: 256,
            legKm: 1,
            legDurationMinutes: 10,
            estimatedTimeArrival: '12:30 - 13:30',
            description: 'Almoço reconfortante dentro do complexo aduaneiro antes de iniciar a travessia do platô mais alto da rota (Ruta 27 CH).',
            motocycleTip: 'Vista agora a calça e jaqueta com todas as camadas térmicas. A temperatura lá em cima desce para -4°C com ventos cortantes.',
            googleMapsPlaceQuery: 'Restaurante Paso de Jama Jujuy',
            amenities: ['Refeições Quentes', 'Café Express', 'Água Mineral']
          },
          {
            id: 'at-d4-s4',
            type: 'foto',
            title: 'Parada 4: Cume Andino & Monjes de la Pacana (Ruta 27 CH a 4.820m)',
            subtitle: 'O ponto mais alto da viagem: monólitos gigantes de pedra vulcânica no meio da areia',
            kmFromStart: 350,
            legKm: 94,
            legDurationMinutes: 80,
            estimatedTimeArrival: '14:50',
            description: 'Paisagem alienígena e deslumbrante. Pilares gigantescos de pedra esculpidos pelo vento gelado há milhões de anos à beira do Salar de Aguas Calientes.',
            motocycleTip: 'Não desligue o motor se sua moto tiver injeção eletrônica sensível ao frio sem bateria plena. Foto rápida de 10 a 15 minutos e siga em frente.',
            googleMapsPlaceQuery: 'Monjes de la Pacana Ruta 27 San Pedro de Atacama Chile',
            amenities: ['Ponto Fotográfico Lendário', 'Vista do Salar de Quisquiro']
          },
          {
            id: 'at-d4-s5',
            type: 'turismo',
            title: 'Parada 5: Mirador del Volcán Licancabur (5.916m)',
            subtitle: 'Início da descida monumental de 40 km para o oásis de San Pedro de Atacama',
            kmFromStart: 388,
            legKm: 38,
            legDurationMinutes: 35,
            estimatedTimeArrival: '15:45',
            description: 'Vista frontal do icônico vulcão cônico perfeito na fronteira do Chile com a Bolívia. A estrada despenca de 4.400m para 2.400m em uma descida reta infinita.',
            motocycleTip: 'Use o freio motor na descida para não superaquecer as pastilhas e discos de freio da moto.',
            googleMapsPlaceQuery: 'Mirador Volcan Licancabur Ruta 27 CH',
            amenities: ['Ponto Panorâmico', 'Recuo Asfaltado']
          },
          {
            id: 'at-d4-s6',
            type: 'gasolina',
            title: 'Parada 6: Posto Copec San Pedro de Atacama',
            subtitle: 'Chegada ao deserto, reabastecimento triunfal e alívio de altitude',
            kmFromStart: 418,
            legKm: 30,
            legDurationMinutes: 30,
            estimatedTimeArrival: '16:30',
            description: 'Chegada triunfal ao oásis desértico. A pressão atmosférica normaliza e a temperatura volta aos agradáveis 24°C.',
            motocycleTip: 'Comemore com os parceiros de estrada: vocês acabaram de cruzar a Cordilheira dos Andes de moto!',
            googleMapsPlaceQuery: 'Copec San Pedro de Atacama Chile',
            amenities: ['Gasolina 95 e 97 Octanas', 'Loja Pronto Copec', 'Calibrador']
          },
          {
            id: 'at-d4-s7',
            type: 'hotel',
            title: 'Parada 7: Check-in Hotel Cumbres San Pedro de Atacama',
            subtitle: 'Base fixa por 3 noites para explorar as maravilhas do Atacama',
            kmFromStart: 420,
            legKm: 2,
            legDurationMinutes: 10,
            estimatedTimeArrival: '17:00',
            description: 'Hotel impecável no deserto. Banho de piscina aquecida sob o céu mais estrelado do planeta Terra.',
            motocycleTip: 'Desmonte as bagagens pesadas e deixe a moto pronta para passeios curtos nos vales.',
            googleMapsPlaceQuery: 'Hotel Cumbres San Pedro de Atacama',
            amenities: ['Estacionamento Seguro Coberto', '3 Piscinas no Deserto', 'Restaurante Alta Gastronomia', 'Wi-Fi']
          }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: 'Etapas 5 a 12: Tour Atacama, Valle de la Luna, Mano del Desierto & Retorno',
        startLocation: 'San Pedro de Atacama (Chile)',
        endLocation: 'Foz do Iguaçu / Retorno Brasil',
        totalDayKm: 3722,
        totalDayDuration: '38h de pilotagem distribuídas',
        summary: 'Dias de exploração mágica no deserto mais árido do planeta: Cordilheira do Sal, Valle de la Luna ao pôr do sol, Geysers del Tatio às 06h, descida pela Ruta 5 Panamericana até a colossal escultura "La Mano del Desierto" em Antofagasta e retorno planejado pelo Paso de Sico ou Jama.',
        hotelSuggestion: {
          name: 'Circuito de Hospedagens Selecionadas do Tour',
          description: 'Hospedagens homologadas pelo guia com vaga coberta para motos em Antofagasta, Salta e Corrientes.',
          hasSecureMotoParking: true,
          location: 'Roteiro Transandino Completo',
          priceRange: 'Incluso no pacote'
        },
        googleMapsDayUrl: 'https://www.google.com/maps/dir/?api=1&origin=San+Pedro+de+Atacama&destination=Mano+del+Desierto+Antofagasta&waypoints=Valle+de+la+Luna+Atacama|Calama+Chile|Antofagasta+Costanera&travelmode=driving',
        stops: [
          {
            id: 'at-d5-s1',
            type: 'turismo',
            title: 'Parada Destacada: Valle de la Luna & Cordillera de la Sal',
            subtitle: 'Paisagens lunares esculpidas em quartzo, gesso e sal no deserto chileno',
            kmFromStart: 16,
            legKm: 16,
            legDurationMinutes: 25,
            estimatedTimeArrival: '16:00',
            description: 'Passeio inesquecível pelas dunas gigantes do Valle de la Muerte e anfiteatro natural de rochas no pôr do sol.',
            motocycleTip: 'Atenção aos trechos com areia fina fofa na beira da pista. Não trave o freio dianteiro na areia.',
            googleMapsPlaceQuery: 'Valle de la Luna San Pedro de Atacama Chile',
            amenities: ['Trilhas Demarcadas', 'Mirante da Pedra do Coiote', 'Segurança do Parque']
          },
          {
            id: 'at-d5-s2',
            type: 'foto',
            title: 'Parada Icônica: Monumento "La Mano del Desierto" (Ruta 5 Panamericana)',
            subtitle: 'A escultura de 11 metros de altura de Mario Irarrázabal erguida na areia do Pacífico',
            kmFromStart: 310,
            legKm: 294,
            legDurationMinutes: 190,
            estimatedTimeArrival: '11:30',
            description: 'Um dos marcos visuais mais famosos do motociclismo mundial a 75 km ao sul de Antofagasta. Um monumento à solidão e resistência humana no deserto.',
            motocycleTip: 'Estacione a moto na base da mão para a foto histórica da sua vida.',
            googleMapsPlaceQuery: 'Mano del Desierto Antofagasta Chile',
            amenities: ['Monumento Internacional', 'Área de Estacionamento Ampla']
          },
          {
            id: 'at-d5-s3',
            type: 'almoco',
            title: 'Parada Gastronômica: Puerto Antofagasta no Oceano Pacífico',
            subtitle: 'Almoço de frutos do mar frescos com vista para as ondas do mar chileno',
            kmFromStart: 385,
            legKm: 75,
            legDurationMinutes: 60,
            estimatedTimeArrival: '13:00 - 14:30',
            description: 'Transição completa do deserto para o mar. Peixes frescos como congrio e corvina nos restaurantes do calçadão.',
            motocycleTip: 'Aproveite a brisa marinha para descansar após os dias secos do deserto.',
            googleMapsPlaceQuery: 'Muelle Historico Antofagasta Chile',
            amenities: ['Restaurantes Marítimos', 'Estacionamento Seguro']
          },
          {
            id: 'at-d5-s4',
            type: 'gasolina',
            title: 'Parada de Retorno: Copec Calama Panamericana',
            subtitle: 'Reabastecimento e revisão mecânica de pneus para o trajeto de volta ao Brasil',
            kmFromStart: 600,
            legKm: 215,
            legDurationMinutes: 130,
            estimatedTimeArrival: '17:30',
            description: 'Polo urbano de suporte com oficinas especializadas e troca de óleo se necessário após a poeira do deserto.',
            motocycleTip: 'Limpe ou troque o filtro de ar da moto caso tenha rodado por trechos arenosos do deserto.',
            googleMapsPlaceQuery: 'Copec Calama Chile Ruta 25',
            amenities: ['Mecânica Próxima', 'Conveniência 24h', 'Lavagem a Seco']
          }
        ]
      }
    ]
  }
];
