import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl font-bold mb-4">404</h1>
      <p className="text-zinc-400 text-xl mb-8">
        Hemos encontrado muchas cosas, pero esta página no 😄
      </p>
      <button 
        onClick={() => navigate('/tablon')}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Volver al tablón
      </button>
    </div>
  )
}