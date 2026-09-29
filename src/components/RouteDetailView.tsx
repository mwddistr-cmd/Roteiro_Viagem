import React, { useState } from 'react';
import { MotorcycleRoute, StopType } from '../types/route';
import {
  ArrowLeft,
  Navigation,
  Clock,
  Calendar,
  AlertTriangle,
  Hotel,
  Fuel,
  Camera,
  Coffee,
  UtensilsCrossed,
  MapPin,
  ExternalLink,
  ShieldAlert,
  Copy,
  Check,
  Lock,
  Sparkles
} from 'lucide-react';

interface RouteDetailViewProps {
  route: MotorcycleRoute;
  isUnlocked: boolean;
  onBack: () => void;
  onRequestPurchase: (route: MotorcycleRoute) => void;
}

export const RouteDetailView: React.FC<RouteDetailViewProps> = ({
  route,
  isUnlocked,
  onBack,
  onRequestPurchase
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeDay = route.days.find((d) => d.dayNumber === selectedDayNumber) || route.days[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(route.googleMapsFullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getStopTypeBadge = (type: StopType) => {
    switch (type) {
      case 'gasolina':
        return {
          icon: Fuel,
          label: 'Posto de Gasolina',
          bg: 'bg-amber-100 text-amber-900 border-amber-200'
        };
      case 'descanso':
        return {
          icon: Coffee,
          label: 'Parada para Descanso',
          bg: 'bg-stone-100 text-stone-900 border-stone-200'
        };
      case 'foto':
        return {
          icon: Camera,
          label: 'Parada para Foto',
          bg: 'bg-sky-100 text-sky-900 border-sky-200'
        };
      case 'turismo':
        return {
          icon: MapPin,
          label: 'Parada para Turismo',
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-200'
        };
      case 'almoco':
        return {
          icon: UtensilsCrossed,
          label: 'Almoço na Estrada',
          bg: 'bg-orange-100 text-orange-900 border-orange-200'
        };
      case 'hotel':
        return {
          icon: Hotel,
          label: 'Hotel / Pernoite com Garagem',
          bg: 'bg-indigo-100 text-indigo-900 border-indigo-200'
        };
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 animate-fade-in">
      
      {/* Top back navigation */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-stone-700 border border-stone-200 shadow-2xs hover:bg-stone-50 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para Lista de Roteiros</span>
        </button>

        {!isUnlocked && (
          <button
            onClick={() => onRequestPurchase(route)}
            className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-amber-600 active:scale-95 transition-all"
          >
            <Lock className="h-3.5 w-3.5 text-amber-300" />
            <span>Desbloquear Roteiro (R$ {route.priceBrl.toFixed(2)})</span>
          </button>
        )}
      </div>

      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xs mb-8">
        
        {/* Banner image with overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
          <img
            src={route.image}
            alt={route.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          
          <div className="absolute bottom-6 inset-x-6 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>{route.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Dificuldade: {route.difficulty}</span>
              <span aria-hidden="true">·</span>
              <span>Asfalto: {route.asphaltCondition}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
              {route.name}
            </h1>
            
            <p className="mt-1 text-xs sm:text-sm text-stone-300">
              {route.origin} → {route.destination}
            </p>
          </div>
        </div>

        {/* High Contrast Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 border-b border-stone-200 bg-stone-50/80 text-stone-900">
          <div className="p-4 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <span className="block text-[11px] text-stone-500 font-medium uppercase">Duração</span>
              <span className="text-sm font-bold font-mono tabular-nums">{route.daysCount} {route.daysCount === 1 ? 'Dia' : 'Dias'}</span>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <Navigation className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <span className="block text-[11px] text-stone-500 font-medium uppercase">Distância Total</span>
              <span className="text-sm font-bold font-mono tabular-nums">{route.totalKm.toLocaleString('pt-BR')} km</span>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <span className="block text-[11px] text-stone-500 font-medium uppercase">Tempo em Rota</span>
              <span className="text-sm font-bold font-mono tabular-nums">{route.totalDurationHours}</span>
            </div>
          </div>

          <div className="p-4 flex items-center gap-3 bg-amber-50/60">
            <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0" />
            <div>
              <span className="block text-[11px] text-amber-800 font-semibold uppercase">Regra de Parada</span>
              <span className="text-xs font-bold text-amber-900">≤ 150 km ou 2 horas</span>
            </div>
          </div>
        </div>

        {/* Route Description & Season */}
        <div className="p-6">
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {route.fullDescription}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-600 pt-4 border-t border-stone-100">
            <div>
              <strong className="text-stone-900">Melhor Época para Rodar:</strong> {route.bestSeason}
            </div>
          </div>
        </div>
      </div>

      {/* LOCKED STATE BANNER */}
      {!isUnlocked && (
        <div className="mb-8 rounded-3xl border-2 border-dashed border-amber-300 bg-linear-to-br from-amber-50/80 via-white to-stone-50 p-6 sm:p-8 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-amber-300 mb-4 shadow-sm">
            <Lock className="h-6 w-6" />
          </div>
          
          <h2 className="text-xl font-bold text-stone-900 font-display">
            Acesso Completo ao Roteiro & Waypoints do Google Maps
          </h2>
          
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-stone-600">
            Este roteiro possui {route.days.reduce((acc, d) => acc + d.stops.length, 0)} paradas minuciosamente mapeadas com postos de combustível de confiança, pontos de foto exclusivos, dicas para curvas, paradas gastronômicas e botões para carregar direto no Google Maps do seu celular.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onRequestPurchase(route)}
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-600 active:scale-95 transition-all"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Desbloquear Roteiro Completo por R$ {route.priceBrl.toFixed(2)}</span>
            </button>
            
            <button
              onClick={() => onRequestPurchase(route)}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-stone-800 border border-stone-300 hover:bg-stone-50 transition-colors"
            >
              <span>Testar Desbloqueio Rápido</span>
            </button>
          </div>
        </div>
      )}

      {/* DAY BY DAY ITINERARY TABS (if multi-day) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-display">
            Cronograma Detalhado Dia a Dia
          </h2>
          <p className="text-xs text-stone-500">
            Paradas programadas rigorosamente em no máximo 150 km ou 2 horas de deslocamento
          </p>
        </div>

        {/* Days selector */}
        {route.days.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-stone-100 rounded-xl">
            {route.days.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNumber(day.dayNumber)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedDayNumber === day.dayNumber
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Dia {day.dayNumber}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ACTIVE DAY SUMMARY CARD */}
      <div className="mb-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              {activeDay.dayTitle}
            </h3>
            <span className="text-xs text-stone-500 font-medium">
              {activeDay.startLocation} → {activeDay.endLocation}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono tabular-nums">
            <span className="font-semibold text-stone-800">{activeDay.totalDayKm} km no dia</span>
            <span className="text-stone-300">·</span>
            <span className="text-stone-600">{activeDay.totalDayDuration}</span>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {activeDay.summary}
        </p>

        {/* Day Google Maps Button */}
        {isUnlocked && (
          <div className="mt-4 pt-3 border-t border-stone-100 flex justify-end">
            <a
              href={activeDay.googleMapsDayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-100 hover:bg-stone-200 px-3.5 py-2 text-xs font-semibold text-stone-900 transition-colors"
            >
              <Navigation className="h-3.5 w-3.5 text-amber-600" />
              <span>Abrir Rota do Dia {activeDay.dayNumber} no Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>

      {/* STOPS TIMELINE */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Paradas Estruturadas (Ida, Meio e Volta)
          </h4>
          <span className="text-[11px] text-stone-400 font-mono">
            {activeDay.stops.length} paradas planejadas
          </span>
        </div>

        <div className="relative border-l-2 border-stone-200 ml-4 sm:ml-6 pl-4 sm:pl-6 space-y-6">
          {activeDay.stops.map((stop, idx) => {
            const badge = getStopTypeBadge(stop.type);
            const BadgeIcon = badge.icon;
            const isBlurPreview = !isUnlocked && idx > 1; // Show first 2 stops as teaser, lock rest

            return (
              <div key={stop.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-stone-900 text-white shadow-xs ring-4 ring-white">
                  <BadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-300" />
                </div>

                {/* Stop Card */}
                <div
                  className={`rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs transition-all ${
                    isBlurPreview ? 'filter blur-[3px] select-none pointer-events-none opacity-60' : ''
                  }`}
                >
                  {/* Top line: type badge & interval math */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${badge.bg}`}
                    >
                      <BadgeIcon className="h-3 w-3" />
                      <span>{badge.label}</span>
                    </span>

                    {/* Strict intervals verification: <= 150 km and <= 120 min */}
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-500 tabular-nums">
                      <span>{stop.legKm} km deste ponto</span>
                      <span aria-hidden="true">·</span>
                      <span>~{stop.legDurationMinutes} min</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                        Prev: {stop.estimatedTimeArrival}
                      </span>
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <h5 className="text-base font-bold text-stone-900 font-display">
                    {stop.title}
                  </h5>
                  <p className="text-xs text-stone-500 font-medium mb-3">
                    {stop.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {stop.description}
                  </p>

                  {/* Motorcycle Pilot Tip */}
                  <div className="mt-3 rounded-xl bg-amber-50/70 border border-amber-200/60 p-3 text-xs text-amber-950 flex items-start gap-2.5">
                    <div className="mt-0.5 shrink-0 rounded bg-amber-200/80 p-0.5 text-amber-900 font-bold text-[10px]">
                      MOTO
                    </div>
                    <div>
                      <strong className="font-semibold">Dica de Estrada: </strong>
                      <span>{stop.motocycleTip}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  {stop.amenities && stop.amenities.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {stop.amenities.map((amenity, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Direct point google maps search */}
                  {isUnlocked && (
                    <div className="mt-3 pt-2 flex justify-end">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          stop.googleMapsPlaceQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-amber-700 font-medium"
                      >
                        <MapPin className="h-3.5 w-3.5 text-amber-600" />
                        <span>Ver local exato no mapa</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Teaser unlock trigger overlay if blurred */}
                {isBlurPreview && idx === 2 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-xs rounded-2xl border border-stone-200 text-center">
                    <Lock className="h-5 w-5 text-stone-800 mb-1" />
                    <span className="text-xs font-bold text-stone-900">
                      Paradas 3 a {activeDay.stops.length} bloqueadas
                    </span>
                    <button
                      onClick={() => onRequestPurchase(route)}
                      className="mt-2 rounded-lg bg-stone-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-amber-600 transition-colors"
                    >
                      Desbloquear Roteiro
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* HOTEL RECOMMENDATION (For multi-day routes) */}
      {activeDay.hotelSuggestion && (
        <div className="mb-10 rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">
            <Hotel className="h-4 w-4 text-indigo-700" />
            <span>Hospedagem Recomendada para Motociclistas (Fim do Dia {activeDay.dayNumber})</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-3 mt-2">
            <div>
              <h4 className="text-base font-bold text-stone-900 font-display">
                {activeDay.hotelSuggestion.name}
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                {activeDay.hotelSuggestion.location}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono font-semibold text-indigo-900 bg-indigo-100/80 px-2.5 py-1 rounded-md">
                {activeDay.hotelSuggestion.priceRange}
              </span>
            </div>
          </div>

          <p className="mt-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {activeDay.hotelSuggestion.description}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/80 w-fit">
            <Check className="h-3.5 w-3.5 text-emerald-600" />
            <span>Garagem privativa fechada e coberta para motocicletas confirmada</span>
          </div>
        </div>
      )}

      {/* RISKS AND THREATS SECTION */}
      <div className="mb-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-xs">
        <div className="flex items-center gap-2 border-b border-stone-100 pb-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              Avisos Importantes e Possíveis Problemas na Rota
            </h3>
            <p className="text-xs text-stone-500">
              Fatores climáticos, de pista e mecânicos mapeados para a sua segurança
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {route.risks.map((risk) => {
            const isCritical = risk.level === 'critico';
            return (
              <div
                key={risk.id}
                className={`rounded-2xl p-4 border ${
                  isCritical
                    ? 'border-red-200 bg-red-50/50'
                    : 'border-amber-200/80 bg-amber-50/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-xs font-bold text-stone-900">
                    {risk.title}
                  </h4>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isCritical
                        ? 'bg-red-200 text-red-900'
                        : 'bg-amber-200 text-amber-900'
                    }`}
                  >
                    {risk.level}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed mb-2.5">
                  <strong>Ameaça:</strong> {risk.threat}
                </p>

                <div className="text-xs text-stone-800 bg-white/80 p-2.5 rounded-xl border border-stone-200/60">
                  <strong className="text-stone-900">Como prevenir / agir:</strong> {risk.mitigation}
                </div>

                {risk.recommendedGear && (
                  <div className="mt-2 text-[11px] text-stone-600 italic">
                    Equipamento recomendado: {risk.recommendedGear}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CHECKLIST HIGHLIGHT */}
      <div className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
          Equipamentos Específicos para Esta Rota
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
          {route.equipmentChecklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-stone-200/70">
              <span className="text-amber-600 font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ACTION SECTION: GOOGLE MAPS & COPIAR LINK */}
      <div className="mt-8 mb-12 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              Roteiro no Google Maps
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-xl leading-relaxed">
              Ao abrir no celular, o Google Maps traça automaticamente o roteiro pelas rodovias e estradas reais, com todas as paradas estruturadas na ordem exata de viagem.
            </p>
          </div>

          {isUnlocked ? (
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 px-4 py-2.5 text-xs font-semibold text-stone-700 border border-stone-200 transition-colors"
              >
                {copiedLink ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copiedLink ? 'Link Copiado!' : 'Copiar Link'}</span>
              </button>
              <a
                href={route.googleMapsFullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 px-5 py-2.5 text-xs font-bold text-stone-950 shadow-xs transition-all"
              >
                <Navigation className="h-4 w-4" />
                <span>Abrir Roteiro Completo no Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ) : (
            <button
              onClick={() => onRequestPurchase(route)}
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-amber-600 active:scale-95 transition-all"
            >
              <Lock className="h-3.5 w-3.5 text-amber-300" />
              <span>Desbloquear Roteiro Completo (R$ {route.priceBrl.toFixed(2)})</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
