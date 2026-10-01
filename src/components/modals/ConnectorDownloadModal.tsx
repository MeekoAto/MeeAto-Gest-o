import React, { useState } from 'react';
import {
  X,
  Download,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Printer,
  Radio,
  CreditCard,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

interface ConnectorDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOS?: string;
}

export const ConnectorDownloadModal: React.FC<ConnectorDownloadModalProps> = ({
  isOpen,
  onClose,
  selectedOS = 'Windows 10 / 11 (64-bit)',
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);
  const sampleToken = 'MEEATO-CONN-7842-SECURE';

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate real download trigger
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob(['MeeAto Connector v2.4.2 Installer Package binary'], {
        type: 'text/plain',
      });
      element.href = URL.createObjectURL(file);
      element.download = 'MeeAto-Connector-Setup-v2.4.2.exe';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 400);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(sampleToken);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Download MeeAto Connector
            </h3>
            <span className="text-xs text-blue-600 font-semibold font-mono">
              Versão 2.4.2 · Build Oficial
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
          O instalador configurará o serviço local em segundo plano para rotear impressões, leituras de comandas e pagamentos com máxima velocidade.
        </p>

        {/* Download Box */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-5 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Pacote selecionado:</span>
            <span className="font-bold text-slate-800">{selectedOS}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Segurança:</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Assinado Digitalmente
            </span>
          </div>

          <button
            onClick={handleDownload}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>
              {downloadStarted ? 'Baixando MeeAto-Connector-Setup.exe...' : 'Iniciar Download'}
            </span>
          </button>
        </div>

        {/* Token box for pairing */}
        <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl border border-slate-800 space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">
              Seu Token de Pareamento Local:
            </span>
            <span className="text-[10px] bg-blue-500/20 text-sky-400 px-1.5 py-0.5 rounded font-mono">
              Auto-gerado
            </span>
          </div>
          <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-xs">
            <span className="text-sky-300 font-bold">{sampleToken}</span>
            <button
              onClick={handleCopyToken}
              className="p-1.5 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Copiar token"
            >
              {copiedToken ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="font-sans">Copiar</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            Cole este token na tela de configuração inicial do Connector após a instalação.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium underline"
          >
            Fechar janela
          </button>
        </div>
      </div>
    </div>
  );
};
