import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Package,
  Layers,
  ShoppingBag,
  CreditCard,
  Printer,
  Radio,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { Logo } from './common/Logo';

interface HeroProps {
  onOpenTrial: () => void;
  onExploreSystem: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onExploreSystem }) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'pdv' | 'estoque'>('inicio');
  const [ticketPrinted, setTicketPrinted] = useState(false);

  const handleSimulatePrint = () => {
    setTicketPrinted(true);
    setTimeout(() => setTicketPrinted(false), 4000);
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070d1d] text-white"
    >
      {/* Background Tech Mesh & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[160px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase">
                SISTEMA DE GESTÃO PARA O SEU COMÉRCIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Seu comércio, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500">
                mais simples.
              </span>
              <br />
              Sua gestão, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500">
                mais inteligente.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Do caixa ao estoque. Dos pedidos às impressoras. Tudo conectado em
              um único ecossistema.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onOpenTrial}
                className="group px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                <span>Testar gratuitamente</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreSystem}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-base font-medium rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all backdrop-blur-sm"
              >
                Conhecer o sistema
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              {/* Highlight 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Fácil de usar
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Comece em minutos
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Seguro e confiável
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Seus dados protegidos
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Suporte especializado
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sempre com você
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Hardware & Software Ecosystem Showcase */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center items-center">
            {/* Soft Ambient Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-[680px]">
              {/* Desktop Monitor Frame */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden shadow-blue-950/50">
                {/* Monitor Top Bezel & Camera */}
                <div className="bg-slate-950/90 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium">Adega Central</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="bg-slate-800/80 px-2 py-0.5 rounded text-[11px] text-slate-300 font-medium">
                      Hoje
                    </span>
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                      J
                    </div>
                  </div>
                </div>

                {/* Dashboard Screen Content */}
                <div className="grid grid-cols-12 min-h-[360px] bg-[#0c1427] text-slate-200 text-xs">
                  {/* Left Sidebar */}
                  <div className="col-span-3 border-r border-slate-800/80 bg-slate-950/70 p-3 flex flex-col justify-between">
                    <div>
                      <div className="px-1.5 py-1 mb-3">
                        <Logo variant="gestao" size="sm" />
                      </div>
                      <nav className="space-y-0.5">
                        <button
                          onClick={() => setActiveTab('inicio')}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-colors ${
                            activeTab === 'inicio'
                              ? 'bg-blue-600/20 text-sky-400 font-semibold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span>Início</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('pdv')}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-colors ${
                            activeTab === 'pdv'
                              ? 'bg-blue-600/20 text-sky-400 font-semibold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>PDV</span>
                        </button>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Comandas</span>
                        </div>
                        <button
                          onClick={() => setActiveTab('estoque')}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-colors ${
                            activeTab === 'estoque'
                              ? 'bg-blue-600/20 text-sky-400 font-semibold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Estoque</span>
                        </button>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Camarotes</span>
                        </div>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Delivery</span>
                        </div>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Financeiro</span>
                        </div>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Relatórios</span>
                        </div>
                        <div className="w-full flex items-center gap-2 px-2.5 py-1.5 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                          <span>Funcionários</span>
                        </div>
                      </nav>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>MeeAto Cloud</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Dashboard Main Area */}
                  <div className="col-span-9 p-4 space-y-3.5 bg-gradient-to-b from-[#0c1427] to-[#080d1a]">
                    {/* Welcome Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Bem-vindo, João!
                        </h3>
                        <p className="text-[10px] text-slate-400">
                          Resumo operacional em tempo real
                        </p>
                      </div>
                      <span className="px-2 py-0.5 bg-blue-600/20 text-sky-400 border border-blue-500/30 rounded text-[10px] font-semibold">
                        Sincronizado
                      </span>
                    </div>

                    {/* Stat Cards Grid (from reference image) */}
                    <div className="grid grid-cols-4 gap-2">
                      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                        <span className="text-[10px] text-slate-400 block">
                          Vendas hoje
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          R$ 1.245,90
                        </div>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5 font-medium">
                          <TrendingUp className="w-2.5 h-2.5" /> +12%
                        </span>
                      </div>

                      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                        <span className="text-[10px] text-slate-400 block">
                          Pedidos
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          48
                        </div>
                        <span className="text-[10px] text-sky-400 flex items-center gap-0.5 mt-0.5 font-medium">
                          <TrendingUp className="w-2.5 h-2.5" /> +12%
                        </span>
                      </div>

                      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                        <span className="text-[10px] text-slate-400 block">
                          Clientes
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          32
                        </div>
                        <span className="text-[10px] text-amber-400 flex items-center gap-0.5 mt-0.5 font-medium">
                          <TrendingUp className="w-2.5 h-2.5" /> +2%
                        </span>
                      </div>

                      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                        <span className="text-[10px] text-slate-400 block">
                          Produtos
                        </span>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                          128
                        </div>
                        <span className="text-[10px] text-purple-400 flex items-center gap-0.5 mt-0.5 font-medium">
                          <TrendingUp className="w-2.5 h-2.5" /> +20%
                        </span>
                      </div>
                    </div>

                    {/* Chart & Top Products Row */}
                    <div className="grid grid-cols-12 gap-3 pt-1">
                      {/* Vendas por horário bar chart */}
                      <div className="col-span-7 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-semibold text-slate-200">
                            Vendas por horário
                          </span>
                          <span className="text-[9px] text-slate-400">Pico: 20h</span>
                        </div>
                        {/* Bars */}
                        <div className="h-20 flex items-end gap-1.5 sm:gap-2 px-1 pt-2">
                          {[
                            { h: '25%', t: '06h' },
                            { h: '35%', t: '10h' },
                            { h: '60%', t: '12h' },
                            { h: '45%', t: '14h' },
                            { h: '70%', t: '16h' },
                            { h: '95%', t: '18h' },
                            { h: '80%', t: '20h' },
                            { h: '40%', t: '22h' },
                          ].map((bar, idx) => (
                            <div
                              key={idx}
                              className="flex-1 flex flex-col items-center gap-1 group"
                            >
                              <div
                                style={{ height: bar.h }}
                                className={`w-full rounded-t transition-all ${
                                  idx === 5
                                    ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]'
                                    : 'bg-blue-600/80 hover:bg-blue-500'
                                }`}
                              />
                              <span className="text-[8px] text-slate-500 font-mono">
                                {bar.t}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top Products */}
                      <div className="col-span-5 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                        <span className="text-[11px] font-semibold text-slate-200 block mb-2">
                          Produtos mais vendidos
                        </span>
                        <div className="space-y-1.5">
                          {[
                            { name: 'Cerveja Heineken', count: 42, icon: '🍺' },
                            { name: 'Porção de Batata', count: 35, icon: '🍟' },
                            { name: 'Refrigerante Lata', count: 28, icon: '🥤' },
                            { name: 'Whisky Red Label', count: 24, icon: '🥃' },
                            { name: 'Água Mineral 500ml', count: 20, icon: '💧' },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-[10px] py-0.5 border-b border-slate-800/50 last:border-0"
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <span>{item.icon}</span>
                                <span className="truncate text-slate-300">
                                  {item.name}
                                </span>
                              </div>
                              <span className="font-bold text-white font-mono shrink-0 ml-1">
                                {item.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foreground Hardware Ecosystem Overlap: Tablet POS + Payment Terminal + Thermal Printer */}
              <div className="relative -mt-16 sm:-mt-20 md:-mt-24 pt-4 flex flex-wrap items-end justify-center sm:justify-end gap-3 sm:gap-4 px-2 pointer-events-auto">
                {/* 1. Touchscreen Tablet POS */}
                <div className="w-56 sm:w-64 bg-slate-950 p-2.5 rounded-xl border border-slate-700 shadow-2xl shadow-black/80 transform hover:-translate-y-1 transition-transform">
                  <div className="bg-slate-900 rounded-lg p-2 text-white">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
                      <span className="font-bold text-sky-400">PDV Touch</span>
                      <span className="text-slate-400">Mesa 04</span>
                    </div>
                    {/* Item Grid Mock */}
                    <div className="grid grid-cols-3 gap-1 my-2">
                      <div className="bg-blue-950/60 border border-blue-800/60 rounded p-1 text-center text-[9px]">
                        <span>🍺 Chopp</span>
                      </div>
                      <div className="bg-blue-950/60 border border-blue-800/60 rounded p-1 text-center text-[9px]">
                        <span>🥩 Picanha</span>
                      </div>
                      <div className="bg-blue-950/60 border border-blue-800/60 rounded p-1 text-center text-[9px]">
                        <span>🍟 Fritas</span>
                      </div>
                    </div>
                    {/* Checkout Button */}
                    <button
                      onClick={handleSimulatePrint}
                      className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-bold flex items-center justify-between px-2 shadow-sm transition-colors"
                    >
                      <span>Finalizar Pedido</span>
                      <span className="font-mono">R$ 89,90</span>
                    </button>
                  </div>
                </div>

                {/* 2. Smart POS Maquininha MeeAto */}
                <div className="w-28 sm:w-32 bg-slate-900 rounded-2xl p-2 border-2 border-slate-700 shadow-2xl flex flex-col items-center transform hover:-translate-y-1 transition-transform">
                  {/* Screen */}
                  <div className="w-full h-20 bg-slate-950 rounded-lg p-1.5 flex flex-col items-center justify-between border border-slate-800">
                    <Logo variant="connector" size="sm" className="scale-75 origin-top" />
                    <div className="flex items-center gap-1 text-[8px] text-emerald-400 font-mono">
                      <Radio className="w-2.5 h-2.5 animate-pulse" />
                      <span>APROXIME</span>
                    </div>
                    <span className="text-[9px] font-bold text-white font-mono">
                      R$ 89,90
                    </span>
                  </div>
                  {/* Keypad */}
                  <div className="grid grid-cols-3 gap-1 w-full mt-2 px-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'OK'].map((k, i) => (
                      <div
                        key={i}
                        className={`text-center py-0.5 text-[8px] rounded font-mono font-bold ${
                          k === 'OK'
                            ? 'bg-emerald-700 text-white'
                            : k === 'X'
                            ? 'bg-rose-700 text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {k}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Thermal Receipt Printer */}
                <div className="w-32 sm:w-36 bg-slate-900 rounded-xl p-2.5 border border-slate-700 shadow-2xl relative flex flex-col items-center">
                  <div className="w-full flex items-center justify-between text-[9px] text-slate-400 mb-1">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <Printer className="w-3 h-3 text-sky-400" /> MeeAto
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full mb-1" />

                  {/* Printed Receipt Paper Animation */}
                  <div
                    className={`w-full bg-amber-50 text-slate-900 p-2 rounded-t font-mono text-[8px] shadow transition-all duration-500 overflow-hidden ${
                      ticketPrinted ? 'h-24 opacity-100' : 'h-10 opacity-90'
                    }`}
                  >
                    <div className="text-center font-bold border-b border-dashed border-slate-400 pb-1">
                      MEEATO GESTÃO
                    </div>
                    <div className="py-1 leading-tight text-[7px]">
                      <div>Mesa 04 · Pedido #148</div>
                      <div>1x Chopp 500ml R$ 18,00</div>
                      <div>1x Picanha R$ 71,90</div>
                      <div className="font-bold mt-0.5">Total: R$ 89,90</div>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulatePrint}
                    className="mt-2 text-[9px] text-sky-400 hover:text-sky-300 underline font-medium"
                  >
                    {ticketPrinted ? 'Imprimindo via Connector...' : 'Testar Impressão'}
                  </button>
                </div>
              </div>

              {/* Handwritten Note Callout from Reference Image */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-10 z-20 pointer-events-none select-none">
                <div className="font-handwriting text-2xl md:text-3xl text-sky-300 font-bold -rotate-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Mais que um sistema,
                  <br />
                  um ecossistema completo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
