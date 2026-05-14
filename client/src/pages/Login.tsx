export function Login() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-2">Samaritan</h1>
      <p className="text-zinc-400 text-lg mb-12">Ayudando a recuperar lo que importa</p>
      
      <button className="flex items-center gap-3 bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        Continuar con Google
      </button>
    </div>
  )
}