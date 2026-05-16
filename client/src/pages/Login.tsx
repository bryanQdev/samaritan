import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import documentosIA from '../assets/documentosIA.png'

export function Login() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/tablon')
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-400">Cargando...</p>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/tablon" />
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="hidden md:flex flex-1 flex-col justify-center px-16 py-12">
        <h1 className="logo-glow text-5xl font-bold mb-4">Samaritan</h1>
        <h2 className="text-white text-2xl font-bold mb-3 leading-tight">
          Recupera lo que perdiste.<br/>
          <span className="text-zinc-400 font-normal">Ayuda a otros a hacerlo también</span>
        </h2>
        <img
          src={documentosIA}
          alt="Documentos de identidad"
          className="w-full max-w-xl rounded-xl opacity-90 my-6"
        />
        <div className="flex gap-8">
          <div>
            <p className="text-green-500 text-2xl font-bold">+2.400</p>
            <p className="text-zinc-500 text-xs">documentos recuperados</p>
          </div>
          <div>
            <p className="text-green-500 text-2xl font-bold">98%</p>
            <p className="text-zinc-500 text-xs">tasa de éxito</p>
          </div>
          <div>
            <p className="text-green-500 text-2xl font-bold">24h</p>
            <p className="text-zinc-500 text-xs">tiempo medio de respuesta</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-px bg-zinc-800"/>

      <div className="w-full md:w-[480px] flex flex-col justify-center px-8 md:px-12 py-12">
        <div className="md:hidden text-center mb-8">
          <h1 className="logo-glow text-4xl font-bold mb-2">Samaritan</h1>
          <p className="text-zinc-400">Recupera lo que perdiste...</p>
        </div>
        <div className="border border-zinc-700/50 rounded-2xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Entra a la plataforma</h3>
          <p className="text-zinc-500 text-sm mb-8">Rápido y seguro con tu cuenta de Google</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-zinc-900 px-6 py-4 rounded-lg font-semibold hover:bg-zinc-100 cursor-pointer mb-6 btn-google text-lg"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6"/>
            Continuar con Google
          </button>
          <p className="text-zinc-600 text-xs text-center">
            Al continuar aceptas los términos de uso y la política de privacidad
          </p>
        </div>
      </div>

    </div>
  )
}