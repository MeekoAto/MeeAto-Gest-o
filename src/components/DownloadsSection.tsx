import React from 'react';
import {
  Laptop,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

interface DownloadsSectionProps {
  onOpenTrial: () => void;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  onOpenTrial,
}) => {
  const solutions = [
    {
      id: 'gestao',
      name: 'MeeAto Gestão',
      badge: 'Sistema Principal',
      desc: 'Conheça o sistema de gestão e suas possibilidades para o seu comércio.',
      icon: Laptop,
      availability: 'Acesso configurado na implantação',
      features: [
        'Frente de caixa (PDV) rápido e intuitivo',
        'Controle de estoque, vendas e comandas',
        'Relatórios operacionais e financeiros',
      ],
    },
    {
      id: 'connector',
      name: 'MeeAto Connector',
      badge: 'Solução Premium',
      desc: 'Solução premium para integração entre o MeeAto e dispositivos do estabelecimento.',
      icon: Cpu,
      availability: 'Disponibilizado conforme a solução contratada',
      features: [
        'Comunicação direta com impressoras térmicas',
        'Integração com maquininhas e leitores NFC',
        'Módulo leve configurado por técnicos MeeAto',
      ],
    },
    {
      id: 'implantacao',
      name: 'Implantação & Acesso',
      badge: 'Atendimento Técnico',
      desc: 'Os acessos e instaladores são disponibilizados conforme a solução contratada.',
      icon: Headphones,
      availability: 'Suporte direto para seu estabelecimento',
      features: [
        'Análise prévia dos equipamentos do local',
        'Configuração assistida e testes práticos',
        'Treinamento e acompanhamento operacional',
      ],
    },
  ];

  return (
    <section id="demonstracao" className="relative py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      {/* Anchor for backward compatibility with #downloads */}
      <span id="downloads" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Acesso & Implantação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Tenha acesso à solução MeeAto
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Conheça as soluções MeeAto e descubra a configuração ideal para o seu estabelecimento. Os acessos e instaladores são disponibilizados conforme a solução contratada.
          </p>
        </div>

        {/* Informative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5">
                  <div className="text-[11px] text-slate-500 mb-3 text-center">
                    {item.availability}
                  </div>
                  <button
                    onClick={onOpenTrial}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Solicitar demonstração</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Step Onboarding Flow */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Como funciona a contratação e acesso ao MeeAto</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Solicite uma demonstração</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Preencha os dados do seu comércio. Nossa equipe entrará em contato para entender sua rotina e objetivos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Definição da solução</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Identificamos os módulos necessários do MeeAto Gestão e avaliamos os periféricos a serem integrados com o Connector.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Acesso e implantação</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fornecemos os acessos e instaladores homologados para o seu comércio operar com máxima eficiência e suporte contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
