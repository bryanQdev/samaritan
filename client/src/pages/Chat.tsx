import { NavBar } from '../components/NavBar'

export function Chat() {
  const messages = [
    { id: '1', text: 'Hola, creo que encontré tu DNI en el metro de Madrid.', mine: false },
    { id: '2', text: '¡Hola! Sí, lo perdí ayer. ¿Dónde lo encontraste exactamente?', mine: true },
    { id: '3', text: 'En la línea 6, estación Laguna. Lo entregué en la oficina de objetos perdidos.', mine: false },
    { id: '4', text: 'Muchas gracias, voy a ir a recogerlo hoy mismo.', mine: true },
  ]

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="border-b border-zinc-700 px-8 py-4">
        <NavBar />
      </div>
      <div className="max-w-lg mx-auto px-8 py-10">
        <h1 className="text-white text-2xl font-bold mb-6">Conversación</h1>
        <div className="bg-zinc-800 rounded-xl p-6 min-h-96 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-zinc-500 text-center text-xs mb-2">Inicio de la conversación</p>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.mine ? 'justify-end' : 'justify-start'}`}>
                <span className={`px-4 py-2 rounded-xl text-sm max-w-xs ${msg.mine ? 'bg-green-500 text-white' : 'bg-zinc-700 text-zinc-100'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-6">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-zinc-700 text-white placeholder-zinc-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}