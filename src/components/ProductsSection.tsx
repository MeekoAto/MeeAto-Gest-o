import React, { useState } from 'react';
import { Logo } from './common/Logo';
import {
  Check,
  ArrowRight,
  Download,
  Printer,
  CreditCard,
  Radio,
  Sliders,
  Laptop,
  Tablet,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { BusinessSegment } from '../types';

interface ProductsSectionProps {
  onOpenTrial: () => void;
  onOpenDownload: () => void;
  onSelectSegment?: (segment: BusinessSegment) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenTrial,
  onOpenDownload,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<BusinessSegment>('adegas');
  const [connectorSimStatus, setConnectorSimStatus] = useState<string>('Dispositivos Prontos');
  const [isSimulating, setIsSimulating] = useState(false);

  const segments: Record<
    BusinessSegment,
    { title: string; subtitle: string; features: string[]; stats: string }
  > = {
    adegas: {
      title: 'Adegas, Bares & Lounges',
      subtitle: 'Controle de garrafas, doses, camarotes com cartões NFC e fichas rápidas.',
      features: [
        'Comandas de consumo com pulseiras ou cartões NFC',
        'Ficha técnica de drinks e controle de doses fracionadas',
        'Controle de camarotes e consumo mínimo por grupo',
      ],
      stats: 'Agilidade média no balcão: < 12 segundos por pedido',
    },
    restaurantes: {
      title: 'Restaurantes & Pizzarias',
      subtitle: 'Gestão de mesas, divisão de contas, impressão de pedidos na cozinha.',
      features: [
        'Mapa de mesas interativo com status em tempo real (Livre, Ocupada, Conta)',
        'Envio automático de pedidos para impressoras do bar e da cozinha',
        'Divisão de conta facilitada por pessoa no fechamento',
      ],
      stats: 'Redução de até 40% no tempo de atendimento de mesas',
    },
    lanchonetes: {
      title: 'Lanchonetes & Padarias',
      subtitle: 'Frente de caixa rápida, controle de combos, balanças e código de barras.',
      features: [
        'Atalhos rápidos para itens de alto giro e salgados',
        'Integração direta com balanças de pesagem no checkout',
        'Emissão ágil de cupons fiscais e recibos',
      ],
      stats: 'Mais de 180 atendimentos por hora em horários de pico',
    },
    varejo: {
      title: 'Lojas & Distribuidoras',
      subtitle: 'Gestão de múltiplos depósitos, tabelas de preço no atacado e varejo.',
      features: [
        'Tabelas de preços diferenciadas (Varejo x Atacado)',
        'Leitor de código de barras rápido e cadastro simplificado',
        'Controle de compras e sugestão inteligente de reposição',
      ],
      stats: 'Acuracidade de estoque superior a 99.4%',
    },
  };

  const handleTestBridge = () => {
    setIsSimulating(true);
    setConnectorSimStatus('Enviando comando teste via WebSocket local (Porta 9876)...');
    setTimeout(() => {
      setConnectorSimStatus('Impressora Térmica: OK | Maquininha: OK | Leitor NFC: OK');
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <div className="space-y-16 py-16 sm:py-24 bg-white">
      {/* 1. DUO SPOTLIGHT CARDS AS IN REFERENCE IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT CARD: MeeAto Gestão (Dark Card) */}
          <div
            id="gestao"
            className="group relative rounded-3xl bg-[#091224] text-white p-7 sm:p-9 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header Logo */}
              <div className="flex items-center justify-between mb-4">
                <Logo variant="gestao" size="md" />
              </div>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base font-normal mb-6 leading-relaxed">
                A plataforma completa e configurável para o seu tipo de comércio.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8">
                {[
                  'Adegas, bares e restaurantes',
                  'Lanchonetes, padarias e distribuidoras',
                  'Lojas e diversos outros segmentos',
                  'Modular e personalizável',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom visual mockup & Action */}
            <div className="space-y-6 pt-4">
              {/* Angled Mockup Frame */}
              <div className="relative rounded-xl bg-slate-950/80 border border-slate-800 p-3 shadow-inner overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <Laptop className="w-3.5 h-3.5 text-blue-400" /> MeeAto Gestão Web
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">Cloud 99.9%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2.5 text-[10px]">
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Faturamento</span>
                    <span className="font-bold text-white font-mono">R$ 1.245,90</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Mesas Ativas</span>
                    <span className="font-bold text-sky-400 font-mono">14 abertas</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Estoque Crítico</span>
                    <span className="font-bold text-amber-400 font-mono">0 itens</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-sky-400 hover:text-white rounded-xl border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all"
              >
                <span>Conheça o MeeAto Gestão</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT CARD: MeeAto Connector (Light Card) */}
          <div
            id="connector"
            className="group relative rounded-3xl bg-white text-slate-900 p-7 sm:p-9 border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient subtle light blue corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header: 3-point connect icon & title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                  {/* 3-node connected hub icon */}
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  MeeAto <span className="text-blue-600">Connector</span>
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base font-normal mb-6 leading-relaxed">
                A ponte entre o sistema e os dispositivos do seu estabelecimento.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8">
                {[
                  'Impressoras térmicas (USB, Rede e Bluetooth)',
                  'Maquininhas de pagamento (TEF e Smart POS)',
                  'Leitores NFC (cartões, pulseiras e comandas)',
                  'Outros dispositivos compatíveis (balanças e gavetas)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom visual hardware mockup & Action */}
            <div className="space-y-6 pt-4">
              {/* Visual Hardware Trio Preview */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 flex items-center justify-around gap-2">
                {/* 1. Thermal Printer Badge */}
                <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white border border-slate-200 shadow-sm flex-1">
                  <Printer className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Impressoras</span>
                  <span className="text-[9px] text-emerald-600 font-medium">ESC/POS</span>
                </div>

                {/* 2. Card Terminal Badge */}
                <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white border border-slate-200 shadow-sm flex-1">
                  <CreditCard className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Maquininhas</span>
                  <span className="text-[9px] text-emerald-600 font-medium">TEF / Smart</span>
                </div>

                {/* 3. NFC Badge */}
                <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white border border-slate-200 shadow-sm flex-1">
                  <Radio className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Leitor NFC</span>
                  <span className="text-[9px] text-emerald-600 font-medium">13.56 MHz</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-md shadow-blue-500/25 font-semibold text-sm transition-all"
              >
                <span>Baixar MeeAto Connector</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEEP DIVE: MEEATO GESTÃO SEGMENT EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Segmentos Atendidos
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Desenvolvido para se adaptar ao seu negócio
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Escolha seu modelo de operação e veja como o MeeAto Gestão otimiza cada detalhe.
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
            {[
              { id: 'adegas', name: 'Adegas & Bares' },
              { id: 'restaurantes', name: 'Restaurantes & Pizzarias' },
              { id: 'lanchonetes', name: 'Lanchonetes & Padarias' },
              { id: 'varejo', name: 'Lojas & Varejo' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSegment(tab.id as BusinessSegment)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedSegment === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Segment Details Box */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xl font-bold text-white">
                {segments[selectedSegment].title}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {segments[selectedSegment].subtitle}
              </p>

              <ul className="space-y-2.5 pt-2">
                {segments[selectedSegment].features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex items-center gap-2 text-xs text-sky-300 font-mono bg-blue-950/60 p-3 rounded-lg border border-blue-900/60 inline-flex">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>{segments[selectedSegment].stats}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-5 border border-slate-800/90 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-bold text-slate-200">Configuração de Módulos</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                  Pronto para uso
                </span>
              </div>
              <div className="space-y-3 py-3">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Modo Comanda Eletrônica</span>
                  <span className="font-mono text-sky-400">Ativado</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Cartões / Pulseiras NFC</span>
                  <span className="font-mono text-sky-400">Integrado</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Controle de Estoque em Gramas / Doses</span>
                  <span className="font-mono text-sky-400">Habilitado</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Emissão Fiscal NFC-e / CF-e SAT</span>
                  <span className="font-mono text-sky-400">Automático</span>
                </div>
              </div>
              <button
                onClick={onOpenTrial}
                className="w-full mt-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Configurar meu comércio grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP DIVE: MEEATO CONNECTOR HARDWARE BRIDGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                MeeAto Connector em Detalhes
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Sem drivers complicados. <br />
                Conecte em segundos e imprima sem travar.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O MeeAto Connector é um serviço leve e seguro que roda em segundo plano no computador do seu caixa. Ele recebe as ordens do sistema MeeAto Gestão e envia instantaneamente para impressoras de cupom, leitores NFC e terminais de pagamento.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900">Zero Latência</div>
                  <div className="text-xs text-slate-500 mt-0.5">Comunicação local em menos de 50ms</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900">Auto Reconhecimento</div>
                  <div className="text-xs text-slate-500 mt-0.5">Plug & Play com portas USB e COM</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDownload}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download para Windows e Linux</span>
                </button>
              </div>
            </div>

            {/* Interactive Bridge Diagnostic Simulator */}
            <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 text-white border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200">Painel MeeAto Connector v2.4</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">127.0.0.1:9876</span>
              </div>

              {/* Status List */}
              <div className="space-y-2.5 py-4">
                <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-sky-400" />
                    <span>Impressora Térmica (Epson TM-T20X)</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold">Conectado (USB)</span>
                </div>

                <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-sky-400" />
                    <span>Terminal Maquininha (Smart POS / TEF)</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold">Pareado (Wi-Fi)</span>
                </div>

                <div className="flex items-center justify-between bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-sky-400" />
                    <span>Leitor NFC / RFID (ACR122U / USB)</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold">Aguardando Tag</span>
                </div>
              </div>

              {/* Live Status Output */}
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="truncate">{connectorSimStatus}</span>
                <button
                  onClick={handleTestBridge}
                  disabled={isSimulating}
                  className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-sans font-semibold shrink-0 ml-2 transition-colors flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>Testar Comunicação</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
