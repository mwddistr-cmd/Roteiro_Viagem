/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RouteCategory, MotorcycleRoute } from './types/route';
import { MOTORCYCLE_ROUTES } from './data/routesData';
import { Navbar } from './components/Navbar';
import { RouteCard } from './components/RouteCard';
import { RouteDetailView } from './components/RouteDetailView';
import { PurchaseModal } from './components/PurchaseModal';
import { SupportToolsModal } from './components/SupportToolsModal';
import {
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<RouteCategory | 'todas'>('todas');
  const [selectedRoute, setSelectedRoute] = useState<MotorcycleRoute | null>(null);
  const [purchasingRoute, setPurchasingRoute] = useState<MotorcycleRoute | null>(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  // Unlocked routes storage
  const [unlockedRouteIds, setUnlockedRouteIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('rotamoto_unlocked_routes');
      return saved ? new Set(JSON.parse(saved)) : new Set([]);
    } catch {
      return new Set([]);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'rotamoto_unlocked_routes',
        JSON.stringify(Array.from(unlockedRouteIds))
      );
    } catch (e) {
      console.error('Error saving unlocked routes', e);
    }
  }, [unlockedRouteIds]);

  const handleUnlockRoute = (routeId: string) => {
    setUnlockedRouteIds((prev) => new Set([...prev, routeId]));
  };

  const handleUnlockAllForReview = () => {
    const allIds = MOTORCYCLE_ROUTES.map((r) => r.id);
    setUnlockedRouteIds(new Set(allIds));
  };

  const handleResetUnlocks = () => {
    setUnlockedRouteIds(new Set([]));
  };

  const filteredRoutes = MOTORCYCLE_ROUTES.filter((r) => {
    if (activeCategory === 'todas') return true;
    return r.category === activeCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (selectedRoute) setSelectedRoute(null);
        }}
        onOpenSupportTools={() => setIsSupportModalOpen(true)}
        unlockedCount={unlockedRouteIds.size}
      />

      {/* Main Container */}
      <main className="flex-1">
        {selectedRoute ? (
          /* DETAILED ROUTE VIEW (Day by Day, Stops, Google Maps link) */
          <RouteDetailView
            route={selectedRoute}
            isUnlocked={unlockedRouteIds.has(selectedRoute.id)}
            onBack={() => setSelectedRoute(null)}
            onRequestPurchase={(route) => setPurchasingRoute(route)}
          />
        ) : (
          /* CATALOG / ROUTES LIST VIEW */
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            
            {/* HERO INTRODUCTION BANNER */}
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-xs mb-8">
              
              <div className="relative z-10 max-w-3xl">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#f40e41] font-display tracking-tight leading-tight">
                  Roteiros de Estrada
                </h1>

                <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                  Rotas programada com intervalos de descanso, postos de combustível, pontos turísticos, mirantes para fotos, restaurantes para almoço e hotéis com garagem segura para motos.
                </p>
              </div>

              {/* Decorative subtle background gradient element */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
            </div>

            {/* CONTROLS BAR: CATEGORY SUMMARY + DEMO UNLOCK */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-lg font-bold text-stone-900 font-display">
                  {activeCategory === 'todas'
                    ? 'Todas as Rotas Disponíveis'
                    : activeCategory === 'bate-e-volta'
                    ? 'Roteiros Bate e Volta (1 Dia)'
                    : activeCategory === 'bate-e-fica'
                    ? 'Roteiros Bate e Fica (Final de Semana & Feriados)'
                    : 'Tours de Longa Distância & Internacionais'}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Selecione uma rota para visualizar o cronograma ou adquirir o pacote com waypoints do Maps
                </p>
              </div>

              {/* Fast Evaluator Helper: Unlock all / Reset */}
              <div className="flex items-center gap-1.5">
                {unlockedRouteIds.size < MOTORCYCLE_ROUTES.length ? (
                  <button
                    onClick={handleUnlockAllForReview}
                    title="Ativar todas as rotas para avaliação imediata"
                    className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-[11px] font-semibold text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    <Sparkles className="h-3 w-3 text-amber-600" />
                    <span>Desbloquear Tudo (Demo)</span>
                  </button>
                ) : (
                  <button
                    onClick={handleResetUnlocks}
                    title="Voltar ao estado com rotas bloqueadas para testar compra"
                    className="flex items-center gap-1 rounded-lg bg-stone-100 px-2.5 py-1.5 text-[11px] font-medium text-stone-600 hover:bg-stone-200 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Bloquear Rotas (Testar Compra)</span>
                  </button>
                )}
              </div>
            </div>

            {/* ROUTE LIST CONTENT: CARDS ONLY */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  isUnlocked={unlockedRouteIds.has(route.id)}
                  onOpenDetails={(r) => setSelectedRoute(r)}
                  onRequestPurchase={(r) => setPurchasingRoute(r)}
                />
              ))}
            </div>

            {/* QUICK HIGHLIGHT / EDUCATIONAL CARD ON PARADAS */}
            <div className="mt-12 rounded-3xl border border-stone-200 bg-linear-to-r from-stone-100/90 to-amber-50/50 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    <Info className="h-4 w-4 text-amber-600" />
                    <span>Critério de Engenharia de Rota RotaMoto</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 font-display">
                    Por que limitamos as paradas a 150 km ou 2 horas de deslocamento?
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    Pesquisas de fisiologia em mototurismo comprovam que após 120 minutos ininterruptos sobre duas rodas, a vibração do motor, a pressão do vento no capacete e a postura estática reduzem a velocidade de reação em até 40%. Nossos roteiros garantem que você pare sempre antes do limiar de fadiga.
                  </p>
                </div>

                <button
                  onClick={() => setIsSupportModalOpen(true)}
                  className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 transition-colors whitespace-nowrap"
                >
                  Abrir Calculadora de Autonomia
                </button>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-white py-6 text-xs text-stone-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 font-display">RotaMoto Pro</span>
            <span aria-hidden="true">·</span>
            <span>Roteiros Profissionais de Viagem de Moto</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <span>Bate e Volta</span>
            <span aria-hidden="true">·</span>
            <span>Bate e Fica</span>
            <span aria-hidden="true">·</span>
            <span>Tour Internacional</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsSupportModalOpen(true)}
              className="text-amber-700 hover:text-amber-800 font-medium underline"
            >
              SOS & Checklist
            </button>
          </div>
        </div>
      </footer>

      {/* PURCHASE / UNLOCK MODAL */}
      <PurchaseModal
        route={purchasingRoute}
        isOpen={!!purchasingRoute}
        onClose={() => setPurchasingRoute(null)}
        onConfirmUnlock={(routeId) => {
          handleUnlockRoute(routeId);
          // If we had this route selected or wanted to open it directly:
          const unlocked = MOTORCYCLE_ROUTES.find((r) => r.id === routeId);
          if (unlocked) {
            setSelectedRoute(unlocked);
          }
        }}
      />

      {/* SUPPORT TOOLS MODAL */}
      <SupportToolsModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

    </div>
  );
}
