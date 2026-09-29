import React from 'react';
import { MotorcycleRoute } from '../types/route';
import { Lock, Unlock, Clock, Calendar, Navigation, ArrowRight } from 'lucide-react';

interface RouteCardProps {
  route: MotorcycleRoute;
  isUnlocked: boolean;
  onOpenDetails: (route: MotorcycleRoute) => void;
  onRequestPurchase: (route: MotorcycleRoute) => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({
  route,
  isUnlocked,
  onOpenDetails,
  onRequestPurchase
}) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-stone-200/90 bg-white shadow-xs overflow-hidden transition-all hover:border-stone-300 hover:shadow-md">
      
      {/* Route Image Container */}
      <div className="relative aspect-16/9 w-full overflow-hidden bg-stone-100">
        <img
          src={route.image}
          alt={route.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Graceful fallback if image has issue
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Clean unboxed category label with subtle backdrop */}
        <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-white tracking-wide">
          {route.categoryLabel}
        </div>

        {/* Status Lock/Unlocked */}
        <div className="absolute top-3 right-3">
          {isUnlocked ? (
            <div className="flex items-center gap-1 bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-white">
              <Unlock className="h-3 w-3" />
              <span>Desbloqueado</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-300">
              <Lock className="h-3 w-3" />
              <span>R$ {route.priceBrl.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Origin -> Destination Banner at bottom of image */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent p-3 text-white text-xs">
          <p className="font-medium truncate drop-shadow-xs">
            {route.origin} → {route.destination}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Title */}
        <h3 className="text-lg font-bold text-stone-900 leading-snug font-display group-hover:text-amber-700 transition-colors">
          {route.name}
        </h3>

        {/* Clean Unboxed Metadata with Typographic Separators (Zero-Pill Compliance) */}
        <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600">
          <span className="flex items-center gap-1 font-mono tabular-nums text-stone-800">
            <Calendar className="h-3.5 w-3.5 text-stone-400" />
            {route.daysCount} {route.daysCount === 1 ? 'dia' : 'dias'}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1 font-mono tabular-nums font-semibold text-stone-800">
            <Navigation className="h-3.5 w-3.5 text-stone-400" />
            {route.totalKm.toLocaleString('pt-BR')} km
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1 font-mono tabular-nums text-stone-700">
            <Clock className="h-3.5 w-3.5 text-stone-400" />
            {route.totalDurationHours}
          </span>
        </div>

        {/* Short description */}
        <p className="mt-3 text-xs text-stone-600 leading-relaxed line-clamp-2">
          {route.shortDescription}
        </p>

        {/* Highlights preview */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex-1">
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1.5">
            Destaques do Roteiro
          </span>
          <ul className="space-y-1">
            {route.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="text-xs text-stone-700 flex items-start gap-1.5">
                <span className="text-amber-600 font-bold shrink-0">›</span>
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Rule Note */}
        <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-amber-50/70 border border-amber-200/50 text-[11px] text-amber-900 flex items-center justify-between">
          <span>Paradas planejadas:</span>
          <strong className="font-semibold">≤ 150 km ou 2h</strong>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-2">
          {isUnlocked ? (
            <button
              onClick={() => onOpenDetails(route)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-stone-900 py-2.5 px-4 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 active:scale-98 transition-all"
            >
              <span>Ver Roteiro Dia a Dia</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRequestPurchase(route)}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-stone-900 py-2.5 px-3 text-xs font-semibold text-white shadow-xs hover:bg-amber-600 active:scale-98 transition-all"
              >
                <Lock className="h-3.5 w-3.5 text-amber-300" />
                <span>Comprar Roteiro (R$ {route.priceBrl.toFixed(2)})</span>
              </button>
              <button
                onClick={() => onOpenDetails(route)}
                title="Ver resumo básico antes de comprar"
                className="rounded-xl border border-stone-200 bg-stone-50 p-2.5 text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
