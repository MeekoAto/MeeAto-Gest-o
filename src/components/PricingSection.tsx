import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Cpu, Store, Wrench } from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
  onOpenContact: () => void;
  onExploreConnector: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenTrial,
  onOpenContact,
  onExploreConnector,
}) => {
  const solutions = [
    {
      id: 'teste_gratuito',
      name: 'Teste Gratuito',
      tag: 'Demonstração',
      subtitle: 'Conheça o sistema na prática antes de decidir.',
      investmentLabel: 'Gratuito',
      investmentSub: 'para avaliação',
      icon: Store,
      popular: false,
      features: [
        'Acesso para conhecer a interface',
        'Frente de caixa (PDV) e estoque básico',
        'Demonstração das principais funções',
        'Sem necessidade de cartão de crédito',
      ],
      ctaText: 'Testar gratuitamente',
      ctaAction: 'trial',
      ctaVariant: 'outline' as const,
    },
    {
      id: 'meeato_gestao',
      name: 'MeeAto Gestão',
      tag: 'Mais procurado',
      subtitle: 'Venda, estoque, caixa, pedidos e operações do seu comércio em um único sistema.',
      investmentLabel: 'Sob Medida',
      investmentSub: 'proposta personalizada',
      icon: Store,
      popular: true,
      features: [
        'Licença para o seu estabelecimento',
        'PDV, estoque, comandas, mesas e relatórios',
        'Operação rápida, segura e sem travamentos',
        'Implantação e suporte inicial dedicado',
      ],
      ctaText: 'Solicitar proposta',
      ctaAction: 'contact',
      ctaVariant: 'primary' as const,
    },
    {
      id: 'meeato_connector',
      name: 'MeeAto Connector',
      tag: 'Comunicação de Hardware',
      subtitle: 'Conecte o sistema aos dispositivos do seu estabelecimento, como impressoras e outros periféricos compatíveis.',
      investmentLabel: 'Integrado',
      investmentSub: 'ao seu ecossistema',
      icon: Cpu,
      popular: false,
      features: [
        'Impressoras térmicas de cupom (USB/Rede)',
        'Maquininhas de pagamento e terminais TEF',
        'Leitores de comandas e pulseiras NFC',
        'Serviço leve que roda em segundo plano',
      ],
      ctaText: 'Conhecer a solução',
      ctaAction: 'connector',
      ctaVariant: 'outline' as const,
    },
    {
      id: 'personalizacao',
      name: 'Personalização',
      tag: 'Sob Encomenda',
      subtitle: 'Precisou de uma função específica? Avaliamos a necessidade e podemos desenvolver ou adaptar recursos para o seu negócio.',
      investmentLabel: 'Customizado',
      investmentSub: 'conforme o projeto',
      icon: Wrench,
      popular: false,
      features: [
        'Adaptação a fluxos específicos do seu comércio',
        'Relatórios e integrações sob demanda',
        'Avaliação técnica de viabilidade',
        'Atendimento direto com quem desenvolve',
      ],
      ctaText: 'Solicitar proposta',
      ctaAction: 'contact',
      ctaVariant: 'outline' as const,
    },
  ];

  return (
    <section id="solucoes" className="relative py-20 sm:py-24 bg-white border-b border-slate-200">
      {/* Anchor for backward compatibility with #planos */}
      <span id="planos" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Soluções & Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Uma solução que se adapta ao seu negócio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            O MeeAto pode ser configurado de acordo com a realidade do seu estabelecimento. Converse conosco para conhecer a solução e receber uma proposta.
          </p>
        </div>

        {/* 4 Cards Grid Preserving Layout and Visual Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {solutions.map((item) => {
            const isPopular = item.popular;

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-[1.02] z-10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                    {item.tag}
                  </div>
                )}

                <div>
                  {/* Category Tag if not popular */}
                  {!isPopular && (
                    <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md mb-2">
                      {item.tag}
                    </span>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 min-h-[48px] leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Investment Block (No recurrent monthly prices) */}
                  <div className="my-5 pb-5 border-b border-slate-100 flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {item.investmentLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.investmentSub}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, idx) => (
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
                  {item.ctaVariant === 'primary' ? (
                    <button
                      onClick={onOpenContact}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.ctaAction === 'trial') {
                          onOpenTrial();
                        } else if (item.ctaAction === 'connector') {
                          onExploreConnector();
                        } else {
                          onOpenContact();
                        }
                      }}
                      className="w-full py-3 bg-white hover:bg-slate-50 active:scale-[0.98] text-blue-600 hover:text-blue-700 border border-blue-600 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Model & Transparency Note */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900">Modelo transparente e personalizado para o seu comércio.</span>
              <p className="text-slate-500 text-xs mt-0.5">
                Sem assinaturas forçadas. Entendemos as necessidades do seu estabelecimento para montar uma proposta justa.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 shrink-0 group"
          >
            <span>Converse com a nossa equipe</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
