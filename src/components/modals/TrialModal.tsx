import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Store, MapPin, Phone, Mail, Building2, HelpCircle, AlertCircle } from 'lucide-react';
import { Logo } from '../common/Logo';
import { submitMeeAtoLead } from '../../services/leadService';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialInterest = 'Gestão + Connector',
}) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    email: '',
    city: '',
    state: 'SP',
    businessType: 'Adegas, Bares & Lounges',
    interest: initialInterest,
    contactPreference: 'whatsapp',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const result = await submitMeeAtoLead({
      name: formData.name,
      business_name: formData.businessName,
      whatsapp: formData.whatsapp,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      business_type: formData.businessType,
      interest: formData.interest,
      contact_preference: formData.contactPreference,
      message: formData.notes,
    });

    setLoading(false);

    if (result.success) {
      setCompleted(true);
    } else {
      setErrorMessage(
        result.error || 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.'
      );
    }
  };

  const handleResetAndClose = () => {
    setCompleted(false);
    setErrorMessage(null);
    onClose();
  };

  const brazilianStates = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150 text-slate-900 max-h-[92vh] overflow-y-auto"
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
              Recebemos seu interesse!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Entraremos em contato para apresentar a solução MeeAto e entender as necessidades do seu negócio.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Responsável:</span>
                <span className="font-bold text-slate-800">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estabelecimento:</span>
                <span className="font-bold text-slate-800">{formData.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Localização:</span>
                <span className="font-bold text-slate-800">{formData.city} - {formData.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Interesse:</span>
                <span className="font-bold text-blue-600">{formData.interest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferência de contato:</span>
                <span className="font-bold text-slate-800 capitalize">{formData.contactPreference}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 transition-all"
            >
              Concluir
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Logo variant="gestao" size="sm" theme="light" />
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Demonstração Comercial
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Solicitar demonstração MeeAto
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Preencha os dados do seu comércio para apresentarmos a melhor configuração da solução.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Nome e Estabelecimento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Nome *
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

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome do Estabelecimento *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Ex: Adega Prime"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* WhatsApp e E-mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp com DDD *
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
                    E-mail *
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

              {/* Cidade e Estado */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ex: São Paulo"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estado (UF) *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {brazilianStates.map((uf) => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tipo de Comércio e Solução de Interesse */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tipo de Comércio *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Adegas, Bares & Lounges">Adega, Bar & Lounge</option>
                    <option value="Restaurantes & Pizzarias">Restaurante & Pizzaria</option>
                    <option value="Lanchonetes & Padarias">Lanchonete & Padaria</option>
                    <option value="Distribuidora de Bebidas">Distribuidora de Bebidas</option>
                    <option value="Lojas & Varejo">Lojas & Varejo em Geral</option>
                    <option value="Outro segmento">Outro segmento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Interesse Principal *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Gestão + Connector">Gestão + Connector (Completo)</option>
                    <option value="MeeAto Gestão">MeeAto Gestão</option>
                    <option value="MeeAto Connector">MeeAto Connector</option>
                    <option value="Personalização sob medida">Personalização sob medida</option>
                  </select>
                </div>
              </div>

              {/* Preferência de Contato */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferência para contato comercial *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs cursor-pointer transition-all ${formData.contactPreference === 'whatsapp' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="whatsapp"
                      checked={formData.contactPreference === 'whatsapp'}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="sr-only"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs cursor-pointer transition-all ${formData.contactPreference === 'email' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="sr-only"
                    />
                    <span>E-mail</span>
                  </label>
                  <label className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs cursor-pointer transition-all ${formData.contactPreference === 'telefone' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
                    <input
                      type="radio"
                      name="contactPreference"
                      value="telefone"
                      checked={formData.contactPreference === 'telefone'}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="sr-only"
                    />
                    <span>Ligação</span>
                  </label>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Observações / Necessidades do seu estabelecimento (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ex: Gostaria de saber sobre integração com impressoras de pedidos e controle de comandas..."
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 disabled:opacity-60"
              >
                <span>{loading ? 'Enviando ao sistema...' : 'Solicitar demonstração'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Seus dados serão cadastrados de forma segura e utilizados pela equipe MeeAto para agendamento da demonstração.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
