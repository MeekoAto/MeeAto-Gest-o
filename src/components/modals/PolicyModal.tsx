import React from 'react';
import { X, Shield } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150 text-slate-900 max-h-[85vh] flex flex-col"
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
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso do Ecossistema MeeAto'}
            </h3>
            <span className="text-xs text-slate-500">Última atualização: Março de 2026</span>
          </div>
        </div>

        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 pr-2 leading-relaxed border-y border-slate-100 py-4 my-2">
          {isPrivacy ? (
            <>
              <p>
                A <strong>MeeAto Tecnologia</strong> preza pela segurança, confidencialidade e integridade dos dados dos estabelecimentos comerciais e de seus respectivos clientes finais, em conformidade integral com a LGPD (Lei Geral de Proteção de Dados - Lei 13.709/2018).
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Coleta e Finalidade dos Dados</h4>
              <p>
                Os dados coletados em nossos formulários e transações no sistema MeeAto Gestão destinam-se exclusivamente à correta operação de frente de caixa (PDV), emissão de cupons fiscais (quando contratado), controle de estoque e autenticação do MeeAto Connector.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Comunicação Segura do MeeAto Connector</h4>
              <p>
                O software MeeAto Connector opera estritamente em rede local (Loopback/LAN), transmitindo comandos para impressoras, terminais de pagamento e leitores NFC com criptografia de ponta a ponta. Dados sensíveis de cartões não trafegam e não são armazenados em nossos servidores.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Armazenamento e Backups</h4>
              <p>
                Todos os registros comerciais são replicados com redundância e backups automáticos criptografados em nuvem.
              </p>
            </>
          ) : (
            <>
              <p>
                Estes Termos de Uso regem o acesso aos produtos <strong>MeeAto Gestão</strong> e <strong>MeeAto Connector</strong>.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Licenciamento de Uso</h4>
              <p>
                A adesão aos planos do ecossistema MeeAto confere uma licença de uso intransferível de software no modelo SaaS (Software como Serviço). A contratação não impõe carência ou fidelidade forçada.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Período de Teste Gratuito</h4>
              <p>
                O período de teste gratuito de 14 dias permite a utilização irrestrita das funcionalidades do plano escolhido, sem ônus e sem necessidade de cadastro de cartão de crédito.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Compatibilidade de Dispositivos</h4>
              <p>
                O MeeAto Connector oferece compatibilidade com os principais modelos de impressoras térmicas ESC/POS, leitores NFC 13.56 MHz e terminais homologados do mercado brasileiro.
              </p>
            </>
          )}
        </div>

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
