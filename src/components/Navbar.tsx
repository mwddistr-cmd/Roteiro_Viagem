import React from 'react';
import { RouteCategory } from '../types/route';
import { Wrench, ShieldCheck, Compass } from 'lucide-react';

interface NavbarProps {
  activeCategory: RouteCategory | 'todas';
  onSelectCategory: (cat: RouteCategory | 'todas') => void;
  onOpenSupportTools: () => void;
  unlockedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSupportTools,
  unlockedCount
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectCategory('todas')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-900 text-amber-300 font-bold transition-transform group-hover:scale-105">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-stone-900 font-display">
              RotaMoto <span className="text-amber-600 font-semibold">Pro</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links / category triggers */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200/60">
          <button
            onClick={() => onSelectCategory('todas')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeCategory === 'todas'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Todos os Roteiros
          </button>
          <button
            onClick={() => onSelectCategory('bate-e-volta')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeCategory === 'bate-e-volta'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Bate e Volta
          </button>
          <button
            onClick={() => onSelectCategory('bate-e-fica')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeCategory === 'bate-e-fica'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Bate e Fica
          </button>
          <button
            onClick={() => onSelectCategory('tour')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeCategory === 'tour'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tour Internacional
          </button>
        </nav>

        {/* Zone 3: Primary actions & Support Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Support Tools */}
          <button
            onClick={onOpenSupportTools}
            className="flex items-center gap-1.5 rounded-lg bg-stone-900 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 active:scale-95 transition-all"
          >
            <Wrench className="h-4 w-4 text-amber-300" />
            <span className="hidden sm:inline">Ferramentas de Estrada</span>
            <span className="sm:hidden">Ferramentas</span>
          </button>

          {unlockedCount > 0 && (
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>{unlockedCount} roteiro{unlockedCount > 1 ? 's' : ''} ativo{unlockedCount > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

      </div>

      {/* Mobile sub-tabs */}
      <div className="flex md:hidden border-t border-stone-200/80 bg-stone-50/90 px-3 py-1.5 overflow-x-auto gap-1">
        <button
          onClick={() => onSelectCategory('todas')}
          className={`shrink-0 px-3 py-1 text-xs font-medium rounded-md ${
            activeCategory === 'todas' ? 'bg-stone-900 text-white' : 'text-stone-600'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => onSelectCategory('bate-e-volta')}
          className={`shrink-0 px-3 py-1 text-xs font-medium rounded-md ${
            activeCategory === 'bate-e-volta' ? 'bg-stone-900 text-white' : 'text-stone-600'
          }`}
        >
          Bate e Volta
        </button>
        <button
          onClick={() => onSelectCategory('bate-e-fica')}
          className={`shrink-0 px-3 py-1 text-xs font-medium rounded-md ${
            activeCategory === 'bate-e-fica' ? 'bg-stone-900 text-white' : 'text-stone-600'
          }`}
        >
          Bate e Fica
        </button>
        <button
          onClick={() => onSelectCategory('tour')}
          className={`shrink-0 px-3 py-1 text-xs font-medium rounded-md ${
            activeCategory === 'tour' ? 'bg-stone-900 text-white' : 'text-stone-600'
          }`}
        >
          Tour
        </button>
      </div>
    </header>
  );
};
