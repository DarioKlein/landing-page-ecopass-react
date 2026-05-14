import { Recycle, QrCode, Bus } from 'lucide-react'
import ecoImg01 from '../assets/ecoImg01.png'

export function HowItWorks() {
  return (
    <div className="w-full bg-white border-y border-gray-200">
      <section className="py-16 px-8 md:px-16 w-full max-w-[1600px] mx-auto" id="como-funciona">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Como Funciona o EcoPass</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Três passos simples para transformar sua atitude sustentável em mobilidade urbana
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-12">
          <div className="flex-1 bg-[#5fb963] p-8 rounded-[2rem] flex items-center justify-center">
            <img src={ecoImg01} alt="Processo do EcoPass" className="w-full max-w-lg xl:max-w-xl mx-auto" />
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100">
              <div className="p-3 bg-green-500 text-white rounded-xl">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Recicle</h3>
                <p className="text-gray-600 mb-2">
                  Colete materiais recicláveis como garrafas plásticas, latas de alumínio e papel
                </p>
                <p className="text-sm font-medium text-green-500">
                  Aceito: Plástico, Papel, Vidro, Metal e Eletrônicos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100">
              <div className="p-3 bg-green-500 text-white rounded-xl">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Troque</h3>
                <p className="text-gray-600 mb-2">
                  Vá até um ponto de coleta e apresente seu QR Code para trocar por créditos
                </p>
                <p className="text-sm font-medium text-green-500">Valores variam por material</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100">
              <div className="p-3 bg-green-500 text-white rounded-xl">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Viaje</h3>
                <p className="text-gray-600 mb-2">
                  Use seus créditos para pagar passagens de ônibus e outros transportes públicos
                </p>
                <p className="text-sm font-medium text-green-500">1 viagem = 5 créditos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 max-w-[280px] sm:max-w-none mx-auto">
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-5xl lg:text-6xl font-bold text-green-500 mb-2 lg:mb-4">10</p>
            <p className="text-base text-gray-500 font-medium">Créditos por kg de PET</p>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-5xl lg:text-6xl font-bold text-green-500 mb-2 lg:mb-4">15</p>
            <p className="text-base text-gray-500 font-medium">Créditos por kg de alumínio</p>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-5xl lg:text-6xl font-bold text-green-500 mb-2 lg:mb-4">5</p>
            <p className="text-base text-gray-500 font-medium">Créditos por viagem</p>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
            <p className="text-4xl lg:text-5xl font-bold text-green-500 mb-2 lg:mb-4">R$ 2,50</p>
            <p className="text-base text-gray-500 font-medium">Economia por viagem</p>
          </div>
        </div>
      </section>
    </div>
  )
}
