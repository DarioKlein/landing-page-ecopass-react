export function CTA() {
  return (
    <section className="bg-[#4ade80] py-16 px-8 md:px-16 w-full">
      <div className="max-w-6xl mx-auto text-center text-white space-y-8">
        <h2 className="text-4xl font-extrabold">Pronto para Começar?</h2>
        <p className="text-lg text-white/90">
          Junte-se a centenas de universitários que já estão economizando e ajudando o meio ambiente
        </p>
        <div className="flex items-center justify-center pt-4">
          <a href="https://mobile-test-alpha.vercel.app/login" className="px-8 py-3 bg-white text-[#4ade80] font-bold rounded-lg hover:bg-gray-50 transition-colors">
            Acessar Plataforma
          </a>
        </div>
      </div>
    </section>
  );
}
