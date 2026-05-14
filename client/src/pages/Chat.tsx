import { NavBar } from '../components/NavBar'

export function Chat() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <NavBar />
      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-white text-3xl font-bold mb-8">Chat</h1>
        <div className="bg-zinc-800 rounded-xl p-6 min-h-96 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-zinc-400 text-center text-sm">Inicio de la conversación</p>
          </div>
          <div className="flex gap-2 mt-4">
            <input 
              type="text" 
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-zinc-700 text-white px-4 py-2 rounded-lg"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}