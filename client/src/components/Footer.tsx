export function Footer() {
    return (
      <footer className="bg-zinc-900 border-t border-zinc-700 mt-16 py-10 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-zinc-400 text-sm text-center mb-8">
            Entidades colaboradoras
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <span className="text-zinc-500 font-semibold text-lg">Cruz Roja España</span>
            <span className="text-zinc-500 font-semibold text-lg">Policía Nacional</span>
            <span className="text-zinc-500 font-semibold text-lg">Ayuntamiento de Madrid</span>
            <span className="text-zinc-500 font-semibold text-lg">Correos</span>
            <span className="text-zinc-500 font-semibold text-lg">Caritas</span>
          </div>
          <p className="text-zinc-600 text-xs text-center mt-10">
            © 2026 Samaritan — Devolviendo identidades perdidas
          </p>
        </div>
      </footer>
    )
  }