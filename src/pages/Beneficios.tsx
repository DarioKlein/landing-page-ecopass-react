import { Navbar } from '../components/Navbar'
import { CTA } from '../components/CTA'
import { PiggyBank, Leaf, Zap, Award, MapPin, TrendingUp, Recycle, Users, Bus, Star, User } from 'lucide-react'
import { Footer } from '../components/Footer'

export function Beneficios() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="py-20 px-8 md:px-16 w-full max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Mais do que reciclagem, <span className="text-green-500">um novo estilo de vida</span>
          </h1>
          <p className="text-xl text-gray-600">
            Descubra como o EcoPass transforma suas atitudes diárias em economia real e impacto positivo para o planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <PiggyBank className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Economia Diária</h3>
            <p className="text-gray-600 leading-relaxed">
              Reduza significativamente seus gastos com transporte. Com o EcoPass, você troca materiais recicláveis por
              passagens, aliviando o orçamento universitário no final do mês.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Real</h3>
            <p className="text-gray-600 leading-relaxed">
              Você não está apenas reciclando, está evitando que toneladas de resíduos poluam sua cidade. Contribua
              ativamente para a redução da pegada de carbono.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Processo Ágil</h3>
            <p className="text-gray-600 leading-relaxed">
              Nada de burocracia. Escaneie seu QR code na máquina, insira os recicláveis e os créditos caem na sua conta
              em segundos, prontos para uso.
            </p>
          </div>
        </div>

        {/* Seção Impacto em Números */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Nosso Impacto em Números</h2>
            <p className="text-gray-500">Veja como nossa comunidade está fazendo a diferença para o planeta</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Recycle className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">2.5T</p>
              <p className="text-sm text-gray-500 font-medium">Material Reciclado</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Leaf className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">1.2T</p>
              <p className="text-sm text-gray-500 font-medium">CO₂ Economizado</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-sm text-gray-500 font-medium">Usuários Ativos</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Bus className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">10K+</p>
              <p className="text-sm text-gray-500 font-medium">Viagens Realizadas</p>
            </div>
          </div>
        </div>

        {/* Seção Depoimentos */}
        <div className="mt-32 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">O Que Nossos Usuários Dizem</h2>
            <p className="text-gray-500">Histórias reais de estudantes que estão transformando seus hábitos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 italic mb-8">
                "Economizo R$ 60 por mês no transporte e ainda ajudo o meio ambiente!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Maria Silva</p>
                  <p className="text-xs text-gray-500">Estudante UFRJ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 italic mb-8">
                "Super prático! Os pontos de coleta ficam perto da universidade."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">João Santos</p>
                  <p className="text-xs text-gray-500">Estudante UFMG</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 italic mb-8">"Adoro ver meu impacto ambiental crescendo a cada mês."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Ana Costa</p>
                  <p className="text-xs text-gray-500">Estudante USP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTA />

      <Footer />
    </div>
  )
}
