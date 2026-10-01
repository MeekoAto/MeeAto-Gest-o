import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Phone, Mail, Store, Shield } from 'lucide-react';
import { Logo } from '../common/Logo';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanName?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialPlanName = 'Teste Gratuito',
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    whatsapp: '',
    email: '',
    segment: 'Adegas, Bares & Lounges',
    hasDevices: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setCompleted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {completed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Seu teste de 14 dias foi liberado!
            </h3>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Estabelecimento:</span>
                <span className="font-bold text-slate-800">{formData.storeName || 'Seu Comércio'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Plano Selecionado:</span>
                <span className="font-bold text-blue-600">{initialPlanName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ambiente:</span>
                <span className="font-mono text-emerald-600 font-semibold">app.meeato.com.br/demo</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Enviamos seu link de acesso exclusivo e token de pareamento do MeeAto Connector para seu WhatsApp.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 transition-all"
            >
              Acessar Painel de Demonstração
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Logo variant="gestao" size="sm" theme="light" />
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  14 Dias Grátis
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Experimente o MeeAto no seu comércio
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Sem necessidade de cartão de crédito. Setup em menos de 2 minutos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Rafael Oliveira"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome do Estabelecimento
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    placeholder="Ex: Adega do Vale"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Segmento
                  </label>
                  <select
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Adegas, Bares & Lounges">Adega, Bar & Lounge</option>
                    <option value="Restaurantes & Pizzarias">Restaurante & Pizzaria</option>
                    <option value="Lanchonetes & Padarias">Lanchonete & Padaria</option>
                    <option value="Distribuidora de Bebidas">Distribuidora de Bebidas</option>
                    <option value="Lojas & Varejo">Lojas & Varejo em Geral</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contato@comercio.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Hardware preference checkbox */}
              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasDevices}
                  onChange={(e) => setFormData({ ...formData, hasDevices: e.target.checked })}
                  className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-600">
                  Desejo testar a integração física com impressoras térmicas ou leitor NFC via <strong>MeeAto Connector</strong>.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>{loading ? 'Preparando seu ambiente...' : 'Iniciar Teste de 14 Dias Agora'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Dados protegidos por criptografia de ponta a ponta</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
