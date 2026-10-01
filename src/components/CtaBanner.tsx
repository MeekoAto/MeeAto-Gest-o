import React from 'react';
import { Logo } from './common/Logo';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
  return (
    <section className="bg-[#070e1e] text-white py-14 sm:py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Brand Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <Logo variant="gestao" size="lg" />
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Tecnologia que impulsiona o seu negócio.
            </p>
          </div>

          {/* Highlights / Stats as shown in reference */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                +500
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Comércios atendidos
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                +50 mil
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Vendas processadas por dia
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                98%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Satisfação dos clientes
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenTrial}
              className="px-7 py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all flex items-center gap-2 group"
            >
              <span>Quero testar agora</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
