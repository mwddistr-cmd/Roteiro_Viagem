import React, { useState } from 'react';
import { X, Fuel, CheckSquare, PhoneCall, Calculator, AlertCircle, Phone, Info } from 'lucide-react';

interface SupportToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportToolsModal: React.FC<SupportToolsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'calculadora' | 'checklist' | 'sos'>('calculadora');

  // Calculadora state
  const [tankCapacity, setTankCapacity] = useState<number>(18);
  const [fuelReserve, setFuelReserve] = useState<number>(3.5);
  const [fuelConsumption, setFuelConsumption] = useState<number>(19);

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    pneus: true,
    corrente: true,
    oleo: true,
    freios: true,
    kit_pneu: false,
    capa_chuva: true,
    documentos: true
  });

  if (!isOpen) return null;

  // Calculadora math
  const usableFuel = Math.max(1, tankCapacity - fuelReserve);
  const safeRange = Math.round(usableFuel * fuelConsumption);
  const maxRange = Math.round(tankCapacity * fuelConsumption);
  const recommendedStop = Math.min(safeRange, 150); // adherence to <= 150km rule

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistSections = [
    {
      title: 'Mecânica & Moto',
      items: [
        { id: 'pneus', label: 'Calibragem dos pneus a frio (conforme manual com bagagem)' },
        { id: 'corrente', label: 'Tensão e lubrificação da corrente / transmissão' },
        { id: 'oleo', label: 'Nível e viscosidade do óleo do motor' },
        { id: 'freios', label: 'Espessura das pastilhas e nível do fluido de freio' },
        { id: 'luzes', label: 'Farol alto/baixo, lanterna traseira e piscas operantes' }
      ]
    },
    {
      title: 'Kit de Emergência de Estrada',
      items: [
        { id: 'kit_pneu', label: 'Kit de reparo rápido de pneu sem câmara (macarrão + CO2 / mini compressor)' },
        { id: 'ferramentas', label: 'Jogo de chaves da moto, fita silver tape e enforca-gato' },
        { id: 'capa_chuva', label: 'Capa de chuva técnica e luvas extras secas' },
        { id: 'lanterna', label: 'Lanterna de cabeça LED com bateria carregada' }
      ]
    },
    {
      title: 'Documentação & Fronteira',
      items: [
        { id: 'documentos', label: 'CRLV da moto e CNH válidos' },
        { id: 'rg_passaporte', label: 'RG com menos de 10 anos de emissão ou Passaporte (para viagens internacionais)' },
        { id: 'carta_verde', label: 'Seguro Internacional Carta Verde impresso (Argentina)' },
        { id: 'soapex', label: 'Seguro Obrigatório SOAPEX contratado (Chile)' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-stone-200 bg-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200/80 px-6 py-4 bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-amber-300">
              <Fuel className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 font-display">
                Ferramentas de Estrada do Motociclista
              </h3>
              <p className="text-xs text-stone-500">
                Suporte rápido para planejamento de autonomia, segurança e SOS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-stone-400 hover:bg-stone-200 hover:text-stone-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-100/50 p-2 gap-1">
          <button
            onClick={() => setActiveTab('calculadora')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'calculadora'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calculator className="h-3.5 w-3.5 text-amber-600" />
            <span>Calculadora de Autonomia</span>
          </button>
          
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'checklist'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
            <span>Checklist Pré-Viagem</span>
          </button>

          <button
            onClick={() => setActiveTab('sos')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'sos'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <PhoneCall className="h-3.5 w-3.5 text-red-600" />
            <span>SOS & Emergência</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* TAB 1: CALCULADORA DE AUTONOMIA */}
          {activeTab === 'calculadora' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">
                  Planejamento de Combustível & Ponto Seguro de Abastecimento
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calcule a autonomia segura da sua moto para nunca entrar na reserva durante trechos remotos.
                </p>
              </div>

              {/* Input Form */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tanque Total (Litros)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="40"
                    step="0.5"
                    value={tankCapacity}
                    onChange={(e) => setTankCapacity(parseFloat(e.target.value) || 0)}
                    className="w-full rounded-xl border border-stone-300 px-3 py-2 text-sm font-mono focus:border-amber-500 focus:outline-none"
                  />
                  <span className="text-[11px] text-stone-400 mt-1 block">Ex: 18L (GS 850/Tiger 900)</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Reserva de Segurança (L)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    step="0.5"
                    value={fuelReserve}
                    onChange={(e) => setFuelReserve(parseFloat(e.target.value) || 0)}
                    className="w-full rounded-xl border border-stone-300 px-3 py-2 text-sm font-mono focus:border-amber-500 focus:outline-none"
                  />
                  <span className="text-[11px] text-stone-400 mt-1 block">Média: 3 a 4 Litros</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Consumo Médio (km/L)
                  </label>
                  <input
                    type="number"
                    min="8"
                    max="45"
                    step="0.5"
                    value={fuelConsumption}
                    onChange={(e) => setFuelConsumption(parseFloat(e.target.value) || 0)}
                    className="w-full rounded-xl border border-stone-300 px-3 py-2 text-sm font-mono focus:border-amber-500 focus:outline-none"
                  />
                  <span className="text-[11px] text-stone-400 mt-1 block">Média de viagem com malas</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl bg-stone-100 p-4 border border-stone-200">
                  <span className="text-[11px] font-semibold uppercase text-stone-500 block">
                    Autonomia Total (Seco)
                  </span>
                  <span className="text-2xl font-bold font-mono text-stone-800">
                    {maxRange} km
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">Até esgotar completamente</span>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4 border border-amber-200">
                  <span className="text-[11px] font-semibold uppercase text-amber-800 block">
                    Autonomia Segura
                  </span>
                  <span className="text-2xl font-bold font-mono text-amber-950">
                    {safeRange} km
                  </span>
                  <span className="text-[11px] text-amber-800 block mt-1">Antes de acender a luz da reserva</span>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-200">
                  <span className="text-[11px] font-semibold uppercase text-emerald-800 block">
                    Parada Recomendada
                  </span>
                  <span className="text-2xl font-bold font-mono text-emerald-950">
                    {recommendedStop} km
                  </span>
                  <span className="text-[11px] text-emerald-700 block mt-1">Limite da regra de segurança</span>
                </div>
              </div>

              {/* Golden Safety Rule Notice */}
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <strong className="font-semibold">Regra de Ouro RotaMoto:</strong> Mesmo que sua moto tenha autonomia superior a 350 km, recomendamos enfaticamente <strong>parar a cada no máximo 150 km ou 2 horas</strong>. O descanso hidrata o piloto, relaxa a lombar e evita a fadiga cognitiva, mantendo seus reflexos 100% afiados para as curvas.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CHECKLIST PRÉ-VIAGEM */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-display">
                    Checklist Pré-Viagem do Piloto
                  </h4>
                  <p className="text-xs text-stone-500">
                    Itens essenciais para checar antes de dar a partida e entrar na rodovia
                  </p>
                </div>
                <button
                  onClick={() => setCheckedItems({})}
                  className="text-xs text-stone-500 hover:text-stone-900 underline"
                >
                  Limpar marcas
                </button>
              </div>

              {checklistSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    {section.title}
                  </h5>
                  <div className="space-y-1.5">
                    {section.items.map((item) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <label
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-emerald-50/60 border-emerald-200 text-stone-800'
                              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-0.5 h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span className={`text-xs leading-relaxed ${isChecked ? 'font-medium' : ''}`}>
                            {item.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: SOS & EMERGÊNCIA */}
          {activeTab === 'sos' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">
                  Telefones de Emergência e Resgate Rodoviário
                </h4>
                <p className="text-xs text-stone-500">
                  Tenha sempre estes contatos salvos na agenda do celular para discagem offline
                </p>
              </div>

              {/* Brasil Números */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Serviços Públicos Nacionais (Brasil)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <a
                    href="tel:191"
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors"
                  >
                    <div>
                      <strong className="block text-stone-900">Polícia Rodoviária (PRF)</strong>
                      <span className="text-[11px] text-stone-500">Rodovias Federais</span>
                    </div>
                    <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded">191</span>
                  </a>

                  <a
                    href="tel:192"
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors"
                  >
                    <div>
                      <strong className="block text-stone-900">SAMU (Ambulância)</strong>
                      <span className="text-[11px] text-stone-500">Resgate Médico</span>
                    </div>
                    <span className="font-mono font-bold text-red-700 bg-red-100 px-2 py-1 rounded">192</span>
                  </a>

                  <a
                    href="tel:193"
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors"
                  >
                    <div>
                      <strong className="block text-stone-900">Corpo de Bombeiros</strong>
                      <span className="text-[11px] text-stone-500">Resgate e Acidentes</span>
                    </div>
                    <span className="font-mono font-bold text-red-700 bg-red-100 px-2 py-1 rounded">193</span>
                  </a>
                </div>
              </div>

              {/* Concessionárias Principais */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  SOS Concessionárias dos Roteiros
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                    <div>
                      <strong className="text-stone-900 block">Ecopistas (Ayrton Senna / Carvalho Pinto - Campos do Jordão)</strong>
                      <span className="text-stone-500 text-[11px]">Guincho mecânico gratuito e socorro médico</span>
                    </div>
                    <a href="tel:08007770070" className="font-mono text-amber-700 font-bold bg-amber-50 px-2 py-1 rounded">
                      0800 777 0070
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                    <div>
                      <strong className="text-stone-900 block">Arteris Litoral Sul (BR-101 Florianópolis / Tubarão - Urubici)</strong>
                      <span className="text-stone-500 text-[11px]">Resgate 24h e monitoramento</span>
                    </div>
                    <a href="tel:08007251771" className="font-mono text-amber-700 font-bold bg-amber-50 px-2 py-1 rounded">
                      0800 725 1771
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                    <div>
                      <strong className="text-stone-900 block">Gendarmería Nacional Argentina (Paso de Jama / Andes)</strong>
                      <span className="text-stone-500 text-[11px]">Polícia de fronteira e resgate andino</span>
                    </div>
                    <span className="font-mono text-stone-700 font-bold bg-stone-100 px-2 py-1 rounded">
                      0800-888-8804
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                    <div>
                      <strong className="text-stone-900 block">Carabineros de Chile (Atacama / San Pedro)</strong>
                      <span className="text-stone-500 text-[11px]">Emergências policiais e rodoviárias</span>
                    </div>
                    <span className="font-mono text-stone-700 font-bold bg-stone-100 px-2 py-1 rounded">
                      133
                    </span>
                  </div>
                </div>
              </div>

              {/* Dica de Segurança em Acidente */}
              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
                <Info className="h-4 w-4 text-stone-500 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Em caso de parada de emergência na rodovia:</strong> Nunca fique parado na traseira da moto no acostamento. Posicione a moto o mais afastada possível da faixa de rolamento, ligue o pisca-alerta e aguarde o resgate <strong>atrás da mureta metálica ou guard rail de proteção</strong>.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 px-6 py-3 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            RotaMoto Pro · Assistência ao Piloto
          </span>
          <button
            onClick={onClose}
            className="rounded-xl bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
