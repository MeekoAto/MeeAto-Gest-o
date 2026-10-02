import React, { useState } from 'react';
import {
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  FileQuestion,
  AlertCircle,
} from 'lucide-react';
import { submitMeeAtoLead } from '../services/leadService';

interface SupportSectionProps {
  onOpenTrial: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onOpenTrial }) => {
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    segment: 'Adegas e Bares',
    whatsapp: '',
    email: '',
    city: '',
    state: 'SP',
    message: '',
  });

  const brazilianStates = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

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
      business_type: formData.segment,
      interest: 'Demonstração Comercial',
      contact_preference: 'whatsapp',
      message: formData.message,
    });

    setLoading(false);

    if (result.success) {
      setFormSent(true);
    } else {
      setErrorMessage(result.error || 'Erro ao enviar dados. Tente novamente.');
    }
  };

  return (
    <section id="suporte" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="contato" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Support Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Suporte & Contato
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Estamos prontos para atender o seu comércio
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Nosso time entende a urgência de um comércio em pleno funcionamento. Conte com canais diretos e suporte humanizado.
              </p>
            </div>

            {/* Support Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5511952065236?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20MeeAto%20Gest%C3%A3o%20e%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:border-emerald-300 transition-all flex items-start gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      WhatsApp Oficial MeeAto
                    </h3>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      Online
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Atendimento ágil para implantação, dúvidas e suporte técnico durante a operação.
                  </p>
                  <span className="text-xs font-semibold text-emerald-700 mt-2 inline-block">
                    Iniciar conversa no WhatsApp →
                  </span>
                </div>
              </a>

              {/* Central de Ajuda */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Base de Conhecimento & Vídeos
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Aprenda passo a passo como cadastrar produtos, fechar caixa, configurar o MeeAto Connector e emitir cupons.
                  </p>
                  <div className="flex gap-4 mt-2 text-xs font-semibold text-blue-600">
                    <span>Acessar Tutoriais →</span>
                    <span>Documentação de APIs →</span>
                  </div>
                </div>
              </div>

              {/* Plantão de Atendimento */}
              <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Horário de Atendimento:</strong> Segunda a Sábado das 08h às 23h · Domingos e Feriados com plantão operacional.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Specialist Demo Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Recebemos seu interesse!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Entraremos em contato para apresentar a solução MeeAto e entender as necessidades do seu negócio.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    Fale com um Especialista MeeAto
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Preencha os dados e receba uma demonstração adaptada ao seu negócio.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nome do Comércio *
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
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Segmento *
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Adegas e Bares">Adega / Bar / Lounge</option>
                      <option value="Restaurantes">Restaurante / Pizzaria</option>
                      <option value="Lanchonetes">Lanchonete / Padaria</option>
                      <option value="Distribuidora">Distribuidora de Bebidas</option>
                      <option value="Varejo">Outros comércios / Varejo</option>
                    </select>
                  </div>
                </div>

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
                      placeholder="Ex: Campinas"
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

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Como podemos ajudar? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ex: Gostaria de saber como funciona o controle por cartões NFC e emissão de cupom fiscal..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Enviando...' : 'Solicitar demonstração'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
