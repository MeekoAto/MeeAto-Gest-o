import React, { useState } from 'react';
import {
  Store,
  Boxes,
  FileText,
  CreditCard,
  Truck,
  Printer,
  Smartphone,
  Users2,
  BarChart3,
  MoreHorizontal,
  CheckCircle2,
  X,
  ArrowRight,
} from 'lucide-react';

interface FeatureDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  benefits: string[];
}

export const QuickFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  const features: FeatureDetail[] = [
    {
      id: 'pdv',
      title: 'PDV e Caixa',
      subtitle: 'Vendas rápidas e seguras',
      icon: Store,
      description:
        'Frente de caixa ágil e descomplicada. Realize vendas com múltiplos meios de pagamento, sangrias, suprimentos e fechamento cego de caixa.',
      benefits: [
        'Abertura e fechamento de caixa detalhado com conciliação',
        'Atalhos de teclado para digitação ultra rápida',
        'Operação offline com sincronização automática',
      ],
    },
    {
      id: 'estoque',
      title: 'Estoque',
      subtitle: 'Controle total',
      icon: Boxes,
      description:
        'Controle de entradas, saídas, perdas e fichas técnicas. Saiba o momento exato de repor produtos com alertas de estoque mínimo.',
      benefits: [
        'Baixa automática a cada venda no balcão ou delivery',
        'Ficha técnica para drinks, pratos e combos compostos',
        'Histórico completo de movimentações por funcionário',
      ],
    },
    {
      id: 'comandas',
      title: 'Comandas',
      subtitle: 'Simples e eficiente',
      icon: FileText,
      description:
        'Gerenciamento flexível por número de mesa, comanda individual ou cartão cliente, com pedidos enviados direto para a cozinha e bar.',
      benefits: [
        'Divisão de conta facilitada por pessoa ou item',
        'Transferência entre mesas com um toque',
        'Impressão automática em impressoras setoriais',
      ],
    },
    {
      id: 'camarotes',
      title: 'Camarotes',
      subtitle: 'Com cartões NFC',
      icon: CreditCard,
      description:
        'Ideal para baladas, adegas, lounges e eventos. Vincule saldo pré-pago ou pós-pago em pulseiras e cartões NFC para consumo ágil.',
      benefits: [
        'Leitura instantânea em menos de 0.2 segundos',
        'Recarga rápida no caixa com extrato de consumo',
        'Segurança contra fraudes com criptografia por chip',
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery',
      subtitle: 'Com zonas e cupons',
      icon: Truck,
      description:
        'Controle centralizado de pedidos para entrega e retirada no balcão, com taxas por bairro ou raio de distância e gestão de entregadores.',
      benefits: [
        'Taxas de entrega configuráveis por zona ou raio',
        'Controle de despachante e repasse aos motoboys',
        'Impressão automática de vias de entrega e expedição',
      ],
    },
    {
      id: 'impressoras',
      title: 'Impressoras',
      subtitle: 'Qualquer modelo',
      icon: Printer,
      description:
        'Conexão nativa via MeeAto Connector com impressoras térmicas ESC/POS (Epson, Bematech, Daruma, Elgin, marcas chinesas e genéricas).',
      benefits: [
        'Suporte a conexões USB, Cabo de Rede Ethernet e Wi-Fi',
        'Impressão rápida sem travamentos de spooler',
        'Roteamento inteligente de pedidos para cozinha e bar',
      ],
    },
    {
      id: 'maquininhas',
      title: 'Maquininhas',
      subtitle: 'Integração facilitada',
      icon: Smartphone,
      description:
        'Comunicação direta com terminais de cartão e Smart POS. O valor do pedido é enviado à máquina automaticamente, sem digitação manual.',
      benefits: [
        'Elimina erros de digitação de valores pelo operador',
        'Suporte a Stone, PagBank, Rede, Cielo, Elgin e mais',
        'Baixa instantânea no caixa assim que o pagamento aprova',
      ],
    },
    {
      id: 'funcionarios',
      title: 'Funcionários',
      subtitle: 'Com permissões',
      icon: Users2,
      description:
        'Crie perfis de acesso sob medida (Caixa, Garçom, Gerente, Estoquista). Controle permissões para cancelamentos, descontos e relatórios.',
      benefits: [
        'Auditoria detalhada de todas as operações sensíveis',
        'Autorização por senha gerencial ou crachá',
        'Controle de comissões por vendedor ou atendente',
      ],
    },
    {
      id: 'relatorios',
      title: 'Relatórios',
      subtitle: 'Decisões melhores',
      icon: BarChart3,
      description:
        'Dashboards visuais com DRE, ticket médio, produtos mais vendidos, curva ABC de clientes e lucratividade real do seu negócio.',
      benefits: [
        'Gráficos claros de horários de pico e dias fortes',
        'Exportação rápida em Excel e PDF para sua contabilidade',
        'Acesso seguro de onde estiver via navegador web',
      ],
    },
    {
      id: 'muito-mais',
      title: 'Muito mais',
      subtitle: 'Sempre evoluindo',
      icon: MoreHorizontal,
      description:
        'Atualizações constantes sem custo adicional. Backups em nuvem em tempo real e estabilidade operacional comprovada no dia a dia.',
      benefits: [
        'Backup automático criptografado na nuvem',
        'Novas funcionalidades implementadas regularmente',
        'Comunidade e suporte técnico direto para o seu comércio',
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Recursos Integrados
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Tudo o que seu comércio precisa no dia a dia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Módulos integrados de fábrica para agilizar sua operação e eliminar gargalos.
          </p>
        </div>

        {/* 10 Feature Grid as in Reference Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeature(item)}
                className="group p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                {/* Content */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-1">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {React.createElement(selectedFeature.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedFeature.title}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">
                  {selectedFeature.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedFeature.description}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                Principais Vantagens
              </h4>
              <ul className="space-y-2">
                {selectedFeature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedFeature(null)}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
