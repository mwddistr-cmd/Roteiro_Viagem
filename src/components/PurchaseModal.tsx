import React, { useState } from 'react';
import { MotorcycleRoute } from '../types/route';
import { X, Check, ShieldCheck, Zap, QrCode, CreditCard, Sparkles, Navigation } from 'lucide-react';

interface PurchaseModalProps {
  route: MotorcycleRoute | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmUnlock: (routeId: string) => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({
  route,
  isOpen,
  onClose,
  onConfirmUnlock
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'instant'>('pix');
  const [voucherCode, setVoucherCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !route) return null;

  const finalPrice = discountApplied ? 0 : route.priceBrl;

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (voucherCode.trim().toUpperCase() === 'MOTOTOUR' || voucherCode.trim().toUpperCase() === 'ROTA100') {
      setDiscountApplied(true);
    } else {
      alert('Cupom de teste: digite "MOTOTOUR" para 100% de desconto.');
    }
  };

  const handleCompletePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onConfirmUnlock(route.id);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Desbloqueio de Roteiro Profissional</span>
          </div>

          <h3 className="text-xl font-bold text-stone-900 font-display">
            {route.name}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {route.origin} → {route.destination} · {route.daysCount} {route.daysCount === 1 ? 'dia' : 'dias'} · {route.totalKm} km
          </p>
        </div>

        {/* Benefits list */}
        <div className="mt-5 rounded-2xl bg-stone-50 p-4 border border-stone-200/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-2">
            O que está incluído no desbloqueio:
          </span>
          <ul className="space-y-1.5 text-xs text-stone-700">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Cronograma completo dia a dia com paradas a cada ≤ 150 km / 2 horas</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Botão de integração direta para abrir a rota montada no Google Maps</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Postos de combustível testados, pontos de foto e turismo</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Recomendações gastronômicas (almoço) e hotéis com garagem para motos</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mapeamento de riscos da pista, clima extremo e dicas de curvas</span>
            </li>
          </ul>
        </div>

        {/* Quick Voucher Code Form */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Possui cupom? Ex: MOTOTOUR"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="flex-1 rounded-xl border border-stone-300 px-3 py-2 text-xs uppercase placeholder:normal-case placeholder:text-stone-400 focus:border-amber-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleApplyVoucher}
            className="rounded-xl bg-stone-100 px-3 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-200 transition-colors"
          >
            Aplicar
          </button>
        </div>

        {discountApplied && (
          <p className="mt-1.5 text-[11px] text-emerald-700 font-medium">
            Cupom MOTOTOUR aplicado com sucesso! Desconto de 100%.
          </p>
        )}

        {/* Price display & payment method */}
        <div className="mt-5 border-t border-stone-200 pt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 block">Valor do Acesso Vitalício</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-stone-900 font-mono">
                R$ {finalPrice.toFixed(2)}
              </span>
              {discountApplied && (
                <span className="text-xs text-stone-400 line-through">
                  R$ {route.priceBrl.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Payment selection pills */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            <button
              onClick={() => setPaymentMethod('pix')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                paymentMethod === 'pix' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
              }`}
            >
              <QrCode className="h-3.5 w-3.5 text-emerald-600" />
              <span>PIX</span>
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                paymentMethod === 'card' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
              }`}
            >
              <CreditCard className="h-3.5 w-3.5 text-stone-600" />
              <span>Cartão</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-2">
          <button
            onClick={handleCompletePurchase}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-stone-900 py-3 px-4 text-sm font-bold text-white shadow-md hover:bg-amber-600 active:scale-98 transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <span>Desbloqueando acesso...</span>
            ) : (
              <>
                <Zap className="h-4 w-4 text-amber-300" />
                <span>Confirmar e Desbloquear Agora</span>
              </>
            )}
          </button>

          {/* 1-Click Instant Test Unlock for Reviewers */}
          <button
            onClick={() => {
              onConfirmUnlock(route.id);
              onClose();
            }}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 py-2.5 px-4 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <Navigation className="h-3.5 w-3.5 text-amber-600" />
            <span>Desbloquear Imediatamente para Demonstração / Teste</span>
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-stone-500">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Acesso vitalício garantido com atualizações de trajeto</span>
        </div>

      </div>
    </div>
  );
};
