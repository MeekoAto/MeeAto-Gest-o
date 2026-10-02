import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Store, Cpu, DollarSign, Headphones, Shield, Laptop } from 'lucide-react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
  onOpenTrial: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenTrial,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    {
      title: 'MeeAto Gestão',
      desc: 'Plataforma completa de gestão comercial para adegas, bares e varejo.',
      action: () => {
        onNavigate('gestao');
        onClose();
      },
      icon: Store,
      badge: 'Produto',
    },
    {
      title: 'MeeAto Connector',
      desc: 'Solução premium de comunicação com impressoras, maquininhas e leitores NFC.',
      action: () => {
        onNavigate('connector');
        onClose();
      },
      icon: Cpu,
      badge: 'Dispositivos',
    },
    {
      title: 'Soluções & Investimento',
      desc: 'Soluções adaptáveis, proposta personalizada e modelo sob medida.',
      action: () => {
        onNavigate('solucoes');
        onClose();
      },
      icon: DollarSign,
      badge: 'Soluções',
    },
    {
      title: 'Acesso & Implantação',
      desc: 'Entenda como funciona a disponibilização e implantação assistida do sistema.',
      action: () => {
        onNavigate('demonstracao');
        onClose();
      },
      icon: Laptop,
      badge: 'Acesso',
    },
    {
      title: 'Solicitar Demonstração',
      desc: 'Conheça o sistema na prática e receba uma demonstração adaptada ao seu comércio.',
      action: () => {
        onOpenTrial();
        onClose();
      },
      icon: Shield,
      badge: 'Demonstração',
    },
    {
      title: 'Suporte & WhatsApp',
      desc: 'Atendimento humanizado para configurações e dúvidas da sua operação.',
      action: () => {
        onNavigate('suporte');
        onClose();
      },
      icon: Headphones,
      badge: 'Suporte',
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.desc.toLowerCase().includes(query.toLowerCase()) ||
      i.badge.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por módulo, funcionalidade ou demonstração..."
            className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-left p-3 rounded-xl hover:bg-blue-50/70 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold bg-slate-100 group-hover:bg-blue-100 text-slate-600 group-hover:text-blue-700 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors shrink-0 ml-2" />
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              Nenhum resultado encontrado para &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navegar rápido pelo ecossistema MeeAto</span>
          <span>ESC para fechar</span>
        </div>
      </div>
    </div>
  );
};
