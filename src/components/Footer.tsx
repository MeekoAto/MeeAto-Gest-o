import React from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'MeeAto Gestão', href: '#gestao' },
    { name: 'Connector', href: '#connector' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Demonstração', href: '#demonstracao' },
    { name: 'Suporte', href: '#suporte' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#050b18] text-slate-400 text-xs border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Links, Social & Handwritten note */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Social & Handwritten phrase */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Icons (WebAto Studio) */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/webato_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram WebAto Studio"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/WebAtoStudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook WebAto Studio"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/webatostudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn WebAto Studio"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Handwritten Phrase from Reference Image */}
            <div className="text-right select-none">
              <span className="font-handwriting text-xl text-sky-400/90 font-bold block -rotate-3">
                Juntos por comércios mais fortes!
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Legal & Copyright with WebAto Studio credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} MeeAto. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>
              Desenvolvido por{' '}
              <a
                href="https://webato-studio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors underline underline-offset-2 font-medium"
              >
                WebAto Studio
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Termos de Uso
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-900 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
