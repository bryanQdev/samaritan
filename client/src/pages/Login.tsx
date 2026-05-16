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
      <div className=" min-h-screen flex items-center justify-center">
        <p className="text-zinc-400">Cargando...</p>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/tablon" />
  }

  return (
    <div className="h-screen flex overflow-hidden">
  
      <div className="flex-1 flex flex-col justify-center px-16 py-8">
        <h1 className="logo-glow text-5xl font-bold mb-4">Samaritan</h1>
        <h2 className="text-white text-2xl font-bold mb-6 leading-tight">
          Recupera lo que perdiste.<br/>
          <span className="text-zinc-400 font-normal">Ayuda a otros a hacerlo también</span>
        </h2>
        <img
          src={documentosIA}
          alt="Documentos de identidad"
          className="w-full max-w-xl rounded-xl opacity-90 mb-8"
        />
        <div className="flex gap-12">
          <div>
            <p className="text-green-500 text-3xl font-bold">+2.400</p>
            <p className="text-zinc-500 text-sm">documentos recuperados</p>
          </div>
          <div>
            <p className="text-green-500 text-3xl font-bold">98%</p>
            <p className="text-zinc-500 text-sm">tasa de éxito</p>
          </div>
          <div>
            <p className="text-green-500 text-3xl font-bold">24h</p>
            <p className="text-zinc-500 text-sm">tiempo medio de respuesta</p>
          </div>
        </div>
      </div>
  
      <div className="w-px bg-zinc-800"/>
  
      <div className="w-[480px] flex items-center justify-center px-12">
        <div className="w-full border border-zinc-700/50 rounded-2xl p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <h3 className="text-white text-3xl font-bold mb-3">Entra a la plataforma</h3>
          <p className="text-zinc-500 text-sm mb-10">Rápido y seguro con tu cuenta de Google</p>
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