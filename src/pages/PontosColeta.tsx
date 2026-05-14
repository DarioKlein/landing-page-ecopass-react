import { Navbar } from '../components/Navbar'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { MapPin, Clock, Navigation, CheckCircle2 } from 'lucide-react'

export function PontosColeta() {
  const pontos = [
    {
      nome: 'Cooperativa Recicla Garça',
      local: 'Rua Walter Alves de Souza, 71 - Distrito Industrial',
      horario: 'Segunda a Sexta: 08h às 17h',
      status: 'Disponível',
    },
    {
      nome: 'FATEC Garça',
      local: 'Avenida Presidente Vargas, 2331',
      horario: 'Segunda a Sexta: 07h às 22h',
      status: 'Disponível',
    },
    {
      nome: 'SAAE - Água e Esgoto',
      local: 'Rua João Bento, 40 - Centro',
      horario: 'Segunda a Sexta: 08h às 16h',
      status: 'Disponível',
    },
    {
      nome: 'SAMA - Meio Ambiente',
      local: 'Bosque Municipal - Rua Vital Soares',
      horario: 'Segunda a Sexta: 08h às 17h',
      status: 'Disponível',
    },
    {
      nome: 'Prefeitura Municipal',
      local: 'Praça Hilmar Machado de Oliveira, 102 - Centro',
      horario: 'Segunda a Sexta: 08h às 16h',
      status: 'Disponível',
    },
    {
      nome: 'Praça Rui Barbosa (Centro)',
      local: 'Próximo à Concha Acústica',
      horario: 'Todos os dias: 24h',
      status: 'Manutenção',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="py-20 px-8 md:px-16 w-full max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Onde reciclar com o <span className="text-green-500">EcoPass?</span>
          </h1>
          <p className="text-xl text-gray-600">
            Nossas máquinas inteligentes estão localizadas nos lugares que já fazem parte da sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa Ilustrativo */}
          <div className="lg:col-span-1 bg-green-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-green-100 min-h-[400px]">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-green-500/30">
              <MapPin className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Acesse a plataforma para navegar</h3>
            <p className="text-green-800/80 mb-8">
              Na plataforma EcoPass você visualiza o mapa em tempo real e encontra a máquina mais próxima de você com
              apenas um toque.
            </p>
            <a
              href="https://mobile-test-alpha.vercel.app/"
              className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-green-100 transition-colors shadow-sm"
            >
              <Navigation className="w-5 h-5" />
              Ver no Mapa Interativo
            </a>
          </div>

          {/* Lista de Pontos */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pontos.map((ponto, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {ponto.status === 'Disponível' ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Online
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      Manutenção
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{ponto.nome}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{ponto.local}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-auto">
                  <Clock className="w-4 h-4 text-gray-400" />
                  {ponto.horario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção Como Usar */}
        <div className="mt-32 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Como Usar os Pontos de Coleta</h2>
            <p className="text-gray-500">Processo simples e rápido para transformar sua reciclagem em créditos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-bold text-2xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Separe os Materiais</h3>
              <p className="text-gray-500">Colete e separe os materiais recicláveis aceitos no ponto escolhido</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-bold text-2xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vá ao Ponto</h3>
              <p className="text-gray-500">Leve seus materiais ao ponto de coleta e apresente seu QR Code</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-bold text-2xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Receba Créditos</h3>
              <p className="text-gray-500">Os créditos são automaticamente adicionados à sua conta EcoPass</p>
            </div>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  )
}
