import { ArrowRight, Recycle, Bus } from 'lucide-react';
import ecoImg02 from '../assets/ecoImg02.png';

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12 w-full max-w-[1600px] mx-auto gap-16 xl:gap-24">
      <div className="flex-1 space-y-8 xl:max-w-2xl">
        <div className="flex items-center gap-2 text-green-500 font-medium text-sm">
          <LeafIcon />
          Sustentabilidade + Mobilidade
        </div>
        
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Transforme Sua <span className="text-green-500">Reciclagem</span> em <br/><span className="text-green-500">Créditos</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
          Junte materiais recicláveis, troque por créditos no EcoPass e use para pagar seu transporte público. Ideal para universitários e usuários de transporte.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a href="https://mobile-test-alpha.vercel.app/login" className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 font-medium transition-colors w-full sm:w-auto">
            Acessar Plataforma <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#como-funciona" className="px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium transition-colors w-full sm:w-auto text-center">
            Como Funciona
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-8 text-center sm:text-left">
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-green-500">500+</p>
            <p className="text-base text-gray-500 mt-2">Usuários</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-green-500">50+</p>
            <p className="text-base text-gray-500 mt-2">Pontos de Coleta</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-bold text-green-500">2.5t</p>
            <p className="text-base text-gray-500 mt-2">Material Reciclado</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full flex justify-end">
        <img 
          src={ecoImg02} 
          alt="Pessoas reciclando perto do transporte público" 
          className="w-full max-w-lg xl:max-w-2xl rounded-2xl"
        />
        
        <div className="absolute top-12 -left-4 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3">
          <div className="p-2 bg-green-50 text-green-500 rounded-lg">
            <Recycle className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Recicle</p>
            <p className="text-[10px] text-gray-500">+10 créditos</p>
          </div>
        </div>

        <div className="absolute bottom-12 -right-4 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3">
          <div className="p-2 bg-green-50 text-green-500 rounded-lg">
            <Bus className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Viaje</p>
            <p className="text-[10px] text-gray-500">-5 créditos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}
