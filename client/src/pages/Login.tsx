export function Login() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-green-500 text-6xl mb-6">&#10003;</div>
        <h1 className="text-white text-5xl font-bold mb-3">Samaritan</h1>
        <p className="text-zinc-400 text-lg mb-4">Ayudando a recuperar lo que importa</p>
        <p className="text-zinc-500 text-sm mb-12">
          Si encontraste un documento de identidad, publícalo aquí. 
          Su dueño podrá localizarlo y contactarte de forma segura.
        </p>

        <button className="flex items-center gap-3 bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors mx-auto mb-4">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continuar con Google
        </button>

        <p className="text-zinc-600 text-xs">
          Al continuar aceptas los términos de uso y la política de privacidad
        </p>
      </div>
    </div>
  )
}