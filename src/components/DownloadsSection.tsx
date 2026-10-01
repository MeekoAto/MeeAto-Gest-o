import React, { useState } from 'react';
import {
  Download,
  Monitor,
  Smartphone,
  Cpu,
  CheckCircle2,
  FileCode,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Laptop,
} from 'lucide-react';

interface DownloadsSectionProps {
  onDownloadRequested: (os: string) => void;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({
  onDownloadRequested,
}) => {
  const [activeOS, setActiveOS] = useState<'windows' | 'linux' | 'android'>('windows');

  const downloads = [
    {
      id: 'windows',
      name: 'Windows 10 / 11 (64-bit)',
      filename: 'MeeAto-Connector-Setup-2.4.2.exe',
      size: '42.8 MB',
      version: 'v2.4.2 (Estável)',
      date: 'Atualizado em Março/2026',
      desc: 'Instalador padrão para computadores de caixa, totens e servidores locais.',
      icon: Monitor,
      requirements: 'Windows 10 ou 11 (64-bit), 200MB livres, USB/Rede.',
    },
    {
      id: 'linux',
      name: 'Linux (Debian / Ubuntu)',
      filename: 'meeato-connector_2.4.2_amd64.deb',
      size: '38.4 MB',
      version: 'v2.4.2 (Estável)',
      date: 'Atualizado em Março/2026',
      desc: 'Pacote .deb e binário compatível com distros Debian, Ubuntu e derivadas.',
      icon: Cpu,
      requirements: 'glibc >= 2.31, systemd para serviço em segundo plano.',
    },
    {
      id: 'android',
      name: 'Smart POS (Android APK)',
      filename: 'MeeAto-Connector-POS-2.4.2.apk',
      size: '18.1 MB',
      version: 'v2.4.2 (Estável)',
      date: 'Atualizado em Março/2026',
      desc: 'APK homologado para terminais inteligentes Stone, PagBank, Cielo e Elgin.',
      icon: Smartphone,
      requirements: 'Android 7.0+, Suporte a NFC nativo do terminal.',
    },
  ];

  return (
    <section id="downloads" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Downloads & Integrações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Baixe o MeeAto Connector
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Instale o módulo de comunicação e conecte impressoras, leitores NFC e terminais de pagamento ao seu MeeAto Gestão em menos de 2 minutos.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {downloads.map((item) => {
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
                    <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {item.version}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600 py-3 border-y border-slate-100 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Arquivo:</span>
                      <span className="truncate max-w-[170px] text-slate-700">{item.filename}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tamanho:</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    onClick={() => onDownloadRequested(item.name)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {item.id === 'windows' ? '.EXE' : item.id === 'linux' ? '.DEB' : '.APK'}</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    {item.requirements}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Step Installation Flow */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Como funciona a instalação do MeeAto Connector</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Baixe e execute</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Faça o download do instalador correspondente ao sistema operacional do seu ponto de venda (PDV).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Conecte os dispositivos</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ligue sua impressora térmica, maquininha ou leitor NFC. O Connector detecta as portas ativas automaticamente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Vincule ao MeeAto Gestão</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Copie o Token de Pareamento exibido na tela do seu MeeAto Gestão e cole no Connector. Pronto!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
