import { Sprout, DollarSign, Smartphone } from 'lucide-react';

export function Benefits() {
  return (
    <div className="w-full bg-[#fafafa]">
      <section className="py-16 px-8 md:px-16 w-full max-w-[1600px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Por Que Escolher o EcoPass?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
            <Sprout className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Sustentável</h3>
          <p className="text-gray-500">Contribua para um meio ambiente mais limpo e ganhe recompensas</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 mb-6">
            <DollarSign className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Econômico</h3>
          <p className="text-gray-500">Economize dinheiro no transporte público todos os dias</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Prático</h3>
          <p className="text-gray-500">Interface simples e pontos de coleta próximos às universidades</p>
        </div>
      </div>
      </section>
    </div>
  );
}
