import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Plan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: Plan, billingCycle: 'monthly' | 'annual') => void;
  onOpenContact: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onOpenContact,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: Plan[] = [
    {
      id: 'free_trial',
      name: 'Teste Gratuito',
      subtitle: 'Conheça o sistema',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Acesso completo por 14 dias',
        '1 estabelecimento',
        'Suporte por e-mail',
      ],
      ctaText: 'Começar agora',
      ctaVariant: 'outline',
    },
    {
      id: 'essencial',
      name: 'Essencial',
      subtitle: 'Ideal para pequenos comércios',
      monthlyPrice: 69.9,
      annualPrice: 57.9,
      features: [
        'Até 2 usuários',
        'Módulos básicos',
        'Suporte via WhatsApp',
      ],
      ctaText: 'Assinar agora',
      ctaVariant: 'primary',
    },
    {
      id: 'profissional',
      name: 'Profissional',
      subtitle: 'Para operações maiores',
      monthlyPrice: 129.9,
      annualPrice: 107.9,
      popular: true,
      features: [
        'Usuários ilimitados',
        'Todos os módulos',
        'Relatórios avançados',
        'Suporte prioritário',
      ],
      ctaText: 'Assinar agora',
      ctaVariant: 'primary',
    },
    {
      id: 'empresa',
      name: 'Empresa',
      subtitle: 'Múltiplas unidades',
      monthlyPrice: 249.9,
      annualPrice: 207.9,
      features: [
        'Várias unidades',
        'Personalização completa',
        'API e integrações',
        'Suporte dedicado',
      ],
      ctaText: 'Falar com um especialista',
      ctaVariant: 'outline',
    },
  ];

  return (
    <section id="planos" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Planos que se adaptam ao seu negócio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Escolha o plano ideal e comece a transformar seu comércio hoje mesmo.
            </p>
          </div>

          {/* Billing Switcher (Mensal / Anual 2 meses grátis) */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 shrink-0 self-start md:self-end">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Anual</span>
              <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2 meses grátis
              </span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const price =
              billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-[1.02] z-10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                    Mais escolhido
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[18px]">
                    {plan.subtitle}
                  </p>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                    <span className="text-base font-extrabold text-slate-900">
                      R$
                    </span>
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {price === 0
                        ? '0'
                        : price.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                    </span>
                    {price > 0 && (
                      <span className="text-xs text-slate-500 font-medium ml-1">
                        /mês
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-2">
                  {plan.ctaVariant === 'primary' ? (
                    <button
                      onClick={() => onSelectPlan(plan, billingCycle)}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 transition-all"
                    >
                      {plan.ctaText}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (plan.id === 'empresa') {
                          onOpenContact();
                        } else {
                          onSelectPlan(plan, billingCycle);
                        }
                      }}
                      className="w-full py-3 bg-white hover:bg-slate-50 active:scale-[0.98] text-blue-600 hover:text-blue-700 border border-blue-600 rounded-xl text-sm font-semibold transition-all"
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee & Trust Note */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900">Sem fidelidade ou multas de cancelamento.</span>
              <p className="text-slate-500 text-xs mt-0.5">
                Cancele a qualquer momento direto pelo painel de controle sem complicações.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 shrink-0"
          >
            <span>Dúvidas sobre os planos? Fale conosco</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
